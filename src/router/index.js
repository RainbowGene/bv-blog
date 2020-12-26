import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: { name: 'test' },
  },
  {
    path: "/home",
    name: 'home',
    component: () => import('@/views/template/index')
  },
  {
    path: "/test",
    name: 'test',
    component: () => import('@/views/template/test')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
