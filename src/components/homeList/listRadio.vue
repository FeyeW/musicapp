<template>
  <div class="content">
    <div class="content-head">
      <div class="head-left">主播电台</div>
      <div class="head-right">查看更多</div>
    </div>
    <div class="content-bottom">
      <router-link
        :to="{ path: '/view', query: { id: item.id } }"
        v-for="item in state.musicList"
        :key="item.id"
      >
        <div class="bottom-left">
          <img :src="item.picUrl" alt="" />
          <i class="iconfont icon-24gl-playSquare"></i>
        </div>
        <div class="bottom-right">
          <p>{{ item.name }}</p>
          <p class="right-text">{{ item.copywriter }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getPlayRadio } from "../../api/index";
import { reactive, onMounted } from "vue";
export default {
  setup() {
    let state = reactive({ musicList: [] });
    onMounted(async () => {
      let res = await getPlayRadio();
      console.log(res);
      state.musicList = reactive(res.data.result);
    });

    return {
      state,
    };
  },
};
</script>

<style lang="less" scoped>
.content {
  padding-bottom: 3rem;
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
  .content-bottom {
    padding: 0 0.8rem;
    /* grid布局并且一行最多有两个，宽度为12rem */
    display: grid;
    grid-template-columns: repeat(2, 12rem);
    a {
      display: flex;
      .bottom-left {
        img {
          width: 4rem;
          height: 4rem;
        }
        i {
          position: absolute;
          right: 0.1rem;
          bottom: 0.4rem;
          color: #fff;
        }
      }
      .bottom-right {
        p {
          font-size: 0.8rem;
          margin-top: 1rem;
          margin-left: 0.5rem;
          white-space: nowrap;
          max-width: 7rem;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .right-text {
          font-size: 0.1rem;
          color: #666;
          margin-top: -0.1rem;
        }
      }
    }
  }
}
</style>