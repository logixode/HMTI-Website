<template>
  <img src="/img/rocket.svg" class="scroll-to-top img-fluid floating" srcset="" @click="scrollToTop" />
  <!-- <div class="scroll-to-top text-center"> -->
  <!-- </div> -->
</template>

<script>
  export default {
    methods: {
      scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        // let scrollBody = document.documentElement || document.body;
        // let interval = setInterval(() => {
        //   scrollBody.scrollTop -= 10;
        //   if (scrollBody.scrollTop < 10) {
        //     clearInterval(interval);
        //   }
        // }, 1);
      },
    },
  };
</script>

<style>
  .scroll-to-top {
    position: fixed;
    bottom: 5vw;
    right: 5vw;
    width: 10vh;
    height: 10vh;
    /* border-radius: 100%; */
    cursor: pointer;
    z-index: 99;
    font-size: 25px;
  }
</style>