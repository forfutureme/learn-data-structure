/**
 * Created by huweijian on 2017/4/24.
 * @title
 */
export default class GetRandomNumber{
    constructor(obj = {total: 10, min: 10, max: 100}){
        let {
            total,
            min,
            max
        } = obj;
        this.total = total;
        this.min = min;
        this.max = max;
    }

    /**
     * 生成随机数据
     * @returns {Array}
     */
    getNumber(){
        let arr = [];
        for (let i = 0; i < this.total; i++){
            arr.push(this.min + parseInt(Math.random()*(this.max - this.min), 10))
        }
        return arr;
    }
}
