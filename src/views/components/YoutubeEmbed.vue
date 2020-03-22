<template>
    <div class="container">
        <section class="d-flex justify-content-between">
            <iframe
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                width="325"
                height="182"
                type="text/html"
                src="https://www.youtube.com/embed/DBXH9jJRaDk"
            ></iframe>
            <iframe
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                width="325"
                height="182"
                type="text/html"
                src="https://www.youtube.com/embed/VPSoNx1gyQ4"
            ></iframe>
            <iframe
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                width="325"
                height="182"
                type="text/html"
                src="https://www.youtube.com/embed/M7lc1UVf-VE"
            ></iframe>
            <!-- <youtube :video-id="videoId1" player-width="325" player-height="182"></youtube>
            <youtube :video-id="videoId2" player-width="325" player-height="182"></youtube>
            <youtube :video-id="videoId3" player-width="325" player-height="182"></youtube>-->
        </section>
    </div>
</template>
<script>
export default {
    props: ["videoId1", "videoId2", "videoId3"]
};
</script>
<style>
</style>
