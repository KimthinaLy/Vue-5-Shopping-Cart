<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore();
</script>
<template>
    <RouterLink :to="{ name: 'product-list' }">Continue Shopping</RouterLink>
    <h1>Cart</h1>
    <div v-for="item in cartStore.getCartItems" :key="item.productId">
        <p>Product ID: {{ item.productId }}</p>
        <p>Quantity: {{ item.quantity }}</p>
        <p>Name: {{ item.name }}</p>
        <p>Price per unit: {{ item.price }}</p>
        <p>Total: {{ item.price * item.quantity }}</p>
        <button @click="cartStore.decreaseQuantity(item.productId)">-</button>
        <button @click="cartStore.saveToCart(item.productId)">+</button>
        <button @click="cartStore.removeFromCart(item.productId)">Remove</button>
    </div>
    <div v-if="cartStore.getCartItems.length === 0">
        <p>Your cart is empty.</p>
    </div>
    <div v-else>
        <div>Total Amount: {{ cartStore.getTotalPrice }}</div>
        <RouterLink :to="{ name: 'checkout' }">Proceed to Checkout</RouterLink>
    </div>
</template>