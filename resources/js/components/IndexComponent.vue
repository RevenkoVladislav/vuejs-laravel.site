<script>
import EditComponent from "./EditComponent.vue";
import ShowComponent from "./ShowComponent.vue";
export default {
    name: "IndexComponent",

    components: {
        EditComponent,
        ShowComponent,
    },

    data() {
        return {
            people: null,
            editPersonId: null,
            name: null,
            age: null,
            job: null
        }
    },

    mounted() {
        this.getPeople()
    },

    methods: {
        getPeople() {
            axios.get('/api/people').then(response => {
                this.people = response.data;
            })
        },

        isEdit(id) {
            return this.editPersonId === id;
        },
    },
}
</script>

<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col" class="text-center">id</th>
                <th scope="col" class="text-center">Name</th>
                <th scope="col" class="text-center">Age</th>
                <th scope="col" class="text-center">Job</th>
                <th scope="col" class="text-center">Edit</th>
                <th scope="col" class="text-center">Delete</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="person in people">
                <ShowComponent :person="person" :ref="`show_${person.id}`" />
                <EditComponent :person="person" :ref="`edit_${person.id}`" />
            </template>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>
