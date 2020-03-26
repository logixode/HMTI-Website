<template>
    <div class="container">
        <div class="d-flex justify-content-between mx--100" v-if="!loading">
            <div
                v-for="list in youtube"
                :key="list.id"
                v-html="list.content.rendered"
                class="col-md-4 pl-0"
            />
        </div>
        <base-pagination
            v-if="paging.total != 1"
            class="my-4"
            :page-count="parseInt(paging.total)"
            v-model="paging.default"
        ></base-pagination>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            loading: false,
            youtube: [],
            error: null,
            paging: {
                default: 1,
                total: 1
            }
        };
    },
    watch: {
        "paging.default": function(v) {
            this.getData(v);
        }
    },
    created() {
        this.getData(this.paging.default);
        this.loading = true;
    },
    methods: {
        getData(page) {
            axios
                .get(`wp/v2/posts?categories=29&per_page=3&page=${page}`)
                .then(async response => {
                    let data = await response.data;

                    let regexp = /<iframe[^>]*>/g;
                    let url = [],
                        src = [],
                        listYt = [];

                    for (let i = 0; i < data.length; i++) {
                        url.push(data[i].content.rendered);
                        src.push(regexp.exec(url));

                        // mengganti width dan height video
                        listYt.push(
                            src[i][0].replace(
                                'width="580" height="326"',
                                'width="325" height="182"'
                            )
                        );
                        data[i].content.rendered = listYt[i];
                    }

                    this.paging.total = response.headers["x-wp-totalpages"];
                    this.youtube = await data;
                    // console.log(response.data);

                    this.loading = false;
                })
                .catch(error => {
                    this.error = error.response.data;
                    this.loading = false;
                    // console.log(error.response.data);
                });
        }
    }
};
</script>
<style>
</style>
