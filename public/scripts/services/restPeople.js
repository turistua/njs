'use strict';

/**
 * @ngdoc service
 * @name angularApp.People
 * @description
 * # People
 * Service in the angularApp.
 */
angular.module('angularApp')
    .factory('RestPeople', function ($http) {

          var url = 'http://localhost:3000/people',
              _add = function (person) {
                  return $http.post(url, person);
              },
            _get = function (id){
                return $http.get(url + "/" + id);
            },
            _list = function() {
                return $http.get(url);
            },

            _delete = function (id) {
                return $http.delete(url+ "/" + id);
            };

        return {
            get: _get,
            list: _list,
            delete: _delete,
            add: _add
        }

    // AngularJS will instantiate a singleton by calling "new" on this function
  });
