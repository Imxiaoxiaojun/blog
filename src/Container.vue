<template>
    <div class="w_container">
        <div class="container">
            <div class="row w_main_row">
              <component :articles="articles" :article_detail="article_detail" :is="currentView"></component>

                <!--右侧开始-->
                <div class="col-lg-3 col-md-3 w_main_right">

                  <div class="panel panel-default sitetip">
                    <a href="ArticleDetail.vue">
                      <strong>站点公告</strong>
                      <h3 class="title"></h3>
                    </a>
                    <div id="tp-weather-widget"></div>
                  </div>
                    <div class="panel panel-default sitetip">
                      <a href="ArticleDetail.vue">
                        <strong>站点公告</strong>
                        <h3 class="title"></h3>
                        <p class="overView">个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中。。。</p>
                      </a>
                    </div>

                    <HotTag></HotTag>
                    <HotArticle></HotArticle>


                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">友情链接</h3>
                        </div>
                        <div class="panel-body">
                            <div class="newContent">
                                <ul class="list-unstyled sidebar shiplink">
                                  <template v-for="link in links.list">
                                    <li>
                                      <a :href="link.url" target="_blank">{{link.name | formatLinkName}}</a>
                                    </li>
                                  </template>
                                   <!-- <li>
                                        <a href="https://www.baidu.com/" target="_blank">百度</a>
                                    </li>
                                    <li>
                                        <a href="https://www.oschina.net/" target="_blank">开源中国</a>
                                    </li>
                                    <li>
                                        <a href="http://www.ulewo.com/" target="_blank">有乐网</a>
                                    </li>
                                    <li>
                                        <a href="http://www.sina.com.cn/" target="_blank">新浪网</a>
                                    </li>
                                    <li>
                                        <a href="http://www.qq.com/" target="_blank">腾讯网</a>
                                    </li>-->
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">关注微信公众号</h3>
                        </div>
                        <div class="panel-body">
                            <img src="static/img/wechatcode.jpg" style="height: 230.5px;width: 230.5px;" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HotTag from './Tag.vue'
    import Article from './Article.vue'
    import HotArticle from './HotArticle.vue'
    import ArticleDetail from './components/ArticleDetail.vue'
    import eventBus from './eventBus'

    export default {
        components:{
            HotTag,Article,HotArticle,ArticleDetail
        },
        data(){
          return {
            articles: {
              list: [],
              total: 0,
              pageNo: 1,
              pageSize: 15
            },
            links: {
              list: []
            },
            article_detail: {},
            apiLink: 'api/links/list',
            apiArticles: 'api/article/list',
            apiArticleDetail: 'api/article/detail/',
            currentView: 'Article'
          }
        },
        mounted:function(){
          this.getLinks();
          this.getArticles();
          // eventBus.$on('articleId',function (articleId) {
          //   this.currentView = 'ArticleDetail';
          //   // this.getArticleDetail(articleId);
          //   this.getLinks();
          // })
          eventBus.$on('articleId',(articleId) => this.getArticleDetail(articleId));
          (function (T, h, i, n, k, P, a, g, e) {
            g = function () {
              P = h.createElement(i);
              a = h.getElementsByTagName(i)[0];
              P.src = k;
              P.charset = "utf-8";
              P.async = 1;
              a.parentNode.insertBefore(P, a)
            };
            T["ThinkPageWeatherWidgetObject"] = n;
            T[n] || (T[n] = function () {
              (T[n].q = T[n].q || []).push(arguments)
            });
            T[n].l = +new Date();
            if (T.attachEvent) {
              T.attachEvent("onload", g)
            } else {
              T.addEventListener("load", g, false)
            }
          }(window, document, "script", "tpwidget", "//widget.seniverse.com/widget/chameleon.js"));
          tpwidget("init", {
            "flavor": "slim",
            "location": "WTW3SJ5ZBJUY",
            "geolocation": "enabled",
            "language": "zh-chs",
            "unit": "c",
            "theme": "chameleon",
            "container": "tp-weather-widget",
            "bubble": "enabled",
            "alarmType": "badge",
            "uid": "U350CADADE",
            "hash": "3d1905d272c3bb08cc52c4c3e7ad4059"
          });
          tpwidget("show");
          },

        methods:{
          getLinks: function () {
            this.$axios.get(this.apiLink).then((response) => {
              this.links.list = response.data.records;
            }).catch(function (response) {
              console.log(response)
            });
          },
          getArticles: function () {
            this.$axios.get(this.apiArticles, {
              params: {
                pageSize: this.articles.pageSize,
              }
            }).then((response) => {
              this.articles.list = response.data.records;
              this.articles.total= response.data.total;
              // this.articles.pageNo = response.data.size;
            }).catch(function (response) {
              console.log(response)
            });
          },
          getArticleDetail: function (id) {
            console.log(id);
            this.currentView = 'ArticleDetail';
            this.$axios.get(this.apiArticleDetail + id).then((response) => {
              this.article_detail= response.data;
              // this.articles.pageNo = response.data.size;
            }).catch(function (response) {
              console.log(response)
            });
          },
        },
        filters:{
          formatLinkName:function (name) {
            if (name.length > 20){
              name = name.substr(0,20)+"...";
            }
            return name;
          }
        }
    }
    // $(function() {
    //     $(".label-default").each(function(){
    //         $(this).css("background",getRandomColor());
    //     })
    // });
</script>
