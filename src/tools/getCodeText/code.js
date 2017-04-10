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
