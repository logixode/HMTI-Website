<template>
    <footer class="footer">
        <div class="gradient-bar mt-5"></div>
        <div class="top-footer-dark text-white">
            <div class="py-5 container">
                <div class="row">
                    <div class="col-md-8 pr-1">
                        <h6 class="font-weight-bold pb-3 text-white text-uppercase">Contact us</h6>
                        <div class="text-secondary">
                            <p class="font-weight-bold">Himpunan Mahasiswa Teknik Informatika</p>
                            <p>Kecamatan Kabat, Kabupaten Banyuwangi</p>

                            <i class="fa fa-envelope">&nbsp;</i>
                            <a href="mailto:hmti@poliwangi.ac.id">hmti@poliwangi.ac.id</a>
                        </div>
                    </div>

                    <div class="col-md-4 pr-1">
                        <h6 class="font-weight-bold pb-3 text-white text-uppercase">Find Us at</h6>
                        <div class="btn-wrapper">
                            <a target="_blank" rel="noopener" href="#">
                                <button class="btn btn-neutral btn-instagram btn-round">
                                    <i class="fa fa-instagram"></i> @tipoliwangi
                                </button>
                            </a>
                            <a target="_blank" rel="noopener" href="#">
                                <button class="btn btn-neutral btn-youtube btn-round ml-2">
                                    <i class="fa fa-youtube">&nbsp;</i> tipoliwangi
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
                            &copy; {{year}}
                            <a href="/" rel="noopener">HMTI - Software Developer</a> | Made with
                            <a
                                href="https://vuejs.org"
                                target="_blank"
                                rel="noopener"
                            >Vue.js</a>
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
                                >Tentang</a>
                            </li>
                            <li class="nav-item">
                                <a
                                    href="/#/artikel"
                                    class="nav-link"
                                    target="_blank"
                                    rel="noopener"
                                >Artikel</a>
                            </li>
                            <li class="nav-item">
                                <a
                                    href="https://github.com/logixode/HMTI-Website/blob/master/LICENSE"
                                    class="nav-link"
                                    target="_blank"
                                    rel="noopener"
                                >MIT License</a>
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
            year: new Date().getFullYear()
        };
    }
};
</script>
<style>
footer {
    padding-bottom: 0 !important;
    -webkit-transition: all 0.15s ease !important;
    transition: all 0.15s ease !important;
}

.footer-dark {
    background-color: #202020;
    -webkit-transition: all 0.15s ease !important;
    transition: all 0.15s ease !important;
}
.top-footer-dark {
    background-color: #272727;
    -webkit-transition: all 0.15s ease !important;
    transition: all 0.15s ease !important;
}

.gradient-bar {
    height: 5px;
    background: linear-gradient(to right, #ffef03, #ff5a00);
}

.btn {
    text-transform: none !important;
}

footer a {
    color: #bbb !important;
}

footer a:hover {
    color: #888888 !important;
}
</style>
