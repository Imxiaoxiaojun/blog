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
                    <HotArticle></HotArticle>


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
    import HotArticle from './HotArticle.vue'
    export default {
        components:{
            Banner,HotTag,Article,HotArticle
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
