<template>
  <div id="app">
    <router-view/>
    <!-- <p>{{$route.path}}</p> -->
    <!-- 底部导航 -->
    <nav class="footer">
      <ul>
        <router-link to="/index" tag="li">
          <span class="iconfont icon-homepage"></span>
          <p>首页</p>
        </router-link>
        <!-- <router-link to="/gzh" tag="li"> -->
          <!-- <span class="iconfont icon-qrcode"></span> -->
          <!-- <p>公众号</p> -->
          <li>
            <circle-menu type="middle-around" :number="4" class="bb"  animate="animated circle" mask='white' circle>
              <button type="button" slot="item_btn"></button>
              <a slot="item_1" class="fa fa-twitter fa-lg">关于</a>
              <a slot="item_2" class="fa fa-weixin fa-lg">关注</a>
              <a slot="item_3" class="fa fa-weibo fa-lg">订阅</a>
              <a slot="item_4" class="fa fa-github fa-lg">发布</a>
            </circle-menu>
          </li>
        <!-- </router-link> -->
        <router-link to="/me" tag="li">
          <span class="iconfont icon-addressbook"></span>
          <p>我们</p>
        </router-link> 
      </ul>      
    </nav>
  </div>
</template>

<script>
import CircleMenu from 'vue-circle-menu'
export default {
  components: {
    CircleMenu
  },
  name: 'App'
}
</script>

<style lang="scss">
  // 引入 公共样式
  @import './assets/sass/base.scss';
  .bb{
    width:rem(154px);
    margin-top:rem(32px);
  }
  // 底部导航
  nav.footer{
    position: fixed;
    left:0;
    bottom: 0;
    width: 100%;
    height: rem(120px);
    background: #315f36;
    ul{
      display: flex;
      
      li{
        width: 33%;
        color:#fff;
        font-weight: bold;
        span{
          display: block;
          font-size: rem(70px);
          text-align: center;
        }
        p{
          text-align: center;
          font-size: rem(30px);
          line-height: rem(30px);
        }
      }
      .router-link-active{
        color:#09c;
      }
    }
  }

</style>
