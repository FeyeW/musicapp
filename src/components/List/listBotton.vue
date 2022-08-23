<template>
  <div class="content">
    <div class="main">
      <div class="main-left">
        <img src="" alt="" />
        <div class="left-use">
          <i class="iconfont icon-pinglun"></i>
          <i class="iconfont icon-pinglun"></i>
          <i class="iconfont icon-pinglun"></i>
        </div>
      </div>
      <div class="main-middle"></div>
      <div class="main-right">
        <i class="iconfont icon-pinglun"></i>
        <i class="iconfont icon-pinglun"></i>
        <i class="iconfont icon-pinglun"></i>
        <i class="iconfont icon-pinglun"></i>
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
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
}
</style>