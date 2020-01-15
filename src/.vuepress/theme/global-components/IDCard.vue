<template>
  <div>
    <div class="card">
      <img :src="$themeConfig.personalPhoto" :alt="$themeConfig.fullName">
      <h4>{{ $themeConfig.fullName }}</h4>
      <small>Software Engineer</small>
      <ul class="contact" v-if="contact">
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
  LinkedinIcon
} from "vue-feather-icons";

export default {
  components: {
    GithubIcon,
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon
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
    },

    copyright() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      );
    }
  }
};
</script>

<style scoped lang="stylus">

.card {
	background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
	border-radius: 3px;
	padding: 30px;
	margin: 10px;
	text-align: center;
	width: 150px;
	max-width: 100%;
}

.card img {
	border-radius: 50%;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
	width: 75px;
  transform: scale(1.3);
  margin: 10px 10px 10px 10px;
}

.card h4 {
	margin: 10px 0 10px 0;
}

.card small {
	color: #777;
	display: block;
}

.contact {
    display: flex;
    list-style: none;

    .contact-item {
      margin: 0 5px;
    }
  }
</style>