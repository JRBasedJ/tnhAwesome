/*global define */

'use strict';

define(['angular'], function(angular) {

    var pitchServices = angular.module('pitchServices', []);

    pitchServices.factory('pitchService', ['$http', '$q', function($http, $q) {
        return {
            createPitch: function(pitch) {
                var deferred = $q.defer();
                $http.post('/pitches/new', pitch)
                    .success(deferred.resolve)
                    .error(deferred.reject);
                return deferred.promise;
            },
            getPitch: function(id) {
                var deferred = $q.defer();
                $http.get('/pitches/'+id)
                    .success(deferred.resolve)
                    .error(deferred.reject);
                return deferred.promise;
            },
            getPitches: function() {
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

                return pitches;

                // TODO: Get these pitches from the back end!! #bootyWap
                //var deferred = $q.defer();
                //$http.get('/pitches')
                //    .success(deferred.resolve)
                //    .error(deferred.reject);
                //return deferred.promise;
            },
            updatePitch: function(pitch) {
                var deferred = $q.defer();
                $http.put('/pitches/update', user)
                    .success(deferred.resolve)
                    .error(deferred.reject);
                return deferred.promise;
            },
            deletePitch: function(id) {
                var deferred = $q.defer();
                $http.delete('/pitches/delete'+id)
                    .success(deferred.resolve)
                    .error(deferred.reject);
                return deferred.promise;
            }
        }
    }]);

});
