
import Vue from 'vue'
import VueRouter from 'vue-router';
 // 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
 Vue.use(VueRouter)

import Home  from '../components/page/Home/Home.vue'
import Car  from '../components/page/Car/Car.vue'
import Classify  from '../components/page/Classify/Classify.vue'
import Myme  from '../components/page/Myme/Myme.vue'
import Search  from '../components/page/Search/Search.vue'
import Zsearch  from '../components/page/Search/Zsearch.vue'
import Details  from '../components/page/Details/Details.vue'
const routes = [
{ path: '/', component: Home ,name:'home'},
  { path: '/home', component: Home ,name:'home'},
  { path: '/car', component: Car ,name:'car'},
  { path: '/classify', component: Classify ,name:'classify'},
  { path: '/myme', component: Myme ,name:'myme'},
  { path: '/search/:id', component: Search ,name:'search'},
  { path: '/zsearch/:id', component: Zsearch ,name:'zsearch'},
  { path: '/details/:id', component: Details ,name:'details'}
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})
 export default router