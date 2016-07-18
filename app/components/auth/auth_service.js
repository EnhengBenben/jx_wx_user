'use strict';

angular.module('merchantApp')
  .service('AuthService', AuthService);

AuthService.$inject = ['getWxEndpoint', '$http'];

function AuthService(getWxEndpoint, $http) {
  return {
    login: login,
    code:code,
    changeCode:changeCode,
    register:register,
    changePsd:changePsd

  };

  function changePsd(data) {
    return $http({
      url:getWxEndpoint() + '/change-password',
      method:'PUT',
      data:data
    })
  }

  function register(data) {
    return $http({
      url:getWxEndpoint() + '/users',
      method:'POST',
      data:data
    })
  }

  function changeCode(data) {
    return $http({
      url:getWxEndpoint() + '/code_change',
      method:'PUT',
      data:data
    })
  }
  function code(data) {
    return $http({
      url:getWxEndpoint() + '/code',
      method:'PUT',
      data:data
    })
  }

  function login(data) {
    return $http({
      method: 'POST',
      url: getWxEndpoint() + '/auth/login',
      data: data
    });
  }
}
