/**
 * Created by huweijian on 2017/4/10.
 * @title
 */
import Node from './Node';
export default class NoHeadLinkList{
    constructor({first = 'first', mode = 'normal'}){
        this.first = first;
        this.mode = mode;
        this.linkList = new Node(first, mode);
        if (mode == 'loop'){
            this.linkList.next = this.linkList;
        }
    }

    consoleLink(){
        let currNode = this.linkList;
        let arr = [];
        while (currNode.element != arr[0]){
            arr.push(currNode.element);
            currNode = currNode.next;
        }
        console.log(arr);
    }

    /**
     * 查找某项
     * @param item
     * @returns {null|Node}
     */
    findNode(item){
        let currNode = this.linkList.next || this.linkList;
        let nodeArr = [];
        while (currNode.element != item){
            if (nodeArr.indexOf(currNode.element) > -1){
                throw (`搜索完全部链表没找到目标${item}项`);
            }
            nodeArr.push(currNode.element);
            currNode = currNode.next;
        }
        return currNode;
    }

    /**
     * 查找上一项
     * @param item
     * @returns {null|Node}
     */
    findPrevNode(item){
        let currNode = this.linkList.next || this.linkList;
        let nodeArr = [];
        while (currNode.next != null && currNode.next.element != item){
            if (nodeArr.indexOf(currNode.element) > -1){
                throw (`搜索完全部链表没找到目标${item}项, 删除操作无效`);
            }
            nodeArr.push(currNode.element);
            currNode = currNode.next;
        }
        return currNode;
    }

    /**
     * 插入新的项
     * @param newItem
     * @param element
     */
    insertNode(newItem, element){
        let newNode = new Node(newItem, this.mode);
        let currNode;
        try {
            currNode = this.findNode(element);
        } catch (ex){
            console.warn(`${ex}，默认插入到${this.linkList.next ? this.linkList.next.element : this.linkList.element}项后面`);
            currNode = this.linkList.next || this.linkList;
        }
        newNode.next = currNode.next;
        currNode.next = newNode;

    }

    /**
     * 删除某项
     * @param item
     */
    removeNode(item){
        let prevNode;
        try {
            prevNode = this.findPrevNode(item);
        } catch (ex){
            console.warn(`${ex}`);
        }
        if (prevNode){
            prevNode.next = prevNode.next.next;
        }
        if (this.linkList.element == item){
            this.linkList = this.linkList.next;
        }
    }
}