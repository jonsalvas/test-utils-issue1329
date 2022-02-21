import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("finds hello element correctly", () => {
    const wrapper = mount(App);
    const test = wrapper.findComponent({ ref: "hello" });
    expect(test.exists()).toBe(true);
  });
});
