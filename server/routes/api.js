/**
 * Created by huweijian on 2016/12/13.
 * @title 接口路由
 */

let tools = require('../tools/tools');
let makeData = require('../makeData/makeData');

/**
 * 请求接口路由
 * @param req
 * @param res
 */
function api(req, res) {
    let body = req.body;

    // console.log(body, req);
    // console.log(tools.isEmptyObj(body));
    if (!tools.isEmptyObj(body)) {
        let param , data;
        for (let key in body){
            if (!param){
                param = JSON.parse(key);
            }
        }
        // console.log(param);
        console.log(makeData(param));
        makeData(param)
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                console.log(err);
                res.json(err);
            });
    } else {
        res.json([
            {
                id: 0,
                text: '没有'
            },
            {
                id: 1,
                text: '内容'
            }
        ])
    }
}

module.exports = api;