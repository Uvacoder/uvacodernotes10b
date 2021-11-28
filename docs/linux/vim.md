---
id: vim
title: Vim
---

[How to exit Vim?](https://stackoverflow.com/a/11828573)

## Basic commands

- `h`, `l`: Move left and right.
- `j`, `k`: Move up and down.
- `g`, `G`, `<n>gg`: First line, last line, nth line.
- `H`/`M`/`L`: Top/Middle/Bottom of the screen.
- `zz`, `zt`, `zb`: Position the screen with the cursor at the middle/top/bottom.
- `M`, `H`, `L`: Position the cursor at the middle/top/bottom.
- `Ctrl-y`, `Ctrl-e`: Scroll one line.
- `Ctrl-u`, `Ctrl-d`: Scroll half-page.
- `Ctrl-b`, `Ctrl-f`: Scroll full-page.
- `0`/`$`: Beginning/End of line.
- `^`/`g_`: First/Last character of line.
- `g;`: Last edited position.
- `'.`: Last edited line.
- `{`/`}`: Previous/Next paragraph.
- `<N>|`: Column N.
- `n%`: Move to a file by percent of file.
- `e`/`E`, `b`/`B`, `w`/`W`: Word-wise navigation.
- `m`/`M`: Marks.
- `*`/`#`: Search for the word under the cursor forward/backward.
- `%`: Find the match of a quote, parenthesis, bracket, or brace under the cursor.
- `I`: Insert at the beginning of line.
- `A`: Append to the end of line.
- `o`/`O`: Open a new line after/before the current.
- `v`/`V`/`Ctrl-v`: Visual mode (to select text!)
- `r`/`R`: Replace text.
- `C`: Change remaining part of line.

## Enable _italics_ in Vim

- Add `highlight Comment cterm=italic` to `~/.vimrc` (**after the colorscheme declaration**).
- If using [jellybeans.vim](https://github.com/nanotech/jellybeans.vim) colorscheme, make sure to add `let g:jellybeans_use_term_italics = 1` too.

## Buffers

- `:ls`: See a list of current buffers.
- `:e ../file.txt`: Open ../file.txt.
- `:b file`: Switch between all open files.
- `:b#`: Open last visited file.

## Tabs

- `:tabs`: List all tabs including their displayed windows.
- `:tabm 0`: Move current tab to first.
- `:tabm`: Move current tab to last.
- `:tabn`: Go to next tab.
- `:tabp`: Go to previous tab.
- `:tabfirst`: Go to first tab.
- `:tablast`: Go to last tab.

In normal mode:

- `gt`: Go to next tab.
- `gT`: Go to previous tab.
- `<i>gt`: Go to tab in position `i`.

## Splits

- `:split`/`:sp`: Horizontal split.
  - `:10sp`: 10 lines high horizontal split.
  - `Ctrl-w _`: Maximize a horizontal split.
  - `Ctrl-w =`: Equalize splits.
  - `:resize +5`/`:res +5`: Increase a split height by 5 lines.
- `:vsplit`/`:vs`: Vertical split.
  - `Ctrl-w |`: Maximize a vertical split.
  - `Ctrl-w =`: Equalize splits.
  - `:vertical resize +5`/`:vert res +5`: Increase a split height by 5 lines.
- `Ctrl-w c`: Close a split.
- `Ctrl-w R`: Swap splits.

## Command mode

- `:earlier 10m`: Time travel in time to 10 minutes ago inside Vim.
- `:later 10m`: Time travel in time to 10 minutes later inside Vim.
- `:norm Ibegin`: Go to the beginning of a line and enter `begin`, then repeat across all selected lines.
- `!pwd`: Run `pwd` terminal command from vim.
- `:read date`: Insert the output of `date` command in current line.
  - `:30read date`: Insert the output of `date` command in line 30.
  - `:$read date`: Insert the output of `date` command in the last line.
- `:10,15s/old/new/g`: Substitute all occurences of `old` with `new` from line 10 to 15.
- `:.,.+5s/old/new/g`: Substitute all occurences of `old` with `new` from the current line to the next 5 lines.
- `:g/import/d`: Delete all lines including the word `import`.
- `:g!/import/d`: Delete all lines not including the word `import`.
- `:g/^@/m$`: Move all lines starting with `@` to the end of the document.
- `:g/^$/d`: Delete all blank lines in a document.

## Miscellaneous

- `:set wrap`/`:set nowrap`
- Default `leader` is `\` (Recommended remappings: `<space>`/`,`)
- `<CR>` (aka carriage return/cartridge return) means `Enter`/`Return`.
- Alternative to `ESC`: `Ctrl-c`, `Ctrl-[` (Recommended remappings for `ESC`: `jk`/`jj`)
- `:smile` (Doesn't work on Neovim)
- `:help 42`

## Links

- [Nvim documentation: vim_diff](https://neovim.io/doc/user/vim_diff.html)
