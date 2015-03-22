'use strict';

/**
 * @ngdoc filter
 * @name angularApp.filter:upper
 * @function
 * @description
 * # upper
 * Filter in the angularApp.
 */
angular.module('angularApp')
  .filter('upper', function () {
    return function (input) {
      return 'upper filter: ' + input;
    };
  });
