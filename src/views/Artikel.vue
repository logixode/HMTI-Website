<template>
  <div class="profile-page">
    <components-header></components-header>
    <section class="section section-skew mt--400">
      <div class="text-center mt--150 text-uppercase">
        <h2 class="text-white page-title">Artikel</h2>
      </div>
      <div class="container mt-5">
        <card shadow class="card-profile my-3" no-body v-if="error != null">
          <div class="px-4 py-4 text-center">
            <h1 class="display-1">ERROR {{ error.data.status }}</h1>
            <h4>- {{ error.message }} -</h4>
          </div>
        </card>
        <card
          shadow
          class="card-profile my-3"
          no-body
          v-for="i in 4"
          :key="'loader'+i"
          v-show="loading"
        >
          <div class="px-4 pt-1 pb-2">
            <content-loader height="80" primaryColor="#ddd">
              <rect x="0" y="10" rx="2" ry="2" width="63" height="63" />
              <rect x="70" y="11" rx="2" ry="2" width="150" height="9" />
              <rect x="70" y="27" rx="2" ry="2" width="30" height="8" />
              <rect x="115" y="27" rx="2" ry="2" width="50" height="8" />
              <rect x="170" y="27" rx="2" ry="2" width="40" height="8" />
              <rect x="70" y="42" rx="2" ry="2" width="280" height="8" />
              <rect x="70" y="54" rx="2" ry="2" width="250" height="8" />
              <rect x="70" y="68" rx="2" ry="2" width="60" height="5" />
            </content-loader>
          </div>
        </card>

        <card
          shadow
          class="shadow-lg--hover item-hover card-profile my-3"
          v-show="!loading"
          no-body
          :key="i"
          v-for="(post, i) in posts"
        >
          <div class="px-4 py-4">
            <!-- <div class="mt-3 py-3 border-top"> -->
            <!-- <div class="artikel" > -->

            <router-link :to="`/artikel/${post.slug}`">
              <div class="row">
                <div class="col-sm-4 col-md-2 img-post">
                  <img v-if="img[i] != null" v-lazy="img[i][1]" alt />
                  <img v-else v-lazy="'img/brand/hmti.png'" alt />
                </div>
                <div class="col-sm-8 col-md-10 pl-4">
                  <h5>{{ post.title.rendered }}</h5>
                  <div class="mt-2 mb-2 pb-1">
                    <span
                      class="badge text-unset badge-pill badge-primary"
                      v-for="(tag,j) in post.tags"
                      :key="j"
                    >{{ tag }}</span>
                    <!-- <span
                                            class="badge text-unset badge-pill badge-success"
                                        >Success</span>
                                        <span
                                            class="badge text-unset badge-pill badge-danger"
                                        >Danger</span>
                                        <span
                                            class="badge text-unset badge-pill badge-warning"
                                        >Warning</span>
                                        <span class="badge text-unset badge-pill badge-info">Info</span>
                    <span class="badge text-unset badge-pill badge-dark">Dark</span>-->
                  </div>
                  <div class="text-gray clamp-2" v-html="post.content.rendered"></div>
                  <small
                    class="text-gray mt-1 pt-1"
                  >{{ getFullDate(date[i].day, date[i].date, date[i].month, date[i].year) }}</small>
                </div>
              </div>
            </router-link>
          </div>
        </card>
        <div class="d-flex justify-content-end">
          <base-pagination
            v-if="paging.total != 1"
            class="my-4"
            :page-count="parseInt(paging.total)"
            v-model="paging.default"
          ></base-pagination>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import ComponentsHeader from "./components/ComponentsHeader";
// import JavascriptComponents from "./components/JavascriptComponents";
import axios from "axios";
import { ContentLoader } from "vue-content-loader";
// import { getFullDate } from "../plugins/get-date";

export default {
  components: {
    ComponentsHeader,
    // JavascriptComponents,
    ContentLoader,
  },
  data() {
    return {
      loading: false,
      posts: [],
      img: [],
      date: [],
      error: null,
      tags: [],
      paging: {
        default: 1,
        total: 1,
      },
    };
  },
  watch: {
    "paging.default": function (v) {
      this.getData(v);
    },
  },
  mounted() {
    this.getData(this.paging.default);
    this.getTags();
    this.loading = true;
  },
  methods: {
    getData(page) {
      axios
        .get(`wp/v2/posts?categories=1&per_page=6&page=${page}`)
        .then(async (response) => {
          let data = await response.data;

          let regexp = /<img[^>]+src\s*=\s*['"]([^'"]+)['"][^>]*>/g;
          let url = [],
            src = [],
            img = [],
            date = [],
            content = [],
            tags = [];

          for (let i = 0; i < data.length; i++) {
            url.push(data[i].content.rendered);
            src.push(regexp.exec(url[i]));
            img.push(src[i]);

            // menghapus tag figure image didalam content
            content.push(url[i].replace(/<figure .*?figure>/g, ""));
            data[i].content.rendered = content[i];

            // get date
            date.push(new Date(Date.parse(data[i].date)));
            this.date[i] = {
              day: date[i].getDay(),
              date: date[i].getDate(),
              month: date[i].getMonth(),
              year: date[i].getFullYear(),
            };

            // mengganti isi tag(id) dengan value name
            data[i].tags = data[i].tags.map(
              (value) => this.tags.filter((tagId) => tagId.id === value)[0].name
            );
          }

          // console.log(data);

          this.paging.total = response.headers["x-wp-totalpages"];
          this.posts = await data;
          this.img = await img;

          this.loading = false;
        })
        .catch((error) => {
          this.error = error.response.data;
          console.log(error);
          this.loading = false;
          // console.log(error.response.data);
        });
    },
  },
};
</script>
<style>
.img-post img {
  width: 155px;
  height: 155px;
  object-fit: cover;
  border-radius: 0.25rem;
}
.text-gray {
  color: #525252;
}

@media (max-width: 576px) {
  .img-post {
    text-align: center;
    margin-bottom: 10px;
  }
}
</style>
