<template>
  <list-top :playData="state.playData"></list-top>
  <list-middle ></list-middle>
</template>

<script >
import { reactive } from "@vue/reactivity";
import { onMounted, provide } from "vue";
import { getPlayList } from "../api/index";
import { useRoute } from "vue-router";
import listTop from "../components/List/listTop.vue";
import listMiddle from "../components/List/listMiddle.vue";
export default {
  components: { listTop, listMiddle },
  setup() {
    const route = useRoute();
    let state = reactive({ playData: {} });
    onMounted(async () => {
      let res = await getPlayList(route.query.id);
      state.playData = reactive(res.data.playlist);
    });
    return {
      state,
    };
  },
};
</script>

<style>
</style>