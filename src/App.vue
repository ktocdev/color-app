<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  },
  methods: {
    updatePageTitle() {
      const routeTitles = {
        '/': 'Home',
      }
      
      const currentPath = this.$route.path
      const pageTitle = routeTitles[currentPath] || 'Page'
      document.title = `${pageTitle} - Color App`
    }
  },
  mounted() {
    this.updatePageTitle()
  },
  watch: {
    '$route'() {
      this.updatePageTitle()
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
