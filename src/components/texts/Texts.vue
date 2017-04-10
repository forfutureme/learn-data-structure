<template>
    <div class="texts">
        <div class="texts-box" v-for="text in texts">
            <h5 class="texts-title">{{text.title}}</h5>
            <div class="texts-describe" v-html="text.describe">
            </div>
            <div class="texts-img" v-if="text.img">
                <img :src="text.img">
                <p v-if="text.alt" v-html="text.alt"></p>
            </div>
            <div class="texts-code" v-if="text.code" v-html="text.code"></div>
        </div>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    .texts {
        width: 100%;
        .texts-box {
            margin-top: 20px;
            padding-top: 10px;
            border-top: 1px solid #ddd;
            &:first-child {
                margin-top: 0;
                padding-top: 0;
                border-top: 0;
            }
            .texts-title{
                padding: 5px;
                font-size: 14px;
                color: #333;
            }
            .texts-describe,
            .texts-code{
                text-indent: 2em;
                font-size: 12px;
                color: #999;
            }
            .texts-code{
                text-indent: 0;
                margin-top: 10px;
                padding: 10px;
                background: #000;
                color: #fff;
                .reserved-word{
                    color: #C41A16
                }
                .attribute{
                    color: #994500
                }
                .compare{
                    color: #3ad900
                }
                span{
                    font-size: 18px;
                }

            }
            .texts-img{
                margin-top 10px;
                img{
                    width: 100%;
                }
                p{
                    font-size: 10px;
                    color: #aaa
                }
            }
        }
    }

</style>
<script>

    export default{
        props: ['texts'],
        mounted(){
            console.log(this.texts);
        }
    }
</script>
