<template>
    <div class="text-center my-5">
        <h3>Prestasi</h3>
        <b-carousel
            id="carousel-1"
            :interval="0"
            indicators
            background="transparent"
            img-width="600"
            img-height="130"
            style="color: #000"
        >
            <b-carousel-slide img-blank img-alt="Blank image">
                <div class="row justify-content-between">
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-1-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />
                        <div class="text-dark mt-2">
                            <h5>satu</h5>
                            <p>text</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-1-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />

                        <div class="text-dark mt-2">
                            <h5>dua</h5>
                            <p>text</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-1-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />

                        <div class="text-dark mt-2">
                            <h5>tiga</h5>
                            <p>text</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-1-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />

                        <div class="text-dark mt-2">
                            <h5>empat</h5>
                            <p>text</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-1-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />

                        <div class="text-dark mt-2">
                            <h5>lima</h5>
                            <p>text</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-1-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />

                        <div class="text-dark mt-2">
                            <h5>enam</h5>
                            <p>text</p>
                        </div>
                    </div>
                </div>
            </b-carousel-slide>
            <b-carousel-slide img-blank img-alt="Blank image">
                <div class="row justify-content-between">
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-2-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />

                        <div class="text-dark mt-2">
                            <h5>satu</h5>
                            <p>text</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-2-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />

                        <div class="text-dark mt-2">
                            <h5>dua</h5>
                            <p>text</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-2-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />

                        <div class="text-dark mt-2">
                            <h5>tiga</h5>
                            <p>text</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-2-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />

                        <div class="text-dark mt-2">
                            <h5>empat</h5>
                            <p>text</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-2-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />

                        <div class="text-dark mt-2">
                            <h5>lima</h5>
                            <p>text</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-2-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />

                        <div class="text-dark mt-2">
                            <h5>enam</h5>
                            <p>text</p>
                        </div>
                    </div>
                </div>
            </b-carousel-slide>
            <b-carousel-slide img-blank img-alt="Blank image">
                <div class="row justify-content-between">
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-3-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />

                        <div class="text-dark mt-2">
                            <h5>satu</h5>
                            <p>text</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-3-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />

                        <div class="text-dark mt-2">
                            <h5>dua</h5>
                            <p>text</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-3-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />

                        <div class="text-dark mt-2">
                            <h5>tiga</h5>
                            <p>text</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-3-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />

                        <div class="text-dark mt-2">
                            <h5>empat</h5>
                            <p>text</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-3-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />

                        <div class="text-dark mt-2">
                            <h5>lima</h5>
                            <p>text</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <img
                            v-lazy="'img/theme/team-3-800x800.jpg'"
                            alt="Rounded image"
                            class="img-fluid rounded shadow"
                            style="width: 250px;"
                        />

                        <div class="text-dark mt-2">
                            <h5>enam</h5>
                            <p>text</p>
                        </div>
                    </div>
                </div>
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
<style scoped>
h5 {
    margin-bottom: 0;
}
</style>
