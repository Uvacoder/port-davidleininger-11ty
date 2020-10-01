---
title: leininger.tech - today I learned
TILIndex: 7
pageTitle: Scroll Margins
date: 2020-04-13
source: https://gomakethings.com/how-to-prevent-anchor-links-from-scrolling-behind-a-sticky-header-with-one-line-of-css/
---

Prevent anchor links from scrolling behind a sticky header.

```scss
#anchor {
	scroll-margin-top: 1em;
}
```

### Support
The scroll-margin-top property works in all modern browsers, but has no IE support.
