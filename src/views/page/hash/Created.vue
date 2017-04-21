<template>
    <div class="Created">
        <texts :texts="texts"></texts>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>

</style>
<script>

    import Texts from '../../../components/texts/Texts.vue';

    import { mapState } from 'vuex';

    import Hash from '../../../tools/hash/Hash';

    export default{
        computed: {
            ...mapState({
                code: state => state.hash.code
            })
        },
        data(){
            return {
                type: 'hash',
                texts: [
                    {
                        title: '散列Hash类',
                        describe: '我们使用一个类来表示散列表，该类包含计算散列值的方法、向散列中插入数据的方法、' +
                        '从散列表中读取数据的方法、显示散列表中数据分布的方法，以及其他一些可能会用到的工具方法。'
                    },
                    {
                        title: 'simple',
                        describe: '一个简单的生成hash码的方法'
                    },
                    {
                        title: 'getHashCode',
                        describe: '生成hash码，该方法可以根据需求选择不通成都的hash码生成方法'
                    },
                    {
                        title: 'put',
                        describe: '添加元素到散列'
                    },
                    {
                        title: 'showHash',
                        describe: '显示散列所有元素'
                    },
                    {
                        title: '碰撞',
                        describe: '基于上面的Hash我们测试下散列类是否正常工作。',
                        codeDesc: '从上面结果我们看出，散列的结果少了一个元素，也就是说发生了碰撞。其中俩个元素产生了一样的hashCode.' +
                        '想要避免上面出现的碰撞，就需要一个相对好点的散列函数。'
                    },
                    {
                        title: '相对更好的散列函数',
                        describe: '基于霍纳算法我们换了一个散列函数，新函数和测试代码如下'
                    },
                    {
                        title: 'putKey',
                        describe: '该方法同时接受键和数据作为参数，对键值散列后，将数据存储到散列表中。'
                    },
                    {
                        title: 'get',
                        describe: '查找元素，接受一个参数'
                    },
                    {
                        title: '解决碰撞',
                        describe: '开链法：简单点说就是把散列表值换成一个数组，将值统一放到数组里，' +
                        '如果有碰撞在对应的位置的数组往后添加值即可。最终散列表将是一个二维数组。<br>' +
                        '线性探测法：含义就是如果发生碰撞，在当前碰撞的位置依次向后检查若有空位则存储之。<br>' +
                        '方法选择原则：如果数组的大小是待存储数据个数的1.5倍，那么使用开链法；' +
                        '如果数组的大小是待存储数据的两倍及两倍以上时，那么使用线性探测法。'
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
            this.textHash();
        },
        methods: {
            textHash(){
                let hash = new Hash();
                let arr = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
                for (let i = 0; i < arr.length; i++){
                    hash.put(arr[i]);
                }
                console.log(`元素数据共${arr.length}个。`);
                console.log(hash.showHash());
            }
        }
    }
</script>
