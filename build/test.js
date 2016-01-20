var gulp        = require('gulp');
var Server       = require('karma').Server;
var runSequence = require('run-sequence');

var config       = require('./config');
var BuildTaskDoc = require('./BuildTaskDoc');

/**
 * Run test once and exit
 */

var testTasks = [];
config.versions.forEach(function(version) {
  var testTask = 'test-videojs_' + version;
  var videoJs = config.versionsMap[version] + 'video.js';

  gulp.task(testTask, function (done) {

    var autoWatch = !!config.options['watch'];

    new Server({
      configFile: __dirname + '/../karma.conf.js',
      files: [
        videoJs,
        'test/test-utils.css',
        'test/**/*.spec.js'
      ],
      autoWatch: autoWatch,
      singleRun: !autoWatch,
      // There is an error on karma gulp so we need to wrap done. Please see https://stackoverflow.com/questions/26614738/issue-running-karma-task-from-gulp/26958997#26958997
    }, function (error) {
      done(error);
    }).start();
  });

  testTasks.push(testTask);

});

gulp.task('test', function(done) {

  testTasks.push(function (error) {
      if(error){
        console.log(error.message.red);
      } else{
        console.log('TEST FINISHED SUCCESSFULLY'.green);
      }
      done();
      process.exit();
    });
  runSequence.apply(this,testTasks);

});

module.exports = new BuildTaskDoc('test', "Starts karma on 'autowatch' mode with all the libs, \nsources and tests of the player", 6.1);
