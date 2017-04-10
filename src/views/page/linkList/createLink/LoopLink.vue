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
                        title: '循环链表简介',
                        type: 'loopLinkList',
                        describe: '循环链表和单向链表相似，节点类型都是一样的。唯一的区别是，在创建循环链表时，让其头节点的next属性指向它本身。',
                        img: require('src/assets/images/linkList/link-loop.png'),
                        alt: '这种行为会传导至链表中的每个节点，使得每个节点的next属性都指向链表的头节点。换句话说，链表的尾节点指向头节点，形成了一个循环链表'
                    },
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
                        title: '循环链表应用',
                        type: 'loopLinkList',
                        describe: '还记得最初我们提到的那个有趣的问题么？现在我们就以使用循环链表来解决它。详情见《实例应用》'
                    }
                ]
            }
        },
        components:{
            Texts
        },
        mounted(){
//            this.texts.map((item, index) => {
//                if (index == 1){
//                    item.code = this.code[item.type][index] || '';
//                }
//            });
            this.texts[1].code = this.code[this.texts[1].type][0];
        }
    }
</script>
