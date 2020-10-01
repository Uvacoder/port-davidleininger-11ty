---
title: leininger.tech - blog
pageTitle: Attribute Selectors
date: 2020-01-30
---

Seven different types of CSS attribute selectors

```scss
// This attribute exists on the element
[value]

// This attribute has a specific value of cool
[value='cool']

// This attribute value contains the word cool somewhere in it
[value*='cool']

// This attribute value contains the word cool in a space-separated list
[value~='cool']

// This attribute value starts with the word cool
[value^='cool']

// This attribute value starts with cool in a dash-separated list
[value|='cool']

// This attribute value ends with the word cool
[value$='cool']

// This does not have an attribute with the value of cool
:not([value='cool'])
```
