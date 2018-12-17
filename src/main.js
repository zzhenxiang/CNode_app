import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueAMap from 'vue-amap';
import { lazyAMapApiLoaderInstance } from 'vue-amap';



// 引入懒加载 组件
import VueLazyload from 'vue-lazyload'
import store from './store/store';

Vue.use(Vuex);
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 
  'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor',
  'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});
lazyAMapApiLoaderInstance.load().then(() => {
  // your code ...
  this.map = new AMap.Map('amapContainer', {
    center: new AMap.LngLat(121.59996, 31.197646)
  });
});


// 懒加载 配置
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // 当你的图片请求失败，就会用这里的图片代替
  error: require('../static/images/touxiang.png'),
  // 当你的图片正在请求的时候，就用这里的图片代替
  loading: require('../static/images/txLoading.gif'),
  attempt: 1
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
