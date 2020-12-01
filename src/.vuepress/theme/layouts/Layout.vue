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
          <div v-else>
            <!-- <PostData
              class="mt-3"
              :date="$frontmatter.date"
              :timeToRead="$frontmatter.time_to_read"
              :location="$frontmatter.location"
              :tags="$frontmatter.tags.slice(0, 3)"
            /> -->
            <Content class="mt-4 mb-4" />
            <!-- <PostData
              class="mt-3"
              :date="$frontmatter.date"
              :timeToRead="$frontmatter.time_to_read"
              :location="$frontmatter.location"
              :tags="$frontmatter.tags.slice(0, 3)"
            /> -->
            <h3>Comments</h3>
            <Disqus :identifier="identifier" />
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
import PostData from "@theme/components/PostData.vue";

export default {
  components: {
    PostData,
  },
  computed: {
    pages() {
      return this.$pagination.pages;
    },
    identifier() {
      return `${this.$frontmatter.slug}.html`;
    },
  },
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>

<style></style>
