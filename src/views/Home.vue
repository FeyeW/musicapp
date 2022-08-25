<template>
  <top-nav></top-nav>
  <suspense>
    <swiper-com></swiper-com>
  </suspense>
  <icon-list></icon-list>
  <!-- 声明在setup可以使用异步通信 -->
  <suspense> <music-list></music-list> </suspense>
  <suspense><vidoe-list></vidoe-list></suspense>
  <radio-list></radio-list>
</template>

<script>
import topNav from "../components/homeList/topNav.vue";
import swiperCom from "../components/homeList/swiperCom.vue";
import iconList from "../components/homeList/listIcon.vue";
import musicList from "../components/homeList/listMusic.vue";
import vidoeList from "../components/homeList/listVideo.vue";
import radioList from "../components/homeList/listRadio.vue";
export default {
  name: "Home",
  components: { topNav, swiperCom, iconList, musicList, vidoeList, radioList },
};
</script>

<style lang="less">
</style>