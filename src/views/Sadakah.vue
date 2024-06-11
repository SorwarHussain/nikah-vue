<template>
<div class="madhom">
    <h5>সাদাকাহ পাঠানোর মাধ্যম</h5>
    <div class="flex-container">
        <div class="flex-item-left">
            <img class="img1" src="../assets/images/Bkash_Logo.png" alt="Bkash" width="150" height="80">
            <p>01789-612005</p>
        </div>
        <div class="flex-item-mid">
            <img class="img1" src="../assets/images/Rocket_Logo.png" alt="Rocket" width="150" height="80">
            <p>01789-612005</p>
        </div>
        <div class="flex-item-right">
            <img class="img1" src="../assets/images/Nagad_Logo.png" alt="Nagad" width="150" height="80">
            <p>01789-612005</p>
        </div>
      </div>
</div>
<div class="form">
    <h5 style="padding-top:30px;padding-bottom: 10px;">সাদাকাহ ফর্ম</h5>
    <div class="contact_form">
        <p>আপনি টাকা পাঠিয়ে নিম্নোক্ত ফর্ম পূরণ করে দিন</p>
        <form @submit.prevent="submitForm">
          <fieldset>
            <legend>নাম <sup>*</sup> 
            </legend>
            <input type="text" v-model="form.name" placeholder="Name" required/><br />
          </fieldset>
          <fieldset>
            <legend>ইমেইল <sup>*</sup>
            </legend>
            <input type="email" v-model="form.email" placeholder="Email" required/><br />
          </fieldset>
          <fieldset>
            <legend>মোবাইল নাম্বার <sup>*</sup>
            </legend>
            <input type="text" v-model="form.number" placeholder="Mobile Number" required/><br />
          </fieldset>
          <fieldset>
            <legend>অনুদানের পরিমাণ <sup>*</sup>
            </legend>
            <input type="number" v-model="form.amount" required/><br />
          </fieldset>
          <fieldset>
            <legend>অনুদানের মাধ্যম <sup>*</sup>
            </legend>
            <select v-model="form.payment_method" required> 
              <option disabled value="">Please select one</option>
                <option value="bkash" selected>বিকাশ</option>
                <option value="rocket">রকেট</option>
                <option value="nagad">নগদ</option>
            </select><br />
          </fieldset>
          <fieldset>
            <legend>ট্রাঞ্জেকশন আইডি <sup>*</sup>
            </legend>
            <input type="text" v-model="form.TrxId" required/><br />
          </fieldset>
          <div class="btnn">
          <!--<button class="button" type="submit" style="vertical-align:middle"><span>Submit Form </span></button>-->
          <button class="button" type="submit" :disabled="isLoading" style="vertical-align:middle">
            <span v-if="!isLoading">Donate</span>
            <span v-else class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          </button>
        </div>
        </form>
      </div>
</div>



</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import router from "@/router";

import {storeToRefs} from "pinia";
import {useSadakahStore} from "@/stores/sadakah";


const $toast = useToast();

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        number:'',
        amount: '',
        payment_method: '',
        TrxId: ''
      },
    };
  },
  computed: {
    isLoading() {
      return useSadakahStore().isLoading;
    }
  },
  methods: {
    async submitForm() {
      const sadakahStore = useSadakahStore();
      try {
        await sadakahStore.submitDonation(this.form);
        this.form = {
          name: '',
          email: '',
          number: '',
          amount: '',
          payment_method: '',
          TrxId: ''
        };
        router.push({ name: 'Home' });
      } catch (error) {
        // Handle error
      }
    }
  }
};
</script>

<style scoped>
@import "@/assets/css/sadakah.css";
</style>