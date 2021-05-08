<template>
  <div id="app">
    <div class="d-flex justify-content-center align-items-center text-muted my-4">
      <label id="switch" class="switch">
        <input type="checkbox" v-model="darkModeSelected" @change="toggleDarkMode()" id="slider">
        <span class="slider round"></span>
      </label>
    </div>
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
      darkMode: false,
      darkModeSelected: this.darkMode
    }
  },
  created() {
    // check cookies for theme options
    switch(this.getCookie("theme")) {
      case "dark":
        this.darkMode = true;
        break;
      case "light":
        this.darkMode = false;
        break;
      default:
        this.darkMode = false;
    }
    this.darkModeSelected = this.darkMode;
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

      // change background and set cookies on darkMode toggle
      if(this.darkMode) {
        document.cookie = "theme=dark";
        document.body.className = "dark"
      }
      else {
        document.cookie = "theme=light";
        document.body.classList.remove("dark");
      }
    },
    getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
  }
}
</script>

<style>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 58px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0adf3f;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 28px;
  width: 28px;
  left: 3px;
  bottom: 3px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  background: white url('https://i.ibb.co/7JfqXxB/sunny.png');
  background-repeat: no-repeat;
  background-position: center;
}

input:checked + .slider:before {
  -webkit-transform: translateX(24px);
  -ms-transform: translateX(24px);
  transform: translateX(24px);
  background: #414141 url('https://i.ibb.co/FxzBYR9/night.png');
  background-repeat: no-repeat;
  background-position: center;
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
