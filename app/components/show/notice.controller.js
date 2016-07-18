/**
 * Created by yong on 16/5/16.
 */
'use strict';

angular.module('merchantApp')
  .controller('ShowNoticeController',ShowNoticeController);
ShowNoticeController.$inject = ['HospitalService','$stateParams'];
function ShowNoticeController(HospitalService,$stateParams) {
  var vm = this;

  return init();

  function init() {
    HospitalService
      .show($stateParams.id)
      .then(function (res) {
        vm.show = res.data.data;
        $("#info").html(vm.show.info);
        document.title = vm.show.name;
      })
  }

}
