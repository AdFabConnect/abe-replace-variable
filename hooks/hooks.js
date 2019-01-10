'use strict'

var mkdirp = require('mkdirp');
var path = require('path');
var escapeStringRegexp = require('escape-string-regexp');

var hooks = {
	afterExpress: function(app, express, abe) {
		var refFilePath = path.join(abe.config.root, 'reference', 'abe-variable-references.json')
    if(!abe.coreUtils.file.exist(refFilePath)) {
    	mkdirp.sync(path.join(abe.config.root, 'reference'))
    	abe.fse.writeJsonSync(refFilePath, {"$$variableName$$": "replacement"}, { space: 2, encoding: 'utf-8' })
    }
	return app;
	},
	afterPageSaveCompile: function(html, json, abe) {
		var refFilePath = path.join(abe.config.root, 'reference', 'abe-variable-references.json')
    if(abe.coreUtils.file.exist(refFilePath)) {
    	var jsonRef = abe.fse.readJsonSync(refFilePath)
    	Array.prototype.forEach.call(Object.keys(jsonRef), (key) => {
    		var ref = jsonRef[key]
    		var reg = new RegExp(escapeStringRegexp(key), 'gm')
    		html = html.replace(reg, ref)
    	})
    }

    return html
	}
};

exports.default = hooks;
