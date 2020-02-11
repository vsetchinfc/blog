<template>
  <section id="header-wrapper">
    <header id="header">
      <div class="top-header-wrapper">
        <div class="title">
          <a href="/" class="home-link">{{ $site.title }}</a>
        </div>
        <div class="header-search-box">
          Search: <SearchBox />
        </div>
      </div>
      <div class="middle-header-wrapper">

      </div>
      <div class="nav-bar-wrapper">
        <ul class="nav" v-if="$themeConfig.nav">
            <li class="nav-item" v-for="item in $themeConfig.nav">
              <a :href="item.link">{{ item.text }}</a>
            </li>
          </ul>
      </div>    
    </header>
  </section>
</template>

<script>
import SearchBox from "@SearchBox";

export default {
  components: { SearchBox }
};
</script>

<style lang="stylus">
@import '~@app/style/config';

#header {
  z-index: 20;
  position: relative;
  top: 0;
  width: 100vw;
  box-sizing: border-box;
  background: darken(#355c7d, 10%);
  margin: 0 auto;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.02), 0 6px 6px rgba(0, 0, 0, 0.03);
  transition: all 1s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 300px;
}

&:hover {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04), 0 6px 6px rgba(0, 0, 0, 0.08);
}

.title {
  color: #FFFFFF;
  font-size: 22px;
  font-weight: bold;
  margin: 0;
  letter-spacing: 2px;
  display: block;
  text-transform: uppercase;
  width: 50%;

  a {
    color: #FFFFFF;
    font-weight: bold;
    text-decoration: none;
  }
}

// border-bottom 5px solid lighten(#3eaf7c, 50%)
.top-header-wrapper {
  display: flex;
  line-height: 50px;
  height: 20%;
  width: 100%;

  .title {
    color: #ffffff;
    font-size: 22px;
    padding-left: 10px;
    margin-top: 5px;
    margin-left: 5px;
    letter-spacing: 2px;
    display: block;
    text-transform: uppercase;

    a {
      font-size: 18px;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: lighten($accentColor, 80%);
      }

      &.nav-link.router-link-exact-active.router-link-active {
        color: lighten($accentColor, 80%);
      }
    }
  }

  .search-box {
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
} 

.header-search-box {
  color: #ffffff;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  justify-content: flex-end;
  width: 50%;
  margin-top: 5px;
}

.middle-header-wrapper {
  height: 60%;
  background: lighten(#355c7d, 10%);
}

.nav-bar-wrapper {
  height: 20%;
  display: flex;

  .nav {
      flex: 0 0 auto;
      display: flex;
      margin: 0;
      align-items: center;
      list-style: none;
      padding-left: 5px;

      .nav-item {
        margin-left: 20px;

        a {
          font-size: 18px;
          font-weight: bold;
          color: #ffffff;
          text-decoration: none;
          transition: color 0.3s;

          &:hover {
            color: lighten($accentColor, 80%);
          }

          &.nav-link.router-link-exact-active.router-link-active {
            color: lighten($accentColor, 80%);
          }
        }
      }
    }
}

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
}
</style>