<template>
   <v-img class="background-image"></v-img>
   <div class="wrapper">
      <div class="content">
         <h1 class="ma-8">O projektu</h1>
         <p class="ml-6 mb-12 text-subtitle-1 text-justify">
            Ovaj projekt je napravnjen u sklopu kolegija Informatički projekt 2
            koji se održava na II. godini studija informatike na Fakultetu
            prirodoslovno-matematičkih i odgojnih znanosti (FPMOZ) na
            Sveučilištu u Mostaru.
            <br />
            <br />
            U projektu postoje tri glavne stranice Home, Countries, i About
            stranica. Na "Home" stranici mogu se pretražiti države po imenu tako
            što se klikom na polje za pretragu može unijeti ime države ili
            odabrati državu iz padajućeg izbornika. Nakon odabira države klikom
            na gumb "search" otvara se nova stranica gdje je prikazana zastava i
            detalji o odabranoj državi.
            <br />
            <br />
            Na stranici "Countries" prikazane su države u karticama poredane po
            abecedi moguća je pretraga po imenu ili regionu. Na ovoj stranici
            korištena je paginacija gdje je prikazano 20 kartica po stranici.
            Odabirom neke od prikazanih kartica otvara se stranica za detaljni
            prikaz države.
            <br />
            <br />
            Posljednja stranica je "About" gdje se nalazi kratki opis projekta i
            korištene tehnologije u projektu sa vezama na njihove službene
            stranice.
         </p>
         <h1 class="ma-10">Korištene tehnologije</h1>
         <v-row>
            <v-col cols="4"
               ><a href="https://en.wikipedia.org/wiki/HTML" target="_blank">
                  <v-img
                     class="image-services"
                     width="300"
                     :aspect-ratio="1"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/480px-HTML5_Badge.svg.png"
                     contain
                  ></v-img
               ></a>
               <h2>HTML</h2>
            </v-col>

            <v-col cols="4"
               ><a href="https://en.wikipedia.org/wiki/CSS" target="_blank">
                  <v-img
                     class="image-services"
                     width="300"
                     :aspect-ratio="1"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1200px-CSS3_logo.svg.png"
                     contain
                  ></v-img
               ></a>
               <h2>CSS</h2>
            </v-col>

            <v-col cols="4"
               ><a href="https://www.javascript.com/" target="_blank">
                  <v-img
                     class="image-services"
                     width="300"
                     :aspect-ratio="1"
                     src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                     contain
                  ></v-img
               ></a>
               <h2>JavaScript</h2>
            </v-col>
         </v-row>
         <v-row>
            <v-col cols="4"
               ><a href="https://vuejs.org/" target="_blank">
                  <v-img
                     class="image-services"
                     width="300"
                     :aspect-ratio="1"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
                     contain
                  ></v-img
               ></a>
               <h2>VueJS</h2>
            </v-col>
            <v-col cols="4"
               ><a href="https://vuetifyjs.com/en/" target="_blank">
                  <v-img
                     class="image-services"
                     width="300"
                     :aspect-ratio="1"
                     src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-light.svg"
                     contain
                  ></v-img
               ></a>
               <h2>Vuetify</h2>
            </v-col>
            <v-col cols="4">
               <a href="https://axios-http.com/docs/intro" target="_blank">
                  <v-img
                     class="image-services"
                     width="300"
                     :aspect-ratio="1"
                     src="https://miro.medium.com/v2/resize:fit:1400/1*3ZOwBIddHRkF7AkM2DjG1g.png"
                     contain
                  ></v-img>
               </a>
               <h2>Axios</h2>
            </v-col>
         </v-row>
      </div>
   </div>
</template>

<script setup></script>

<style scoped>
   .wrapper {
      margin-top: 100px;
      padding: 20px;
   }
   .background-image {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("../../public/earth-bg.jpg");
      background-size: 100% 100%;
      opacity: 0.15;
   }
   .content {
      z-index: 100;
   }
   .image-services {
      opacity: 1;
      transition: all 0.3s ease-in-out;
   }

   .image-services:hover {
      opacity: 0.7;
      transform: scale(1.1);
   }
</style>
