<template>
  <div class="card">
    <h4 class="card-header">
      <a v-bind:href="page.path">{{ page.title }}</a>
    </h4>
    <div class="card-body">
      <h6 class="card-subtitle m-3 text-muted">
        {{ page.frontmatter.description }}
      </h6>
    </div>
    <div class="card-footer">
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
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  margin-bottom: 10px;

  .card-header {
    background-color: #fff;
    //border-bottom: none;
  }

  .card-footer {
    //border-top: none;
    background-color: #fff;
  }
}
</style>
