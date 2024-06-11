<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {useAuthStore} from "@/stores/auth";

const {sendVerificationEmail } = useAuthStore();

const verifiedMessage = ref(null);

onMounted(async () => {
  try {
    let response = await axios.get('/dashboard');
    verifiedMessage.value = null;
  } catch (e) {
    if (e.response.status === 403) {
      verifiedMessage.value = e.response.data.message;
    }
  }
});

</script>

<template>
  <div class="text-center border p-5 m-5 text-danger" v-if="verifiedMessage">
    {{ verifiedMessage }}
    <button @click="sendVerificationEmail" class="text p-5 rounded text-lg hover:bg-indigo-600 mt-8">Verification
      email
    </button>
  </div>
  <div v-else>Dashboard</div>
</template>

<style scoped>

</style>