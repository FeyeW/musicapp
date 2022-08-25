<template>
  <div class="content">
    <div class="content-left">
      <i class="iconfont icon-liebiao"></i>
    </div>
    <div class="content-center">
      <h5>我的</h5>
      <h5 class="active">发现</h5>
      <h5>云村</h5>
      <h5>视频</h5>
    </div>
    <div class="content-right">
      <i class="iconfont icon-sousuo"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.content {
  margin: 1rem;
  display: flex;
  justify-content: center;
  .content-left {
    flex: 1;
  }
  .content-center {
    flex: 14;
    display: flex;
    justify-content: center;
    h5 {
      display: inline;
      margin: 0 0.5rem;
      font-weight: normal;
    }
    .active {
      font-size: 1rem;
      font-weight: 800;
      margin-top: -0.1rem;
    }
  }
  .content-right {
    flex: 1;
  }
}
</style>