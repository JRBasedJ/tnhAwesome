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

require([
    'angular',
    './controllers',
    './directives',
    './filters',
    './services',
    './controllers/navController',
    'angular-route'
], function(angular, controllers) {

    var tnhApp = angular.module('tnhApp', [
        'myApp.filters',
        'myApp.services',
        'myApp.directives',
        'navController',
        'ngRoute'
    ]);

    tnhApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/homePage', {templateUrl: 'partials/homePage.html', controller: controllers.MyCtrl1});
        $routeProvider.when('/teams', {templateUrl: 'partials/teams.html', controller: controllers.TeamsCtrl});
        $routeProvider.otherwise({redirectTo: '/homePage'});
    }]);

    angular.bootstrap(document, ['tnhApp']);

});
