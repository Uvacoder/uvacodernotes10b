---
id: browsers
title: Browsers
---

## Firefox

- To set Firefox Developer Edition as `sensible-browser` on Linux:

  First, add Firefox Developer Edition to `update-alternatives`:

  ```shell
  sudo update-alternatives --install /usr/bin/x-www-browser x-www-browser /opt/firefox_dev/firefox/firefox 200
  ```

  (assuming the given executable path: `/opt/firefox_dev/firefox/firefox`)

  Then, set it as `sensible-browser`:

  ```shell
  sudo update-alternatives --config x-www-browser
  ```

### `about:config` settings

- `browser.bookmarks.openInTabClosesMenu`: true -> false
- `browser.bookmarks.showMobileBookmarks`: true -> false
- `browser.tabs.loadBookmarksInTabs`: false -> true
- `browser.bookmarks.autoExportHTML`: false -> true
- `browser.tabs.tabMinWidth`: 76 -> 100
- `browser.tabs.closeTabByDblclick`: false -> true
- `browser.tabs.closeWindowWithLastTab`: true -> false
- `browser.privatebrowsing.autostart`: false -> true
- `geo.enabled`: true -> false
- `extensions.pocket.enabled`: true -> false
- `browser.urlbar.openintab`

### Useful shortcuts

[Firefox keyboard shortcuts](https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly)

- `Home`: Move to the top of the page. I recommend using Vimium.
- `<C-l>`: Highlight the url bar.
- `<C-Shift-o>`: Open bookmark manager.
- `<C-Shift-b>`: Toggle bookmarks toolbar.
- `<C-b>`: Toggle bookmarks sidebar.
- `<C-Shift-a>`: Open addons manager.
- `<C-Shift-Del>`: Clear recent history.
- `<C-Shift-d>`: Bookmark all open tabs in a folder.
- `<C-Shift-r>` / `<C-F5>`: Reload the tab and clear the cache.
- `<C-Shift-t`: Undo close tab.
