var express = require('express'),
    app = express();
    bodyParser = require('body-parser');

    app.use(bodyParser.json());

    app.use(express.static('public'));

    routes = require('./routes')(app);
    app.use(function(req, res){
       res.status(404).send('Not found')
    });
var server = require('./server')(app);

