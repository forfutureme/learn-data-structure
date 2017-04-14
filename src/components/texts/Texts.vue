<template>
    <div class="texts">
        <div class="texts-box" v-for="(text, index) in texts">
            <h5 class="texts-title">{{text.title}}</h5>
            <div class="texts-describe" v-html="text.describe">
            </div>
            <div class="texts-img" v-if="text.img">
                <img :src="text.img">
                <p v-if="text.alt" v-html="text.alt"></p>
            </div>
            <div class="texts-code"
                 :class="{'show': text.show}"
                 v-if="text.code">
                <i class="code-btn"
                   :class="{'show': text.show}"
                   @click="showAllCode(index)"></i>
                <div class="code-center" v-html="text.code"></div>
            </div>
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
                position: relative;
                text-indent: 0;
                margin-top: 10px;
                padding: 10px;
                background: #000;
                color: #fff;
                transition: height  .3s;
                height: 50px;
                overflow: hidden;
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
                &.show{
                    height: auto;
                }
                .code-btn{
                    position: absolute;
                    right: 10px;
                    top: 10px;
                    color: #fff;
                    border: 1px solid #ddd;
                    padding: 5px;
                    cursor: pointer;
                    font-style: normal;
                    &::before{
                        content:'+';
                        display: block;
                    }
                    &::after{
                        content:'-';
                        display: none;
                    }
                    &.show{
                        &::before{
                            display: none;
                        }
                        &::after{
                            display: block;
                        }
                    }

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
        methods: {
            /**
             * 展开或收起代码
             * @param index
             */
            showAllCode(index){
                this.texts[index].show = !this.texts[index].show;
            }
        },
        mounted(){
            this.texts.map((item, index) => {
                this.$set(item, 'show', false);
                this.$set(item, 'code', '');
            })
        }
    }
</script>
