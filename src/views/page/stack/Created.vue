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
                code: state => state.stack.code
            })
        },
        data(){
            return{
                type: 'stack',
                texts: [
                    {
                        title: '实现一个栈',
                        describe: '实现一个栈，当务之急是决定存储数据的底层数据结构。这里采用的是数组。' +
                        '我们的实现以定义Stack类的构造函数开始'
                    },
                    {
                        title: 'push入栈',
                        describe: '先来实现push()方法。当向栈中压入一个新元素时，' +
                        '需要将其保存在数组中变量top所对应的位置，然后将top值加1，让其指向数组中下一个空位置。'
                    },
                    {
                        title: 'pop出栈',
                        describe: '与入栈正好相反，都是利用top属性，只是是--'
                    },
                    {
                        title: 'peek预览',
                        describe: '返回数组的第top-1个位置的元素，即栈顶元素'
                    },
                    {
                        title: 'length',
                        describe: '查看栈里共有多少个元素'
                    },
                    {
                        title: 'clear',
                        describe: '清空栈'
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
            });
        }
    }
</script>
