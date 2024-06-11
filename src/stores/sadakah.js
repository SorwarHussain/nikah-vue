import { defineStore } from "pinia";
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import axios from "axios";

const $toast = useToast();

export const useSadakahStore=defineStore('sadakah',{
   state : () => ({
        isLoading: false,
        errors: null
    }),
   actions: {
        async submitDonation(form) {
          this.isLoading = true;
          try {
            await axios.post('/sadakah', form);
            $toast.success('Your donation was successful!');
            this.isLoading = false;
            return true;
          } catch (e) {
            console.log(e);
            this.isLoading = false;
            this.errors = e.response?.data?.errors || 'An error occurred';
            $toast.error('There was an error processing your donation. Please try again.');
            throw e;
          }
        }
    }
})