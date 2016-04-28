/*global define */

'use strict';

/**
 * This is an example service
 */
define(['angular'], function(angular) {

    var exampleService = angular.module('exampleService', []);

    exampleService.factory('exampleService', ['$scope', function($scope) {
        return {
            // service functions
        }
    }]);

});
