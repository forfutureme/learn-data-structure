<template>
    <div class="Created.vue">
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
                code: state => state.list.code
            })
        },
        data(){
            return{
                type: 'list',
                texts: [
                    {
                        title: '实现列表类',
                        describe: '根据之前定义的列表抽象数据类型，可以直接实现一个List类。让我们从定义构造函数开始'
                    },
                    {
                        title: 'append：给列表添加元素',
                        describe: '我们要实现的第一个方法是append()，该方法给列表的下一个位置增加一个新的元素，这个位置刚好等于变量listSize的值：'
                    },
                    {
                        title: 'find：在列表中查找某一元素',
                        describe: 'find()方法通过对数组对象dataStore进行迭代，查找给定的元素。如果找到，就返回该元素在列表中的位置，' +
                        '否则返回-1，这是在数组中找不到指定元素时返回的标准值。'
                    },
                    {
                        title: 'remove：从列表中删除元素',
                        describe: '要删除一个元素首先要找到待删除的元素，因为是用数组存放数据，因此删除元素可以使用数组splice方法。'
                    },
                    {
                        title: 'length：列表中有多少个元素',
                        describe: '查看当前列表元素个数'
                    },
                    {
                        title: 'toString：显示列表中的元素',
                        describe: '显示列表中所有元素'
                    },
                    {
                        title: 'insert：向列表中插入一个元素',
                        describe: '要插入一个元素，首先要确定该元素被插入的位置，因此需要一个元素来确定位置，所有该方法需要俩参数'
                    },
                    {
                        title: 'clear：清空列表中所有的元素',
                        describe: '清空列表中所有的元素'
                    },
                    {
                        title: 'contains：判断给定值是否在列表中',
                        describe: '判断给定值是否在列表中'
                    },
                    {
                        title: 'front',
                        describe: '移动列表游标到首位'
                    },
                    {
                        title: 'end',
                        describe: '移动列表游标到末尾'
                    },
                    {
                        title: 'prev',
                        describe: '上移'
                    },
                    {
                        title: 'next',
                        describe: '下移'
                    },
                    {
                        title: 'currPos',
                        describe: '获取当前游标位置'
                    },
                    {
                        title: 'moveTo',
                        describe: '移动到目标位置'
                    },
                    {
                        title: 'getElement',
                        describe: '获取当前元素'
                    },
                    {
                        title: 'hasNext',
                        describe: '是否还有下一个元素'
                    },
                    {
                        title: 'hasPrev',
                        describe: '是否还有上一个元素'
                    }
                ]
            }
        },
        components:{
            Texts
        },
        mounted(){
            this.texts.map((item, index) => {
                item.code = this.code[this.type][index];
            })
        }
    }
</script>
