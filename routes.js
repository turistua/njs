var peopleCtrl = require('./peopleCtrl');

module.exports = function(app) {
    app.route('/people/:id')
        .get(peopleCtrl.get)
        .put(peopleCtrl.update)
        .delete(peopleCtrl.delete);

    app.route('/people')
        .get(peopleCtrl.list)
        .post(peopleCtrl.create);
};