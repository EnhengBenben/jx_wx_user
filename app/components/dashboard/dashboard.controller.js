'use strict';

angular
  .module('merchantApp')
  .controller('DashboardController', DashboardController);

DashboardController.$inject = ['DashboardService','$localStorage','$state'];

function DashboardController(DashboardService,$localStorage,$state) {
  var vm = this;
document.title = "首页";

  vm.hospital = hospital;
  return init();

 function init() {
   DashboardService
     .dashboard()
     .then(function (res) {
       vm.hospitals = res.data;
     })
 }

  function hospital(data) {
    $localStorage.activeApiHost = data.domain_name;
    $state.go('admin.hospital.courses.list',{id:data.id,name:data.name});
  }
}
