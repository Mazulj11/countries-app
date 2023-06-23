<template>
   <v-app>
      <nav-bar></nav-bar>
      <router-view />
   </v-app>
</template>

<script setup>
   import NavBar from "@/components/NavBar.vue";
</script>
