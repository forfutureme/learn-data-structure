/**
 * Created by huweijian on 2017/4/6.
 * @title
 */
import Node from './Node';
export default class LinkList {
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