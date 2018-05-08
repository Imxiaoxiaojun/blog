<template>
  <div class="col-lg-9 col-md-9 w_main_left">
    <!--滚动图开始-->
    <div v-show="showBanner">
      <div class="panel panel-default">
        <banner v-show="showBanner"></banner>
      </div>
      <div class="panel panel-default contenttop">
        <a href="ArticleDetail.vue">
          <strong>博主置顶</strong>
          <h3 class="title"></h3>
          <p class="overView">个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中。。。</p>
        </a>
      </div>
    </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">文章列表</h3>
    </div>

    <div class="panel-body">

      <!--文章列表开始-->
      <div class="contentList">
        <template v-for="article in articles">
          <div class="panel panel-default">
            <div class="panel-body">

              <div :class="article.imageUrl && article.imageUrl != '' ? 'contentleft' : ''">
                <h4>
                  <a class="title" style="cursor: pointer;" @click="getDetail(article.id)">{{article.title}}</a>
                </h4>
                <p>
                  <a class="label label-default" v-for="tag in article.tagList" :style="'background:' + tag.color">{{tag.name}}</a>
                </p>
                <p>{{article.summary | filterSummary}}</p>
                <p>
                  <span class="count"><i class="glyphicon glyphicon-user"></i><a href="#">admin</a></span>
                  <span class="count"><i class="glyphicon glyphicon-eye-open"></i>阅读:{{article.hits}}</span>
                  <span class="count"><i class="glyphicon glyphicon-comment"></i>评论:{{article.commentNum}}</span>
                  <span class="count"><i class="glyphicon glyphicon-time"></i>{{article.createTime}}</span>
                </p>
              </div>


              <div class="contentImage" v-if="article.imageUrl && article.imageUrl != ''">
                <div class="row">
                  <a href="#" class="thumbnail w_thumbnail">
                    <img :src="article.imageUrl" alt="...">
                  </a>
                </div>
              </div>

            </div>
          </div>
        </template>
      </div>
      <!--文章列表结束-->
      <v-pagination :total="total" :current-page='currentPage' @changePage="changePage" style="text-align: center"></v-pagination>
      <!--<pagination :page-no="pageNo" :current.sync="currentPage"></pagination>-->
    </div>
  </div>
  </div>
</template>

<script>
  import Banner from './Banner.vue'
  import pagination from './pagination'
  import ArticleDetail from './components/ArticleDetail'
  import eventBus from './eventBus'
  export default {
    data(){
      return {
        articles: [],
        total: 0,
        currentPage: 1,
        pageSize: 10,
        apiUrl: 'api/article/list',
        showBanner: true,
      }
    },
    components:{
      Banner,
      'v-pagination': pagination,
      'detail': ArticleDetail
    },
    mounted:function(){
      this.getArticles();
      eventBus.$on('showBanner', function (showBanner) {
        this.showBanner = showBanner;
        console.log("$on showBanner ",this.showBanner)
      })
    },
    methods: {
      getDetail: function (id) {
        this.$parent.changeArticleDetail(id);
      },
      changePage:function(currentPage){
        this.currentPage = currentPage;
        // ajax请求, 向后台发送 currentPage, 来获取对应的数据
        this.getArticles();
      },
      getArticles: function () {
        console.log("getArticles ",this.showBanner)

        this.$axios.get(this.apiUrl, {
          params: {
            pageSize: this.pageSize,
            pageNo: this.currentPage
          }
        }).then((response) => {
          this.articles = response.data.records;
          this.total= response.data.total;
          // this.articles.pageNo = response.data.size;
        }).catch(function (response) {
          console.log(response)
        });
      },
    },
    filters: {
      filterSummary: function (value) {
        var str = value.replace(/(\\r\\n)|(\\n)/g, ' ');
        return str
      }
    },
    }
</script>

<style scoped>

</style>
