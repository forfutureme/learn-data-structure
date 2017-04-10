<template>
    <div class="titles">
        <h4>{{title}}</h4>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    @import "../../assets/stylus/minixs/_h_title.styl";
    .titles{
        h4{
            _h_title(10px, 14px);
        }
    }
</style>
<script>

    export default{
        props: ['title']
    }
</script>
