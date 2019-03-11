'use strict'

var icons = require('@randy.tarampi/ios-icons')
var lwip = require('@randy.tarampi/lwip')
var path = require('path')
var colors = require('colors')

function openImage (path) {
  return new Promise(function (resolve, reject) {
    lwip.open(path, function (err, image) {
      if (err) {
        reject(err)
      }
      resolve(image)
    })
  })
}

function clone (image) {
  return new Promise(function (resolve, reject) {
    image.clone(function (err, clone) {
      if (err) {
        reject(err)
      }
      resolve(clone)
    })
  })
}

function resize (icon, image) {
  return new Promise(function (resolve, reject) {
    image.resize(icon.width, function (err, resized) {
      if (err) return reject(err)
      resolve(resized)
    })
  })
}

function writeFile (path, image) {
  return new Promise(function (resolve, reject) {
    image.writeFile(path, function (err) {
      if (err) return reject(err)
      resolve(path)
    })
  })
}

function successMessage (icon, output, path) {
  return console.info(colors.green('OK'), 'Image resized to', icon.width, 'x', icon.width, 'and written to', path)
}

function errorMessage (e) {
  var message = typeof e === 'string' ? e : (e.msg || e.message)
  console.error(colors.red('ERROR.'), message)
}

function transformAll (icons, output, image) {
  return Promise.all(icons
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
