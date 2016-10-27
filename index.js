var yaml = require('js-yaml');
var handlebars = require('handlebars');
var fs = require('fs');

var yamler = function(filePath, safe, context) {
	try {
		var file = fs.readFileSync(filePath, 'utf-8');
		var template = handlebars.compile(file);

		if (context) var finalFile = template(context);
		else var finalFile = template(global);

		if(safe) file = yaml.safeLoad(finalFile);
		else file = yaml.load(finalFile);

		return file;
	} catch (e) {
		throw e;
	}
};

module.exports = yamler;