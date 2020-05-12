<template>
    <router-link class="blog-tag" :to="{ path: `/tag/${name}`}">#{{ name }}({{ tag.length }})</router-link>
</template>

<script>
// ({{ tag.pages.length }})
export default {
    props: ["tag", "name"]
};
</script>

<style scoped lang="scss">
    .blog-tag {
        margin-left: 10px;
    }
</style>