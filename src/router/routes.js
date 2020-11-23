const routes = [
  {
    path: "/:type",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/:type",
        component: () => import("pages/welcome.vue"),
        name: "welcome"
      },
      {
        path: "/mainPrepost/:type",
        component: () => import("pages/mainPrepost.vue"),
        name: "mainPrepost"
      },
      {
        path: "/finish/:type",
        component: () => import("pages/finish.vue"),
        name: "finish"
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
