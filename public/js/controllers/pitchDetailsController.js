/*global define */

'use strict';

define(['angular'], function(angular) {

    var pitchDetailsController = angular.module('pitchDetailsController', []);

    pitchDetailsController.controller('pitchDetailsController', ['$scope', '$routeParams', 'pitchService', function($scope, $routeParams, pitchService) {

        // Selects pitch based on the url parameter
        var pitchId = $routeParams.pitchId;

        pitchService.getPitch(pitchId).then(function(result) {
            $scope.pitch = result;
        });

    }]);

});
