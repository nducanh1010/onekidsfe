<template>
  <div class="app-wrapper">
    <Menu style="float: left" />
    <navbar />
    <section class="app-main">
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Menu from "./components/Menu.vue";

export default {
  name: "Layout",
  components: {
    Navbar,
    Menu,
  },
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
.app-main {
  min-height: calc(100vh - 50px);
  overflow: hidden;
  padding: 20px 30px 0 30px;
}
</style>
