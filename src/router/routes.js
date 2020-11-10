const routes = [
  {
    path: "/",
    component: () => import("pages/login.vue"),
    name: "login.vue"
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/",
        component: () => import("pages/login.vue"),
        name: "login.vue"
      },
      {
        path: "/welcome/:type?",
        component: () => import("pages/welcome.vue"),
        name: "welcome.vue"
      },
      {
        path: "/mainPrepost",
        component: () => import("pages/mainPrepost.vue"),
        name: "mainPrepost.vue"
      },
      {
        path: "/finish",
        component: () => import("pages/finish.vue"),
        name: "finish.vue"
      }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
