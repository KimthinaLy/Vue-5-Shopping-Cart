<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore();

</script>
<template>
    <h1>Cart Summary</h1>
    <div v-for="item in cartStore.getCartItems()" :key="item.productId">
        <p>Product ID: {{ item.productId }}</p>
        <p>Quantity: {{ item.quantity }}</p>
        <p>Name: {{ item.name }}</p>
        <p>Price per unit: {{ item.price }}</p>
        <p>Total: {{ item.price * item.quantity }}</p>
    </div>
    <div>
        <div>Total Amount: {{ cartStore.getTotalPrice() }}</div>
        <button @click="cartStore.clearCart()">Check Out</button>
    </div>
</template>