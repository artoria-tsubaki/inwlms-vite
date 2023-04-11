<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="wh-full app-page">
    <p class="pt-20 text-14 color-gray-400">Flex骰子</p>
    <div class="f-c-c">
      <div class="w-100 h-100 bg-blue"></div>
      <div class="w-100 h-100 bg-green"></div>
    </div>
    <p class="title">我是title</p>
  </div>
</template>

<style lang="scss" scoped>
.app-page {
  .title {
    background-color: $primary-color;
  }
}
</style>
