<template>
    <div class="dyadic-array">
        <Texts :texts="texts"></Texts>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    
</style>
<script>

    import Texts from '../../../components/texts/Texts.vue';

    import { mapState } from 'vuex';

    export default{
        computed: {
            ...mapState({
                code: state => state.arrayStore.code
            })
        },
        data(){
            return{
                type: 'dyadicArray',
                texts: [
                    {
                        title: '创建二维数组',
                        describe: 'JavaScript只支持一维数组，但是通过在数组里保存数组元素的方式，可以轻松创建多维数组。',
                        code: ''
                    },
                    {
                        title: '处理二维数组',
                        describe: '二维数组的处理其实很简单，简言之就是俩层循环。',
                        code: ''
                    }
                ]
            }
        },
        components:{
            Texts
        },
        mounted(){
            console.log(this.code);
            this.texts.map((item, index) => {
                item.code = this.code[this.type][index]
            })
        }
    }
</script>
