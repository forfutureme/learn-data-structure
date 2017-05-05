/************************************/
//ZWF
/************************************/
/**
 * Created by huweijian on 2017/4/24.
 * @title
 */
export default class Node{
    constructor({data, left, right}){
        this.data = data;
        this.left = left;
        this.right = right;
    }

    /**
     * 显示保存的数据
     * @returns {*}
     */
    show(){
        return this.data;
    }
}

/***********************************/
/**
 * Created by huweijian on 2017/4/24.
 * @title 二叉查找树
 */
import Node from './Node';

export default class BST{
    constructor(){
        this.root = null;
    }

    /**
     * 插入节点
     */
    insert(){}

    /**
     * 遍历树
     */
    inOrder(){}
}

/******************************/
class BST{
    /**
     * 插入节点
     * @param data
     * @returns {boolean}
     */
    insert(data){
        let node = new Node({
            data,
            left: null,
            right: null
        });
        //如果是新树，赋值根节点
        if (this.root === null) {
            this.root = node;
            return false
        }
        let current = this.root;
        let parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current === null){
                    parent.left = node;
                    break;
                }
            } else {
                current = current.right;
                if (current === null) {
                    parent.right = node;
                    break;
                }
            }
        }
    }
}

/******************************/
class BST{
    /**
     * 遍历树
     * @param node
     */
    inOrder(node){
        if (node !== null){
            this.inOrder(node.left);
            console.log(`${node.show()}、`);
            this.inOrder(node.right)
        }
    }
}

/******************************/
class BST{
    /**
     * 先序遍历数
     * @param node
     */
    preOrder(node){
        if (node !== null) {
            console.log(`${node.show()}、先序`);
            this.preOrder(node.left);
            this.preOrder(node.right)
        }
    }
}

/******************************/
class BST{
    /**
     * 后序遍历树
     * @param node
     */
    postOrder(node){
        if (node !== null) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(`${node.show()}、后序`);
        }
    }
}

/******************************/
class BST{
    /**
     * 获取最小值
     * @returns {*}
     */
    getMin(){
        let current = this.root;
        while (current.left !== null){
            current = current.left;
        }
        return current.data;
    }
}

/******************************/
class BST{
    /**
     * 获取最大值
     * @returns {*}
     */
    getMax(){
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
}

/******************************/
class BST{
    /**
     * 查找特定值
     * @param data
     * @returns {null|Node|*}
     */
    find(data){
        let current = this.root;
        while (current !== null){
            if (current.data === data) {
                return current;
            } else if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
    }
}

/******************************/
//ZWF

/******************************/
class BST{
    /**
     *
     * @param data
     */
    remove(data){
        this.removeNode(this.root, data);
    }
}

/******************************/
class BST{

    /**
     * 缺少的函数--暂时不明啥作用
     * @param node
     * @returns {*}
     */
    getSmallest(node){
        return node;
    }

    /**
     * 删除节点--代码不全
     * @param node
     * @param data
     * @returns {null}
     */
    removeNode(node, data){
        if (node === null) {
            return null;
        }

        if (node.data === data) {
            //没有子节点
            if (node.left === null && node.right === null) {
                return null;
            }

            //没有左子节点
            if (node.left === null) {
                return node.right
            }

            //没有右子节点
            if (node.right === null){
                return node.left
            }

            //俩节点都有
            let tempNode = this.getSmallest(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        } else if (node.data < data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    }
}

/******************************/
class BST{

}

/******************************/
class BST{

}

/******************************/
class BST{

}

/******************************/
class BST{

}



