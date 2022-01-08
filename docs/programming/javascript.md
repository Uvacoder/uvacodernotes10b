---
id: javascript
title: JavaScript
---

## Utils

- Get random item from an array

  ```javascript
  arr[Math.floor(Math.random() * arr.length)];
  ```

- Capitalize a string

  ```javascript
  const capitalize = (string) => string.replace(/^\w/, (c) => c.toUpperCase());
  // or
  // string.charAt(0).toUpperCase() + string.slice(1)
  ```

- Format a date string [[Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat), [toLocaleDateString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)]

  ```javascript
  const formatDate = (dateString) => {
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    };
    return new Intl.DateTimeFormat('en', options).format(dateString);
    // or
    // new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Usage
  formatDate('1987-07-27T12:34:56'); // Mon, Jul 27, 1987, 12:34:56
  ```

- Format a number [[Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)]

  ```javascript
  const formatNumber = (number) => {
    const options = {
      notation: 'compact',
      compactDisplay: 'short',
    };
    return new Intl.NumberFormat('en', options).format(number);
  };

  // Usage
  formatNumber(123456); // 123K
  formatNumber(456789012); // 457M
  ```

- Convert seconds to HH:MM:SS

  ```javascript
  const secToHHMMSS = (sec) => {
    let hours = Math.floor(sec / 3600);
    sec %= 3600;
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec % 60);

    hours = hours < 10 ? `0${hours}` : `${hours}`;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${hours}:${minutes}:${seconds}`;
  };
  ```

- Copy text to clipboard

  ```javascript
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      throw new Error('Cannot copy');
    }
  };
  ```

- Padding a string [[padStart](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart), [padEnd](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)]

  ```javascript
  'abc'.padStart(10); // "       abc"
  'abc'.padStart(10, 'foo'); // "foofoofabc"
  'abc'.padStart(6, '123465'); // "123abc"
  'abc'.padStart(8, '0'); // "00000abc"

  'abc'.padEnd(10); // "abc       "
  'abc'.padEnd(10, 'foo'); // "abcfoofoof"
  'abc'.padEnd(6, '123456'); // "abc123"
  'abc'.padEnd(1); // "abc"
  ```

## Node.js/npm

- List all user installed packages

  ```shell
  npm list -g --depth=0
  ```

## Redirect to another website

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
