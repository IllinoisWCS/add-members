var express = require('express');
var bodyParser = require('body-parser');
var requestPromise = require('request-promise');

var keys = require('./keys');

var githubAPI = "https://api.github.com/";

var app = express();
var router = express.Router();

var port = process.env.port || 4000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', router);

var payloadRoute = router.route('/add-members');

function getOrganizationMembers() {
    return requestPromise.get(githubAPI + "orgs/IllinoisWCS/members");
}

function getTeamMembers() {
    return requestPromise.get(githubAPI + "teams/" + keys.team + "/members");
}

function addMemberToOrganization(username) {
    // TODO: Add params - role = member
    return requestPromise.put(githubAPI + "orgs/IllinoisWCS/memberships/" + username);
}

function addMemberToTeam(username) {
    // TODO: Add params - role = member
    return requestPromise.put(githubAPI + "teams/" + keys.team + "/memberships/" + username);
}

payloadRoute.post(function(request, response) {
    var username = request.body.user.login; // TODO: Confirm / fix based on object structure
    getOrganizationMembers()
        .then(function(data) {

        })
        .then(function(data) {

        })
        .then(function(data) {

        })
        .catch(function(error) {

        });
    // TODO: Add the username to the organization if it's not already there
    // TODO: Add the username to the team if it's not already there
});

app.listen(port);