<template>
   <v-main class="custom-background">
      <div class="wrapper">
         <v-container>
            <v-row class="mt-2 mb-6"
               ><v-col
                  ><v-btn class="btn" color="#4FC3F7" @click="goBack"
                     ><v-icon>mdi-arrow-left</v-icon> Back</v-btn
                  ></v-col
               ></v-row
            >
            <v-row>
               <v-col md="6" sm="12" xs="12">
                  <v-img
                     class="image"
                     lazy-src="https://cdn.mos.cms.futurecdn.net/FaWKMJQnr2PFcYCmEyfiTm.jpg"
                     :src="selectedCountry.flags && selectedCountry.flags.svg"
                     cover
                     ><template v-slot:placeholder>
                        <div
                           class="d-flex align-center justify-center fill-height"
                        >
                           <v-progress-circular
                              color="white"
                              indeterminate
                           ></v-progress-circular>
                        </div> </template
                  ></v-img>
               </v-col>
               <v-col md="6" sm="12" xs="12" class="pa-4">
                  <div class="mt-8">
                     <h2>{{ selectedCountry.name.common }}</h2>
                     <v-row class="mt-3">
                        <v-col lg="12" md="12" sm="12" xs="12">
                           <div
                              :class="`d-flex justify-space-between flex-wrap `"
                              style="height: 100%"
                           >
                              <div>
                                 <div class="mb-2">
                                    <b>Population: </b
                                    >{{
                                       separateNumbers(
                                          selectedCountry.population
                                       )
                                    }}
                                 </div>
                                 <div class="mb-2">
                                    <b>Region: </b>{{ selectedCountry.region }}
                                 </div>
                                 <div class="mb-2">
                                    <b>Sub Region: </b
                                    >{{ selectedCountry.subregion }}
                                 </div>
                                 <div class="mb-2">
                                    <b>Capital: </b
                                    >{{
                                       selectedCountry.capital &&
                                       selectedCountry.capital[0]
                                    }}
                                 </div>
                              </div>
                              <div>
                                 <div class="mb-2">
                                    <b>Top Level Domain: </b
                                    ><span
                                       class="mr-2"
                                       v-for="domain in selectedCountry.tld"
                                       :key="domain"
                                       >{{ domain }}</span
                                    >
                                 </div>
                                 <div class="mb-2">
                                    <b>Currencies: </b
                                    ><span
                                       class="mr-2"
                                       v-for="currency in selectedCountry.currencies"
                                       :key="currency.code"
                                       >{{
                                          currency.name +
                                          " (" +
                                          currency.symbol +
                                          ")"
                                       }}</span
                                    >
                                 </div>
                                 <div class="mb-2">
                                    <b>Languages: </b
                                    ><span
                                       class="mr-2"
                                       v-for="language in selectedCountry.languages"
                                       :key="language"
                                       >{{ language }}
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </v-col>
                     </v-row>
                     <div class="mt-4">
                        <b class="mr-4">Border Countries:</b>
                        <span>
                           <v-btn
                              color="#4FC3F7"
                              class="mr-4 mb-4"
                              v-for="border in selectedCountry.borders"
                              @click="getBorder(border)"
                              :key="border"
                              >{{ border }}</v-btn
                           >
                        </span>
                     </div>
                  </div>
               </v-col>
            </v-row>
         </v-container>
      </div>
   </v-main>
</template>

<script setup>
   import { ref } from "vue";
   import { useRoute, useRouter } from "vue-router";
   import countriesServices from "@/services/countriesServices";
   import { separateNumbers } from "@/utils/filter.js";

   const route = useRoute();
   const router = useRouter();
   const selectedCountry = ref({
      name: "",
   });
   const code = ref(route.params.code);

   const getCountriesCode = async (code) => {
      try {
         const response = await countriesServices.getCountriesCode(code);
         selectedCountry.value = response.data[0];
      } catch (error) {
         console.log(error);
      }
   };
   getCountriesCode(code.value);

   function getBorder(border) {
      router
         .push({
            name: "Details",
            params: { code: border },
         })
         .then(() => {
            window.location.reload();
         });
   }

   function goBack() {
      router.push({
         name: "Countries",
      });
   }
</script>

<style>
   .custom-background {
      background: linear-gradient(
         180deg,
         rgba(142, 182, 255, 0.3) 0%,
         rgba(211, 232, 251, 0.3) 100%
      );
      padding: 30px 0 0 0 !important;
   }
   .wrapper {
      margin-top: 30px;
      padding: 20px;
   }
   .image {
      border: 1px solid gray;
      box-shadow: 2px 2px 10px gray;
   }
   .image:hover {
      box-shadow: 1px 1px 10px #039be5;
   }
</style>
