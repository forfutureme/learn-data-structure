<template>
    <div class="LinkList">
       <header class="header">
           <Headers title="链表"></Headers>
       </header>
        <article class="article">
            <nav class="nav">
                <Navs :navs="navs"
                      :activityNav="activityNav"
                      :activityNavChild="activityNavChild"
                      :type="type"
                      :typeChild="typeChild">
                </Navs>
            </nav>
            <aside class="aside">
                <transition name="fade" mode="out-in" appear>
                    <component :is="activityNav"></component>
                </transition>
            </aside>
        </article>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    @import "../../../assets/stylus/minixs/_flex_box.styl";
    @import "../../../assets/stylus/minixs/_h_title.styl";
    .LinkList{
        h4{
            _h_title(10px, 14px);
        }
    }
</style>
<script>

    import LinkList from '../../../tools/linkList/LinkedList';
    import NoHeadList from '../../../tools/linkList/noHeadLinkedList';

    import Headers from '../../../components/headers/Headers.vue'
    import Navs from '../../../components/navs/Navs.vue';
    import Summarys from './Summarys.vue';
    import Examples from './Examples.vue';
    import Created from './Created.vue';

    import * as types from '../../../store/mutation-type';
    import { mapState } from 'vuex';

    export default{
        computed: {
            ...mapState({
                navs: state => state.linkList.navs,
                activityNav: state => state.linkList.activityNav,
                activityNavChild: state => state.linkList.activityNavChild
            })
        },
        data(){
            return{
                type: types.JAVASCRIPT_DATA_LINK_ACTIVITY_NAV,
                typeChild: types.JAVASCRIPT_DATA_LINK_ACTIVITY_NAV_CHILD
            }
        },
        components:{
            Headers,
            Navs,
            Summarys,
            Created,
            Examples
        },
        mounted(){
//            let list = new LinkList({
//                first: 'people1',
//                mode: 'loop'
//            });
//            console.log(list);

            let noHeadList = new NoHeadList({
                first: 'people1',
                mode: 'loop'
            });

            for (let i = 1; i < 40; i++){
                noHeadList.insertNode(`people${i+1}`, `people${i}`)
            }

//            noHeadList.removeNode('people1');
//            noHeadList.consoleLink();
            let _this = this;
            setTimeout(function () {
//                _this.killPeople(noHeadList);
            }, 3000)

        },
        methods: {
            killPeople(list){
                let currNode = list.linkList;
                list.consoleLink();
                while (currNode.next.next.element != currNode.element){
                    list.removeNode(currNode.next.next.element);
                    currNode = currNode.next.next;
                    list.consoleLink();
                }
//                list.consoleLink();
            }
        }
    }
</script>
