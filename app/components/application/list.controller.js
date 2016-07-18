/**
 * Created by yong on 16/5/16.
 */
'use strict'

angular.module('merchantApp')
.controller('ApplicationListController',ApplicationListController);
ApplicationListController.$inject = ['ApplicationService','toaster','ExportService','$localStorage','$state'];
function ApplicationListController(ApplicationService,toaster,ExportService,$localStorage,$state) {
  var vm = this;
  vm.remove = remove;
  vm.transfer = transfer;
  vm.pass = pass;
  vm.hospital = hospital;//根据医院域名获取接口地址
  vm.courseShow = courseShow;
  document.title = '我的申请';
  vm.hideDefault = true;
  vm.admission = admission;
  return init();

  function init() {

    var params = {
      include:'course,transferCourse,course.hospital'
    };

    ApplicationService
      .application(params)
      .then(function (res) {
        vm.show = [];
        angular.forEach(res.data.data,function (i) {
          if(i.status != '建议通过' && i.status != '建议拒绝' && i.status != '建议调班'  && i.status != '未提交申请表'){
            vm.show.push(i);
            vm.hideDefault = false;
          }
          // else if (i.status != '未提交申请表' && (moment().format('YYYY-MM-DD') >= i.course.data.announcement_date)&&i.status != '申请未通过'){
          //   vm.show.push(i);
          // }else if (i.status != '未提交申请表' && (moment().format('YYYY-MM-DD') <= i.course.data.announcement_date)&&i.status != '申请未通过'){
          //   i.status = '待审核';
          //   vm.show.push(i);
          // }
        });
        vm.hideDefault = false;
      })
  }
  function courseShow(data) {

  }
  function hospital(data) {
    $localStorage.activeApiHost = data.domain_name + '.jinxiu114.com';
    $state.go('admin.hospital.courses.list',{id:data.id,name:data.name});
  }
  function pass(id,result) {
    vm.data={
      confirm:result
    };
    ApplicationService
      .confirm(id,vm.data)
      .then(function (res) {
        toaster.pop('success','操作成功');
        location.reload();
      })
  }
  function transfer(id,result) {
    vm.data={
      confirm:result
    };
    ApplicationService
      .confirm(id,vm.data)
      .then(function (res) {
        toaster.pop('success','操作成功');
        location.reload();
      })
  }
  function admission(id) {
    ExportService
      .exportFile('/application/'+ id +'/downloadEnrollment','录取通知书')
      .then(function (res) {

      })
  }

  function remove(id) {

    ApplicationService
      .remove(id)
      .then(function (res) {
        toaster.pop('success','申请已取消');
      })
  }
}
