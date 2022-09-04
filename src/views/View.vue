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
import { onMounted, provide, onUpdated, onBeforeMount, onUnmounted } from "vue";
import { getPlayList } from "../api/index";
import { useRoute } from "vue-router";
import listTop from "../components/viewList/listTop.vue";
import listMiddle from "../components/viewList/listMiddle.vue";
import { useStore } from "vuex";
import ListBotton from "../components/listBotton.vue";

/* 消息的发布与订阅 */
import pubsub from "pubsub-js";
export default {
  components: { listTop, listMiddle, ListBotton },
  setup() {
    const route = useRoute();
    const store = useStore();
    let state = reactive({ playData: {} });
    let listID = ref();
    let isShow=ref(false)

    onBeforeMount(async () => {
      isShow.value=true
      let res = await getPlayList(route.query.id);
      //console.log(route.query.id);
      state.playData = reactive(res.data.playlist);
      store.commit("saveMusic", state.playData.tracks);
      listID.value = route.query.id;
      isShow.value=false
    });
    onUnmounted(() => {});

    onUpdated(() => {
      /* 建立一歌单详情的列表，通过store进行多组件共享数据 */
      store.commit("saveMusic", state.playData.tracks);
    });

    return {
      state,
      listID,
      isShow
    };
  },
};
</script>

<style>
</style>