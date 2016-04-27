/*global require, requirejs */

'use strict';

requirejs.config({
  paths: {
    'angular': ['../lib/angularjs/angular'],
    'angular-route': ['../lib/angularjs/angular-route']
  },
  shim: {
    'angular': {
      exports : 'angular'
    },
    'angular-route': {
      deps: ['angular'],
      exports : 'angular'
    }
  }
});

require(['angular', './controllers', './directives', './filters', './services', 'angular-route'],
  function(angular, controllers) {

    // Declare app level module which depends on filters, and services

    angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngRoute']).
      config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/homePage', {templateUrl: 'partials/homePage.html', controller: controllers.MyCtrl1});
        $routeProvider.when('/teams', {templateUrl: 'partials/teams.html', controller: controllers.TeamsCtrl});
        $routeProvider.otherwise({redirectTo: '/homePage'});
      }])

      // Nav controller available on every page for location services
      .controller('navCtrl', ['$scope', '$location', function($scope, $location) {
        $scope.isActive = function (location) {
          return location === $location.path();
        };
      }]);

    angular.bootstrap(document, ['myApp']);

});
