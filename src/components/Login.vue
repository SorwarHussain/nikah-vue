<template>
  <div class="form-wrapper">
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div class="logo">
                    <img src="../assets/images/sn_logo.jpg" alt="logo">
                    <h3 class="font-weight-bold mb-3">Sign In</h3>
                </div>
                
               <!-- <div class="my-5 text-center">
                    <div class="social-links justify-content-center" >
                            <a href="#" class="bg-google">
                                <img src="../assets/images/google.png" alt="logo" style="width: 30px;height: 30px;margin-right: 10px;"> Continue with Google
                            </a>
                    </div>
                    <div class="text-divider">or sign in with email</div>
                </div>-->
                <form @submit.prevent="handleLogin">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <div class="form-icon-wrapper">
                            <input type="email" class="form-control" v-model="form.email" placeholder="Enter email" autofocus
                                   required>
                            <i class="form-icon-left fa-solid fa-envelope"></i>
                        </div>
                        <div v-if="errors.email" class="invalid-feedback">
                          {{ errors.email[0] }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <div class="form-icon-wrapper">
                            <input v-bind:type="showPassword ? 'text' : 'password'" class="form-control" v-model="form.password" placeholder="Enter password"
                                   required>
                            <i class="form-icon-left fas fa-lock"></i>
                            <span class="form-icon-right password-show-hide" title="Hide or show password" v-on:click="changePassType">
                                <i v-bind:class="clas"></i>
                            </span>
                        </div>
                        <div v-if="errors.password" class="invalid-feedback">
                        {{ errors.password[0] }}
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="d-md-flex justify-content-between">
                            <div class="custom-control custom-checkbox mb-2 mb-md-0">
                                <input type="checkbox" class="custom-control-input" id="customCheck1" checked>
                                <label class="custom-control-label" for="customCheck1">Remember me</label>
                            </div>
                            <router-link :to="{name: 'PasswordReset' }">forgot password?</router-link>
                           
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary btn-block">Sign In</button>
                    </div>
                    <p class="text-center">
                        Don't have an account?
                        <router-link :to="{name: 'Register' }">Create a free account</router-link>
                       
                    </p>
                </form>
            </div>
        </div>
    </div>
</div>
<div>

</div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import { useAuthStore } from "@/stores/auth";
import {storeToRefs} from "pinia";
import router from "@/router";
import axios from "axios"; 

const authStore = useAuthStore();
const { errors } = storeToRefs(useAuthStore())

const isInvalid = ref(false);

const form = reactive({
  email: '',
  password: ''
});




const handleLogin = () => {
  authStore.login(form).then(() => {
    router.push({name: 'Home'})
  })
// login(form);
};
</script>
<script scoped>

export default {
    data() {
        return {
            showPassword: false,
            clas:'fas fa-eye'
        };
    },
    methods: {
      changePassType() {
        this.showPassword = !this.showPassword
        if(this.clas=='fas fa-eye')
            this.clas='fas fa-eye-slash'
        else
          this.clas='fas fa-eye'
        //alert(this.showPassword+this.clas)
      }
    }
}
</script>

<style scoped>
@import '../assets/css/latform-style-1.min.css';
@import "@/assets/css/latform-style-1.min.css";
.form-wrapper{
    background: linear-gradient(90deg, #ff4955, #673ab7);
    background-attachment: fixed;
}
.invalid-feedback {
  display: block;
}
</style>