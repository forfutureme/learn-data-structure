<template>
    <div class="Summarys.vue">
        <Texts :texts="texts"></Texts>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    
</style>
<script>

    import Texts from '../../../components/texts/Texts.vue';

    export default{
        data(){
            return{
                texts: [
                    {
                        title: '什么是字典',
                        describe: '字典是一种以键-值对形式存储数据的数据结构，这里的键是指你用来查找的东西，值是查找得到的结果。'
                    },
                    {
                        title: '为什么要设计一个字典类',
                        describe: 'JavaScript的Object类就是以字典的形式设计的,但是创建一个Dictionary类，你可以使用()来引用键。' +
                        '同时还可以有一些其他有趣的方法，会让字典操作更方便。'
                    }
                ]
            }
        },
        components:{
            Texts
        }
    }
</script>
