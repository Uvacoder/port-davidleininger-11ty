---
title: leininger.tech - today I learned
TILIndex: 13
pageTitle: Fix Bold on Hover Styles
date: 2020-07-28
source: https://twitter.com/hexagoncircle/status/1285234486200934402
---

Add a hidden pseudo element with the same text string but set it to the bold font size

example: https://codepen.io/hexagoncircle/pen/WNrYPLo

```scss
.menu.fix .menu-link::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  height: 0;
  visibility: hidden;
  overflow: hidden;
  user-select: none;
  pointer-events: none;
  font-weight: var(--bold);

  @media speech {
    display: none;
  }
}
```
