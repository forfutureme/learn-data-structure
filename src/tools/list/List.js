/**
 * Created by huweijian on 2017/4/14.
 * @title
 */
export default class List{
    constructor(){
        this.listSize = 0;      //列表长度
        this.pos = 0;           //当前位置
        this.dataStore = [];    //存放列表元素
    }

    /**
     * 添加列表元素方法 | listSize原来的位置写入元素，之后listSize值加一
     * @param element
     */
    append(element){
        this.dataStore[this.listSize++] = element;
    }

    /**
     * 在列表中查找某一元素
     * @param element
     * @returns {number}
     */
    find(element){
        for (let i = 0; i < this.dataStore.length; i++ ){
            if (this.dataStore[i] == element){
                return i;
            }
        }
        return -1;
    }

    /**
     * 删除列表元素方法
     * @param element
     * @returns {boolean}  true 删除成功， false 删除失败
     */
    remove(element){
        let index = this.find(element);
        if (!~index){
            this.dataStore.splice(index, 1);
            --this.listSize;
            return true
        }
        return false

    }

    /**
     * 列表中有多少个元素
     */
    length(){
        return this.listSize;
    }

    /**
     * 显示列表中的元素
     */
    toString(){
        return this.dataStore;
    }

    /**
     * 向列表中插入一个元素
     * @param element
     * @param after
     * @returns {boolean} true 插入成功， false 插入失败
     */
    insert(element, after){
        let index = this.find(after);
        if (!~index){
            this.dataStore.splice(index+1, 0, element);
            ++this.listSize;
            return true;
        } else {
            return false;
        }
    }

    /**
     * 清空列表中所有的元素
     */
    clear(){
        this.dataStore.length = 0;
        this.listSize = this.pos = 0;
    }

    /**
     * 判断给定值是否在列表中
     * @param element
     * @returns {boolean} true 存在| false 不存在
     */
    contains(element){
        for (let i = 0; i < this.dataStore.length; i++){
            if (this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    }

    /**
     * 移动到列表首位
     */
    front(){
        this.pos = 0;
    }

    /**
     * 移动到列表末尾
     */
    end(){
        this.pos = this.listSize - 1;
    }

    /**
     * 移动到上一位置
     */
    prev(){
        --this.listSize;
    }

    /**
     * 移动到下一位置
     */
    next(){
        if (this.pos < this.listSize - 1){
            ++this.pos
        }
    }

    /**
     * 显示当前位置
     */
    currPos(){
        return this.pos;
    }

    /**
     * 移动到指定位置
     * @param position
     */
    moveTo(position){
        this.pos = position;
    }

    /**
     * 返回当前列表元素
     */
    getElement(){
        return this.dataStore[this.pos];
    }

    /**
     * 是否具有下一个元素
     */
    hasNext(){
        return this.pos < this.listSize;
    }

    /**
     * 是否具有上一个元素
     */
    hasPrev(){
        return this.pos > 0
    }

}
