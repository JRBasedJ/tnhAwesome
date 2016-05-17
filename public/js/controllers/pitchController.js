/*global define */

'use strict';

define(['angular'], function(angular) {

    var pitchController = angular.module('pitchController', []);

    pitchController.controller('pitchController', ['$scope', '$location', function($scope, $location) {
        $scope.createPitch = function() {
            $location.path("/submitPitch");
        };
    }]);

});