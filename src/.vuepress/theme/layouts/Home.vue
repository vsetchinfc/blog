<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Head title="HOME" />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-9 col-sm-12">
        <content>
          <div class="row">
            <div class="col">
              <p class="h2 mt-4 mb-3">
                New and pinned posts. <a href="/blog">View All</a>
              </p>
              <div class="ui-post" v-for="page in pages" :key="page.key">
                <BlogPostCard :page="page" />
              </div>
            </div>
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
  components: {},
  computed: {
    pages() {
      return this.$site.pages
        .filter((page) => page.frontmatter.tags)
        .filter(
          (page) =>
            page.frontmatter.tags.includes("new") ||
            page.frontmatter.tags.includes("updated")
        );
    },
  },
};
</script>

<style></style>
