/*global define */

'use strict';

define(['angular'], function(angular) {

    var pitchController = angular.module('pitchController', []);

    pitchController.controller('pitchController', ['$scope', '$location', 'pitchService', function($scope, $location, pitchService) {

        $scope.pitches = [];

        init();

        function init() {
            refreshPitches();
        }

        function refreshPitches() {
            // TODO: Implement service call to back end with promises etc.
            //pitchService.getPitches().then(function(results) {
            //   $scope.pitches = results;
            //});
            $scope.pitches = pitchService.getPitches();
        }

        $scope.createPitch = function() {
            $location.path("/submitPitch");
        };

        $scope.viewPitch = function(pitchId) {
            if (!isNaN(pitchId)) {
                // Valid number
                $location.path("/pitch/" + pitchId);
            } else {
                // Handle invalid pitch ids
                // Idk why they would exist
            }
        }
    }]);

});