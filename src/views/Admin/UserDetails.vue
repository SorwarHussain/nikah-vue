<template>
    <div class="container mt-5 mb-5">
      <h2 class="text-center mb-4">User Details</h2>
      <div v-if="!user" class="alert alert-info" role="alert">
          Loading user details...
      </div>
      <div v-if="user" class="card">
        <div class="card-header">
          <h3>Name: {{ user.name }}</h3>
        </div>
        <div class="card-body">
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Role: </strong> 
            <span v-if="user.is_admin==true">Admin</span>
            <span v-else>Not Admin</span>
        </p>
          <p><strong>Status:</strong> {{ user.email_verified_at ? 'Verified' : 'Not Verified' }}</p>
          <p><strong>Created At:</strong> {{ new Date(user.created_at).toLocaleString() }}</p>
          <p><strong>Updated At:</strong> {{ new Date(user.updated_at).toLocaleString() }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        user: null,
      }
    },
    async created() {
      const id = this.$route.params.id;
      try {
        const response = await axios.get(`/users/${id}`);
        this.user = response.data;
      } catch (error) {
        console.error("Error fetching user details:", error.message);
      }
    }
  }
  </script>
  
  <style scoped>
    .card {
      max-width: 600px;
      margin: auto;
    }
  </style>
  