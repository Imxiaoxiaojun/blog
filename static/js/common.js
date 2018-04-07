// var $backToTopEle = $('<a href="javascript:void(0)" class="Hui-iconfont toTop" title="返回顶部" alt="返回顶部" style="display:none">^^</a>').appendTo($("body")).click(function () {
//     $("html, body").animate({scrollTop: 0}, 120);
// });
// var backToTopFun = function () {
//     var st = $(document).scrollTop(), winh = $(window).height();
//     (st > 0) ? $backToTopEle.show() : $backToTopEle.hide();
//     /*IE6下的定位*/
//     if (!window.XMLHttpRequest) {
//         $backToTopEle.css("top", st + winh - 166);
//     }
// };
// $(function () {
//     $(window).on("scroll", backToTopFun);
//     backToTopFun();
// });

const getRandomColor = function() {
    var c = '#';
    var cArray = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    for(var i = 0; i < 6;i++) {
        var cIndex = Math.round(Math.random()*15);
        c += cArray[cIndex];
    }
    return c;
}