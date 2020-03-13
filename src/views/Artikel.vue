<template>
    <div class="profile-page">
        <components-header></components-header>
        <section class="section section-skew mt--400">
            <div class="text-center mt--150 text-uppercase">
                <h2 class="text-white post-title">Artikel</h2>
            </div>
            <div class="container mt-5">
                <card shadow class="card-profile my-3" no-body :key="post.id" v-for="post in posts">
                    <div class="px-4 pt-1 pb-2" v-show="loading">
                        <content-loader height="87" primaryColor="#ddd">
                            <rect x="0" y="10" rx="3" ry="3" width="70" height="70" />
                            <rect x="80" y="16" rx="3" ry="3" width="150" height="9" />
                            <rect x="80" y="31" rx="3" ry="3" width="30" height="8" />
                            <rect x="115" y="31" rx="3" ry="3" width="50" height="8" />
                            <rect x="170" y="31" rx="3" ry="3" width="40" height="8" />
                            <rect x="80" y="45" rx="3" ry="3" width="280" height="8" />
                            <rect x="80" y="58" rx="3" ry="3" width="250" height="8" />
                            <rect x="80" y="71" rx="3" ry="3" width="60" height="5" />
                        </content-loader>
                    </div>
                    <div class="pl-3 pr-5 pt-4 pb-4" v-show="!loading">
                        <!-- <div class="mt-3 py-3 border-top"> -->
                        <!-- <div class="artikel" > -->

                        <router-link :to="`/artikel/${post.id}`">
                            <div class="row">
                                <div class="col-md-2">
                                    <img src="img/brand/hmti.png" width="150px" alt />
                                </div>
                                <div class="col-md-10">
                                    <h5>{{ post.title.rendered }}</h5>
                                    <div class="mt-2 mb-2">
                                        <span
                                            class="badge text-unset badge-pill badge-primary"
                                        >Primary</span>
                                        <span
                                            class="badge text-unset badge-pill badge-success"
                                        >Success</span>
                                        <span
                                            class="badge text-unset badge-pill badge-danger"
                                        >Danger</span>
                                        <span
                                            class="badge text-unset badge-pill badge-warning"
                                        >Warning</span>
                                        <span class="badge text-unset badge-pill badge-info">Info</span>
                                        <span class="badge text-unset badge-pill badge-dark">Dark</span>
                                    </div>
                                    <div class="text-gray clamp-2" v-html="post.content.rendered"></div>
                                    <small
                                        class="text-gray mt-1 pt-1"
                                    >{{ Date(Date.parse(post.date)) }}</small>
                                </div>
                            </div>
                        </router-link>
                        <!-- </div> -->
                        <!-- </div> -->
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import ComponentsHeader from "./components/ComponentsHeader";
import axios from "axios";
import { ContentLoader } from "vue-content-loader";

export default {
    components: {
        ComponentsHeader,
        ContentLoader
    },
    data() {
        return {
            loading: true,
            posts: [],
            error: null
        };
    },
    async created() {
        await axios
            .get("wp/v2/posts?categories=1")
            .then(response => {
                this.posts = response.data;
                // console.log(this.posts);
                this.loading = false;
            })
            .catch(error => {
                this.error = error.response.data;
                this.loading = false;
                // console.log(error.response.data);
            });
    }
};
</script>
<style>
.text-gray {
    color: #525252;
}
</style>
