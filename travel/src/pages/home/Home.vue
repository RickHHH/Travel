<template>
    <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
    </div>

</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

export default {
    
        name: 'Home',
        components:{
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        data () {
            return {
                city:'',
                swiperList: [],
                iconList:[],
                recommendList:[],
                weekendList:[],
                hotCities:[]
            }
        },
        methods: {  
            getHomeInfo(){
                axios.get('/mock/index.json')
                    .then(this.getHomeInfoSucc);
            },
            getHomeInfoSucc (res) {
                res = res.data;
                console.log(res)

                if (res.ret && res.data) {
                    const data =res.data// eslint-disable-line no-unused-vars
                    this.city = data.city
                    this.swiperList = data.swiperList
                    this.iconList =data.iconList
                    this.recommendList =data.recommendList
                    this.weekendList =data.weekendList
                }
            }
        },
        mounted () {
            this.getHomeInfo()
        }
    }
</script>

<style>

</style>


                  