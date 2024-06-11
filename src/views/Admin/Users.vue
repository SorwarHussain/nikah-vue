<template>
  <div class="container mt-5 mb-5">
    <h2 class="text-center mb-4">সকল ইউজার</h2>
    <div v-if="users.length === 0" class="alert alert-info" role="alert">
        Your User list is empty.
      </div>
      <table v-if="users.length > 0" class="table table-striped table-hover table-bordered text-center">
        <thead class="thead-light">
          <tr>
            <th scope="col">ক্র.নং</th>
            <th scope="col">নাম</th>
            <th scope="col">স্ট্যাটাস</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="user">
            <th scope="row">{{ index + 1 }}</th>          
            <td>
                <router-link :to="{ name: 'UserDetails', params: { id: user.id } }" class="bt btn btn-sm mx-2 custom-outline-color">Name: {{ user.name }}</router-link>
            </td>
            <td>
              <div class="d-flex justify-content-center">
                <button class="btn btn-danger"  v-if="user.email_verified_at==null">
                <i class="fas fa-heart-broken"></i>Not Verified                
              </button>
              <button class="btn btn-success" v-else>
                <i class="fas fa-heart-broken"></i> 
              Verified
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
      users: [],
    }
  },
  async mounted() {
    try {
      const response = await axios.get('/users');
      this.users = response.data;
      //console.log(this.users);
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
