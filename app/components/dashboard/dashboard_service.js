(function() {
  'use strict';

  angular
    .module('merchantApp')
    .service('DashboardService', DashboardService);

  DashboardService.$inject = ['$http','getWxEndpoint'];

  /* @ngInject */
  function DashboardService($http,getWxEndpoint) {
    this.dashboard = dashboard;
    function dashboard(){
      return $http({
        url:getWxEndpoint() + '/wx/hospital',
        //url:'http://123.jx114.conglinnet.com/api/wx/hospital',
        method:'GET'
      })
    }


  }
})();
