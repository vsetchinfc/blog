<template>
  <div class="card">
    <div class="card-body">
      <h4>
        <a v-bind:href="page.path">{{ page.title }}</a>
      </h4>
      <h6 class="card-subtitle m-3 text-muted">
        {{ page.frontmatter.description }}
        <a class="badge badge-pill badge-light" v-bind:href="page.path"
          >Continue reading...</a
        >
      </h6>
      <PostData
        :date="page.frontmatter.date"
        :timeToRead="page.frontmatter.time_to_read"
        :location="page.frontmatter.location"
        :tags="page.frontmatter.tags.slice(0, 3)"
      />
    </div>
  </div>
</template>

<script>
import PostData from "@theme/components/PostData.vue";

export default {
  components: {
    PostData,
  },
  props: ["page"],
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  border-top: none;
  border-right: none;
  border-left: none;
}
</style>
