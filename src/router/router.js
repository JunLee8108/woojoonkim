import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`);
}

const routes = [
  {
    path: "/",
    name: "home",
    component: lazyLoad("LandingPage"),
  },
  {
    path: "/about",
    name: "about",
    component: lazyLoad("AboutPage"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
