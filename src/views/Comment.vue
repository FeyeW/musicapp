<template>
  <div class="main">
    <h1>评论{{}}</h1>

    <comment-top :playData="state.playData">
      <template v-slot:black>
        <div class="center-right">
          <span>{{ state.playData.name }}</span>
          <div class="right-header">
            by
            <span>{{ Nickname }}</span>
          </div>
          <i
            style="position: absolute; right: 1rem"
            class="iconfont icon-xiangyoujiantou"
          ></i>
        </div>
      </template>
    </comment-top>

    <div class="main-content">
      <h2>精彩评论</h2>
      <div class="content-middle">
        <div class="middle-left"></div>
        <div class="middle-middle"></div>
      </div>
    </div>
  </div>
</template>

<script>
import commentTop from "../components/commentTop.vue";
import {
  reactive,
  onUnmounted,
  onMounted,
  onBeforeUnmount,
  onBeforeMount,
  onUpdated,
  computed,
  ref,
} from "vue";
import { getPlayList } from "@/api";
import { useRoute } from "vue-router";

export default {
  components: { commentTop },
  setup() {
    const route = useRoute();
    let state = reactive({ playData: {} });
    let Nickname = ref("");
    let avatarUrl = ref("");
    let name = ref("");

    onMounted(async () => {
      let res = await getPlayList(route.query.id);
      state.playData = res.data.playlist;


      //name.value = state.playData.name;
      Nickname.value = state.playData.creator.nickname;
      avatarUrl.value = state.playData.creator.avatarUrl;
    });

    return {
      name,
      Nickname,
      avatarUrl,
      state,
    };
  },
};
</script>

<style scoped lang="less">
.center-right {
  width: 12.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 1.2rem;
  color: black;
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