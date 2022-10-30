import { createRouter, createWebHashHistory } from "vue-router";
import StartView from "../views/StartView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "start",
      component: StartView,
    },
    {
      path: "/step1",
      name: "step1",
      component: () => import("../views/Step1View.vue"),
    },
    {
      path: "/step2",
      name: "step2",
      component: () => import("../views/Step2View.vue"),
    },
    {
      path: "/step3",
      name: "step3",
      component: () => import("../views/Step3View.vue"),
    },
    {
      path: "/step4",
      name: "step4",
      component: () => import("../views/Step4View.vue"),
    },
    {
      path: "/step5",
      name: "step5",
      component: () => import("../views/Step5View.vue"),
    },
    {
      path: "/step6",
      name: "step6",
      component: () => import("../views/Step6View.vue"),
    },
    {
      path: "/step7",
      name: "step7",
      component: () => import("../views/Step7View.vue"),
    },
    {
      path: "/finish",
      name: "finish",
      component: () => import("../views/FinishView.vue"),
    },
  ],
});

export default router;
