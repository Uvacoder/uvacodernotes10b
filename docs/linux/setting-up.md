---
id: setting-up
title: Setting up a new machine
---

## Some things I like to do when setting up a new Linux machine.

### Map `CAPSLOCK` to `CTRL` and vice versa.

- On Debian,

  - `vim /etc/default/keyboard`
  - Change the line that reads `XKBOPTIONS=""` to `XKBOPTIONS="ctrl:swapcaps"`
  - `$ sudo dpkg-reconfigure -phigh console-setup`

- EmacsWiki: https://www.emacswiki.org/emacs/MovingTheCtrlKey
- WikiWikiWeb: http://wiki.c2.com/?RemapCapsLock

### Install dotfiles

Pull up my [dotfiles](https://github.com/rsapkf/dotfiles/) and run the install script

### Install necessary programs

- Programming environments: Python (Latest), Rust, Haskell, Java
- Text editors: Vim/Neovim, Emacs(Orgmode, Evil), VSCode, Gedit
- IDEs: Pycharm, IntellijIDEA, Android Studio
- Web browsers: Firefox Developer Edition, Brave, Chromium, qutebrowser, surf, w3m, lynx
- Terminal emulators: Alacritty, rxvt-unicode, st
- Window managers: i3, dwm, dwmstatus
- Misc: sent, zsh, ranger, mutt, Irssi, dmenu, broot, nitrogen, fzf
- Fonts: Mononoki Nerd Font, Source Code Pro
- Themes

  - vim-airline, powerline tmux
  - Dracula on zsh, mutt, qutebrowser, i3, dmenu, rxvt-unicode (.Xresources), Alacritty, VSCode, Sublime Text, Emacs, Jetbrains IDEs, Firefox, Chromium, Neovim, Gedit

- Enable _Italics_ in Vim and tmux ([add terminfo](https://github.com/tmux/tmux/blob/2.1/FAQ#L355-L383) if needed).
- Configure [Mutt](https://github.com/muttmua/muttt)/[NeoMutt](https://github.com/neomutt/neomutt).
- Enable 'Single click to open files' in the default graphical file manager.
