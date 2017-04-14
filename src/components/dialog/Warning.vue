<template>
    <div class="warning">
        {{warning.msg}}
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    @import "../../assets/stylus/variable/_variable.styl";
    @import "../../assets/stylus/minixs/_flex_box.styl";
    @import "../../assets/stylus/minixs/_center.styl";
    .warning{
        _flex_box();
        position: fixed;
        _center();
        min-width: 100px;
        min-height: 50px;
        z-index: $zIndex-dialog;
        padding: 20px 10px;
        background: rgba(0, 0, 0, .7);
        border-radius: 5px;
        color: #fff;
    }
</style>
<script>

    import { mapState } from 'vuex';
    import * as types from '../../store/mutation-type';

    export default{
        computed: {
            ...mapState({
                warning: state => state.warning
            })
        },
        mounted(){
            let _this = this;
            let warns = setTimeout(function () {
                _this.$store.commit(types.JAVASCRIPT_DATA_GLOBAL_WARNING, {
                    show: false
                });
                clearTimeout(warns);
            }, _this.warning.time)
        }
    }
</script>
