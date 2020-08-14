<template>
  <router-link
    class="blog-tag badge badge-pill badge-primary"
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
  background-color: rgba(32, 97, 150, 1);
}
</style>
