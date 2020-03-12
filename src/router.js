import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Artikel from "./views/Artikel.vue"
import Kegiatan from "./views/Kegiatan.vue"
import ArtikelPage from "./views/ArtikelPage.vue"

Vue.use(Router);

export default new Router({
    linkExactActiveClass: "active",
    routes: [
        {
            path: "/",
            name: "index",
            components: {
                header: AppHeader,
                default: Index,
                footer: AppFooter
            }
        },
        {
            path: "/landing",
            name: "landing",
            components: {
                header: AppHeader,
                default: Landing,
                footer: AppFooter
            }
        },
        {
            path: "/login",
            name: "login",
            components: {
                header: AppHeader,
                default: Login,
                footer: AppFooter
            }
        },
        {
            path: "/register",
            name: "register",
            components: {
                header: AppHeader,
                default: Register,
                footer: AppFooter
            }
        },
        {
            path: "/tentang",
            name: "tentang",
            components: {
                header: AppHeader,
                default: Profile,
                footer: AppFooter
            }
        },
        {
            path: "/artikel",
            name: "artikel",
            components: {
                header: AppHeader,
                default: Artikel,
                footer: AppFooter
            }
        },
        {
            path: "/kegiatan",
            name: "kegiatan",
            components: {
                header: AppHeader,
                default: Kegiatan,
                footer: AppFooter
            }
        },
        {
            path: "/prestasi",
            name: "prestasi",
            components: {
                header: AppHeader,
                default: Profile,
                footer: AppFooter
            }
        },
        {
            path: "/artikel/:id/",
            name: "artikel-page",
            components: {
                header: AppHeader,
                default: ArtikelPage,
                footer: AppFooter
            }
        }
    ],
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash };
        } else {
            return { x: 0, y: 0 };
        }
    }
});
