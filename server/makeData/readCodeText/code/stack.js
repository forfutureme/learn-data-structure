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
     */
    push(){}

    /**
     * 出栈
     */
    pop(){}

    /**
     * 预览
     */
    peek(){}

    /**
     * 返回栈内元素总数
     */
    length(){}

    /**
     * 清空栈
     */
    clear(){}
}


/**************************/
class Stack {
    /**
     * 入栈
     * @param element
     */
    push(element){
        this.dataStore[this.top++] = element;
    }
}

/***********************/
class Stack {
    /**
     * 出栈
     * @returns {*}
     */
    pop(){
        return this.dataStore[--this.top];
    }
}

/*************************/
class Stack {
    /**
     * 预览
     * @returns {*}
     */
    peek(){
        return this.dataStore[this.top - 1];
    }
}

/*********************/
class Stack {
    /**
     * 返回栈内元素总数
     * @returns {number}
     */
    length(){
        return this.top;
    }
}

/*******************/
class Stack {
    /**
     * 清空栈
     */
    clear(){
        this.top = 0;
        this.dataStore.length = 0;
    }
}