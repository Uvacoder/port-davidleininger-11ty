---
title: leininger.tech - today I learned
TILIndex: 2
pageTitle: Truncate Multi-line Text
date: 2019-09-20
source: https://twitter.com/css/status/1162947246679351296
---

This exact set of properties now actually works to do multiple-line truncation in a fairly well supported way.

```css
.box p {
  display: -webkit-box;
  -webkit-line-clamp: 1; /* # of lines to truncate */
  -webkit-box-orientation: vertical;
  overflow: hidden;
}
```
