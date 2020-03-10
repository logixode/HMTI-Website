<template>
    <div class="profile-page">
        <components-header></components-header>
        <section class="section section-skew mt--150">
            <div class="container">
                <card shadow class="card-profile mt--400" no-body>
                    <div class="px-5">
                        <div class="mt-3 py-3 border-top" v-if="loading">
                            <h4>Loading...</h4>
                        </div>
                        <div class="mt-3 py-3 border-top" v-if="error == null">
                            <h4>{{ posts.title.rendered }}</h4>
                            <h6>{{ Date(Date.parse(posts.date)) }}</h6>
                            <div class="text-gray" v-html="posts.content.rendered"></div>
                        </div>
                        <div class="my-5 border-top text-center" v-else>
                            <h1 class="display-1">ERROR {{ error.data.status }}</h1>
                            <h4>- {{ error.message }} -</h4>
                            <a href="/#/artikel/1">asd</a>
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

export default {
    components: {
        ComponentsHeader
    },
    data() {
        return {
            loading: false,
            posts: [],
            error: null,
            id: this.$route.params.id
        };
    },
    watch: {
        "$route.params.id": function(id) {
            this.getData(id);
        }
    },
    created() {
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
