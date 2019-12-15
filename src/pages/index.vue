<template>
  <div id="index">
    <the-header></the-header>
    <router-view class="main"></router-view>
  </div>
</template>

<style lang="less">
.main {
  height: 90vh;
  padding: 64px 50px 0;
  background: #f6f6f6;
}
</style>

<script>
/**
 * @file Blog入口
 */
import TheHeader from '../common/TheHeader'

export default {
  name: 'Index',
  components: {
    TheHeader
  }
}
</script>
