<script>
import SinglePostComponent from "./SinglePostComponent.vue";

export default {
  name: "PostComponent",
  components: {
    SinglePostComponent: SinglePostComponent,
  },

  data() {
    return {
      name: 'Vasya',
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
      console.log('Hello')
    },
    sayHello2() {
      console.log('Hello-2')
    }
  }


}
</script>

<template>
  <div>
    <button @click="sayHello">Hello</button>
    <button @click="sayHello2">Hello-2</button>
  </div>
</template>

<style scoped>

</style>
