<script>
import SinglePostComponent from "./SinglePostComponent.vue";

export default {
  name: "PostComponent",
  components: {
    SinglePostComponent: SinglePostComponent,
  },

  data() {
    return {
      name: 'Вася',
      age: 20,
      boolean: false,
      someNull: null,
      arr: [],
      someObj: {
        personName: 'Ivan'
      }
    }
  },

  methods: {
    sayHello() {
      alert('Привет СОНЯ')
    },
    sayHello2() {
      console.log('Hello-2')
    }
  },

  computed: {
    vasyaJob() {
      return this.name + ' работает в булочной'
    }
  }

}
</script>

<template>
  <div>
    <div>{{ vasyaJob }}</div>
    <button @click="sayHello">Hello</button>
    <button @click="sayHello2">Hello-2</button>
  </div>
</template>

<style scoped>

</style>
