/**
 * Created by huweijian on 2017/4/9.
 * @title
 */
import fetch from 'isomorphic-fetch';

/**
 * 封装fetch
 * @param art
 */
export default function toFetch(params) {
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
            if (res.meta.error == 200){
                return res.result;
            } else {
                return res.meta.msg;
            }
        })
        .catch(function (err) {
            console.log(err.meta.msg);
        })
}
