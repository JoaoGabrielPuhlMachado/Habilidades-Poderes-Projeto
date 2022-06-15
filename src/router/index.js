import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HabilidadesView from "../views/HabilidadesView.vue";
import PoderesView from "../views/PoderesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/habilidades",
      name: "habilidades",
      component: HabilidadesView,
    },
    {
      path: "/poderes",
      name: "poderes",
      component: PoderesView,
    },
  ],
});

export default router;
