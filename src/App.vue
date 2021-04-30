<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;1,400;1,600&display=swap');

html, body, #app {
  height: 100%;
}

#app {
  font-family: 'Poppins', sans-serif;
  color: #fff;
  background: #39c2d4;
}
</style>
