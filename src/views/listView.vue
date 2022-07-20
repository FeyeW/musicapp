<template>
 <list-top :playData="state.playData.playlist"></list-top>

 
</template>

<script >
import { reactive } from '@vue/reactivity';
import { onMounted,provide} from "vue";
import { getPlayList } from "../api/index";
import { useRoute } from "vue-router";
import listTop from '../components/listTop.vue'
export default {
  components:{listTop},
  setup() {
    const route = useRoute();
    let state=reactive({playData:{}})
    onMounted(async () => {
      let res = await getPlayList(route.query.id);
      state.playData=reactive(res.data)
      console.log(state.playData.playlist)    
    });
    provide('playData',state.playData.playlist)
    return{
     state
    }
  },
};
</script>

<style>
</style>