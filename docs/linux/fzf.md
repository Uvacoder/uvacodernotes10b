---
id: fzf
title: fzf
---

`fzf` is a command line fuzzy finder. It can search through the entries in a list of files, command history, processes, hostnames, bookmarks, git commits, etc.

`fzf` provides 3 keyboard shortcuts:

- **`CTRL-T`** to paste the selected **files and directories** onto the command-line.

  By default, `fzf` uses `find` to search for files. This can be configured setting `FZF_CTRL_T_COMMAND` in `.bashrc`/`,zshrc`:

  ```shell title="~/.zshrc"
  # Set fd as the default source for fzf
  export FZF_DEFAULT_COMMAND='fd -type f --follow --hidden --exclude .git'

  # Apply the command to CTRL-T as well
  export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"

  # Preview contents of files
  export FZF_CTRL_T_OPTS="--preview '(highlight -O ansi -l {} 2> /dev/null || cat {} || tree -C {}) 2> /dev/null | head -200'"

  # Set color scheme to Dracula
  export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'
  --color=dark
  --color=fg:-1,bg:-1,hl:#5fff87,fg+:-1,bg+:-1,hl+:#ffaf5f
  --color=info:#af87ff,prompt:#5fff87,pointer:#ff87d7,marker:#ff87d7,spinner:#ff87d7
  '
  ```

- **`CTRL-R`** to paste the selected **command from history** onto the command-line.

  Pressing `CTRL_R` again will show the commands in chronological order.

- **`ALT-C`** to **cd** into the selected directory.

  ```shell title="~/.zshrc"
  # Use fd here as well
  export FZF_ALT_C_COMMAND="fd -t d"

  # Preview files
  export FZF_ALT_C_OPTS="--preview 'tree -C {} | head -200'"
  ```

To start the finder in a tmux split pane:

```shell title="~/.bashrc"
export FZF_TMUX=1
```
