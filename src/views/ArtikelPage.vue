<template>
    <div class="profile-page">
        <components-header></components-header>
        <section class="section section-skew mt--150">
            <div class="container">
                <card shadow class="card-profile mt--400" no-body>
                    <div class="px-5">
                        <!-- <div class="text-center mt-4">
                            <h2>Artikel</h2>
                        </div>-->
                        <div class="mt-3 py-3 border-top" v-if="!error.length">
                            <h4>{{ posts[5].title.rendered }}</h4>
                            <h6>{{ Date(Date.parse(posts[5].date)) }}</h6>
                            <div class="text-gray" v-html="posts[5].content.rendered"></div>
                            <!-- <div class="artikel" :key="key" v-for="(post, key) in posts[5]">
                                <h4>{{ post.title.rendered }}</h4>
                                <h6>{{ Date(Date.parse(post.date)) }}</h6>
                                <p v-html="post.content.rendered"></p>
                            </div>-->
                        </div>
                        <div class="my-5 border-top text-center" v-else>
                            <h1 class="display-1">ERROR 404</h1>
                            <h4>- {{ error[5].message }} -</h4>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
import ComponentsHeader from "./components/ComponentsHeader";

export default {
    components: {
        ComponentsHeader
    },
    data() {
        return {
            posts: [],
            error: [],
            id: this.$route.params.id
        };
    },
    created() {
        this.$http.get(`wp/v2/posts/${this.id}`).then(
            response => {
                for (let post in response) {
                    this.posts.push(response[post]);
                }
                // console.log(response);
            },
            error => {
                for (let errors in error) {
                    this.error.push(error[errors]);
                }
                // console.log(error);
            }
        );
    }
};
</script>
<style>
</style>
