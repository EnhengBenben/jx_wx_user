(function () {
  'use strict'

  angular.module('merchantApp')
    .controller('PasswordController',PasswordController);
  PasswordController.$inject = ['AuthService','$interval','$state','toaster'];
  function PasswordController(AuthService,$interval,$state,toaster) {
    var vm = this;
    vm.register = {};
    vm.changePassword = changePassword;
    vm.code = code;
    vm.paracont = "获取验证码";
    vm.paraclass = "code";
    vm.paraevent = true;
    return init();

    function init() {
    

    }
    function code() {
      if (vm.paraevent) {
        toaster.pop('success','验证码已发送,请耐心等待');
        AuthService
          .changeCode(vm.user)
          .then(function (res) {
          });
        if (vm.paraevent) {
          var second = 60,
            timePromise = $interval(function () {
              if (second <= 0) {
                $interval.cancel(timePromise);
                timePromise = undefined;
                second = 60;
                vm.paracont = "重发验证码";
                vm.paraclass = "code";
                vm.paraevent = true;
              } else {
                vm.paracont = second + "秒后可重发";
                vm.paraclass = "not code";
                vm.paraevent = false;
                second--;
              }
            }, 1000, 100);

        }
      }

    }
    function changePassword() {
      AuthService
        .changePsd(vm.user)
        .then(function (res) {
          toaster.pop('success','修改成功');
          $state.go('login');
        })
    }

  }
})();
