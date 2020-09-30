<template>
  <div v-if="userHasRole('createToDo')">
    <div>user can create Todo's</div>
  </div>
  <div v-else>
    User can NOT create Todo's
    {{ keycloak }}
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState("user", ["keycloak", "user"]),
    ...mapGetters("user", ["userHasRole"])
  }
};
</script>

<style></style>
