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
    add(key, value){}

    /**
     * 查找元素
     * @param key
     */
    find(key){}

    /**
     * 删除元素
     * @param key
     */
    remove(key){}

    /**
     * 显示所有元素
     */
    showAll(){}

    /**
     * 获取字典元素个数
     */
    count(){}

    /**
     * 清空字典
     */
    clear(){}

    /**
     * 排序输出字典
     */
    showSort(){}
}

/*************************/
class dictionary{
    /**
     * 增加元素
     * @param key
     * @param value
     */
    add(key, value){
        this.dataStore[key] = value;
    }
}

/*************************/
class dictionary{
    /**
     * 查找元素
     * @param key
     * @returns {*}
     */
    find(key){
        return this.dataStore[key];
    }
}

/*************************/
class dictionary{
    /**
     * 删除元素
     * @param key
     */
    remove(key){
        delete this.dataStore[key];
    }
}

/*************************/
class dictionary{
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
}

/*************************/
class dictionary{
    /**
     * 获取字典元素个数
     * @returns {number}
     */
    count(){
        return Object.keys(this.dataStore).length;
    }
}

/*************************/
class dictionary{
    /**
     * 清空字典
     */
    clear(){
        Object.keys(this.dataStore).forEach(item => {
            delete this.dataStore[key];
        })
    }
}

/*************************/
class dictionary{
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

