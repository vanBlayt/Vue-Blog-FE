<template>
  <div id="index">
    <the-header></the-header>
    <the-content>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </the-content>
    <the-footer></the-footer>
  </div>
</template>

<style lang="less">
#index {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background: #f0f2f5;
}
</style>

<script>
/**
 * @file Blog入口
 */
import TheHeader from '../common/TheHeader'
import TheContent from '../common/TheContent'
import TheFooter from '../common/TheFooter'

export default {
  name: 'Index',
  components: {
    TheHeader,
    TheContent,
    TheFooter
  }
}
</script>
