<template>
  <div class="post-data">
    <div class="badge badge-pill badge-primary">
      <CalendarIcon /> {{ date }}
    </div>
    <div class="badge badge-pill badge-primary" v-if="timeToRead">
      <ClockIcon /> {{ timeToRead }} min read
    </div>
    <div class="badge badge-pill badge-primary" v-if="location">
      <NavigationIcon /> {{ location }}
    </div>
    <div v-if="tags" class="display-flex">
      <router-link
        class="badge badge-pill badge-primary"
        v-for="(tag, index) in tags"
        :key="index"
        :to="'/tag/' + tag"
        >#{{ tag }}</router-link
      >
    </div>
  </div>
</template>

<script>
import { NavigationIcon, ClockIcon, CalendarIcon } from "vue-feather-icons";

export default {
  components: { NavigationIcon, ClockIcon, CalendarIcon },
  props: ["date", "timeToRead", "location", "tags"],
};
</script>

<style scoped lang="scss">
.post-data {
  display: flex;
  flex-wrap: wrap;

  div {
    margin-right: 5px;

    a {
      margin-left: 5px;

      &:hover {
        color: grey;
      }
    }
  }

  .badge-primary {
    background-color: rgba(32, 97, 150, 1);
  }
}
</style>
