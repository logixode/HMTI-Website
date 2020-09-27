<template>
  <div id="app">
    <coming-soon v-if="isMaintenance == 'true'" />
    <template v-if="isMaintenance == 'false'">
      <router-view name="header"></router-view>
      <main>
        <fade-transition origin="center" mode="out-in" :duration="250">
          <router-view />
        </fade-transition>
      </main>
      <router-view name="footer"></router-view>
    </template>
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
