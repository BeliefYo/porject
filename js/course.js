$(function () {
  // 我的套餐---项目切换
  tab($(".tab li"), $(".toggle-tab-content .tab-content"));
  tabIframe();
});

function tab(tabEl, contEl) {
  tabEl.click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    contEl.eq($(this).index()).show().siblings().hide();
  });
}

function tabIframe() {
  var oldSrc = ''
  $(".slider li").click(function () {
    var src = $(this).parent().attr("url") +'/'+ $(this).attr("url");
    if(oldSrc == src){
      return false
    }
    $(this).addClass('active').siblings().removeClass('active')
    oldSrc = src
    console.log(src)
    $(this).parents(".slider").siblings(".content").find("iframe").attr("src",src);
  });
}
