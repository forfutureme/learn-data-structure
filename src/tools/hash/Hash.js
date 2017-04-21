/**
 * Created by huweijian on 2017/4/20.
 * @title
 */

import Simple from './motheds/Simple';
import Butter from './motheds/Better';

export default class Hash {
    constructor(length = 137){
        this.hashData = new Array(length);
        this.simple = new Simple(length);
        this.butter = new Butter(length);
    }

    /**
     * 生成hash码方法
     * @param str
     * @returns {number}
     */
    getHashCode(str){
        //return this.simple.createHashCode(str);
        return this.butter.createHashCode(str);
    }

    /**
     * 添加元素到散列表
     * @param item
     */
    put(item){
        this.hashData[this.getHashCode(item)] = item;
    }

    /**
     * 把key作为散列值，data作为值，存入散列表
     * @param key
     * @param data
     */
    putKey(key, data){
        this.hashData[this.getHashCode(key)] = data;
    }

    /**
     * 查找元素
     * @param key
     * @returns {*}
     */
    get(key){
        return this.hashData[this.getHashCode(item)];
    }


    /**
     * 显示散列表里的元素
     * @returns {string}
     */
    showHash(){
        let arr = [];
        for (let i = 0; i < this.hashData.length; i++){
            if (this.hashData[i] !== undefined) {
                arr.push(`${i} --> ${this.hashData[i]}`);
            }
        }
        return `该散列共${arr.length}个元素，分别是：${arr.join(',')}`;
    }

}