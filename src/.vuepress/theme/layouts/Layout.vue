<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Head v-bind:title="$frontmatter.title" />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-9 col-sm-12">
        <content>
          <div v-if="$pagination">
            <div class="ui-post" v-for="page in pages" :key="page.key">
              <BlogPostCard :page="page" />
            </div>
          </div>

          <Content class="mt-4 mb-4" v-else />
          <Vssue :title="$title" />
        </content>
      </div>

      <div class="col-lg-3 d-lg-block d-sm-none d-md-none">
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

<style>
</style>