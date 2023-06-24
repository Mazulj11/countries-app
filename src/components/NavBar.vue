<template>
   <v-app-bar color="#039BE5" app>
      <div class="d-flex align-center">
         <h4>COUNTRIES OF THE WORLD</h4>
      </div>
      <v-spacer></v-spacer>
      <div
         class="menu-content"
         :class="showMobileMenu ? 'menu-open' : 'menu-closed'"
      >
         <v-btn
            class="in-mobile-menu"
            variant="tonal"
            :ripple="false"
            text
            :to="{ name: 'Home' }"
            @click="showMobileMenu = false"
            ><span class="ml-2"></span>Home</v-btn
         >
         <v-btn
            class="in-mobile-menu"
            variant="tonal"
            :ripple="false"
            text
            :to="{ name: 'Countries' }"
            @click="showMobileMenu = false"
            ><span class="ml-2"></span>Countries</v-btn
         >
         <v-btn
            class="in-mobile-menu"
            variant="tonal"
            :ripple="false"
            text
            :to="{ name: 'About' }"
            @click="showMobileMenu = false"
            ><span class="ml-2"></span>About</v-btn
         >
      </div>
      <div class="menu-btn" @click="showMenu">
         <v-btn>Menu</v-btn>
      </div>
   </v-app-bar>
</template>

<script setup>
   import { ref } from "vue";

   const showMobileMenu = ref(false);

   const showMenu = () => {
      showMobileMenu.value = !showMobileMenu.value;
   };
</script>

<style>
   .mode-toggle {
      margin-right: 100px;
   }
   .title {
      font-weight: 800;
      font-size: 3vh;
   }
   .menu-btn {
      display: none;
   }
   @media (max-width: 750px) {
      .menu-btn {
         display: block;
         z-index: 100;
      }
      .menu-open {
         opacity: 1;
         height: 200px;
         width: 100%;
         position: absolute;
         top: 0;
         left: 0;
         background: linear-gradient(
            180deg,
            rgba(3, 155, 229, 1) 0%,
            rgba(129, 212, 250, 1) 100%
         );
         padding-top: 70px;
         z-index: 100;
      }
      .menu-closed {
         opacity: 0;
         height: 0;
         width: 100%;
         position: absolute;
         top: 7.5rem;
         left: 0;
      }
      .menu-content {
         transition: all 0.5s ease-out;
      }
      .in-mobile-menu {
         width: 100%;
         margin-bottom: 5px;
      }
   }
</style>
