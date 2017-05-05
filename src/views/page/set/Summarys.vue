<template>
    <div class="Summarys">
        <texts :texts="texts"></texts>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>

</style>
<script>

    import Texts from '../../../components/texts/Texts.vue';

    export default{

        data(){
            return {
                texts: [
                    {
                        title: '何谓集合？',
                        describe: '集合（set）是一种包含不同元素的数据结构。集合中的元素称为成员。' +
                        '集合的两个最重要特性是：首先，集合中的成员是无序的；其次，集合中不允许相同成员存在。'
                    },
                    {
                        title: '集合的定义',
                        describe: '不包含任何成员的集合称为空集，全集则是包含一切可能成员的集合。 <b>' +
                        '如果两个集合的成员完全相同，则称两个集合相等。<br>' +
                        '如果一个集合中所有的成员都属于另外一个集合，则前一集合称为后一集合的子集。'
                    },
                    {
                        title: '对集合的操作',
                        describe: '并集--将两个集合中的成员进行合并，得到一个新集合。<br>' +
                        '交集--两个集合中共同存在的成员组成一个新的集合。<br>' +
                        '补集--属于一个集合而不属于另一个集合的成员组成的集合。'
                    }
                ]
            }
        },
        components: {
            Texts
        }
    }
</script>
