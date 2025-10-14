<script>
export default {
    name: "Edit",

    components: {

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
                    this.name = response.data.data.name;
                    this.age = response.data.data.age;
                    this.job = response.data.data.job
                })
        },

        updatePerson() {
            axios.patch(`/api/people/${this.$route.params.id}`, {name: this.name, age: this.age, job: this.job})
                .then(response => {
                    this.$router.push({
                        name: 'person.show', params: {id: this.$route.params.id}
                    })
                })
        },
    },

    computed: {
        isDisabled() {
            return this.name && this.age && this.job;
        }
    },
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
            <input :disabled="!isDisabled" @click.prevent="updatePerson" type="submit" value="Update" class="btn btn-success">
        </div>
    </div>
</template>

<style scoped>

</style>
