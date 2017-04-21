<template>
    <div class="Uses">
        <texts :texts="texts"></texts>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>

</style>
<script>

    import Texts from '../../../components/texts/Texts.vue'

    export default{
        data(){
            return {
                texts: [
                    {
                        title: '使用散列',
                        describe: '暂时没有'
                    }
                ]
            }
        },
        components: {
            Texts
        }
    }
</script>
