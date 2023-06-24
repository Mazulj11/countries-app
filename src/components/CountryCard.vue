<template>
   <v-card @click="gotoDetails">
      <v-img
         class="image-border"
         height="200"
         lazy-src="https://cdn.mos.cms.futurecdn.net/FaWKMJQnr2PFcYCmEyfiTm.jpg"
         :src="props.flags.svg"
         cover
         ><template v-slot:placeholder>
            <div class="d-flex align-center justify-center fill-height">
               <v-progress-circular
                  color="white"
                  indeterminate
               ></v-progress-circular>
            </div> </template
      ></v-img>
      <v-card-text>
         <div class="card_title">{{ props.name.common }}</div>
         <!-- <div><b>Population: </b>{{ $numberFormatter(population) }}</div> -->
         <div><b>Region: </b>{{ props.region }}</div>
         <div><b>Capital: </b>{{ props.capital[0] }}</div>
      </v-card-text>
   </v-card>
</template>

<script setup>
   import { defineProps } from "vue";
   import { useRouter } from "vue-router";

   const props = defineProps({
      flags: { type: String, default: null },
      name: { type: String, default: "NA" },
      population: { type: Number, default: 0 },
      region: { type: String, default: "NA" },
      capital: { type: String, default: "NA" },
      cca3: { type: String, default: "NA" },
   });

   const router = useRouter();

   function gotoDetails() {
      router.push({
         name: "Details",
         params: { code: btoa(props.cca3) },
      });
   }
</script>

<!-- <script>
   // import app from "@/utils/filter.js";
   export default {
      name: "CountriyCard",
      data() {
         return {
            // numberFormatter: app.config.globalProperties.$numberFormatter,
         };
      },
      props: {
         flags: { type: String, default: null },
         name: { type: String, default: "NA" },
         population: { type: Number, default: 0 },
         region: { type: String, default: "NA" },
         capital: { type: String, default: "NA" },
         cca3: { type: String, default: "NA" },
      },
      methods: {
         gotoDetails() {
            this.$router.push({
               name: "Details",
               params: { code: btoa(this.cca3) },
            });
         },
      },
   };
</script> -->

<style>
   .card_title {
      font-weight: bold;
      font-size: 16px;
      margin-bottom: 10px;
   }
   .card img {
      width: 100%;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      object-fit: cover;
      object-position: 50% 100%;
   }
   .image-border {
      border: 1px solid grey;
   }
</style>
