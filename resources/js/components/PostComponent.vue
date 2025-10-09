<script>
import SinglePostComponents from "./SinglePostComponent.vue";

export default {
  name: "PostComponent",
  components: {SinglePostComponents},

  data() {
    return {
      persons: [
        {
          id: 1,
          name: "Vasya",
          age: 20,
          job: 'coach',
        },
        {
          id: 2,
          name: 'Sonya',
          age: 10,
          job: 'pupil',
        },
        {
          id: 3,
          name: 'Marina',
          age: 30,
          job: 'teacher',
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <div>
      <table class="table">
        <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Job</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="person in persons">
          <th scope="row">{{ person.id }}</th>
          <td>{{ person.name }}</td>
          <td>{{ person.age }}</td>
          <td>{{ person.job }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>

</style>
