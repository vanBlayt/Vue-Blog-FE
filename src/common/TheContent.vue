<template>
  <div class="the-content">
    <a-layout-content class="the-content__wrapper">
      <slot></slot>
    </a-layout-content>
  </div>
</template>

<style lang="less">
.the-content {
  &__wrapper {
    padding: 88px 50px 24px;
  }
}
</style>
<script>
/**
 * @file 主体
 */
export default {
  name: 'TheContent'
}
</script>
