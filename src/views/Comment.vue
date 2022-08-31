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
        v-for="item in hotComment.hot"
        :key="item.commentId"
      >
        <div class="middle-left">
          <img :src="item.user.avatarUrl" alt="" />
        </div>
        <div class="middle-content">
          <div class="content-header">{{ item.user.nickname }}</div>
          <div class="content-time">2020年6月22日</div>
          <div class="content-text">{{ item.content }}</div>
        </div>
        <div class="middle-right">
          <span>{{ item.likedCount }}</span>
          <i style="margin-left: 0.3rem" class="iconfont icon-dianzan"></i>
        </div>
      </div>
    </div>
    <div class="main-content" style="padding: 1rem">
      <text>最新评论</text>
      <div
        class="content-middle"
        v-for="item in newComment.news"
        :key="item.commentId"
      >
        <div class="middle-left">
          <img :src="item.user.avatarUrl" alt="" />
        </div>
        <div class="middle-content">
          <div class="content-header">{{ item.user.nickname }}</div>
          <div class="content-time">2020年6月22日</div>
          <div class="content-text">{{ item.content }}</div>
        </div>
        <div class="middle-right">
          <span>{{ item.likedCount }}</span>
          <i style="margin-left: 0.3rem" class="iconfont icon-dianzan"></i>
        </div>
      </div>
    </div>
    <div class="main-bottom">
      <input type="text" placeholder="发表评论" />
      <i>@</i>
    </div>
  </div>
</template>

<script>
import commentTop from "../components/commentTop.vue";
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

export default {
  components: { commentTop },
  setup() {
    const route = useRoute();
    /* 评论头部歌单信息 */
    let state = reactive({ playData: {} });
    /* 评论列表信息 */
    let comment = reactive({ commentData: {} });
    /* 头部歌单信息 */
    let Nickname = ref("");
    let avatarUrl = ref("");
    let name = ref("");

    /* 热门评论内容 */
    let hotComment = reactive({ hot: {} });
    /* 最新评论内容 */
    let newComment = reactive({ news: {} });

    onMounted(async () => {
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
      console.log(comment.commentData.data.comments);
      newComment.news = comment.commentData.data.comments;
      //commentUrl.value = data.commentData.user.avatarUrl;
    });

    return {
      name,
      Nickname,
      avatarUrl,
      state,
      hotComment,
      newComment,
    };
  },
};
</script>

<style scoped lang="less">
.main {
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
      bottom: 0;
      padding: 2rem 0;
      outline: none;
      text-indent: 2rem;
    }
    i {
      position: fixed;
      bottom: 0;
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
</style>