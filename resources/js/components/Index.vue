<script>
export default {
    name: "Index"
}
</script>

<template>
<div>
    <router-link :to="{ name: 'person.index' }">People</router-link>
    <router-view></router-view>
</div>
</template>

<style scoped>

</style>
