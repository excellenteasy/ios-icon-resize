'use strict';
var icons 	= require('ios-icons');
var lwip  	= require('lwip');
var Q		= require('q');
var path	= require('path');

function openImage(input) {
	var q = Q.defer();
	lwip.open(input, function(err, image) {
		if (err) {
			q.reject(err);
		} else {
			q.resolve(image);
		}
	});
	return q.promise;
}

function getResizeFn(image, output) {
	return function resize(icon) {
		var q = Q.defer();
		image.clone(function(err, clone) {
			clone
			.batch()
			.resize(icon.width)
			.writeFile(path.join(output, icon.name), function(err) {
				if (err ) {
					q.reject(err)
				} else {
					q.resolve(icon, output)
				}
			});
		})
		return q.promise;
	}
}

module.exports = function (input, output) {
	var q = Q.defer()
	output = output || process.cwd();
	var image = openImage(input).then(function(image) {
		Q.all(icons().map(getResizeFn(image, output)))
		.then(q.resolve, q.reject)
	})
	return q.promise
};
