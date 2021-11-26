---
id: javascript
title: JavaScript
---

```javascript
// Get random item from `possibleOptions` array
possibleOptions[Math.floor(Math.random()*possibleOptions.length)];`
```

## Node/npm

```shell
# List all user installed packages
npm list -g --depth=0
```

## Redirect to another website:

[[\*](https://css-tricks.com/redirect-web-page/)]

```html
<!-- With HTML `<meta>` tags (not recommended by W3C) -->
<meta http-equiv="refresh" content="0; URL='http://new-website.com'" />
```

```javascript
// With JavaScript
window.location = 'http://new-website.com'; // or one of these
window.location.href = 'http://new-website.com';
window.location.assign('http://new-website.com');
window.location.replace('http://new-website.com');
```
