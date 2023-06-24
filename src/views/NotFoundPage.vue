<template>
   <div class="wrapper">
      <h1 class="heading">404 - Page Not Found</h1>
      <p class="title">The page you are looking for does not exist.</p>
   </div>
</template>

<style scoped>
   .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      text-align: center;
      height: 100vh;
      background: linear-gradient(
         180deg,
         rgba(142, 182, 255, 0.3) 0%,
         rgba(211, 232, 251, 0.3) 100%
      );
   }
   .heading {
      font-size: 50px;
      font-weight: bold;
   }
   .title {
      font-size: 20px;
      font-weight: 400;
      font-style: italic;
   }

   @media (max-width: 510px) {
      .heading {
         font-size: 30px;
      }
      .title {
         font-size: 14px;
      }
   }
</style>
