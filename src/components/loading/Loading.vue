<template>
    <div class="loading">
        <div class="loading-style">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    @import "../../assets/stylus/variable/_variable.styl";
    @import "../../assets/stylus/minixs/_center.styl"
    @import "../../assets/stylus/function/_get_zIndex.styl"
    .loading {
        z-index: $zIndex-loading;
        position: fixed;
        _center();
        .loading-style {
            position: relative;
            margin-top: 5px;
            span {
                position: absolute;
                display: inline-block;
                width: 10px;
                height: 10px;
                background: #000;
                border-color: #000;
                border-radius: 50%;
                &:first-child,
                &:nth-child(2) {
                    left: 0;
                    top: 0;
                    width: 0;
                    height: 0;
                    border: 25px solid #000;
                    border-right-color: transparent;
                    background: transparent;
                    animation: rotate_half_up 0.5s 0s infinite;
                }
                &:nth-child(2) {
                    animation: rotate_half_down 0.5s 0s infinite;
                }
                &:nth-child(3),
                &:nth-child(4),
                &:nth-child(5) {
                    margin: 2px;
                    left: 100px;
                    top: 23px;
                }
                &:nth-child(3) {
                    transform: translate(0, -6.25px);
                    animation: pacman-balls 1s 0s infinite linear;
                }
                &:nth-child(4) {
                    transform: translate(0, -6.25px);
                    animation: pacman-balls 1s 0.33s infinite linear;
                }
                &:nth-child(5) {
                    transform: translate(0, -6.25px);
                    animation: pacman-balls 1s 0.66s infinite linear;
                }
            }
        }

    }

    @keyframes rotate_half_up {
        0% {
            transform: rotate(270deg);
        }
        50% {
            transform: rotate(360deg);
        }
        100% {
            transform: rotate(270deg);
        }
    }

    @keyframes rotate_half_down {
        0% {
            transform: rotate(90deg);
        }
        50% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(90deg);
        }
    }

    @keyframes pacman-balls {
        75% {
            opacity: .7;
        }
        100% {
            transform: translate(-100px, -6.25px);
        }
    }

</style>
<script>

    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {}
    }
</script>
