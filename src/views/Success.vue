<script setup lang="ts">

</script>
<template>
    <div>
        <h1>Checkout Successful</h1>
        <p>Thank you for your purchase!</p>
        <RouterLink :to="{ name: 'product-list' }">Continue Shopping</RouterLink>
    </div>
</template>