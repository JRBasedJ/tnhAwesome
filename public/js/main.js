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
        $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: controllers.MyCtrl2});
<<<<<<< HEAD
        $routeProvider.when('/teams', {templateUrl: 'partials/teams.html', controller: controllers.TeamsCtrl});
        $routeProvider.otherwise({redirectTo: '/view1'});
=======
        $routeProvider.otherwise({redirectTo: '/homePage'});
>>>>>>> 690b00590c03bc55c276ed877384efa5c2b975bd
      }]);

    angular.bootstrap(document, ['myApp']);

});
