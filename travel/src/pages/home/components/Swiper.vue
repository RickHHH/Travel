<template>
    <div class="wrapper">
    <swiper :options="swiperOption">
    <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" >
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default{
    name:'HomeSwiper',
    data (){
        return{
            swiperOption:{
                pagination:'.swiper-pagination',
                loop: true
            },
            swiperList: [{
                id:'0001',
                imgUrl:'http://imgs.qunarzz.com/vs_ceph_vcimg/6ff121fd416169b8d56c60384e3baf79.jpeg'
            },{
                id:'0002',
                imgUrl:'http://imgs.qunarzz.com/vs_ceph_vcimg/79faa5a73731e84a7731db49d5baa91e.jpeg'
            }]
        }
    }
}
</script>



<style lang="stylus" scoperd>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        overflow:hidden
        width:100%
        height:0
        padding-bottom:31.25%
        background-color #fff
        .swiper-img
            width:100%
</style>