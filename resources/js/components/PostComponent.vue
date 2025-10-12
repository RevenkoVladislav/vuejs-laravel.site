<script>
import CreateComponent from "./CreateComponent.vue";
import IndexComponent from "./IndexComponent.vue";


export default {
  name: "PostComponent",
  components: {
    CreateComponent,
    IndexComponent,
  },

  mounted() {

  },

  methods: {
    parentLog() {
      console.log('this is parent component');
    }
  },

  data() {
    return {
      persons: null
    }
  },
}
</script>

<template>
  <div>
    <div>
      <CreateComponent />
      <IndexComponent ref="indexComponent"/>
    </div>
  </div>
</template>

<style scoped>

</style>
