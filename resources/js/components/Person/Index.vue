<script>
export default {
    name: "Index",

    data() {
        return {
            people: null
        }
    },

    mounted() {
        this.getPeople()
    },

    methods: {
        getPeople() {
            axios.get("/api/people")
                .then(response => {
                    this.people = response.data;
                })
        },
    },
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
                <td class="text-center">{{ person.name }}</td>
                <td class="text-center">{{ person.age }}</td>
                <td class="text-center">{{ person.job }}</td>
                <td class="text-center">
                    <router-link :to="{ name: 'person.edit', params: { id: person.id } }"
                                 class="btn btn-success">Edit</router-link>
                </td>
                <td class="text-center">
                    <router-link :to="{ name: 'person.edit', params: { id: person.id } }"
                                 class="btn btn-danger">Delete</router-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>
