var gulp        = require( "gulp" );
var supervisor  = require( "gulp-supervisor" );

var BuildTaskDoc = require('./BuildTaskDoc');

gulp.task( "start-dev", ['build-demo', 'dev-server','watch']);

gulp.task( "dev-server", ['build-demo'], function() {
  console.log('STARTING DEVELOPMENT SERVER'.blue);
  supervisor( "demo/server/index.js" );
});

module.exports = new BuildTaskDoc("start-dev", "Starts dev server and watch task.", 1);