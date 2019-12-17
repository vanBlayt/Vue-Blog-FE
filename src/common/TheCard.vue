<template>
  <div :class="wrapperClass">
    <div class="the-card__header">
      <h2 class="the-card__title">{{ title }}</h2>
    </div>
    <div class="the-card__content">
      <div class="the-card__content-text">{{ content }}</div>
    </div>
    <div class="the-card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<style lang="less">
@import '~assets/styles/mixin';

.the-card {
  &__wrapper {
    height: 120px;
    padding: 16px;
    border-bottom: 1px solid #e8e8e8;
  }
  &__title {
    margin-bottom: 4px;
  }
  &__title:hover {
    .hover();
  }
  &__content-text {
    color: #8a8a8a;
    margin-bottom: 4px;
    .ellipsis();
  }
}
.hoverable:hover {
  .shadow(0 2px 8px rgba(0, 0, 0, 0.09));
}
</style>
<script>
/**
 * @file 文章卡片
 */
export default {
  name: 'TheCard',
  props: {
    hoverable: {
      type: Boolean,
      default() {
        return false
      }
    },
    title: {
      type: String
    },
    content: {
      type: String
    }
  },
  computed: {
    wrapperClass() {
      return ['the-card__wrapper', { hoverable: this.hoverable }]
    }
  }
}
</script>
