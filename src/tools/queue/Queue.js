/**
 * Created by huweijian on 2017/4/19.
 * @title
 */
export default class Queue {
    constructor(){
        this.dataStore = [];    //储存队列数组
    }

    /**
     * 向对尾添加一个元素
     * @param element
     */
    enqueue(element){
        this.dataStore.push(element)
    }

    /**
     * 从对首删除一个元素
     */
    dequeue(){
        return this.dataStore.shift();
    }

    /**
     * 获取对首元素
     */
    front(){
        return this.dataStore[0];
    }

    /**
     * 获取对尾元素
     */
    back(){
        return this.dataStore[this.dataStore.length - 1];
    }

    /**
     * 显示队列所有元素
     */
    toString(){
        return this.dataStore.join('\n');
    }

    /**
     * 判断队列是否为空
     */
    empty(){
        return this.dataStore.length == 0;
    }
}
