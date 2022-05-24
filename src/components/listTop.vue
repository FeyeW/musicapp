<template>
  <div class="content">
    <div class="content-header">
      <img :src="playImg" alt="" />
      <div class="header-left">
        <i class="iconfont icon-xitongfanhui">&nbsp;&nbsp;&nbsp;歌单</i>
      </div>
      <div class="header-right">
        <i class="iconfont icon-sousuo1"></i>
        <i class="iconfont icon-gengduo"></i>
      </div>
    </div>
    <div class="content-center">
      <div class="center-left">
        <img :src="playImg" alt="" />
        <div class="center-count">
          <i class="iconfont icon-bofang bg-play">{{
            handleCount(this.playCount)
          }}</i>
        </div>
      </div>
      <div class="center-right">
        <span>{{ playName }}</span>
        <div class="right-header">
          <img :src="avatarUrl" alt="" />
          <span>{{ Nickname }}</span
          ><i class="iconfont icon-xiangyoujiantou"></i>
          <p>{{ Description }}11111111111111111111111111111111111111111111</p>
        </div>
      </div>
    </div>
    <div class="content-buttom"></div>
  </div>
</template>)

<script>
import { inject } from "vue";
export default {
  props: ["playData"],
  data() {
    return {
      playImg: "",
      playCount: "",
      playName: "",
      Nickname: "",
      avatarUrl: "",
      Description: "",
    };
  },
  setup() {
    let playData = inject("playData");
    console.log(playData);
    function handleCount(value) {
      return Math.ceil(value / 10000) + "万";
    }
    return {
      handleCount,
    };
  },
  updated() {
    console.log(this.playData);
    this.playImg = this.playData.coverImgUrl;
    this.playCount = this.playData.playCount;
    this.playName = this.playData.name;
    this.Nickname = this.playData.creator.nickname;
    this.avatarUrl = this.playData.creator.avatarUrl;
    this.Description = this.playData.description;
    //  console.log(this.playData.creator)
  },
};
</script>

<style lang="less" scoped>
.content {
  .content-header {
    display: flex;
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
      h5 {
      }
    }

    .header-right {
      i {
        margin-left: 1.3rem;
      }
    }
  }

  .content-center {
    display: flex;
    flex-direction: row;
    margin: 2rem 0;
    .center-left {
      position: relative;
      img {
        width: 10rem;
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
          width: 10%;
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

  .content-buttom {
  }
}
</style>