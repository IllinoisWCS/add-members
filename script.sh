#!/bin/bash

read githubkey < keys.txt
read githubuser < githubuser.txt
read teamid < teamid.txt
curl -u $githubuser:$githubkey 'https://api.github.com/repos/IllinoisWCS/git-skeleton/pulls' | jq -r '.[] | .user.login' > usernames.txt
while read line
do
    api='https://api.github.com/teams/'
    api+=$teamid
    api+='/memberships/'
    api+=$line
    curl -u $githubuser:$githubkey -X PUT -H "Content-Type: application/json" -d '{}' $api
done < usernames.txt