angular.module('StonyBrookUltimate', [
    'ngRoute',
    'ngSanitize'
  ]).config(function ( $routeProvider ) {
    
    'use strict';
  
    $routeProvider
      .when('/home', {
        templateUrl: 'html/views/home.html',
        controller: 'SiteCtrl',
        controllerAs: 'site'
      })
      .when('/about', {
        templateUrl: 'html/views/about.html',
        controller: 'SiteCtrl',
        controllerAs: 'site'
      })
      .when('/schedule', {
        templateUrl: 'html/views/schedule.html',
        controller: 'SiteCtrl',
        controllerAs: 'site'
      })
      .when('/media', {
        templateUrl: 'html/views/media.html',
        controller: 'SiteCtrl',
        controllerAs: 'site'
      })
      .when('/contact', {
        templateUrl: 'html/views/contact.html',
        controller: 'SiteCtrl',
        controllerAs: 'site'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }).run(function($rootScope){
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
      console.log(event, current, previous, rejection)
    })
  });