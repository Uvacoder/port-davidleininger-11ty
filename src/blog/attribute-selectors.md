---
title: leininger.tech - blog
pageTitle: Attribute Selectors
date: 2020-01-30
---

It's always funny when people say to me, "I hate CSS." Sometimes I ask why, but most of the time I just move on disgusted. CSS is fun and I love learning more and more and more about it. I think one of the reasons people don't CSS is because there is so much too it, and so much nuance. It's similar to the english language: there, they're, their.

One example of that nuance is Attribute Selectors. While pretty much everyone know you and use classes `.item`, ids `#logo`, and tags `div`, not everyone knows there are other ways to select elements. Attribute selectors allow you to select an item if it has a certain attribute or that that attribute has a certain value. Attribute selectors can give you a special treatment if a linke has `target="_blank"` to let a user know they are leaving your site. They can change a style if the file name you're linking to ends in `.pdf`.

Attribute selectors are very powerful, and I often forget about them So here are the things I've learned and found in different places, put together, and referenced so I'd have a simple place to come back to. Because really this "blog" is for me anyways.

## Eight different types of CSS attribute selectors

```css
/* This attribute exists on the element */
[value] { }

/* This attribute has a specific value of cool */
[value='cool'] { }

/* This attribute value contains the word cool somewhere in it */
[value*='cool'] { }

/* This attribute value contains the word cool in a space-separated list */
[value~='cool'] { }

/* This attribute value starts with the word cool */
[value^='cool'] { }

/* This attribute value starts with cool in a dash-separated list */
[value|='cool'] { }

/* This attribute value ends with the word cool */
[value$='cool'] { }

/* This does not have an attribute with the value of cool */
:not([value='cool']) { }
```

_The above code is sniped from [Emma Bostian's gist](https://gist.github.com/emmabostian/ed933bc7f9711acdc565f42f1b159407)._

## Multiple Selectors
One thing to note is that these attribute selectors can be chained to be more specific or require more matches.

```css
/* This attribute has a specific value of cool and a name of david */
[value='cool'][name='david'] { }
```

## Case-Insensitve Attribute Selectors
By default, the strings inside attribute selectors are case sensitive. Simply adding `i` to the end of the attribute selector will allow you to select the strings regardless of case. That seems super helpful in a large group project.

```css
/* Will match
<div data-state="open"></div>
<div data-state="Open"></div>
<div data-state="OPEN"></div>
<div data-state="oPeN"></div>
*/
[data-state="open" i] { }
```
_The above code is sniped from [CSS Tricks](https://css-tricks.com/attribute-selectors/#case-insensitve-attribute-selectors)._

## Specificity (spec·i·fic·i·ty)
Arrtibute selectors are the same weight in specificity as a class. The way I like to think about it is 100 points for ids, 10 points for classes, and 1 point for tags. So for example: `#page a.link[href$='.pdf']` would be work 121 points. 100 for the `#page`, 10 for the `.link`, 10 for `[href$='.pdf']`, and 1 for `a`.

And there you have it, Attribute Selectors. They are are super powerful and super under utilized. I'm hoping to use them more in my work.
