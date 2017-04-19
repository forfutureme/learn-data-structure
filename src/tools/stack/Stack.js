/**
 * Created by huweijian on 2017/4/17.
 * @title
 */
export default class Stack {
    constructor(){
        this.dataStore = [];
        this.top = 0;
    }

    /**
     * 入栈
     * @param element
     */
    push(element){
        this.dataStore[this.top++] = element;
    }

    /**
     * 出栈
     * @returns {*}
     */
    pop(){
        return this.dataStore[--this.top];
    }

    /**
     * 预览
     * @returns {*}
     */
    peek(){
        return this.dataStore[this.top - 1];
    }

    /**
     * 返回栈内元素总数
     * @returns {number}
     */
    length(){
        return this.top;
    }
    /**
     * 清空栈
     */
    clear(){
        this.top = 0;
        this.dataStore.length = 0;
    }
}
