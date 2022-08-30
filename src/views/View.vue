<template>
  <!-- 父组件通过props向子组件传递参数 -->
  <keep-alive><list-top :playData="state.playData"></list-top></keep-alive>
  <keep-alive><list-middle></list-middle></keep-alive>
  <keep-alive>
    <list-botton></list-botton>
  </keep-alive>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { onMounted, provide, onUpdated, onBeforeMount } from "vue";
import { getPlayList } from "../api/index";
import { useRoute } from "vue-router";
import listTop from "../components/viewList/listTop.vue";
import listMiddle from "../components/viewList/listMiddle.vue";
import { useStore } from "vuex";
import ListBotton from "../components/listBotton.vue";
export default {
  components: { listTop, listMiddle, ListBotton },
  setup() {
    const route = useRoute();
    const store = useStore();
    let state = reactive({ playData: {} });

    onBeforeMount(async () => {
      let res = await getPlayList(route.query.id);
      state.playData = reactive(res.data.playlist);
      store.commit("saveMusic", state.playData.tracks);
    });

    onUpdated(() => {
      /* 建立一歌单详情的列表，通过store进行多组件共享数据 */
      store.commit("saveMusic", state.playData.tracks);
    });
    return {
      state,
    };
  },
};
</script>

<style>
</style>