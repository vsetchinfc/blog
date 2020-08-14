<template>
  <div class="card">
    <div class="card-body">
      <div v-for="tag in Object.keys(tags)" :key="tag">
        <Tag :name="tag" :tag="tags[tag]" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tags() {
      let tags = [];

      for (let page of this.$site.pages) {
        for (let index in page.frontmatter.tags) {
          const tag = page.frontmatter.tags[index];

          if (tag in tags) {
            tags[tag].push(page);
          } else {
            tags[tag] = [page];
          }
        }
      }

      return tags;
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  background-color: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
