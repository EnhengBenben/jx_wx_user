(function () {
  'use strict'

  angular.module('merchantApp')
    .controller('RegisterController',RegisterController);
  RegisterController.$inject = ['AuthService','$interval','$state','toaster'];
  function RegisterController(AuthService,$interval,$state,toaster) {
    var vm = this;
    vm.register = register;
    vm.code = code;
    vm.paracont = "获取验证码";
    vm.paraclass = "code";
    vm.paraevent = true;
    return init();

    function init() {
      

    }
    function code() {
     if(vm.paraevent){
       AuthService
         .code(vm.user)
         .then(function (res) {
           if (vm.paraevent){
             var second = 60,
               timePromise = $interval(function(){
                 if(second<=0){
                   $interval.cancel(timePromise);
                   timePromise = undefined;
                   second = 60;
                   vm.paracont = "重发验证码";
                   vm.paraclass = "code";
                   vm.paraevent = true;
                 }else{
                   vm.paracont = second + "秒后可重发";
                   vm.paraclass = "not code";
                   vm.paraevent = false;
                   second--;
                 }
               },1000,100);
           }
         });
     }
    }
    function register() {
      AuthService
        .register(vm.user)
        .then(function (res) {
          toaster.pop('success','注册成功');
          $state.go('login');
        })
    }

  }
})();
