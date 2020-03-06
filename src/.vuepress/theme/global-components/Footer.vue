<template>
  <footer>
    <div class="footer-left-wrap">
      <ul class="contact" v-if="contact">
        <li class="contact-item" v-for="item in contact">
          <a :href="item.link">
            <component :is="item.iconComponent"></component>
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>

    <div class="footer-right-wrap">
      <ul class="copyright" v-if="copyright">
        <li class="copyright-item" v-for="item in copyright">
          <a :href="item.link">{{ item.text }}</a>
        </li>
      </ul>
    </div>
  </footer>
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
    },

    copyright() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      );
    }
  }
};
</script>

<style>
footer {
  grid-area: footer;
  display: flex;
  background: rgba( 32, 97,150,1);
  padding: 15px 32px;
  box-sizing: border-box;
} 

ol, ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-left-wrap {
  line-height: 30px;
  flex: 1;
  display: flex;
}

.contact {
  display: flex;
}

.contact-item {
  flex: 1;
  margin-right: 10px; 
}

a {
  font-size: 12px;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s;
}

а:hover {
  color: grey;
}

.footer-right-wrap {
  flex: 1;
  display: flex-end;
  
}

.copyright {
    display: flex;
    justify-content: flex-end;
}

.copyright-item {
  flex: 0 0 auto;
  padding: 0 10px;
  position: relative;
  line-height: 16px;
  border-right: 1px solid rgba(255, 255, 255, 0.6);
}

.copyright-item a {
  font-size: 16px;
}

.copyright-item:last-child {
  border-right: none;
}
</style>