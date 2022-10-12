<template>
  <div class="content-all">
    <router-view />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { mainStore } from "./store/piniaIndex";
export default {
  setup() {
    //const storeVuex = useStore();
    // store.dispatch("getMusicList");
    const storePinia = mainStore();
    storePinia.getMusicList(2846054862);
  },
};
</script>

<style scoped>
.content-all {
  height: 916px;
  padding-bottom: 3rem;
}
</style> 

