<template>
    <div class="summary">
        <Texts :texts="texts"></Texts>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    
</style>
<script>

    import Texts from '../../../components/texts/Texts.vue';

    import { mapState } from 'vuex';

    export default{
        computed: {
            ...mapState({
                code: state => state.arrayStore.code
            })
        },
        data(){
            return{
                type: 'arraySummary',
                texts: [
                    {
                        title: 'JavaScript中的数组',
                        describe: 'JavaScript中的数组是一种特殊的对象，用来表示偏移量的索引是该对象的属性，索引可能是整数。' +
                        '然而，这些数字索引在内部被转换为字符串类型，这是因为JavaScript对象中的属性名必须是字符串。' +
                        '数组在JavaScript中只是一种特殊的对象，所以效率上不如其他语言中的数组高。' +
                        'JavaScript中的数组，严格来说应该称作对象，是特殊的JavaScript对象，在内部被归类为数组。' +
                        '由于Array在JavaScript中被当作对象，因此它有许多属性和方法可以在编程时使用。'
                    },
                    {
                        title: '创建数组',
                        describe: '创建数组的方法不止一种，不过都很简单,代码如下：',
                    },
                    {
                        title: '读写数组',
                        describe: '数组读写比较简单，可以通过数组索引实现',
                    },
                    {
                        title: '对数组的整体性操作',
                        describe: '有一些操作是针对数组整体进行的',
                        code: ''
                    },
                    {
                        title: '数组的一些基本操作(JavaScript 数组 AP)',
                        describe: '下面介绍一些操作数组的方法'
                    },
                    {
                        title: 'split()',
                        describe: '严格来说这个方法不是数组具备的方法而是字符串方法，可以产生数组。接受一个参数作为分割符。'
                    },
                    {
                        title: 'indexOf(item)',
                        describe: '查找元素，该方法接受一个参数，如果存在返回其索引，若不存在返回-1'
                    },
                    {
                        title: 'join()和toString()',
                        describe: '这两个方法都返回一个包含数组所有元素的字符串，各元素之间用逗号分隔开。'
                    },
                    {
                        title: 'concat()',
                        describe: '通过已有数组创建新数组。该方法可以合并多个数组创建一个新数组，下面代码可以看出concat方法的工作原理'
                    },
                    {
                        title: 'splice()',
                        describe: 'splice()方法从现有数组里截取一个新数组。该方法的第一个参数是截取的起始索引，第二个参数是截取的长度。'
                    },
                    {
                        title: 'push()',
                        describe: '该方法会将一个元素添加到数组末尾'
                    },
                    {
                        title: 'unshift()',
                        describe: '该方法会将一个元素添加到数组首位'
                    },
                    {
                        title: 'pop()',
                        describe: '该方法可以删除数组末尾的元素'
                    },
                    {
                        title: 'shift',
                        describe: '该方法可以删除数组首位的元素'
                    },
                    {
                        title: 'splice',
                        describe: '从数组中间位置添加和删除元素，该方法接受三个参数，1,起始索引（也就是你希望开始添加元素的地方）；' +
                        '2,需要删除的元素个数（添加元素时该参数设为0）；3,想要添加进数组的元素。'
                    },
                    {
                        title: 'reverse',
                        describe: '反转数组内容'
                    },
                    {
                        title: 'sort',
                        describe: '为数组排序,如果没有给他排序规则他会按元素首字母解析到的字母表顺序排序，' +
                        '如果给了排序方法，他会严格执行方法规则排序'
                    },
                    {
                        title: 'forEach',
                        describe: '不产生任何新数组的一种迭代器方法，他会对每个元素做传入的函数要做的操作。'
                    },
                    {
                        title: 'every',
                        describe: '不产生任何新数组的一种迭代器方法，另一个迭代器方法是every()，该方法接受一个返回值为布尔类型的函数，' +
                        '对数组中的每个元素使用该函数。如果对于所有的元素，该函数均返回true，则该方法返回true。'
                    },
                    {
                        title: 'some',
                        describe: '不产生任何新数组的一种迭代器方法,改方法也接受一个返回值为布尔类型的函数，' +
                        '只要有一个元素使得该函数返回true，该方法就返回true。'
                    },
                    {
                        title: 'reduce()',
                        describe: '不产生任何新数组的一种迭代器方法,方法接受一个函数，返回一个值。该方法会从一个累加值开始，' +
                        '不断对累加值和数组中的后续元素调用该函数，直到数组中的最后一个元素，最后返回得到的累加值。'
                    },
                    {
                        title: 'map()',
                        describe: '生成新数组的一种迭代器方法，map()和forEach()有点儿像，对数组中的每个元素使用某个函数。' +
                        '两者的区别是map()返回一个新的数组，该数组的元素是对原有元素应用某个函数得到的结果'
                    },
                    {
                        title: 'filter',
                        describe: '生成新数组的一种迭代器方法,filter()和every()类似，传入一个返回值为布尔类型的函数。' +
                        '和every()方法不同的是，当对数组中的所有元素应用该函数，结果均为true时，该方法并不返回true，' +
                        '而是返回一个新数组，该数组包含应用该函数后结果为true的元素。'
                    }
                ]
            }
        },
        components: {
            Texts
        },
        mounted(){
            this.texts.map((item, index) => {
                item.code = this.code[this.type][index]
            })
        }
    }
</script>
