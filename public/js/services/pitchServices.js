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

                var deferred = $q.defer();
                $http.get('/pitches')
                    .success(deferred.resolve)
                    .error(deferred.reject);
                return deferred.promise;
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
