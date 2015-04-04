#!/usr/bin/env node
'use strict'
var abbrev = require('abbrev')
var minimist = require('minimist')

var argv = minimist(process.argv.slice(2), abbrev('help', 'input', 'output', 'version'))
var pkg = require('../package.json')
var resize = require('../')

function help () {
  console.log([
    pkg.description,
    '',
    'Example',
    '  $ ios-icon-resize -i path/to/icon.png -o path/to/output/'
  ].join('\n'))
}

function cli (argv) {
  if (argv.help) {
    return help()
  }

  if (argv.version) {
    return console.log(pkg.version)
  }

  if (argv.input) {
    return resize(argv.input, argv.output)
  }

  console.error('Please specify an input icon file witht the `-i` option.')
}

cli(argv)
