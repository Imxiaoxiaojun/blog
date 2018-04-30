<template>
    <div id="w_carousel" class="carousel slide w_carousel" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <template  v-for="(banner,index) in banners">
            <li data-target="#w_carousel" :data-slide-to="index" class="active" v-if="index === 0"></li>
            <li data-target="#w_carousel" :data-slide-to="index" v-else></li>
          </template>
        </ol>

        <!-- Wrapper for slides -->
        <!--<div class="carousel-inner" role="listbox">-->
        <div  class="carousel-inner" role="listbox">
          <template v-for = "(banner,index) in banners">
            <div class="item active" v-if="index === 0" >
              <img :src="banner.bannerUrl" alt="..."/>
              <div class="carousel-caption">
                <h3>{{banner.bannerName}}</h3>
                <p>{{banner.bannerIntro}}</p>
              </div>
            </div>
            <div class="item" v-else>
              <img :src="banner.bannerUrl" alt="..."/>
              <div class="carousel-caption">
                <h3>{{banner.bannerName}}</h3>
                <p>{{banner.bannerIntro}}</p>
              </div>
            </div>
          </template>
            <!--<div class="item" v-else>-->
              <!--<img :src="banner.bannerUrl" alt="..."/>-->
              <!--<div class="carousel-caption">...</div>-->
            <!--</div>-->
          <!--  <div class="item">
                <img :src="banners[2].bannerUrl" alt="...">
                <div class="carousel-caption">...</div>
            </div>
            <div class="item">
                <img :src="banners[3].bannerUrl" alt="...">
                <div class="carousel-caption">...</div>
            </div>-->
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#w_carousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#w_carousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
  import Bus from './eventBus'
  export default {
    name: "banner",
    data() {
      return {
        banners: [],
        apiUrl: 'api/banner/list',
        total: 0,
        pageSize: 10,
        pageNo: 1,
      }
    },
    mounted:function(){
      this.getList();
    },
    methods: {
      getList: function () {
        console.log("getBanners");
        this.$axios.get(this.apiUrl).then((response) => {
          console.log(response)
          this.banners = response.data.records;
          this.total = response.data.total;
          this.pageSize = response.data.size;
          console.log(response.data.data);
        }).catch(function (response) {
          console.log(response)
        });
      },

      getArticle() {
        // this.setCookie("vueCookieTest","test",1);
        this.$axios.get('api/article/list')
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    }

  }
</script>

<style scoped>
</style>
