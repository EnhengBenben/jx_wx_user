/**
 * Created by yong on 16/5/16.
 */
'use strict';

angular.module('merchantApp')
  .controller('NoticeListController',NoticeListController);
NoticeListController.$inject = ['HospitalService','$localStorage','$stateParams'];
function NoticeListController(HospitalService,$localStorage,$stateParams) {
  var vm = this;
  $localStorage.hospitalId = $stateParams.id;
  $localStorage.hospitalName = $stateParams.name;
  document.title = $localStorage.hospitalName;
  return init();

  function init() {
    HospitalService
      .list()
      .then(function (res) {
        vm.notice = res.data.data;
      })
  }
}
