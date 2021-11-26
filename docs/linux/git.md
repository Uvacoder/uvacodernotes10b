---
id: git
title: Git
---

## Useful options

```shell
git log --oneline # Display single commit information per line
git rev-list HEAD --count # Total number of commits
git shortlog # Summarize `git log` output
git commit --amend -m "New commit message" # Edit the last commit message
```

## Miscellaneous

- Remove a file from history

  ```shell
  $ git filter-branch --force --index-filter \
    "git rm --cached --ignore-unmatch PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA" \
    --prune-empty --tag-name-filter cat -- --all
  ```

- Get a list of the deleted files in history

  ```shell
  ## without commit hashes
  git log --diff-filter=D --summary | grep delete

  ## with commit hashes
  git log --diff-filter=D --summary | grep -E 'delete|^commit\s+\S+'
  ```

- Amend older or multiple commit messages

  - Display a list of the last n commits in the default text editor

    ```shell
    git rebase -i HEAD~n
    ```

  - Replace `pick` with `reword` before each commit message you want to change, save and close the commit list file.
  - In each resulting commit file, type the new commit message, save the file, and close it.
  - Push the amended commits.

    ```shell
    git push --force
    ```

- Amend the very first commit message [[\*](https://stackoverflow.com/a/14630424)]

  ```shell
  git rebase -i --root
  ```

- Squash all previous commits into one [[\*](https://stackoverflow.com/a/23486788)]

  ```shell
  git reset $(git commit-tree HEAD^{tree} -m "A new start")
  ```

- Print a leaderboard of authors based on number of commits in a repository

  ```shell
  git log --format='%aN' | sort | uniq -c | sort -nr
  git log --format='%aN' | sort -u # Print all contributors in alphabetical order
  ```
