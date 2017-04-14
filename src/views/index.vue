<template>
    <div class="index">
        <h3>JavaScript 数据结构</h3>
        <div class="index-nav">
            <nav>
                <ul>
                    <li v-for="item in nav"
                        @click="navTo(item.href)">
                        {{item.name}}
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    @import "../assets/stylus/minixs/_flex_box.styl";
    @import "../assets/stylus/minixs/_border_radius.styl"
    .index
        h3
            _flex_box()
            font-size 16px
            padding 10px 0
        .index-nav
            nav
                _flex_box()
                padding-top 50px
                ul
                    li
                        margin-bottom 10px
                        padding 5px 15px
                        _border_radius(3px)
                        background #eee
                        cursor pointer
                        color #333


</style>
<script>

    import { mapGetters } from 'vuex';

    export default{
        computed: {
            ...mapGetters({
                nav: 'getNavTitle'
            })
        },
        methods: {
            navTo(href){
                this.$router.push({
                    name: href
                })
            }
        }
    }
</script>
