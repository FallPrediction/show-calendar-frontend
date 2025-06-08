const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Home/Index.vue') },
      { path: '/shows/:id', component: () => import('src/pages/Show/Show.vue') },
    ]
  },
  {path: '/register', component: () => import('src/pages/Authentication/Register.vue')},

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
