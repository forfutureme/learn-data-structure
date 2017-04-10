/**
 * Created by huweijian on 2016/12/19.
 * @title
 */

let list = require('./list/list');
let text = require('./readCodeText/readCodeText');


/**
 * 定义处理数据接口类
 * @param query
 * @constructor
 */
function DataMethod(query) {
    this.query = query;
}

/**
 * 增加src4接口返回
 * @returns {{meta, result}}
 */
DataMethod.prototype.api = function () {
    return list(this.query);
};

DataMethod.prototype.text = function () {
    return text(this.query.name);
};


module.exports = DataMethod;