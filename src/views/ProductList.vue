<script setup lang="ts">
import { useProductStore } from '../stores/productStore';
import ProductItem from '../components/ProductItem.vue';

const productsStore = useProductStore();
</script>
<template>
    <div v-for="product in productsStore.products" :key="product.id">
        <ProductItem :product="product" />
    </div>
</template>