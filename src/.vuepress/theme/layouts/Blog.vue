<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Head title="BLOG" />
      </div>
    </div>

    <div class="row">
      <div class="col-9">
        <content>
          <div class="content-column">
            <div v-for="page in this.$site.pages" :key="page.key">
              <a style="color: black;" v-bind:href="page.path">{{page.title}}</a> {{page.frontmatter.description}}
            </div>
          </div>
        </content>
      </div>

      <div class="col-3">
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
export default {
  components: {}
};
</script>

<style>
</style>