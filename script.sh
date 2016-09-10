#!/bin/bash

read githubkey < keys.txt
curl -u elchao96:$githubkey 'https://api.github.com/repos/IllinoisWCS/git-skeleton/pulls' | jq -r '.[] | .user.login' > usernames.txt
while read line
do
    api='https://api.github.com/teams/2003095/memberships/'
    api+=$line
    curl -u elchao96:$githubkey -X PUT -H "Content-Type: application/json" -d '{}' $api
done < usernames.txt