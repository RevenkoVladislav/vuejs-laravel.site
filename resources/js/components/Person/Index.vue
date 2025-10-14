<script>
export default {
    name: "Index",

    mounted() {
        this.$store.dispatch('getPeople')
    },

    computed: {
        people() {
            return this.$store.getters.people;
        }
    }
}
</script>

<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col" class="text-center">Name</th>
                <th scope="col" class="text-center">Age</th>
                <th scope="col" class="text-center">Job</th>
                <th scope="col" class="text-center">Edit</th>
                <th scope="col" class="text-center">Delete</th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="person in people">
                <td class="text-center">
                    <router-link :to="{name: 'person.show', params: {id: person.id} }">
                        {{ person.name }}
                    </router-link>
                </td>
                <td class="text-center">{{ person.age }}</td>
                <td class="text-center">{{ person.job }}</td>
                <td class="text-center">
                    <router-link :to="{ name: 'person.edit', params: { id: person.id } }"
                                 class="btn btn-success">Edit
                    </router-link>
                </td>
                <td class="text-center">
                    <a href="#" @click.prevent="$store.dispatch('deletePerson', person.id)"
                       class="btn btn-outline-danger">Delete</a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>
