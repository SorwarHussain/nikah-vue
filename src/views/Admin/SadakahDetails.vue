<template>
    <div class="container mt-5 mb-5">
      <h2 class="text-center mb-4">{{ sadakah.name }} Sadakah Details</h2>
      <div v-if="!sadakah" class="alert alert-info" role="alert">
          Loading Sadakah details...
      </div>
      <div v-if="sadakah" class="card">
        <div class="card-header">
        </div>
        <div class="card-body">
          <p><strong>Email:</strong> {{ sadakah.email }}</p>
          <p><strong>Number:</strong> {{ sadakah.number }}</p>
          <p><strong>Amount:</strong> {{ sadakah.amount }}</p>
          <p><strong>Payment Method:</strong> {{ sadakah.payment_method }}</p>
          <p><strong>Transaction ID:</strong> {{ sadakah.TrxId }}</p>
          <p><strong>Submitted At:</strong> {{ new Date(sadakah.created_at).toLocaleString() }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        sadakah: null,
      }
    },
    async created() {
      const id = this.$route.params.id;
      try {
        const response = await axios.get(`/sadakah/${id}`);
        this.sadakah = response.data;
      } catch (error) {
        console.error("Error fetching Sadakah details:", error.message);
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
  