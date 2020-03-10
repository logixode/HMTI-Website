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
                    <h2 class="text-white font-weight-bold">HIMPUNAN MAHASISWA</h2>
                    <h3 class="text-white">TEKNIK INFORMATIKA</h3>
                    <p
                        class="lead text-white mt-4"
                    >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut nam nesciunt error beatae! Odio rerum illo dolorum iusto excepturi nemo fugiat mollitia?</p>
                    <router-link
                        to="tentang"
                        class="btn btn-white mt-4 text-uppercase px-5"
                    >Lihat Profile</router-link>
                    <!-- <a href="#" class="btn btn-white mt-4 text-uppercase px-5">Lihat Profile</a> -->
                </div>
                <div class="col-lg-7 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden transform-perspective-right">
                        <!-- <b-carousel id="carousel1" controls indicators>
                            <b-carousel-slide img-src="img/theme/landing.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/theme/profile.jpg"></b-carousel-slide>
                        </b-carousel>-->
                        <video
                            style="width:100% "
                            oncontextmenu="return false;"
                            autoplay
                            loop
                            muted
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
