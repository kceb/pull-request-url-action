# Pull Request URL Action

This action attempts to get the URL of the PR associated with the current commit.

## Outputs

### `url`

The url of the PR

## Example usage

```
- uses: kceb/pull-request-url-action@v1
  id: pr-url

- run: echo "${{ steps.pr-url.outputs.url }}"
```

For more info on how to use outputs: https://help.github.com/en/actions/reference/contexts-and-expression-syntax-for-github-actions#steps-context