var bump  = require('gulp-bump');
var del   = require('del');
var git   = require('gulp-git');
var gulp  = require('gulp');
var gutil = require('gulp-util');
var path  = require('path');

var config = require('./config');

gulp.task('bump', function () {
  var bumpType = config.options.type;

  return gulp.src(['./bower.json', './package.json'])
    .pipe(bump({
    	version: config.options.version
    	}).on('error', gutil.log))
    .pipe(bump({
    	type: bumpType
    	}).on('error', gutil.log))
    .pipe(gulp.dest('./'));
});
