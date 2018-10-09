import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";
import VueFire from "vuefire";
import "firebase/firestore";

Vue.config.productionTip = false;
Vue.use(VueFire);

var config = {
  apiKey: "AIzaSyCFTO_UBPB86D8krEtZ6SombVo7luLxUQU",
  authDomain: "pss-speed.firebaseapp.com",
  databaseURL: "https://pss-speed.firebaseio.com",
  projectId: "pss-speed",
  storageBucket: "",
  messagingSenderId: "196466926562"
};
firebase.initializeApp(config);

export const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
