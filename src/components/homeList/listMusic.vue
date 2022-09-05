<template>
  <div class="content">
    <div class="content-head">
      <div class="head-left">发现好歌单</div>
      <div class="head-right">查看更多</div>
    </div>
    <div class="content-bottom">
      <router-link
        :to="{ path: '/view', query: { id: item.id } }"
        class="bottom-bg"
        v-for="item in state.musicList"
        :key="item.id"
      >
        <el-skeleton
          v-show="isShow"
          style="width: 100%; padding: 1rem 0"
          animated
        >
          <template #template>
            <el-skeleton-item
              variant="image"
              style="width: 5rem; height: 5rem"
            />
            <el-skeleton-item variant="text" style="width: 4rem" />
          </template>
        </el-skeleton>
        <div v-show="!isShow" style="position: relative">
          <img :src="item.picUrl" />
          <div class="bg-count">
            <i class="iconfont icon-bofang bg-play"></i
            >{{ handleCount(item.playCount) }}
          </div>
        </div>
        <div class="bg-name">{{ item.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getPerson } from "../../api/index";
import { reactive, onMounted, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    let state = reactive({ musicList: [] });
    const store = useStore();
    let isShow = ref(false);
    let time = "";
    isShow.value = true;
    onMounted(async () => {
      let res = await getPerson(8);
      state.musicList = reactive(res.data.result);
      clearTimeout(time);
      time = setTimeout(() => {
        isShow.value = false;
      }, 500);
    });

    function handleCount(value) {
      return Math.ceil(value / 10000) + "万";
    }
    return {
      state,
      handleCount,
      isShow,
    };
  },
};
</script>

<style lang="less" scoped>
.content {
  .content-head {
    display: flex;
    margin: 1rem;
    .head-left {
      flex: 3;
      font-weight: 800;
    }
    .head-right {
      border: 1px solid rgb(189, 189, 189);
      border-radius: 1rem;
      font-size: 0.32rem;
      padding: 0.2rem;
    }
  }
  .content-bottom ::-webkit-scrollbar {
    /*隐藏滚轮*/
    display: none;
  }
  .content-bottom {
    width: 7.5rpx;
    flex-flow: row nowrap;
    overflow-x: scroll;
    display: flex;
    -ms-overflow-style: none;
    margin-left: 0.8rem;

    .bottom-bg {
      margin-right: 0.5rem;
      img {
        width: 5rem;
      }
      .bg-play {
        font-size: 0.32rem;
      }
      .bg-count {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 0.32rem;
        color: rgb(255, 255, 255);
        opacity: 0.8;
        margin-right: 0.2rem;
      }
      .bg-name {
        text-decoration: none;
        font-size: 0.64rem;
      }
    }
  }
}
</style>