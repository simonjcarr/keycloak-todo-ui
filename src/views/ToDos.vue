<template>
  <div>
    <div data-testID="description">Manage your ToDos</div>
    <ToDoCreate />
  </div>
</template>

<script>
import ToDoCreate from "@/components/ToDoCreate.vue";
export default {
  components: {
    ToDoCreate
  }
};
</script>

<style></style>
