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

import linkList from './modules/linkList';


import navContent from '../data/navTitle';

Vue.use(Vuex);

const debug = ENV !== 'PRO';

/**
 * 输出 store
 */
export default new Vuex.Store({
    state: {
        navTitle: navContent
    },
    actions,
    mutations,
    getters,
    modules: {
        linkList
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
})

