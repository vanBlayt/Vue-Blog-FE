<template>
  <div class="the-header">
    <a-layout-header class="the-header__wrapper">
      <div class="the-header__logo" />
      <a-menu class="the-header__menu" mode="horizontal" :defaultSelectedKeys="defaultSelectedKeys">
        <a-menu-item v-for="item of menuItem" :key="item.key">
          <router-link :to="item.key">
            <a-icon :type="item.icon" />
            {{ item.text }}
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
  </div>
</template>

<style lang="less">
.the-header {
  position: fixed;
  width: 100%;
  &__wrapper {
    background: #fff;
    box-shadow: 0 1px 6px #dcdcdc;
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
      defaultSelectedKeys: ['home'],
      menuItem: [
        {
          icon: 'home',
          key: 'home',
          text: '首页'
        },
        {
          icon: 'layout',
          key: 'frontEnd',
          text: '前端'
        },
        {
          icon: 'database',
          key: 'backEnd',
          text: '后端'
        },
        {
          icon: 'line-chart',
          key: 'bigData',
          text: '大数据'
        },
        {
          icon: 'robot',
          key: 'artificialIntelligence',
          text: '人工智能'
        },
        {
          icon: 'cloud',
          key: 'algorithm',
          text: '算法/ACM'
        }
      ]
    }
  }
}
</script>
