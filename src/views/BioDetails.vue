<template>
    <div class="container pt-5">
		<div v-if="bio">
		<div class="main-body">
			<div class="row">
				<div class="col-lg-4">
					<div class="card">
						<div class="card-body">
							<div class="d-flex flex-column align-items-center text-center">
								<img v-if=" bio.bioType=='পাত্রের বায়োডাটা' " src="../assets/images/Avatar_man.jpg" alt="Profile Image" class="rounded-circle p-1 color" width="110">
								<img v-else src="../assets/images/Avatar_woman.jpg" alt="Profile Image" class="rounded-circle p-1 color" width="110">
								<div class="mt-3">
									<h4>Biodata No:{{ bio.id }}</h4>											
								</div>
							</div>
							<hr class="my-4">
							<table class="table table-bordered text-center mt-4">
							<tbody>
							<tr>
								<th>বায়োডাটার ধরন</th>
								<td>{{ bio.bioType }}</td>
							</tr>
							<tr>
								<th>বৈবাহিক অবস্থা</th>       
								<td>{{ bio.maritalStatus }}</td>
							</tr>
							<tr>
								<th>জন্মসন</th>        
								<td>{{ bio.birthData }}</td>
							</tr>							
							<tr>
								<th>উচ্চতা</th>       
								<td>{{ bio.height }}</td>
							</tr>
							<tr>
								<th>গাত্রবর্ণ</th>        
								<td>{{ bio.skinColor }}</td>
							</tr>							
							<tr>
								<th>ওজন</th>        
								<td>{{ bio.weight }}</td>
							</tr>
							<tr>
								<th>রক্তের গ্রুপ</th>        
								<td>{{ bio.blood }}</td>
							</tr>
							</tbody>
							</table>
							<div class="d-flex flex-column align-items-center text-center">
								<div class="mt-3">
									<router-link :to="{name: 'Login' }" v-if="!authenticated" class="btn btn-outline-danger btn-sm">
										<i class='fas fa-heart'></i>
									</router-link> 
									<router-link :to="{name: 'Dashboard' }" v-else-if="!isVerified" class="btn btn-outline-danger btn-sm">
										<i class='fas fa-heart'></i>
									</router-link> 
									<button @click="toggleWishlist(bio.id)" v-else-if="!useWishStore().isInWishlist(bio.id)"  class="btn btn-outline-danger btn-sm">
										<i :class="[useWishStore().isInWishlist(bio.id) ? 'fas' : 'far', 'fa-heart']"></i>
									</button>
									<button @click="toggleWishlist(bio.id)" v-else  class="btn btn-danger btn-sm">
										<i :class="[useWishStore().isInWishlist(bio.id) ? 'fas' : 'far', 'fa-heart']"></i>
									</button>
									<!--<button class="btn btn-outline-danger"><i class="far fa-heart"></i></button>-->									
								</div>
							</div>												
						</div>
					</div>
				</div>
				<div class="col-lg-8">
					<div class="card">
						<div class="card-body">
							<h5 class="text-center text-white p-2">ঠিকানা</h5>
							<table class="table table-striped table-bordered">
								<tbody>
								<tr>
									<th>স্থায়ী ঠিকানা</th>
									<td>{{ bio.permAddress }}</td>
								</tr>
								<tr>
									<th>বর্তমান ঠিকানা</th>       
									<td>{{ bio.preAddress }}</td>
								</tr>		
								</tbody>
							</table>

						</div>
					</div>
					<div class="row">
						<div class="col-sm-12">
							<div class="card">
							<div class="card-body">
							<h5 class="text-center text-white p-2">শিক্ষাগত যোগ্যতা</h5>
							<table class="table table-striped">
								<tbody>
								<tr>
									<th>শিক্ষাগত যোগ্যতা </th>
									<td>{{ bio.education }}</td>
								</tr>													
								</tbody>
							</table>

							</div>
							</div>
						</div>
					</div>
                    <div class="row">
						<div class="col-sm-12">
							<div class="card">
								<div class="card-body">
							<h5 class="text-center text-white p-2">পারিবারিক তথ্য</h5>
							<table class="table table-striped table-bordered">
								<tbody>
								<tr>
									<th>পিতার পেশার বিবরণ</th>
									<td>{{ bio.fatherOccupation }}</td>
								</tr>
								<tr>
									<th>মাতার পেশার বিবরণ</th>       
									<td>{{bio.motherOccupation}}</td>
								</tr>
								<tr>
									<th>ভাই কয়জন? </th>        
									<td>{{ bio.brotherNum}}</td>
								</tr>
								<tr v-if="bio.brotherDetails">
									<th>ভাই কয়জন? </th>        
									<td>{{ bio.brotherDetails}}</td>
								</tr>
								<tr>
									<th>বোন কয়জন? </th>        
									<td>{{ bio.brotherNum}}</td>
								</tr>
								<tr v-if="bio.sisterDetails">
									<th>ভাই কয়জন? </th>        
									<td>{{ bio.sisterDetails}}</td>
								</tr>
								<tr>
									<th>চাচা মামাদের সম্পর্কে তথ্য </th>        
									<td>{{ bio.uncle}}</td>
								</tr>
								<tr>
									<th>পারিবারিক অর্থনৈতিক অবস্থা </th>        
									<td>{{ bio.familyStatus}}</td>
								</tr>
								<tr>
									<th>পরিবারের দ্বীনি ও অন্যান্য তথ্য </th>        
									<td>{{ bio.familyDeen}}</td>
								</tr>
								</tbody>
							</table>

						</div>
							</div>
						</div>
					</div>
	<!--যোগাযোগ-->
			<div class="row pb-2">
            <div class="col-sm-12">
              <div class="card">
                <div class="card-body">
              <h5 class="text-center text-white p-2">যোগাযোগ</h5>
				<div class="text-center pt-4" v-if="authenticated">
					<button type="button" @:click=" clickShow =! clickShow " class="btn mb-2" id="color" v-if="isVerified">যোগাযোগের তথ্য দেখুন</button>
					<router-link v-else class="btn mb-2" id="color" :to="{name: 'Dashboard' }"><i class="fab fa-slack"></i>&ensp; যোগাযোগের তথ্য দেখুন</router-link>
				</div>
				<div class="text-center pt-4" v-else>
					<router-link class="btn mb-2" id="color" :to="{name: 'Login' }"><i class="fab fa-slack"></i>&ensp; যোগাযোগের তথ্য দেখুন</router-link>
				</div>
				<div v-show="clickShow" v-if="isVerified && authenticated">
              	 <table class="table table-striped">
                <tbody>
                  <tr>
                    <th>
					<span v-if=" bio.bioType=='পাত্রের বায়োডাটা' ">পাত্রের</span>
                      
                    <span v-else>পাত্রীর</span>                     
                     
                    নাম
                    </th>
                    <td>{{bio.name}}</td>
                 </tr>
                    <tr>
                        <th>অভিভাবকের মোবাইল নাম্বার</th>
                        <td>{{bio.guardianNum}}</td>
                    </tr>
                    <tr>
                      <th>অভিভাবকের সাথে সম্পর্ক</th>
                      <td>{{bio.guardian}}</td>
                  </tr>
                  <tr>
                    <th>বায়োডাটা গ্রহণের ই-মেইল এড্রেস</th>
                    <td>{{bio.email}}</td>
                  </tr>
                </tbody>
             	 </table>
			  </div>
            </div>
              </div>
            </div>
           </div>
			</div>
			</div>
		</div>
	</div>
	<div v-else>
    <p>Loading biodata details...</p>
  </div>
	</div>
  
  </template>
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import { useAuthStore } from '@/stores/auth';
  import { useWishStore } from '@/stores/wishlist';
  import { storeToRefs } from 'pinia';
  import { useRoute } from 'vue-router';
  
  const { authenticated, user, isVerified } = storeToRefs(useAuthStore());

  const bio = ref(null);
  const clickShow = ref(false);
  
  const route = useRoute();
  
  const id = ref(route.params.id);
  
  const fetchBiodata = async (id) => {
	try {
	  const response = await axios.get(`/biodata/${id}`);
	  bio.value = response.data;
	} catch (error) {
	  console.error('Error fetching biodata:', error.message);
	}
  };
  const toggleWishlist=async(id)=> {
      const wishstore = useWishStore();
     // console.log(id);
     try {
        if (wishstore.isInWishlist(id)) {
          await wishstore.removeFromWishlist(id);
        } else {
          await wishstore.addToWishlist(id);
        }
      } catch (error) {
        console.error(error);
      } 
    };
  // Fetch the biodata when the component is mounted
  onMounted(() => {
	if (id.value) {
	  fetchBiodata(id.value);
	}
	const wishstore = useWishStore();
    wishstore.fetchWishlist();
  });
  </script>  
  <style scoped>
  @import "@/assets/css/BioDetails.css";
  </style>