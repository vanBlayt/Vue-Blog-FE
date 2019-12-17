<template>
  <div class="login__wrapper">
    <div class="login__box">
      <div class="login__logo"></div>
      <div class="login__input">
        <a-input placeholder="用户名/邮箱" size="large" v-model="userName">
          <a-icon slot="prefix" theme="twoTone" type="idcard"></a-icon>
        </a-input>
        <a-input placeholder="密码" size="large" :type="inputType" v-model="password">
          <a-icon slot="prefix" theme="twoTone" type="safety-certificate"></a-icon>
          <a-icon slot="suffix" theme="twoTone" :type="visibleIcon" @click="handleVisibleChange"></a-icon>
        </a-input>
      </div>
      <div class="login__button">
        <div class="login__remember">
          <router-link class="login__forget" to="/forget">忘记密码</router-link>
          <a-checkbox class="login__checkbox" v-model="isRemember">7天内自动登录</a-checkbox>
        </div>
        <a-button class="login__login-btn" type="primary">登录</a-button>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import '~assets/styles/mixin';

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
    border-radius: 6px;
    .shadow();
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
    margin-top: 12px;
  }
  &__forget {
    float: right;
  }
  &__checkbox {
    float: left;
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
      passwordVisible: false,
      isRemember: false
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
