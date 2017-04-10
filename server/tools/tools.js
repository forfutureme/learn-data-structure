/**
 * Created by huweijian on 2016/12/19.
 * @title
 */

/**
 * 判断对象是否是空对象
 * @param obj
 * @returns {boolean}
 */
function isEmptyObj(obj) {
    let isEmpty = true;
    for (let key in obj){
        isEmpty = false;
    }
    return isEmpty;
}

module.exports = {
    isEmptyObj: isEmptyObj
};
