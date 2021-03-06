/*global define */

'use strict';

define(['angular'], function(angular) {

    var teamController = angular.module('teamController', []);

    teamController.controller('teamController', ['$scope', function($scope) {
        $scope.teamList = [];

        // Team 1 Setup
        var team1 = [];
        team1.name = "Team Gettin Gud";
        team1.members = [];
        team1.members.push("Brandon");
        team1.members.push("James");
        team1.members.push("Sproppy Doo");
        team1.projects = [];
        team1.projects.push("Web App (Awesome)");

        // Team 2 Setup
        var team2 = [];
        team2.name = "Team Tech Debt";
        team2.members = [];
        team2.members.push("The Todd");
        team2.members.push("Fairy Pod Mother");
        team2.members.push("Tyscrub");
        team2.projects = [];
        team2.projects.push("Claim Management Stuff");

        $scope.teamList.push(team1);
        $scope.teamList.push(team2);
    }]);

});
