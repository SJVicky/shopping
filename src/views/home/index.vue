<template>
  <div>
      <nav-bar class="nav-box">
          <span slot="nav-center">首页</span>
      </nav-bar>
      <home-swiper :banners="banners"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
// import BannerFirst from 'assets/images/banner/banner-1.png'
// import BannerSecond from 'assets/images/banner/banner-2.png'
export default {
    components:{
        NavBar,
        HomeSwiper
    },
    data(){
        return{
            banners:[
                {
                    image:'',
                    link:'http://www.baidu.com',
                    id:'1'
                },
                 {
                    image:'',
                    link:'http://www.baidu.com',
                    id:'2'
                }
            ]
        }
    }
}

</script>
<style lang='css' scoped>
.nav-box{
    color:#fff;
    background-color: #ff8198;

}
</style>