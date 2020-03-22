/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import VueResource from 'vue-resource'
import axios from 'axios'

Vue.use(VueResource)
Vue.use(Argon);
Vue.use(axios);

axios.defaults.baseURL = 'http://localhost/index.php/wp-json/'

Vue.mixin({
    methods: {
        async getTags () {
            await axios
                .get(`wp/v2/tags?per_page=100`)
                .then(response => {
                    this.tags = response.data
                })
        },
        getFullDate (day, date, month, year) {
            const months = [
                "Januari",
                "Februari",
                "Maret",
                "April",
                "Mei",
                "Juni",
                "Juli",
                "Agustus",
                "September",
                "Oktober",
                "November",
                "Desember"
            ];
            const days = [
                "Minggu",
                "Senin",
                "Selasa",
                "Rabu",
                "Kamis",
                "Jum'at",
                "Sabtu"
            ];

            return days[day] + ", " + date + " " + months[month] + " " + year;
        }
    }
})
// Vue.prototype.$http = axios
// Vue.http.options.root = 'http://localhost/index.php/wp-json/'

Vue.config.productionTip = false;
new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
