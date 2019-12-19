<template>
  <div class="page-frame">
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
.page-frame {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background: #f0f2f5;
}
</style>

<script>
/**
 * @file 页面框架
 */
import TheHeader from 'components/header/TheHeader'
import TheContent from 'components/content/TheContent'
import TheFooter from 'components/footer/TheFooter'

export default {
  name: 'PageFrame',
  components: {
    TheHeader,
    TheContent,
    TheFooter
  }
}
</script>
