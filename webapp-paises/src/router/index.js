import Vue from 'vue'
import VueRouter from 'vue-router'
import TelaFavoritos from '../views/TelaFavoritos.vue'
import TelaInicio from '../views/TelaInicio.vue'
import TelaLogin from '../views/TelaLogin.vue'
import TestandoConhecimentos from '../views/TestandoConhecimentos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: TelaLogin
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: TelaInicio
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: TelaFavoritos
  },
  {
    path: '/testandoconhecimentos',
    name: 'TestandoConhecimentos',
    component: TestandoConhecimentos
  }
]

const router = new VueRouter({
  routes
})

export default router
