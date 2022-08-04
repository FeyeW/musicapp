<template>
  <div class="content">
    <div class="content-head">
      <i class="iconfont icon-xitongfanhui" @click="this.$router.back()"></i>
      <p>手机号登陆</p>
    </div>
    <div class="content-center">
      <p>登陆体验更多精彩</p>
      <p style="font-size: 1rem; color: #666666; margin: 0.5rem 0">
        未注册手机号登陆后将自动创建账号
      </p>
      <div class="center-input">
        <div class="input-left">+86</div>
        <div class="input-center"><i class="iconfont icon-xiangxia"></i></div>
        <input type="text" class="input-right" placeholder="请输入手机号" />
      </div>
    </div>
    <div class="content-bottom">
      <button @click="handleLogin">下一步</button>
    </div>
    <div class="content-tip"></div>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    function handleLogin() {
      router.push({
        path: "/home",
        name: "home",
      });
    }
    return {
      handleLogin,
    };
  },
};
</script>

<style scoped lang="less">
.content {
  margin: 1rem 0 0 1rem;
  font-weight: 800;
  .content-head {
    i {
      font-size: 1.5rem;
    }
    P {
      margin-left: 1rem;
      display: inline;
      font-size: 1.4rem;
    }
  }
  .content-center {
    margin-top: 3rem;
    p {
      font-size: 1.2rem;
    }
    .center-input {
      display: flex;
      width: 96%;
      height: 3rem;
      border-bottom: 1px solid rgb(199, 196, 196);
      line-height: 4rem;
      font-size: 1.2rem;
      font-weight: 800;
      .input-left {
      }
      .input-center {
        margin: 0 0.3rem;
      }
      input {
        font-size: 1.2rem;
        font-weight: 800;
        color: @font-grey;
        border: none;
        margin-top: 1rem;
        outline: none;
      }
    }
  }
  .content-bottom {
    button {
      position: absolute;
      bottom: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20rem;
      height: 3rem;
      font-size: 1.3rem;
      background: @theme-color;
      color: #fff;
      border: none;
      border-radius: 5rem;
      font-weight: 800;
    }
  }
}
</style>