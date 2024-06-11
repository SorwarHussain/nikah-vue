<script setup>
import { ref } from "vue";
import {useAuthStore} from "@/stores/auth";
import {reactive} from "vue";
import router from "@/router";
import {storeToRefs} from "pinia";

const {register} = useAuthStore()
const {errors} = storeToRefs(useAuthStore())

const form = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
})

const handleRegister = () => {
  register(form)
      .then(() => {
        router.push({name: 'home'})
      })
      .catch((error) => {
        console.log(error)
      })
}

</script>
<script>
export default {
    data() {
        return {
            showPassword1: false,
            showPassword2: false,
            text: '',
            clas:'fas fa-eye'
        };
    },
    methods: {
      changePassType1() {
        this.showPassword1 = !this.showPassword1
        if(this.clas=='fas fa-eye')
            this.clas='fas fa-eye-slash'
        else
          this.clas='fas fa-eye'
        //alert(this.showPassword+this.clas)
      },
      changePassType2() {
        this.showPassword2 = !this.showPassword2
        if(this.clas=='fas fa-eye')
            this.clas='fas fa-eye-slash'
        else
          this.clas='fas fa-eye'
        //alert(this.showPassword+this.clas)
      }
    }
   
}
</script>

<template>
 <div class="form-wrapper">
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div class="logo">
                    <img src="../assets/images/sn_logo.jpg" alt="logo">
                    <h3 class="font-weight-bold mb-3">Create Account</h3>

                </div>
                <!--<div class="text-center my-5">                  
                    <div class="social-links justify-content-center" >
                            <a href="#" class="bg-google">
                                <img src="../assets/images/google.png" alt="logo" style="width: 30px;height: 30px;margin-right: 10px;"> Continue with Google
                            </a>
                    </div>
                    <div class="text-divider">or signup with email</div>
                </div>-->
                <form @submit.prevent="handleRegister">
                    <div class="form-group">
                        <label for="fullname">Fullname</label>
                        <div class="form-icon-wrapper">
                            <input type="text" class="form-control" v-model="form.name" placeholder="Enter fullname" autofocus>
                            <i class="form-icon-left  fas fa-user-alt"></i>
                        </div>
                        <div v-if="errors.name" class="invalid-feedback">
                          {{ errors.name[0] }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <div class="form-icon-wrapper">
                            <input type="email" class="form-control" v-model="form.email" placeholder="Enter email" required>
                            <i class="form-icon-left fa-solid fa-envelope"></i>
                        </div>
                        <div v-if="errors.email" class="invalid-feedback">
                          {{ errors.email[0] }}
                        </div>
                    </div>
                   <div class="form-group">
                        <label for="password">Password</label>
                        <div class="form-icon-wrapper">
                            <input v-bind:type="showPassword1 ? 'text' : 'password'" class="form-control" v-model="form.password" placeholder="Enter password">
                            <i class="form-icon-left fas fa-lock"></i>
                            <span class="form-icon-right password-show-hide" title="Hide or show password" v-on:click="changePassType1">
                                <i v-bind:class="clas"></i>
                            </span>
                        </div>
                        <div v-if="errors.password" class="invalid-feedback">
                          {{ errors.password[0] }}
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password-repeat">Retype password</label>
                        <div class="form-icon-wrapper">
                            <input v-bind:type="showPassword2 ? 'text' : 'password'" class="form-control" v-model="form.password_confirmation" placeholder="Enter password">
                            <i class="form-icon-left fas fa-lock"></i>
                            <span class="form-icon-right password-show-hide" title="Hide or show password" v-on:click="changePassType2">
                                <i v-bind:class="clas"></i>
                            </span>
                        </div>
                        <div v-if="errors.password_confirmation" class="invalid-feedback">
                          {{ errors.password_confirmation[0] }}
                        </div>
                    </div>
 
                    <div class="form-group">
                        <button class="btn btn-primary btn-block">Sign Up</button>
                    </div>
                    <p class="text-center">Do you already have an account? 
                        <router-link :to="{name: 'Login' }">Sign in</router-link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</div>
</template>


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