<script setup>
import router from "@/router";
import {onMounted, ref} from "vue";
import axios from "axios";
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();

const verifiedMessage = ref(null);

onMounted(async () => {
  try {
    let query = router.currentRoute.value.query;
    let url = `/auth/email/verify?email=${encodeURIComponent(query.email)}&expires=${encodeURIComponent(query.expires)}&signature=${encodeURIComponent(query.signature)}`;
    
    //let url='http://127.0.0.1:8000/api/auth/email/verify?email=dujana002%40gmail.com&expires=1716290724&signature=30099fd0c79870b8c03d8e59614d41a7e9097f3684646adf1d1971a75d84dc53';

    //console.log(query);
    console.log(url);
    await axios.post(url);

    $toast.success('Email verified successfully')

    router.push({name: 'Home'});

  } catch (e) {
    if (e.response.status === 403) {
      verifiedMessage.value = e.response.data.message;
    }

    $toast.error('Email verification failed. Please try again.')
  }
});
</script>
<script>
export default {

}
</script>
<template>
  <div v-if="verifiedMessage" class="text-center">{{ verifiedMessage}}</div>
  <div v-else class="text-center">
    Loading ...
  </div>
</template>

<style scoped>

</style>