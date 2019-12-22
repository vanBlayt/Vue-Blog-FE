<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <a-back-top></a-back-top>
  </div>
</template>

<style lang="less">
</style>

<script>
/**
 * @file App入口
 */
export default {
  name: 'App'
}
</script>
