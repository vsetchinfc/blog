<template>
  <div class="card">
    <div class="card-body">
      <div class="container">
        <div class="row">
          <div class="col-lg-9">
            <h4>
              <a v-bind:href="page.path">{{ page.title }}</a>
            </h4>
            <PostData
              :date="page.frontmatter.date"
              :timeToRead="page.frontmatter.time_to_read"
              :location="page.frontmatter.location"
              :tags="page.frontmatter.tags.slice(0, 3)"
            />
            <h6 class="card-subtitle m-3 text-muted pt-3 pb-3">
              {{ page.frontmatter.description }}
              <a class="badge badge-pill badge-light" v-bind:href="page.path"
                >Continue reading...</a
              >
            </h6>
          </div>
          <div class="col-lg-3">
            <img v-if="page.frontmatter.image" v-bind:src="page.frontmatter.image" alt="Blog Image" style="width: 100%"></img>
          </div>
        </div>
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
