<template>
    <div class="LoopLink.vue">
        <Texts :texts="texts"></Texts>
    </div>
</template>
<style lang="stylus" scoped>
    
</style>
<script type="text/ecmascript-6">

    import Texts from '../../../../components/texts/Texts.vue';

    import * as types from '../../../../store/mutation-type';
    import { mapState } from 'vuex';

    export default{
        computed: {
            ...mapState({
                code: state => state.linkList.code
            })
        },
        data(){
            return{
                texts: [
                    {
                        title: '创建循环链表',
                        type: 'loopLinkList',
                        describe: '基于简单链表建立循环链表十分简单，只要让链表末尾节点next指向链表首节点，' +
                        '初始化时：this.head.next = this.head即可，同时在判断链尾节点上改变下逻辑既可，' +
                        '即不能使用node.next == null 来判断了。因为循环链表没有节点next指向null了，' +
                        '但是，为了不依赖表头，我从写定义了下链表结构，各方法也做了修改。源码如下：',
                        code: ''
                    },
                    {
                        type: 'loopLinkList',
                        title: '循环链表应用',
                        describe: '还记得最初我们提到的那个有趣的问题么？现在我们就以使用循环链表来解决它。详情见《实例应用》'
                    }
                ]
            }
        },
        components:{
            Texts
        },
        mounted(){
            this.texts.map((item, index) => {
                item.code = this.code[item.type][index] || '';
            });
        }
    }
</script>
