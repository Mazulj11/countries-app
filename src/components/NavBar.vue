<script setup>
   import { ref } from "vue";

   const showMobileMenu = ref(false);

   function showMenu() {
      showMobileMenu.value = !showMobileMenu.value;
   }
</script>

<template>
   <nav class="navbar">
      <div class="logo">
         <h1 class="logo-title">COUNTRIES OF THE WORLD</h1>
      </div>

      <div
         class="menu-content"
         :class="showMobileMenu ? 'menu-open' : 'menu-closed'"
      >
         <ul class="menu__list">
            <li class="menu__list-element" @click="showMobileMenu = false">
               <RouterLink
                  :to="{ name: 'Home' }"
                  @click="showMobileMenu = false"
                  ><v-icon
                     class="mr-3"
                     size="35"
                     icon="mdi-home"
                  />Home</RouterLink
               >
            </li>
            <li class="menu__list-element" @click="showMobileMenu = false">
               <RouterLink
                  :to="{ name: 'Countries' }"
                  @click="showMobileMenu = false"
                  ><v-icon
                     class="mr-3"
                     size="35"
                     icon="mdi-earth"
                  />Countries</RouterLink
               >
            </li>
            <li class="menu__list-element" @click="showMobileMenu = false">
               <RouterLink
                  :to="{ name: 'About' }"
                  @click="showMobileMenu = false"
                  ><v-icon
                     icon="mdi-information"
                     class="mr-3"
                     size="35"
                  />About</RouterLink
               >
            </li>
         </ul>
      </div>
      <div class="menu-btn" @click="showMenu">
         <v-icon icon="mdi-menu" size="45" />
      </div>
   </nav>
</template>

<style scoped>
   .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 5rem;
      width: 100%;
      padding: 0 1.6rem;
      position: fixed;
      top: 0;
      left: 0;
      color: #000;
      background: linear-gradient(
         180deg,
         rgba(3, 155, 229, 1) 0%,
         rgba(129, 212, 250, 1) 100%
      );
      box-shadow: 1px 1px 5px #aaa;
      z-index: 100;
   }
   .logo-title {
      font-style: normal;
      font-weight: 600;
      font-size: 26px;
      z-index: 100;
   }
   .menu__list {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
   }
   .menu__list-element {
      margin: 0 5px;
      cursor: pointer;
      padding: 0.4rem 0.8rem;
      font-size: 24px;
   }
   .menu__list-element:hover {
      background-color: #ffffff40;
      border-radius: 1rem;
   }
   .menu__list-element:active {
      transform: translate(1px, 1px);
   }
   a {
      color: #000;
      text-decoration: none;
   }
   .menu__icon {
      margin: 0 0.8rem;
   }
   .menu-btn {
      display: none;
   }

   @media (max-width: 900px) {
      .menu-btn {
         display: block;
         margin-right: 16px;
         z-index: 100;
      }
      .menu-open {
         opacity: 1;
         height: 400px;
         width: 100%;
         position: fixed;
         top: 0;
         left: 0;
         background: linear-gradient(
            180deg,
            rgba(3, 155, 229, 1) 0%,
            rgba(129, 212, 250, 1) 100%
         );
         box-shadow: 1px 1px 5px #aaa;
         padding-top: 90px;
      }
      .menu-closed {
         opacity: 0;
         height: 0;
         width: 100%;
         position: absolute;
         top: 0;
         left: 0;
      }
      .menu__list {
         flex-direction: column;
         z-index: 100;
         position: relative;
         font-size: 20px;
      }
      .menu__list-element {
         margin-bottom: 40px;
      }
      .menu-content {
         transition: all 0.5s ease-out;
      }
   }
</style>
