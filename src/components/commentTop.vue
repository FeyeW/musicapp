<template>
  <div class="content-center">
    <div class="center-left">
      <slot name="bg"></slot>
      <div class="center-count">
        <i class="iconfont icon-bofang bg-play">{{
          handleCount(playData.playCount)
        }}</i>
      </div>
    </div>
    <div class="center-right">
      <span>{{ playData.name }}</span>
      <div class="right-header">
        <img :src="avatarUrl" alt="" />
        <span>{{ Nickname }}</span
        ><i class="iconfont icon-xiangyoujiantou"></i>
        <p>{{ playData.description }}</p>
      </div>
    </div>
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
    let Nickname = ref("");
    let avatarUrl = ref("");

    function handleCount(value) {
      return Math.ceil(value / 10000) + "万";
    }

    onUpdated(() => {
      Nickname.value = props.playData.creator.nickname;
      avatarUrl.value = props.playData.creator.avatarUrl;
    });

    return {
      handleCount,
      Nickname,
      avatarUrl,
    };
  },
};
</script>

<style scoped lang="less">
.content-center {
  display: flex;
  flex-direction: row;
  margin: 1.5rem 0;
  .center-left {
    position: relative;
    img {
    }
    .center-count {
      position: absolute;
      top: 0;
      right: 1%;
      color: rgb(255, 255, 255);
      opacity: 0.8;
      margin-right: 0.2rem;
    }
    .iconfont {
      font-size: 0.32rem !important;
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
}
</style>