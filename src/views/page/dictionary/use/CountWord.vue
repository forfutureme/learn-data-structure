<template>
    <div class="CountWord">
        <Examples :examples="examples"></Examples>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>

</style>
<script>

    import Dictionary from '../../../../tools/dictionary/Dictionary';

    import Examples from '../../../../components/examples/Examples.vue';

    export default{
        data(){
            return {
                examples: {
                    title: '统计单词出现次数',
                    type: 'inputCheck',
                    describe: '在下面输入框中输入你要测试的文本，然后点击测试按钮等待结果，（预设了一段文本）',
                    textareas: [
                        {
                            title: '请输入你想判断的文本',
                            val: 'first it creates a regular expression pattern that looks for the end of sentences and one for individual words'
                        }
                    ]
                }
            }
        },
        components: {
            Examples
        },
        methods: {
            /**
             * 计算单词出现次数
             * @returns {string}
             */
            countWords(){
                let strArr = this.examples.textareas[0].val.split(/[^\w]/);
                let dictionary = new Dictionary();
                for (let i = 0; i < strArr.length; i++) {
                    let key = strArr[i];
                    let val = dictionary.find(key);
                    if (val){
                        dictionary.add(key, val + 1);
                    } else {
                        dictionary.add(key, 1)
                    }
                }
                return dictionary.showSort();

            }
        },
        mounted(){
            this.examples.checkFun = this.countWords;
        }
    }
</script>
