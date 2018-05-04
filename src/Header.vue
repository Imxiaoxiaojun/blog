<template>
    <div class="w_header">
        <div class="container">
            <div class="w_header_top">
                <a href="#" class="w_logo"></a>
                <span class="w_header_nav">
					<ul>
						<li><a href="" class="active">首页</a></li>
						<li><a href="about.html">关于</a></li>
						<li><a href="article.html">成长</a></li>
						<li><a href="">学习</a></li>
						<li><a href="">娱乐</a></li>
						<li><a href="moodList.html">说说</a></li>
						<li><a href="comment.html">留言</a></li>
					</ul>
				</span>
                <div class="w_search">
                    <div class="w_searchbox">
                        <input type="text" placeholder="search"/>
                        <button>搜索</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    mounted:function () {
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?82173aec295b8624fb31f98d97c6eb2a";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
      var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
      document.write(unescape("%3Cspan id='cnzz_stat_icon_1273601836'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s22.cnzz.com/z_stat.php%3Fid%3D1273601836%26show%3Dpic1' type='text/javascript'%3E%3C/script%3E"));
    }
  }

</script>
