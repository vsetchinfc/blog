<template>
  <ul class="list-group list-group-horizontal">
    <li class="list-group-item border-0">
      <CalendarIcon />
      {{ date }}
    </li>
    <li class="list-group-item border-0" v-if="timeToRead">
      <ClockIcon />
      {{ timeToRead }} min read
    </li>
    <li class="list-group-item border-0" v-if="location">
      <NavigationIcon />
      {{ location }}
    </li>
    <li class="list-group-item border-0" v-if="tags">
      <div>
        <router-link
          class="badge badge-info"
          v-for="(tag, index) in tags"
          :key="index"
          :to="'/tag/' + tag"
          >#{{ tag }}</router-link
        >
      </div>
    </li>
  </ul>
</template>

<script>
import { NavigationIcon, ClockIcon, CalendarIcon } from "vue-feather-icons";

export default {
  components: { NavigationIcon, ClockIcon, CalendarIcon },
  props: ["date", "timeToRead", "location", "tags"],
};
</script>

<style scoped lang="scss">
.list-group {
  .list-group-item {
    font-size: 0.77em;

    a {
      margin-left: 5px;

      &:hover {
        color: grey;
      }
    }
  }
}
</style>
