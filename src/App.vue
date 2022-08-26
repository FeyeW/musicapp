<template>
  <div class="content-all">
    <router-view />
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("getMusicList");
    /* ;
    store.dispatch("getMusicList");
    console.log(store.state.bottomMusic); */
  },
};
</script>

<style scoped>
.content-all {
  height: 916px;
  padding-bottom: 3rem;
}
</style> 

