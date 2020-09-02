<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Head title="BLOG" />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-9 col-sm-12">
        <content>
          <div v-for="page in pages" :key="page.key">
            <BlogPostCard :page="page" />
          </div>
        </content>
      </div>

      <div class="col-lg-3 d-none d-lg-block">
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
  computed: {
    pages() {
      return this.$pagination.pages;
    },
  },
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>

<style scoped lang="scss"></style>
