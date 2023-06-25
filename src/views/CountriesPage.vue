<template>
   <v-main class="custom-background">
      <div class="wrapper">
         <v-container>
            <v-row class="mt-12">
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
                     @change="getCountriesRegion(selectedRegion)"
                     label="Filter by region"
                     :items="regions"
                     solo
                     clearable
                  >
                  </v-select>
               </v-col>
            </v-row>
         </v-container>

         <div class="country-card">
            <country-card
               class="card-main"
               v-for="country in displayedCountries"
               :key="country.cca3"
               v-bind="country"
            ></country-card>
         </div>
         <v-pagination
            v-model="currentPage"
            :total-visible="visiblePages"
            :length="totalPages"
            color="light-blue-lighten-1"
            @input="paginate"
         ></v-pagination>
      </div>
   </v-main>
</template>

<script setup>
   import { ref, watch, computed } from "vue";
   import CountryCard from "@/components/CountryCard.vue";
   import countriesServices from "@/services/countriesServices.js";

   const countries = ref([]);
   const search = ref("");
   const selectedRegion = ref("");
   const regions = ref(["Africa", "Americas", "Asia", "Europe", "Oceania"]);

   const getAllCountries = async () => {
      try {
         const response = await countriesServices.getAllCountries();
         countries.value = response.data;
      } catch (error) {
         console.log(error);
      }
   };
   getAllCountries();

   const getCountriesRegion = async (selectedRegion) => {
      if (selectedRegion === null) {
         getAllCountries();
         currentPage.value = 1;
      } else {
         try {
            const response = await countriesServices.getCountriesRegion(
               selectedRegion
            );
            countries.value = response.data;
            currentPage.value = 1;
         } catch (error) {
            console.log(error);
         }
      }
   };

   const getCountriesName = async (search) => {
      if (search === "") {
         getAllCountries();
         currentPage.value = 1;
      } else {
         try {
            const response = await countriesServices.getCountriesName(search);
            countries.value = response.data;
            currentPage.value = 1;
         } catch (error) {
            console.log(error);
         }
      }
   };

   /* PAGINATION */
   const itemsPerPage = 20;
   const currentPage = ref(1);

   const sortedCountries = computed(() => {
      return countries.value
         .slice()
         .sort((a, b) => a.name.common.localeCompare(b.name.common));
   });

   const totalPages = computed(() =>
      Math.ceil(sortedCountries.value.length / itemsPerPage)
   );
   const displayedCountries = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return sortedCountries.value.slice(startIndex, endIndex);
   });

   const visiblePages = computed(() => Math.min(5, totalPages.value));

   function paginate(page) {
      currentPage.value = page;
   }

   watch(selectedRegion, () => {
      getCountriesRegion(selectedRegion.value);
   });
   watch(search, () => {
      getCountriesName(search.value);
   });
</script>

<style scoped>
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
   .wrapper {
      margin-top: 30px;
      padding: 20px;
   }

   .country-card {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      row-gap: 30px;
      column-gap: 30px;
      margin: 40px 20px;
   }
   .card-main:hover {
      box-shadow: 1px 1px 10px #039be5;
   }
</style>
