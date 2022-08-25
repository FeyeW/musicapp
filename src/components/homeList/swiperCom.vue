<template>
  <div class="block">
    <el-carousel height="128px">
      <el-carousel-item v-for="item in bannerImg" :key="item">
        <img :src="item.pic" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { getBanner } from "../../api/index";
import { reactive } from "vue";
export default {
  async setup() {
    var res = await getBanner(2);
    var bannerImg = reactive(res.data.banners);

    return {
      bannerImg,
    };
  },
};
</script>

<style lang="less" scoped>
.block {
  margin-top: 0.5rem;
}
.el-carousel__item img {
  // color: #475669;
  width: 100%;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
/deep/ .el-carousel__indicator--horizontal {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
}
/deep/ .el-carousel__button {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
}

/deep/ .el-carousel__indicator.is-active button {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
}
</style>