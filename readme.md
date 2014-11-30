# ios-icon-resize 
[![Build Status](https://travis-ci.org/excellenteasy/ios-icon-resize.svg?branch=master)](https://travis-ci.org/excellenteasy/ios-icon-resize)
[![Dependency Status](https://david-dm.org/excellenteasy/ios-icon-resize.svg)](https://david-dm.org/excellenteasy/ios-icon-resize)
[![devDependency Status](https://david-dm.org/excellenteasy/ios-icon-resize/dev-status.svg)](https://david-dm.org/excellenteasy/ios-icon-resize#info=devDependencies)

> Create all required icons from one icon. Right size, right file name.

The default icon file names and required sizes for iOS are retrieved from the [ios-icons](http://github.com/excellenteasy/ios-icons) module. 

The files created have the default names as you might want to use them, for example, in [`config.xml`](http://docs.phonegap.com/en/3.5.0/config_ref_images.md.html) of a PhoneGap/Cordova project.


## Install

```sh
$ npm install --save ios-icon-resize
```


## Usage

```js
var resize = require('ios-icon-resize');

resize('path/to/icon-large.png', 'output/icons/').then(function() {
	// icons have been created
});

```


## CLI

```sh
$ npm install --global ios-icon-resize
```

```sh
$ ios-icon-resize --help
Create all required icons from one icon. Right size, right file name.

Example
  $ ios-icon-resize -i path/to/icon.png -o path/to/output/
	
```


## License
MIT © [David Pfahler](http://excellenteasy.com)
