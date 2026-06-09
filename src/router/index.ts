import { createRouter } from 'vue-router'
import { createWebHistory } from 'vue-router'
import ProductList from '@/views/ProductList.vue'
import Cart from '@/views/Cart.vue'
import Success from '@/views/Success.vue'
import Checkout from '@/views/Checkout.vue'

const routes = [
  { path: '/', name: 'product-list', component: ProductList },
  { path: '/cart', name: 'cart', component: Cart },
  { path: '/checkout', name: 'checkout', component: Checkout },
  { path: '/success', name: 'success', component: Success },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
