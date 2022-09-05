<template>
  <div class="content">
    <div class="main">
      <div class="main-left">
        <img :src="musicPic" alt="" />
        <div class="left-use">
          <i class="iconfont icon-bg-left" style="font-size: 0.6rem"></i>
          <i
            v-show="isActive"
            class="iconfont icon-24gl-playSquare"
            style="font-size: 1.3rem"
          ></i>
          <i
            v-show="!isActive"
            class="iconfont icon-zanting1"
            style="font-size: 1.2rem"
          ></i>
          <i class="iconfont icon-bg-right" style="font-size: 0.6rem"></i>
        </div>
      </div>
      <div class="main-middle">
        <div class="middle-content">
          <div class="content-top">
            <div class="content-name">
              {{ musicName }}
            </div>
            <text> ({{ musicAhtuor }})</text>
            <div class="content-time">00:20/05:01</div>
          </div>
          <div class="content-length">
            <el-progress :percentage="20" :text-inside="true" color="red" />
          </div>
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
import {
  computed,
  onMounted,
  onUpdated,
  reactive,
  onBeforeMount,
  onBeforeUnmount,
  ref,
} from "@vue/runtime-core";
import { useStore } from "vuex";
import emitter from "../utils/bus";
import { getPlayList } from "../api/index";

export default {
  setup() {
    const store = useStore();
    let musicPic = ref("");
    let musicName = ref("");
    let musicAhtuor = ref("");
    let isActive = ref(store.state.isAcitve);

    onMounted(async () => {
      let data = JSON.parse(localStorage.getItem("vuex")).bottomMusic;

      //  console.log(JSON.parse(localStorage.getItem("vuex")).bottomMusic);

      musicPic.value = data[0].al.picUrl;
      musicName.value = data[0].name;
      musicAhtuor.value = data[0].ar[0].name;
    });

    let ID = [];
    //获取事件总线传递过来的数据
    emitter.on("event", (e) => {
      musicPic.value = e.al.picUrl;
      musicName.value = e.name;
      musicAhtuor.value = e.ar[0].name;
      store.commit("getButtomMusic", e);

      //设置数组存储点击的相应ID的数字，如果第一次点击和第二次点击相同则为停止播放状态
      ID = [e.id, ...ID];
      for (let i = 0; i < 2; i++) {
        ID[0] === ID[1]
          ? store.commit("getIsActive", true)
          : store.commit(
              "getIsActive",
              false
            ); /* (isActive.value = true) : (isActive.value = false); */
      }
      if (ID.length === 2) {
        ID = [];
      }
      //console.log(isActive.value);
      isActive.value = store.state.isAcitve;
      console.log(store.state.isAcitve);
    });

    //事件总线的卸载，否则会存粗之前的调用
    onBeforeUnmount(() => {
      emitter.off("event");
    });

    return {
      musicPic,
      musicName,
      musicAhtuor,
      isActive,
    };
  },
};
</script>

<style scoped lang="less">
.main {
  border-top: 1px solid rgb(171, 171, 171);
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  color: black;
  padding: 0.5rem;
  z-index: 99;
  width: 100%;
  opacity: 0.9;
  .main-left {
    display: flex;
    img {
      width: 2rem;
    }
    .left-use {
      margin-left: 0.2rem;
      i {
        margin: 0 0.2rem;
        color: red;
        vertical-align: middle;
      }
    }
  }
  .main-middle {
    min-width: 14rem;
    .middle-content {
      .content-top {
        font-size: 0.1rem;
        display: flex;
        justify-content: space-around;
        .content-name {
          white-space: nowrap;
          max-width: 6rem;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        text {
          white-space: nowrap;
          max-width: 6rem;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .content-time {
          margin-left: 0.8rem;
        }
      }
      .content-length {
        height: 1rem;
        line-height: 1rem;
        padding: 0.4rem;

        /deep/ .el-progress-bar__innerText {
          opacity: 0;
        }
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