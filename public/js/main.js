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
    './controllers/navController',
    './controllers/teamController',
    './controllers/pitchDetailsController',
    './directives/exampleDirective',
    './filters/exampleFilter',
    './services/exampleService',
    'angular-route'
], function(angular) {

    var tnhApp = angular.module('tnhApp', [
        'navController',
        'teamController',
        'pitchDetailsController',
        'exampleDirective',
        'exampleFilter',
        'exampleService',
        'ngRoute'
    ]);

    tnhApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
        $routeProvider.when('/teams', {templateUrl: 'partials/teams.html'});
        $routeProvider.when('/pitch/:pitchId', {templateUrl: 'partials/pitchDetails.html'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);

    angular.bootstrap(document, ['tnhApp']);

});
