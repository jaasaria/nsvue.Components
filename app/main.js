import Vue from "nativescript-vue";
import Home from "./components/page/Home";
import store from "./store";

import { SwissArmyKnife } from "nativescript-swiss-army-knife";
import VueDevtools from "nativescript-vue-devtools";


import { TNSFontIcon, fonticon } from "nativescript-fonticon";

TNSFontIcon.debug = false;
TNSFontIcon.paths = {
  fa: "./fonts/font-awesome.css",
  ion: "./fonts/ionicons.css"
};
TNSFontIcon.loadCss();
Vue.filter("fonticon", fonticon);

if (TNS_ENV !== "production") {
  Vue.use(VueDevtools);
}
// Vue.config.silent = TNS_ENV === "production";
Vue.config.silent = false;

new Vue({
  store,
  mounted() {
    SwissArmyKnife.setAndroidStatusBarColor("#ec6f1e");
  },
  render: h => h("frame", [h(Home)])
}).$start();
