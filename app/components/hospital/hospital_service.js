/**
 * Created by yong on 16/5/16.
 */
/**
 * Created by yong on 16/5/6.
 */
'use strict';

angular.module('merchantApp')
  .service('HospitalService',HospitalService);
HospitalService.$inject = ['$http','getHospitalEndpoint'];
function HospitalService($http,getHospitalEndpoint) {
  return{
    list:list,
    show:show,
    courseList:courseList,
    courseShow:courseShow,
    hospitalName:hospitalName,
    department:department,
    contact:contact
  };

  function contact() {
    return $http({
      url: getHospitalEndpoint() + '/contacts',
      method: 'get',
    })
  }
  function hospitalName() {
    return $http({
      url:getHospitalEndpoint() + '/settings/hospital-name',
      method:'GET'
    })
  }

  function department(id,params) {
    return $http({
      url:getHospitalEndpoint() + '/settings/' + id + '/departments',
      method:'GET',
      params:params
    })
  }

  function courseShow(id,params) {
    return $http({
      url:getHospitalEndpoint() + '/courses/' + id,
      method:'GET',
      params:params
    })
  }

  function courseList(params) {
    return $http({
      url: getHospitalEndpoint() + '/courses',
      method: 'GET',
      params: params
    })
  }

  function show(id) {
    return $http({
      url:getHospitalEndpoint() + '/announcements/' + id,
      method:'GET'
    })
  }

  function list(params) {
    return $http({
      url:getHospitalEndpoint() + '/announcements',
      method:'GET',
      params:params
    })
  }
}
