<script>
import router from '../../router'
export default {
    name: "Create",

    data() {
        return {
            name: null,
            age: null,
            job: null,
        }
    },

    methods: {
        store() {
            axios.post('/api/people/store', {name: this.name, age: this.age, job: this.job})
                .then(response => {
                    router.push({ name: 'person.index' });
                });
        }
    }
}
</script>

<template>
<div class="w-25">
    <div class="mb-3">
        <input type="text" placeholder="name" v-model="name" class="form-control">
    </div>
    <div class="mb-3">
        <input type="number" placeholder="age" v-model="age" class="form-control">
    </div>
    <div class="mb-3">
        <input type="text" placeholder="job" v-model="job" class="form-control">
    </div>
    <div class="mb-3">
        <input @click.prevent="store" type="submit" value="Add" class="btn btn-primary">
    </div>
</div>
</template>

<style scoped>

</style>
