var fs = require('fs');
var uuid = require('node-uuid');
var people = null;
var path = null;
var _ = require('lodash');

var configureStorage = function (p) {
    fs.open(p, 'r', function(err, fd){
        // if file doesn't exist we might want to create it and fill with {} (as empty JSON object)
        // all this stuff might be done sync ...
        if (err) {
            fs.writeFile(p, "{}", function(err, fd){
                if (!err) {
                    people = require('./' + p);
                }
            });
        } else {
            people = require('./' + p);
            fs.close(fd, function(){});
        }
    });

    path = p;
    return {
        get: _get,
        create: _create,
        update: _update,
        delete: _delete,
        list: _list
    }
};

var _saveState = function(cb) {
        fs.writeFile(path, JSON.stringify(people), cb);
    },
    _list = function (cb) {
        var peopleArray = _.values(people);
        cb(null, peopleArray);
    },
    _get = function (cb) {
        cb(null, people[id]);
    },

    _create = function(person, cb) {
        if (!person.id)
            person.id = uuid.v1();
        people[person.id] = person;
        _saveState(function(err, data){
            cb(null, person);
        });
    },

    _update = function(id, person, cb) {
        people[id] = person;

        _saveState(function(err, data){
            cb(null, person);
        });
    },

    _delete = function(id, cb){
        var person = people[id];

        delete people[id];

        _saveState(function(err, data){
            cb(null, person);
        });
    }

    ;
module.exports = configureStorage;