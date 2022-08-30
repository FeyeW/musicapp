<template>
  <div class="main">
    <h1>评论{{}}</h1>
    <comment-top />
    <div class="main-content">
      <h2>精彩评论</h2>
      <div class="content-middle">
        <div class="middle-left"></div>
        <div class="middle-middle"></div>
      </div>
    </div>
  </div>
</template>

<script>
import commentTop from "../components/commentTop.vue";
import { onBeforeMount, reactive } from "vue";
import { getPlayList } from '@/api';
export default {
  components: { commentTop },
  setup() {
    
  },
};
</script>

<style>
</style>