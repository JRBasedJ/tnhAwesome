/*global define */

'use strict';

define(['angular'], function(angular) {

    var navController = angular.module('navController', []);

    navController.controller('navController', ['$scope', '$location', function($scope, $location) {
        $scope.isActive = function(location) {
            return location === $location.path();
        };
    }]);

});
