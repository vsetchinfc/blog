<template>
  <router-link
    class="blog-tag badge badge-info"
    :to="{ path: `/tag/${name}` }"
    v-if="tag"
    >#{{ name }}({{ tag.length }})</router-link
  >
</template>

<script>
// ({{ tag.pages.length }})
export default {
  props: ["tag", "name"],
};
</script>

<style scoped lang="scss">
.blog-tag {
  font-size: 0.88rem;
  margin-left: 10px;
}
</style>
