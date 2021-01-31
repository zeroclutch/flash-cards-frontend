<template>
  <div id="app">
    <NavBar id="nav" />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: $family-primary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: $primary-invert;
  min-height: 100vh;
}

#nav {
  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: $primary;
    }
  }
}
</style>
