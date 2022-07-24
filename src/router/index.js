import { createRouter, createWebHistory } from 'vue-router'
import store from "@/store/index.js";
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
    
  },
  {
    path: '/itemMusic',
    name: 'ItemMusic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "ItemMusic" */ '../views/ItemMusic.vue')
  },
  {
    path: '/SearchView',
    name: 'SearchView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "SearchView" */ '../views/SearchView.vue')
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
  },
  {
    path: '/peopleInfo',
    name: 'peopleInfo',
    beforeEnter:(to, from, next) => {
      if(store.state.isLogin || localStorage.getItem('token') || store.state.token) {
        next()
      }else{
        next('/login')
      }
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "peopleInfo" */ '../views/peopleInfo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//全局路由守卫 判断底部组件是否显示
router.beforeEach((to,from) => {
  console.log(to);//打印to指向的页面
  if(to.path == '/login'){
    store.state.isFootershow = false
  }else {
    store.state.isFootershow = true
  }
})

export default router
