<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Head title="Blog"/>
      </div>
    </div>
    
    <div class="row">
      <div class="col-10">
        <content>
          <div class="content-column">
            <div v-for="page in this.$site.pages" :key="page.key">
              <a style="color: black;" v-bind:href="page.path">{{page.title}}</a>
            </div>
          </div>
        </content>
      </div>

      <div class="col-2">
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