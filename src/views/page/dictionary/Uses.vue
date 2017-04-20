<template>
    <div class="uses">
        <div class="example">
            <div class="example-title">
                <h5 class="">使用字典</h5>
            </div>
            <div class="example-main">
                <div class="example-box">
                    <h6 class="title">统计单词出现次数</h6>
                    <p class="describe">给定一段话，统计这段话中没个单词出现次数，并输出</p>

                    <div class="content">
                        <CountWord></CountWord>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    
</style>
<script>

    import CountWord from './use/CountWord.vue';

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            CountWord
        },
        mounted(){

        }
    }
</script>
