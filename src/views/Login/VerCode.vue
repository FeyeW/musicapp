<template>
  <div class="main">
    <div class="main-top">
      <i class="iconfont icon-shanchu2"></i>
      <text>手机号登陆</text>
      <div class="top-right">密码登陆</div>
    </div>
    <div class="main-bottom">
      <h3>请输入验证码</h3>
      <div class="bottom-top">
        <text>已发送至13410851417<i class="iconfont icon-shuxie"></i></text>
        <p>重新发送</p>
      </div>
      <div class="bottom-content">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <h5>手机号已更换，无法接收到短信？</h5>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.main {
  padding: 1rem;
  .main-top {
    display: flex;
    justify-content: space-around;
    i {
      font-size: 1.5rem;
    }
    text {
      font-size: 1.2rem;
      padding: 0 5.5rem;
    }
    .top-right {
      border-radius: 1rem;
      border: 1px solid #666;
      font-size: 0.8rem;
      padding: 0.1rem 0.3rem;
    }
  }
  .main-bottom {
    margin-top: 3rem;
    h3 {
      margin-bottom: 0.3rem;
    }
    .bottom-top {
      display: flex;
      font-size: 0.8rem;
      color: #666;
      text {
      }
      p {
        margin-left: 11rem;
        color: #0fa1a1;
      }
    }
    .bottom-content {
      display: flex;
      justify-content: space-around;
      input {
        font-size: 1.5rem;
        width: 3.5rem;
        outline: none;
        border: none;
        border-bottom: 1px solid;
        padding: 0.6rem;
        text-align: center;
      }
    }
    h5 {
      text-align: center;
      margin-top: 5rem;
      color: #ccc;
    }
  }
}
</style>