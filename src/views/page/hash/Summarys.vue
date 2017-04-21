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
                        title: '何为散列？',
                        describe: '散列是一种常用的数据存储技术，散列后的数据可以快速地插入或取用。散列使用的数据结构叫做散列表。'
                    },
                    {
                        title: '优点',
                        describe: '在散列表上插入、删除和取用数据都非常快'
                    },
                    {
                        title: '缺点',
                        describe: '查找操作来说却效率低下'
                    },
                    {
                        title: '散列概览',
                        describe: '我们的散列表是基于数组进行设计的。数组的长度是预先设定的，如有需要，可以随时增加。' +
                        '所有元素根据和该元素对应的键，保存在数组的特定位置，该键和我们前面讲到的字典中的键是类似的概念。' +
                        '使用散列表存储数据时，通过一个散列函数将键映射为一个数字，这个数字的范围是0到散列表的长度。<br>' +
                        '理想情况下，散列函数会将每个键值映射为一个唯一的数组索引。' +
                        '然而，键的数量是无限的，数组的长度是有限的（理论上，在JavaScript中是这样），' +
                        '一个更现实的目标是让散列函数尽量将键均匀地映射到数组中。<br>' +
                        '即使使用一个高效的散列函数，仍然存在将两个键映射成同一个值的可能，这种现象称为碰撞（collision），' +
                        '当碰撞发生时，我们需要有方案去解决。本章稍后部分将详细讨论如何解决碰撞。<br>' +
                        '要确定的最后一个问题是：散列表中的数组究竟应该有多大？这是编写散列函数时必须要考虑的。' +
                        '对数组大小常见的限制是：数组长度应该是一个质数。在实现各种散列函数时，我们将讨论为什么要求数组长度为质数。' +
                        '之后，会有多种确定数组大小的策略，所有的策略都基于处理碰撞的技术，' +
                        '因此，我们将在讨论如何处理碰撞时对它们进行讨论，下图阐述了散列的概念',
                        img: require('src/assets/images/hash/hash-intro.png')
                    }
                ]
            }
        },
        components: {
            Texts
        }
    }
</script>
