<template>
    <div class="Created.vue">
        <Texts :texts="texts"></Texts>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    
</style>
<script>

    import Texts from '../../../components/texts/Texts.vue';

    import {mapState} from 'vuex';

    export default{
        computed: {
            ...mapState({
                code: state => state.dictionary.code
            })
        },
        data(){
            return{
                type: 'dictionary',
                texts: [
                    {
                        title: 'Dictionary类',
                        describe: '我们创建的Dictionary类是基于Array数组来的，因为我们想对字典中的键排序，' +
                        '而JavaScript中是不能对对象的属性进行排序的。同时JavaScript中数组也是对象。'
                    },
                    {
                        title: 'add',
                        describe: '给字典增加元素，该方法接受俩个参数，第一个为key，第二个为value值'
                    },
                    {
                        title: 'find',
                        describe: '查找字典元素，并返回。接受一个参数key'
                    },
                    {
                        title: 'remove',
                        describe: '删除字典元素，接受一个参数key'
                    },
                    {
                        title: 'showAll',
                        describe: '显示字典所有元素（顺序随机）'
                    },
                    {
                        title: 'count',
                        describe: '计算字典元素总数'
                    },
                    {
                        title: 'clear',
                        describe: '清空字典'
                    },
                    {
                        title: 'showSort',
                        describe: '按key指定顺序显示字典元素（默认字母表顺序）'
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
