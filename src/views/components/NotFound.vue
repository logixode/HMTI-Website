<template>
  <div class="profile-page">
    <components-header></components-header>
    <section class="section section-skew mt--150">
      <div class="container">
        <card shadow class="card-profile mt--400" no-body>
          <div class="px-4 px-md-5">
            <div class="mt-1 mt-md-3 py-3">
              <div class="text-center py-5">
                <h1 class="display-1">404 ERROR</h1>
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