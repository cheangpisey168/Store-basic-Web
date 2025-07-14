<template>
    <div>
        <h2>About Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci est vero ratione deserunt inventore maxime eveniet ut amet! Reprehenderit dolorum accusantium placeat doloremque, sit velit at aut quam dolor ut.</p>
    </div>
    <div>
        <h2>{{ data }}</h2>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/CanaAPI?name=pisey',{
        method: 'post',
        body:  {age:30}
    })
</script>

<style scoped>

</style>