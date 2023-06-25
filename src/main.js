import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./utils/filter";
import vuetify from "./plugins/vuetify";
import "@mdi/font/css/materialdesignicons.css";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

createApp(App).use(router).use(vuetify).mount("#app");
