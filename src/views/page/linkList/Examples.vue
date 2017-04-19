<template>
    <div class="example">
        <div class="example-title">
            <h5 class="">使用链表</h5>
        </div>
        <div class="example-main">
            <div class="example-box">
                <h6 class="title">杀人游戏</h6>
                <p class="describe">问题描述：传说在公元1世纪的犹太战争中，犹太历史学家弗拉维奥·约瑟夫斯和他的40个同胞被罗马士兵包围。
                    犹太士兵决定宁可自杀也不做俘虏，于是商量出了一个自杀方案。他们围成一个圈，从一个人开始，数到第三个人时将第三个人杀死，
                    然后再数，直到杀光所有人。约瑟夫和另外一个人决定不参加这个疯狂的游戏，他们快速地计算出了两个位置，站在那里得以幸存。</p>
                <div class="content">
                    <KillGame></KillGame>
                </div>
            </div>
        </div>

    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>

</style>
<script>

    import KillGame from './examples/KillGame.vue';

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            KillGame
        }
    }
</script>
