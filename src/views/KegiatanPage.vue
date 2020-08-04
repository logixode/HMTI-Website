<template>
  <div class="profile-page">
    <components-header></components-header>
    <section class="section section-skew mt--150">
      <div class="container">
        <card shadow class="card-profile mt--400" no-body>
          <div class="px-4 px-md-5">
            <div class="py-3 border-top" v-if="loading">
              <content-loader-post></content-loader-post>
            </div>
            <div class="mt-1 mt-md-3 py-3" v-else>
              <div class="text-center py-5" v-if="error != null">
                <h1 class="display-1">ERROR {{ error.data.status }}</h1>
                <h4>- {{ error.message }} -</h4>
              </div>
              <div v-show="error == null">
                <div class="row">
                  <div class="col-md-6">
                    <h2>{{ post.title.rendered }}</h2>
                  </div>
                  <div class="col-md-6 text-right">
                    <small>{{ getFullDate(date.day, date.date, date.month, date.year) }}</small>
                  </div>
                </div>
                <div class>
                  <span
                    class="badge text-unset badge-pill badge-primary"
                    v-for="(tag,j) in post.tags"
                    :key="j"
                  >{{ tag }}</span>
                </div>
                <hr />
                <div class="text-gray" v-html="post.content.rendered"></div>
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
import axios from "axios";
import ContentLoaderPost from "./components/ContentLoaderPost";

export default {
  components: {
    ComponentsHeader,
    ContentLoaderPost,
  },
  data() {
    return {
      loading: false,
      post: {
        title: { rendered: "" },
        date: "",
        content: { rendered: "" },
      },
      date: [],
      tags: [],
      error: null,
      slug: this.$route.params.slug,
    };
  },
  watch: {
    "$route.params.slug": function (val) {
      this.getData(val);
    },
  },
  mounted() {
    this.getTags();
    this.getData(this.slug);
  },
  methods: {
    async getData(slug) {
      this.error = null;
      // this.post = [];
      this.loading = true;
      await axios
        .get(`wp/v2/posts?slug=${slug}/`)
        .then((response) => {
          let data = response.data[0];

          let date,
            tags = [];

          date = new Date(Date.parse(data.date));
          this.date = {
            day: date.getDay(),
            date: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
          };

          // mengganti isi tag(id) dengan value name
          data.tags = data.tags.map(
            (value) => this.tags.filter((tagId) => tagId.id === value)[0].name
          );

          this.post = response.data[0];
          this.loading = false;
        })
        .catch((error) => {
          this.error = error.response.data;
          console.log(error);

          // console.log(error.response.data);
          this.loading = false;
        });
    },
  },
};
</script>

<style>
</style>