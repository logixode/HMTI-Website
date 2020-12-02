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
    <div class="container py-2 pb-xl-5 pt-xl-3 pb-lg-0 pt-lg-0">
      <div class="row justify-content-between align-items-center mt-lg-5">
        <div class="col-lg-6 col-xl-5 mb-5 m-lg-0">
          <h2 class="text-white font-weight-bold">HIMPUNAN MAHASISWA</h2>
          <h4 class="text-white">TEKNIK INFORMATIKA - POLIWANGI</h4>
          <p class="text-white mt-4 font-weight-normal">
            Himpunan Mahasiswa Teknik Informatika (HMTI) didirikan pada hari
            Senin tanggal 21 Januari 2013.
          </p>
          <p class="text-white mt-4 font-weight-normal">
            Anggota HMTI Poliwangi terdiri dari seluruh mahasiswa teknik
            informatika yang terdaftar sebagai mahasiswa aktif Poliwangi.
          </p>
          <router-link
            to="tentang"
            class="btn btn-white mt-4 text-uppercase px-5"
            >Lihat Profile</router-link
          >
          <!-- <a href="#" class="btn btn-white mt-4 text-uppercase px-5">Lihat Profile</a> -->
        </div>
        <div class="col-lg-6 col-xl-7 m-lg-auto">
          <div
            class="rounded shadow-lg overflow-hidden transform-perspective-right"
          >
            <!-- <b-carousel id="carousel1" controls indicators>
                            <b-carousel-slide img-src="img/theme/landing.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/theme/profile.jpg"></b-carousel-slide>
            </b-carousel>-->
            <video
              style="width: 100%"
              oncontextmenu="return false;"
              autoplay
              loop
              playsinline
            >
              <source src="video/profile.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
</script>
<style>
video {
  margin-bottom: -6px;
}
</style>
