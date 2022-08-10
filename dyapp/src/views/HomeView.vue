<template>
  <div class="home">
    <HelloWorld 
    title="Welcome to Your Vue.js App"
    subTitle="Contact & Channels"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
