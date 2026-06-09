<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const router = useRouter();

function checkout() {
    cartStore.clearCart()
    router.push({ name: 'success' })
}

</script>
<template>
    <h1>Cart Summary</h1>
    <div v-if="cartStore.getCartItems.length === 0">
        <p>Your cart is empty.</p>
        <RouterLink :to="{ name: 'product-list' }">Continue Shopping</RouterLink>
    </div>
    <div v-else v-for="item in cartStore.getCartItems" :key="item.productId">
        <p>Product ID: {{ item.productId }}</p>
        <p>Quantity: {{ item.quantity }}</p>
        <p>Name: {{ item.name }}</p>
        <p>Price per unit: {{ item.price }}</p>
        <p>Total: {{ item.price * item.quantity }}</p>
    </div>
    <div v-if="cartStore.getCartItems.length > 0">
        <div>Total Amount: {{ cartStore.getTotalPrice }}</div>
        <button @click="checkout()">Check Out</button>
    </div>
</template>