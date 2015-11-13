var fs = require("fs");
var Handlebars = require("handlebars");
var Moment = require('moment');

module.exports = {
	render: render
};

function render(resume) {
	var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var template = fs.readFileSync(__dirname + "/resume.template", "utf-8");
	return Handlebars.compile(template)({
		css: css,
		resume: resume
	});
}

Handlebars.registerHelper("nl2br", function(value) {
	return (value || "").replace(/\n/g, "</p><p>");
});

Handlebars.registerHelper("prettifyDate", function(resumeDate) {
  if (!resumeDate) {
    return 'Present';
  }
  var newDate = Moment(resumeDate).format('MMM YYYY');
  return newDate;
});
