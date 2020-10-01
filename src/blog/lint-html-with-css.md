---
title: leininger.tech - blog
pageTitle: Lint HTML in CSS
date: 2020-06-20
---

Linting HTML with CSS is a great tool to help find problematic markup.

### Empty Links
This selector hunts for links that have:
- no href
- an empty href
- a "#" href (button perhaps?)

```css
a:is(:not([href]), [href=""], [href="#"]) {
  outline: 2px dotted red;
}
```

### Missing Alt Text
Highlight images missing alt text with:

```css
img:not([alt]) {
  outline: 2px dotted red;
}
```
