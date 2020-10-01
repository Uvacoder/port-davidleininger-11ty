---
title: leininger.tech - today I learned
TILIndex: 4
pageTitle: Place Content
date: 2020-01-22
source: https://twitter.com/argyleink/status/1220206844750090240
---

Simplify flexbox positioning with using one property instead of two.

```css
.child {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  place-content: center;
}
```

### Support
Not IE
