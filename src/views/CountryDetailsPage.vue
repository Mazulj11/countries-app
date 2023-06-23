<template>
   <v-main class="custom-background">
      <v-container>
         <v-row
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
                  :src="country[0].flags.svg"
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
                  <h2>{{ country[0].name.common }}</h2>
                  <v-row class="mt-3">
                     <v-col lg="12" md="12" sm="12" xs="12">
                        <div
                           :class="`d-flex justify-space-between flex-wrap `"
                           style="height: 100%"
                        >
                           <div>
                              <div class="mb-2">
                                 <b>Population: </b
                                 >{{ $numberFormatter(country[0].population) }}
                              </div>
                              <div class="mb-2">
                                 <b>Region: </b>{{ country[0].region }}
                              </div>
                              <div class="mb-2">
                                 <b>Sub Region: </b>{{ country[0].subregion }}
                              </div>
                              <div class="mb-2">
                                 <b>Capital: </b>{{ country[0].capital[0] }}
                              </div>
                           </div>
                           <div>
                              <div class="mb-2">
                                 <b>Top Level Domain: </b
                                 ><span
                                    class="mr-2"
                                    v-for="domain in country[0].tld"
                                    :key="domain"
                                    >{{ domain }}</span
                                 >
                              </div>
                              <div class="mb-2">
                                 <b>Currencies: </b
                                 ><span
                                    class="mr-2"
                                    v-for="currency in country[0].currencies"
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
                                    v-for="language in country[0].languages"
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
                           v-for="border in country[0].borders"
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
   </v-main>
</template>

<script>
   // import app from "@/utils/filter.js";
   export default {
      name: "CountriesDetailsPage",
      data() {
         return {
            country: {},
            code: null,
            // numberFormatter: app.config.globalProperties.$numberFormatter,
         };
      },
      mounted() {
         this.init();
      },
      methods: {
         init() {
            if (this.$route.params.code) {
               let data = atob(this.$route.params.code);
               this.code = data;
               this.getCountryDetails();
            }
         },
         getCountryDetails() {
            this.$http
               .get(`alpha/${this.code}`)
               .then((response) => {
                  if (response.status == 200) {
                     const data = response.data;
                     this.country = data;
                  }
               })
               .catch((error) => {
                  console.log(error);
               });
         },
         goBack() {
            this.$router.push({
               name: "Countries",
            });
         },
         getBorder(border) {
            this.code = border;
            this.getCountryDetails();
         },
      },
   };
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
   .image {
      border: 1px solid gray;
      box-shadow: 2px 2px 10px gray;
   }
</style>
