'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('PersonController', function ($scope, People, RestPeople, $routeParams) {
     //$scope.person = People.get($routeParams.id);
     RestPeople.get($routeParams.id).success(function(data){
         $scope.person = data;
     })
  });
