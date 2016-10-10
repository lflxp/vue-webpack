/**
 * Created by xiajing on 2016/10/10.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import { configRouter } from './router/router-config';
import './css/lib/bootstrap.min.css';
import './css/main.css';
//初始化
Vue.use(VueRouter);
const router = new VueRouter({
    //history : true
});
configRouter(router);
const App = Vue.extend({});//根組件
router.start(App, '#app');
window.router = router;