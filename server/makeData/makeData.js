/**
 * Created by huweijian on 2016/12/19.
 * @title
 */

let DataMethod = require('./dataMethod');

/**
 * 分析接口参数执行对应获取数据放方法
 * @param params
 * @param callback
 */
function analysisApi(params, callback) {
    let _mt = params['_mt'];
    let query = params['query'];
    let method = new DataMethod(query);
    if (method[_mt]){
        callback(null, method[_mt]());
    } else {
        callback({
            meta: {
                error: 500,
                msg: '无对应方法'
            },
            result: null
        })
    }
}

/**
 * 返回promise型接口分类方法
 * @param param
 * @returns {Promise}
 */
module.exports = function(param) {
    return new Promise(function (resolve, reject) {
        analysisApi(param, function (error, data) {
            if (error){
                reject(error)
            } else{
                resolve(data);
            }
        })
    })
};
