/**
 * Created by huweijian on 2017/4/20.
 * @title
 */
export default class Dictionary {
    constructor(){
        this.dataStore = [];
    }

    /**
     * 增加元素
     * @param key
     * @param value
     */
    add(key, value){
        this.dataStore[key] = value;
    }

    /**
     * 查找元素
     * @param key
     * @returns {*}
     */
    find(key){
        return this.dataStore[key];
    }

    /**
     * 删除元素
     * @param key
     */
    remove(key){
        delete this.dataStore[key];
    }

    /**
     * 显示所有元素
     * @returns {string}
     */
    showAll(){
        let arr = [];
        Object.keys(this.dataStore).forEach(item => {
            arr.push(`${item} --> ${this.dataStore[item]}`)
        });
        return arr.join(',');
    }

    /**
     * 获取字典元素个数
     * @returns {number}
     */
    count(){
        return Object.keys(this.dataStore).length;
    }

    /**
     * 清空字典
     */
    clear(){
        Object.keys(this.dataStore).forEach(item => {
            delete this.dataStore[key];
        })
    }

    /**
     * 排序输出字典
     * @param func
     * @returns {string}
     */
    showSort(func){
        let arr = [];
        Object.keys(this.dataStore).sort(func).forEach(item => {
            arr.push(`${item} --> ${this.dataStore[item]}`)
        });
        return arr.join(',');
    }
}