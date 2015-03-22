'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
    .controller('PeopleController', function ($scope, People, RestPeople, $location) {

        var removePerson = function(id) {
            $scope.people = $scope.people.filter(function(person){
                return person.id != id;
            })
        };
        $scope.people = [];

        RestPeople.list().success(function(data){
            $scope.people = data;
        });

        $scope.resetPerson = function() {
            $scope.editPerson = {

            }
        };

        $scope.savePerson = function(){
            RestPeople.add($scope.editPerson)
                .success(function(data){
                    $scope.people = $scope.people.filter(function(person){
                        return person.id != data.id;
                    });
                    //console.log(data);
                    $scope.people.push(data);
                });
            //People.add($scope.editPerson);
            //console.log(People.list());
            $scope.resetPerson();
        };

        $scope.edit = function(person) {
            $scope.editPerson = angular.copy(person);
        };

        $scope.peopleList = function() {
            return People.list();
        };

        $scope.delete = function(id){
            RestPeople.delete(id).success(function(data){
                removePerson(id);
            });
        };

        $scope.view = function(id){
            $location.path('/info/' + id)
        };

        $scope.resetPerson();

    });
