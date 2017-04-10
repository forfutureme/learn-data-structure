/**
 * Created by huweijian on 2017/4/10.
 * @title
 */
import Node from './Node';
export default class LinkList {
    /**
     * @param first {string} 表头val值 可以是任意字符串 默认值是'haad'
     * @param mode {string} 标示当前链表模式 可选值有 normal(普通链表) | twoWay(双向链表) | loop(循环链表) 默认值是'normal'
     */
    constructor({first = 'head', mode = 'normal'}) {
        this.first = first;
        this.mode = mode;
        this.head = new Node(first, mode);
        if (this.mode == 'loop') {
            this.head.next = this.head;
        }
    }

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

    /**
     * 查找链表最后一项
     * @returns {Node}
     */
    findLastNode(){
        let currNode = this.head;
        while (currNode.next != null){
            currNode = currNode.next;
        }
        return currNode;
    }

    /**
     * 查找目标项的上一个 (双向链表无用)
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
        if (this.mode == 'twoWay') {
            newNode.next = currNode.next;
            newNode.previous = currNode;
            currNode.next = newNode;

        } else {
            newNode.next = currNode.next;
            currNode.next = newNode;
        }

    }

    /**
     * 删除某一项
     * @param item
     */
    removeNode(item){
        if (this.mode != 'twoWay') {
            let prevNode = this.findPrevNode(item);
            if (prevNode.next != null){
                prevNode.next = prevNode.next.next;
            }
        } else {
            let currNode = this.findNode(item);
            if (currNode.next != null){
                currNode.previous.next = currNode.next;
                currNode.next.previous = currNode.previous;
            } else {
                currNode.previous.next = null;
            }
            currNode.next = null;
            currNode.previous = null;
        }

    }


    /**
     * 显示链表所有项(包括表头)
     */
    consoleLink(){
        let arr = [];
        let currNode = this.head;
        if (this.mode == 'loop') {
            while (currNode.next != null && arr.indexOf(currNode.next.element) == -1){
                arr.push(currNode.next.element);
                currNode = currNode.next;
            }
        } else {
            while (currNode.next != null){
                arr.push(currNode.next.element);
                currNode = currNode.next;
            }
        }
        console.log(arr);
    }

}

