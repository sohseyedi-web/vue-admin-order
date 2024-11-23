import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import Vue3Toastify from "vue3-toastify";
import { router } from "./routes";


createApp(App)
  .use(router)
  .use(createPinia())
  .use(Vue3Toastify)
  .mount("#app");
