<template>
    <div class="Summarys.vue">
        <Texts :texts="texts"></Texts>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    
</style>
<script>

    import Texts from '../../../components/texts/Texts.vue';

    export default{
        data(){
            return{
                texts: [
                    {
                        title: '栈是什么？',
                        describe: '栈就是和列表类似的一种数据结构，它可用来解决计算机世界里的很多问题。' +
                        '栈是一种高效的数据结构，因为数据只能在栈顶添加或删除，所以这样的操作很快，而且容易实现。'
                    },
                    {
                        title: '对栈的操作',
                        describe: '栈是一种特殊的列表，栈内的元素只能通过列表的一端访问，这一端称为栈顶。' +
                        '咖啡厅内的一摞盘子是现实世界中常见的栈的例子。只能从最上面取盘子，盘子洗净后，也只能摞在这一摞盘子的最上面。' +
                        '栈被称为一种后入先出（LIFO，last-in-first-out）的数据结构。'
                    },
                    {
                        title: '栈的操作',
                        describe: '对栈的两种主要操作是将一个元素压入栈和将一个元素弹出栈。入栈使用push()方法，出栈使用pop()方法。' +
                        '另一个常用的操作是预览栈顶的元素。pop()方法虽然可以访问栈顶的元素，但是调用该方法后，栈顶元素也从栈中被永久性地删除了。' +
                        'peek()方法则只返回栈顶元素，而不删除它。下图描述了栈的操作：',
                        img: require('src/assets/images/stack/stack-op.png'),
                    },
                    {
                        title: '栈的属性',
                        describe: 'length属性记录栈内元素的个数,empty属性，用以表示栈内是否含有元素，不过使用length属性也可以达到同样的目的。'
                    }
                ]
            }
        },
        components:{
            Texts
        }
    }
</script>
