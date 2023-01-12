import {createApp} from "vue";
import {createPinia } from 'pinia';
import App from "./App.vue";
import {createRouter, createWebHashHistory} from "vue-router";

import {routes} from "@/routes/routes";
const pinia = createPinia();

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

createApp(App)
    .use(router)
    .use(pinia)
    .mount("#app");
