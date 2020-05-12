<template>
    <div class="card">
        <div class="card-body">
            <div class="blog-tags">
                <Tag v-for="tag in Object.keys(tags)" :key="tag" :name="tag" :tag="tags[tag]" />
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
        }
    }
}
</script>

<style scoped lang="scss">
    .card {
        background-color: #fff;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        margin-top: 10px;
        margin-bottom: 10px;
        width: 15rem;
    }
</style>