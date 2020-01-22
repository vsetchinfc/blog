<template>
  <div>
    <header>
      <Head />
    </header>
    <div class="content-column">
      <div>Hello!</div>
    </div>
    <div class="right-column">
      <RightSidebar />
    </div>

    <footer>
      <Footer />
    </footer>
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

footer {
  position:absolute; 
  bottom:0; 
  width: 99.6%;
}

@media (max-width: $MQMobile) {
  footer {
    position:absolute; 
    bottom:0; 
    width: 98.4%;
  }
}
</style>