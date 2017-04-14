/**
 * Created by huweijian on 2017/4/4.
 * @title 基 mutation
 */

import * as types from './mutation-type';

export default {
    /**
     * 控制警告弹层是否显示
     * @param state
     * @param show
     * @param time
     * @param msg
     */
    [types.JAVASCRIPT_DATA_GLOBAL_WARNING]: (state, {show, time = 1500, msg = ''}) => {
        state.warning.show = show;
        state.warning.time = time;
        state.warning.msg = msg;
    },
    /**
     * 控制loading弹层是否显示
     * @param state
     * @param loading
     */
    [types.JAVASCRIPT_DATA_GLOBAL_LOADING]: (state, loading) => {
        state.loading = loading;
    }
}
