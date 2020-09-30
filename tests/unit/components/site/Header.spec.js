import { expect } from "chai";
import { mount } from "@vue/test-utils";

import Header from "@/components/site/Header.vue";

describe("Header.vue", () => {
  it("Has correct title", () => {
    const wrapper = mount(Header);
    const title = wrapper.find("[data-testID='title']");
    expect(title.text()).to.equal("ToDos");
  });

  it("Has correct Login menu when not logged in", () => {
    const wrapper = mount(Header);
    const menuItems = wrapper.findAll("[data-testID='menuItem']");
    expect(menuItems.at(0).text()).to.equal("Login");
    expect(menuItems.at(1).text()).to.equal("Register");
  });
});
