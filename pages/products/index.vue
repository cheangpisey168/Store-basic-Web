<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :productCard="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: "products"
    })
    const {data : products } = await useFetch("https://fakestoreapi.com/products")
    useHead({
        title:'Canadia | Bank',
        meta:[
            {name:'description',content:'Nuxt js 3'}
        ]
    })
</script>

<style lang="scss" scoped>

</style>