/**
 * Created by yong on 16/5/16.
 */
/**
 * Created by yong on 16/5/6.
 */
'use strict'

angular.module('merchantApp')
  .service('ApplicationService',ApplicationService);

ApplicationService.$inject = ['$http','getWxEndpoint'];

function ApplicationService($http,getWxEndpoint) {
  return {
    application:application,
    list:list,
    confirm:confirm,
    remove:remove,
  };

  function remove(id) {
    return $http({
      url:getWxEndpoint() + '/application/' + id,
      method:'DELETE'
    })
  }


  function confirm(id,data) {
    return $http({
      url:getWxEndpoint() + '/application/' + id + '/confirm',
      method:'PUT',
      data:data

    })
  }

  function list(params) {
    return $http({
      url:getWxEndpoint() + '/users',
      method:'GET',
      params:params
    })
  }

  function application(params) {
    return $http({
      url:getWxEndpoint() + '/application',
      method:'GET',
      params:params
    })
  }
}
