<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
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
