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
              <div
                class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center"
              >
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
              <div>
                <i class="ni education_hat mr-2"></i>Politeknik Negeri
                Banyuwangi
              </div>
            </div>
            <hr />
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="py-3 text-center border-top" v-if="loading">
                  <content-loader-post></content-loader-post>
                </div>

                <div class="mt-1 mt-md-3 py-3" v-else>
                  <div class="text-center py-5" v-if="error != null">
                    <h1 class="display-1">ERROR {{ error.data.status }}</h1>
                    <h4>- {{ error.message }} -</h4>
                  </div>
                  <div class="text-center" v-show="error == null">
                    <div
                      class="text-gray"
                      v-html="profile[0].content.rendered"
                    ></div>
                  </div>
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
import axios from "axios";
import ComponentsHeader from "./components/ComponentsHeader";
import ContentLoaderPost from "./components/ContentLoaderPost";
export default {
  components: {
    ContentLoaderPost,
    ComponentsHeader,
  },
  data() {
    return {
      loading: false,
      profile: [],
      error: null,
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.error = null;
      // this.post = [];
      this.loading = true;
      await axios
        .get("wp/v2/pages?slug=profile-page")
        .then((response) => {
          this.profile = response.data;
          // console.log(this.posts);
          this.loading = false;
        })
        .catch((error) => {
          this.error = error.response.data;
          console.log(error);

          this.loading = false;
        });
    },
  },
};
</script>
<style>
.wp-block-columns {
  display: flex;
}
.wp-block-column {
  flex: 1;
}
.wp-block-column img {
  width: 100%;
}
</style>
<style scoped>
.profile-page .card-profile .card-profile-image img {
  box-shadow: unset !important;
}
img {
  max-width: 700px;
}
</style>
