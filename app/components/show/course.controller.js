/**
 * Created by yong on 16/5/16.
 */
'use strict';

angular.module('merchantApp')
  .controller('ShowCourseController',ShowCourseController);
ShowCourseController.$inject = ['HospitalService','$stateParams'];
function ShowCourseController(HospitalService,$stateParams) {
  var vm = this;

  return init();

  function init() {

    HospitalService
      .courseShow($stateParams.id)
      .then(function (res) {
        vm.show = res.data.data;
        $('#info').html(vm.show.detail_info);
        document.title = vm.show.name;
      })

  }

}
