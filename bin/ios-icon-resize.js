#!/usr/bin/env node
'use strict'
var abbrev = require('abbrev')
var minimist = require('minimist')
var pkg = require('../package.json')
var resize = require('../')

var opts = {
  alias: abbrev('help', 'input', 'output', 'version')
}

var argv = minimist(process.argv.slice(2), opts)

// minimist will produce an array of values for args with full --options
// smush it down to a single string that resize() can use
if (argv.input.constructor === Array) {
  argv.input = argv.input[0]
}
if (argv.output.constructor === Array) {
  argv.output = argv.output[0]
}

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

  console.error('Please specify an input icon file with the `-i` option.')

}

cli(argv)
