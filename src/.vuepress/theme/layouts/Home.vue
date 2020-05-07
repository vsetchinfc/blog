<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Head title="HOME" />
      </div>
    </div>

    <div class="row">
      <div class="col-9">
        <content>
          <div>Hello!</div>
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