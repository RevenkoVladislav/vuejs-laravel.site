<script>
import CreateComponent from "./CreateComponent.vue";
import IndexComponent from "./IndexComponent.vue";


export default {
  name: "PostComponent",
  components: {
    CreateComponent,
    IndexComponent,
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
      <IndexComponent />
    </div>
  </div>
</template>

<style scoped>

</style>
