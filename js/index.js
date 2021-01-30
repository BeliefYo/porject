$(function () {
  // 在线答疑提问 课程及类型选择
  $(".zxdy-sel").click(function () {
    $(this).parent().siblings("ul").show();
  });
  $(".zxdy-from-block ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    // $(this).parent().hide()
    $(this).parent().siblings().find(".zxdy-sel").html($(this).html());
  });
  $(".btn_ask").click(function () {
    $(this).parent().siblings(".answer-zw").show();
  });

  // 我的套餐---项目切换
  tab($(".tab li"), $(".toggle-tab-content .tab-content"));
  tabIframe();
  // 我的试卷 tab展开收起
  $(".paper-show").click(function () {
    if ($(this).find("i").html() == "展开") {
      $(this).find("i").html("收起");
      $(this).parent().addClass("shadow");
      $(this).siblings("ul").css({
        overflow: "auto",
        height: "auto"
      });
      $(this).parent().css({
        marginTop:'10px'
      });
      $(this).find('img').css({
        transform:'rotate(180deg)'
      })
    } else {
      $(this).find("i").html("展开");
      $(this).parent().removeClass("shadow");
      $(this).siblings("ul").removeClass("height");
      $(this).siblings("ul").css({
        overflow: "hidden",
        height: "30px"
      });
      $(this).parent().css({
        marginTop:'0'
      });
      $(this).find('img').css({
        transform:'rotate(0)'
      })
    }
  });
});

function tab(tabEl, contEl) {
  tabEl.click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    contEl.eq($(this).index()).show().siblings().hide();
  });
}

function tabIframe() {
  var oldSrc = "";
  $(".slider li").click(function () {
    var src = $(this).parent().attr("url") + "/" + $(this).attr("url");
    if (oldSrc == src) {
      return false;
    }
    $(this).addClass("active").siblings().removeClass("active");
    oldSrc = src;
    console.log(src);
    $(this)
      .parents(".slider")
      .siblings(".content")
      .find("iframe")
      .attr("src", src);
  });
}
