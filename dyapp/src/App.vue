<template>
  <div class="main">
    <div class="header">
      <div class="title">
        <router-link to="/">Dayeon</router-link>
      </div>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/Career">Career</router-link> |
        <router-link to="/project">Projects</router-link> |
        <router-link to="/stacks">Stacks</router-link> |
        <router-link to="/educationLang">Education & Language</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  height: 50px;
  text-align: left;
  border-bottom: 1px solid #000;
}
.title {
  font-size: 24px;
  font-weight: bold;
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
