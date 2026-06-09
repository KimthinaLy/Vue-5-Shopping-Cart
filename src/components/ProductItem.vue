<script setup lang="ts">
import { type Product } from '@/types/product'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore();
const propes = defineProps<{
    product: Product
}>()
</script>
<template>
    <div>
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Price: {{ product.price }}</p>
        <button @click="cartStore.saveToCart(product.id)">Add to Cart</button>
    </div>
</template>
