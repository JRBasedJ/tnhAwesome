/*global define */

'use strict';

/**
 * This is an example filter
 */
define(['angular'], function(angular) {

    var exampleFilter = angular.module('exampleFilter', []);

    exampleFilter.directive('exampleFilter', function() {
        return function(value) {
            // value manipulation
        }
    });

});
