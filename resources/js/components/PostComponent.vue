<script>
import SinglePostComponents from "./SinglePostComponent.vue";

export default {
  name: "PostComponent",
  components: {SinglePostComponents},

  data() {
    return {
      persons: null
    }
  },

  mounted() {
    this.getPersons();
  },

  methods: {
    getPersons() {
      axios.get('/persons')
          .then(res => {
            this.persons = res.data;
          })
    }
  },
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
