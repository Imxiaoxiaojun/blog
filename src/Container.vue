<template>
    <div class="w_container">
        <div class="container">
            <div class="row w_main_row">
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
                <component :article="article" :is="currentView"></component>

              </div>
                <!--右侧开始-->
                <div class="col-lg-3 col-md-3 w_main_right">

                    <div class="panel panel-default sitetip">
                      <a href="https://github.com/Imxiaoxiaojun/blog" class="github" target="_blank"/>
                    </div>
                    <div class="panel panel-default sitetip">
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
    import Banner from './Banner.vue'

    export default {
        components:{
            HotTag,
            '_Article': Article,
            HotArticle,
            '_ArticleDetail': ArticleDetail,
            Banner
        },
        data(){
          return {
            links: {
              list: []
            },
            article:{},
            apiLink: 'api/links/list',
            currentView: '_Article',
            apiArticle: 'api/article/detail/',
            showBanner: true
          }
        },
        mounted:function(){
          // eventBus.$on(this.$parent.showBanner,this.showBanner = this.$parent.showBanner)
          // console.log("mounted,this showBanner",this.showBanner,"parent showBanner",this.$parent.showBanner)
          this.showBanner = this.$parent.showBanner
          this.getLinks();
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
          changeArticleDetail: function (id) {
            eventBus.$emit('activeId',1)
            this.currentView = '_ArticleDetail'
            this.$axios.get(this.apiArticle + id).then((response) => {
              this.article = response.data;
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
<style scoped>
  .github {
    width: 35px;
    height: 35px;
    background-image: url("../static/img/github.png");
    background-repeat: no-repeat;
  }
</style>
