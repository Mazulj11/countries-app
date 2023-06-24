<template>
   <v-img class="background-image"></v-img>
   <div class="wrapper">
      <div class="content">
         <v-container>
            <h1 class="heading-main">All about country</h1>
            <p class="heading-title">
               This is a page where you can find out all the information about a
               country. Find out some basic things about the country, such as
               the capital city, number of inhabitants, area, in which region it
               is located, which are its neighboring countries.
            </p>
            <p class="heading-title">
               You can do this by entering the name of the country in the field
               below or by going to the
               <router-link :to="{ name: 'Countries' }" class="link-title"
                  >countries page</router-link
               >
               where a list of all countries will be displayed.
            </p>
         </v-container>
         <v-container>
            <div class="d-flex justify-center px-4">
               <v-text-field
                  label="Search for country"
                  :rules="rules"
                  hide-details="auto"
                  prepend-inner-icon="mdi-magnify"
                  v-model="input"
                  class="input-field"
               ></v-text-field>
            </div>
            <v-btn class="mt-6" variant="tonal" @click="getCountry"
               >Search</v-btn
            >
         </v-container>
      </div>
   </div>
</template>

<script setup>
   import { ref } from "vue";

   const input = ref("");
</script>

<!-- <script>
   export default {
      name: "HomePage",
      input: "",
      country: {},

      methods: {
         clearSearch() {
            setTimeout(() => {
               this.search = null;
            }, 100);
         },
         getCountry() {
            const search = this.input.toLowerCase().trim();
            let url = "all";
            if (search) {
               url = `name/${search}`;
            }
            setTimeout(() => {
               this.callAPI(url);
            });
         },
         callAPI(url) {
            this.$http
               .get(url)
               .then((response) => {
                  if (response.status == 200) {
                     this.country = response.data;
                     this.$router.push({
                        name: "Details",
                        params: { code: btoa(this.country[0].cca3) },
                     });
                  }
               })
               .catch((error) => {
                  console.log(error);
               });
         },
         goToCountries() {
            this.$router.push("/countries");
         },
      },
   };
</script> -->

<style scoped>
   .wrapper {
      margin-top: 100px;
      padding: 20px;
   }
   .background-image {
      position: fixed;
      width: 100%;
      height: 100vh;
      background-image: url("../../public/earth-bg.jpg");
      background-size: 100% 100%;
      opacity: 0.8;
   }
   .heading-main {
      font-size: 58px;
      margin-bottom: 45px;
      text-transform: uppercase;
      font-weight: 700;
   }
   .heading-title {
      font-size: 22px;
      margin-bottom: 40px;
      font-weight: 500;
      color: #fff;
   }
   .link-title {
      color: darkblue;
   }
   .content {
      position: absolute;
      padding: 12px;
      text-align: center;
      z-index: 1;
   }
   .input-field {
      max-width: 600px;
   }

   @media (max-width: 600px) {
      .heading-main {
         font-size: 32px;
      }
      .heading-title {
         font-size: 18px;
      }
   }
</style>
