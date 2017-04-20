<template>
    <div class="examples">
        <h5 class="title">{{examples.title}}</h5>
        <div class="examples-center">
            <div class="examples-describe">{{examples.describe}}</div>
            <div class="examples-from" v-if="examples.type == 'inputCheck'">
                <div class="examples-textarea" v-for="textarea in examples.textareas">
                    <label>{{textarea.title}}</label>
                    <textarea v-model="textarea.val"></textarea>
                </div>
                <div class="btn-box">
                    <a class="examples-btn clear" @click="toClear">清空</a>
                    <a class="examples-btn sure" @click="toCheck">测试</a>
                </div>
            </div>
            <div class="examples-create" v-if="examples.type == 'createData'">
                <div class="examples-create-init">
                    <a class="examples-btn sure"
                       @click="toCreateData">点我生成一组数据</a>
                    <p>{{examples.createData.strings}}</p>
                    <a class="examples-btn sure"
                       v-if="examples.createData.doName"
                       @click="sort(1)">{{examples.createData.doName}}</a>
                    <a class="examples-btn sure"
                       v-if="examples.createData.doName2"
                       @click="sort(10)">{{examples.createData.doName2}}</a>
                </div>

            </div>
            <div class="examples-result">
                <p>结果：<span>{{result}}</span></p>
            </div>
        </div>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    @import "../../assets/stylus/minixs/_flex_box.styl";
    .examples{
        border: 1px solid #ddd;
        padding: 5px;
        margin-top: 20px;
        border-radius: 5px;
        .title{
            font-size: 14px;
            color: #666;
            text-indent: 2em;
        }
        .examples-center{
            border-top: 1px solid #ddd;
            min-height: 100px;
            padding: 5px;
            font-size: 12px;
        }
        .examples-describe{
            margin-bottom: 10px;
            color: #999;
        }
        .examples-from{
            .examples-textarea,
            .examples-inout,
            .examples-select{
                _flex_box();
                justify-content: flex-start;
                padding: 5px 0;
                label{
                    width: 120px;
                    text-align: right;
                    margin-right: 10px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                }
            }
            .examples-textarea{
                textarea {
                    width: 100%;
                    border: 1px solid #ddd;
                    padding: 5px;
                }
            }
        }
        .examples-create{
            .examples-create-init{
                display: flex;
                flex-wrap: wrap;
                p{
                    width: 100%;
                    min-height: 50px;
                    margin: 10px auto;
                    padding: 5px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                }
            }
        }

        .examples-result{
            padding: 5px 0;
            p{
                display: flex;
                span{
                    display: inline-block;
                    min-width: 100px;
                    margin-left: 5px;
                    border-bottom: 1px solid  #ddd;
                }
            }
        }
        .btn-box{
            display: flex;
        }
        .examples-btn{
            _flex_box();
            min-width: 80px;
            margin: 0 5px;
            padding: 5px  15px;
            cursor: pointer;
            border-radius: 5px;
            color: #000;
            background: #ddd;
            &.sure{
                background: #00B7FF;
                color: #fff;
            }
        }
    
    }
</style>
<script>

    export default{
        props: ['examples'],
        data(){
            return{
                result: ''
            }
        },
        components:{

        },
        methods: {
            /**
             * 检查
             */
            toCheck(){
                this.result = `${this.examples.textareas[0].val}${this.examples.checkFun(this.examples.textareas[0].val)}回文`;
            },
            /**
             * 清空输入
             */
            toClear(){
                this.examples.textareas.map((item, i) => {
                    this.examples.textareas[i].val = '';
                })
            },
            /**
             * 生成随机数据
             */
            toCreateData(){
                this.examples.createData.createOriginData();
            },
            sort(digit){
                this.result = this.examples.createData.sort(digit);
            },
        },
        mounted(){
            console.log(this.examples);
        }
    }
</script>
