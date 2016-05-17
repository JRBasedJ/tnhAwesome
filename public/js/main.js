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
    './controllers/headerControllers',
    './controllers/teamController',
    './controllers/pitchDetailsController',
    './controllers/pitchController',
    './directives/exampleDirective',
    './filters/exampleFilter',
    './services/userServices',
    'angular-route'
], function(angular) {

    var tnhApp = angular.module('tnhApp', [
        'headerControllers',
        'teamController',
        'pitchDetailsController',
        'pitchController',
        'exampleDirective',
        'exampleFilter',
        'userServices',
        'ngRoute'
    ]);

    tnhApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'partials/home.html'});
        $routeProvider.when('/teams', {templateUrl: 'partials/teams.html'});
        $routeProvider.when('/pitch/:pitchId', {templateUrl: 'partials/pitchDetails.html'});
        $routeProvider.when('/login', {templateUrl: 'partials/login.html'});
        $routeProvider.when('/register', {templateUrl: 'partials/register.html'});
        $routeProvider.when('/submitPitch', {templateUrl: 'partials/submitPitch.html'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);

    angular.bootstrap(document, ['tnhApp']);

});
