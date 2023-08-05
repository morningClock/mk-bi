import { createRouter, createWebHistory } from "vue-router";
import { Layout } from "@/layouts/index";
import NotFound from "@/views/errorPage/notFound.vue";

const routes = [
  {
    path: "/",
    name: "BaseLayout",
    component: Layout,
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
  // 404 Not Found
  {
    path: "/:pathMatch(.*)",
    component: NotFound,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
