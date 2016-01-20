var babelify    = require('babelify');
var browserify  = require('browserify');
var del         = require('del');
var gulp        = require('gulp');
var gulpif      = require('gulp-if');
var jshint      = require('gulp-jshint');
var mergeStream = require('merge-stream');
var minifyCSS   = require('gulp-minify-css');
var path        = require('path');
var rename      = require('gulp-rename');
var runSequence = require('run-sequence');
var sass        = require('gulp-sass');
var source      = require('vinyl-source-stream');
var sourcemaps  = require('gulp-sourcemaps');
var uglify      = require("gulp-uglify");

var BuildTaskDoc = require('./BuildTaskDoc');
var config       = require('./config');

var assetsDevPath  = path.join(config.DEV, '/');
var assetsDistPath = path.join(config.DIST, '/');

gulp.task('build', function (callback) {
  runSequence(
    'clean',
    [
      'build-scripts',
      'build-styles',
      'build-assets'
    ],
    function (error) {
      if (error) {
        console.log(error.message.red);
      }
      console.log('BUILD FINISHED SUCCESSFULLY'.green);
      callback();
    });
});


gulp.task('clean', function (cb) {
  var cleanDirs = [config.DEV];
  if(config.env === 'production'){
    cleanDirs.push(config.DIST);
  }
  del(cleanDirs, {force: true}, cb);
});



gulp.task('build-scripts', function(done) {
  var buildProcesses = config.versions.map(function(version) {
    var entryFile = 'videojs_' + version + '.vast.js';
    var entryPath = 'src/js/' + entryFile;
    return browserify({
        entries: entryPath,
        debug: true,
        global: true,
        paths: 'bower_components'
      })
      .transform(babelify, {presets: ["es2015"]})
      .bundle()
      .pipe(source(entryFile))
      .pipe(gulp.dest(assetsDevPath))
  });
  return mergeStream.apply(this, buildProcesses);
});

gulp.task('build-styles', function () {

  return gulp.src('src/styles/videojs.vast.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(assetsDevPath));
});

gulp.task('build-assets', function () {

  return gulp.src(config.vendor)
    .pipe(gulp.dest(assetsDevPath))
    .pipe(gulpif(config.env === 'production', gulp.dest(assetsDistPath)));
});


/*
gulp.task('build-styles', function () {
  var cssDevPath = path.join(config.DEV, 'styles');
  var cssDistPath = path.join(config.DIST, '/');
  var buildProcesses = config.versions.map(function(version) {
    var buildConfig = config.build(version);
    return gulp.src(buildConfig.plugin.styles)
      .pipe(flatten())
      .pipe(gulpif(config.env === 'production', concat(buildConfig.prodfile.styles, {newLine: '\n\n'})))
      .pipe(gulpif(config.env === 'production', gulp.dest(cssDevPath)))
      .pipe(gulpif(config.env === 'production', gulp.dest(cssDistPath)))
      .pipe(gulpif(config.env === 'production', minifyCSS({keepBreaks: false})))
      .pipe(gulpif(config.env === 'production', rename({suffix: ".min"})))
      .pipe(gulp.dest(cssDevPath))
      .pipe(gulpif(config.env === 'production', gulp.dest(cssDistPath)));
  });

  return mergeStream.apply(buildProcesses);
});
*/
module.exports = new BuildTaskDoc("build", "This task builds the plugin", 4);