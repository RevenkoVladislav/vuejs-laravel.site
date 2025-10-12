<script>
export default {
    name: "EditComponent",

    props: [
        'person'
    ],

    data() {
        return {
            name: null,
            age: null,
            job: null,
        }
    },

    methods: {
        updatePerson(id) {
            this.$parent.editPersonId = null;
            axios.patch(`/api/people/${id}`, {name: this.name, age: this.age, job: this.job})
                .then(res => {
                    this.$parent.getPeople();
                })
        },
    },
}
</script>

<template>
    <tr :class="this.$parent.isEdit(person.id) ? '' : 'd-none'">
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
        <td class="text-center">
            <a href="#"
               @click.prevent="deletePerson(person.id)"
               class="btn btn-danger">
                Delete
            </a>
        </td>
    </tr>
</template>

<style scoped>

</style>
