<template>
  <div class="col-lg-9 col-md-9 w_main_left">
    <!--滚动图开始-->
    <div class="panel panel-default">
      <banner></banner>
    </div>
    <div class="panel panel-default contenttop">
      <a href="ArticleDetail.vue">
        <strong>博主置顶</strong>
        <h3 class="title"></h3>
        <p class="overView">个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中。。。</p>
      </a>
    </div>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">文章列表</h3>
    </div>

    <div class="panel-body">

      <!--文章列表开始-->
      <div class="contentList">
        <template v-for="article in articles.list">
          <div class="panel panel-default">
            <div class="panel-body">

              <div :class="article.imageUrl && article.imageUrl != '' ? 'contentleft' : ''">
                <h4>
                  <a class="title" @click="getDetail(article.id)">{{article.title}}</a>
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

    </div>
  </div>
  </div>
</template>

<script>
  import eventBus from './eventBus'
  import Banner from './Banner.vue'

  // import ArticleDetail from './components/article_detail'

  export default {
    name: "Article",
    props: ["articles"],
    components:{
      Banner
    },
    /*data() {
      return {
        articles: [],
        apiUrl: 'api/article/list',
        total: 0,
        pageSize: 20,
        pageNo: 1,
      }
    },*/
   /* mounted: function () {
      this.getList();
    },*/
    methods: {
      getDetail: function (id) {
        eventBus.$emit('articleId', id);
      }
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
