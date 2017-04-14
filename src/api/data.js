/**
 * Created by huweijian on 2017/4/11.
 * @title
 */
import fetch from './toFetch';

export default {
    /**
     * 获取代码文本
     * @param params
     * @returns {*}
     */
    getCodeText(params){
        return fetch(params);
    }
}