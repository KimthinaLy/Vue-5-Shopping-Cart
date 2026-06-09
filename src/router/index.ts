import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'
import ProductList from '@/views/ProductList.vue'

const routes = [{ path: '/recipes/:id', name: 'recipe-detail', component: ProductList }]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
