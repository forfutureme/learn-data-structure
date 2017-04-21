/**
 * Created by huweijian on 2017/4/20.
 * @title
 */

import Simple from './motheds/Simple';

export default class Hash {
    constructor(length = 137){
        this.hashData = new Array(length);
        this.simple = new Simple(length);
    }

    /**
     * 生成hash码方法
     */
    getHashCode(){}

    /**
     * 添加元素到散列表
     */
    put(){}

    /**
     * 显示散列表里的元素
     */
    showHash(){}

}

/*****************************/
export default class Simple {
    constructor(total = 1){
        this.total = total;
    }

    /**
     * 生成简单hash码
     * @returns {number}
     */
    createHashCode(string = ''){
        let num = 0;
        for (let i = 0; i < string.length; i++){
            num += string.charCodeAt(i);
        }
        return num % this.total;
    }
}

/**************************/
class Hash{
    /**
     * 生成hash码方法
     * @param str
     * @returns {number}
     */
    getHashCode(str){
        return this.simple.createHashCode(str);
    }
}

/**************************/
class Hash{
    /**
     * 添加元素到散列表
     * @param item
     */
    put(item){
        this.hashData[this.getHashCode(item)] = item;
    }
}

/**************************/
class Hash{
    /**
     * 显示散列表里的元素
     * @returns {string}
     */
    showHash(){
        let arr = [];
        for (let i = 0; i < this.hashData.length; i++){
            if (this.hashData[i] !== undefined) {
                arr.push(`${i} --> ${this.hashData[i]}`);
            }
        }
        return `该散列共${arr.length}个元素，分别是：${arr.join(',')}`;
    }
}


/**************************/
function textHash(){
    let hash = new Hash();
    let arr = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
    for (let i = 0; i < arr.length; i++){
        hash.put(arr[i]);
    }
    console.log(`元素数据共${arr.length}个。`);
    //元素数据共9个。
    console.log(hash.showHash());
    //该散列共8个元素，分别是：35 --> Cynthia,45 --> Clayton,57 --> Donnie,77 --> David,95 --> Danny,116 --> Mike,132 --> Jennifer,134 --> Jonathan
}
textHash();

/**************************/
const HN = 31;
export default class Butter {
    constructor(total = 1){
        this.total = total;
    }

    /**
     * 生成hash码
     * @param str
     * @returns {number}
     */
    createHashCode(str = ''){
        let code = 0;
        for (let i = 0; i < str.length; i++){
            code += HN * code  + str.charCodeAt(i);
        }
        console.log(`${str} --> ${code} --> ${code % this.total}`);

        return code % this.total;
    }
}

function textHash(){
    let hash = new Hash();
    let arr = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
    for (let i = 0; i < arr.length; i++){
        hash.put(arr[i]);
    }
    console.log(`元素数据共${arr.length}个。`);
    //元素数据共9个。
    console.log(hash.showHash());
    //该散列共9个元素，分别是：3 --> David,25 --> Raymond,37 --> Donnie,61 --> Jonathan,75 --> Danny,82 --> Mike,102 --> Jennifer,130 --> Clayton,131 --> Cynthia
}
textHash();

/************************/
class Hash{
    /**
     * 把key作为散列值，data作为值，存入散列表
     * @param key
     * @param data
     */
    putKey(key, data){
        this.hashData[this.getHashCode(key)] = data;
    }
}

/**********************/
class Hash{
    /**
     * 查找元素
     * @param key
     * @returns {*}
     */
    get(key){
        return this.hashData[this.getHashCode(item)];
    }
}
