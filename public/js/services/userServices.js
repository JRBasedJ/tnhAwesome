/*global define */

'use strict';

/**
 * This is an example service
 */
define(['angular'], function(angular) {

    var userServices = angular.module('userServices', []);

    userServices.factory('userService', ['$http', '$q', function($http, $q) {
        return {
            createUser: function(user) {
                var deferred = $q.defer();
                $http.post('/users/new', user)
                    .success(deferred.resolve)
                    .error(deferred.reject);
                return deferred.promise;
            },
            getUser: function(id) {
                var deferred = $q.defer();
                $http.get('/users/'+id)
                    .success(deferred.resolve)
                    .error(deferred.reject);
                return deferred.promise;
            },
            getUsers: function() {
                var deferred = $q.defer();
                $http.get('/users')
                    .success(deferred.resolve)
                    .error(deferred.reject);
                return deferred.promise;
            },
            updateUser: function(user) {
                var deferred = $q.defer();
                $http.put('/users/update', user)
                    .success(deferred.resolve)
                    .error(deferred.reject);
                return deferred.promise;
            },
            deleteUser: function(id) {
                var deferred = $q.defer();
                $http.delete('/users/'+id)
                    .success(deferred.resolve)
                    .error(deferred.reject);
                return deferred.promise;
            }
        }
    }]);

});
