<template>
  <div class="profile-page">
    <components-header></components-header>
    <section class="section section-skew mt--150">
      <div class="container">
        <card shadow class="card-profile mt--400" no-body>
          <div class="px-4 px-md-5">
            <div class="mt-1 mt-md-3 pb-5">
              <div class="text-center">
                <img
                  src="img/404.svg"
                  width="500px"
                  class="img-center img-fluid"
                />
                <h4>- Maaf halaman yang anda tuju tidak ada... -</h4>
              </div>
            </div>
          </div>
        </card>
      </div>
    </section>
  </div>
</template>

<script>
import ComponentsHeader from "./ComponentsHeader";
export default {
  components: {
    ComponentsHeader,
  },
};
</script>