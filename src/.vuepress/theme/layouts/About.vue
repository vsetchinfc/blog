<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Head title="ABOUT ME" />
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <content>
          <div class="card-deck">
            <div class="card">
              <div class="card-header font-weight-bold">
                Front End
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Angular</li>
                  <li class="list-group-item">Vue JS</li>
                  <li class="list-group-item">NgRx</li>
                  <li class="list-group-item">Bootstrap</li>
                </ul>
              </div>
            </div>
            <IDCard />
            <div class="card">
              <div class="card-header font-weight-bold">
                Back End
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Asp.Net WebApi</li>
                  <li class="list-group-item">Asp.Net WebApi Core</li>
                  <li class="list-group-item">CQRS Pattern</li>
                  <li class="list-group-item">Dupper</li>
                  <li class="list-group-item">Entity Framework</li>
                  <li class="list-group-item">Entity Framework Core</li>
                </ul>
              </div>
            </div>
          </div>
        </content>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <Footer />
      </div>
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
  RssIcon,
} from "vue-feather-icons";

export default {
  components: {
    GithubIcon,
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
    RssIcon,
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
    },
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
            link,
          };
        })
        .filter(({ iconComponent }) => iconComponent);
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  background-color: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
  text-align: center;
  width: 100%;

  img {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    width: 10rem;
    transform: scale(1.3);
    margin-top: 30px;
    margin-bottom: 50px;
  }

  h4 {
    margin: 10px 0 10px 0;
  }

  a {
    color: rgba(32, 97, 150, 1);
  }

  .contact {
    padding-left: 0px;
    display: flex;
    justify-content: center;
    list-style: none;

    .contact-item {
      margin: 0 5px;
    }
  }
}

footer {
  margin-top: 10px;
}
</style>
