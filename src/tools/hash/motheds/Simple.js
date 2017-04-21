/**
 * Created by huweijian on 2017/4/20.
 * @title
 */
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
        console.log(`${string} --> ${num}`);
        return num % this.total;
    }
}