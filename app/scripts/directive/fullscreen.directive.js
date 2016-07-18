/**
 * Created by yong on 16/5/13.
 */
'use strict';

angular
  .module('merchantApp')
  .directive('fullscreen',['$window',function($window){
    return function(scope, element, attrs){
      element.css('min-height',$window.innerHeight+'px');
    }
  }]);
