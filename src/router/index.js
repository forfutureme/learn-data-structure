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
            name: 'index',
            component: resolve => require(['../views/index.vue'], resolve)
        },
        {
            path: '/array',
            name: 'array',
            component: resolve => require(['../views/page/array/Array.vue'], resolve),
            beforeEnter(to, from, next){
                store.dispatch(types.JAVASCRIPT_DATA_GLOBAL_CODE, {
                    type: types.JAVASCRIPT_DATA_ARRAY_CODE_SET,
                    name: 'arraySummary',
                    next
                });
                store.dispatch(types.JAVASCRIPT_DATA_GLOBAL_CODE, {
                    type: types.JAVASCRIPT_DATA_ARRAY_CODE_SET,
                    name: 'dyadicArray'
                })
            }
        },
        {
            path: '/list',
            name: 'list',
            component: resolve => require(['../views/page/list/List.vue'], resolve),
            beforeEnter(to, from, next){
                store.dispatch(types.JAVASCRIPT_DATA_GLOBAL_CODE, {
                    type: types.JAVASCRIPT_DATA_LIST_CODE_SET,
                    name: 'list',
                    next
                });
            }
        },
        {
            path: '/stack',
            name: 'stack',
            component: resolve => require(['../views/page/stack/Stack.vue'], resolve),
            beforeEnter(to, from, next){
                store.dispatch(types.JAVASCRIPT_DATA_GLOBAL_CODE, {
                    type: types.JAVASCRIPT_DATA_STACK_CODE_SET,
                    name: 'stack',
                    next
                });
            }
        },
        {
            path: '/queue',
            name: 'queue',
            component: resolve => require(['../views/page/queue/Queue.vue'], resolve),
            beforeEnter(to, from, next){
                store.dispatch(types.JAVASCRIPT_DATA_GLOBAL_CODE, {
                    type: types.JAVASCRIPT_DATA_QUEUE_CODE_SET,
                    name: 'queue',
                    next
                });
            }
        },
        {
            path: '/linkList',
            name: 'linkList',
            component: resolve => require(['../views/page/linkList/LinkList.vue'], resolve),
            beforeEnter(to, from, next){
                store.dispatch(types.JAVASCRIPT_DATA_GLOBAL_CODE, {
                    type: types.JAVASCRIPT_DATA_LINK_CODE_SET,
                    name: 'node',
                    next
                });
                store.dispatch(types.JAVASCRIPT_DATA_GLOBAL_CODE, {
                    type: types.JAVASCRIPT_DATA_LINK_CODE_SET,
                    name: 'linkList'
                });
                store.dispatch(types.JAVASCRIPT_DATA_GLOBAL_CODE, {
                    type: types.JAVASCRIPT_DATA_LINK_CODE_SET,
                    name: 'loopLinkList'
                });
                store.dispatch(types.JAVASCRIPT_DATA_GLOBAL_CODE, {
                    type: types.JAVASCRIPT_DATA_LINK_CODE_SET,
                    name: 'twoWayList'
                });
            }
        },
        {
            path: '/dictionary',
            name: 'dictionary',
            component: resolve => require(['../views/page/dictionary/Dictionary.vue'], resolve),
            beforeEnter(to, from, next){
                store.dispatch(types.JAVASCRIPT_DATA_GLOBAL_CODE, {
                    type: types.JAVASCRIPT_DATA_DICTIONARY_CODE_SET,
                    name: 'dictionary',
                    next
                });
            }
        }
    ]
});

export default router;
