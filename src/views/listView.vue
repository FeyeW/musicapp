<template>
  <!-- 父组件通过props向子组件传递参数 -->
  <list-top :playData="state.playData"></list-top>
  <list-middle></list-middle>
</template>

<script >
import { reactive } from "@vue/reactivity";
import { onMounted, provide } from "vue";
import { getPlayList } from "../api/index";
import { useRoute } from "vue-router";
import listTop from "../components/List/listTop.vue";
import listMiddle from "../components/List/listMiddle.vue";
import { useStore } from "vuex";
export default {
  components: { listTop, listMiddle },
  setup() {
    const route = useRoute();
    const store = useStore();
    let state = reactive({ playData: {} });
    onMounted(async () => {
      let res = await getPlayList(route.query.id);
      state.playData = reactive(res.data.playlist);
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