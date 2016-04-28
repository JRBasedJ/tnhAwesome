/*global define */

'use strict';

/**
 * This is an example directive
 */
define(['angular'], function(angular) {

    var exampleDirective = angular.module('exampleDirective', []);

    exampleDirective.directive('exampleDirective', function() {
        return {
            // directive options
        }
    });

});
