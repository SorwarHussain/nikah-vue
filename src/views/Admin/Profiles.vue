<template>
  <div class="container mt-5 mb-5">
    <h2 class="text-center mb-4">সকল বায়োডাটা</h2>
    <div v-if="bios.length === 0" class="alert alert-info" role="alert">
        Your Profile list is empty.
      </div>
      <table v-if="bios.length > 0" class="table table-striped table-hover table-bordered text-center">
        <thead class="thead-light">
          <tr>
            <th scope="col">ক্র.নং</th>
            <th scope="col">বায়োডাটা নাম্বার</th>
            <th scope="col">স্ট্যাটাস</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(profile, index) in bios" :key="profile">
            <th scope="row">{{ index + 1 }}</th>          
            <td>
                <router-link :to="{ name: 'Profile', params: { id: profile.id } }" class="bt btn btn-sm mx-2 custom-outline-color">ID: {{ profile.id }}</router-link>
            </td>
            <td>
                <div class="d-flex justify-content-center">
              <button class="btn btn-danger">
                <i class="fas fa-heart-broken"></i> 
              </button>
            </div>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
    return {
      bios: [],
    }
  },
  async mounted() {
    try {
      const response = await axios.get('/biodata');
      this.bios = response.data;
    } catch (error) {
      console.error("Error fetching biodata:", error.message);
    }
  }
}
</script>
<script setup>

</script>

<style scoped>
  @import "@/assets/css/members.css";
</style>
