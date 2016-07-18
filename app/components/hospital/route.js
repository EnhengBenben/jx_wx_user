(function() {
  'use strict';

  angular
    .module('merchantApp')
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('admin.hospital', {
          url: '/hospital',
          abstract: true,
          templateUrl: 'components/hospital/layout.html',
          controller: 'CourseListController as vm'
        });
      $stateProvider.state('admin.hospital.courses', {
          url: '/courses',
          abstract: true,
          templateUrl: 'components/hospital/courses/layout.html'
        })
        .state('admin.hospital.courses.list', {
          url: '/list/:id?name=',
          templateUrl: 'components/hospital/courses/list.html',
          controller: 'CourseListController as vm'
        });
      $stateProvider.state('admin.hospital.notice', {
          url: '/notice',
          abstract: true,
          templateUrl: 'components/hospital/notice/layout.html'
        })
        .state('admin.hospital.notice.list', {
          url: '/list/:id?name=',
          templateUrl: 'components/hospital/notice/list.html',
          controller: 'NoticeListController as vm'
        });
      $stateProvider.state('admin.hospital.contact', {
          url: '/contact',
          abstract: true,
          templateUrl: 'components/hospital/contact/layout.html'
        })
        .state('admin.hospital.contact.list', {
          url: '/list/:id?name=',
          templateUrl: 'components/hospital/contact/list.html',
          controller: 'ContactListController as vm'
        })


    });
})();

