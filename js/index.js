$(function () {
  // 设置iframe高度
  window.parent.document.all.contentIframe.height =
    document.body.scrollHeight > 714 ? document.body.scrollHeight : 714;
  window.parent.document.all.sliderIframe.height = document.body.scrollHeight;

  // 点击tab切换iframe
  tabIframe();

  // 首页导航切换
  $(".nav ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    var url = $(this).attr("url");
    if (url == "message/msg") {
      $("#message").show();
      $("#main").hide();
      return false;
    } else {
      $("#message").hide();
      $("#main").show();
    }
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

  // 我的套餐---项目切换
  tab($(".tab li"), $(".toggle-tab-content .tab-content"));

  // 在线答疑 发起提问弹窗
  $("#ask-questions").click(function () {
    $("#ask-questions-box").show();
  });
  $("#ask-box-close").click(function () {
    $("#ask-questions-box").hide();
  });
  // 在线答疑查看回复、查看全部弹窗
  $(".view-all").click(function () {
    $(window.parent.document.getElementById("ask-questions-view")).show();
  });
  $(".view-reply").click(function () {
    $(window.parent.document.getElementById("ask-questions-view")).show();
  });
  $("#ask-view-close").click(function () {
    $(window.parent.document.getElementById("ask-questions-view")).hide();
  });
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

  // 题库 我的试卷 tab展开收起
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

  // 题库 我的错题 问号？帮助   0为答题记录  1为我的错题
  $(".tip-show").mouseover(function () {
    if ($(this).attr("status") == 0) {
      $(window.parent.document.getElementById("dtTooltip")).fadeIn(200);
    } else {
      $(window.parent.document.getElementById("ctTooltip")).fadeIn(200);
    }
  });
  $(".tip-show").mouseleave(function () {
    if ($(this).attr("status") == 0) {
      $(window.parent.document.getElementById("dtTooltip")).fadeOut(200);
    } else {
      $(window.parent.document.getElementById("ctTooltip")).fadeOut(200);
    }
  });

  // 我的订单 tab切换
  tab($(".order-tab li"), $(".order-content>div"), "order");

  // 我的订单 取消订单弹窗
  $(".cancelhandle").click(function () {
    $(window.parent.document.getElementById("order-remove")).show();
  });
  $("#order-cancel-box").click(function () {
    $(window.parent.document.getElementById("order-remove")).hide();
  });
  $("#order-confirm-box").click(function () {
    $(window.parent.document.getElementById("order-remove")).hide();
  });

  // 收货地址 新增地址
  $(".address-model").click(function () {
    $(window.parent.document.getElementById("address-box")).show();
  });
  $("#address-confirm").click(function () {
    $(window.parent.document.getElementById("address-box")).hide();
  });
  $("#address-cancel").click(function () {
    $(window.parent.document.getElementById("address-box")).hide();
  });
  $("#address-tel").keyup(function () {
    if (!/^1[0-9]{10}$/.test($(this).val())) {
      $("#address-tel-error").show();
    } else {
      $("#address-tel-error").hide();
    }
  });

  // 个人信息 修改手机号弹窗
  $("#userinfo-edit").click(function () {
    $(window.parent.document.getElementById("grxx-edit-tel")).show();
  });
  $("#grxx-edit-confirm").click(function () {
    // 请求接口判断验证码是否正确。
    if ($(".edit-getCode").val() == "") {
      $(".edit-getCode").siblings("p").css({
        visibility: "initial",
        marginBottom: "20px",
      });
      return false;
    } else {
      $(".edit-getCode").siblings("p").css({
        visibility: "hidden",
        marginBottom: "0",
      });
    }
    $(window.parent.document.getElementById("grxx-edit-tel")).hide();
  });
  $("#grxx-edit-cancel").click(function () {
    $(window.parent.document.getElementById("grxx-edit-tel")).hide();
  });
  $("#userinfo-tel").keyup(function () {
    if (!/^1[0-9]{10}$/.test($(this).val())) {
      $(this).siblings("p").css({
        visibility: "initial",
        marginBottom: "20px",
      });
    } else {
      $(this).siblings("p").css({
        visibility: "hidden",
        marginBottom: "0",
      });
    }
  });

  // 设置密码 保存修改
  $(".confirmEdit").on("click", function () {
    if ($("#oldPsd").val() != '' && $("#oldPsd").val() != $("#newPsd").val()) {
      $(".psdError").show().find("span").html("两次填写的密码不一致")
      setTimeout(function () {
        $(".psdError").hide().find("span").html("");
      }, 1500);
      return false;
    }
    // 请求接口返回旧密码错误提示
    if ($("#oldPsd").val() == "") {
      $(".psdError").show().find("span").html("旧密码错误");
      setTimeout(function () {
        $(".psdError").hide().find("span").html("");
      }, 1500);
      return false;
    }
  });

  // 个人信息 修改手机号弹窗 获取验证码
  var time = 60;
  $(".edit-getCode").on("click", function () {
    getcode($(this));
  });
  function getcode(e) {
    if ($("#userinfo-tel").val() == "") {
      alert("请输入手机号码");
    } else {
      //按照指定的周期（以毫秒计）来调用函数或计算表达式。
      //最好是在ajax请求之后再调用函数
      t = setInterval(function () {
        countdown(e);
      }, 1000);
      //获取验证码成功后调用倒计时函数
      countdown(e);
    }
  }
  function countdown(e) {
    if (time == 0) {
      //这里时设置当时间到0的时候重新设置点击事件，并且默认time修改为60
      e.on("click", function () {
        getcode($(this));
      });
      e.html("获取验证码");
      time = 60;
      clearInterval(t);
    } else {
      //这里是显示时间倒计时的时候点击不生效
      e.unbind("click");
      time--;
      e.html(time + "s重新发送");
    }
  }
});

function tab(tabEl, contEl, page) {
  tabEl.click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    contEl.eq($(this).index()).show().siblings().hide();
    if ((page == "order" && $(this).index() == 1) || $(this).index() == 2) {
      window.parent.document.all.contentIframe.height = 714;
    } else {
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
    // 在线答疑提问按钮
    if ($(this).attr("url") == "online.html") {
      $(window.parent.document.getElementById("ask-questions")).show();
    } else {
      $(window.parent.document.getElementById("ask-questions")).hide();
    }
    window.parent.document.all.contentIframe.height =
      document.body.scrollHeight > 714 ? document.body.scrollHeight : 714;
  });
}
