---
title: leininger.tech - today I learned
TILIndex: 12
pageTitle: Event Listener - Once True
date: 2020-07-24
source: https://twitter.com/mmatuzo/status/1286586512319172610
---

You can add the option `{ once: true }` to an event listener to automatically remove it when has been invoked.

example: https://codepen.io/matuzo/pen/wvMOpXp?editors=1010

```js
document.querySelector('.always').addEventListener('click', () => {
  alert('always')
});

// after this fires it's removed from the dom
document.querySelector('.once').addEventListener('click', () => {
  alert('once')
}, {
  once: true
});
```
