var storage = require('./peopleStorage');

var
   _list = function(req, res) { // /people
       storage.list(function(err, list){
           res.json(list);
       })
   },
   _get = function(req, res) { // /people/:id
       storage.get(req.params.id, function(err, person){
           res.json(person);
       })
   },

    _create = function(req, res) { //people
        storage.create(req.body, function(err, person){
            res.json(person);
        })
    },
    _update = function(req, res) { //people:id
        storage.update(req.params.id, req.body, function(err, person){
            res.json(person);
        })
    },
    _delete = function(req, res) { //people:id
        storage.delete(req.params.id, function(err, person){
            res.json(person);
        })
    }

;

module.exports = {
    get: _get,
    create: _create,
    update: _update,
    delete: _delete,
    list: _list
}