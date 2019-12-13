<template>
  <div id="app">
    <the-header></the-header>
    <router-view />
  </div>
</template>

<script>
/**
 * @file Blog入口
 */
import TheHeader from './common/TheHeader'

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style lang="less" scoped>
#app {
  margin: 16px;
}
</style>
