<template>
  <div class="contentBox">
    <div class="title">{{ title }}</div>
    <div class="sub-title">{{ subTitle }}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    // msg: String,
    title: String,
    subTitle: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
.contentBox{
  padding: 30px 20px;
}
.title{
  font-size: 22px;
  font-weight: bold;
  color: #42b983;
}
.sub-title{
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
}
</style>
