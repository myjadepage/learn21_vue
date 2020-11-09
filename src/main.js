import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

import 'line-awesome/dist/line-awesome/css/line-awesome.min.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/learn21.css';
import 'jquery.nicescroll';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
