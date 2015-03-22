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
  .filter('limitString', function () {
    return function (input, l) {
      var s = String(input);
      return s.substr(s.length - l);
    };
  });
