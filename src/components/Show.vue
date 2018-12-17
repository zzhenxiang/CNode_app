<template>
  <div class="show">
  <link rel="stylesheet" href="http://at.alicdn.com/t/font_945819_6xnb166jnxb.css">
  
  <vue-star animate="animated bounceIn" color="#F05654" class="iconfont icon-aixin_fuzhi">
    <i slot="iconfont icon-aixin_fuzhi" class="fa fa-heart"></i>
  </vue-star>

  

   <div class="article-wrap">
    <div class="article"
         v-if="showData">
      <div class="article-content">
        <div class="header">
          <h1 class="title">{{ showData.title }}</h1>

          <span class="top"
                v-if="showData.top">置顶</span>
          <span class="good"
                v-if="showData.good">精华</span> ·
          <span class="publish-time"
                v-if="showData.create_at">发布于{{ showData.create_at }}
          </span> ·
          <span class="author"
                v-if="author.loginname">作者 {{ author.loginname }}
          </span> ·
          <span class="visit-count">{{ showData.reply_count }}次浏览</span> ·
          <span class="last-reply"
                v-if="showData">最后回复于{{ showData.last_reply_at  }}
          </span> ·
        </div>
        <div class="content"
             v-html="showData.content"></div>
        <!-- <Comments :comments="showData.replies"></Comments>
        <bottom-bar :topicId="showData.id"
                    :isCollect="showData.is_collect"
                    ></bottom-bar> -->
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import VueStar from 'vue-star'
// // 引入 取数据的模块
import {getTopicData} from '@/getdata/getTopic.js';
export default {
  components: {
    VueStar
  },
  name: 'Show',
  data () {
    return {
      showData: [],
    	author: [],
      // 主题分类
      tabs:{
        ask:'问答',
        job:'招聘',
        share:'分享' 
      }

    }
  }, 
   mounted: function () { 
     getTopicData(this.$route.params.id).then((response)=>{
     	console.log(response.data.data.content);
      this.showData = response.data.data;
     	this.author = response.data.data.author;

     })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

// 引入 公共样式
  @import '../assets/sass/base.scss';
  .show{
    margin-top: rem(90px);
    margin-bottom: rem(130px);
  }  
  .article-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #eff2f7;
  /*屏幕宽度小于450px的设备*/
  @media screen and (max-width: 1200px) {
    .article {
      width: 100%;
    }
  }
  /*屏幕宽度大于1200px的设备*/
  @media screen and (min-width: 1200px) {
    .article {
      width: 1200px;
    }
  }
  .article {
    margin: 0 auto;
    position: relative;
    height: 100%;
    .article-content {
      width: 100%;
      min-height: 100%;
      overflow: scroll;
      -webkit-overflow-scrolling: touch;
      overflow-scrolling: touch;
      padding-top: 48px;
      padding-bottom: 56px;
      .header {
        padding: 10px 15px 15px 15px;
        margin-bottom: 15px;
        background: #ffffff;
        font-size: 10px;
        border-bottom: 1px solid #d3dce6;
        line-height: 20px;
        .title {
          color: #1f2d3d;
          font-size: 20px;
          padding: 5px 0;
          word-wrap: break-word;
        }
        .top {
          background-color: #20a0ff;
          color: #ffffff;
          padding: 2px 5px;
          border-radius: 6px;
        }
        .good {
          color: #ff4949;
        }
      }
      .content {
        .markdown-text {
          padding: 25px 20px;
        }
      }
    }
  }
}
</style>
