<template>
    <div class="Uses.vue">
        <div class="example">
            <div class="example-title">
                <h5 class="">使用队列</h5>
            </div>
            <div class="example-main">
                <div class="example-box">
                    <h6 class="title">使用队列对数据进行排序</h6>
                    <p class="describe">队列不仅用于执行现实生活中与排队有关的操作，还可以用于对数据进行排序。
                        计算机刚出生的时候程序通过穿孔卡输入，这些穿孔卡装在一个盒子里，经一个机械装置进行排序。
                        我们可以使用一组队列来模拟这一过程。这种排序技术叫做基数排序，它不是最快的排序算法，
                        但是它展示了一些有趣的队列使用方法。</p>
                    <p class="describe">基数排序将数据集扫描两次。第一次按个位上的数字进行排序，第二次按十位上的数字进行排序。
                        然后把第二次得到的数据依次取出，组成一个新的列表，即为排好序的数字。</p>
                    <div class="content">
                        <RadixSort></RadixSort>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    
</style>
<script>

    import RadixSort from './use/RadixSort.vue';

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
        components:{
            RadixSort
        }
    }
</script>
