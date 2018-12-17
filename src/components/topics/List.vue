<template>
  <div class="list">
    <!--第三步 loading 组件 -->
    <loading v-if="!items.length"></loading>
  <ul class="items">
  		<li class="item" v-for="item in items">
  			<img v-lazy="item.author.avatar_url" alt="">
  			<div class="tab">
  				<div class="mo" v-if="item.top">置顶</div>
  				<div class="mo" v-else-if="item.good">精华</div>
  				<div v-else>{{tabs[item.tab]}}</div>
  			</div>
  			<router-link :to="'/index/show/'+item.id" class="title">{{item.title}}</router-link>
  		</li>
  	</ul>
  </div>
</template>
 
<script>
// 第一步 引入 loading组件
import loading from '@/components/Loading';
export default {
  name: 'List',
  data () {
    return {
      // 主题分类
      tabs:{
      	ask:'问答',
      	job:'招聘',
      	share:'分享' 
      }
    } 
  },

  
  // 父组件通过 props 向下传递数据给子组件
  // 接收传下来的items数组
  props: ['items'],
  // 第二步 加载组件
  components:{
    loading
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // 引入 公共样式
  @import '../../assets/sass/base.scss';
	
	// 引入 主题列表样式
  @import '../../assets/sass/itemlist.scss';




</style>