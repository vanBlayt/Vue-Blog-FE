<template>
  <div :class="wrapperClass">
    <div class="blog-card__header">
      <h2 :class="titleClass">{{ title }}</h2>
    </div>
    <div class="blog-card__body">
      <div :class="contentClass">{{ content }}</div>
    </div>
    <slot name="footer"></slot>
    <div class="blog-card__footer" v-if="loading">
      <div class="blog-card__author">
        <a-avatar class="blog-card__author-head" size="small" icon="user"></a-avatar>
        <div class="blog-card__author-name author-name-loading"></div>
      </div>
      <div class="blog-card__action">
        <div class="blog-card__action-loading"></div>
        <a-divider type="vertical"></a-divider>
        <div class="blog-card__action-loading"></div>
        <a-divider type="vertical"></a-divider>
        <div class="blog-card__action-loading"></div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
@import '~assets/styles/mixin';

.blog-card {
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
  &__content {
    color: #8a8a8a;
    margin-bottom: 4px;
    .ellipsis();
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__author {
    display: flex;
    align-items: center;
  }
  &__author-name {
    margin-left: 4px;
  }
  &__action {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__action-loading {
    .text-loading-block();
    width: 45px;
    height: 1em;
  }
}
.hoverable:hover {
  .shadow(0 2px 8px rgba(0, 0, 0, 0.09));
}
.title-loading {
  .text-loading-block();
  width: 45%;
}
.content-loading {
  .text-loading-block();
  width: 75%;
}
.author-name-loading {
  .text-loading-block();
  width: 100px;
  height: 1em;
}
</style>
<script>
/**
 * @file 文章卡片
 */
export default {
  name: 'BlogCard',
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
    },
    loading: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  computed: {
    wrapperClass() {
      return ['blog-card__wrapper', { hoverable: this.hoverable }]
    },
    titleClass() {
      return ['blog-card__title', { 'title-loading': this.loading }]
    },
    contentClass() {
      return ['blog-card__content', { 'content-loading': this.loading }]
    }
  }
}
</script>
