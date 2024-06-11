<template>
    <div class="container mt-5 mb-5">
      <h2 class="text-center mb-4">পছন্দের তালিকা</h2>
      <div v-if="useWishStore().wishlist.length === 0" class="alert alert-info" role="alert">
        Your wishlist is empty.
      </div>
      <table v-if="useWishStore().wishlist.length > 0" class="table table-striped table-hover table-bordered text-center">
        <thead class="thead-light">
          <tr>
            <th scope="col">ক্র.নং</th>
            <th scope="col">বায়োডাটা নাম্বার</th>
            <th scope="col">এ্যাকশন</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(profileId, index) in useWishStore().wishlist" :key="profileId">
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
  import { useWishStore } from '@/stores/wishlist';
  import {storeToRefs} from "pinia";
  const wishstore = storeToRefs(useWishStore());
  </script>
  <script>
  import { useWishStore } from '@/stores/wishlist';
  //const wishstore = storeToRefs(useWishStore());

  export default {
    data() {
      return {        
      };
    },
    async mounted() {
        const wishstore = useWishStore();
        wishstore.fetchWishlist();
    },
    methods: {
    async handleWishlist(id) {
      const wishstore = useWishStore();
     try {
          await wishstore.removeFromWishlist(id);
      } catch (error) {
        console.error(error);
      } 
    },
    },
    /*async created() {
    const wishstore = useWishStore();
    wishstore.fetchWishlist();
   // await this.checkWishlist();
    }*/
  };
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
  