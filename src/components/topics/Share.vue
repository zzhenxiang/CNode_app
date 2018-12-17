<template>
  <div class="share">
    <topic-list :items="items"></topic-list>
    <infinite-loading @infinite="infiniteHandler" v-if="isShow" spinner="spiral"></infinite-loading>
  </div>
</template>

<script>
// // 引入 取数据的模块
import {getTopics} from '@/getdata/getTopic.js';
// 引入 主题列表组件
import topicList from '@/components/topics/List';
// 引入 分页滑动组件
import InfiniteLoading from 'vue-infinite-loading';
// import axios from 'axios';
export default {
  name: 'Share',
  data () {
    return {
      // 主题列表
      items:[],
      page: 1,
      isShow: true
    }
  },
  // 钩子函数
  mounted: function () { 
    // axios.get('https://www.vue-js.com/api/v1/topics').then((response)=>{
    //  this.items = response.data.data;
    // });
    // 封装成一个模块实现函数getTopics()
     
    getTopics({tab:'share',limit:25,page:1}).then((response)=>{
      // console.log(response);
      this.items = response.data.data;
    })
  },

  methods: {
    infiniteHandler($state) {
    
      setTimeout(() => {

        // 查询 全部主题数据
        getTopics({tab:'share',limit:20,page:++this.page}).then((response)=>{
          // console.log(response.data.data);
          // 把查询到的数据放到 items里
          this.items = this.items.concat(response.data.data);
          this.items = this.items.concat(response.data.data);
          if(response.data.data.length ==0){
            this.isShow = false;
            // 结束了
            return;
          } 
          $state.loaded();
        });

      }, 1000);

    },
  },

  // 加载组件
  components:{
    // 主题列表组件
    topicList,InfiniteLoading
  }    
}

 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // 引入 公共样式
  @import '../../assets/sass/base.scss';
  
  // 引入 主题列表样式
  @import '../../assets/sass/itemlist.scss';
  .share{
    margin-top: rem(90px);
    margin-bottom: rem(130px);
  }  


</style>
