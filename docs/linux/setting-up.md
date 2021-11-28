---
id: setting-up
title: Setting up a new machine
---

Some things I like to do when setting up a new Linux machine.

### Map `Caps Lock` to `Ctrl` and vice versa

- [Moving The Ctrl Key - EmacsWiki](https://www.emacswiki.org/emacs/MovingTheCtrlKey)
- [Remap Caps Lock - WikiWikiWeb](http://wiki.c2.com/?RemapCapsLock)

```shell
# On Debian
vim /etc/default/keyboard
# Change the line that reads `XKBOPTIONS=""` to `XKBOPTIONS="ctrl:swapcaps"`
sudo dpkg-reconfigure -phigh console-setup
```

### Install dotfiles

Pull up my [dotfiles](https://github.com/rsapkf/config/) and run the install script.

### Install programs

- **Programming environments**: Python (Latest), Rust, Haskell, Java
- **Text editors**: Vim/Neovim, VSCodium
- **IDEs**: Pycharm, IntellijIDEA, Android Studio
- **Web browsers**: Firefox Developer Edition, Brave, Chromium, qutebrowser, w3m, lynx
- **Terminal emulators**: Alacritty, st
- **Window managers**: dwm
- **Miscellaneous**: zsh/oh-my-zsh, n³, mutt, Irssi, dmenu, nitrogen, fzf
- **Fonts**: Mononoki Nerd Font, Source Code Pro, Fira Code
- **Themes**: Dracula
- Enable _Italics_ in Vim and tmux ([add terminfo](https://github.com/tmux/tmux/blob/2.1/FAQ#L355-L383) if needed).
- Configure [Mutt](https://github.com/muttmua/muttt)/[NeoMutt](https://github.com/neomutt/neomutt).
- Enable "Single click to open files" in the default graphical file manager.
