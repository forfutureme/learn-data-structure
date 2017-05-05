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
            component: resolve => require(['../views/page/array/Array.vue'], resolve)
        },
        {
            path: '/list',
            name: 'list',
            component: resolve => require(['../views/page/list/List.vue'], resolve)
        },
        {
            path: '/stack',
            name: 'stack',
            component: resolve => require(['../views/page/stack/Stack.vue'], resolve)
        },
        {
            path: '/queue',
            name: 'queue',
            component: resolve => require(['../views/page/queue/Queue.vue'], resolve)
        },
        {
            path: '/linkList',
            name: 'linkList',
            component: resolve => require(['../views/page/linkList/LinkList.vue'], resolve)
        },
        {
            path: '/dictionary',
            name: 'dictionary',
            component: resolve => require(['../views/page/dictionary/Dictionary.vue'], resolve)
        },
        {
            path: '/hash',
            name: 'hash',
            component: resolve => require(['../views/page/hash/Hash.vue'], resolve)
        },
        {
            path: '/set',
            name: 'set',
            component: resolve => require(['../views/page/set/Set.vue'], resolve)
        },
        {
            path: '/tree',
            name: 'tree',
            component: resolve => require(['../views/page/tree/Tree.vue'], resolve)
        }
    ]
});

/**
 * 每次路由跳转前 设置钩子 先获取数据 完了在跳转
 */
router.beforeEach((to, from, next) => {
    let href = to.name;
    // let typeStr =  Object.prototype.toString.call(href);
    if (href === 'index'){
        return next();
    }
    let map = {
        array(){
            makeMoreDispatch(href, ['arraySummary', 'dyadicArray'], next)
        },
        linkList(){
            makeMoreDispatch(href, ['node', 'loopLinkList', 'twoWayList', href], next);
        },
        defaults(){
            makeMoreDispatch(href, [href], next);
        }
    };
    (map[href] || map['defaults'])();

});

/**
 * 动态触发dispatch动作
 * @param href 目标url
 * @param arr 要触发的dispatch对应的参数
 * @param next 路由跳转
 */
function makeMoreDispatch(href, arr, next) {
    arr.forEach((name, index) => {
        store.dispatch(types.JAVASCRIPT_DATA_GLOBAL_CODE, {
            type: types[`JAVASCRIPT_DATA_${href.toLocaleUpperCase()}_CODE_SET`],
            name,
            next: index === 0 ? next : undefined
        });
    })
}

export default router;
