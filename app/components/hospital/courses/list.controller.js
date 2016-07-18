/**
 * Created by yong on 16/5/16.
 */
'use strict'

angular.module('merchantApp')
.controller('CourseListController',CourseListController);
CourseListController.$inject = ['HospitalService','DashboardService','$stateParams','$localStorage','$scope','$window','$timeout'];
function CourseListController(HospitalService,DashboardService,$stateParams,$localStorage,$scope,$window,$timeout) {
  var vm = this;
  vm.filter = {
      limit:40
  };
  $scope.$localStorage = $localStorage;
  $localStorage.hospitalId = $stateParams.id;
  $localStorage.hospitalName = $stateParams.name;
  vm.years = [];
if (!$stateParams.id){
  $localStorage.hospitalId = $stateParams.id;
  $localStorage.hospitalName = $stateParams.name;
}
  var y = (new Date()).getUTCFullYear() + 10;
  for (var i = 2010; i <= y; i += 1) {
    vm.years.push(i);
  }
  document.title = $localStorage.hospitalName;

  $scope.$watch('vm.filter',function (newValue,oldValue) {
    if(newValue != oldValue){
      HospitalService
        .courseList(vm.filter)
        .then(function (res) {
          vm.courses = res.data.data;
        });
    }
  },true);

  return init();
  function init() {
    HospitalService
      .department($localStorage.hospitalId,{limit:1000})
      .then(function (res) {
        vm.departments = res.data.data;
      });
    HospitalService
      .courseList(vm.filter)
      .then(function (res) {
        vm.courses = res.data.data;
      });
  }

}
