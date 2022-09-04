<template>
  <div class="main">
    <h4>评论({{ state.playData.commentCount }})</h4>
    <comment-top :playData="state.playData">
      <template v-slot:black>
        <div class="center-right">
          <span>
            <div class="list">歌单</div>
            {{ state.playData.name }}</span
          >
          <div class="right-header">
            by
            <span>{{ Nickname }}</span>
          </div>
          <i
            @click="this.$router.back()"
            style="position: absolute; right: -0.5rem; top: 2rem"
            class="iconfont icon-xiangyoujiantou"
          ></i>
        </div>
      </template>
    </comment-top>
    <hr />
    <div class="main-content">
      <text>精彩评论</text>
      <div
        class="content-middle"
        v-for="(item, index) in hotComment.hot"
        :key="item.commentId"
      >
        <div class="middle-left">
          <el-skeleton v-show="isShow" style="--el-skeleton-circle-size: 2rem">
            <template #template>
              <el-skeleton-item variant="circle" />
            </template>
          </el-skeleton>
          <img v-show="!isShow" :src="item.user.avatarUrl" alt="" />
        </div>
        <div class="middle-content">
          <div class="content-header">{{ item.user.nickname }}</div>
          <div class="content-time">{{ hotTime(item.time) }}</div>
          <div class="content-text">{{ item.content }}</div>
        </div>
        <div
          :class="item.liked ? 'likeColor' : 'middle-right'"
          @click="handleLike(index, 'hot')"
        >
          <span>{{ item.likedCount }}</span>
          <i style="margin-left: 0.3rem" class="iconfont icon-dianzan"></i>
          <i
            style="position: absolute; right: 0.03rem; top: 0.1rem; opacity: 0"
            class="iconfont icon-dianzan"
            :class="item.liked ? 'likeChange' : 'middle-right'"
          ></i>
        </div>
      </div>
    </div>
    <div class="main-content" style="padding: 1rem; padding-bottom: 4rem">
      <text>最新评论({{ commentTotal }})</text>
      <div
        class="content-middle"
        v-for="(item, index) in newComment.news"
        :key="item.commentId"
      >
        <div class="middle-left">
          <el-skeleton v-show="isShow" style="--el-skeleton-circle-size: 2rem">
            <template #template>
              <el-skeleton-item variant="circle" />
            </template>
          </el-skeleton>
          <img v-show="!isShow" :src="item.user.avatarUrl" alt="" />
        </div>
        <div class="middle-content">
          <div class="content-header">{{ item.user.nickname }}</div>
          <div class="content-time">{{ hotTime(item.time) }}</div>
          <div class="content-text">{{ item.content }}</div>
        </div>
        <div
          :class="item.liked ? 'likeColor' : 'middle-right'"
          @click="handleLike(index, 'new')"
        >
          <span>{{ item.likedCount }}</span>
          <i style="margin-left: 0.3rem" class="iconfont icon-dianzan"></i>
          <i
            style="position: absolute; right: 0.03rem; top: 0.1rem; opacity: 0"
            class="iconfont icon-dianzan"
            :class="item.liked ? 'likeChange' : 'middle-right'"
          ></i>
        </div>
      </div>
    </div>
    <div class="main-bottom">
      <input type="text" placeholder="发表评论" />
      <i>@</i>
    </div>
  </div>
  <list-botton></list-botton>
</template>

<script>
import commentTop from "../components/commentTop.vue";
import listBottom from "../components/listBotton.vue";
import {
  reactive,
  onUnmounted,
  onMounted,
  onBeforeUnmount,
  onBeforeMount,
  onUpdated,
  computed,
  ref,
} from "vue";
import { getPlayList, getCommentList } from "@/api";
import { useRoute } from "vue-router";
import ListBotton from "../components/listBotton.vue";

export default {
  components: { commentTop, ListBotton },
  setup() {
    const route = useRoute();
    /* 评论头部歌单信息 */
    let state = reactive({ playData: {} });
    /* 评论列表信息 */
    let comment = reactive({ commentData: {} });
    let commentTotal = ref("");
    /* 头部歌单信息 */
    let Nickname = ref("");
    let avatarUrl = ref("");
    let name = ref("");

    /* 热门评论内容 */
    let hotComment = reactive({ hot: {} });
    /* 最新评论内容 */
    let newComment = reactive({ news: {} });

    //设置骨架图出现
    let isShow = ref(false);
    let time = "";

    onMounted(async () => {
      isShow.value = true;
      /* 获取id传过来的歌单的头部信息 */
      let res = await getPlayList(route.query.id);
      state.playData = res.data.playlist;

      /* 根据歌单id获取评论的数据 */
      let data1 = await getCommentList(route.query.id);
      comment.commentData = data1;
      //console.log(data);
      //name.value = state.playData.name;
      Nickname.value = state.playData.creator.nickname;
      avatarUrl.value = state.playData.creator.avatarUrl;

      hotComment.hot = comment.commentData.data.hotComments;
      //console.log(comment.commentData.data);
      newComment.news = comment.commentData.data.comments;
      commentTotal.value = computed(() => {
        return comment.commentData.data.total - hotComment.hot.length;
      });

      clearTimeout(time);
      time = setTimeout(() => {
        isShow.value = false;
      }, 500);
    });

    /* 计算时间戳 */
    function hotTime(params) {
      let date = new Date(params);
      let newDate = new Date();
      let newY = newDate.getFullYear();

      let Y = date.getFullYear();
      let M =
        date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1;
      let D = date.getDay() > 10 ? "0" + date.getDate() : date.getDate();
      return newY === Y ? M + "月" + D + "日" : Y + "年" + M + "月" + D + "日";
    }

    const NewComment = "new";
    const HotComment = "hot";
    /* 判断是否第一次点击 */
    function handleLike(index, value) {
      let item =
        value === NewComment ? newComment.news[index] : hotComment.hot[index];

      item.liked = !item.liked;
      item.liked === true ? item.likedCount++ : item.likedCount--;
      value === NewComment
        ? (newComment = reactive({ news: newComment.news }))
        : (hotComment = reactive({ hot: hotComment.hot }));
    }

    return {
      name,
      Nickname,
      avatarUrl,
      state,
      hotComment,
      newComment,
      hotTime,
      commentTotal,
      handleLike,
      isShow,
    };
  },
};
</script>

<style scoped lang="less">
.main {
  padding-bottom: 4rem;
  h4 {
    position: sticky;
    top: 0;
    text-align: center;
    padding: 1rem 0;
    font-weight: normal;
    background: white;
    z-index: 999;
  }
  hr {
    border: none;
    height: 0.8rem;
    background: #eaeaea;
  }
  .main-content {
    padding: 2rem 1rem;
    text {
      display: block;
      margin-bottom: 0.5rem;
    }
    .content-middle {
      display: flex;
      padding: 1rem 0;
      position: relative;
      .middle-left {
        img {
          width: 2rem;
          border-radius: 50%;
        }
      }
      .middle-content {
        margin-left: 0.5rem;
        .content-header {
          font-size: 0.9rem;
          color: #848383;
        }
        .content-time {
          font-size: 0.4rem;
          color: #adadad;
        }
        .content-text {
          font-size: 0.9rem;
        }
      }
      .middle-right {
        position: absolute;
        right: 0;
        color: #848383;
        span {
          font-size: 0.4rem;
          margin: 0.3rem 0;
        }
      }
    }
  }
  .main-bottom {
    position: relative;
    input {
      border: 1px solid #eaeaea;
      width: 100%;
      height: 4rem;
      position: fixed;
      bottom: 3rem;
      padding: 2rem 0;
      outline: none;
      text-indent: 2rem;
    }
    i {
      position: fixed;
      bottom: 3rem;
      left: 23rem;
      line-height: 4rem;
      font-size: 1.6rem;
    }
  }
}
.center-right {
  width: 12.5rem;
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
  margin-left: 1.2rem;
  color: black;
  position: relative;
  span {
    font-size: 1rem;
    font-weight: 800;
    .list {
      display: inline;
      color: red;
      font-size: 0.1rem;
      font-weight: normal;
      border: 0.05rem solid;
    }
  }
  .right-header {
    margin: 0.6rem 0;
    font-size: 0.4rem;
    color: #878787;
    img {
      width: 20%;
      border-radius: 50%;
      vertical-align: middle;
    }
    span {
      font-weight: normal;
      font-size: 0.4rem;
      opacity: 0.8;
    }
    .iconfont {
      font-size: 0.32rem !important;
      color: rgb(218, 212, 212);
    }
    P {
      opacity: 0.6;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
/* 处理点赞事件的样式 */
.likeColor {
  position: absolute;
  right: 0;
  color: red;
  span {
    font-size: 0.4rem;
    margin: 0.3rem 0;
  }
}
.likeChange {
  color: red;
  animation: 0.5s ease-in alternate scaleLike;
}
@keyframes scaleLike {
  0% {
    transform: scale(1); /*开始为原始大小*/
    opacity: 1;
  }

  100% {
    transform: scale(3);
    opacity: 0;
  }
}
</style>