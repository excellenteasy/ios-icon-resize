#!/usr/bin/env node
'use strict'
var argv = require('minimist')(process.argv.slice(2))
var pkg = require('./package.json')
var resize = require('./')
var input = argv.input || argv.i
var output = argv.output || argv.o

function help() {
  console.log([
    pkg.description,
    '',
    'Example',
    '  $ ios-icon-resize -i path/to/icon.png -o path/to/output/'
  ].join('\n'))
}

if (argv.help) {
  help()
  return
}

if (argv.version) {
  console.log(pkg.version)
  return
}

if (input) {
  resize(argv.input || argv.i, {output: output})
  return
} else {
  console.error('Please specify an input icon file witht the `-i` option.')
}
