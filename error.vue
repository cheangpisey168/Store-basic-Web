<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7x1 font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6x1">Ooops .</p>
        <p class="mt-7">{{ error.message }}</p>
        <button class="btn my-7" @click="btngohome">Go home..</button>
    </div>
</template>

<script setup>
    const btngohome = () => clearError({redirect:'/'})
    defineProps(['error'])
</script>

<style lang="scss" scoped>

</style>