<template>
    <div class="profile-page">
        <components-header></components-header>
        <section class="section section-skew mt--150">
            <div class="container">
                <card shadow class="card-profile mt--400" no-body>
                    <div class="px-5">
                        <div class="py-3 border-top" v-if="loading">
                            <content-loader-post></content-loader-post>
                        </div>
                        <!-- <div class="my-5 border-top text-center" v-else>
                            
                        </div>-->
                        <div class="mt-3 py-3 border-top" v-else>
                            <!-- <div v-if="error.hasOwnProperty('message')">
                                <h1 class="display-1">ERROR {{ error.data.status }}</h1>
                                <h4>- {{ error.message }} -</h4>
                                <a href="/#/artikel/1">asd</a>
                            </div>-->
                            <div v-show="error == null">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h2>{{ posts.title.rendered }}</h2>
                                    </div>
                                    <div class="col-md-6 text-right">
                                        <small>{{ Date(Date.parse(posts.date)) }}</small>
                                    </div>
                                </div>
                                <div class>
                                    <span class="badge text-unset badge-pill badge-primary">#primary</span>
                                    <span class="badge text-unset badge-pill badge-success">#success</span>
                                    <span class="badge text-unset badge-pill badge-danger">#danger</span>
                                    <span class="badge text-unset badge-pill badge-warning">#warning</span>
                                    <span class="badge text-unset badge-pill badge-info">#info</span>
                                    <span class="badge text-unset badge-pill badge-dark">#dark</span>
                                </div>
                                <hr />
                                <div class="text-gray" v-html="posts.content.rendered"></div>
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
        ContentLoaderPost
    },
    data() {
        return {
            loading: false,
            posts: [
                {
                    title: { rendered: "" },
                    date: "",
                    content: { rendered: "" }
                }
            ],
            date: [],
            error: null,
            id: this.$route.params.id
        };
    },
    watch: {
        "$route.params.id": function(id) {
            this.getData(id);
        }
    },
    mounted() {
        this.getData(this.id);
    },
    methods: {
        async getData(id) {
            this.error = null;
            this.posts = [];
            this.loading = true;
            await axios
                .get(`wp/v2/posts/${id}/`)
                .then(response => {
                    let data = response.data;

                    let date = [];

                    date.push(new Date(Date.parse(data.date)));
                    // this.date = {
                    //     day: date.getDay(),
                    //     date: date.getDate(),
                    //     month: date.getMonth(),
                    //     year: date.getFullYear()
                    // };
                    this.date.push(date);

                    this.posts = response.data;
                    // console.log(this.posts);
                    this.loading = false;
                })
                .catch(error => {
                    this.error = error.response.data;
                    // console.log(error.response.data);
                    this.loading = false;
                });
        }
    }
};
</script>
<style>
</style>
