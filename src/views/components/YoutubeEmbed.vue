<template>
    <div class="container">
        <section class="d-flex justify-content-between">
            <youtube :video-id="videoId1" player-width="325" player-height="182"></youtube>
            <youtube :video-id="videoId2" player-width="325" player-height="182"></youtube>
            <youtube :video-id="videoId3" player-width="325" player-height="182"></youtube>
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
