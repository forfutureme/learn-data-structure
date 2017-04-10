/**
 * Created by huweijian on 2017/4/9.
 * @title 普通链表
 */

import Node from './Node';
export default class LinkList {
    constructor({first = 'head', mode = 'normal'}) {
        this.first = first;
        this.mode = mode; //模式 默认简单链表
        this.head = new Node(first, mode); //表头
    }

    /**
     * 查找目标链值元素
     */
    findNode() {
    }

    /**
     * 查找目标上一个链值元素
     */
    findPrevNode() {
    }

    /**
     * 插入新的项
     */
    insertNode() {
    }

    /**
     * 删除某一项
     */
    removeNode() {
    }

    /**
     * 显示链表所有项(包括表头)
     */
    consoleLink() {
    }
}

/**************/
export default class LinkList{
    /**
     * 查询列表的某项
     * @param item
     * @returns {Node}
     */
    findNode(item) {
        let currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }
}

/**************/
export default class LinkList{
    /**
     * 插入新的项
     * @param newItem
     * @param item
     */
    insertNode(newItem, item) {
        let newNode = new Node(newItem);
        let currNode;
        try {
            currNode = this.findNode(item);
        } catch (ex) {
            console.warn(`链表中不存在${item}项, 默认将${newItem}插入到head后面`);
            currNode = this.head;
        }
        if (!currNode){
            return;
        }
        newNode.next = currNode.next;
        currNode.next = newNode;
    }
}

/**************/
export default class LinkList{
    /**
     * 查找目标项的上一个
     * @param item
     * @returns {Node}
     */
    findPrevNode(item){
        let currNode = this.head;
        while (currNode.next != null && currNode.next.element != item){
            currNode = currNode.next;
        }
        return currNode;
    }
}

/**************/
export default class LinkList{
    /**
     * 删除某一项
     * @param item
     */
    removeNode(item){
        let prevNode = this.findPrevNode(item);
        if (prevNode.next != null){
            prevNode.next = prevNode.next.next;
        }
    }
}

/**************/
export default class LinkList{
    /**
     * 显示链表所有项(包括表头)
     */
    consoleLink(){
        let arr = [];
        let currNode = this.head;
        while (currNode.next != null){
            arr.push(currNode.next.element);
            currNode = currNode.next;
        }
        console.log(arr);
    }
}


/**************/
//测试代码
let list = new LinkList();
list.insertNode("Conway", "head");
list.insertNode("Russellville", "Conway");
list.insertNode("Carlisle", "Russellville");
list.insertNode("Alma", "Carlisle");
list.consoleLink();
list.removeNode('Russellville');
list.consoleLink();