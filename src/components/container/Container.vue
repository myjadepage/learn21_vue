<template>
  <div class="page">
    <Header />
    <div class="page-content d-flex align-items-stretch">
      <SideBar />
      <div class="content-inner" :class="{ active: isSideActive }">
        <transition name="fade" mode="out-in">
          <router-view :key="$route.path"></router-view>
        </transition>
        <Footer />
        <a href="#" class="go-top"><i class="la la-arrow-up"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";

export default {
  name: "Container",
  components: {
    SideBar,
    Header,
    Footer
  },
  computed: {
    isSideActive() {
      return this.$store.state.isSideOpen;
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
