<template>
    <div class="Created">
        <texts :texts="texts"></texts>
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
                code: state => state.set.code
            })
        },
        data(){
            return {
                type: 'set',
                texts: [
                    {
                        title: 'Set类的实现',
                        describe: 'Set类的实现基于数组，数组用来存储数据。下面是构造函数的定义：'
                    },
                    {
                        title: 'add',
                        describe: '给集合新增元素，接受一个参数，增加成功返回true，失败返回false'
                    },
                    {
                        title: 'remove',
                        describe: '删除一个元素，接受一个参数，删除成功返回true，失败返回false'
                    },
                    {
                        title: 'size',
                        describe: '返回集合元素总数'
                    },
                    {
                        title: 'union',
                        describe: '计算俩个集合的并集，在计算并集钱需要定义个contains方法，来检查一个元素是否在一个集合中'
                    },
                    {
                        title: 'intersect',
                        describe: '计算俩个集合的交集，并返回结果。'
                    },
                    {
                        title: 'subset',
                        describe: '判断一个集合是否另一集合的子集'
                    },
                    {
                        title: 'difference',
                        describe: '返回集合的补集'
                    },
                    {
                        title: 'show',
                        describe: '显示所有元素'
                    }
                ]
            }
        },
        components: {
            Texts
        },
        mounted(){
            this.texts.forEach((item, index) => {
                item.code = this.code[this.type][index];
            });

        }
    }
</script>
