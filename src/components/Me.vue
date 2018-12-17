<template>
  <div class="me">
	<h1>关于我们</h1>
    <div class="amap-wrapper">

        <!-- <el-amap ref="map" vid="amapDemo" :amap-manager="AMapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo"> -->
        <el-amap  vid="amapDemo" :zoom="zoom" :plugin="plugin" :center="center" class="amap-demo">
        <el-amap-circle v-for="circle in circles" :center="circle.center" :radius="circle.radius" :fill-opacity="circle.fillOpacity" :events="circle.events"></el-amap-circle>
      </el-amap>
    </div>
  </div>
</template>

<script>

    import { AMapManager } from 'vue-amap';
export default {




  name: 'Me',
  data () {
    return {

            
          AMapManager,
          zoom: 15,
          center: [121.5273285, 31.21515044],
          events: {
            init: (o) => {
              console.log(o.getCenter())
              console.log(this.$refs.map.$$getInstance())
              o.getCity(result => {
                console.log(result)
              })
            },
            'moveend': () => {
            },
            'zoomchange': () => {
            },
            'click': (e) => {
              alert('map clicked');
            }
          },
          plugin: ['ToolBar', {
            pName: 'MapType',
            defaultType: 0,
            events: {
              init(o) {
                console.log(o);
              }
            }
          }],



          circles: [
            {
              center: [121.5273285, 31.21515044],
              radius: 200,
              fillOpacity: 0.5,
              events: {
                click: () => {
                  alert('关于我们');
                }
              }
            }
            ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.amap-wrapper {
  width: 100%;
  height: 600px;
}
</style>
