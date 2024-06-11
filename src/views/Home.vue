<template>
  <div class="container-fluid banner py-5">
  <div class="container pt-3 pb-4">
    <h1 class="text-center">'সিলেটি নিকাহ'</h1>
    <p class="lead text-center">ইসলামিক শরীয়াহ ভিত্তিক পরিচালিত সিলেট বিভাগের দ্বীনদার জীবনসঙ্গী খোঁজার নির্ভরযোগ্য মাধ্যম</p>

    <div class="alert alert-primary text-center" role="alert">
      আপনার বায়োডাটা সম্পূর্ণ বিনামূল্যে জমা দিন
    </div>
    <div class="d-grid gap-2 col-12 col-sm-10 col-md-6 mx-auto pt-3">  
      <router-link class="btn btn-primary" :to="targetRoute" >বায়োডাটা জমা দিন </router-link>
      <router-link class="btn btn-primary" :to="{name: 'Bio' }">বায়োডাটা দেখুন</router-link>
    </div>

  </div>
</div>
</template>
<script setup>
import {useAuthStore} from "@/stores/auth";
import {storeToRefs} from "pinia";
import { computed } from 'vue';

const authStore = useAuthStore();
const { authenticated, isVerified } = storeToRefs(authStore);

const targetRoute = computed(() => {
  if (authenticated.value) {
    return isVerified.value ? { name: 'Profile' } : { name: 'Dashboard' };
  } else {
    return { name: 'Login' };
  }
});

</script>
<script>

</script>
<style scoped>
.banner {
    background: url("../assets/images/14.jpg") no-repeat;
    /*height: 100vh; */
    /*height: 800px;*/
    /*height: 1178px;*/
    background-size: 100% 100%;
    /*background-size: cover;*/
    background-position: center;
    background-attachment: fixed;
  }
</style>