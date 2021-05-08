<template>
  <div id="app">
    <div class="d-flex justify-content-center align-items-center" style="min-height: calc(100% - 4em)">
      <router-view></router-view>
    </div>
    <footer class="d-flex justify-content-center align-items-center text-muted my-4">
      <b-icon icon="github" title="GitHub" class="mr-1"></b-icon>
      <a href="https://github.com/azreenbd" title="GitHub" target="_blank" class="text-muted">azreenbd</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap');

html, body, #app {
  height: 100%;
  font-family: 'Nunito', sans-serif;
  color: rgb(85, 85, 85);
  background: #f2fafc;
}
</style>
