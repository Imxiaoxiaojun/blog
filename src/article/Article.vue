<template>
  <div class="col-lg-9 col-md-9 w_main_left">

    <div class="panel panel-default">
      <ol class="breadcrumb w_breadcrumb">
        <li><a href="#">首页</a></li>
        <li><a href="#">文章</a></li>
        <span class="w_navbar_tip"></span>
      </ol>
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
        <v-pagination :total="total" :display="pageSize" :current-page='currentPage' @changePage="changePage"
                      style="text-align: center"></v-pagination>
        <!--<pagination :page-no="pageNo" :current.sync="currentPage"></pagination>-->
      </div>
    </div>
  </div>
</template>

<script>
  import Banner from '../Banner.vue'
  import pagination from '../common/pagination'
  import ArticleDetail from './ArticleDetail'

  export default {
    data() {
      return {
        articles: [],
        total: 0,
        currentPage: 1,
        pageSize: 15,
        apiUrl: 'api/article/list',
      }
    },
    components: {
      Banner,
      'v-pagination': pagination,
      'detail': ArticleDetail
    },
    mounted: function () {
      this.getArticles();
    },
    methods: {
      getDetail: function (id) {
        this.$parent.changeArticleDetail(id);
      },
      changePage: function (currentPage) {
        this.currentPage = currentPage;
        // ajax请求, 向后台发送 currentPage, 来获取对应的数据
        this.getArticles();
      },
      getArticles: function () {
        this.$axios.get(this.apiUrl, {
          params: {
            pageSize: this.pageSize,
            pageNo: this.currentPage
          }
        }).then((response) => {
          this.articles = response.data.records;
          this.total = response.data.total;
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
