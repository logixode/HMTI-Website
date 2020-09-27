<template>
  <section class="section-hero section-shaped my-0">
    <div class="shape shape-style-1 shape-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container shape-container d-flex align-items-center">
      <div class="col px-0">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-7 text-center pt-lg">
            <img v-lazy="'img/brand/hmti.png'" class="rounded-circle" />
            <h1 class="text-white mt-4">Maintenance Mode ON</h1>
            <p class="lead text-white mt-4">
              Sorry, This website is under Construction. We Should be back
              sortly. Thank you for your patience.
            </p>
            <div class="btn-wrapper">
              <base-button
                tag="a"
                href="https://www.instagram.com/tipoliwangi/"
                class="mb-3 mb-sm-0"
                type="white"
                icon="fa fa-instagram"
                >@tipoliwangi
              </base-button>
              <base-button
                tag="a"
                href="https://www.youtube.com/channel/UCq769ou-Gy0z5b8Nzgv4kfg"
                class="btn-youtube mb-3 mb-sm-0"
                icon="fa fa-youtube"
              >
                TIPOLIWANGI TV
              </base-button>
            </div>
          </div>
        </div>
        <div
          class="row align-items-center justify-content-around stars-and-coded"
        >
          <div class="col-sm-4">
            <span class="text-white alpha-7 ml-3">Star us on</span>
            <a
              href="https://github.com/logixode/HMTI-Website"
              target="_blank"
              title="Support us on Github"
            >
              <img
                src="img/brand/github-white-slim.png"
                style="height: 22px; margin-top: -3px"
              />
            </a>
          </div>
          <div class="col-sm-4 mt-4 mt-sm-0 text-right">
            <span class="text-white alpha-7">Coded by</span>
            <a
              href="https://www.creative-tim.com"
              target="_blank"
              title="Creative Tim - Premium Bootstrap Themes and Templates"
            >
              <img
                src="img/brand/creativetim-white-slim.png"
                class="ml-3"
                style="height: 30px"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
img {
  max-width: 150px;
}
.section-shaped .shape {
  top: 0 !important;
}
</style>
