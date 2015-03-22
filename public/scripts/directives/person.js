'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:Person
 * @description
 * # Person
 */
angular.module('angularApp')
  .directive('Person', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the Person directive');
      }
    };
  });
