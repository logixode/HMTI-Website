<template>
    <section class="section section section-shaped my-0 overflow-hidden">
        <div class="shape shape-style-1 bg-gradient-warning shape-skew">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0">
            <div class="row align-items-center">
                <div class="col-md-6 order-lg-2 ml-lg-auto">
                    <div class="position-relative pl-md-5">
                        <img src="img/ill/ill-2.svg" class="img-center img-fluid" />
                    </div>
                </div>
                <div class="col-lg-6 order-lg-1">
                    <div class="d-flex px-3 pb-2">
                        <div>
                            <icon
                                name="ni ni-building"
                                size="lg"
                                class="bg-gradient-white"
                                color="primary"
                                shadow
                                rounded
                            ></icon>
                        </div>
                        <div class="pl-4">
                            <h4 class="display-3 text-white">Coming Soon</h4>
                        </div>
                    </div>
                    <card shadow class="shadow-lg--hover mt-3">
                        <div class="d-flex px-3">
                            <div>
                                <icon
                                    name="ni ni-satisfied"
                                    gradient="success"
                                    color="white"
                                    shadow
                                    rounded
                                ></icon>
                            </div>
                            <div class="pl-4">
                                <h5 class="title text-success">Awesome Support</h5>
                                <p>
                                    The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                    every summer, and that process will continue whatever happens.
                                </p>
                                <a href="#" class="text-success">Learn more</a>
                            </div>
                        </div>
                    </card>
                    <card shadow class="shadow-lg--hover mt-3">
                        <div class="d-flex px-3">
                            <div>
                                <icon
                                    name="ni ni-active-40"
                                    gradient="warning"
                                    color="white"
                                    shadow
                                    rounded
                                ></icon>
                            </div>
                            <div class="pl-4">
                                <h5 class="title text-warning">Modular Components</h5>
                                <p>
                                    The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                    every summer, and that process will continue whatever happens.
                                </p>
                                <a href="#" class="text-warning">Learn more</a>
                            </div>
                        </div>
                    </card>
                    <card shadow class="shadow-lg--hover mt-3">
                        <div class="d-flex px-3">
                            <div>
                                <icon
                                    name="ni ni-active-40"
                                    gradient="warning"
                                    color="white"
                                    shadow
                                    rounded
                                ></icon>
                            </div>
                            <div class="pl-4">
                                <h5 class="title text-warning">Modular Components</h5>
                                <p>
                                    The Arctic Ocean freezes every winter and much of the sea-ice then thaws
                                    every summer, and that process will continue whatever happens.
                                </p>
                                <a href="#" class="text-warning">Learn more</a>
                            </div>
                        </div>
                    </card>
                </div>
            </div>
        </div>
    </section>
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
