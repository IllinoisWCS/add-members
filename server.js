var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

var port = process.env.port || 4000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', router);

var payloadRoute = router.route('/add-members');

payloadRoute.post(function(request, response) {
    // TODO: Consume the request's payload and extract the username
    // TODO: Add the username to the organization if it's not already there
    // TODO: Add the username to the team if it's not already there
});