<script>
export default {
    name: "Index"
}
</script>

<template>
<div>
    <router-link :to="{ name: 'person.index' }" class="btn btn-info mb-3">People</router-link>
    <router-link :to="{ name: 'person.create' }" class="btn btn-primary mb-3">Add</router-link>
    <router-view></router-view>
</div>
</template>

<style scoped>

</style>
