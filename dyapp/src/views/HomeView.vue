<template>
  <div class="home">
    <HelloWorld 
    title="강다연 | 실시간 성장중인 개발자"
    subTitle="📌 Contact & Channels"
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
