import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);

import router from "./router";
// 全局组件
import MkBox from "./components/Box/index";
app.use(MkBox);
app.use(router);

app.mount("#app");
