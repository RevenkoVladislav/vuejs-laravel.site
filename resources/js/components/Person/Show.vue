<script>
export default {
    name: "Show",

    computed: {
        person() {
            return this.$store.getters.person
        }
    },

    mounted () {
      this.$store.dispatch('getPerson', this.$route.params.id)
    },
}
</script>

<template>
<div v-if="person">
    <div>
        Name: {{ person.name}}
    </div>
    <div>
        Age: {{ person.age}}
    </div>
    <div>
        Job: {{ person.job}}
    </div>
        <router-link :to="{ name: 'person.edit', params: { id: person.id } }"
                     class="btn btn-success">Edit</router-link>
</div>
</template>

<style scoped>

</style>
