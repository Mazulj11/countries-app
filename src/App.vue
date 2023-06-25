<template>
   <nav-bar></nav-bar>
   <v-app>
      <router-view />
   </v-app>
</template>

<script setup>
   import NavBar from "@/components/NavBar.vue";
</script>
