<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title">
        <a v-bind:href="page.path">{{page.title}}</a>
      </h4>
      <h6 class="card-subtitle mb-2 text-muted">{{page.frontmatter.description}}</h6>
      <PostData
        :date="page.frontmatter.date"
        :timeToRead="page.frontmatter.time_to_read"
        :location="page.frontmatter.location"
        :tags="page.frontmatter.tags.slice(0,3)"
      />
    </div>
  </div>
</template>

<script>
import PostData from "@theme/components/PostData.vue";

export default {
  components: {
    PostData
  },
  props: ["page"]
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>