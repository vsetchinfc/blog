<template>
  <div class="card">
    <div class="card-body">
      <img :src="$themeConfig.personalPhoto" :alt="$themeConfig.fullName" />
      <h4 class="card-title">{{ $themeConfig.fullName }}</h4>
      <h6 class="card-subtitle mb-2 text-muted">Software Engineer</h6>
      <ul class="contact card-text" v-if="contact">
        <li class="contact-item" v-for="item in contact">
          <a :href="item.link">
            <component :is="item.iconComponent"></component>
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  GithubIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  RssIcon
} from "vue-feather-icons";

export default {
  components: {
    GithubIcon,
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
    RssIcon
  },

  methods: {
    getIconComponentName(contactType) {
      switch (contactType) {
        case "github":
          return "GithubIcon";
        case "facebook":
          return "FacebookIcon";
        case "twitter":
          return "TwitterIcon";
        case "instagram":
          return "InstagramIcon";
        case "linkedin":
          return "LinkedinIcon";
        case "feed":
          return "RssIcon";
        default:
          return "";
      }
    }
  },

  computed: {
    contact() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
        []
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link
          };
        })
        .filter(({ iconComponent }) => iconComponent);
    }
  }
};
</script>

<style scoped lang="scss">
.card {
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin-top: 10px;
  text-align: center;
  width: 15rem;

  img {
    border-radius: 50%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    width: 90px;
    transform: scale(1.3);
    margin-bottom: 10px;
  }

  h4 {
    margin: 10px 0 10px 0;
  }

  a {
    color: rgba(32, 97, 150, 1);
  }

  .contact {
    display: flex;
    list-style: none;

    .contact-item {
      margin: 0 5px;
    }
  }
}
</style>