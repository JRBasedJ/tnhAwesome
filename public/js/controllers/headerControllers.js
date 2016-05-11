/*global define */

'use strict';

define(['angular'], function(angular) {

    var headerControllers = angular.module('headerControllers', []);

    headerControllers.controller('navController', ['$scope', '$location', function($scope, $location) {
        $scope.isActive = function(location) {
            return location === $location.path();
        };
    }]);

    headerControllers.controller('registerController', ['$scope', function($scope) {
        $scope.register = function() {
            //todo: register user
        }
    }]);

    headerControllers.controller('loginController', ['$scope', function($scope) {
        $scope.login = function() {
            //todo: login user
        }
    }]);

});
