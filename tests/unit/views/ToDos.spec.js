import { expect } from "chai";
import { mount } from "@vue/test-utils";

import ToDos from "@/views/ToDos.vue";
import ToDoCreate from "@/components/ToDoCreate.vue";

describe("ToDos View", () => {
  it("Has the correct description", () => {
    const wrapper = mount(ToDos);
    const description = wrapper.find("[data-testID='description']");
    expect(description.text()).is.equal("Manage your ToDos");
  });

  it("Has a Create ToDo Component", () => {
    const wrapper = mount(ToDos);
    expect(wrapper.contains(ToDoCreate)).to.equal(true);
  });
});
