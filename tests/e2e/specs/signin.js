describe("User visits signin page and sees permissions", () => {
  beforeEach(() => {
    cy.kcLogout();
    cy.kcLogin("user");
  });
  it("visits the sign in page", () => {
    cy.visit("http://192.168.30.100:8080/");
    cy.visit("http://192.168.30.100:8080/login");
  });
});
