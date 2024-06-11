<template>
  <div class="form-wrapper">
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div class="logo">
                    <img src="../assets/images/sn_logo.jpg" alt="logo">
                    <h3 class="font-weight-normal mb-2">Reset Password</h3>
                </div>
                <div class="my-3 text-center">                    
                    <p class="text-muted">Type and send the email address to reset your password.</p>
                </div>
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <div class="form-icon-wrapper">
                            <input type="email" class="form-control" id="email" placeholder="Enter email" autofocus
                                   required>
                            <i class="form-icon-left fa-solid fa-envelope"></i>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary btn-block">Send</button>
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

}
</script>

<style scoped>

@import '../assets/css/latform-style-1.min.css';
</style>