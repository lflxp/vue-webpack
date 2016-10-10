<template>
    <nav-title :title.sync="title"></nav-title>
    <div class="padTop">
        {{message}}<a @click="back">返回</a>{{nextInfo}}
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
                title:'第二页',
                message:'啦啦啦！',
                nextInfo:'上一页'
            }
        },
      methods:{
          back:function(){
              router.go(window.history.back())
          }
      }
    }
</script>