<template>
  <div class="container py-5" id="kegiatan">
    <div class="text-center mb-5 text-uppercase">
      <h2 class="text-white page-title">Kegiatan HMTI</h2>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6 order-lg-1 ml-lg-auto">
        <div class="position-relative">
          <img src="img/events.svg" class="img-center img-fluid" />
        </div>
      </div>
      <div class="col-lg-6 order-lg-2">
        <!-- <div class="d-flex px-3 pb-2">
          <div>
            <icon
              name="ni ni-building"
              size="lg"
              class="bg-gradient-white"
              color="primary"
              shadow
              rounded
            ></icon>
          </div>
        </div>-->
        <div class="scrollable-card px-3">
          <card
            class="shadow-sm card-profile my-3"
            no-body
            v-for="i in 3"
            :key="'loader' + i"
            v-show="loading"
          >
            <div class="px-4 pt-3 pb-2">
              <content-loader height="175" primaryColor="#ddd">
                <rect x="0" y="10" rx="2" ry="2" width="145" height="145" />
                <rect x="160" y="11" rx="2" ry="2" width="150" height="35" />
                <rect x="160" y="62" rx="2" ry="2" width="100" height="18" />
                <rect x="160" y="95" rx="2" ry="2" width="180" height="23" />
                <rect x="160" y="130" rx="2" ry="2" width="230" height="23" />
              </content-loader>
            </div>
          </card>
          <card
            class="shadow-sm shadow--hover item-hover mb-3"
            v-show="!loading"
            v-for="(post, i) in posts"
            :key="i"
          >
            <router-link :to="`/kegiatan/${post.slug}`">
              <div
                class="ribbon"
                v-if="filterComingSoonDate(post.acf.date_coming)"
              >
                <span class="ribbon__content">Coming Soon</span>
              </div>
              <div class="row pl-lg-3 pl-md-2">
                <div class="col-md-4 img-post p-0">
                  <img
                    v-if="img[i] != null"
                    v-lazy="img[i][1]"
                    class="w-full"
                    alt
                  />
                  <img
                    v-else
                    v-lazy="'img/brand/hmti.png'"
                    class="w-full"
                    alt
                  />
                  <!--  <icon name="ni ni-satisfied" gradient="success" color="white" shadow rounded></icon> -->
                </div>
                <div class="col-md-8 pl-4 overflow-hidden">
                  <div class="clamp-2">
                    <h5
                      class="title text-title mt-2"
                      v-html="post.title.rendered"
                    ></h5>
                  </div>
                  <small>{{
                    getFullDate(
                      date[i].day,
                      date[i].date,
                      date[i].month,
                      date[i].year
                    )
                  }}</small>
                  <div class="clamp-2" v-html="post.content.rendered"></div>
                </div>
              </div>
            </router-link>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ContentLoader } from "vue-content-loader";
import { log } from "util";

export default {
  components: {
    ContentLoader,
  },
  data() {
    return {
      loading: false,
      posts: [],
      date: [],
      img: [],
      error: null,
    };
  },
  created() {
    this.getData();
    this.loading = true;
    this.filterComingSoonDate();
  },
  methods: {
    getData() {
      axios
        .get(`wp/v2/posts?categories=30`)
        .then(async (response) => {
          let data = await this.sortArrays(response.data);

          let regexp = /<img[^>]+src\s*=\s*['"]([^'"]+)['"][^>]*>/g;
          let url = [],
            src = [],
            img = [],
            date = [],
            content = [];

          for (let i = 0; i < data.length; i++) {
            url.push(data[i].content.rendered);
            src.push(regexp.exec(url[i]));
            img.push(src[i]);
            // console.log(regexp.exec(url[i]));

            // menghapus tag figure image didalam content
            content.push(url[i].replace(/<figure .*?<\/figure>/g, ""));
            data[i].content.rendered = content[i];
            // console.log(content[i]);

            // get date
            date.push(new Date(Date.parse(data[i].acf.date_coming)));
            this.date[i] = {
              day: date[i].getDay(),
              date: date[i].getDate(),
              month: date[i].getMonth(),
              year: date[i].getFullYear(),
            };
            // mengganti isi categories(id) dengan value name
            // data[i].categories = data[i].categories.map(value => {
            //   console.log(value);
            //   this.categories.filter(
            //     categoriesId => categoriesId.id === value
            //   )[0].name;
            // });
          }
          // console.log(data);

          this.posts = await data;
          this.img = await img;

          this.loading = false;
        })
        .catch((error) => {
          this.error = error.response.data;
          this.loading = false;
          // console.log(error.response.data);
        });
    },
    sortArrays(arrays) {
      return arrays
        .slice()
        .sort((a, b) => (a.acf.date_coming < b.acf.date_coming ? 1 : -1));
    },
    filterComingSoonDate(value) {
      let date = new Date(value).getTime();
      let todayDate = Date.now();

      return date > todayDate ? true : false;
      // return new Date(value).toISOString();
    },
  },
};
</script>
<style>
.clamp-2 ul,
.clamp-2 ol {
  visibility: hidden;
  height: 0;
  margin: 0 !important;
  padding: 0 !important;
}
</style>
<style scoped>
a,
a:hover {
  color: #32325d;
}
a small {
  color: #747477;
}
.ribbon {
  width: 110px;
  height: 110px;
  overflow: hidden;
  position: absolute;
  top: -1px;
  right: -1px;
}
.ribbon__content {
  font-size: 13px;
  left: -16px;
  top: 17px;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  display: block;
  width: 180px;
  padding: 10px 0;
  background-color: #f32929e8;
  box-shadow: 0 1px 10px #1a254965;
  color: #fff;
  text-align: center;
  z-index: 99;
}
/* .img-post img {
  width: 100%;
  height: 100%;
} */
.scrollable-card {
  height: 550px;
  overflow-y: scroll;
}
</style>
