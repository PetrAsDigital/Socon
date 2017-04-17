var env = 'local';
var settings = require("./config/" +  env + '/' + "settings");

console.log("using settings from " + env + "... service name = " + settings.service.name);

var exports = module.exports = {};
exports.env = env;
exports.settings = settings;
