<template>
    <div class="Summarys">
        <texts :texts="texts"></texts>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>

</style>
<script>

    import Texts from '~/components/texts/Texts.vue'

    export default{
        data(){
            return {
                texts: [
                    {
                        title: '树简介',
                        describe: '树是一种非线性的数据结构，以分层的方式存储数据。树由一组以边连接的节点组成。' +
                        '一棵树最上面的节点称为根节点，如果一个节点下面连接多个节点，那么该节点称为父节点，它下面的节点称为子节点。' +
                        '一个节点可以有0个、1个或多个子节点。没有任何子节点的节点称为叶子节点。',
                        img: require('src/assets/images/tree/tree-intro.png'),
                        alt: '从一个节点到另一个节点的这一组边称为路径，在图中用虚线表示。以某种特定顺序访问树中所有的节点称为树的遍历。' +
                        '树可以分为几个层次，根节点是第0层，它的子节点是第1层，子节点的子节点是第2层，以此类推。' +
                        '树中任何一层的节点可以都看做是子树的根，该子树包含根节点的子节点，子节点的子节点等。我们定义树的层数就是树的深度。'
                    },
                    {
                        title: '二叉树',
                        describe: '二叉树是一种特殊的树，它的子节点个数不超过两个。' +
                        '通过将子节点的个数限定为2，可以写出高效的程序在树中插入、查找和删除数据。' +
                        '这里我们需要了解俩个新名词：一个父节点的两个子节点分别称为左节点和右节点。'
                    },
                    {
                        title: '二叉查找树',
                        describe: '二叉查找树是一种特殊的二叉树，相对较小的值保存在左节点中，较大的值保存在右节点中。' +
                        '这一特性使得查找的效率很高，对于数值型和非数值型的数据，比如单词和字符串，都是如此。',
                        img: require('src/assets/images/tree/tree-two.png')
                    }
                ]
            }
        },
        components: {
            Texts
        }
    }
</script>
