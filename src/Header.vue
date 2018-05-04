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
        hm.src = "https://hm.baidu.com/hm.js?b89a08dec53e9c0d2f1e135dd9b91568";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    }
  }

</script>
