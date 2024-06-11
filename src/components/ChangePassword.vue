<template>
  <div class="form-wrapper">
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div class="logo">
                    <img src="../assets/images/sn_logo.jpg" alt="logo">
                    <h3 class="font-weight-normal mb-3">Change Password</h3>
                </div>
                <div class="my-5 text-center">
                    
                </div>
                <form>
                    <div class="form-group">
                        <label for="password">New password</label>
                        <div class="form-icon-wrapper">
                            <input v-bind:type="showPassword1 ? 'text' : 'password'"  class="form-control" id="password" placeholder="Enter password" autofocus
                                   required>
                            <i class="form-icon-left fas fa-lock"></i>
                            <span class="form-icon-right password-show-hide" title="Hide or show password" v-on:click="changePassType1">
                                <i v-bind:class="clas"></i>
                            </span>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password2">Retype password</label>
                        <div class="form-icon-wrapper">
                            <input v-bind:type="showPassword2 ? 'text' : 'password'"  class="form-control" id="password2" placeholder="Enter password" autofocus
                                   required>
                            <i class="form-icon-left fas fa-lock"></i>
                            <span class="form-icon-right password-show-hide" title="Hide or show password" v-on:click="changePassType2">
                                <i v-bind:class="clas"></i>
                            </span>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary btn-block">Change Password</button>
                    </div>
                </form>
                <p class="text-center">You can here <router-link :to="{name: 'Login' }">Sign in</router-link> or  <router-link :to="{name: 'Register' }">Create a free account</router-link>.</p>
            </div>
        </div>
    </div>
</div>
</template>

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

<style scoped>

@import '../assets/css/latform-style-1.min.css';
</style>