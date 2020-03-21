<template>
    <div class="profile-page">
        <components-header></components-header>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--500" no-body>
                    <div class="px-5">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/brand/hmti.png'" class="rounded-circle" />
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <!-- <div class="card-profile-actions py-4 mt-lg-0">
                                    <base-button type="info" size="sm" class="mr-4">Connect</base-button>
                                    <base-button
                                        type="default"
                                        size="sm"
                                        class="float-right"
                                    >Message</base-button>
                                </div>-->
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <!-- <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">22</span>
                                        <span class="description">Friends</span>
                                    </div>
                                    <div>
                                        <span class="heading">10</span>
                                        <span class="description">Photos</span>
                                    </div>
                                    <div>
                                        <span class="heading">89</span>
                                        <span class="description">Comments</span>
                                    </div>
                                </div>-->
                                <div class="mb-5 py-2"></div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>
                                Himpunan Mahasiswa Teknik Informatika
                                <!-- <span
                                    class="font-weight-light"
                                >, 27</span>-->
                            </h3>
                            <!-- <div class="h6 font-weight-300">
                                <i class="ni location_pin mr-2"></i>Politeknik Negeri Banyuwangi
                            </div>
                            <div class="h6 mt-4">
                                <i class="ni business_briefcase-24 mr-2"></i>Solution Manager - Creative Tim Officer
                            </div>-->
                            <div>
                                <i class="ni education_hat mr-2"></i>Politeknik Negeri Banyuwangi
                            </div>
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-10">
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque tempora maiores incidunt commodi nisi? Magni ipsum sequi, quo consequatur corporis laboriosam labore minus voluptas quas atque facere a tempore dolores dolorem molestiae ipsam eligendi. Repellat aspernatur dolorum odit vitae tempora tempore qui ab eveniet, debitis temporibus quod voluptates voluptatem, illum magnam similique cumque natus nesciunt officiis? Nobis velit possimus nostrum beatae earum libero reiciendis ducimus laboriosam consectetur quos dignissimos dicta quaerat, enim provident. Consectetur deleniti sit, ad esse odio velit ratione quod tenetur corporis, ut asperiores nihil qui, eveniet obcaecati?</p>

                                    <img src="img/struktur.png" alt />
                                    <!-- <a href="#">Show more</a> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import ComponentsHeader from "./components/ComponentsHeader";
export default {
    components: {
        ComponentsHeader
    }
};
</script>
<style scoped>
.profile-page .card-profile .card-profile-image img {
    box-shadow: unset !important;
}
img {
    max-width: 700px;
}
</style>
