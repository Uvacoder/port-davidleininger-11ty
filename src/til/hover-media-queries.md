---
title: leininger.tech - today I learned
TILIndex: 8
pageTitle: Hover Media Quesries
date: 2020-04-21
source: https://twitter.com/argyleink/status/1262906069854060546
---

Style if mobile
Style if desktop
Style if stylus
Style if controller
Combine together

```scss
// laptop/desktop styles
@media (hover: hover) {}

// smartphones/touchscreens
@media (hover: none) and (pointer: coarse) {}

// device with stylus
@media (hover: none) and (pointer: fine) {}

// Wii/Kinect/etc
@media (hover: hover) and (pointer: coarse) {}

// mouse/touchpad
@media (hover: hover) and (pointer: fine) {}
```

### Support
[Pretty Darn Good](https://t.co/ig9ONaQJAI?amp=1)
