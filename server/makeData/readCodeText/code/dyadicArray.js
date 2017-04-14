/**
 * Created by huweijian on 2017/4/12.
 * @title
 */
//创建二维数组
let da1 = [];
for (let i = 0; i< 3; i++){
    da1[i] = []
}
console.log(da1);  //[Array(0), Array(0), Array(0)]

/****************************/
//处理二维数组
let da2 = [[1,2], [3,4]];
let num2 = 0;
for (let i = 0; i < da2.length; i++){
    for (let j = 0; j < da2[i].length; j++){
        num2 += da2[i][j];
    }
}
console.log(num2);      //10
