var gulp = require('gulp');
var karma = require('karma').server;
var config = require('./config');
var BuildTaskDoc = require('./BuildTaskDoc');
var TASK_NAME = 'test';

/**
 * Run test once and exit
 *//*
var testTasks = [];
config.versions.forEach(function(version) {
  var testTask = TASK_NAME + '-' + version;
  var buildConfig = config.build(version);

  gulp.task(testTask, function (done) {
    var files = buildConfig.demo.scripts
      .concat(config.vendor.scripts)
      .concat(buildConfig.plugin.scripts)
      .concat(buildConfig.plugin.tests.unit);

    var autoWatch = !!config.options['watch'];

    karma.start({
      configFile: __dirname + '/../karma.conf.js',
      files: files,
      autoWatch: autoWatch,
      singleRun: !autoWatch,
      // There is an error on karma gulp so we need to wrap done. Please see https://stackoverflow.com/questions/26614738/issue-running-karma-task-from-gulp/26958997#26958997
    }, function (error) {
      done(error);
    });
  });

  testTasks.push(testTask);
})

gulp.task(TASK_NAME, testTasks);
*/
module.exports = new BuildTaskDoc(TASK_NAME, "Starts karma on 'autowatch' mode with all the libs, \nsources and tests of the player", 6.1);
