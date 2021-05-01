<template>
  <div id="app">
    <div class="d-flex justify-content-center">
      <router-view></router-view>
    </div>
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
}

#app {
  font-family: 'Nunito', sans-serif;
  color: #fff;
  background: #39c2d4;
}
</style>
