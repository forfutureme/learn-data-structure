<template>
    <div class="simpleLink">
        <Texts :texts="texts"></Texts>
    </div>
</template>
<style lang="stylus" scoped>
    
</style>
<script>

    import Texts from '../../../../components/texts/Texts.vue';

    import * as types from '../../../../store/mutation-type';
    import { mapState } from 'vuex';


    export default{
        computed: {
            ...mapState({
                code: state => state.linkList.code,
                codeArr: state => state.linkList.codeArr
            })
        },

        data(){
            return{
                texts: [
                    {
                        title: 'Node类',
                        type: 'node',
                        describe: '上一节提到链接基于对象构建，首先需要一个Node类来创建链表组成元素。' +
                        'Node类包含两个属性：element用来保存节点上的数据，next用来保存指向下一个节点的链接。' +
                        '我们使用一个构造函数来创建节点，该构造函数设置了这两个属性的值：',
                        code: ''
                    },
                    {
                        title: 'LinkedList类',
                        type: 'linkList',
                        describe: 'LinkList类提供了对链表进行操作的方法。该类的功能包括插入删除节点、在列表中查找给定的值。' +
                        '该类也有一个构造函数，链表只有一个属性，那就是使用一个Node对象来保存该链表的头节点。代码如下：',
                        code: ''
                    },
                    {
                        title: '查找目标节点findNode(item)',
                        type: 'linkList',
                        describe: '不论是对链表节点做什么操作，首先需要找到该节点或者与之相关节点。' +
                        '该方法接受一个参数即目标节点信息，若找到这返回目标节点对象，若找不到则返回null',
                        code: ''
                    },
                    {
                        title: '插入新节点到目标节点之后insertNode(newItem, item)',
                        type: 'linkList',
                        describe: '该方法接受2个参数，新节点信息，目标节点，若目标节点存在将新节点插入目标节点之后，' +
                        '若不存在默认插入头节点之后',
                        code: ''
                    },
                    {
                        title: '查找目标上一个节点findPrevNode(item)',
                        type: 'linkList',
                        describe: '该方法接受一个参数，即目标节点，若找到返回目标上一个节点，若找不到返回末尾节点。',
                        code: ''
                    },
                    {
                        title: '删除节点removeNode(item)',
                        type: 'linkList',
                        describe: '该方法接受一个参数，即目标节点，基于查找上一节点，若上一个节点存在则顺利删除，' +
                        '若上一个节点不存在，则不做任何操作',
                        code: ''
                    },
                    {
                        title: '打印所有节点consoleLink',
                        type: 'linkList',
                        describe: '该方法不需要参数，打印当前链表素有节点不包括表头',
                        code: ''
                    },
                    {
                        title: '测试链表',
                        type: 'linkList',
                        describe: '把方法代码整理到类中对应的方法里就完成了整个简单链表类，用下面测试代码经行测试',
                        code: ''
                    }
                ]
            }
        },
        components:{
            Texts,
        },
        mounted(){
            this.texts.map((item, index) => {
                if (index == 0){
                    item.code = this.code[item.type][0];
                } else {
                    item.code = this.code[item.type][index-1];
                }

            });
        }
    }
</script>
