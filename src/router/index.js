import { createRouter, createWebHistory } from 'vue-router'
import ToDo from '../views/ToDo.vue'
import CssAnimate from '../views/CssAnimate.vue'
import Calculator from '../views/Calculator.vue'

const routes = [
   {
      path: '/',
      name: 'toDo',
      component: ToDo,
   },
   {
      path: '/css-animate',
      name: 'css-animate',
      component: CssAnimate,
   },
   {
      path: '/calculator',
      name: 'calculator',
      component: Calculator,
   }
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
   linkActiveClass: 'active',
   linkExactActiveClass: 'active',
})

export default router
