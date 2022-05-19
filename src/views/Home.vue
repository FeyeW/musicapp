<template>
  <top-nav></top-nav>
  <suspense>
    <swiper-com></swiper-com>
  </suspense>
  <icon-list></icon-list>
  <suspense>  <music-list></music-list> </suspense>
</template>

<script>
import topNav from "../components/topNav.vue";
import swiperCom from "../components/swiperCom.vue";
import iconList from "../components/iconList.vue";
import musicList from '../components/musicList.vue'
export default {
  name: "Home",
  components: { topNav, swiperCom, iconList,musicList },
};
</script>

<style lang="less">
</style>