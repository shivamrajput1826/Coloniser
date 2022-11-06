import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LandingPage from "../views/landing/LandingPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Landing",
    component: LandingPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
