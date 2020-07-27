<template>
  <div>
    <main-index></main-index>
    <div class="container mb-5"></div>

    <visi-misi></visi-misi>
    <prestasi></prestasi>
    <section class="section section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-1 bg-gradient-warning shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <kegiatan></kegiatan>
    </section>

    <br />
    <youtube-embed></youtube-embed>
    <!-- <hero></hero> -->
    <!-- <basic-elements></basic-elements>
        <inputs></inputs>
        <custom-controls></custom-controls>
        <navigation></navigation>
        <javascript-components></javascript-components>
        <icons></icons>
        <examples></examples>
    <download-section></download-section>-->
  </div>
</template>
<script>
import Hero from "./components/Hero";
import BasicElements from "./components/BasicElements";
import Inputs from "./components/Inputs";
import CustomControls from "./components/CustomControls";
import Navigation from "./components/Navigation";
import JavascriptComponents from "./components/JavascriptComponents";
import MainIndex from "./components/MainIndex";
import Icons from "./components/Icons";
import Examples from "./components/Examples";
import DownloadSection from "./components/DownloadSection";
import YoutubeEmbed from "./components/YoutubeEmbed";
import VisiMisi from "./components/VisiMisi";
import Prestasi from "./components/Prestasi";
import Kegiatan from "./components/Kegiatan";

export default {
  name: "components",

  components: {
    Hero,
    BasicElements,
    Inputs,
    CustomControls,
    Navigation,
    JavascriptComponents,
    MainIndex,
    Icons,
    Examples,
    DownloadSection,
    YoutubeEmbed,
    VisiMisi,
    Prestasi,
    Kegiatan
  }
};
</script>
<style>
.text-unset {
  text-transform: unset !important;
}
.page-title {
  letter-spacing: 5px;
}
.clamp-2 p {
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin-bottom: 5px !important;
}
.clamp-2 p:nth-child(n + 2) {
  display: none;
}
</style>