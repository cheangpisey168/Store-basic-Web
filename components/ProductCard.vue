<template>
    <div class="card text-center">
        <img :src="productCard.image" alt="product thumb" class="thumb">
        <p class="font-bold text-gray-500 m-4 truncate">{{ productCard.title }}</p>
        <NuxtLink :to="`/products/${productCard.id}`"><p class="btn my-4">View Details</p></NuxtLink>
    </div>
</template>

<script setup>
    const {productCard} = defineProps(['productCard'])
</script>

<style scoped>
    .thumb{
        max-height:120px;
        max-width: 70%;
        margin:0 auto;
    }
</style>