import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import Keycloak from "keycloak-js";

Vue.config.productionTip = false;

let initOptions = {
  url: `${process.env.VUE_APP_KEYCLOAK_HOST}/auth`,
  realm: 'Development',
  clientId: 'ToDo-FrontEnd',
};
let keycloak = Keycloak(initOptions);
keycloak
  .init({ onLoad: "check-sso", checkLoginIframe: false })
  .then(() => {
    if (keycloak.authenticated) {
      console.log("Keycloak Authenticated");
    } else {
      console.log("Keycloak not Authenticated");
    }
  })
  .then(() => {
    store.commit("user/setKeycloak", keycloak);
  });
store.commit("user/setKeycloak", keycloak);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
