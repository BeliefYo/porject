$(function () {
  // 设置iframe高度
  window.parent.document.all.contentIframe.height =
    document.body.scrollHeight > 714 ? document.body.scrollHeight : 714;
  window.parent.document.all.sliderIframe.height = document.body.scrollHeight;
  // 点击tab切换iframe
  tabIframe();

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
  // 我的试卷 tab展开收起
  $(".paper-show").click(function () {
    if ($(this).find("i").html() == "展开") {
      $(this).find("i").html("收起");
      $(this).parent().addClass("shadow");
      $(this).siblings("ul").css({
        overflow: "auto",
        height: "auto",
      });
      $(this).parent().css({
        marginTop: "10px",
      });
      $(this).find("img").css({
        transform: "rotate(180deg)",
      });
      window.parent.document.all.contentIframe.height =
        document.body.scrollHeight;
    } else {
      $(this).find("i").html("展开");
      $(this).parent().removeClass("shadow");
      $(this).siblings("ul").removeClass("height");
      $(this).siblings("ul").css({
        overflow: "hidden",
        height: "30px",
      });
      $(this).parent().css({
        marginTop: "0",
      });
      $(this).find("img").css({
        transform: "rotate(0)",
      });
      window.parent.document.all.contentIframe.height =
        document.body.scrollHeight;
    }
  });
  // 我的订单 tab切换
  tab($(".order-tab li"), $(".order-content>div"), "order");

  // 首页导航切换
  $(".nav ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    var url = $(this).attr("url");
    var tabUrl = $(this).attr("url").split("/")[0];
    $(window.parent.document.getElementById("sliderIframe")).attr(
      "src",
      tabUrl + "/tab.html"
    );
    $(window.parent.document.getElementById("contentIframe")).attr(
      "src",
      url + ".html"
    );
    window.parent.document.all.contentIframe.height =
      document.body.scrollHeight > 714 ? document.body.scrollHeight : 714;
  });
});

function tab(tabEl, contEl, page) {
  tabEl.click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    contEl.eq($(this).index()).show().siblings().hide();
    if (page == "order") {
      window.parent.document.all.contentIframe.height =
        document.body.scrollHeight > 714 ? document.body.scrollHeight : 714;
    }
  });
}

function tabIframe() {
  var oldSrc = "";
  $(".slider-ul li").click(function () {
    var src = $(this).parent().attr("url") + "/" + $(this).attr("url");
    if (oldSrc == src) {
      return false;
    }
    $(this).addClass("active").siblings().removeClass("active");
    oldSrc = src;
    $(window.parent.document.getElementById("contentIframe")).attr("src", src);
    window.parent.document.all.contentIframe.height =
      document.body.scrollHeight > 714 ? document.body.scrollHeight : 714;
  });
}
