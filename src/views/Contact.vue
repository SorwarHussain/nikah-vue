<template>
    <!--contact page email phone-->
    <div class="container">
    <div class="contact_e_p row row-cols-1 row-cols-md-2 row-cols-xl-3  gy-3 gx-2">
        <div class="contact_e">
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZcRPPtNjpRHMZgprBtpnZsMfSZqCJSgZBsPlGTRgQwVwlHxflxgwvNpZJxHNBjWkvxPSV" target="_blank">
                <p><i class="fas fa-envelope ico"></i></p>
            </a>
            <div class="contact_e_h">
                <h4>Email us</h4>
                <h6>sylhetinikah@gmail.com</h6>
            </div>
        </div>
        <div class="contact_p">
            <p><i class="fas fa-phone-alt ico"></i></p>
            <div class="contact_p_h">
                <h4>Call us</h4>
                <h6>+8801789-612005</h6>
            </div>
        </div>
    </div>
    
    <div class="contact_form">
      <p>আপনার গুরত্বপূর্ণ মতামত জানিয়ে আমাদের কার্যক্রমে সহায়তা করুন...</p>
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
          <legend>বিষয় <sup>*</sup>
          </legend>
          <input type="text" v-model="form.subject" placeholder="Subject" required/><br />
        </fieldset>
        <fieldset>
          <legend>মেসেজ <sup>*</sup>
          </legend>
          <textarea v-model="form.message" rows="5" cols="30" placeholder="Your message" required></textarea>
        </fieldset>
        <div class="btnn">
        <button type="submit" class="button" :disabled="isLoading" style="vertical-align:middle">
            <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span v-if="!isLoading">Send Message</span>
      </button>
      </div>
      </form>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import router from "@/router";

const $toast = useToast();

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      isLoading: false
    };
  },
  methods: {
    async submitForm() {
      this.isLoading = true; // Set loading to true when form is submitted
      try {
        const response = await axios.post('/contact', this.form);
        //alert('Message sent successfully');
        $toast.success('Your Message sent successfullyy!');
        // Reset the form fields
        this.form.name = '';
        this.form.email = '';
        this.form.subject = '';
        this.form.message = '';
        router.push({name: 'Home'});
      } catch (error) {
       // console.error(error);
        //alert('There was an error sending your message. Please try again.');
        $toast.error('There was an error sending your message. Please try again.');
      }finally {
        this.isLoading = false; // Set loading to false when request is complete
      }
    }
  }
};

</script>

<style scoped>
@import "@/assets/css/contact.css";
</style>