<template>
    <div class="created">
        <Texts :texts="texts"></Texts>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    .created{
        width: 100%;
    }
</style>
<script>

    import Texts from '../../../components/texts/Texts.vue';

    import {mapState} from 'vuex';

    export default{
        computed: {
            ...mapState({
                code: state => state.queue.code
            })
        },
        data(){
            return{
                type: 'queue',
                texts: [
                    {
                        title: '数组实现队列类Queue',
                        describe: '使用数组来实现队列看起来顺理成章。JavaScript中的数组具有其他编程语言中没有的优点，' +
                        '数组的push()方法可以在数组末尾加入元素，shift()方法则可删除数组的第一个元素。'
                    },
                    {
                        title: 'enqueue',
                        describe: '向队尾添加一个元素：'
                    },
                    {
                        title: 'dequeue',
                        describe: '删除队首的元素'
                    },
                    {
                        title: 'front',
                        describe: '获取对首元素'
                    },
                    {
                        title: 'back',
                        describe: '获取对尾元素'
                    },
                    {
                        title: 'toString',
                        describe: '显示队列所有元素'
                    },
                    {
                        title: 'empty',
                        describe: '判断是否为空队列'
                    }
                ]
            }
        },
        components:{
            Texts
        },
        mounted(){
            this.texts.map((item, index) => {
                item.code = this.code[this.type][index]
            })
        }
    }
</script>
