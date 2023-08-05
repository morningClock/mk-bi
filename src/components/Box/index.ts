import { App, Plugin } from "vue";
import Box from "./box.vue";
import Boxs from "./boxs.vue";

// 全局注册器
export default {
  install: (app: App) => {
    app.component("mk-boxs", Boxs);
    app.component("mk-box", Box);
  },
} as Plugin;

export { Box, Boxs };
