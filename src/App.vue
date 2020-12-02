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
  </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";
import ComingSoon from "./views/components/ComingSoon";

export default {
  components: {
    ComingSoon,
    FadeTransition,
  },
  computed: {
    isMaintenance() {
      return localStorage.getItem("isMaintenance") || false;
    },
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
