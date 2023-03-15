import { App } from "vue";

import HeaderVue from "./HeaderVue.vue";

export const install = (app: App) => {
  app.component("HeaderVue", HeaderVue);
};

export default install;
