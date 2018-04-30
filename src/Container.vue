<template>
    <div class="w_container">
        <div class="container">
            <div class="row w_main_row">
                <div class="col-lg-9 col-md-9 w_main_left">
                    <!--滚动图开始-->
                    <div class="panel panel-default">
                        <banner></banner>
                    </div>

                    <div class="panel panel-default contenttop">
                        <a href="article_detail.html">
                            <strong>博主置顶</strong>
                            <h3 class="title"></h3>
                            <p class="overView">个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中。。。</p>
                        </a>
                    </div>
                    <Article></Article>

                </div>

                <!--右侧开始-->
                <div class="col-lg-3 col-md-3 w_main_right">

                    <div class="panel panel-default sitetip">
                        <a href="article_detail.html">
                            <strong>站点公告</strong>
                            <h3 class="title"></h3>
                            <p class="overView">个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中个人网站正在建设中。。。</p>
                        </a>
                    </div>

                    <HotTag></HotTag>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">热门文章</h3>
                        </div>
                        <div class="panel-body">
                            <ul class="list-unstyled sidebar">
                                <li>
                                    <a href="/post/04928311">排序算法之冒泡排序 － java实现</a>
                                </li>
                                <li>
                                    <a href="/post/32097759">快速搭建基于二进制日志文件的 mysql 复制</a>
                                </li>
                                <li>
                                    <a href="/post/09196557">web 服务器负载均衡教程，快速搭建高可用服务器集群</a>
                                </li>
                                <li>
                                    <a href="/post/20654391">使用 redis 和 spring-session 实现 tomcat、glassfish 等 web 服务器集群 session 共享</a>
                                </li>
                                <li>
                                    <a href="/post/41501569">使用 Nginx 实现 tomcat、glassfish 等 web 服务器负载均衡</a>
                                </li>
                                <li>
                                    <a href="/post/89658700">mysql 复制（replication）基础概念和应用场景简介</a>
                                </li>
                                <li>
                                    <a href="/post/03088922">redis 单节点在 Linux 生产环境的安装和简单配置</a>
                                </li>
                                <li>
                                    <a href="/post/05203355">使用 jQuery 的 val() 方法来获取以及设置表单元素值</a>
                                </li>
                                <li>
                                    <a href="/post/03120718">使用 jQuery 的 removeProp() 方法来删除元素的特性（property）</a>
                                </li>
                                <li>
                                    <a href="/post/37454977">使用 jQuery 的 prop() 方法来获取以及设置元素的特性（property）</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">友情链接</h3>
                        </div>
                        <div class="panel-body">
                            <div class="newContent">
                                <ul class="list-unstyled sidebar shiplink">
                                    <li>
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
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">关注微信公众号</h3>
                        </div>
                        <div class="panel-body">
                            <img src="static/img/qrcode.jpg" style="height: 230.5px;width: 230.5px;" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Banner from './Banner.vue'
    import HotTag from './Tag.vue'
    import Article from './Article.vue'
    export default {
        components:{
            Banner,HotTag,Article
        },
        methods:{
        }
    }
    // $(function() {
    //     $(".label-default").each(function(){
    //         $(this).css("background",getRandomColor());
    //     })
    // });
</script>
