<template>
  <div class="list-content">
    <ul class="list">
        <li v-bind:class="{ noneList : noneList }"><a href="{{ listLink }}">{{ listItem }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'MainList',
    data: {
        noneList : true,
    }

}
</script>

<style>

</style>