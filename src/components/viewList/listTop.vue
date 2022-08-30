<template>
  <div class="content">
    <div class="content-header" @click="this.$router.back()">
      <img :src="playData.coverImgUrl" alt="" />
      <div class="header-left">
        <i class="iconfont icon-xitongfanhui">&nbsp;&nbsp;&nbsp;歌单</i>
      </div>
      <div class="header-right">
        <i class="iconfont icon-sousuo1"></i>
        <i class="iconfont icon-gengduo"></i>
      </div>
    </div>
    <commentTop :playData="playData">
      <!-- 具名插槽的使用 -->
      <template v-slot:bg>
        <img style="width: 10rem" :src="playData.coverImgUrl" alt="" />
      </template>
    </commentTop>
    <div class="content-buttom ">
      <router-link class="bottom-icon" to="/view/comment">
        <i class="iconfont icon-pinglun"></i
        ><span>{{ playData.commentCount }}</span>
      </router-link>
      <div class="bottom-icon">
        <i class="iconfont icon-fenxiang"></i
        ><span>{{ playData.shareCount }}</span>
      </div>
      <div class="bottom-icon">
        <i class="iconfont icon-xiazai"></i><span>下载</span>
      </div>
      <div class="bottom-icon">
        <i class="iconfont icon-duoxuan"></i><span>多选</span>
      </div>
    </div>
  </div>
</template>)

<script>
import commentTop from "../commentTop.vue";
import {
  reactive,
  watch,
  onMounted,
  computed,
  onUpdated,
  ref,
  compile,
} from "vue";
export default {
  components: { commentTop },
  props: {
    playData: Object,
  },
  setup(props) {
    return {};
  },
};
</script>

<style lang="less" scoped>
.content {
  margin: 1px;
  .content-header {
    display: flex;
    padding: 0.5rem;
    img {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: -1;
      filter: blur(40px);
    }
    .iconfont {
      font-size: 1.3rem;
      color: #fff;
    }
    .header-left {
      flex: 1;
    }

    .header-right {
      margin-top: 5px;
      i {
        margin-left: 1.3rem;
      }
    }
  }

  .content-buttom {
    display: flex;
    justify-items: center;
    text-align: center;
    i {
      font-size: 1.6rem;
      color: #fff;
    }
    .bottom-icon {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-items: center;
      color: #fff;
    }
  }
}
</style>