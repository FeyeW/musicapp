<template>
  <div class="main">
    <div class="main-top">
      <i class="iconfont icon-shanchu2"></i>
      <text>手机号登陆</text>
      <div class="top-right">密码登陆</div>
    </div>
    <div class="main-bottom">
      <h3>请输入验证码</h3>
      <div class="bottom-top">
        <text>已发送至{{ phoneInfo }}<i class="iconfont icon-shuxie"></i></text>
        <p>重新发送</p>
      </div>
      <div class="bottom-content">
        <van-password-input
          :gutter="10"
          :length="4"
          :mask="false"
          :value="verCode"
          :focused="showKeyboard"
          @focus="showKeyboard = true"
        />
      </div>
      <h5>手机号已更换，无法接收到短信？</h5>
    </div>

    <van-number-keyboard
      v-model="verCode"
      :show="showKeyboard"
      @blur="showKeyboard = false"
    />
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { phoneNumFilter } from "../../utils/checkPhone";
import { checkVerCode } from "../../api/index";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();

    let showKeyboard = ref(false);
    let verCode = ref();

    let phoneInfo = ref("");
    let phoneNumber = ref("");
    phoneInfo.value = phoneNumFilter(sessionStorage.getItem("phone"));
    phoneNumber.value = sessionStorage.getItem("phone");
    //console.log(verCode.length);

    let time = "";

    watch(verCode, (newCode) => {
      clearTimeout(time);
      if (newCode.length == 4) {
        router.push({
          path: "/home",
          name: "Home",
        });
        /* time = setTimeout(async () => {
          //let res = await checkVerCode(phoneNumber, newCode);
          
        }); */
      }
    });

    return {
      showKeyboard,
      verCode,
      phoneInfo,
      phoneNumber,
    };
  },
};
</script>

<style scoped lang="less">
.main {
  padding: 1rem;
  .main-top {
    display: flex;
    justify-content: space-between;
    i {
      font-size: 1.5rem;
    }
    text {
      font-size: 1.2rem;
    }
    .top-right {
      border-radius: 1rem;
      border: 1px solid #666;
      font-size: 0.8rem;
      padding: 0.1rem 0.3rem;
    }
  }
  .main-bottom {
    margin-top: 3rem;
    h3 {
      margin-bottom: 0.3rem;
    }
    .bottom-top {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      color: #666;
      text {
      }
      p {
        color: #0fa1a1;
      }
    }
    .bottom-content {
      margin-top: 2rem;
    }
    h5 {
      text-align: center;
      margin-top: 5rem;
      color: #ccc;
    }
  }
}
/deep/.van-password-input__item {
  border-bottom: 1px solid #888 !important;
}
</style>