<template>
  <div>
    <Head />
    
    <content>
      <div class="content-column">
        <div>This is a ABout ME!</div>
      </div>
      <div class="right-column">
        <RightSidebar />
      </div>
    </content>

    <Footer />
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="stylus" scoped>
.content-column {
  float: left;
  width: 75%;
}

.right-column {
  float: left;
  width: 25%;
}
</style>