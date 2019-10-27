import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "@/views/About.vue");
    }
  },
{
    path: "/partners",
    name: "partners",
    component: function () {
      return import( /* webpackChunkName: "about" */ "@/views/Partners.vue");
    }
  },
  {
    path: "/github",
    name: "github",
    component: function () {
      return import( /* webpackChunkName: "about" */ "@/views/Github.vue");
    }
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: function () {
      return import( /* webpackChunkName: "about" */ "@/views/PrivacyPolicy.vue");
    }
  },
  {
    path: "/cookie-policy",
    name: "cookie-policy",
    component: function () {
      return import( /* webpackChunkName: "about" */ "@/views/CookiePolicy.vue");
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
