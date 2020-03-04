<template>
    <div>
        <section class="d-flex justify-content-center">
            <youtube :video-id="videoId1" player-width="360" player-height="230" class="mx-2"></youtube>
            <youtube :video-id="videoId2" player-width="360" player-height="230" class="mx-2"></youtube>
            <youtube :video-id="videoId3" player-width="360" player-height="230" class="mx-2"></youtube>
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
