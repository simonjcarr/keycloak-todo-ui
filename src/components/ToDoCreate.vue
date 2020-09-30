<template>
  <div>
    <input
      v-model="task"
      @keyup.enter="addTaskClick"
      class="p-2 text-xl border-orange-500 border-2 mb-2 w-full rounded"
      type="text"
      placeholder="Start typing to add task"
      v-if="userHasRole(permission)"
    />
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      task: "",
      permission: "CREATE_TODO"
    };
  },
  computed: {
    ...mapState("user", ["keycloak"]),
    ...mapGetters("user", ["userHasRole"])
  },
  methods: {
    ...mapActions("task", ["addTask"]),
    addTaskClick() {
      this.addTask(this.task);
      this.task = "";
    }
  }
};
</script>

<style></style>
