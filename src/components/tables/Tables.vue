<template>
    <div class="tables">
        <h4 class="tables-title">{{tables.title}}</h4>
        <table class="tables-table">
            <tbody>
                <tr>
                    <th v-for="title in tables.th">{{title}}</th>
                </tr>
                <tr v-for="context in tables.contexts">
                    <td v-for="text in context">{{text}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    @import "../../assets/stylus/minixs/_flex_box.styl";
    .tables{
        width: 100%;
        margin-top: 20px;
        .tables-title{
            _flex_box();
            font-size: 14px;
            color: #333;
        }
        .tables-table{
            border-collapse: collapse;
            tr{
                th{
                    color: #666;
                    font-size: 12px;
                    font-weight: bold;
                    border: 1px solid #ddd;
                    /*border-top: 0;
                    border-right: 0;
                    &:first-child{
                        border-left: 0;
                    }*/
                    padding: 5px;
                }
                td{
                    color: #999;
                    font-size: 12px;
                    border: 1px solid #ddd;
                    /*border-bottom: 0;
                    border-right: 0;
                    &:first-child{
                        border-left: 0;
                    }*/
                    padding: 5px;
                }
            }
        }
    }
</style>
<script>

    export default{
        props: ['tables'],
        components:{

        }
    }
</script>
