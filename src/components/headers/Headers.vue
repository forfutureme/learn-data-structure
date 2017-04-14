<template>
    <div class="titles">
        <a @click="goToIndex">返回首页</a>
        <h4>{{title}}</h4>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    @import "../../assets/stylus/minixs/_h_title.styl";
    @import "../../assets/stylus/minixs/_btn.styl"
    .titles{
        position: relative;
        h4{
            _h_title(10px, 14px);
        }
        a{
            position: absolute;
            left: 10px;
            top: 5px;
            padding: 5px 10px;
            font-size: 12px;
            cursor: pointer;
            _btn();
        }
    }
</style>
<script>

    export default{
        props: ['title'],
        methods: {
            goToIndex(){
                this.$router.push({
                    name: 'index'
                })
            }
        }
    }
</script>
