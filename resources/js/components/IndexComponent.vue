<script>
export default {
    name: "IndexComponent",

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
            this.name = name;
            this.age = age;
            this.job = job;
        },

        isEdit(id) {
            return this.editPersonId === id;
        },

        updatePerson(id) {
            this.editPersonId = null;
            axios.patch(`/api/people/${id}`, {name: this.name, age: this.age, job: this.job})
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
                </tr>
                <tr :class="isEdit(person.id) ? '' : 'd-none'">
                    <th scope="row" class="text-center">{{ person.id }}</th>
                    <td class="text-center">
                        <input type="text" class="form-control" v-model="name">
                    </td>
                    <td class="text-center">
                        <input type="number" class="form-control" v-model="age">
                    </td>
                    <td class="text-center">
                        <input type="text" class="form-control" v-model="job">
                    </td>
                    <td class="text-center">
                        <a href="#" @click.prevent="updatePerson(person.id)" class="btn btn-success">Update</a>
                    </td>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>
