import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import authRoutes from "./auth/auth-route";
import dashboardRoutes from '@/router/dashboard-route'

const routes = [
  ...dashboardRoutes,
  ...authRoutes,
]

//vue router 3
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router