<template>
  <div class="the-header">
    <a-layout-header class="the-header__wrapper">
      <div class="the-header__logo"></div>
      <a-menu class="the-header__menu" mode="horizontal" v-model="selectedKeys">
        <a-menu-item v-for="item of menuItem" :key="item.key">
          <a-icon :type="item.icon"></a-icon>
          {{ item.text }}
        </a-menu-item>
      </a-menu>
    </a-layout-header>
  </div>
</template>

<style lang="less">
@import '~assets/styles/mixin';

.the-header {
  position: fixed;
  z-index: 100;
  width: 100%;
  &__wrapper {
    background: #fff;
    .shadow();
  }
  &__menu {
    line-height: 60px;
  }
  &__logo {
    float: left;
    width: 120px;
    height: 32px;
    // logo自适应并居中
    // background-image: url('../../static/img/logo1-bule.png');
    // background-position: center;
    // background-size: cover;
    margin: 16px 16px 16px 0px;
    background: #fff;
    border-radius: 12px;
  }
}
</style>

<script>
/**
 * @file 页首
 */
export default {
  name: 'TheHeader',
  data() {
    return {
      menuItem: [
        { icon: 'home', key: '/home', text: '首页' },
        { icon: 'layout', key: '/frontEnd', text: '前端' },
        { icon: 'database', key: '/backEnd', text: '后端' },
        { icon: 'line-chart', key: '/bigData', text: '大数据' },
        { icon: 'robot', key: '/artificialIntelligence', text: '人工智能' },
        { icon: 'cloud', key: '/algorithm', text: '算法/ACM' }
      ]
    }
  },
  computed: {
    // 根据路由路径选中对应菜单
    selectedKeys: {
      get() {
        let path = this.$route.path
        return [path]
      },
      set(path) {
        this.$router.push(...path)
      }
    }
  }
}
</script>
