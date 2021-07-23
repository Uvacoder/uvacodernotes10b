---
id: grep-ripgrep
title: grep / ripgrep
---

## grep

- Recursively search current directory for a pattern:

  `grep -nr 'yourString*' .`

- Find lines in one file that are not in another ([\*](https://stackoverflow.com/questions/18204904/fast-way-of-finding-lines-in-one-file-that-are-not-in-another)):

  `grep -v -f file1 file2`

## ripgrep
