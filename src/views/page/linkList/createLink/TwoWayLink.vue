<template>
    <div class="TwoWayLink.vue">
        <Texts :texts="texts"></Texts>
    </div>
</template>
<style lang="stylus" scoped>
    
</style>
<script>

    import Texts from '../../../../components/texts/Texts.vue';

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
                        title: '双向链表简介',
                        type: 'twoWayList',
                        describe: '给Node对象增加一个属性，该属性存储指向前驱节点的链接，这样就形成了双向链表。',
                        img: require('src/assets/images/linkList/link-two-way.png')
                    },
                    {
                        type: 'twoWayList',
                        describe: '因为有了指向前一节点的属性，再删除时不再需要查找目标节点的前一节点了，' +
                        '首先需要在链表中找出存储待删除数据的节点，然后设置该节点前驱的next属性，使其指向待删除节点的后继；' +
                        '设置该节点后继的previous属性，使其指向待删除节点的前驱，如下图：',
                        img: require('src/assets/images/linkList/link-two-way-delete.png')
                    },
                    {
                        title: '创建双向链表',
                        type: 'twoWayList',
                        describe: '创建双向链表完整代码示例如下：',
                        code: ''
                    }

                ]
            }
        },
        components:{
            Texts
        },
        mounted(){
            this.texts[2].code = this.code.node[0] + this.code[this.texts[2].type];
        }
    }
</script>
