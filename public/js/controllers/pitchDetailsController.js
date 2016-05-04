/*global define */

'use strict';

define(['angular'], function(angular) {

    var pitchDetailsController = angular.module('pitchDetailsController', []);

    pitchDetailsController.controller('pitchDetailsController', ['$scope', '$routeParams', function($scope, $routeParams) {

        var pitches = [];

        // Pitch 1 Setup
        var pitch1 = [];
        pitch1.id = 1;
        pitch1.name = "We Pitchin - Pitch #1";
        pitch1.description = "If a nice pitch could pitch people, how many people could a nice pitch pitch?";
        pitch1.members = [];
        pitch1.members.push("Amino Acid");
        pitch1.members.push("James");
        pitch1.members.push("Sproppy Doo");
        pitches.push(pitch1);

        // Pitch 2 Setup
        var pitch2 = [];
        pitch2.id = 2;
        pitch2.name = "This is My Side Pitch - #2";
        pitch2.description = "Twinkle twinkle little pitch, how I wonder what you itch.";
        pitch2.members = [];
        pitch2.members.push("Elsa");
        pitch2.members.push("Hodor");
        pitch2.members.push("Mike Jones");
        pitches.push(pitch2);


        // TODO: get the pitch from the db instead
        // Selects pitch based on the url parameter
        var pitchId = $routeParams.pitchId;
        pitches.forEach(function (p) {
            if (p.id == pitchId) {
                $scope.pitch = p;
            }
        });

    }]);

});
