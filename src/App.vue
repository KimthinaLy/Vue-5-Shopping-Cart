<script setup lang="ts">

</script>

<template>
  <router-view v-slot="{ Component }">
    Your Daily Shopping
    <component :is="Component" />
  </router-view>
</template>