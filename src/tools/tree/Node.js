/**
 * Created by huweijian on 2017/4/24.
 * @title
 */
export default class Node{
    constructor({data, left, right}){
        this.data = data;
        this.left = left;
        this.right = right;
    }

    /**
     * 显示保存的数据
     * @returns {*}
     */
    show(){
        return this.data;
    }
}
