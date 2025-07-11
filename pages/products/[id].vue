<template>
    <div>
        <h3>{{ product.title }}</h3>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
    definePageMeta({
        layout: "products"
    })
    const url = "https://fakestoreapi.com/products/"+id;
    const {data: product} = await useFetch(url , { key : id });
</script>

<style lang="scss" scoped>

</style>