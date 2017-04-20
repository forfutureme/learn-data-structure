<template>
    <div class="summarys">
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
                        title: '何为队列？',
                        describe: '队列是一种列表，不同的是队列只能在队尾插入元素，在队首删除元素。' +
                        '队列用于存储按顺序排列的数据，先进先出，这点和栈不一样，在栈中，最后入栈的元素反而被优先处理。' +
                        '就好像排队办事一样，排在前面的先办。队列是一种先进先出（First-In-First-Out，FIFO）的数据结构。'
                    },
                    {
                        title: '队列的操作',
                        describe: '队列的两种主要操作是：向队列中插入新元素和删除队列中的元素。插入操作也叫做入队，删除操作也叫做出队。' +
                        '入队操作在队尾插入新元素，出队操作删除队头的元素。如下图：',
                        img: require('src/assets/images/queue/queue-op.png')
                    },
                    {
                        title: '队列的其他方法',
                        describe: '队列的另外一项重要操作是读取队头的元素。这个操作叫做peek()。该操作返回队头元素，但不把它从队列中删除。' +
                        '除了读取队头元素，我们还想知道队列中存储了多少元素，可以使用length属性满足该需求；' +
                        '要想清空队列中的所有元素，可以使用clear()方法来实现。'
                    }
                ]
            }
        },
        components:{
            Texts
        }
    }
</script>
