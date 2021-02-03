$(function () {
  // 登录
  $(".log-tab span").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".log-content>div").eq($(this).index()).show().siblings().hide();
  });
  // 账号密码登录 立即登录
  $("#login-submit").click(function () {
    if ($("#login-user-name").val() == "") {
      alert("用户名不能为空！");
      return false;
    }
    if ($("#login-user-psd").val() == "") {
      alert("密码不能为空！");
      return false;
    }
  });
  // 手机快捷登录 立即登录
  $("#login-tel-submit").click(function () {
    if ($("#login-tel").val() == "") {
      alert("手机号不能为空！");
      return false;
    }
    if (!/^1[0-9]{10}$/.test($("#login-tel").val())) {
      alert("手机号格式不正确！");
      return false;
    }
    if ($("#login-tel-code").val() == "") {
      alert("验证码不能为空！");
      return false;
    }
  });
  // 手机快捷登录验证码
  $("#login-get-code").on("click", function () {
    getcode($(this), $("#login-tel"));
  });

  // 注册
  $("#reg-submit").click(function () {
    if ($("#reg-tel").val() == "") {
      alert("手机号不能为空！");
      return false;
    }
    if (!/^1[0-9]{10}$/.test($("#reg-tel").val())) {
      alert("手机号格式不正确！");
      return false;
    }
    if ($("#reg-code").val() == "") {
      alert("验证码不能为空！");
      return false;
    }
    if ($("#reg-psd").val() == "") {
      alert("密码不能为空！");
      return false;
    }
  });
  // 注册验证码
  var time = 60;
  $("#reg-get-code").on("click", function () {
    getcode($(this), $("#reg-tel"));
  });

  // 忘记密码
  // 验证码
  var time = 60;
  $("#fgp-get-code").on("click", function () {
    getcode($(this), $("#fgp-tel"));
  });

  // 下一步
  $("#fgp-next").on("click", function () {
    if ($("#fgp-tel").val() == "") {
      alert("手机号不能为空！");
      return false;
    }
    if ($("#fgp-code").val() == "") {
      alert("验证码不能为空！");
      return false;
    }
    $(this).parent('div').hide().siblings().show()
    $(".progress li").eq(1).css({
      background:'#A646CC'
    })
    $(".progress li").eq(1).find('i').css({
      background:'#A646CC'
    })
  });
  // 完成
  $("#fgp-submit").on("click", function () {
    if ($("#fgp-newpsd").val() == "") {
      alert("密码不能为空！");
      return false;
    }
    if ($("#fgp-newpsdag").val() == "") {
      alert("确认密码不能为空！");
      return false;
    }
    if ($("#fgp-newpsd").val() != $("#fgp-newpsdag").val()) {
      alert("两次密码输入不一致！");
      return false;
    }
  });
  

  function getcode(e, m) {
    if (m.val() == "") {
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
