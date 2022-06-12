import { createRouter, createWebHistory } from 'vue-router'
import ToDo from '../views/ToDo.vue'
import CssAnimate from '../views/CssAnimate.vue'
import Calculater from '../views/Calculater.vue'

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
      path: '/calculater',
      name: 'calculater',
      component: Calculater,
   },
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
})

export default router
