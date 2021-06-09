<template>
  <div class="row mt-lg-4 mt-sm-4">
    <div class="col-lg-5 col-sm-12">
      <img
        :src="image"
        alt="Resource 5"
        title="Resource 5"
        class="w-100 h-100"
      />
    </div>
    <div class="col-lg-7 col-sm-12 mt-lg-2 mt-sm-2">
      <div class="font-weight-bold">
        <a :href="url" target="_blank">{{ title }}</a
        ><br />
      </div>
      "{{ description }}"
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
  },
};
</script>

<style scoped lang="scss"></style>
