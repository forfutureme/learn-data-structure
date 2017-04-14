/**
 * Created by huweijian on 2017/4/11.
 * @title
 */
//创建数组
//使用[]操作符声明一个数组变量
let arr1 = [];
//然后用length属性检验
console.log(arr1.length); //0

//在[]里放入一组数据
let arr2 = [1, 2, 3, 4];
console.log(arr2.length); //4

//还可以调用Array的构造函数创建数组：
let arr3 = new Array();
console.log(arr3.length); //0

let arr4 = new Array(1, 2, 3, 4);
console.log(arr4.length); //4

// 在调用Array的构造函数时，可以只传入一个参数，用来指定数组的长度：
let arr5 = new Array(10);
console.log(arr5.length); //10

//JavaScript数组的数组元素可以是任意类型
let arr6 = [1, "Joe", true, null];

//可以调用Array.isArray()来判断一个对象是否是数组
let num = 3;

console.log(Array.isArray(arr6));  //true
console.log(Array.isArray(num));   //false

/*********************/

//写入数组元素
let arr7 = [];
for (let i = 0; i < 3; ++i) {
    arr7[i] = i+1;
}
console.log(arr7); //1,2,3

//读取数组元素
let arr8 = [1, 2, 3];
console.log(arr8[0] + arr8[1] + arr8[2]); //6


/********************/
//对数组的整体性操作
//可以将一个数组 整体赋值给另一个数组
let arr9 = [1, 2, 3];
let arr10 = arr9;
//但是，当把一个数组赋给另外一个数组时，只是为被赋值的数组增加了一个新的引用。
// 当你通过原引用修改了数组的值，另外一个引用也会感知到这个变化。
arr9[0] = 4;
console.log(arr10[0]);      //4
//这种行为被称为浅复制，新数组依然指向原来的数组。
//若要避免这种情况，需要对数组经行 深复制
let arr11 = [];
for (let i = 0; i < arr9.length; i++){
    arr11[i] = arr9[i]
}
//或者
arr11.push(...arr9);


/********************/
//ZWF

/********************/
let str = 'a.b.c';
let strToArr = str.split('.');
console.log(strToArr);  //['a', 'b', 'c']

/********************/
let arr12 = ['a', 'b', 'c'];
console.log(arr12.indexOf('a'));            //0
console.log(arr12.indexOf('d'));            //-1

/********************/
console.log(arr12.join(''));    //abc
console.log(arr12.toString());  //abc

/********************/
let aArr = ['a'];
let bArr = ['b'];
console.log(aArr.concat(bArr)); //['a', 'b']
console.log(bArr.concat(aArr)); //['b', 'a']

/********************/
let sArr = [1,2,3];
sArr.splice(1,1)
console.log(sArr); //[1, 3]

/********************/
let arr13 = [1, 2];
arr13.push(3);
console.log(arr13);     //[1, 2, 3]

// 也可以使用数组的length属性为数组添加元素，但push()方法看起来更直观：
arr13[arr13.length] = 4;
console.log(arr13); //[1,2,3,4]

/********************/
//试想一下 如果没有这个方法，想要给数组首位添加一个新元素，需要手动把原数组的每个元素向后移动一位，虽然操作不难但很麻烦而且低效
let arr14 = [2, 3];
const L14 = arr14.length;
for (let i = L14; i > 0; i--){
    arr14[i]= arr14[i - 1];
}
arr14[0] = 1;
console.log(arr14);     //[1,2,3]

//但是用unshift()方法就很方便
arr14.unshift(0);
console.log(arr14);     //[0,1,2,3]

/********************/
let arr15 = [1, 2, 3];
arr15.pop();
console.log(arr15);     //[1, 2]

/********************/
//试想一下如果没有shift方法，要删除第一个元素就有点麻烦了，需要手动调整索引，且结果还会带有一个'(undefined),'且低效
let arr16 = [3,1,2];
const L16 = arr16.length;
for (let i = 0; i < L16; i++){
    arr16[i] = arr16[i+1];
}
console.log(arr16); // [1,2,undefined]

//用shift就方便了很多
let arr17 = [1, 2, 3];
arr17.shift();
console.log(arr17); //[2,3]

/********************/
//增加元素
let arr18 = [1, 3];
arr18.splice(1, 0, 2);
console.log(arr18);     //[1, 2, 3]

//删除元素
arr18.splice(1, 1);
console.log(arr18);     //[1,3]

/********************/
let arr19 = [1,2,3];
arr19.reverse();
console.log(arr19);     //[3,2,1]

/********************/
//按字母表顺序
let arr20 = [3,1,2,100,4,200];
arr20.sort();
console.log(arr20); //[1,100,2,200,3,4]

//按升序排序
arr20.sort(function (a, b) {
    return a > b;
});
console.log(arr20); //[1,2,3,4,100,200]

/********************/
let arr21 = [1, 2, 3];
arr21.forEach(function (item) {
    console.log(item, item * item);
});
//1, 1
//2, 4
//3, 9

/********************/
//判断数组是否所有元素都是偶数
function isEven(item) {
    return item % 2 == 0;
}
let arr22 = [2, 4, 6];
let r22 = arr22.every(isEven);
console.log(r22); //true
console.log([2,3,4].every(isEven));
//false

/*******************/
//判断是否包含偶数
console.log([3,4,5].some(isEven));  //true
console.log([3,5].some(isEven));    //false

/*******************/
//下面这个例子展示了如何使用reduce()方法为数组中的元素求和：
function add(runningTotal, currVal) {
    return runningTotal + currVal
}
console.log([1, 2, 3].reduce(add)); //6
//该方法还可以用于字符串拼接
console.log(['a', 'b', 'c'].reduce(add)); //abc

//还有个reduceRight方法可以从右往左加
console.log(['a', 'b', 'c'].reduceRight(add)); //cba

/*******************/
function curve(item) {
    return item * 10;
}

console.log([1, 2, 3].map(curve)); //[10,20,30]

/*******************/
console.log([1,2,3,4,5,6].filter(isEven)); //[2,4,6]











