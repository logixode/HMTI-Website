<template>
    <section class="section section-lg section-shaped overflow-hidden my-0">
        <div class="shape shape-style-1 shape-default shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0 pb-lg">
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <h1 class="text-white">HIMPUNAN MAHASISWA</h1>
                    <h3 class="text-white">TEKNIK INFORMATIKA</h3>
                    <p
                        class="lead text-white mt-4"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut nam nesciunt error beatae! Odio rerum illo dolorum iusto excepturi nemo fugiat mollitia?</p>
                    <a
                        href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                        class="btn btn-white mt-4 text-uppercase px-5"
                    >Lihat Profile</a>
                </div>
                <div class="col-lg-7 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                        <!-- <b-carousel id="carousel1" controls indicators>
                            <b-carousel-slide img-src="img/theme/landing.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/theme/profile.jpg"></b-carousel-slide>
                        </b-carousel>-->
                        <b-carousel id="carousel1">
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/theme/landing.jpg">
                                <youtube
                                    :video-id="videoProfile"
                                    class="mx-2"
                                    player-width="577"
                                    player-height="371"
                                ></youtube>
                            </b-carousel-slide>
                            <!-- <b-carousel-slide img-src="img/theme/profile.jpg"></b-carousel-slide> -->
                        </b-carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
    components: {
        BCarousel,
        BCarouselSlide
    },

    data() {
        return {
            videoProfile: "W1uvqnk25DQ"
        };
    }
};
</script>
<style>
</style>
