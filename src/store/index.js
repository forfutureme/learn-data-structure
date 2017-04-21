/**
 * Created by huweijian on 2017/4/4.
 * @title store
 */

import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import createLogger from 'vuex/dist/logger';

import arrayStore from './modules/arrayStore';
import list from './modules/list';
import linkList from './modules/linkList';
import stack from './modules/stack';
import queue from './modules/queue';
import dictionary from './modules/dictionary';
import hash from './modules/hash';



import navContent from '../data/navTitle';

Vue.use(Vuex);

const debug = ENV !== 'PRO';

/**
 * 输出 store
 */
export default new Vuex.Store({
    state: {
        navTitle: navContent,
        warning: {
            show: false,
            time: 1500,
            msg: ''
        },
        loading: false
    },
    actions,
    mutations,
    getters,
    modules: {
        arrayStore,
        list,
        linkList,
        stack,
        queue,
        dictionary,
        hash
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

