(function() {
  'use strict';

  angular
    .module('merchantApp')
    .service('AttachmentService', AttachmentService);

  AttachmentService.$inject = ['getHospitalEndpoint', '$http'];

  /* @ngInject */
  function AttachmentService(getHospitalEndpoint, $http) {
    return {
      create: create
    };

    function create(data) {
      var fd = new FormData();
      for (var p in data) {
        fd.append(p, data[p]);
      }

      return $http.post(getHospitalEndpoint() + '/attachments', fd, {
        transformRequest: angular.identity,
        headers: {
          'Content-Type': undefined
        }
      });
    }
  }

})();
