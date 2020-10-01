---
title: leininger.tech - today I learned
TILIndex: 9
pageTitle: Inset 0
date: 2020-05-19
source: https://twitter.com/argyleink/status/1262906069854060546
---

The "inset" logical property gem is shorthand for all the sides of your box.

This sets all sides to 0, snapping each corner to the corner of it's parent.

```css
.full {
  position: absolute;
  inset: 0;
}
```

### Support
[Only Firefox](https://caniuse.com/?search=inset)
