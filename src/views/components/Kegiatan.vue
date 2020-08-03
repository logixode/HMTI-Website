<template>
  <div class="container py-0">
    <div class="text-center mb-4 text-uppercase">
      <h2 class="text-white page-title">Kegiatan</h2>
    </div>
    <div class="row align-items-center">
      <div class="col-md-7 order-lg-1 ml-lg-auto">
        <div class="position-relative">
          <img src="img/events.svg" class="img-center img-fluid" />
        </div>
      </div>
      <div class="col-lg-5 order-lg-2">
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
            shadow
            class="card-profile my-3"
            no-body
            v-for="i in 3"
            :key="'loader'+i"
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
            shadow
            class="shadow-lg--hover mb-3"
            v-show="!loading"
            v-for="(post, i) in sortArrays(posts)"
            :key="i"
          >
            <div class="row">
              <div class="col-md-4 img-post">
                <img v-if="img[i] != null" v-lazy="img[i][1]" alt />
                <img v-else v-lazy="'img/brand/hmti.png'" alt />
                <!--  <icon name="ni ni-satisfied" gradient="success" color="white" shadow rounded></icon> -->
              </div>
              <div class="col-md-8 pl-4 overflow-hidden">
                <h5 class="title text-success mt-2">{{ post.title.rendered }}</h5>
                <small>{{ getFullDate(date[i].day, date[i].date, date[i].month, date[i].year) }}</small>
                <div class="clamp-2" v-html="post.content.rendered"></div>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { ContentLoader } from "vue-content-loader";

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
  },
  methods: {
    getData() {
      axios
        .get(`wp/v2/posts?categories=30`)
        .then(async (response) => {
          let data = await response.data;

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

            // menghapus tag figure image didalam content
            content.push(url[i].replace(/<figure .*?figure>\n\n\n\n/g, ""));
            data[i].content.rendered = content[i];

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
  },
};
</script>
<style scoped>
.img-post img {
  width: 100px;
  height: 100px;
}
.scrollable-card {
  height: 550px;
  overflow-y: scroll;
}
</style>
