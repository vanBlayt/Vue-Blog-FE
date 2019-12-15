<template>
  <div class="login__wrapper">
    <div class="login__box">
      <div class="login__logo"></div>
      <div class="login__input">
        <a-input placeholder="请输入账号" size="large" v-model="userName">
          <a-icon slot="prefix" theme="twoTone" type="idcard"></a-icon>
        </a-input>
        <a-input placeholder="请输入密码" size="large" :type="inputType" v-model="password">
          <a-icon slot="prefix" theme="twoTone" type="safety-certificate"></a-icon>
          <a-icon slot="suffix" theme="twoTone" :type="visibleIcon" @click="handleVisibleChange"></a-icon>
        </a-input>
      </div>
      <div class="login__button">
        <div class="login__remember"></div>
        <a-button class="login__login-btn" type="primary">登录</a-button>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.login {
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
    box-shadow: 0 1px 6px #dcdcdc;
    border-radius: 6px;
  }
  &__logo {
    height: 100px;
  }
  &__input {
    display: flex;
    height: 100px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  &__button {
    height: 100px;
  }
  &__remember {
    height: 24px;
  }
  &__login-btn {
    display: block;
    width: 100%;
    margin-top: 12px;
  }
}
</style>

<script>
/**
 * @file 登录/注册
 */
export default {
  name: 'Login',
  data() {
    return {
      userName: '',
      password: '',
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
