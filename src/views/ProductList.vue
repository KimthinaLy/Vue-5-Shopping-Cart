<script setup lang="ts">
import { useProductStore } from '../stores/productStore';
import ProductItem from '../components/ProductItem.vue';

const productsStore = useProductStore();
</script>
<template>
    <h1>Product List</h1>
    <RouterLink :to="{ name: 'cart' }">Cart</RouterLink>
    <div v-for="product in productsStore.products" :key="product.id">
        <ProductItem :product="product" />
    </div>
</template>