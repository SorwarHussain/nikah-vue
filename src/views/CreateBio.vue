<template>
<div class="container py-5">
  <form @submit.prevent="submitForm">
    <div class="row g-3">
    <h5 class="text-center color py-2 text-white ">সাধারণ তথ্য</h5>
    </div>
    <div class="row g-3 border pb-4 pt-3" >    
    <div class="col-md-6">
    <label class="form-label">সম্পূর্ণ নাম</label>
    <input type="text" class="form-control" v-model="form.name" >
    <div v-if="errors.name" class="invalid-feedback alert alert-danger">
                          {{ errors.name[0] }}
    </div>
  </div>
  <div class="col-md-6">
    <label class="form-label">ওজন (কেজি)</label>
    <input type="text" class="form-control" v-model="form.weight">
    <div v-if="errors.weight" class="invalid-feedback">
                          {{ errors.weight[0] }}
    </div>
  </div>
  <div class="col-md-6">
    <label class="form-label">
বায়োডাটার ধরণ</label>
    <select class="form-select" v-model="form.bioType">
      <option selected>----</option>
      <option value="পাত্রের বায়োডাটা">পাত্রের বায়োডাটা</option>
      <option value="পাত্রীর বায়োডাটা">পাত্রীর বায়োডাটা</option>
    </select>
    <div v-if="errors.bioType" class="invalid-feedback">
                          {{ errors.bioType[0] }}
    </div>
  </div>
  <div class="col-md-6">
    <label class="form-label" >
বৈবাহিক অবস্থা </label>
<select class="form-select" v-model="form.maritalStatus">
      <option selected>----</option>
      <option value="অবিবাহিত">অবিবাহিত</option>
      <option value="বিবাহিত">বিবাহিত</option>
      <option value="ডিভোর্সড">ডিভোর্সড</option>
      <option value="বিধবা">বিধবা</option>
      <option value="বিপত্নীক">বিপত্নীক</option>
    </select>
    <div v-if="errors.maritalStatus" class="invalid-feedback">
                          {{ errors.maritalStatus[0] }}
    </div>
  </div>
  <div class="col-md-6">
    <label class="form-label">
        স্থায়ী ঠিকানা (জেলা)</label>
    <select class="form-select" v-model="form.district">
      <option selected>----</option>
      <option value="সিলেট">সিলেট</option>
      <option value="সুনামগঞ্জ">সুনামগঞ্জ</option>
      <option value="মৌলভীবাজার">মৌলভীবাজার</option>
      <option value="হবিগঞ্জ">হবিগঞ্জ</option>
    </select>
    <div v-if="errors.district" class="invalid-feedback">
                          {{ errors.district[0] }}
    </div>
  </div>
  <div class="col-md-6">
    <label class="form-label">
        স্থায়ী ঠিকানা (উপজেলা)</label>
<select class="form-select" v-model="form.upazila">
      <option selected>----</option>
      <option value="বালাগঞ্জ">বালাগঞ্জ</option>
      <option value="ছাতক">ছাতক</option>
      <option value="বাহুবল">বাহুবল</option>
      <option value="কুলাউড়া">কুলাউড়া</option>
      <option value="কানাইঘাট">কানাইঘাট</option>
      <option value="গোয়াইনঘাট">গোয়াইনঘাট</option>
      <option value="জকিগঞ্জ">জকিগঞ্জ</option>
      <option value="শ্রীমঙ্গল">শ্রীমঙ্গল</option>
      <option value="কোম্পানীগঞ্জ">কোম্পানীগঞ্জ</option>
      <option value="মাধবপুর">মাধবপুর</option>
    </select>
    <div v-if="errors.upazila" class="invalid-feedback">
                          {{ errors.upazila[0] }}
    </div>
  </div>
  <div class="col-md-6">
    <label class="form-label">
        জন্মসন (আসল)</label>
        <input type="date" class="form-control" v-model="form.birthData">
        <div v-if="errors.birthData" class="invalid-feedback">
                          {{ errors.birthData[0] }}
    </div>
  </div>
  <div class="col-md-6">
    <label class="form-label">        
গায়ের রং</label>
<select class="form-select" v-model="form.skinColor">
      <option selected>----</option>
      <option value="উজ্জ্বল ফর্সা">উজ্জ্বল ফর্সা</option>
      <option value="ফর্সা">ফর্সা</option>
      <option value="উজ্জ্বল শ্যামলা">উজ্জ্বল শ্যামলা</option>
      <option value="শ্যামলা">শ্যামলা</option>
      <option value="কালো">কালো</option>
    </select>
    <div v-if="errors.skinColor" class="invalid-feedback">
                          {{ errors.skinColor[0] }}
    </div>
  </div>
  <div class="col-md-6">
        <label class="form-label">        
        উচ্চতা</label>
        <input type="text" class="form-control" v-model="form.height">
        <div v-if="errors.height" class="invalid-feedback">
                          {{ errors.height[0] }}
    </div>
  </div>
  <div class="col-md-6">
    <label class="form-label">      
        রক্তের গ্রুপ</label>
    <select class="form-select" v-model="form.blood">
      <option selected>----</option>
      <option value="O+">O+</option>
      <option value="B+">B+</option>
      <option value="A+">A+</option>
      <option value="AB+">AB+</option>
      <option value="O-">O-</option>
      <option value="B-">B-</option>
      <option value="A-">A-</option>
      <option value="AB-">AB-</option>
    </select>
    <div v-if="errors.blood" class="invalid-feedback">
                          {{ errors.blood[0] }}
    </div>
  </div>
    </div>
    <!--ঠিকানা-->
    <div class="row g-3">
    <h5 class="text-center  py-2 color text-white ">ঠিকানা</h5>
    </div>
    <div class="row g-3 border pb-4 pt-3" >    
    <div class="col-12">
        <label for="inputAddress" class="form-label">স্থায়ী ঠিকানা </label>
        <input type="text" class="form-control" v-model="form.permAddress">
        <div v-if="errors.permAddress" class="invalid-feedback">
                          {{ errors.permAddress[0] }}
    </div>
    </div>
    <div class="col-12">
        <label class="form-label">বর্তমান ঠিকানা</label>
        <input type="text" class="form-control" v-model="form.preAddress">
        <div v-if="errors.preAddress" class="invalid-feedback">
                          {{ errors.preAddress[0] }}
    </div>
    </div> 
    </div>

    <!--শিক্ষাগত যোগ্যতা-->
    <div class="row g-3">
    <h5 class="text-center  py-2 color text-white ">শিক্ষাগত যোগ্যতা</h5>
    </div>
    <div class="row g-3 border pb-4 pt-3" >    
    <div class="col-12">
        <label class="form-label">যাবতীয় শিক্ষাগত যোগ্যতা লিখুন</label>
        <textarea class="form-control" rows="5" v-model="form.education"></textarea>
        <div v-if="errors.education" class="invalid-feedback">
                          {{ errors.education[0] }}
        </div>
    </div> 
    </div>
  
    <!--পারিবারিক তথ্য-->
    <div class="row g-3">
    <h5 class="text-center  py-2 color text-white ">পারিবারিক তথ্য</h5>
    </div>
    <div class="row g-3 border pb-4 pt-3" >
    <div class="col-md-6">
        <label class="form-label">পিতার নাম</label>
        <input type="text" class="form-control" v-model="form.fatherName">
        <div v-if="errors.fatherName" class="invalid-feedback">
                          {{ errors.fatherName[0] }}
        </div>        
    </div>    
    <div class="col-md-6">
         <label class="form-label">
        মাতার নাম</label>
        <input type="text" class="form-control" v-model="form.motherName">
        <div v-if="errors.motherName" class="invalid-feedback">
                          {{ errors.motherName[0] }}
        </div>  
   </div>
     <div class="col-md-6">
         <label class="form-label">
        পিতার পেশা</label>
        <input type="text" class="form-control" v-model="form.fatherOccupation">
        <label class="form-level-niche">মৃত হলে সেটা উল্লেখ করবেন</label>
        <div v-if="errors.fatherOccupation" class="invalid-feedback">
                          {{ errors.fatherOccupation[0] }}
        </div>  
   </div>
    <div class="col-md-6">
         <label class="form-label">
        মাতার পেশা</label>
        <input type="text" class="form-control" v-model="form.motherOccupation">
        <label class="form-level-niche">মৃত হলে সেটা উল্লেখ করবেন</label>
        <div v-if="errors.motherOccupation" class="invalid-feedback">
                          {{ errors.motherOccupation[0] }}
        </div>  
   </div>
    <div class="col-md-6">
    <label class="form-label">
        ভাই কয়জন?</label>
    <select class="form-select" v-model="form.brotherNum">
      <option selected>----</option>
      <option value="1">1 </option>
      <option value="2">2</option>
      <option value="3">3 </option>
      <option value="4">4</option>
      <option value="5">5 </option>
      <option value="6">6</option>
      <option value="7">7 </option>
      <option value="8">8</option>
      <option value="9">9 </option>
      <option value="10">10</option>
    </select>
    <div v-if="errors.brotherNum" class="invalid-feedback">
                          {{ errors.brotherNum[0] }}
    </div>  
  </div>
   <div class="col-md-6">
    <label class="form-label">
       বোন কয়জন?</label>
    <select class="form-select" v-model="form.sisterNum">
      <option selected>----</option>
      <option value="1">1 </option>
      <option value="2">2</option>
      <option value="3">3 </option>
      <option value="4">4</option>
      <option value="5">5 </option>
      <option value="6">6</option>
      <option value="7">7 </option>
      <option value="8">8</option>
      <option value="9">9 </option>
      <option value="10">10</option>
    </select>
    <div v-if="errors.sisterNum" class="invalid-feedback">
                          {{ errors.sisterNum[0] }}
    </div>  
  </div>
    <div class="col-12">
        <label class="form-label"> ভাই, বোন ও চাচা-মামাদের সম্পর্কে তথ্য</label>
        <textarea class="form-control" rows="3" v-model="form.uncle"></textarea>
        <div v-if="errors.uncle" class="invalid-feedback">
                          {{ errors.uncle[0] }}
        </div>  
    </div> 
    <div class="col-md-6">
    <label class="form-label">
      পারিবারিক অর্থনৈতিক অবস্থা</label>
      <input type="text" class="form-control" v-model="form.familyStatus">
    <div v-if="errors.familyStatus" class="invalid-feedback">
                          {{ errors.familyStatus[0] }}
    </div>  
  </div>
  <div class="col-md-6">
        <label class="form-label">পরিবারের দ্বীনি ও অন্যান্য তথ্য</label>
        <textarea class="form-control" rows="3" v-model="form.familyDeen"></textarea>
        <label class="form-level-niche">আপনার পরিবারের সদস্যদের দ্বীনদারিত্বের হালত লিখবেন</label>
        <div v-if="errors.familyDeen" class="invalid-feedback">
                          {{ errors.familyDeen[0] }}
        </div>  
      </div> 
    </div>

    <!--যোগাযোগ-->
    <div class="row g-3">
    <h5 class="text-center  py-2 color text-white ">যোগাযোগ</h5>
    </div>
    <div class="row g-3 border pb-4 pt-3" >
    <div class="col-md-6">
        <label class="form-label">অভিভাবকের মোবাইল নাম্বার </label>
        <input type="text" class="form-control" v-model="form.guardian">
        <label class="form-level-niche">অবশ্যই নাম্বার ইংরেজীতে লিখবেন। </label>
        <div v-if="errors.guardian" class="invalid-feedback">
                          {{ errors.guardian[0] }}
        </div>  
    </div>    
    <div class="col-md-6">
         <label class="form-label">
          অভিভাবকের সাথে সম্পর্ক</label>
        <input type="text" class="form-control" v-model="form.guardianNum">
        <label class="form-level-niche">এভাবে লিখবেনঃ বাবা/মা/ভাই/বোন। </label>
        <div v-if="errors.guardianNum" class="invalid-feedback">
                          {{ errors.guardianNum[0] }}
        </div>  
   </div>
   <div class="col-md-6">
         <label class="form-label">
          বায়োডাটা গ্রহণের ই-মেইল এড্রেস</label>
        <input type="text" class="form-control" placeholder="যেমনঃ fayjulislam@gmail.com" v-model="form.email">
        <div v-if="errors.email" class="invalid-feedback">
                          {{ errors.email[0] }}
        </div>  
   </div>
   <div class="col-md-6">
         <label class="form-label">
          আপনার নাম্বার</label>
        <input type="text" class="form-control" v-model="form.number">
        <div v-if="errors.number" class="invalid-feedback">
                          {{ errors.number[0] }}
        </div>  
   </div>
  <!-- <div class="col-md-6">
         <label class="form-label">
          Hide</label>
          <select class="form-select" v-model="form.familyStatus">
          <option selected>----</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <div v-if="errors.number" class="invalid-feedback">
                          {{ errors.number[0] }}
        </div>  
   </div>-->
   <div class="col-md-6" v-if="user.is_admin">
         <label class="form-label">
          Approved</label>
          <select class="form-select" v-model="form.is_approved">
          <option selected>----</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <div v-if="errors.is_approved" class="invalid-feedback">
                          {{ errors.is_approved[0] }}
        </div>  
   </div>
   <div class="d-flex justify-content-center mt-5">
            <button type="submit" class="bt btn btn-outline-danger btn-sm" id="reloadButton" name="publish_biodata">Save Profile</button>        
    </div>
    </div>
  
  
 </form>
</div>
</template>

<script setup>
import { useProfileStore } from '@/stores/profile';
import {storeToRefs} from "pinia";
import { useRoute } from 'vue-router';
import {useAuthStore} from "@/stores/auth";

const { errors } = storeToRefs(useProfileStore())


const route = useRoute();
const {authenticated, user,isVerified} = storeToRefs(useAuthStore())


</script>

<script scoped>
import { useProfileStore } from '@/stores/profile';
import { mapState } from 'pinia';


export default {
 // props: ['id'],
  //console.log(id);
  data() {
    return {
      form: {
        name: '',
        weight: '',
        bioType:'', 
        maritalStatus:'',
        district:'',
        upazila:'',
        birthData:'',
        skinColor:'',
        height:'',
        blood:'',
        permAddress:'',
        preAddress:'',
        education:'',
        fatherName:'',
        motherName:'', 
        fatherOccupation:'',
        motherOccupation:'', 
        brotherNum:'', 
        sisterNum:'',
        uncle:'',
        familyStatus:'',
        familyDeen:'',
        guardianNum:'',
        guardian:'',
        email:'',
        number:'',
        is_approved:false    
      },
    };
  },
  
  computed: {
    ...mapState(useProfileStore, ['profile']),
  },
  watch: {
    profile(newProfile) {
      if (newProfile) {
        this.form = { ...newProfile };
      }
    }
  },
  methods: {
    async submitForm() {
      const profileStore = useProfileStore();
      console.log('before submit6');
      console.log(this.profile);
      try {
        if (this.profile && this.profile.id) {
          await profileStore.updateProfile(this.form);
        } else {
          await profileStore.saveProfile(this.form);
        }
        this.$router.push({ name: 'Home' });
        //router.push({name: 'Home'});
      } catch (error) {
        // Handle error
        console.error("Form submission error:", error);
      }
    }
  },
  created() {
    console.log('creaate');
    const profileStore = useProfileStore();
    const id = this.id || this.$route.params.id;
    profileStore.fetchProfile(id);
    //console.log(this.$route.params.id);
    console.log(this.profile);
  }
};
</script>

<style scoped>
@import "@/assets/css/profile.css";
@import "@/assets/css/global.css";
.invalid-feedback {
  display: block;
}

</style>
