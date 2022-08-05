<template>
  <nav>
    <ul class="main-nav">
      <li class="mav-list">
        Basic
        <div class="nav-depth">
          <router-link to="/varAndConst">변수와 상수</router-link>
          <router-link to="/">변수와 상수</router-link>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "mainNav",
};
</script>

<style>
nav {
  position: fixed;
  top: 50px;
  padding: 20px 10px;
  width: 200px;
  height: 100%;
  border-right: 1px solid #000;
}
.nav-depth {
  margin-left: 10px;
}
.mav-list {
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
}
nav a {
  text-decoration: none;
  font-size: 16px;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  display: block;
  color: #42b983;
}
</style>