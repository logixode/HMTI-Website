<template>
    <div class="profile-page">
        <components-header></components-header>
        <section class="section section-skew mt--150">
            <div class="container">
                <card shadow class="card-profile mt--400" no-body>
                    <div class="px-5">
                        <div class="text-center mt-4">
                            <h2>Artikel</h2>
                        </div>
                        <div class="mt-3 py-3 border-top">
                            <div class="artikel" :key="post.id" v-for="post in posts">
                                <router-link :to="`/artikel/${post.id}`">
                                    <h4>{{ post.title.rendered }}</h4>
                                    <h6>{{ Date(Date.parse(post.date)) }}</h6>
                                    <div class="text-gray" v-html="post.content.rendered"></div>
                                </router-link>
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

export default {
    components: {
        ComponentsHeader
    },
    data() {
        return {
            posts: [],
            error: []
        };
    },
    async created() {
        await axios
            .get("wp/v2/posts?categories=1")
            .then(response => {
                this.posts = response.data;
                console.log(this.posts);
            })
            .catch(error => {
                this.error = error.response.data;
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
