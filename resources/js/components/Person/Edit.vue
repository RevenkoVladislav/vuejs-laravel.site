<script>
export default {
    name: "Edit",

    mounted () {
        this.$store.dispatch('getPerson', this.$route.params.id)
    },

    computed: {
        isDisabled() {
            return this.person.name && this.person.age && this.person.job;
        },

        person() {
            return this.$store.getters.person;
        }
    },
}
</script>

<template>
    <div class="w-25" v-if="person">
        <div class="mb-3">
            <input type="text" placeholder="name" v-model="person.name" class="form-control">
        </div>
        <div class="mb-3">
            <input type="number" placeholder="age" v-model="person.age" class="form-control">
        </div>
        <div class="mb-3">
            <input type="text" placeholder="job" v-model="person.job" class="form-control">
        </div>
        <div class="mb-3">
            <input :disabled="!isDisabled"
                   @click.prevent="$store.dispatch('updatePerson', {id: person.id, name: person.name, age: person.age, job: person.job})"
                   type="submit" value="Update" class="btn btn-success">
        </div>
    </div>
</template>

<style scoped>

</style>
