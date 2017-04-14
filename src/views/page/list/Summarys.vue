<template>
    <div class="Summarys.vue">
        <Texts :texts="texts"></Texts>
        <Tables :tables="tables"></Tables>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    
</style>
<script>

    import Texts from '../../../components/texts/Texts.vue';
    import Tables from '../../../components/tables/Tables.vue';

    import listAttr from './data/listAttribute';

    export default{
        data(){
            return{
                texts: [
                    {
                        title: '何为列表？',
                        describe: '列表是一组有序的数据。每个列表中的数据项称为元素。在JavaScript中，列表中的元素可以是任意数据类型。' +
                        '列表中可以保存多少元素并没有事先限定，实际使用时元素的数量受到程序内存的限制。'
                    },
                    {
                        title: '列表应该具有的属性有哪些？',
                        describe: '不包含任何元素的列表称为空列表。列表中包含元素的个数称为列表的length。' +
                        '在内部实现上，用一个变量listSize保存列表中元素的个数。可以在列表末尾append一个元素，' +
                        '也可以在一个给定元素后或列表的起始位置insert一个元素。' +
                        '使用remove方法从列表中删除元素，使用clear方法清空列表中所有的元素。' +
                        '<br>还可以使用toString()方法显示列表中所有的元素，使用getElement()方法显示当前元素。' +
                        '列表拥有描述元素位置的属性。列表有前有后（分别对应front和end）。' +
                        '使用next()方法可以从当前元素移动到下一个元素，使用prev()方法可以移动到当前元素的前一个元素。' +
                        '还可以使用moveTo(n)方法直接移动到指定位置，这里的n表示要移动到第n个位置。currPos属性表示列表中的当前位置。' +
                        '<br>列表的抽象数据类型并未指明列表的存储结构，在本章的实现中，我们使用一个数组dataStore来存储元素。'

                    }
                ],
                tables: {
                    title: '列表的抽象数据类型定义',
                    th: ['属性', '含义'],
                    contexts: listAttr
                }
            }
        },
        components:{
            Texts,
            Tables
        }
    }
</script>
