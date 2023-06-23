<template>
   <v-main class="custom-background">
      <v-container>
         <v-row class="mt-6">
            <v-col>
               <v-text-field
                  label="Search"
                  v-model="search"
                  solo
                  prepend-inner-icon="mdi-magnify"
                  clearable
                  @click:clear="clearSearch"
               >
               </v-text-field
            ></v-col>
            <v-spacer class="d-none d-md-flex d-lg-flex"></v-spacer>
            <v-col>
               <v-select
                  v-model="selectedRegion"
                  @change="filteredCountries"
                  label="Filter by region"
                  :items="regions"
                  solo
                  clearable
               >
               </v-select>
               <v-btn @click="filteredCountries">CLICK</v-btn>
            </v-col>
         </v-row>
         <v-row>
            <v-col v-for="country in countries" :key="country.cca3" md="3">
               <div class="country-card">
                  <country-card v-bind="country"></country-card>
               </div>
            </v-col>
         </v-row>
      </v-container>
   </v-main>
</template>

<script setup>
   import { ref } from "vue";
   import CountryCard from "@/components/CountryCard.vue";
   import countriesServices from "@/services/countriesServices.js";

   const countries = ref([]);
   const search = ref("");
   const selectedRegion = ref("");
   const regions = ref(["Africa", "Americas", "Asia", "Europe", "Oceania"]);

   // watch(
   //    search,
   //    (val) => {
   //       if (val) {
   //          region.value = null;
   //          getCountries();
   //       }
   //    },
   //    { immediate: true }
   // );

   // function regionChange() {
   //    search.value = null;
   //    getCountries();
   // }
   // function clearSearch() {
   //   setTimeout(() => {
   //     search.value = null;
   //     getCountries();
   //   }, 100);
   // }
   // const getCountries = async () => {
   //    if (regions.value) {
   //       const selectedRegion = region.value;
   //       getCountriesRegion(selectedRegion);
   //    }
   // };

   // const getCountriesRegion = async (selectedRegion) => {
   //    try {
   //       const response = await countriesServices.getCountriesRegion(
   //          selectedRegion
   //       );
   //       countries.value = response.data;
   //    } catch (error) {
   //       console.log(error);
   //    }
   //    getCountriesRegion();
   // };

   const getAllCountries = async () => {
      try {
         const response = await countriesServices.getAllCountries();
         console.log(response);
         countries.value = response.data;
         console.log(countries.value);
      } catch (error) {
         console.log(error);
      }
   };
   getAllCountries();

   const filteredCountries = () => {
      if (!selectedRegion.value) {
         console.log("1 " + countries.value);
         return countries.value;
      }
      return countries.value.filter(
         (countries) => countries.region === selectedRegion.value,
         console.log("2 " + countries.value)
      );
   };
</script>

<style>
   .custom-background {
      width: 100%;
      height: 100%;
      background: linear-gradient(
         180deg,
         rgba(142, 182, 255, 0.3) 0%,
         rgba(211, 232, 251, 0.3) 100%
      );
      padding: 20px 0 0 0 !important;
   }
   .country-card:hover {
      box-shadow: 1px 1px 10px #039be5;
   }
</style>
