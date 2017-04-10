/**
 * Created by huweijian on 2017/4/4.
 * @title 链表
 */
import * as types from '../mutation-type';
import LinkListApi from '../../api/linkList';


const state = {
    name: '链表',
    navs: [
        {
            name: '概述',
            id: 'Summarys'
        },
        {
            name: '创建链表',
            id: 'Created',
            children: [
                {
                    name: '创建简单链表',
                    id: 'SimpleLink',
                    father: 'Created'
                },
                {
                    name: '双向链表',
                    id: 'TwoWayLink',
                    father: 'Created'
                },
                {
                    name: '循环链表',
                    id: 'LoopLink',
                    father: 'Created'
                }
            ]
        },
        {
            name: '实例应用',
            id: 'Examples'
        }
    ],
    activityNav: 'Created',
    activityNavChild: 'TwoWayLink',
    code: {
        node: '',
        linkList: '',
        loopLinkList: '',
        twoWayList: ''
    }
};

const getters = {
    getLinkState: state => state
};

const actions = {
    /**
     * 请求代码文本
     * @param commit
     * @param name
     */
    [types.JAVASCRIPT_DATA_LINK_CODE]: ({commit}, {name, next}) => {
        LinkListApi
            .getCodeText({
                '_mt': 'text',
                query: {
                    name
                }
            })
            .then(function (result) {
                let text = result.text;
                commit(types.JAVASCRIPT_DATA_LINK_CODE_SET, {
                    name,
                    text
                });
                next && next();
            })

    }
};

const mutations = {
    [types.JAVASCRIPT_DATA_LINK_INDEX]: (state, index) => {
        state.index = index;
    },
    /**
     * 切换选中nav
     * @param state
     * @param id
     */
    [types.JAVASCRIPT_DATA_LINK_ACTIVITY_NAV]: (state, id) => {
        state.activityNav = id;
        state.activityNavChild = '';
    },
    /**
     * 选中二级nav
     * @param state
     * @param id
     */
    [types.JAVASCRIPT_DATA_LINK_ACTIVITY_NAV_CHILD]: (state, id) => {
        state.activityNavChild = id;
    },
    /**
     * 获取对应代码写入到state
     * @param state
     * @param name
     * @param text
     */
    [types.JAVASCRIPT_DATA_LINK_CODE_SET]: (state, {name, text}) => {
        state.code[name] = text;
    }
};

/**
 * 输出链表模块
 */
export default {
    state,
    getters,
    actions,
    mutations
}

