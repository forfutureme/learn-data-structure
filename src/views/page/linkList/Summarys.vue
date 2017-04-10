<template>
    <div class="summary">
        <Texts :texts="texts"></Texts>
    </div>
</template>
<style lang="stylus" scoped>
    .summary{
        width: 100%;
        padding: 10px;
    }
</style>
<script>

    import Texts from '../../../components/texts/Texts.vue';

    export default{
        data(){
            return{
                texts: [
                    {
                        title: '为什么会有链表？',
                        describe: '我们用到的最多的数据结构大概是数组吧，然而数组不总是组织数据的最佳数据结构，原因如下。' +
                        '在很多编程语言中，数组的长度是固定的，所以当数组已被数据填满时，再要加入新的元素就会非常困难。' +
                        '在数组中，添加和删除元素也很麻烦，因为需要将数组中的其他元素向前或向后平移，以反映数组刚刚进行了添加或删除操作。' +
                        '然而，JavaScript的数组并不存在上述问题，因为使用splice()方法不需要再访问数组中的其他元素了。' +
                        'JavaScript中数组的主要问题是，它们被实现成了对象，与其他语言（比如C++和Java）的数组相比，效率很低（请参考Crockford那本书的第6章）'
                    },
                    {
                        title: '何为链表？',
                        describe: '链表是由一组节点组成的集合。每个节点都使用一个对象的引用指向它的后继。指向另一个节点的引用叫做链。' +
                        '数组元素靠它们的位置进行引用，链表元素则是靠相互之间的关系进行引用。',
                        img: require('src/assets/images/linkList/link-no-head.png'),
                        alt: '如图，我们说bread跟在milk后面，而不说bread是链表中的第二个元素。' +
                        '遍历链表，就是跟着链接，从链表的首元素一直走到尾元素（但这不包含链表的头节点，头节点常常用来作为链表的接入点）。' +
                        '图中另外一个值得注意的地方是，链表的尾元素指向一个null节点。'
                    },
                    {
                        title: '有头的链表',
                        describe: '链表中插入一个节点的效率很高。向链表中插入一个节点，需要修改它前面的节点（前驱），' +
                        '使其指向新加入的节点，而新加入的节点则指向原来前驱指向的节点。下图演示了如何在eggs后加入cookies。',
                        img: require('src/assets/images/linkList/link-head.png'),
                    },
                    {
                        title: '向链表插入元素cookies',
                        describe: '从链表中删除一个元素也很简单。将待删除元素的前驱节点指向待删除元素的后继节点，同时将待删除元素指向null，元素就删除成功了。' +
                        '下图演示了从链表中删除“bacon”的过程。',
                        img: require('src/assets/images/linkList/link-delete.png')
                    },
                    {
                        title: '链表能做什么？',
                        describe: '除了对数据的随机访问，链表几乎可以用在任何可以使用一维数组的情况中。'
                    },
                    {
                        title: '一个有趣的问题。',
                        describe: '传说在公元1世纪的犹太战争中，犹太历史学家弗拉维奥·约瑟夫斯和他的40个同胞被罗马士兵包围。' +
                        '犹太士兵决定宁可自杀也不做俘虏，于是商量出了一个自杀方案。他们围成一个圈，从一个人开始，数到第三个人时将第三个人杀死，' +
                        '然后再数，直到杀光所有人。约瑟夫和另外一个人决定不参加这个疯狂的游戏，他们快速地计算出了两个位置，站在那里得以幸存。' +
                        '写一段程序将n个人围成一圈，并且第m个人会被杀掉，计算一圈人中哪两个人最后会存活。'
                    }
                ]
            }
        },
        components:{
            Texts
        }
    }
</script>
