<template>
    <div class="navs">
        <ul>
            <li v-for="nav in navs" :class="{'activity': nav.id == activityNav}">
                <a :class="{'activity': nav.id == activityNav,
                            'have-child': nav.children && nav.children.length}"
                   @click="switchNav(nav.id)">{{nav.name}}</a>
                <div class="nav-second" v-if="nav.children && nav.children.length">
                    <a class="nav-second-link"
                       v-for="second in nav.children"
                       :class="{'activity': second.id == activityNavChild}"
                       @click="switchNav(second.id, second.father)">{{second.name}}</a>
                </div>
            </li>
        </ul>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    @import "../../assets/stylus/minixs/_flex_box.styl"
    .navs{
        width: 100%;
        ul{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            li{
                width: 100%;
                &.activity{
                    .nav-second{
                        display: flex;
                    }
                    a{
                        &.have-child{
                            &::after{
                                transition: all .3s ease;
                                top: 8px;
                                transform: rotate(135deg)
                            }
                        }
                    }
                }
                a{
                    _flex_box();
                    width: 100%;
                    height: 30px;
                    padding-right: 10px;
                    font-size 14px;
                    color: #555;
                    border-bottom:1px solid #eee;
                    cursor: pointer;
                    &.activity{
                        background: #eee;
                        color: #333;
                    }
                    &.have-child{
                        position: relative;
                        &::after{
                            position: absolute;
                            width: 8px;
                            height: 8px;
                            right: 10px;
                            top: 13px;
                            content: '';
                            border: 1px solid #333;
                            border-left: 0;
                            border-bottom: 0;
                            transform: rotate(-45deg);
                            transition: all .3s ease
                        }
                    }
                }
                .nav-second{
                    width: 100%;
                    display: none;
                    flex-wrap: wrap;
                    .nav-second-link{
                        height: 20px;
                        font-size: 12px;
                        justify-content: flex-end;
                        &.activity{
                            background: #eee;
                            color: #333;
                        }
                    }
                }
            }
        }
    }
</style>
<script>

    import * as types from '../../store/mutation-type';

    export default{
        props: ['navs', 'activityNav', 'activityNavChild', 'type', 'typeChild'],
        data(){
            return{
                msg:'hello vue'
            }
        },
        methods: {
            /**
             * 切换nav
             * @param id
             */
            switchNav(id, father){
                if (father){
                    this.$store.commit(types[this.typeChild], id)
                } else{
                    this.$store.commit(types[this.type], id);
                }

            }
        },
        mounted(){
//            console.log(this.navs, this.activityNav);
        }
    }
</script>
