var path = require('path');
var parseArgs = require('minimist');

var knownOptions = {
  string: 'env',
  default: {env: process.env.NODE_ENV || 'development'}
};
var options = parseArgs(process.argv.slice(2), knownOptions);

var videoJsVersionsMap = {
  '4': 'bower_components/videojs_4/dist/video-js/',
  '5': 'bower_components/videojs_5/dist/'
};

module.exports = {
  versions: Object.keys(videoJsVersionsMap),
  versionsMap: videoJsVersionsMap,
  options: options,
  env: options.env,
  //Dist folder
  DIST: path.normalize('__dirname/../bin'),
  DEV: path.normalize('__dirname/../dev'),

  vendor: [
    'node_modules/es5-shim/es5-shim.js', //Required for the player to work on old browsers
    'lib/ie8fix.js', //Required for make the ad's work in ie8
    'bower_components/swfobject/swfobject/src/swfobject.js',
    'bower_components/VPAIDFLASHClient/bin/VPAIDFlash.swf'
  ]
};
