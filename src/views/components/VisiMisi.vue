<template>
  <div class="container">
    <div class="container py-5" id="tujuan">
      <h3 class="text-center text-orange display-3">Tujuan HMTI</h3>
      <div class="row">
        <div class="col-md-7 mx-auto">
          <ol>
            <li>
              <p>
                Menampung dan menyalurkan aspirasi mahasiswa program studi
                teknik informatika.
              </p>
            </li>
            <li>
              <p>
                Menetapkan , Melaksanakan, dan Menginformasikan kegiatan
                kurikuler sesuai dengan program kerja.
              </p>
            </li>
            <li>
              <p>
                Sebagai media silahturahmi antar warga Politeknik Negeri
                Banyuwangi, khususnya warga Teknik Informatika.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
    <!-- <h3>Visi & Misi</h3> -->

    <div class="container" id="visi-misi">
      <div class="row row-grid align-items-center">
        <div class="col-md-6 order-md-2">
          <img src="img/visi.svg" class="img-fluid floating" />
        </div>
        <div class="col-md-6 order-md-1">
          <div class="pr-md-5">
            <h3 class="text-orange display-3">Visi</h3>
            <p v-html="visi"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row row-grid align-items-center flex-row-reverse">
        <div class="col-md-6 order-md-2">
          <img src="img/misi.svg" class="img-fluid floating" />
        </div>
        <div class="col-md-6 order-md-1">
          <div class="pr-md-5">
            <h3 class="text-orange display-3 ml-3">Misi</h3>
            <p v-html="misi"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide,
  },
  data() {
    return {
      loading: false,
      error: "",
      visi: "",
      misi: "",
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get(`wp/v2/posts?categories=36`)
        .then(async (response) => {
          let visi = response.data.filter((res) =>
            res.categories.includes(37)
          )[0];
          let misi = response.data.filter((res) =>
            res.categories.includes(38)
          )[0];

          this.visi = await visi.content.rendered;
          this.misi = await misi.content.rendered;
          this.loading = false;
        })
        .catch((error) => {
          this.error = error.response.data;
          this.loading = false;
          // console.log(error.response.data);
        });
    },
  },
};
</script>
<style>
.text-orange {
  color: #ffaa03;
}
.carousel-caption {
  top: 20px !important;
  bottom: 0 !important;
}
</style>
