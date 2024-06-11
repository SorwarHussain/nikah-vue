<template>
  <div class="container mt-5 mb-5">
    <h2 class="text-center mb-4">সকল সাদাকাহ </h2>
    <div v-if="sadakahs.length === 0" class="alert alert-info" role="alert">
        Your Sadakah list is empty.
      </div>
      <table v-if="sadakahs.length > 0" class="table table-striped table-hover table-bordered text-center">
        <thead class="thead-light">
          <tr>
            <th scope="col">ক্র.নং</th>
            <th scope="col">নাম</th>
            <th scope="col">এমাউন্ট</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(sadakah, index) in sadakahs" :key="sadakah">
            <th scope="row">{{ index + 1 }}</th>          
            <td>
                <router-link :to="{ name: 'SadakahDetails', params: { id: sadakah.id } }" class="bt btn btn-sm mx-2 custom-outline-color">Name: {{ sadakah.name }}</router-link>
            </td>
            <td>
              <div class="d-flex justify-content-center">
                <button class="btn btn-danger">
                <i class="fas fa-heart-broken"></i> 
                {{sadakah.amount}}
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
      sadakahs: [],
    }
  },
  async mounted() {
    try {
      const response = await axios.get('/sadakah');
      this.sadakahs = response.data;
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
