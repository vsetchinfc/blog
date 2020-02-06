<template>
  <section id="header-wrapper">
    <header id="header">
      <div class="top-header-wrapper">
        <div class="title">
          <a href="/" class="home-link">{{ $site.title }}</a>
        </div>
        <div class="header-right-wrap">
          Search: <SearchBox />
        </div>
      </div>
      <div class="middle-header-wrapper">
        Middle Section
      </div>
      <div class="nav-bar-wrapper">
        Nav Bar
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
  height: 200px;
}

ol, ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

&:hover {
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04), 0 6px 6px rgba(0, 0, 0, 0.08);
}

ol, ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.title {
  /* flex 0 0 200px */
  color: #FFFFFF;
  font-size: 22px;
  margin: 0;
  letter-spacing: 2px;
  display: block;
  text-transform: uppercase;

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
  margin-bottom: 10px;

  .title {
    /* flex 0 0 200px */
    color: #FFFFFF;
    font-size: 22px;
    padding-left: 10px;
    margin: 0;
    letter-spacing: 2px;
    display: block;
    text-transform: uppercase;

    a {
      font-size: 18px;
      color: lighten($accentColor, 40%);
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

.middle-header-wrapper {
  height: 60%;
  background: lighten(#355c7d, 10%)
}

.nav-bar-wrapper {
  height: 20%;
}

@media (max-width: $MQMobile) {
  #header {
    display: none;
  }

  .header-wrapper {
    flex-direction: column;

    .header-right-wrap {
      display: none;
    }
  }
}
</style>