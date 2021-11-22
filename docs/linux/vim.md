---
id: vim
title: Vim
---

## Enable _italics_ in Vim

- add `highlight Comment cterm=italic` to `~/.vimrc` (**after the colorscheme declaration**).

- If using [nanotech/jellybeans.vim](https://github.com/nanotech/jellybeans.vim) colorscheme, make sure to add `let g:jellybeans_use_term_italics = 1` too.

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
- `{i}gt`: Go to tab in position `i`.

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

## Splits

- `:split` / `:sp`: Horizontal split.
  - `:10sp`: 10 lines high horizontal split.
  - `<ctrl> w _`: Maximize a horizontal split.
  - `<ctrl> w =`: Equalize splits.
  - `:resize +5` / `:res +5`: Increase a split height by 5 lines.
- `:vsplit` / `:vs`: Vertical split.
  - `<ctrl> w |`: Maximize a vertical split.
  - `<ctrl> w =`: Equalize splits.
  - `:vertical resize +5` / `:vert res +5`: Increase a split height by 5 lines.
- `<ctrl> w c`: Close a split.
- `<ctrl> w R`: Swap splits.

## Miscellaneous

- `:set wrap` / `:set nowrap`
- Default `leader` is `\` (I map to it to `<space>`/`,`)
- `<CR>` (aka carriage/cartridge return) means `Enter`/`Return`.
- Alternative to `<ESC>`: `<C-[>` (I map `<ESC>` to `jj`/`jk`)
- `:smile`
