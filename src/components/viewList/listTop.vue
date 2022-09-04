<template>
  <div class="content">
    <el-skeleton
      v-show="isShow"
      style="width: 100%; padding: 3.8rem 1rem; display: flex"
      animated
    >
      <template #template>
        <el-skeleton-item variant="image" style="width: 10rem; height: 10rem" />
        <div>
          <el-skeleton-item
            variant="h3"
            style="width: 50%; margin: 2rem 0 0.5rem 1rem"
          />
          <div style="margin-left: 1rem">
            <el-skeleton-item
              variant="text"
              style="margin-right: 16px; width: 10rem"
            />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
    </el-skeleton>
    <div v-show="!isShow">
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
        <!-- 定义具名插槽和内容 -->
        <template v-slot:white>
          <div class="center-right">
            <span>{{ playData.name }}</span>
            <div class="right-header">
              <img :src="avatarUrl" alt="" />
              <span>{{ Nickname }}</span
              ><i class="iconfont icon-xiangyoujiantou"></i>
              <p>{{ playData.description }}</p>
            </div>
          </div>
        </template>
      </commentTop>
    </div>

    <div class="content-buttom">
      <div class="bottom-icon" @click="jumpComment">
        <i class="iconfont icon-pinglun"></i
        ><span>{{ playData.commentCount }}</span>
      </div>
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
import { useRouter } from "vue-router";

import {
  onUnmounted,
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
    listID: String,
    isShow: Boolean,
  },
  setup(props) {
    const router = useRouter();
    let Nickname = ref("");
    let avatarUrl = ref("");

    function jumpComment() {
      router.push({
        path: "comment",
        query: { id: props.listID },
      });
    }
    onUpdated(() => {
      Nickname.value = props.playData.creator.nickname;
      avatarUrl.value = props.playData.creator.avatarUrl;
    });
    return {
      jumpComment,
      Nickname,
      avatarUrl,
    };
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

.center-right {
  width: 10.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1.2rem;
  color: #fff;
  span {
    font-size: 1.1rem;
    font-weight: 800;
  }
  .right-header {
    margin: 0.6rem 0;
    img {
      width: 20%;
      border-radius: 50%;
      vertical-align: middle;
    }
    span {
      font-weight: normal;
      font-size: 1rem;
      margin: 0 0.3rem;
      opacity: 0.8;
    }
    .iconfont {
      font-size: 0.32rem !important;
      color: rgb(218, 212, 212);
    }
    P {
      opacity: 0.6;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
.center-right {
  width: 10.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1.2rem;
  color: #fff;
  span {
    font-size: 1.1rem;
    font-weight: 800;
  }
  .right-header {
    margin: 0.6rem 0;
    img {
      width: 20%;
      border-radius: 50%;
      vertical-align: middle;
    }
    span {
      font-weight: normal;
      font-size: 1rem;
      margin: 0 0.3rem;
      opacity: 0.8;
    }
    .iconfont {
      font-size: 0.32rem !important;
      color: rgb(218, 212, 212);
    }
    P {
      opacity: 0.6;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>