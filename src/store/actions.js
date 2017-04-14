/**
 * Created by huweijian on 2017/4/4.
 * @title
 */

import * as types from './mutation-type';
import Data from '../api/data';

export default {
    /**
     * 统一封装获取code文本请求
     * @param commit
     * @param type
     * @param name
     * @param next
     */
    [types.JAVASCRIPT_DATA_GLOBAL_CODE]: ({commit}, {type, name, next}) => {
        Data
            .getCodeText({
                '_mt': 'text',
                query: {
                    name
                }
            })
            .then(function (result) {
                let text = result.text;
                commit(types[type], {
                    name,
                    text
                });
                next && next();
            })
    }
}

