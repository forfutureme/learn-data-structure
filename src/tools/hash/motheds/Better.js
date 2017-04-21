/**
 * Created by huweijian on 2017/4/21.
 * @title
 */
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
