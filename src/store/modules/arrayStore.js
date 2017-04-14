/**
 * Created by huweijian on 2017/4/11.
 * @title
 */
import * as types from '../mutation-type';


const state = {
    name: '数组',
    navs: [
        {
            name: '概述',
            id: 'Summarys'
        },
        {
            name: '二维数组',
            id: 'DyadicArray'
        }
    ],
    activityNav: 'Summarys',
    code: {
        arraySummary: '',
        dyadicArray: ''
    }
};

const getters = {};

const actions = {

};

const mutations = {
    /**
     * 激活选中二级菜单
     * @param state
     * @param nav
     */
    [types.JAVASCRIPT_DATA_ARRAY_ACTIVITY_NAV]: (state, nav) => {
        state.activityNav = nav
    },
    /**
     * 写入代码文本到state
     * @param state
     * @param name
     * @param text
     */
    [types.JAVASCRIPT_DATA_ARRAY_CODE_SET]: (state, {name, text}) => {
        state.code[name] = text;
    }
};

/**
 * 数组store
 */
export default {
    state,
    getters,
    actions,
    mutations
}
