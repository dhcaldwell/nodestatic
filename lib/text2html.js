/**
* Created with nodestatic.
* User: dhcaldwell
* Date: 2014-06-21
* Time: 02:58 AM
* To change this template use Tools | Templates.
*/
var templateDir = "../views";
var outputDir = "../public";

var ejs = require('ejs');
var fs = require('fs');

function getTemplate(templateName) {
   	var templateSpec = templateDir + '/' + template;
    return templateSpec;
}
module.exports = {
    configure: function(templates, outputs) {
        if (templates) templateDir = templates;
        if (outputs) outputDir = outputs;
    },
    
    getHtml: function(template, values) {
        var spec = getTemplate(template);
        fs.readFile(spec, function(err, done) {
           	if (err) throw err;
			
        });
    	
	}
}