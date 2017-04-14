<template>
    <div class="list">
        <header class="header">
            <Headers title="列表"></Headers>
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
    
</style>
<script>

    import Headers from '../../../components/headers/Headers.vue'
    import Navs from '../../../components/navs/Navs.vue';

    import Summarys from './Summarys.vue';
    import Created from './Created.vue';

    import * as types from '../../../store/mutation-type';
    import { mapState } from 'vuex';

    export default{
        computed: {
            ...mapState({
                navs: state => state.list.navs,
                activityNav: state => state.list.activityNav
            })
        },
        data(){
            return{
                type: types.JAVASCRIPT_DATA_LIST_ACTIVITY_NAV
            }
        },
        components:{
            Headers,
            Navs,
            Summarys,
            Created
        }
    }
</script>
