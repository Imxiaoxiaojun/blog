<template>
  <div class="col-lg-9 col-md-9 w_main_left">
    <div class="container">

      <div class="col-lg-9 col-md-9 w_main_left" style="margin-top: -0.03%;">
        <ol class="breadcrumb w_breadcrumb">
          <li><a href="#">首页</a></li>
          <li><a href="#">java</a></li>
          <li class="active">{{article.title}}</li>
          <span class="w_navbar_tip"></span>
        </ol>

        <div class="panel panel-default">
          <div class="panel-body">
            <h2 class="c_titile">test</h2>
            <p class="box_c"><span class="d_time">发布时间：2017-02-05</span><span>编辑：<a href="mailto:wfyv@qq.com">wilco</a></span><span>阅读（88646）</span>
            </p>
            <ul class="infos">
              <p>之前服务器放在电信机房， 联通用户访问速度很不稳定，经常出现访问速度慢的问题，换到阿里云解决了之前的问题。很多人都问我的博客选得什么空间，一年的费用得多少钱，今天我列个表出来，供大家参考。</p>
              <p>&nbsp;<img src="" alt="个人博客阿里云空间选择" width="700" height="886"></p>
              <p>对于访问量不大，小型网站带宽可以选择1M的，每个月<span class="cny"
                                                style="margin: 0px 1px; padding: 0px; border: 0px; font-family: Arial; line-height: 20px; font-size: 20px; vertical-align: baseline; color: rgb(255, 102, 0); white-space: nowrap;">¥</span><span
                class="money"
                style="margin: 0px; padding: 0px; border: 0px; font-family: 微软雅黑, 'Microsoft Yahei', 'Hiragino Sans GB', tahoma, arial, 宋体; line-height: 20px; font-size: 20px; vertical-align: baseline; color: rgb(255, 102, 0); white-space: nowrap;">56.80</span>一年也就568块钱，每天投入也就不到2块钱。
              </p>
              <p><img src="" alt="个人博客阿里云空间选择"></p>
              <p><strong>1、为什么选Linux？</strong></p>
              <p>程序用PHP，速度快，配置低（windows必选1G的内存Linux选512MB能同样达到要求）。Linux的系统安全性非常高。Linux服务器的维护与扩展到性价比和性能都高于Windows。</p>
              <p>1) 最流行的服务器端操作系统，强大的安全性和稳定性</p>
              <p>2) 免费且开源，轻松建立和编译源代码</p>
              <p>3) 通过SSH方式远程访问您的云服务器</p>
              <p>4) 一般用于高性能web等服务器应用，支持常见的PHP/Python等编程语言，支持MySQL等数据库（需自行安装)</p>
              <p><strong>2、操作系统为什么选CentOS 安全加固版（推荐）？</strong></p>
              <p>在原
                CentOS镜像的基础上，系统进一步安全加固，安装了阿里云独有的入侵防御系统，系统中会出现aegis进程，该系统增加了实时后门，Webshell检测，更加智能的暴力破解防御和多种入侵行为监控，让服务器更加安全可靠。</p>
              <p><a href="http://www.aliyun.com/product/ecs" target="_blank"><strong><span
                style="color: rgb(0, 0, 255);">前往阿里云官网购买&gt;&gt;</span></strong></a></p>
              <p>&nbsp;</p>
              <p align="center" class="pageLink"></p>

            </ul>

            <div class="keybq">
              <p><span>关键字</span>：<a class="label label-default">个人博客</a><a class="label label-default">阿里云</a><a
                class="label label-default">空间</a></p>
            </div>


            <div class="nextinfo">
              <p class="last">上一篇：<a href="#">免费收录网站搜索引擎登录口大全</a></p>
              <p class="next">下一篇：<a href="#">javascript显示年月日时间代码</a></p>
            </div>

          </div>
        </div>

        <div class="panel panel-default">
          <div class="panel-body">
            <center>
              <div id="cyReward" role="cylabs" data-use="reward" sid="5eab7e4c363e4cb8bed0efa3604e6b42"></div>
            </center>

            <div class="ds-thread" data-thread-key="testarticle" data-title="我的个人博客之——阿里云空间选择"
                 data-url="http://127.0.0.1:8020/wilco/article_detail.html"></div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import eventBus from '../eventBus'

  export default {
    name: "ArticleDetail",
    components: {
      // eventBus
    },
    props: ['article'],
    // data() {
      // return {
      //   article: {},
      //   apiUrl: 'api/article/detail/'
      // }
    // },
    /*mounted: function () {
     /!* eventBus.$on('getArticle', function(id){
        console.log(id)
        this.$parent.currentView = '_ArticleDetail';
        // this.$refs.ArticleDetail.getArticleDetail(id)
      });*!/
      this.$parent.currentView = '_ArticleDetail'
      eventBus.$on('getArticle',(id) => this.getDetail(id))
    },
    methods: {
      getDetail: function (id) {
        console.log(id)
        this.$axios.get(this.apiUrl + id).then((response) => {
          this.article = response.data;
        }).catch(function (response) {
          console.log(response)
        });
      },
    },*/
  }
</script>

<style scoped>

</style>
