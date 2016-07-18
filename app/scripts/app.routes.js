(function() {
  'use strict';

  angular
    .module('merchantApp')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/admin/dashboard');
      $stateProvider
        .state('admin', {
          url: '/admin',
          abstract: true,
          controller: 'AdminController as admin',
          templateUrl: 'views/main.html'
        })
        .state('login', {
          url: '/login?wx&jwt',
          templateUrl: 'components/auth/login.html',
          controller: 'LoginController as vm'
        })
        .state('register', {
          url: '/register',
          templateUrl: 'components/auth/register.html',
          controller: 'RegisterController as vm'
        })
        .state('password', {
          url: '/password',
          templateUrl: 'components/auth/password.html',
          controller: 'PasswordController as vm'
        })
        .state('submit', {
          url: '/submit',
          templateUrl: 'components/application/submit.html',
          controller: 'SubmitApplicationController as vm'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: 'components/application/contact.html',
          controller: 'SubmitApplicationController as vm'
        })
        .state('admin.dashboard',{
          url:'/dashboard',
          templateUrl:'components/dashboard/dashboard.html',
          controller:'DashboardController as vm'
        })
        .state('admin.course',{
          url:'/show/course/:id',
          templateUrl:'components/show/course.html',
          controller:'ShowCourseController as vm'
        })
        .state('admin.notice',{
          url:'/show/notice/:id',
          templateUrl:'components/show/notice.html',
          controller:'ShowNoticeController as vm'
        });
      $stateProvider
        .state('admin.application', {
          url: '/application',
          abstract: true,
          templateUrl: 'components/application/layout.html'
        })
        .state('admin.application.list',{
          url:'/list',
          templateUrl:'components/application/list.html',
          controller:'ApplicationListController as vm'
        })

    });
})();
