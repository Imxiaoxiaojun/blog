<template>
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
                <h4><a class="title" href="article_detail.html">{{article.title}}</a></h4>
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
        <!--<div class="panel panel-default">
          <div class="panel-body">

            <h4><a class="title" href="article_detail.html">wfyvv.com</a></h4>
            <p>
              <a class="label label-default">UUID</a>
              <a class="label label-default">java</a>
            </p>
            <p class="overView">个人网站正在建设中。。。</p>
            <p>
              <span class="count"><i class="glyphicon glyphicon-user"></i><a href="#">admin</a></span>
              <span class="count"><i class="glyphicon glyphicon-eye-open"></i>阅读:666</span>
              <span class="count"><i class="glyphicon glyphicon-comment"></i>评论:18</span>
              <span class="count"><i class="glyphicon glyphicon-time"></i>2017-02-07</span>
             </p>

          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-body">
            <div class="contentleft">
              <h4><a class="title" href="article_detail.html">使用 Nginx 实现 tomcat、glassfish 等 web 服务器负载均衡</a></h4>
              <p>
                <a class="label label-default">Nginx</a>
                <a class="label label-default">tomcat负载均衡</a>
              </p>
              <p class="overView">1.web服务器负载均衡简介web服务器负载均衡是指将多台可用单节点服务器组合成web服务器集群，然后通过负载均衡器将客户端请求均匀的转发到不同的单节点web服务器上，从而增加整个web服务器集群的吞吐量。</p>
              <p><span class="count"><i class="glyphicon glyphicon-user"></i><a href="#">admin</a></span> <span class="count"><i class="glyphicon glyphicon-eye-open"></i>阅读:1003</span><span class="count"><i class="glyphicon glyphicon-comment"></i>评论:2</span><span class="count"><i class="glyphicon glyphicon-time"></i>2017-01-16</span></p>
            </div>
            <div class="contentImage">
              <div class="row">
                <a href="#" class="thumbnail w_thumbnail">
                  <img src="static/img/slider/Aj6bieY.jpg" alt="...">
                </a>
              </div>
            </div>
          </div>
        </div>-->

       <!-- <div class="panel panel-default">
          <div class="panel-body">

            <h4><a class="title" href="/post/41501569">32位的UUID生成方法总结</a></h4>
            <p>
              <a class="label label-default">UUID</a>
              <a class="label label-default">java</a>
            </p>
            <p class="overView">在学习过程中，我们常常会用到ID，那么有哪些常用的 ID 生成方式，你知道吗？通过 java.util.UUID（终态类）生成</p>
            <p><span class="count"><i class="glyphicon glyphicon-user"></i><a href="#">admin</a></span> <span class="count"><i class="glyphicon glyphicon-eye-open"></i>阅读:666</span><span class="count"><i class="glyphicon glyphicon-comment"></i>评论:18</span><span class="count"><i class="glyphicon glyphicon-time"></i>2016-12-25</span></p>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-body">
            <div class="contentleft">
              <h4><a class="title" href="/post/41501569">Java 工具类&#45;&#45;学习篇</a></h4>
              <p>
                <a class="label label-default">java</a>
              </p>
              <p class="overView">链接一：http://www.open-open.com/lib/view/open1403600391905.html链接二：http://www.360doc.com/content/13/0520/11/1722212_286734557.shtml链接三：https://my.oschina.net/u/1453975/blog/529521链接四：http://blog.csdn.net......</p>
              <p><span class="count"><i class="glyphicon glyphicon-user"></i><a href="#">admin</a></span> <span class="count"><i class="glyphicon glyphicon-eye-open"></i>阅读:456</span><span class="count"><i class="glyphicon glyphicon-comment"></i>评论:58</span><span class="count"><i class="glyphicon glyphicon-time"></i>2016-10-01</span></p>
            </div>
            <div class="contentImage">
              &lt;!&ndash;<img src="static/img/slider/abs_img_no.jpg"/>&ndash;&gt;
              <div class="row">
                <a href="#" class="thumbnail w_thumbnail">
                  <img src="static/img/slider/abs_img_no.jpg" alt="...">
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-body">
            <div class="contentleft">
              <h4><a class="title" href="/post/41501569">使用 Nginx 实现 tomcat、glassfish 等 web 服务器负载均衡</a></h4>
              <p>
                <a class="label label-default">Nginx</a>
                <a class="label label-default">tomcat负载均衡</a>
              </p>
              <p class="overView">1.web服务器负载均衡简介web服务器负载均衡是指将多台可用单节点服务器组合成web服务器集群，然后通过负载均衡器将客户端请求均匀的转发到不同的单节点web服务器上，从而增加整个web服务器集群的吞吐量。</p>
              <p><span class="count"><i class="glyphicon glyphicon-user"></i><a href="#">admin</a></span> <span class="count"><i class="glyphicon glyphicon-eye-open"></i>阅读:852</span><span class="count"><i class="glyphicon glyphicon-comment"></i>评论:99</span><span class="count"><i class="glyphicon glyphicon-time"></i>2016-08-25</span></p>
            </div>
            <div class="contentImage">
              &lt;!&ndash;<img src="static/img/slider/67zmaej.png"/>&ndash;&gt;
              <div class="row">
                <a href="#" class="thumbnail w_thumbnail">
                  <img src="static/img/slider/67zmaej.png" alt="...">
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-body">
            <div class="contentleft">
              <h4><a class="title" href="/post/41501569">Java 工具类&#45;&#45;学习篇</a></h4>
              <p>
                <a class="label label-default">java</a>
              </p>
              <p class="overView">链接一：http://www.open-open.com/lib/view/open1403600391905.html链接二：http://www.360doc.com/content/13/0520/11/1722212_286734557.shtml链接三：https://my.oschina.net/u/1453975/blog/529521链接四：http://blog.csdn.net......</p>
              <p><span class="count"><i class="glyphicon glyphicon-user"></i><a href="#">admin</a></span> <span class="count"><i class="glyphicon glyphicon-eye-open"></i>阅读:456</span><span class="count"><i class="glyphicon glyphicon-comment"></i>评论:58</span><span class="count"><i class="glyphicon glyphicon-time"></i>2016-10-01</span></p>
            </div>
            <div class="contentImage">
              &lt;!&ndash;<img src="static/img/slider/abs_img_no.jpg"/>&ndash;&gt;
              <div class="row">
                <a href="#" class="thumbnail w_thumbnail">
                  <img src="static/img/slider/abs_img_no.jpg" alt="...">
                </a>
              </div>
            </div>
          </div>
        </div>
-->
      </div>
      <!--文章列表结束-->

    </div>
  </div>
</template>

<script>
    export default {
        name: "Article",
      data() {
        return {
          articles: [],
          apiUrl: 'api/article/list',
          total: 0,
          pageSize: 20,
          pageNo: 1,
        }
      },
      mounted:function(){
        this.getList();
      },
      methods: {
        getList: function () {
          console.log("getArticles");
          this.$axios.get(this.apiUrl).then((response) => {
            console.log(response)
            this.articles = response.data.records;
            this.total = response.data.total;
            this.pageSize = response.data.size;
          }).catch(function (response) {
            console.log(response)
          });
        },
      },
      filters: {
        filterSummary: function (value) {
          var str = value.replace(/(\\r\\n)|(\\n)/g,' ');
          console.log(str)
          return str
        }
      },
    }
</script>

<style scoped>

</style>
