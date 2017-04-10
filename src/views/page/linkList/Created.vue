<template>
    <div class="created">
        <div class="created-base" v-if="!activityNavChild">
            <Texts :texts="texts"></Texts>
        </div>
        <transition name="fade" mode="out-in" appear>
            <component :is="activityNavChild"></component>
        </transition>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    .created{
        .created-base{
            line-height 2;
            h4{
                font-size: 14px;
                color: #333;
                margin-bottom: 20px;
            }
            p{
                font-size: 12px;
                color: #999;
                text-indent: 2em;
            }
        }
    }

</style>
<script>

    import Texts from '../../../components/texts/Texts.vue';

    import SimpleLink from './createLink/SimpleLink.vue';
    import TwoWayLink from './createLink/TwoWayLink.vue';
    import LoopLink from './createLink/LoopLink.vue';


    import * as types from '../../../store/mutation-type';
    import { mapState } from 'vuex';

    export default{
        computed: {
            ...mapState({
                activityNavChild: state => state.linkList.activityNavChild
            })

        },
        data(){
            return {
                texts: [
                    {
                        title: '设计一个基于对象的链表',
                        describe: '我们设计的链表包含两个类。Node类用来表示节点，LList类提供了插入节点、删除节点、显示列表元素的方法，以及其他一些辅助方法。'
                    }
                ]
            }
        },
        components: {
            Texts,
            SimpleLink,
            TwoWayLink,
            LoopLink
        }
    }
</script>
