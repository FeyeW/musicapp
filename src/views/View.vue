<template>
  <!-- 父组件通过props向子组件传递参数 -->
  <keep-alive
    ><list-top :isShow="isShow" :playData="state.playData" :listID="listID">
      <router-view></router-view> </list-top
  ></keep-alive>
  <keep-alive><list-middle></list-middle></keep-alive>
  <keep-alive>
    <list-botton></list-botton>
  </keep-alive>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { onUpdated, onBeforeMount, onUnmounted } from "vue";
import { getPlayList } from "../api/index";
import { useRoute } from "vue-router";
import listTop from "../components/viewList/listTop.vue";
import listMiddle from "../components/viewList/listMiddle.vue";
import { useStore } from "vuex";
import ListBotton from "../components/listBotton.vue";

/* 消息的发布与订阅 */
import pubsub from "pubsub-js";

//$patch函数：通过函数方式去使用的时候，函数接受一个state的参数，state就是store仓库中的state
import { mainStore } from "../store/piniaIndex";
import{storeToRefs} from 'pinia'

export default {
  components: { listTop, listMiddle, ListBotton },
  setup() {
    const route = useRoute();
    const storeVuex = useStore();
    const storePinia = mainStore();
    let state = reactive({ playData: {} });
    let listID = ref();
    let isShow = ref(false);

    onBeforeMount(async () => {
      isShow.value = true;
      let res = await getPlayList(route.query.id);
      //console.log(route.query.id);
      state.playData = reactive(res.data.playlist);
      // storeVuex.commit("saveMusic", state.playData.tracks);

      //$patch+对象
      storePinia.$patch({
        musicObj: state.playData.tracks,
      });
      listID.value = route.query.id;
      isShow.value = false;
    });
    onUnmounted(() => {});

    onUpdated(() => {
      /* 建立一歌单详情的列表，通过storeVuex进行多组件共享数据 */
      // storeVuex.commit("saveMusic", state.playData.tracks);
      //$patch+函数
      storePinia.$patch((statePinia) => {
        statePinia.musicObj = state.playData.tracks;
      });
    });

    return {
      state,
      listID,
      isShow,
    };
  },
};
</script>

<style>
</style>