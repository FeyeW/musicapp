<template>
  <div class="content-center">
    <div class="center-left">
      <img style="width: 10rem" :src="playData.coverImgUrl" alt="" />
    </div>
    <!-- 插槽接收数据 -->
    <slot name="white"> </slot>
    <slot name="black"></slot>
  </div>
</template>

<script>
import { ref, onUpdated } from "vue";
export default {
  props: {
    playData: Object,
  },
  setup(props) {
    //let playData = inject("playData");
    //console.log(this.playData);

    return {};
  },
};
</script>

<style scoped lang="less">
.content-center {
  display: flex;
  flex-direction: row;
  margin: 1rem;
  .center-left {
    position: relative;
    img {
    }
    .iconfont {
      font-size: 0.32rem !important;
    }
  }
}
</style>