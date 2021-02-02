const core = require('@actions/core');
const github = require('@actions/github');
const { exec } = require('child_process');

try {
  const token = core.getInput('github-oauth-token');
  const { GITHUB_REPOSITORY, GITHUB_SHA } = process.env;
  const command = `curl -s -H "Accept: application/vnd.github.groot-preview+json" -H "Authorization: token ${token}" https://api.github.com/repos/${ GITHUB_REPOSITORY }/commits/${ GITHUB_SHA }/pulls | jq -r '.[].number'`;
  exec(command, (err, prNumber, stderr) => {
    if (err) {
      throw err;
    }
    const url = prNumber && `https://github.com/${ GITHUB_REPOSITORY }/pull/${ prNumber.trim() }`;
    core.setOutput("url", url);
  });
} catch (error) {
  core.setFailed(error.message);
}
