/**
 * Created by yong on 16/5/16.
 */
'use strict';

angular.module('merchantApp')
  .controller('ContactListController',ContactListController);
ContactListController.$inject = ['HospitalService','$localStorage'];
function ContactListController(HospitalService,$localStorage) {
  var vm = this;
  document.title = $localStorage.hospitalName;
  return init();

  function init() {
    HospitalService
      .contact()
      .then(function (res) {
        vm.showList = res;
        $('#info').html(res.data[0].con_info);
      })

  }

}
