<template>
    <div>
        <Head>
            <Title>Nuxt 3 | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <ProductDetail :productDetail="product"/>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
    definePageMeta({
        layout: "products"
    })
    const url = "https://fakestoreapi.com/products/"+id;
    const {data: product} = await useFetch(url , { key : id });

    if(!product.value){
        throw createError({statusCode:404 , statusMessage: "Product not found !", fatal:true})
    }
</script>

<style lang="scss" scoped>

</style>