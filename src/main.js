import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "@/assets/css/bootstrap.min.css";
import "@/assets/css/demo.css";
import "@/assets/css/light-bootstrap-dashboard.css";

createApp(App).use(store).use(router).mount("#app");
