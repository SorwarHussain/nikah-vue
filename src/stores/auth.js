import {defineStore} from "pinia";
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import axios from "axios";

const $toast = useToast();

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null,
        user: null,
        errors: ""
    }),
    getters:{
        authenticated() {
            return !!this.token && !!this.user;
        },

        getToken() {
            return this.token;
        },

        getUser() {
            return this.user;
        },

        getErrors() {
            return this.errors;
        },
        isVerified(state) {
            return state.user?.email_verified_at !== null;
        },
        isAdmin(state) {
            return state.user?.is_admin !== null;
        }
    },
    actions:{
      setToken(token) {
        this.token = token;
    },

    setUser(user) {
        this.user = user;
    },
      async attempt(token) {
       // console.log(token)
        if (token) {
            this.setToken(token);
        }

        if (!this.token) {
            return;
        }

        try {
            let response = await axios.get('/user')
            this.setUser(response.data);
           // console.log(response)
            //console.log(response.data)
            return response;
        } catch (e) {
            this.setToken(null);
            this.setUser(null);
            localStorage.removeItem('token');
        }
    },
      async login(credentials){
        try {
            await axios.get('http://localhost:8000/sanctum/csrf-cookie');
    
            const response = await axios.post('/auth/login', credentials);
            //console.log(response.data);
            await this.attempt(response.data.access_token)
            $toast.success('You have been logged in successfully!');
        
          } catch (e) {
            if (e.response.status === 422) {
                this.errors = e.response.data.errors
            }

            if (e.response.status === 401) {
                this.errors = {"email": [e.response.data.message]}
                $toast.open({
                    message: 'Email and password do not match!',
                    type: 'error', 
                  });
            }
            throw e;
        }
      },
      
      async register(credentials) {
        try {
            let response = await axios.post('/auth/register', credentials);
            await this.attempt(response.data.access_token)
            $toast.success('You have been registered successfully!');
        } catch (e) {
            if (e.response.status === 422) {
                this.errors = e.response.data.errors
            }            
            throw e;
        }
    },
    async logout() {
      try {
          let response = await axios.post('/auth/logout');
          this.setToken(null);
          this.setUser(null);
          localStorage.removeItem('token');
          //$toast.warning('You have been logged out successfully!');
          $toast.open({
            message: 'You have been logged out successfully!',
            type: 'info', // success, warning, error, or info
          });
          return response;
      } catch (e) {
          this.setToken(null);
          this.setUser(null);
          localStorage.removeItem('token');
      }
  },

  async sendVerificationEmail() {
      try {
          await axios.post('/auth/email/verify/send');
          $toast.success('Verification email has been sent successfully!');
      } catch (e) {
          throw e;
      }
  },  
}

})