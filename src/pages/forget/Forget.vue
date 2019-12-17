<template>
  <div class="forget__wrapper">
    <div class="forget__box">
      <div class="forget__logo"></div>
      <div class="forget__input">
        <a-input placeholder="用户名/邮箱" size="large" v-model="userName">
          <a-icon slot="prefix" theme="twoTone" type="idcard"></a-icon>
        </a-input>
        <a-input placeholder="密码" size="large" :type="inputType" v-model="password">
          <a-icon slot="prefix" theme="twoTone" type="safety-certificate"></a-icon>
        </a-input>
        <a-input placeholder="确认密码" size="large" :type="inputType" v-model="passwordConfirm">
          <a-icon slot="prefix" theme="twoTone" type="safety-certificate"></a-icon>
          <a-icon slot="suffix" theme="twoTone" :type="visibleIcon" @click="handleVisibleChange"></a-icon>
        </a-input>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import '~assets/styles/mixin';

.forget {
  &__wrapper {
    display: flex;
    width: 100vw;
    height: 100vh;
    // 水平居中
    justify-content: center;
    // 垂直居中
    align-items: center;
    background: #f6f6f6;
  }
  &__box {
    width: 400px;
    height: 400px;
    padding: 50px;
    text-align: center;
    background: #fff;
    border-radius: 6px;
    .shadow();
  }
  &__logo {
    height: 100px;
  }
  &__input {
    display: flex;
    height: 150px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
}
</style>

<script>
/**
 * @file 忘记密码
 */
export default {
  name: 'Forget',
  data() {
    return {
      userName: '',
      password: '',
      passwordConfirm: '',
      passwordVisible: false
    }
  },
  computed: {
    inputType() {
      return this.passwordVisible ? 'text' : 'password'
    },
    visibleIcon() {
      return this.passwordVisible ? 'eye' : 'eye-invisible'
    }
  },
  methods: {
    // 密码是否可见
    handleVisibleChange() {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>
