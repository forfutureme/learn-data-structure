<template>
    <div class="kill-game">
        <div class="kill-game-describe">
            根据问题描述，默认会以总数为40，逢3杀人的方式进行游戏，当然我们还可以进行扩展，扩展成总数M个，逢N开始杀人。
        </div>
        <div class="kill-game-setting">
            <div class="kill-game-input">
                <label>总人数：</label>
                <input placeholder="请输入参与游戏的总人数" v-model="total">
            </div>
            <div class="kill-game-input">
                <label>逢人数：</label>
                <input placeholder="请输入逢几人杀一人" v-model="step">
            </div>
            <div class="kill-game-input">
                <a @click="createScene">生成场景</a>
                <a @click="startKill">开始杀人</a>
            </div>
        </div>
        <div class="kill-game-rules">
            <p>当前模式为：总人数 <span>{{total}}</span>，逢{{step}}个人杀一个。</p>
        </div>
        <div class="kill-game-run">
            <div class="kill-game-box" style="width: 400px; height: 400px; background-color: #ddd">
                <svg v-for="list in gameLists"
                     :style="list.tranDeg">
                    <g>
                        <path :d="list.pathD"
                              :style="lifePeople.indexOf(list.title) > -1 ? list.pathStyle : list.pathKillStyle"/>
                        <text :style="list.textStyle">
                            {{list.title}}
                        </text>
                    </g>
                </svg>

            </div>
        </div>

    </div>
</template>
<style rel="stylesheet/stylus" lang="stylus" scoped>
    @import "../../../../assets/stylus/minixs/_flex_box.styl";
    .kill-game{
        padding: 10px;
        border: 1px solid #ddd;
        font-size: 12px;
        .kill-game-describe{
            text-indent: 2em;
        }
        .kill-game-setting{
            padding: 10px 5px;
            .kill-game-input{
                _flex_box();
                justify-content: flex-start;
                height: 30px;
                label{
                    color: #999;
                    width: 80px;
                    text-align: right;
                }
                input{
                    width: 150px;
                    height: 25px;
                    border: 1px solid #ddd;
                    text-indent: .5em;
                }
                a{
                    _flex_box();
                    margin: 0 5px;
                    padding: 5px  15px;
                    background: #00B7FF;
                    cursor: pointer;
                    border-radius: 5px;
                    color: #f8f8f8;
                }
            }
        }
        .kill-game-run{
            margin-top: 40px;
            padding: 5px;
            .kill-game-box{
                position: relative;
            }
        }
    }
</style>
<script>

    import LinkList from '../../../../tools/linkList/noHeadLinkedList';

    export default{
        data(){
            return{
                peopleName: 'p',
                LoopLink: {},
                total: 40,
                step: 3,
                allPeople: [],
                lifePeople: [],
                gameLists: []
            }
        },
        components:{

        },
        mounted(){

        },
        methods: {
            /**
             * 生成所有参与人
             * @returns {*}
             */
            getAllPeople(){
                for (let i = 1; i < this.total; i++){
                    this.LoopLink.insertNode(`${this.peopleName}${i+1}`, `${this.peopleName}${i}`)
                }
                return this.LoopLink.consoleLink();
            },
            /**
             * 生成场景
             */
            createScene(){
                this.LoopLink = new LinkList({
                    first: `${this.peopleName}1`,
                    mode: 'loop'
                });
                let peopleArr = this.getAllPeople();
                this.allPeople.length = 0;
                this.allPeople.push(...peopleArr);
                this.lifePeople.length = 0;
                this.lifePeople.push(...peopleArr);
                this.gameLists.length = 0;

                let deg = 360 / this.total;

                peopleArr.map((item, i) => {
                    let obj = {
                        title: item,
                        tranDeg: `position: absolute; width: 400px; height: 400px; transform: rotate(${deg * i}deg)`,
                        left:  deg > 90
                            ? 200 * (1 + Math.cos((180 - deg) * Math.PI / 180))
                            : 200 * (1 - Math.cos(deg * Math.PI / 180)),
                        right: deg > 90
                            ? 200 * (1 - Math.sin(deg * Math.PI / 180))
                            : 200 * (1 - Math.sin((180 - deg) * Math.PI/ 180)),
                        textX: deg > 89
                            ? 200 * Math.pow(Math.sin(deg * Math.PI / 360), 3)
                            : 200 * Math.sin(deg * Math.PI / 360),
                        textY: deg > 89
                            ? 200 * (Math.cos(deg * Math.PI / 360))
                            : 200 * Math.pow(Math.cos(deg * Math.PI / 360), 2),
                        textRotate: deg / 2 - 90,
                        color: '#3ad900',
                        colorKilled: '#f7f7f7'
                    };
                    obj.pathD = `M200,200 L0,200 A200,200 0 0,1 ${obj.left}, ${obj.right} z`;
                    obj.pathStyle = `fill: ${obj.color}; fill-opacity: 1; stroke:black; stroke-width: 1`;
                    obj.pathKillStyle = `fill: ${obj.colorKilled}; fill-opacity: 1; stroke:black; stroke-width: 1`;
                    obj.textStyle = `transform: translate(${obj.textX}px, ${obj.textY}px) rotate(${obj.textRotate}deg)`;
                    this.gameLists.push(obj);
                })
            },
            killPeople(){
                let currNode = this.LoopLink.linkList;
                //this.LoopLink.consoleLink();
                while (currNode.next.next.element != currNode.element){
                    this.LoopLink.removeNode(currNode.next.next.element);
                    currNode = currNode.next.next;
                    this.lifePeople = this.LoopLink.consoleLink();
                }
            },
            /**
             * 开始杀人
             */
            startKill(){
                if (this.step > this.total){
                    return;
                }
                this.killOnePeoPle();
            },
            /**
             * 获取目标对象
             * @returns {Node|*}
             */
            getTargetItem(node){
                let item = node || this.LoopLink.linkList;
                let n = this.step;
                while (n > 1){
                    item = item.next;
                    n--
                }
                return item;
            },
            /**
             * 杀一个人
             * @param node
             */
            killOnePeoPle(node){
                let currNode = node || this.LoopLink.linkList;
                let targetNode = this.getTargetItem(currNode);
                let nextNode;
                let _this = this;
                if (targetNode.element != currNode.element){
                    this.LoopLink.removeNode(targetNode.element);
                    nextNode = this.getTargetItem(currNode);
                    this.lifePeople = this.LoopLink.consoleLink();
                }
                if (this.lifePeople.length > this.step - 1){
                    setTimeout(function () {
                        _this.killOnePeoPle(nextNode);
                    }, 1000)
                }

            }
        }
    }
</script>
