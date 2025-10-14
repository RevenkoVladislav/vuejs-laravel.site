<script>
import router from '../../router'
export default {
    name: "Edit",

    components: {
      router
    },

    data() {
        return {
            name: null,
            age: null,
            job: null,
        }
    },

    mounted () {
        this.getPerson()
    },

    methods: {
        getPerson() {
            axios.get(`/api/people/${this.$route.params.id}`)
                .then(response => {
                    console.log(this.$route.params.id);
                    this.name = response.data.name;
                    this.age = response.data.age;
                    this.job = response.data.job
                })
        },

        updatePerson() {
            axios.patch(`/api/people/${this.$route.params.id}`, {name: this.name, age: this.age, job: this.job})
                .then(response => {
                    router.push({
                        name: 'person.show'
                    })
                })
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
            <input @click.prevent="updatePerson" type="submit" value="Update" class="btn btn-primary">
        </div>
    </div>
</template>

<style scoped>

</style>
