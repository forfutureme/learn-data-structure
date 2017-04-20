<template>
    <div class="radix-sort">
        <Examples :examples="examples"></Examples>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    
</style>
<script>

    import Queue from '../../../../tools/queue/Queue';

    import Examples from '../../../../components/examples/Examples.vue';

    export default{
        data(){
            return{
                examples: {
                    title: '模拟基数排序',
                    type: 'createData',
                    describe: '尝试使用队列模拟基数排序，首先我们需要随机生成一组2位数字，然后对其经行排序。',
                    createData: {
                        total: 10,
                        strings: '',
                        queues: [],
                        originData: [],
                        resultData: [],
                        doName: '第一次排序',
                        doName2: '第二次排序'
                    }
                }
            }
        },
        components:{
            Examples
        },
        methods: {
            /**
             * 生成随机原始数据
             */
            createOriginData(){
                let createData = this.examples.createData;
                createData.originData.length = 0;
                for (let i = 0; i < createData.total; i++){
                    createData.originData.push((Math.random() * 100).toFixed());
                }
                createData.strings = createData.originData.join(',');
            },
            /**
             * 生成队列数组
             */
            createQueues(){
                let createData = this.examples.createData;
                for (let i = 0; i < createData.total; i++){
                    createData.queues.push(new Queue());
                }
            },
            /**
             * 根据不同基数 存放数据
             * @param digit
             */
            distribute(digit){
                let createData = this.examples.createData;
                for (let i = 0; i < createData.total; i++){
                    if (digit == 1){
                        createData.queues[createData.originData[i] % 10].enqueue(createData.originData[i])
                    } else {
                        createData.queues[(createData.originData[i] / 10).toFixed()].enqueue(createData.originData[i]);
                    }
                }
                return this.collect();
            },
            /**
             * 取出数据排序
             */
            collect(){
                let index = 0;
                let createData = this.examples.createData;
                for (let i = 0; i < createData.total; i++){
                    while (!createData.queues[i].empty()){
                        createData.resultData[index++] = createData.queues[i].dequeue();
                    }
                }
                return createData.resultData.join(',')

            },
            sort(digit){
                return this.distribute(digit);
            }
        },
        mounted(){
            this.createQueues();
            this.examples.createData.createOriginData = this.createOriginData;
            this.examples.createData.sort = this.sort;
        }
    }
</script>
