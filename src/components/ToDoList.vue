<template>
  <div>
    <div class="text-3xl">ToDo List</div>
    <ToDoCreate />
    <div class="flex bg-orange-600 p-2 rounded-t text-white font-bold">
      <div class="w-1/12">Delete</div>
      <div class="w-1/12">Toggle</div>
      <div class="w-10/12">Task</div>
    </div>
    <div
      v-for="(task, index) in tasks"
      :key="task.id"
      class="flex p-2 border-gray-200"
      :class="{ 'bg-gray-200': index % 2 == 0 }"
    >
      <div class="w-1/12">
        <button
          @click="deleteTask(task.id)"
          class="bg-orange-600 border-orange-600 shadow hover:bg-orange-700 text-xs text-white py-1 px-2 rounded"
          :disabled="!userHasRole('DELETE_TODO')"
          v-if="userHasRole('DELETE_TODO')"
        >
          Delete
        </button>
      </div>
      <div class="w-1/12">
        <input
          @click="toggleTask(task.id)"
          type="checkbox"
          :checked="task.complete == 1"
          :disabled="!userHasRole('TOGGLE_TODO')"
        />
      </div>
      <div class="w-10/12" :class="{ 'line-through': task.complete == 1 }">
        {{ task.task }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import ToDoCreate from "@/components/ToDoCreate";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("task", ["tasks"]),
    ...mapState("user", ["keycloak"]),
    ...mapGetters("user", ["userHasRole"])
  },
  methods: {
    ...mapActions("task", ["getTasks", "toggleTask", "deleteTask"])
  },
  components:{
    ToDoCreate
  },
  mounted() {
    this.getTasks();
  }
};
</script>
