---
title: leininger.tech - today I learned
TILIndex: 6
pageTitle: Counter
date: 2020-04-02
source: https://twitter.com/JoshWComeau/status/1245768582706987008
---

CSS has built-in operators to count the number of elements rendered.

```scss
ol {
  /* Give our counter a name, any name will do */
  counter-reset: ordered-list;
}

ol li {
  /* Indicate that we should increment the count
     for every list item */
  counter-increment: counts;
  list-style: none;
}

ol li:before {
  /* Use the count in the :before pseudoelement */
  content: counter(counts) '. ';
  display: inline-block;
  color: deeppink;
  font-family: 'Pacifico', cursive;
  width: 32px;
}
```

### Support
All
