import Vue from "nativescript-vue";
import Home from "./components/page/Home";
import store from "./store";

import { TNSFontIcon, fonticon } from "nativescript-fonticon";

TNSFontIcon.debug = false;
TNSFontIcon.paths = {
  fa: "./fonts/font-awesome.css",
  ion: "./fonts/ionicons.css"
};
TNSFontIcon.loadCss();
Vue.filter("fonticon", fonticon);

// Vue.config.silent = TNS_ENV === "production";
Vue.config.silent = false;

new Vue({
  store,
  render: h => h("frame", [h(Home)])
}).$start();
