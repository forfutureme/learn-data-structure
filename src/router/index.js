/**
 * Created by huweijian on 2017/4/4.
 * @title 路由
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';
import * as types from '../store/mutation-type';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({y: 0}),
    routes: [
        {
            path: '/',
            component: resolve => require(['../views/index.vue'], resolve)
        },
        {
            path: '/linkList',
            name: 'linkList',
            component: resolve => require(['../views/page/linkList/LinkList.vue'], resolve),
            beforeEnter(to, from, next){
                store.dispatch(types.JAVASCRIPT_DATA_LINK_CODE, {
                    name: 'node',
                    next
                });
                store.dispatch(types.JAVASCRIPT_DATA_LINK_CODE, {
                    name: 'linkList'
                });
                store.dispatch(types.JAVASCRIPT_DATA_LINK_CODE, {
                    name: 'loopLinkList'
                });
                store.dispatch(types.JAVASCRIPT_DATA_LINK_CODE, {
                    name: 'twoWayList'
                });
            }
        }
    ]
});

export default router;
