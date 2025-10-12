<script>
export default {
    name: "ShowComponent",

    props: [
        'person'
    ],

    methods: {
        changeEditPersonId(id, name, age, job) {
            this.$parent.editPersonId = id;
            let editName = `edit_${id}`
            let fullEditName = this.$parent.$refs[editName][0];
            //чтобы дотянуться до свойств объекта используем [0] и т.к динамически формируем то оборачиваем в []
            //формируем ссылки для edit
            fullEditName.name = name;
            fullEditName.age = age;
            fullEditName.job = job;
        },

        deletePerson(id) {
            axios.delete(`/api/people/${id}`)
                .then(res => {
                    this.$parent.getPeople();
                })
        },
    }
}
</script>

<template>
    <tr :class="this.$parent.isEdit(person.id) ? 'd-none' : ''">
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
</template>

<style scoped>

</style>
