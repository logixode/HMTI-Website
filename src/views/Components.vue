<template>
  <div>
    <hero></hero>
    <basic-elements></basic-elements>
    <inputs></inputs>
    <custom-controls></custom-controls>
    <navigation></navigation>
    <javascript-components></javascript-components>
    <icons></icons>
    <examples></examples>
    <download-section></download-section>
    <carousel></carousel>
  </div>
</template>
<script>
import Hero from "./components/Hero";
import BasicElements from "./components/BasicElements";
import Inputs from "./components/Inputs";
import CustomControls from "./components/CustomControls";
import Navigation from "./components/Navigation";
import JavascriptComponents from "./components/JavascriptComponents";
import Carousel from "./components/Carousel";
import Icons from "./components/Icons";
import Examples from "./components/Examples";
import DownloadSection from "./components/DownloadSection";

export default {
  name: "components",

  components: {
    Hero,
    BasicElements,
    Inputs,
    CustomControls,
    Navigation,
    JavascriptComponents,
    Carousel,
    Icons,
    Examples,
    DownloadSection
  },

  data() {
    return {
      posts: []
    };
  },

  created() {
    this.$http.get("wp/v2/posts").then(
      response => {
        for (let post in response) {
          this.posts.push(response[post]);
        }
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
};
</script>
