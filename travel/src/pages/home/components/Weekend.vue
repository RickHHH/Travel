<template>
    <div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li 
        class="item border-bottom"
            v-for="item of recommendList" 
            :key="item.id">  
            <div class="item-img-wrapper">  
                <img class="item-img" :src="item.imgUrl" >
            </div>            
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
    </div>
</template>

<script>

export default {
    name:'HomeWeekend',
    data () {
        return{
            recommendList: [{
                id:'0001',
                imgUrl:"//img1.qunarzz.com/sight/p0/2103/29/29cfd995b48c846fa3.img.jpg_256x160_096d8d49.jpg",
                title:'dd',
                desc:'dddd'
            },
            {
                id:'0002',
                imgUrl:'//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg',
                title:'dd',
                desc:'dddd'
            },
            {
                id:'0003',
                imgUrl:'//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_256x160_f977b5d4.jpg',
                title:'dd',
                desc:'dddd'
            },
            {
                id:'0004',
                imgUrl:'//img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_256x160_2c506073.jpg',
                title:'dd',
                desc:'dddd'
            },
        ]
        }
    }
}
    

</script>

<style lang="stylus" scoped>
    @import "~@/assets/styles/mixins.styl"
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    .item-img-wrapper
        overflow:hidden
        height: 0
        padding-bottom:38.2%
        .item-img
            width:100%
    .item-info
        padding: .1rem
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()


</style>
