/**
 * Created by huweijian on 2017/4/4.
 * @title 基 mutation
 */

import * as typys from './mutation-type';

export default {
    [typys.JAVASCRIPT_DATA_TEST]: (state, test) => {
        state.test = test;
    }
}
