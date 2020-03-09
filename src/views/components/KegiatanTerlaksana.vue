<template>
    <div></div>
</template>
<script>
export default {
    data() {
        return {
            posts: []
        };
    },
    created() {
        this.$http.get("wp/v2/posts").then(
            response => {
                for (let post in response) {
                    this.posts.push(response[post]);
                }
                // console.log(response);
            },
            error => {
                console.log(error);
            }
        );
    }
};
</script>
<style>
</style>
