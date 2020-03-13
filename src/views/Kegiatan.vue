<template>
    <div class="profile-page">
        <components-header></components-header>
        <section class="section section-skew mt--400">
            <!-- <div class="text-center mt--150 text-uppercase">
                <h2 class="text-white post-title">Kegiatan Terlaksana</h2>
            </div>-->
            <coming-soon class="mt--150"></coming-soon>
            <div class="container mt-5">
                <card shadow class="card-profile" no-body>
                    <div class="px-5"></div>
                </card>
                <card shadow class="card-profile mt-3" no-body>
                    <div class="px-5">
                        <div class="text-center mt-4"></div>
                        <kegiatan-terlaksana></kegiatan-terlaksana>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import ComponentsHeader from "./components/ComponentsHeader";
import ComingSoon from "./components/ComingSoon";
import KegiatanTerlaksana from "./components/KegiatanTerlaksana";

export default {
    components: {
        ComponentsHeader,
        ComingSoon,
        KegiatanTerlaksana
    }
};
</script>
<style>
img {
    max-width: 700px;
}
</style>
