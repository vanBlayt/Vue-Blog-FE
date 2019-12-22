<template>
  <div class="front-end">
    <div class="front-end__wrapper">
      <div class="front-end__sider" ref="sider">
        <a-menu class="front-end__menu" v-model="selectedKeys">
          <a-menu-item v-for="item of menuItem" :key="item.key">
            <a-icon :type="item.icon"></a-icon>
            {{ item.text }}
          </a-menu-item>
        </a-menu>
      </div>
      <div class="front-end__center-content">
        <blog-card
          hoverable
          v-for="item of blogList"
          :title="item.title"
          :content="item.content"
          :key="item.id"
        >
          <div class="front-end__card-footer" slot="footer">
            <div class="front-end__author">
              <a-avatar class="front-end__author-head" size="small" icon="user"></a-avatar>
              <div class="front-end__author-name">Jack_WJQ</div>
            </div>
            <div class="front-end__action">
              <div class="front-end__favor">
                <a-icon type="like"></a-icon>
                <span>{{ item.favor }}</span>
              </div>
              <a-divider type="vertical"></a-divider>
              <div class="front-end__view">
                <a-icon type="eye"></a-icon>
                <span>{{ item.view }}</span>
              </div>
              <a-divider type="vertical" v-if="item.message"></a-divider>
              <div class="front-end__message" v-if="item.message">
                <a-icon type="message"></a-icon>
                <span>{{ item.message }}</span>
              </div>
            </div>
          </div>
        </blog-card>
        <blog-card :loading="loading" v-if="loading"></blog-card>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import '~assets/styles/mixin';

.front-end {
  &__wrapper {
    display: flex;
    position: relative;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__sider {
    width: 15vw;
    z-index: 99;
    padding: 12px 0;
    background: #fff;
    .shadow();
  }
  &__center-content {
    width: 75vw;
    background: #fff;
    .shadow();
  }
  &__card-footer {
    display: flex;
    line-height: 24px;
    justify-content: space-between;
    align-items: center;
  }
  &__author {
    display: flex;
    align-items: center;
  }
  &__author-head:hover {
    cursor: pointer;
  }
  &__author-name {
    margin-left: 4px;
  }
  &__author-name:hover {
    .hover();
  }
  &__action {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  &__favor:hover {
    .hover();
  }
  &__view:hover {
    .hover();
  }
  &__message:hover {
    .hover();
  }
}
</style>

<script>
/**
 * @file 前端
 */
import BlogCard from 'common/BlogCard'
import axios from 'axios'
import api from 'assets/js/api.config.js'

export default {
  name: 'FrontEnd',
  components: {
    BlogCard
  },
  data() {
    return {
      selectedKeys: ['all'],
      menuItem: [
        { icon: 'appstore', key: 'all', text: '全部' },
        { icon: 'html5', key: 'html/css', text: 'HTML/CSS' },
        { icon: 'code', key: 'javascript', text: 'Javascript' },
        { icon: 'layout', key: 'framework', text: 'React/Vue/Angular' },
        { icon: 'code-sandbox', key: 'other', text: '其他' }
      ],
      blogList: [],
      loading: true,
      timer: null
    }
  },
  methods: {
    // 处理窗口滚动
    handleScroll() {
      // 节流
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const scrollHeight = document.documentElement.scrollHeight
        const scrollTop = document.documentElement.scrollTop
        const clientHeight = document.documentElement.clientHeight
        // 滚动到底部自动加载
        if (scrollTop + clientHeight - scrollHeight < 48) {
          this.loading = true
        }
      }, 20)
    },

    // 获取博客列表
    getBlogList() {
      this.loading = true
      axios
        .get(`${api}/frontEnd.json`)
        .then(res => {
          const data = res.data
          if (data.success) {
            this.blogList = data.data.list
          }
        })
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.loading = false
        })
    }
  },
  mounted() {
    this.getBlogList()
    // 注册滚动时间监听
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    // 移除滚动事件监听
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
