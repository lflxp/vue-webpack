<template>
    <nav class="navbar navInfo navbar-fixed-top">
        <div class="titleBack initHeight"><img :src="backImg" @click="btnBack"/></div>
        <div class="login-nav"> {{title}}  </div>
    </nav>
</template>
<script>
    import backImg from '../../image/back.png'
    export default {
        props:['title'],//获取父组件传过来的值
        data:function(){
           return{
               backImg:backImg
           }
        },
        methods:{
            btnBack:function(){
                router.go(window.history.back())
            }
        }
    }
</script>