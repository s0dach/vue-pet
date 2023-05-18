import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import MainPage from "../pages/MainPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/main",
    component: MainPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
