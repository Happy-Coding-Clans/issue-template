import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/home.vue";
import i18n from "@/locale/i18n";

Vue.use(Router);

let route = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      redirect: {
        name: "zh",
      },
    },
  ],
});

Object.keys(i18n).forEach((lang) => {
  route.addRoutes([
    {
      path: `/${lang}`,
      name: lang,
      component: Home,
    },
  ]);
});

export default route;
