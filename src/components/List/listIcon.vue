<template>
  <div class="content">
    <div class="icon-all">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanjutuijian"></use>
      </svg>
      <span>每日推荐</span>
    </div>
    <div class="icon-all">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-airec"></use>
      </svg>
      <span>私人FM</span>
    </div>
    <div class="icon-all">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <span>歌单</span>
    </div>
    <div class="icon-all">
      <svg class="icon"  aria-hidden="true">
        <use xlink:href="#icon-paihangbang1"></use>
      </svg>
      <span>排行榜</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.icon {
  width: 4rem;
  height: 4rem;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.content {
    display: flex;
    justify-content: space-around;
    margin-top:1rem;
  .icon-all{
      display: flex;
      flex-direction: column;
      align-items: center;
    i {
      color: red;
    }
  }

}
</style>