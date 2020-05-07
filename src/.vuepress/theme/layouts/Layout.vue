<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Head v-bind:title="$frontmatter.title" />
      </div>
    </div>

    <div class="row">
      <div class="col-9">
        <content>
          <Content />
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