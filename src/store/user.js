
export default {
  namespaced: true,
  state: {
    user: {
      username: null,
      email: null,
      token: null,
      firstName: null,
      lastName: null,
      roles: []
    },
    keycloak: null
  },
  getters: {
    userHasRole(state) {
      return role => {
        if (!state.keycloak.authenticated) return false;
        try {
          var result = state.user.roles.includes(role);
          return result;
        } catch (err) {
          return false;
        }
      };
    }
  },
  mutations: {
    setUser(state, user) {
      state.username = user.username;
      state.email = user.email;
      state.token = user.token;
    },
    destroyUser(state) {
      state.username = null;
      state.token = null;
      state.email = null;
      state.keycloak = null;
    },
    setKeycloak(state, keycloak) {
      state.keycloak = keycloak;
      if (keycloak.authenticated) {
        state.user.username = keycloak.tokenParsed.preferred_username;
        state.user.token = keycloak.token;
        state.user.email = keycloak.tokenParsed.email;
        state.user.firstName = keycloak.tokenParsed["given_name"];
        state.user.lastName = keycloak.tokenParsed["family_name"];
        state.user.roles =
          keycloak.resourceAccess[process.env.VUE_APP_KEYCLOAK_CLIENT_ID][
            "roles"
          ];
      }
    }
  }
};
