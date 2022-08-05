<template>
  <div>
    <div class="header">
      <h1>Javascript</h1>
    </div>
    <mainNav></mainNav>
    <div class="contents">
      <router-view />
    </div>
  </div>
</template>

<script>
import mainNav from "./components/mainNav.vue";

export default {
  name: "app",
  components: {
    mainNav,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
li,
ol {
  list-style: none;
}
.header {
  position: fixed;
  top: 0;
  z-index: 100;
  padding: 0 30px;
  font-size: 16px;
  line-height: 50px;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #000;
  background-color: #fff;
  text-align: left;
}

.contents {
  position: absolute;
  top: 50px;
  left: 200px;
  padding: 20px 30px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
