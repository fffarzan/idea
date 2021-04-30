import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import NProgress from "nprogress";

import EventList from "../views/EventList.vue";
import About from "../views/About.vue";
import EventLayout from "@/views/event/Layout.vue";
import EventDetails from "@/views/event/Details.vue";
import EventRegister from "@/views/event/Register.vue";
import EventEdit from "@/views/event/Edit.vue";
import EventForm from "@/views/EventForm.vue";
import NotFound from "@/views/NotFound.vue";
import NetworkError from "@/views/NetworkError.vue";
import EventService from "@/services/EventService";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "EventList",
    props: (route) => ({ page: Number(route.query.page) || 1 }),
    component: EventList,
  },
  {
    path: "/events/:id",
    name: "EventLayout",
    props: true,
    component: EventLayout,
    children: [
      {
        path: "",
        name: "EventDetails",
        component: EventDetails,
      },
      {
        path: "register",
        name: "EventRegister",
        component: EventRegister,
      },
      {
        path: "edit",
        name: "EventEdit",
        component: EventEdit,
      },
    ],
    beforeEnter(routeTo: any, routeFrom: any, next: any) {
      EventService.getEvents(2, parseInt(routeTo.query.page) || 1)
        .then(() => next())
    }
  },
  {
    path: '/event/:afterEvent(.*)',
    redirect: (to) => ({ path: `/events/${to.params.afterEvent}` })
  },
  {
    path: "/event-form",
    name: "EventForm",
    component: EventForm
  },
  {
    path: "/about",
    name: "About",
    component: About,
    alias: "/about-us"
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFound,
    props: true
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetworkError,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((routeTo: any, routeFrom: any, next: any) => {
  NProgress.start();
  next();
})

router.afterEach(() => {
  NProgress.done();
})

export default router;
