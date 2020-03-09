<template>
  <div class="layout">
    <Head title="Blog"/>
    
    <contents>
      <div class="content-column">
        <div v-for="page in this.$site.pages" :key="page.key">
          <a style="color: black;" v-bind:href="page.path">{{page.title}}</a>
        </div>
      </div>
    </contents>

    <RightSidebar />

    <Footer />
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style>
.layout {
  display: grid;
  grid-template-areas: 
    "header header"
    "contents aside"
    "footer footer";
  grid-template-rows: 280px 1fr 50px;
  grid-template-columns: 1fr 18%;
  grid-gap: 5px;
  margin: 10px; 
}

contents {
  grid-area: contents;
}
</style>