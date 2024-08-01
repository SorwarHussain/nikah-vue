<template>
	<div class="bg-light">
	  <nav class="container navbar navbar-expand-xl navbar-light bg-light">
		<router-link class="navbar-brand" to="/">
		  <img src="../assets/images/logo_5.png" alt="logo" />
		</router-link>
		<button
		  type="button"
		  class="navbar-toggler"
		  data-toggle="collapse"
		  data-target="#navbarCollapse"
		>
		  <span class="navbar-toggler-icon"></span>
		</button>
		<!-- Collection of nav links, forms, and other content for toggling -->
		<div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
		  <div class="navbar-nav mx-auto">
			<router-link class="nav-item nav-link active" to="/">Home</router-link>
			<router-link class="nav-item nav-link" :to="{ name: 'Bio' }">
			  বায়োডাটা
			</router-link>
			<router-link class="nav-item nav-link active" :to="{ name: 'Sadakah' }">সাদাকাহ</router-link>
			<router-link class="nav-item nav-link active" :to="{ name: 'Contact' }">যোগাযোগ</router-link>
		  </div>
		</div>
  
		<div id="navbarCollapse" class="collapse navbar-collapse justify-content-end">
		  <div class="nav-item dropdown">
			<template v-if="authenticated">
			  <a
				href="#"
				data-toggle="dropdown"
				class="nav-item nav-link dropdown-toggle user-action"
			  >
				<i class="fas fa-user-circle"></i> {{ user.name }}
				<b class="caret"></b>
			  </a>
			  <div v-if="!isVerified" class="dropdown-menu">
				<router-link class="dropdown-item" :to="{ name: 'Dashboard' }">
				  <i class="fab fa-slack"></i>&ensp; Dashboard
				</router-link>
				<button @click="handleLogout" class="dropdown-item">
				  <img src="../assets/images/turn-off.png" alt="" />Logout
				</button>
			  </div>
			  <div v-else class="dropdown-menu">
				<router-link
				  class="dropdown-item" v-if="Profid"
				  :to="{ name: 'BioDetails', params: { id: Profid   } }"
				>
				  <i class="fas fa-user-alt"></i>&ensp; Profile
				</router-link>
				<router-link
				  class="dropdown-item"
				  :to="{ name: 'Profile' }"
				>
				  <i class="fas fa-user-edit"></i>&ensp;
				  <span v-if="Profid"> Edit Profile</span>
				  <span v-else> Create Profile</span>
				</router-link>
				<router-link
				  class="dropdown-item"
				  :to="{ name: 'Wishlist' }"
				>
				  <i class="far fa-heart"></i>&ensp;পছন্দের তালিকা
				</router-link>
				<!--<a href="#" class="dropdown-item">
				  <i class="far fa-heart"></i>&ensp;আমার ক্রয়সমূহ
				</a>
				<a href="#" class="dropdown-item">
				  <i class="fa fa-sliders"></i>&ensp; Settings
				</a>-->
				<div class="divider dropdown-divider"></div>
				<button @click="handleLogout" class="dropdown-item">
				  <img src="../assets/images/turn-off.png" alt="" />Logout
				</button>
				<!--admin panel-->
				<div class="dropdown-divider"></div>
				<a
				  href=""
				  class="dropdown-item dropdown-toggle"
				  data-toggle="dropdown"
				  v-if="user.is_admin"
				>
				  Admin Panel
				</a>
				<div class="dropdown-menu" v-if="user.is_admin">
				  <router-link class="dropdown-item" to="/admin/profiles">Profiles</router-link>
				  <router-link class="dropdown-item" to="/admin/donates">Donates</router-link>
				  <router-link class="dropdown-item" to="/admin/users">Users</router-link>
				</div>
			  </div>
			</template>
			<template v-else>
			  <router-link to="/login" class="nav-item nav-link" style="font-weight: 900;">
				Login
			  </router-link>
			</template>
		  </div>
		</div>
	  </nav>
	</div>
	<router-view />
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores/auth';
  import { useProfileStore } from '@/stores/profile';
  import { storeToRefs } from 'pinia';
  import axios from "axios";

  
  const {logout} = useAuthStore();
  const Profid = ref(0);
  const router = useRouter();
  const { authenticated, user, isVerified } = storeToRefs(useAuthStore());
  
  const handleLogout = () => {
   logout().then(() => {
     router.push({name: 'Home'})
   })
  }
  
  onMounted(async () => {
	const response = await axios.get(`/profile`);
	Profid.value = response.data.id;
	//console.log(response.data);
	//console.log(Profid.value);
  });
  </script>
  
  <style scoped>
  @import "@/assets/css/navbar.css";
  </style>
  

