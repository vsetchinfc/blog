<template>
  <div class="row mt-lg-4 mt-sm-4">
    <div class="col-lg-5 col-sm-12">
      <img
        :src="image"
        alt="Resource 5"
        title="Resource 5"
        class="w-100 h-100"
        loading="lazy"
      />
    </div>
    <div class="col-lg-7 col-sm-12 mt-lg-2 mt-3 mb-3">
      <div class="font-weight-bold">
        <a :href="url" target="_blank">{{ title }}</a
        ><br />
      </div>
      "{{ description }}"
      <a :href="link_url" target="_blank">{{ link_text }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
    },
    url: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    link_url: {
      type: String,
    },
    link_text: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss"></style>
