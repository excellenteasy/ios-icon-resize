'use strict'

var icons = require('@randy.tarampi/ios-icons')
var lwip = require('@randy.tarampi/lwip')
var Q = require('q')
var path = require('path')
var colors = require('colors')

function openImage (path) {
  var q = Q.defer()
  lwip.open(path, function (err, image) {
    if (err) {
      q.reject(err)
    }
    q.resolve(image)
  })
  return q.promise
}

function clone (image) {
  var q = Q.defer()
  image.clone(function (err, clone) {
    if (err) {
      q.reject(err)
    }
    q.resolve(clone)
  })
  return q.promise
}

function resize (icon, image) {
  var q = Q.defer()
  image.resize(icon.width, function (err, resized) {
    if (err) return q.reject(err)
    q.resolve(resized)
  })
  return q.promise
}

function writeFile (path, image) {
  var q = Q.defer()
  image.writeFile(path, function (err) {
    if (err) return q.reject(err)
    q.resolve(path)
  })
  return q.promise
}

function successMessage (icon, output, path) {
  return console.info(colors.green('OK'), 'Image resized to', icon.width, 'x', icon.width, 'and written to', path)
}

function errorMessage (e) {
  var message = typeof e === 'string' ? e : (e.msg || e.message)
  console.error(colors.red('ERROR.'), message)
}

function transformAll (icons, output, image) {
  return Q.all(icons
    .map(transform.bind(null, image, output))
  )
}

function transform (image, output, icon) {
  var out = output ? path.join(output, icon.name) : false
  return clone(image)
    .then(resize.bind(null, icon))
    .then(writeFile.bind(null, out))
    .then(successMessage.bind(null, icon, output))
    .catch(errorMessage)
}

module.exports = function (input, output) {
  if (!input) {
    errorMessage(new Error('`input` parameter is required.'))
  }
  output = output || process.cwd()
  return openImage(input).then(transformAll.bind(null, icons(), output))
}
