import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { store as popupStore, key as popupKey } from "./store/popupMessage";

import "./assets/main.css";

const app = createApp(App);

app.use(popupStore, popupKey);

app.use(router);

app.mount("#app");
