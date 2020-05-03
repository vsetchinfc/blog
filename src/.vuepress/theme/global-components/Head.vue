<template>
  <header>
    <nav class="navbar navbar-dark bg-dark">
      <a href="#"><span class="navbar-brand mb-0 h1">{{ $site.title }}</span></a>
      <form class="form-inline">
        Search: <SearchBox />
      </form>
    </nav>

    <div class="middle-header-wrapper">
      {{ title }}
      <button class="btn btn-primary">Click Me</button>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menuData" aria-controls="menuData" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="menuData">
        <ul class="navbar-nav mr-auto" v-if="$themeConfig.nav">
          <li class="nav-item active" v-for="item in $themeConfig.nav">
            <a class="nav-link" :href="item.link">{{ item.text }}</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import SearchBox from "@SearchBox";

export default {
  components: { SearchBox },
  props: ["title"]
};
</script>

<style>
/* background: rgba(178,211,239,1);
  background: rgba( 89,146,194,1);
  background: rgba(128,177,218,1);
  background: rgba( 58,117,167,1); */


.bg-dark {
  background-color: rgba( 32, 97,150,1) !important;
}

.form-inline {
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
}

input {
  margin-left: 10px;
}

.nav-item a {
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-item a:hover {
  color: rgba(128,177,218,1);
}

/* @import '~@app/style/config';

&:hover {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04), 0 6px 6px rgba(0, 0, 0, 0.08);
}

// border-bottom 5px solid lighten(#3eaf7c, 50%)

  /* .search-box {
    margin-left: 20px;

    input {
      min-width: 100px;
      border-radius: 20px;
      transition: all 0.5s;
      color: $accentColor;

      &:hover {
        border: 1px solid $accentColor;
        box-shadow: 0 0 5px $accentColor;
      }
    }

    .suggestions {
      top: 40px;
      right: 0;
      font-size: 0.9em;
      opacity: 0.9;
      border: none;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);

      a {
        color: #555;
        font-weight: 400;
        text-decoration: none;

        &.focused {
          color: $accentColor;
        }
      }
    }
  }
} */

/*
@media (max-width: $MQMobile) {
  #header {
    display: none;
  }

  .header-wrapper {
    flex-direction: column;

    .header-search-box {
      display: none;
    }
  }
} */
</style>