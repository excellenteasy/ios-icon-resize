# ios-icon-resize 
[![Build Status](https://travis-ci.com/randytarampi/ios-icon-resize.svg?branch=master)](https://travis-ci.com/randytarampi/ios-icon-resize)
[![Dependency Status](https://david-dm.org/randytarampi/ios-icon-resize.svg)](https://david-dm.org/randytarampi/ios-icon-resize)
[![devDependency Status](https://david-dm.org/randytarampi/ios-icon-resize/dev-status.svg)](https://david-dm.org/randytarampi/ios-icon-resize#info=devDependencies)
[![Semantically Released](https://img.shields.io/badge/versioning-semantically%20released-brightgreen.svg)](https://github.com/boennemann/semantic-release) 

> Create all required icons from one icon. Right size, right file name.

The default icon file names and required sizes for iOS are retrieved from the [ios-icons](http://github.com/randytarampi/ios-icons) module. 

The files created have the default names as you might want to use them, for example, in [`config.xml`](http://docs.phonegap.com/en/3.5.0/config_ref_images.md.html) of a PhoneGap/Cordova project.

[This also exists for android](https://github.com/randytarampi/android-icon-resize).

## Install

```sh
$ npm install --save @randy.tarampi/ios-icon-resize
```


## Usage

```js
var resize = require('@randy.tarampi/ios-icon-resize');

resize('path/to/icon-large.png', 'output/icons/').then(function() {
	// icons have been created
});

```


## CLI

```sh
$ npm install --global @randy.tarampi/ios-icon-resize
```

```sh
$ ios-icon-resize --help
Create all required icons from one icon. Right size, right file name.

Example
  $ ios-icon-resize -i path/to/icon.png -o path/to/output/
	
```


## License
MIT © [David Pfahler](http://excellenteasy.com)
