/**
 * Created by huweijian on 2017/4/1.
 * @title
 */
import Vue from 'vue';
import router from './router/index';
import store from './store/index';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import './assets/stylus/style.styl';


//结合vuex和路由
sync(store, router);

export const app = new Vue({
    router,
    store,
    ...App
});

document.addEventListener('DOMContentLoaded', function () {
    app.$mount('#app');
});
