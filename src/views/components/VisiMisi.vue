<template>
    <div class="container text-center">
        <h3>Visi / Misi</h3>
        <b-carousel
            id="carousel-1"
            :interval="0"
            controls
            indicators
            background="transparent"
            img-width="480"
            img-height="100"
            style="color: #000"
        >
            <b-carousel-slide caption="satu" img-blank img-alt="Blank image">
                <p style="color: #000">
                    aLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                    a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                </p>
            </b-carousel-slide>
            <b-carousel-slide caption="dua" img-blank img-alt="Blank image">
                <p style="color: #000">
                    bLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                    a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                </p>
            </b-carousel-slide>
            <b-carousel-slide caption="tiga" img-blank img-alt="Blank image">
                <p style="color: #000">
                    cLorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                    a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                </p>
            </b-carousel-slide>
        </b-carousel>
    </div>
</template>

<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
    components: {
        BCarousel,
        BCarouselSlide
    }
};
</script>
<style>
.carousel-caption {
    top: 20px !important;
    bottom: 0 !important;
}
</style>
