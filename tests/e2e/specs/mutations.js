import store from "../../../src/store";
beforeEach(() => {
  store.commit("user/setUser", {
    username: "testuser1",
    email: "testuser1@example.com",
    token: "1234567890"
  });
});

describe("mutations", () => {
  it("visits the home page", () => {
    cy.visit("http://192.168.30.100:8080");
  });
});
