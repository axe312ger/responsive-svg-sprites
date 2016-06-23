responsive-svg-sprites
===============

> An example approach to successfully delivery responsive svgs to all browsers - because it was really time to document this.

> Work In Progress - Even this readme :)

## :rocket: ToDo for publication

* [x] add svgo config for proper minification
* [ ] describe single parts and usage
* [ ] describe why symbol and the other polyfill are used
* [x] add custom example file
* [x] add responsive methods to example
* [x] add proper ie polyfill to example
* [x] do cross browsers testing to proof this
* [x] create autopublish to github pages
* [ ] EXTRA: add animations & colorings to the icons
* [ ] EXTRA: postcss (just simply cssnext?) version

## Install

```
$ git clone git@github.com:axe312ger/responsive-svg-sprites.git
```

## Try
```
$ npm run dev
```

## Screenshots

Want a quick proof that it works? Have a closer look to the [cross browser testing screenshots issue](https://github.com/axe312ger/responsive-svg-sprites/issues/1).

[![Overview](https://cloud.githubusercontent.com/assets/1737026/16320332/7b70cec8-3997-11e6-9045-aa669e2f8179.png)](https://github.com/axe312ger/responsive-svg-sprites/issues/1)
## Links

* The responsive approach in this repo is very similar to [this wonderful article of Sara Soueidan](http://tympanus.net/codrops/2014/08/19/making-svgs-responsive-with-css/).
A good read if you want to get a deeper understanding of the techniques used.
* Another amazing writing of Sara is her [blogpost about the svg coordinate system](https://sarasoueidan.com/blog/svg-coordinate-systems/). Learn how viewport, viewBox, and preserveAspectRatio relate to each other.

## Credits

Beautiful example icons by [Oliver Pitsch & Smashing Magazine](https://www.smashingmagazine.com/2016/03/freebie-barista-iconset-50-icons-eps-png-svg/)

**This could not even barely work without the work of the following awesome developers:**

* Kir Belevich & contributors with the svg optimization tool [SVGO](https://github.com/svg/svgo)
* Joschi Kuphal & contributors with the svg sprite generation monster [svg-sprite](Joschi Kuphal)
