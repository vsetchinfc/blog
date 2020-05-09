<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Head title="BLOG" />
      </div>
    </div>

    <div class="row">
      <div class="col-9">
        <content>
          <div v-for="page in pages" :key="page.key">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">
                  <a v-bind:href="page.path">{{page.title}}</a>
                </h4>
                <h6 class="card-subtitle mb-2 text-muted">{{page.frontmatter.description}}</h6>
              </div>
            </div>
          </div>
        </content>
      </div>

      <div class="col-3">
        <RightSidebar />
      </div>
    </div>

    <div class="row">
      <div class="col">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  computed: {
    pages() {
      return this.$pagination.pages;
    }
  }
};
</script>

<style scoped lang="scss">
.card {
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>