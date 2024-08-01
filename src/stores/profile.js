import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: null,
    errors: "",
  }),
  actions: {
    async fetchProfile(id) {
      try {
        //console.log(id);
        let response;
        if (isNaN(id) || !id) {
          //console.log('isNan');
          response = await axios.get('/profile'); 
        } else {
          response = await axios.get(`/profile/${id}`); 
        }     
        this.profile = response.data;
        console.log('hre');
        console.log(response.data);
       //console.log(this.profile.id);
       // console.log(this.profile.name);
        console.log(this.profile);
      } catch (error) {
        this.errors = error.response.data;
        $toast.error('Error fetching profile');
      } 
    },
    async saveProfile(data) {
      console.log('nice');
      try {
        const response = await axios.post('/profile', data);
        this.profile = response.data;
        $toast.success('Profile saved successfully');
      } catch (error) {
        this.errors = error.response.data;
        $toast.error('Error saving profile');
      } 
    },
    async updateProfile(data) {
      try {
        const response = await axios.put(`/profile/${this.profile.id}`, data);
        this.profile = response.data;
        $toast.success('Profile updated successfully');
      } catch (error) {
        this.errors = error.response.data.errors;
        console.log(this.errors);
        $toast.error('Error updating profile');
      }
    }
  }
});
