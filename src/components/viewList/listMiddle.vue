<template>
  <div class="main">
    <div class="main-top">
      <i class="iconfont icon-bofang">
        播发全部 <text>(共{{ objLength }}首)</text>
      </i>
    </div>
    <div
      @click="handleIcon(index)"
      class="main-content"
      v-for="(item, index) in musicObj"
      :key="item.id"
    >
      <div class="content-left">
        <p v-show="index === indexNumber ? false : true">{{ index + 1 }}</p>
        <i
          class="iconfont icon-shengyin"
          v-show="index === indexNumber ? true : false"
        ></i>
      </div>
      <div class="content-midddle">
        {{ item.name }}
        <div class="middle-text">
          <i class="iconfont icon-pinzhi"></i>
          <text v-for="item1 in item.ar" :key="item1.id"
            >&nbsp;{{ item1.name }}</text
          >
        </div>
        <i
          v-show="item.mv !== 0"
          class="iconfont icon-shipinbofang videoIcon"
        ></i>
      </div>
      <div class="content-right">
        <i class="iconfont icon-gengduo1"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, onUpdated, computed, ref, onMounted } from "vue";
import emitter from "../../utils/bus";
//获取store
import { mapState, useStore } from "vuex";
//使用 pinia Store
import { mainStore } from "../../store/piniaIndex";

export default {
  setup(props) {
    const storePinia = mainStore();
    console.log(storePinia.musicObj);
    const storeVuex = useStore();
    /*     computed(() => {
      ...mapState({})
    }); */

    // console.log(...mapState({ musicObj: "musicObj" }));

    let isListen = ref(Boolean);
    let indexNumber = ref("");

    function handleIcon(index) {
      isListen = !isListen;
      indexNumber.value = index;
      //通过点击传递指定列表数据
      //emitter.emit("event", storeVuex.state.musicObj[index]);
      emitter.emit("event", storePinia.musicObj[index]);
    }

    onMounted(() => {});

    // let objLength = musicObj.length;
    return {
      musicObj: computed(() => {
        return storePinia.musicObj;
        //storeVuex.state.musicObj;
      }),
      objLength: computed(() => {
        return storePinia.musicObj.length;
        //storeVuex.state.musicObj.length;
      }),
      isListen,
      indexNumber,
      handleIcon,
    };
  },
};
</script>

<style scoped lang="less">
.main {
  background: #fff;
  padding: 0.4rem;
  margin-top: 0.8rem;
  padding-bottom: 3rem;
  .main-top {
    color: rgb(110, 110, 110);
    padding: 0.4rem;
    position: sticky;
    top: 0;
    z-index: 99;
    background: #fff;
    i {
      text {
        color: #666;
        font-size: 0.2rem;
      }
    }
  }
  .main-content {
    display: flex;
    flex-direction: row;
    padding: 0.3rem;
    position: relative;
    .content-left {
      margin-top: 0.6rem;
      color: black;
      p {
        display: inline;
      }
      i {
        color: red;
        font-size: 1.3rem;
      }
    }
    .content-midddle {
      margin-left: 0.5rem;
      color: black;
      font-size: 0.9rem;
      display: inline-block;
      white-space: nowrap;
      max-width: 15rem;
      overflow: hidden;
      text-overflow: ellipsis;
      .middle-text {
        font-size: 0.7rem;
        color: rgb(156, 155, 155);
        i {
          color: red;
          vertical-align: middle;
          font-size: 0.3rem;
        }
      }
      .videoIcon {
        position: absolute;
        right: 2rem;
        top: 0.75rem;
        font-size: 1.2rem;
      }
    }
    .content-right {
      position: absolute;
      right: 0;
      i {
        font-size: 1.3rem;
        color: #666;
        line-height: 2rem;
      }
    }
  }
}
</style>