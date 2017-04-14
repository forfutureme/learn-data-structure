<template>
    <div class="app link-list">
        <Warning v-if="warning.show"></Warning>
        <Loading v-if="loading"></Loading>
        <router-view></router-view>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    
</style>
<script>

    import Warning from './components/dialog/Warning.vue';
    import Loading from './components/loading/Loading.vue';

    import { mapState } from 'vuex';

    export default{
        computed: {
            ...mapState({
                warning: state => state.warning,
                loading: state => state.loading
            })
        },
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            Warning,
            Loading
        }
    }
</script>
