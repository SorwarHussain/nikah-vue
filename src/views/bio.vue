<template>
  <div class="container my-5">
    <div class="text-center m-2">
    <button class="btn btn-primary ms-3" @click="showSearchModal">বায়োডাটা খুঁজুন</button>
    </div>
    <h5 class="text-center p-3 color fw-bolder">বায়োডাটা সমূহ
    </h5>
    <div v-if="filteredBios.length">
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 gy-5 gx-4">
        <div v-for="bio in filteredBios" :key="bio.id" class="col">
          <div class="card p-4">
            <div class="image d-flex flex-column justify-content-center align-items-center">
              <button class="btn btn-secondary">
                <img v-if="bio.bioType === 'পাত্রের বায়োডাটা'" src="../assets/images/Avatar_man.jpg" height="140" width="138" style="border-radius: 50%;" />
                <img v-else src="../assets/images/Avatar_woman.jpg" height="140" width="138" style="border-radius: 50%;" />
              </button>
              <span class="name mt-5">Biodata Number: {{ bio.id }}</span>
            </div>
            <table class="table table-bordered text-center mt-4 mb-5">
              <tbody>
                <tr>
                  <td>জন্মসন</td>
                  <td>{{ bio.birthData }}</td>
                </tr>
                <tr>
                  <td>উচ্চতা</td>
                  <td>{{ bio.height }}</td>
                </tr>
                <tr>
                  <td>গাত্রবর্ণ</td>
                  <td>{{ bio.skinColor }}</td>
                </tr>
                <tr>
                  <td>ঠিকানা</td>
                  <td>{{ bio.upazila }},{{ bio.district }}</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-center mb-4">
              <router-link :to="{ name: 'BioDetails', params: { id: bio.id } }" class="bt btn btn-sm mx-2 custom-outline-color">Read More</router-link>
              <!--<i class="fas fa-heart"></i><br>
              <i class="far fa-heart"></i><br>-->
              <!--<i 
                :class="isInWishlist(bio.id) ? 'fas fa-heart' : 'far fa-heart'"
                @click="toggleWishlist(bio.id)" 
                 :disabled="isLoading"
                class="wishlist-icon"
                style="cursor: pointer; font-size: 24px; color: red;"
              ></i>-->
              <!--<a href="" class="bt btn btn-outline-danger btn-sm"><i class="far fa-heart"></i></a>-->
              <router-link :to="{name: 'Login' }" v-if="!authenticated" class="btn btn-outline-danger btn-sm">
                <i class='fas fa-heart'></i>
              </router-link> 
              <router-link :to="{name: 'Dashboard' }" v-else-if="!isVerified" class="btn btn-outline-danger btn-sm">
                <i class='fas fa-heart'></i>
              </router-link> 
              <button @click="toggleWishlist(bio.id)" v-else-if="!useWishStore().isInWishlist(bio.id)"  class="btn btn-outline-danger btn-sm">
                <i :class="[useWishStore().isInWishlist(bio.id) ? 'fas' : 'far', 'fa-heart']"></i>
            </button>
            <button @click="toggleWishlist(bio.id)" v-else  class="btn btn-danger btn-sm">
                <i :class="[useWishStore().isInWishlist(bio.id) ? 'fas' : 'far', 'fa-heart']"></i>
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center text-bold">
      <p>দুঃখিত! কোন বায়োডাটা পাওয়া যায় নি</p>
    </div>

    <!-- Search Modal -->
    <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="searchModalLabel">বায়োডাটা খুঁজুন</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="searchBiodata">
              <div class="mb-3">
                <label class="form-label">বায়োডাটার ধরণ</label>
                <select class="form-select" v-model="searchCriteria.bioType">
                  <option value="">সকল বায়োডাটা</option>
                  <option value="পাত্রের বায়োডাটা">পাত্রের বায়োডাটা</option>
                  <option value="পাত্রীর বায়োডাটা">পাত্রীর বায়োডাটা</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">বৈবাহিক অবস্থা </label>
                <select class="form-select" v-model="searchCriteria.maritalStatus">
                  <option value="">সকল</option>
                  <option value="অবিবাহিত">অবিবাহিত</option>
                  <option value="বিবাহিত">বিবাহিত</option>
                  <option value="ডিভোর্সড">ডিভোর্সড</option>
                  <option value="বিধবা">বিধবা</option>
                  <option value="বিপত্নীক">বিপত্নীক</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">জেলা </label>
                <select class="form-select" v-model="searchCriteria.district">
                  <option value="">সকল</option>
                  <option value="সিলেট">সিলেট</option>
                  <option value="সুনামগঞ্জ">সুনামগঞ্জ</option>
                  <option value="মৌলভীবাজার">মৌলভীবাজার</option>
                  <option value="হবিগঞ্জ">হবিগঞ্জ</option>
                </select>
              </div>
              <div class="text-center m-2">
                <button type="submit" class="btn btn-primary">Search</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useWishStore } from '@/stores/wishlist';
import {storeToRefs} from "pinia";
import { useRoute } from 'vue-router';
import { useAuthStore } from '@/stores/auth';


const { authenticated, user, isVerified } = storeToRefs(useAuthStore());
const route = useRoute();


</script>
<script>
import axios from "axios";
import * as bootstrap from "bootstrap"; 
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { useWishStore } from '@/stores/wishlist';

const $toast = useToast();

export default {
  data() {
    return {
      bios: [],
      searchCriteria: {
        bioType: '',
        maritalStatus: '',
        district:''
      },
      filteredBios: []
    }
  },
  async mounted() {
    try {
      const response = await axios.get('/biodata');
      this.bios = response.data;
      this.filteredBios = this.bios; 
      //console.log(this.filteredBios.length);
      //await this.fetchWishlist();
    } catch (error) {
      console.error("Error fetching biodata:", error.message);
    }
  },
  methods: {
    async toggleWishlist(id) {
      const wishstore = useWishStore();
     // console.log(id);
     try {
        if (wishstore.isInWishlist(id)) {
          await wishstore.removeFromWishlist(id);
        } else {
          await wishstore.addToWishlist(id);
        }
      } catch (error) {
        console.error(error);
      } 
    },
    showSearchModal() {
      const searchModal = new bootstrap.Modal(document.getElementById('searchModal'));
      searchModal.show();
    },
    searchBiodata() {
      const criteria = this.searchCriteria;
      this.filteredBios = this.bios.filter(bio => {
        return (!criteria.bioType || bio.bioType === criteria.bioType) &&
               (!criteria.maritalStatus || bio.maritalStatus === criteria.maritalStatus) &&  (!criteria.district || bio.district === criteria.district);
      });
      const searchModal = bootstrap.Modal.getInstance(document.getElementById('searchModal'));
      searchModal.hide();
    }
  },
  async created() {
    const wishstore = useWishStore();
    wishstore.fetchWishlist();
   // await this.checkWishlist();
  }
}
</script>

<style scoped>
@import "@/assets/css/members.css";

</style>