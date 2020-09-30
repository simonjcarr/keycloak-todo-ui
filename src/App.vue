<template>
  <div id="app">
    <Header />
    <div class="px-32">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "@/components/site/Header";
export default {
  components: {
    Header
  }
};
</script>