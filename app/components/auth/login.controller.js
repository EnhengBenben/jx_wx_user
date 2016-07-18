'use strict';

angular.module('merchantApp')
  .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', '$location', '$localStorage', '$stateParams', 'ENDPOINT', 'toaster', 'AuthService'];

function LoginController($scope, $location, $localStorage, $stateParams, ENDPOINT, toaster, AuthService) {
  var vm = this;
  wxLogin();

  vm.account = {
    username: '',
    password: ''
  };
  vm.down = down;
  vm.login = login;
  vm.errorMessage = null;
  return init();

  function init() {
 

  }

  function down() {
    $('#submit-button').css('backgroundColor', '#49bc98');
  }

  function login() {
    vm.register.wx = vm.wx || null;
    AuthService
      .login(vm.register)
      .success(function(response) {
        $localStorage.token = response.data.auth_token;
        $location.path('/admin/application/list');
      })
      .error(function(response) {
        toaster.pop('error', '登录失败', response.message);
      });
  }

  function wxLogin() {
    if ($stateParams.jwt != null && $stateParams.jwt.length > 0) {
      // 如果通过OAuth通过了用户认证，获取到了JWT Token，服务器会在重定向
      // URL中以jwt参数传递过来，得到该参数后直接登录用户，并跳转到首页
      $localStorage.token = $stateParams.jwt;
      $location.path('/');
      return;
    } else if ($stateParams.wx != null && $stateParams.wx.length > 0) {
      // 如果通过OAuth拿到了用户微信信息，但该微信尚未绑定任何用户，服务器会
      // 跳转回该登录页面，并将用户微信信息以wx参数传递回来。这里会保存
      // 该信息，在提交登录请求传递到服务器，以便服务器完成用户登录
      // 后进行微信帐号绑定。如果用户跳转到注册页面，这个信息业也
      // 会以wx参数传递过去。
      vm.wx = $stateParams.wx;
    } else {
      // 如果进入该页面时，既无jwt参数，有没有wx参数，并且当前浏览器是微信浏
      // 览器，那么触发微信OAuth认证流程，并服务器在完成OAuth流程后，跳
      // 转回当前页面
      if ((/MicroMessenger/i).test(window.navigator.userAgent)) {
        var loginUrl = window.location.href;
        var oauthUrl = ENDPOINT + '/wechat/oauth/authorize?redirect=' + encodeURIComponent(loginUrl);
        // 触发微信OAuth流程
        window.location.href = oauthUrl;
        return;
      }
    }
  }
}
