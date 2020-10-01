---
title: leininger.tech - today I learned
TILIndex: 16
pageTitle: Grayscale Accessibilty Test
date: 2020-09-08
source: https://twitter.com/mmatuzo/status/1303202836537376769
---

It’s important that color is not used as the only visual means of conveying information.

Add this class to your CSS to switch to grayscale mode and check if your user interface is still comprehensible and visual elements distinguishable.

```css
.a11y-grayscale {
  filter: grayscale(100%) !important;
}
```

```html
<html class="a11y-gray" lang="en" />
...
</html>
```
