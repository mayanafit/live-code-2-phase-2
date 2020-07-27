import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import AnimalPage from '../views/AnimalPage.vue';
import FavoritePage from '../views/FavoritePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: '',
        name: 'AnimalPage',
        component: AnimalPage,
      },
      {
        path: 'favorites',
        name: 'FavoritePage',
        component: FavoritePage,
      }
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'Home' && !localStorage.access_token) {
    next({ name: 'Home' })
  } else if (to.name === 'Home' && localStorage.access_token) {
    next({ name: 'AnimalPage' })
  } else {
    next()
  }
})

export default router;
