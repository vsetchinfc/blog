<template>
  <div class="layout">
    <Head title="HOME"/>
    
    <contents>
      <div class="content-column">
        <div>Hello!</div>
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