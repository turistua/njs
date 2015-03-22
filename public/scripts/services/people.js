'use strict';

/**
 * @ngdoc service
 * @name angularApp.People
 * @description
 * # People
 * Service in the angularApp.
 */
angular.module('angularApp')
  .factory('People', function () {

        var people = {},
            _add = function (person) {
                if (!person.id)
                    person.id = new Date().getTime();

                people[person.id] = person;
            },
            _get = function (id){
                if (!id) return _list();

                return people[id];
            },
            _list = function() {
                var values = [];
                for (var key in people) {
                    values.push(people[key])
                }
                return values;
            },

            _delete = function (id) {
                delete people[id];
            };

        return {
            get: _get,
            list: _list,
            delete: _delete,
            add: _add
        }

    // AngularJS will instantiate a singleton by calling "new" on this function
  });
