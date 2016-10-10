<template>
 <nav-title :title.sync="title"></nav-title>
 <div class="padTop">
  点击进入<a v-link="{ path: '/testTwo' }">下一页</a>
 </div>
</template>
<script>
 import navTitle from './publicComponent/navTtile.vue'
export default{
 //组件
 components:{
    navTitle:navTitle
 },
 data:function(){
  return{
   title:'第一页'
  }
 }
}
</script>