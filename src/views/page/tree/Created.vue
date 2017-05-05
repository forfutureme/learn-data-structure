<template>
    <div class="Created">
        <texts :texts="texts"></texts>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>

</style>
<script>
    import Texts from '~/components/texts/Texts.vue'

    import { mapState } from 'vuex';

    import GetRandomNumber from '~/tools/data/GetRandomNumber'
    import BST from '~/tools/tree/BST';

    export default{
        computed: {
            ...mapState({
                code: state => state.tree.code
            })
        },
        data(){
            return {
                type: 'tree',
                texts: [
                    {
                        title: '创建二叉查找树(BST)',
                        describe: '我们让类只包含一个数据成员：一个表示二叉查找树根节点的Node对象。该类的构造函数将根节点初始化为null，以此创建一个空节点。'
                    },
                    {
                        title: 'Node类',
                        describe: '二叉查找树的元素类型'
                    },
                    {
                        title: 'BST类',
                        describe: '初始化二叉查找树类'
                    },
                    {
                        title: 'insert',
                        describe: 'BST先要有一个insert()方法，用来向树中加入新节点。首先要创建一个Node对象，将数据传入该对象保存。<br>' +
                        '其次检查BST是否有根节点，如果没有，那么这是棵新树，该节点就是根节点，这个方法到此也就完成了；否则，进入下一步.<br>' +
                        '如果待插入节点不是根节点，那么就需要准备遍历BST，找到插入的适当位置。该过程类似于遍历链表。用一个变量存储当前节点，一层层地遍历BST。<br>' +
                        '进入BST以后，下一步就要决定将节点放在哪个地方。找到正确的插入点时，会跳出循环。查找正确插入点的算法如下:<br>' +
                        '01.设根节点为当前节点。<br>' +
                        '02.如果待插入节点保存的数据小于当前节点，则设新的当前节点为原节点的左节点；反之，执行第4步。<br>' +
                        '03.如果当前节点的左节点为null，就将新的节点插入这个位置，退出循环；反之，继续执行下一次循环。<br>' +
                        '04.设新的当前节点为原节点的右节点。<br>' +
                        '05.如果当前节点的右节点为null，就将新的节点插入这个位置，退出循环；反之，继续执行下一次循环。'
                    },
                    {
                        title: 'inOrder',
                        describe: '中序遍历(从小到大),中序遍历按照节点上的键值，以升序访问BST上的所有节点。该方法需要以升序访问树中所有节点，先访问左子树，再访问根节点，最后访问右子树。'
                    },
                    {
                        title: 'preOrder',
                        describe: '先序遍历(按数据进入树的顺序),'
                    },
                    {
                        title: 'postOrder',
                        describe: '后序遍历（按叶子节点自下而上的顺序）'
                    },
                    {
                        title: 'getMin',
                        describe: '获取最小值'
                    },
                    {
                        title: 'getMax',
                        describe: '获取最大值'
                    },
                    {
                        title: 'find',
                        describe: '查找给定数据是否在树中'
                    },
                    {
                        title: '从二叉查找树上删除节点',
                        describe: '从BST上删除节点的操作最复杂，其复杂程度取决于删除哪个节点。如果删除没有子节点的节点，那么非常简单。' +
                        '如果节点只有一个子节点，不管是左子节点还是右子节点，就变得稍微有点复杂了。删除包含两个子节点的节点最复杂。',
                        img: require('src/assets/images/tree/tree-delete.png'),
                        alt: '从BST中删除节点的第一步是判断当前节点是否包含待删除的数据，如果包含，则删除该节点；' +
                        '如果不包含，则比较当前节点上的数据和待删除的数据。如果待删除数据小于当前节点上的数据，则移至当前节点的左子节点继续比较；' +
                        '如果删除数据大于当前节点上的数据，则移至当前节点的右子节点继续比较。<br> ' +
                        '如果待删除节点是叶子节点（没有子节点的节点），那么只需要将从父节点指向它的链接指向null。<br> ' +
                        '如果待删除节点只包含一个子节点，那么原本指向它的节点就得做些调整，使其指向它的子节点。<br>' +
                        '最后，如果待删除节点包含两个子节点，正确的做法有两种：要么查找待删除节点左子树上的最大值，' +
                        '要么查找其右子树上的最小值。这里我们选择后一种方式。<br>' +
                        '我们需要一个查找子树上最小值的方法，后面会用它找到的最小值创建一个临时节点。' +
                        '将临时节点上的值复制到待删除节点，然后再删除临时节点。<br>' +
                        '整个删除过程由两个方法完成。remove()方法只是简单地接受待删除数据，调用removeNode()删除它，后者才是完成主要工作的方法。'
                    },
                    {
                        title: 'remove',
                        describe: '接受一个待删除对象最为参数，主要是调用具体删除方法'
                    },
                    {
                        title: '调用removeNode',
                        describe: '删除指定的数据对象'
                    }
                ]
            }
        },
        components: {
            Texts
        },
        mounted(){
            this.texts.forEach((item, index) => {
                item.code = this.code[this.type][index];
            });
            this.createTree();
        },
        methods: {
            createTree(){
                let bst = new BST();
                let arr = new GetRandomNumber().getNumber();
                console.log(arr);
                for (let i = 0; i < arr.length; i++){
                    bst.insert(arr[i]);
                }
                console.log(bst);
                //中序
                bst.inOrder(bst.root);
                console.log('--------------------分割线---------------------');
                //先序
                bst.preOrder(bst.root);
                console.log('--------------------分割线----------------------');
                //后序
                bst.postOrder(bst.root);
                console.log('--------------------分割线----------------------');
                console.log(`最小值：${bst.getMin()}`);
                console.log(`最大值：${bst.getMax()}`);
                let targetNumber = parseInt(Math.random() * 100, 10);
                console.log(`${bst.find(targetNumber) ? `${targetNumber}在树中` : `${targetNumber}不在树中`}`);
                console.log(`${bst.find(arr[0]) ? `${arr[0]}在树种` : `${arr[0]}不在树种`}`)
            }
        }
    }
</script>
