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
                  v-model="region"
                  @change="regionChange"
                  label="Filter by region"
                  :items="regions"
                  item-text="name"
                  item-value="code"
                  solo
                  clearable
               >
               </v-select>
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

<script>
   import CountryCard from "../components/CountryCard.vue";

   export default {
      name: "CountriesPage",
      components: {
         "country-card": CountryCard,
      },
      data() {
         return {
            countries: [],
            search: null,
            region: null,
            regions: ["Africa", "Americas", "Asia", "Europe", "Oceania"],
         };
      },
      mounted() {
         this.getCountries();
      },
      watch: {
         search: {
            immediate: true,
            handler(val) {
               if (val) {
                  this.region = null;
                  this.getCountries();
               }
            },
         },
      },
      methods: {
         regionChange() {
            this.search = null;
            this.getCountries();
         },
         clearSearch() {
            setTimeout(() => {
               this.search = null;
               this.getCountries();
            }, 100);
         },
         getCountries() {
            let url = "all";
            if (this.search) {
               url = `name/${this.search}`;
            } else if (this.region) {
               url = `region/${this.region.toLowerCase()}`;
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
                     this.countries = response.data;
                  }
               })
               .catch((error) => {
                  console.log(error);
               });
         },
      },
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
