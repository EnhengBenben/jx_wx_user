/**
 * Created by yong on 16/6/2.
 */
(function() {
  'use strict';

  angular
    .module('merchantApp')
    .service('ExportService', ExportService);

  ExportService.$inject = ['$http','getHospitalEndpoint'];

  /* @ngInject */
  function ExportService($http,getHospitalEndpoint) {
    this.exportFile = exportFile;

    function exportFile(url, filename) {
      return $http({
        url: getHospitalEndpoint() + url,
        method: 'GET',
        responseType: 'arraybuffer'
      }).success(function(data, status, headers, config) {
        var file = new Blob([data], {
          type: headers('Content-Type')
        });
        //trick to download store a file having its URL
        var fileURL = URL.createObjectURL(file);
        var a = document.createElement('a');
        a.href = fileURL;
        a.target = '_blank';
        a.download = filename;
        document.body.appendChild(a);
        a.click();
      }).error(function(data, status, headers, config) {});
    }
  }
})();
