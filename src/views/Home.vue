<template>
  <top-nav></top-nav>
  <suspense>
    <swiper-com></swiper-com>
  </suspense>
  <icon-list></icon-list>
  <suspense> <music-list></music-list> </suspense>
</template>

<script>
import topNav from "../components/homeList/topNav.vue";
import swiperCom from "../components/homeList/swiperCom.vue";
import iconList from "../components/homeList/listIcon.vue";
import musicList from "../components/homeList/listMusic.vue";
export default {
  name: "Home",
  components: { topNav, swiperCom, iconList, musicList },
};
</script>

<style lang="less">
</style>