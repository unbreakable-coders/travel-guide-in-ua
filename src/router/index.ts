import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/pages/HomePage.vue";
import DevelopPage from "../components/pages/DevelopPage.vue";
import DevToolsPage from "../components/pages/DevToolsPage.vue";
import { setupLanguageGuard } from "./language.guard";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:lang?",
      children: [
        { path: "", name: "home", component: HomePage },
        { path: "develop", name: "develop", component: DevelopPage },
        { path: "devtools", name: "devtools", component: DevToolsPage },
      ],
    },
  ],
});

setupLanguageGuard(router);
