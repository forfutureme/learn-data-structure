/**
 * Created by huweijian on 2017/4/9.
 * @title
 */
import fetch from 'isomorphic-fetch';
import * as types from '../store/mutation-type';
import store from '../store/index';

/**
 * 封装fetch
 * @param params
 */
export default function toFetch(params) {
    //开启loading弹层
    store.commit(types.JAVASCRIPT_DATA_GLOBAL_LOADING, true);
    let {
        url = 'http://localhost:3000/m.api',
        type = 'POST',
        contextType = 'application/x-www-form-urlencoded'
    } = {};

    if (!url){
        throw ('请求参数错误, url不能为空')
    }

    return fetch(url, {
        method: type,
        headers: {
            'Content-Type': contextType
        },
        body: JSON.stringify(params)
    })
        .then(response => response.json())
        .then(res => {
            store.commit(types.JAVASCRIPT_DATA_GLOBAL_LOADING, false);
            if (res.meta.error == 200){
                return res.result;
            } else {
                store.commit(types.JAVASCRIPT_DATA_GLOBAL_WARNING, {
                    show: true,
                    time: 3000,
                    msg: res.meta.msg
                });
                return {};
            }
        })
        .catch(function (err) {
            console.log(err);
            store.commit(types.JAVASCRIPT_DATA_GLOBAL_LOADING, false);
            store.commit(types.JAVASCRIPT_DATA_GLOBAL_WARNING, {
                show: true,
                time: 3000,
                msg: `未能成功请求接口数据${err.message}` || `请求接口失败${JSON.stringify(err)}`
            });
            // console.log(err.meta.msg);
            // return Promise.reject();
            return {}
        })
}
