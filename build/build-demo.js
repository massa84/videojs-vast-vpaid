var gulp = require('gulp');
var runSequence = require('run-sequence');
var path = require('path');
var config = require('./config');
var template = require('gulp-template');
var globUtils = require('./globUtils');
var flatten = require('gulp-flatten');
var BuildTaskDoc = require('./BuildTaskDoc');
var source     = require('vinyl-source-stream');
var browserify = require('browserify');
var rename = require('gulp-rename');
var mergeStream = require('merge-stream');
var sass = require('gulp-sass');

gulp.task('build-demo', function (callback) {
  runSequence(
    'build',
    [
      'build-demo-page',
      'build-demo-scripts',
      'build-demo-styles',
      'build-demo-assets',
      'build-demo-videojs'
    ],
    function (error) {
      if (error) {
        console.log(error.message.red);
      }
      console.log('BUILD DEMO FINISHED SUCCESSFULLY'.green);
      callback();
    });
});

gulp.task('build-demo-styles', function () {
  var stylesPath = path.join(config.DEV, '/styles');

  return gulp.src(config.demo.styles)
    .pipe(gulp.dest(stylesPath));
});



gulp.task('build-demo-page', function () {

  var demoPage = path.join('demo/tpls', 'index.html');
  var buildProcesses = config.versions.map(function(version) {

    return gulp.src(demoPage)
      .pipe(template({
        version: version
      }))
      .pipe(rename('index_'+version+'.html'))
      .pipe(gulp.dest(config.DEV));
  });

  return mergeStream.apply(this, buildProcesses);
});


gulp.task('build-demo-scripts', function () {
  var mainScript = path.join('demo/scripts', 'main.js');
  var scriptsDistPath = path.join(config.DEV, '/demo');

  var bundle_stream = browserify({
      entries: mainScript,
      insertGlobals: true,
      debug : true
    }).bundle()
    .pipe(source('demo_bundle.js'))
    .pipe(gulp.dest(scriptsDistPath));
});

gulp.task('build-demo-styles', function () {
  var mainStyle = path.join('demo/styles', 'demo.scss');
  var styleDistPath = path.join(config.DEV, '/demo');

  gulp.src(mainStyle)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(styleDistPath));

});

gulp.task('build-demo-videojs', function () {
  var assetsDistPath = path.join(config.DEV, '/demo');

  var buildProcesses = config.versions.map(function(version) {
    return gulp.src(config.versionsMap[version] + '**/*')
      .pipe(gulp.dest(path.join(assetsDistPath, '/videojs_' + version + '/')));
  });
  return mergeStream.apply(this, buildProcesses);
});

gulp.task('build-demo-assets', function () {
  var assetsSrcPath = path.join('demo/assets', '/**/*');
  var assetsDistPath = path.join(config.DEV, '/demo/assets');
  return gulp.src(assetsSrcPath)
      .pipe(gulp.dest(assetsDistPath));
});

module.exports = new BuildTaskDoc("build-demo", "Builds the demo", 5);