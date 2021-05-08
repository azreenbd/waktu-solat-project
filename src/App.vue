<template>
  <div id="app">
    <b-button @click="toggleDarkMode()" variant="light" size="sm">Dark Mode</b-button>
    <div class="d-flex justify-content-center align-items-center" style="min-height: calc(100% - 4em)">
      <router-view :dark-mode="darkMode"></router-view>
    </div>
    <footer class="d-flex justify-content-center align-items-center text-muted my-4">
      <b-icon icon="github" title="GitHub" class="mr-1"></b-icon>
      <a href="https://github.com/azreenbd" title="GitHub" target="_blank" class="text-muted">azreenbd</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      darkMode: false
    }
  },
  mounted() {
    if(this.darkMode) {
      document.body.className = "dark";
    }
  },
  methods: {
    toggleDarkMode() {
      // toggle darkMode
      this.darkMode = !this.darkMode;

      // change background on darkMode toggle
      this.darkMode ? document.body.className = "dark" : document.body.classList.remove("dark");
    }
  }
}
</script>

<style>

</style>
