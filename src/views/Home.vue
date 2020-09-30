<template>
  <div class="home">
    <ToDoList v-if="keycloak.authenticated" />
  </div>
</template>

<script>
import ToDoList from "@/components/ToDoList.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ToDoList
  },
  computed: {
    ...mapState("user", ["keycloak"])
  }
};
</script>
