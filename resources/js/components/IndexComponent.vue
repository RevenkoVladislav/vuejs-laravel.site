<script>
import EditComponent from "./EditComponent.vue";
export default {
    name: "IndexComponent",

    components: {
        EditComponent
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

        changeEditPersonId(id, name, age, job) {
            this.editPersonId = id;
            let editName = `edit_${id}`
            let fullEditName = this.$refs[editName][0];
            //чтобы дотянуться до свойств объекта используем [0] и т.к динамически формируем то оборачиваем в []
            //формируем ссылки для edit
            fullEditName.name = name;
            fullEditName.age = age;
            fullEditName.job = job;
        },

        isEdit(id) {
            return this.editPersonId === id;
        },

        deletePerson(id) {
            axios.delete(`/api/people/${id}`)
                .then(res => {
                    this.getPeople();
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
                <tr :class="isEdit(person.id) ? 'd-none' : ''">
                    <th scope="row" class="text-center">{{ person.id }}</th>
                    <td class="text-center">{{ person.name }}</td>
                    <td class="text-center">{{ person.age }}</td>
                    <td class="text-center">{{ person.job }}</td>
                    <td class="text-center">
                        <a href="#"
                           @click.prevent="changeEditPersonId(person.id, person.name, person.age, person.job)"
                           class="btn btn-success">
                            Edit
                        </a>
                    </td>
                    <td class="text-center">
                        <a href="#"
                           @click.prevent="deletePerson(person.id)"
                           class="btn btn-danger">
                            Delete
                        </a>
                    </td>
                </tr>
                <EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>
            </template>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>
