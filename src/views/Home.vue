<template>
  <!-- 声明在setup可以使用异步通信 -->
  <Suspense>
    <!-- 懒加载页面 -->
    <template #fallback>
      <h1>Loading...</h1>
    </template>
    <keep-alive>
      <div>
        <top-nav></top-nav>
        <swiper-com></swiper-com>
        <icon-list></icon-list>
        <music-list></music-list>
        <vidoe-list></vidoe-list>
        <radio-list></radio-list>

        <list-botton></list-botton>
      </div>
    </keep-alive>
  </Suspense>
</template>

<script>
import topNav from "../components/homeList/topNav.vue";
import swiperCom from "../components/homeList/swiperCom.vue";
import iconList from "../components/homeList/listIcon.vue";
import musicList from "../components/homeList/listMusic.vue";
import vidoeList from "../components/homeList/listVideo.vue";
import radioList from "../components/homeList/listRadio.vue";
import listBotton from "../components/listBotton.vue";

export default {
  name: "Home",
  components: {
    topNav,
    swiperCom,
    iconList,
    musicList,
    vidoeList,
    radioList,
    listBotton,
  },
};
</script>

<style lang="less">
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  background-image: linear-gradient(to right, #f4251d, #ffb9b9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: 1s infinite alternate moiveAnimation;
}
@keyframes moiveAnimation {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0.1;
  }
}
</style>