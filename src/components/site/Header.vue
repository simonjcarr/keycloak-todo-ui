<template>
  <div class="bg-gray-800 h-32 px-32 pt-8 flex justify-between">
    <div data-testID="title" class="text-white text-4xl font-bold">ToDos</div>
    <HeaderMenus />
  </div>
</template>

<script>
import HeaderMenus from "@/components/site/HeaderMenus.vue";
export default {
  name: "Header",
  data() {
    return {};
  },
  components: {
    HeaderMenus
  }
};
</script>
