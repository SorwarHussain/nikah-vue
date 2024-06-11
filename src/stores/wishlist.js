import { defineStore } from "pinia";
import axios from "axios";
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { useAuthStore } from '@/stores/auth';

const $toast = useToast();

export const useWishStore = defineStore('wishlist', {
  state: () => ({
    wishlist: null,
  }),
  actions: {
    isInWishlist(id) {
        if(useAuthStore().authenticated && useAuthStore().isVerified){
        const inWishlist = this.wishlist.includes(id);
        return inWishlist;
        }
        //console.log(`ID: ${id}, In Wishlist: ${inWishlist}`);
        
      },
    async fetchWishlist() {
        //console.log(useAuthStore().authenticated);
        //console.log(useAuthStore().isVerified);
        if(useAuthStore().authenticated && useAuthStore().isVerified){
          try {
            const response = await axios.get('/wishlist');
            this.wishlist = response.data.map(item => item.id); 
            /*this.wishlist.forEach(id => {
              console.log(`: ${id}`);
            });*/
          } catch (error) {
            console.error("Error fetching wishlist:", error.message);
          }
      }
      },
    async removeFromWishlist (id) {
        try {
          if (this.isInWishlist(id)) {
            await axios.delete(`/wishlist/${id}`);
            this.wishlist = this.wishlist.filter(wishlistId => wishlistId !== id);
            $toast.info(`Biodata: ${id} successfully removed from wishlist`);
          } else {
            $toast.error(`Biodata: ${id} is not in the wishlist`);
          }
        } catch (error) {
          console.error('Error removing from wishlist:', error);
          $toast.error('An error occurred while removing from wishlist');
        }
      },
      async addToWishlist(id){
        try {
          if (!this.isInWishlist(id)) {
            await axios.post(`/wishlist/${id}`);
            this.wishlist.push(id);
            $toast.success(`Biodata: ${id} successfully added to wishlist`);
          } else {
            $toast.error(`Biodata: ${id} is already in the wishlist`);
          }
        } catch (error) {
          console.error('Error adding to wishlist:', error);
          $toast.error('An error occurred while adding to wishlist');
        }
      },
  }
});
