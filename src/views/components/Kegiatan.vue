<template>
  <div class="container py-0">
    <div class="row align-items-center">
      <div class="col-md-6 order-lg-2 ml-lg-auto">
        <div class="position-relative pl-md-5">
          <img src="img/ill/ill-2.svg" class="img-center img-fluid" />
        </div>
      </div>
      <div class="col-lg-6 order-lg-1">
        <div class="d-flex px-3 pb-2">
          <!-- <div>
                        <icon
                            name="ni ni-building"
                            size="lg"
                            class="bg-gradient-white"
                            color="primary"
                            shadow
                            rounded
                        ></icon>
          </div>-->
          <div class="pl-4">
            <h2 class="display-3 text-white">Kegiatan</h2>
          </div>
        </div>
        <div class="scrollable-card px-3">
          <card shadow class="shadow-lg--hover mb-3" v-for="(post, i) in posts" :key="i">
            <div class="d-flex px-3">
              <div class="img-post">
                <img v-if="img[i] != null" v-lazy="img[i][1]" alt />
                <img v-else v-lazy="'img/brand/hmti.png'" alt />
                <!--  <icon name="ni ni-satisfied" gradient="success" color="white" shadow rounded></icon> -->
              </div>
              <div class="pl-4 clamp-2">
                <h4 class="title text-success">{{ post.title.rendered }}</h4>
                <p>{{ getFullDate(date[i].day, date[i].date, date[i].month, date[i].year) }}</p>
                <div v-html="post.content.rendered"></div>
                <a href="#" class="text-success">Learn more</a>
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

export default {
  data() {
    return {
      posts: [],
      date: [],
      img: [],
      error: null
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get(`wp/v2/posts?categories=30`)
        .then(async response => {
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

            //   // get date
            date.push(new Date(Date.parse(data[i].acf.date_coming)));
            this.date[i] = {
              day: date[i].getDay(),
              date: date[i].getDate(),
              month: date[i].getMonth(),
              year: date[i].getFullYear()
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
        .catch(error => {
          this.error = error.response.data;
          this.loading = false;
          // console.log(error.response.data);
        });
    }
  }
};
</script>
<style scoped>
.scrollable-card {
  height: 550px;
  overflow-y: scroll;
}
</style>
