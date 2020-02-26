const core = require('@actions/core');
const github = require('@actions/github');
const { exec } = require('child_process');

try {
  const token = core.getInput('github-oauth-token');
  const command = `curl -s -H "Accept: application/vnd.github.groot-preview+json" -H "Authorization: token ${token}" https://api.github.com/repos/${ process.env.GITHUB_REPOSITORY }/commits/${ process.env.GITHUB_SHA }/pulls | jq -r '.[].number`;
  exec(command, (err, stdout, stderr) => {
    if (err) {
      throw err;
    }
    core.setOutput("url", stdout);
  });
} catch (error) {
  core.setFailed(error.message);
}
