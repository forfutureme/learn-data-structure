<template>
    <div class="uses">
        <div class="example">
            <div class="example-title">
                <h5 class="">使用链表</h5>
            </div>
            <div class="example-main">
                <div class="example-box">
                    <h6 class="title">回文</h6>
                    <p class="describe">回文是指这样一种现象：一个单词、短语或数字，从前往后写和从后往前写都是一样的。
                        比如，单词“dad”、“racecar”就是回文；然而使用栈来判断是否回文十分简单：</p>
                    <div class="content">
                        <Palindrome></Palindrome>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    
</style>
<script>

    import Palindrome from './use/Palindrome.vue';

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            Palindrome
        }
    }
</script>
