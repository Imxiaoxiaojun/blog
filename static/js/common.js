var $backToTopEle = $('<a href="javascript:void(0)" class="Hui-iconfont toTop" title="返回顶部" alt="返回顶部" style="display:none">^^</a>').appendTo($("body")).click(function () {
    $("html, body").animate({scrollTop: 0}, 120);
});
var backToTopFun = function () {
    var st = $(document).scrollTop(), winh = $(window).height();
    (st > 0) ? $backToTopEle.show() : $backToTopEle.hide();
    /*IE6下的定位*/
    if (!window.XMLHttpRequest) {
        $backToTopEle.css("top", st + winh - 166);
    }
};
$(function () {
    $(window).on("scroll", backToTopFun);
    backToTopFun();
});

var getRandomColor = function() {
    var c = '#';
    var cArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    for(var i = 0; i < 6;i++) {
        var cIndex = Math.round(Math.random()*15);
        c += cArray[cIndex];
    }
    return c;
}
var $backToTopEle = $('<a href="javascript:void(0)" class="Hui-iconfont toTop" title="返回顶部" alt="返回顶部" style="display:none">^</a>').appendTo($("body")).click(function() {
    $("html, body").animate({ scrollTop: 0 }, 120);
});
var backToTopFun = function() {
    var st = $(document).scrollTop(),
        winh = $(window).height();
    (st > 0) ? $backToTopEle.show(): $backToTopEle.hide();
    /*IE6下的定位*/
    if(!window.XMLHttpRequest) {
        $backToTopEle.css("top", st + winh - 166);
    }
};

(function(T,h,i,n,k,P,a,g,e){g=function(){P=h.createElement(i);a=h.getElementsByTagName(i)[0];P.src=k;P.charset="utf-8";P.async=1;a.parentNode.insertBefore(P,a)};T["ThinkPageWeatherWidgetObject"]=n;T[n]||(T[n]=function(){(T[n].q=T[n].q||[]).push(arguments)});T[n].l=+new Date();if(T.attachEvent){T.attachEvent("onload",g)}else{T.addEventListener("load",g,false)}}(window,document,"script","tpwidget","//widget.seniverse.com/widget/chameleon.js"))
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

