<template>
  <div class="flex">
    <div class="flex mt-12 text-white" v-if="!keycloak.authenticated">
      <span class="mr-4 cursor-pointer" @click="keycloak.login()" data-testID="loginLink">Login</span>
      <div
        @click="keycloak.register()"
        class="hover:text-orange-500 cursor-pointer"
      >
        Register
      </div>
    </div>

    <div v-if="keycloak.authenticated" class="text-white flex mt-12">
      <span v-if="userHasRole('createToDo')" class="cursor-pointer mr-4"
        >Create ToDo</span
      >
      <span @click="keycloak.logout()" class="cursor-pointer mr-4">Logout</span>
      <span @click="keycloak.accountManagement()" class="cursor-pointer">
        {{ keycloak.tokenParsed["preferred_username"] }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("user", ["keycloak"]),
    ...mapGetters("user", ["userHasRole"])
  }
};
</script>

<style></style>
