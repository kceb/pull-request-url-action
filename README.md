# Pull Request URL Action

This action attempts to get the URL of the PR associated with the current commit.

## Inputs

### `github-oauth-token`

**Required** OAuth token used to interact with the GitHub API. Must have commit status read permissions

## Outputs

### `url`

The url of the PR

## Example usage

```
uses: kceb/pull-request-url-action@v1
with:
  github-oauth-token: ${{ secrets.GITHUB_OAUTH_TOKEN }}
```

For more info on how to use outputs: https://help.github.com/en/actions/reference/contexts-and-expression-syntax-for-github-actions#steps-context