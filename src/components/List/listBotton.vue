<template>
  <div class="content">
    <div class="main">
      <div class="main-left">
        <img src="../../assets/img/logo.png" alt="" />
        <div class="left-use">
          <i class="iconfont icon-bg-left"></i>
          <i
            class="iconfont icon-24gl-playSquare"
            style="font-size: 1.5rem"
          ></i>
          <i class="iconfont icon-bg-right"></i>
        </div>
      </div>
      <div class="main-middle">
        <div class="middle-content">
          <div class="content-top">
            <div class="conten-name"></div>
            <div class="content-time"></div>
          </div>
          <div class="content-length">我是一个进度条......</div>
        </div>
      </div>
      <div class="main-right">
        <i class="iconfont icon-aixin1"></i>
        <i class="iconfont icon-xiazai1"></i>
        <i class="iconfont icon-24gl-repeat2"></i>
        <i class="iconfont icon-24gl-playlistMusic"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, onUpdated } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    onUpdated(() => {});
  },
};
</script>

<style scoped lang="less">
.main {
  border-top: 1px solid rgb(55, 55, 55);
  background: #000;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  color: #fff;
  padding: 1rem;
  z-index: 99;
  .main-left {
    display: flex;
    img {
      width: 2rem;
    }
    .left-use {
      margin-left: 0.5rem;
      i {
        margin: 0 0.3rem;
        color: red;
        vertical-align: middle;
      }
    }
  }
  .main-right {
    margin-left: 0.2rem;
    i {
      margin-left: 0.2rem;
    }
  }
}
</style>