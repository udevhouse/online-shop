import Vue from 'vue'
import Router from 'vue-router'
// import Layout from './views/layout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // 訂購 首頁
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home/index.vue')
    },
    // 購物車 權限
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/carts/index.vue')
    },
    // 我的訂單 權限
    {
      path: '/orders',
      name: 'orders',
      component: () => import('./views/orders/index.vue')
    }
    // 更多 權限
    // {
    //   path: '/memberCard',
    //   name: 'memberCard',
    //   component: () => import('./views/MemberCard.vue')
    // }
  ]
})
