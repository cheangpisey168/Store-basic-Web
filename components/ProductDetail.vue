<template>
    <div class="card">
        <div class="grid grid-cols-2 gap-10">
            <div class="p-7">
                <img :src="productDetail.image" alt="Product Img">
            </div>
            <div class="p-7">
                <h2 class="text-4xl my-7">{{ productDetail.title }}</h2>
                <p class="text-xl my-7">Price - $ {{ productDetail.price }}</p>
                <h3 class="font-bold border-b-2 mb-4 pb-2">Product Description</h3>
                <p class="mb-7">{{ productDetail.description }}</p>

                <button class="btn flex">
                     <i class="material-icons mr-2">add_shopping_cart</i>
                    <span>Add to card</span>
                </button>
            </div>
        </div>
        
    </div>
</template>

<script setup>
    const {productDetail} = defineProps(["productDetail"])
</script>

<style  scoped>
    img{
        max-width: 400px;
    }
</style>