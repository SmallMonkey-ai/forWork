import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: () => import('../views/index.vue'),
  meta: {
    title: '首页'
  }
}, ]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,

})

export default router