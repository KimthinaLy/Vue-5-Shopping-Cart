import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type Cart } from '@/types/cart'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<Cart[]>([
    { productId: 1, quantity: 2 },
    { productId: 3, quantity: 1 },
  ])

  function removeFromCart(productId: number) {
    cartItems.value = cartItems.value.filter((item) => item.productId !== productId)
  }

  function clearCart() {
    cartItems.value = []
  }

  function saveToCart(productId: number) {
    const item = cartItems.value.find((item) => item.productId === productId)
    if (item) {
      item.quantity++
    } else {
      cartItems.value.push({ productId, quantity: 1 })
    }
  }

  function decreaseQuantity(productId: number) {
    const item = cartItems.value.find((item) => item.productId === productId)
    if (item) {
      item.quantity--
      if (item.quantity <= 0) {
        removeFromCart(productId)
      }
    }
  }
  return {
    cartItems,
    saveToCart,
    removeFromCart,
    clearCart,
    decreaseQuantity,
  }
})
