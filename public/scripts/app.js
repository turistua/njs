'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */

angular
    .module('angularApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/info/:id', {
            templateUrl: 'views/person.html',
            controller: 'PersonController'
        })
        .otherwise({
            templateUrl: 'views/people.html',
            controller: 'PeopleController'
        })
    }])
  ;