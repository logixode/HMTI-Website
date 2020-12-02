<template>
  <footer class="footer">
    <div class="gradient-bar mt-5"></div>
    <div class="top-footer-dark text-white">
      <div class="py-5 container">
        <div class="row">
          <div class="col-md-9 pr-1">
            <h6 class="font-weight-bold pb-3 text-white text-uppercase">
              Contact us
            </h6>
            <div class="text-secondary">
              <p class="mb-1 font-weight-bold">
                Himpunan Mahasiswa Teknik Informatika
              </p>
              <p class="mb-1">
                Kesekretariatan HMTI, Gedung Kuning, Politeknik Negeri
                Banyuwangi
              </p>

              <i class="fa fa-envelope">&nbsp;</i>
              <a href="mailto:hmti@poliwangi.ac.id">hmti@poliwangi.ac.id</a>
            </div>
          </div>

          <div class="col-md-3 pr-1">
            <h6 class="font-weight-bold pb-3 text-white text-uppercase">
              Find Us at
            </h6>
            <div class="btn-wrapper">
              <a
                target="_blank"
                rel="noopener"
                href="https://www.instagram.com/tipoliwangi/"
              >
                <button class="btn btn-neutral btn-instagram btn-round w-100">
                  <i class="fa fa-instagram"></i> @tipoliwangi
                </button>
              </a>
              <a
                target="_blank"
                rel="noopener"
                href="https://www.youtube.com/channel/UCq769ou-Gy0z5b8Nzgv4kfg"
              >
                <button
                  class="btn btn-neutral btn-youtube btn-round mt-2 w-100"
                >
                  <i class="fa fa-youtube">&nbsp;</i> TIPOLIWANGI TV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- / Contact Us -->

    <!-- <hr /> -->
    <div class="footer-dark">
      <div class="container py-3">
        <div class="row align-items-center justify-content-md-between">
          <div class="col-md-6">
            <div class="copyright">
              <span>
                &copy; {{ year }}
                <a href="/" rel="noopener">Software Developer of HMTI</a> | Made
                with
                <a href="https://vuejs.org" target="_blank" rel="noopener"
                  >Vue.js</a
                ></span
              >
            </div>
          </div>
          <div class="col-md-6">
            <ul class="nav nav-footer justify-content-end">
              <!-- <li class="nav-item">
                            <a
                                href="https://poliwangi.ac.id"
                                class="nav-link"
                                target="_blank"
                                rel="noopener"
                            >POLIWANGI</a>
                            </li>-->
              <li class="nav-item">
                <a
                  href="/#/tentang"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                  >Tentang</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="/#/artikel"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                  >Artikel</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://github.com/logixode/HMTI-Website/blob/master/LICENSE"
                  class="nav-link"
                  target="_blank"
                  rel="noopener"
                  >MIT License</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style>
footer {
  padding-bottom: 0 !important;
  /* -webkit-transition: all 0.15s ease !important;
    transition: all 0.15s ease !important; */
}

.footer-dark {
  background-color: #202020;
  /* -webkit-transition: all 0.15s ease !important;
    transition: all 0.15s ease !important; */
}
.top-footer-dark {
  background-color: #272727;
  /* -webkit-transition: all 0.15s ease !important;
    transition: all 0.15s ease !important; */
}

.gradient-bar {
  height: 5px;
  background: linear-gradient(to right, #ffef03, #ff5a00);
}

.btn {
  text-transform: none !important;
}

footer a {
  color: #c8c8c8 !important;
}

.copyright span,
footer a:hover {
  color: #7a7a7a !important;
}
</style>
