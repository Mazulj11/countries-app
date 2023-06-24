import { createRouter, createWebHistory } from "vue-router";

const routes = [
   {
      path: "/",
      redirect: "/home",
   },
   {
      name: "Home",
      path: "/home",
      component: () => import("@/views/HomePage.vue"),
      meta: {
         item: null,
         module: {
            id: null,
         },
         title: "Home",
      },
   },
   {
      path: "/details/:code",
      name: "Details",
      component: () => import("@/views/CountryDetailsPage.vue"),
      meta: {
         item: null,
         module: {
            id: null,
         },
         title: "Details",
      },
      props: {
         code: null,
      },
   },
   {
      path: "/countries",
      name: "Countries",
      component: () => import("@/views/CountriesPage.vue"),
   },
   {
      path: "/about",
      name: "About",
      component: () => import("@/views/AboutPage.vue"),
   },
   // 404
   {
      name: "NotFound",
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/NotFoundPage.vue"),
      meta: {
         item: null,
         module: {
            id: null,
         },
         title: "Not Found",
      },
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
