<template>
    <div>
        <main-index></main-index>
        <div class="container mb-5"></div>

        <visi-misi></visi-misi>
        <prestasi></prestasi>
        <coming-soon></coming-soon>
        <youtube-embed :videoId1="url1" :videoId2="url2" :videoId3="url3"></youtube-embed>
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
import ComingSoon from "./components/ComingSoon";

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
        ComingSoon
    },

    data() {
        return {
            url1: "M7lc1UVf-VE",
            url2: "VPSoNx1gyQ4",
            url3: "M7lc1UVf-VE"
        };
    }
};
</script>
