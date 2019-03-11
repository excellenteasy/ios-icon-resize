const icons = require('@randy.tarampi/ios-icons')
const { errorMessage, iconsGenerator: generator } = require('@randy.tarampi/generic-icon-splash-generate')

module.exports = (input, output = process.cwd()) => {
  if (!input) {
    errorMessage(new Error('`input` parameter is required.'))
  }
  return generator(icons(), input, output)
}
