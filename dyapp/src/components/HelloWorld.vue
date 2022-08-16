<template>
  <div class="contentBox">
    <div class="title">{{ title }}</div>
    <div class="sub-title">{{ subTitle }}</div>
    <div class="text-box"></div>
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
.contentBox{
  margin: 0 auto;
  padding: 30px 20px;
  max-width: 600px;
  text-align: left;
}
.title{
  font-size: 22px;
  font-weight: bold;
  color: #42b983;
}
.sub-title{
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  color: #2c3e50;
}
.text-box{
  margin-top: 10px;
  border-top: 1px solid rgba(0,0,0,0.2);
}
</style>
