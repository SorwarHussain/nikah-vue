<template>
    <div class="container mt-5 mb-5">
      <h2 class="text-center mb-4">পছন্দের তালিকা</h2>
      <div v-if="wishlist.length === 0" class="alert alert-info" role="alert">
        Your wishlist is empty.
      </div>
      <table v-if="wishlist.length > 0" class="table table-striped table-hover table-bordered text-center">
        <thead class="thead-light">
          <tr>
            <th scope="col">ক্র.নং</th>
            <th scope="col">বায়োডাটা নাম্বার</th>
            <th scope="col">এ্যাকশন</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(profileId, index) in wishlist" :key="profileId">
            <th scope="row">{{ index + 1 }}</th>          
            <td>
                <router-link :to="{ name: 'BioDetails', params: { id: profileId } }" class="bt btn btn-sm mx-2 custom-outline-color">ID: {{ profileId }}</router-link>
            </td>
            <td>
                <div class="d-flex justify-content-center">
              <button class="btn btn-danger" @click="handleWishlist(profileId)">
                <i class="fas fa-heart-broken"></i> Remove from Wishlist
              </button>
            </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useWishStore } from '@/stores/wishlist';
  import { storeToRefs } from 'pinia';
  import { useRoute } from 'vue-router';
  
  const wishStore = useWishStore();
  const { wishlist } = storeToRefs(wishStore);
  import router from "@/router";

  const route = useRoute();
  
  async function handleWishlist(id) {
    try {
      await wishStore.removeFromWishlist(id);
      if (wishlist.value.length === 0) {
        router.push({ name: 'Home' });
      }
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  }
  onMounted(async () => {
  try {
    await wishStore.fetchWishlist();
  } catch (error) {
    console.error('Error fetching wishlist:', error);
  }
});
  </script>
  
  <style scoped>
  @import "@/assets/css/members.css";
  .container {
    max-width: 800px;
    margin: auto;
  }
  
  .table {
    margin-top: 20px;
  }
  
  .btn-danger {
    display: flex;
    align-items: center;
  }
  
  .btn-danger i {
    margin-right: 5px;
  }
  </style>
  