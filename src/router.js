import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import NotFound from "./views/components/NotFound.vue";
import ComingSoon from "./views/components/ComingSoon.vue";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Artikel from "./views/Artikel.vue";
import Kegiatan from "./views/Kegiatan.vue";
import KegiatanPage from "./views/KegiatanPage.vue";
import PrestasiProduk from "./views/PrestasiProduk.vue";
import ArtikelPage from "./views/ArtikelPage.vue";

Vue.use(Router);

const router = new Router({
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
      path: "*",
      name: "404",
      components: {
        header: AppHeader,
        default: NotFound,
        footer: AppFooter
      }
    },
    {
      path: "/comingsoon",
      name: "comingsoon",
      components: {
        default: () => {
          localStorage.setItem("isMaintenance", true);
        }
      },
      children: [
        {
          path: "false",
          components: {
            default: () => {
              localStorage.setItem("isMaintenance", false);
            }
          }
        }
      ]
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
        default: PrestasiProduk,
        footer: AppFooter
      }
    },
    {
      path: "/artikel/:slug/",
      name: "artikel-page",
      components: {
        header: AppHeader,
        default: ArtikelPage,
        footer: AppFooter
      }
    },
    {
      path: "/kegiatan/:slug/",
      name: "kegiatan-page",
      components: {
        header: AppHeader,
        default: KegiatanPage,
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

export default router;