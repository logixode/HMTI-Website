<template>
  <div class="profile-page">
    <components-header></components-header>
    <section class="section section-skew mt--400">
      <div class="container py-0 mt--150">
        <div class="text-center mb-4 text-uppercase">
          <h2 class="text-white page-title">Prestasi & Produk</h2>
        </div>
        <div class="row align-items-center">
          <br />
          <br />
          <br />s
          <br />
          <br />
          <br />s
          <br />
          <br />
          <br />s
          <br />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Kegiatan from "./components/Kegiatan";
import axios from "axios";
import { ContentLoader } from "vue-content-loader";
import { log } from "util";
import ComponentsHeader from "./components/ComponentsHeader";
// import KegiatanTerlaksana from "./components/KegiatanTerlaksana";

export default {
  components: {
    ContentLoader,
    ComponentsHeader,
    Kegiatan,
    // KegiatanTerlaksana
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
img {
  max-width: 800px;
}

@media only screen and (max-width: 768px) {
  img {
    max-width: 580px;
  }
}

@media only screen and (max-width: 600px) {
  img {
    max-width: 280px;
  }
}

@media only screen and (max-width: 375px) {
  img {
    max-width: 250px;
  }
}
</style>
