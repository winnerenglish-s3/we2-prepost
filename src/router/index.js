import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

var firebaseConfig = {
  apiKey: "AIzaSyDfkvwshPDlNA_U0CmYHQZjDQPABTBndG4",
  authDomain: "winneradventure-ed4a1.firebaseapp.com",
  databaseURL: "https://winneradventure-ed4a1.firebaseio.com",
  projectId: "winneradventure-ed4a1",
  storageBucket: "winneradventure-ed4a1.appspot.com",
  messagingSenderId: "422902637715",
  appId: "1:422902637715:web:438cffdb3cb09f4ac91966"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default function(/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  return Router;
}
