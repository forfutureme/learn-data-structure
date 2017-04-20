<template>
    <div class="palindrome example-child">
        <Examples :examples="examples"></Examples>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>

</style>
<script>

    import Examples from '../../../../components/examples/Examples.vue';

    import Stack from '../../../../tools/stack/Stack';

    export default{
        data(){
            return{
                examples: {
                    title: '判断输入是否回文',
                    type: 'inputCheck',
                    describe: '在下面输入框中输入你要测试的文本，然后点击测试按钮等待结果',
                    textareas: [
                        {
                            title: '请输入你想判断的文本',
                            val: ''
                        }
                    ],
                    checkFun: this.Palindrome
                }
            }
        },
        components:{
            Examples
        },
        methods: {
            /**
             * 判断是否回文
             * @param str
             * @returns {string}
             */
            isPalindrome(str){
                let stack = new Stack();
                for (let i = 0; i < str.length; i++){
                    stack.push(str[i]);
                }
                let word = '';
                while (stack.length()){
                    word += stack.pop();
                }
                return str === word ? '是' : '不是';
            }
        },
        mounted(){
            this.examples.checkFun = this.isPalindrome;
        }
    }
</script>
