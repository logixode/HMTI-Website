<template>
  <div id="app">
    <template v-if="isMaintenance == 'true'">
      <router-view name="header"></router-view>
      <main>
        <fade-transition origin="center" mode="out-in" :duration="250">
          <router-view />
        </fade-transition>
      </main>
      <router-view name="footer"></router-view>
    </template>
    <coming-soon v-else />
    <fade-transition origin="center" mode="out-in" :duration="250">
      <scroll-to-top v-show="scrollCondition" />
    </fade-transition>
  </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import ComingSoon from "./views/components/ComingSoon";
import ScrollToTop from "./components/ScrollToTop";

export default {
  components: {
    ScrollToTop,
    FadeTransition,
  },
  data: () => ({
    scrollCondition: 0,
  }),
  computed: {
    isMaintenance() {
      return localStorage.getItem("isMaintenance") || false;
    },
  },
  mounted() {
    window.addEventListener("scroll", (e) => {
      // this.scrollCondition =
      if (e.target.scrollingElement.scrollTop > 400) {
        this.scrollCondition = true;
      } else this.scrollCondition = false;
      console.log();
    });
  },
};
</script>
<style>
html {
  scroll-behavior: smooth;
}
.text-title {
  color: #64b0f8;
}
</style>
