---
title: leininger.tech - today I learned
TILIndex: 14
pageTitle: Input Mode
date: 2020-08-21
source: https://twitter.com/stefanjudis/status/1296749635290234882
---

Help users by giving them the correct keyboard to use on touch screen devices.

https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode

```html
<!-- No virtual keyboard. For when the page
implements its own keyboard input control. -->
<input inputmode="none" />

<!-- Standard input keyboard for the user's current locale. -->
<input inputmode="text" />

<!-- Fractional numeric input keyboard containing
the digits and decimal separator for the user's locale -->
<input inputmode="decimal" />

<!-- Numeric input keyboard, but only requires the
digits 0–9. Devices may or may not show a minus key. -->
<input inputmode="numeric" />

<!-- A telephone keypad input, including the digits 0–9,
the asterisk (*), and the pound (#) key. Inputs that
require a telephone number should typically use
<input type="tel">instead. -->
<input inputmode="tel" />

<!-- A virtual keyboard optimized for search input.
For instance, the return/submit key may be labeled
“Search”. Inputs that require a search query should
typically use <input type="search"> instead. -->
<input inputmode="search" />

<!-- A virtual keyboard optimized for entering email
addresses. Typically includes the @ character as well as
other optimizations. Inputs that require email addresses
should typically use <input type="email"> instead. -->
<input inputmode="email" />

<!-- A keypad optimized for entering URLs. This
may have the / key more prominent, for example.
Enhanced features could include history access
and so on. Inputs that require a URL should
typically use <input type="url"> instead. -->
<input inputmode="url" />
```
