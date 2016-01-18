var requireDir = require('require-dir');
var asciify = require('asciify');
var gulp = require('gulp');
var async = require('async');
var Table = require('cli-table');
var BuildTaskDoc = require('./build/BuildTaskDoc');
var fs = require('fs');

//Init colors
require('./build/COLORS');

//We retrieve the build-tasks
var buildTasksMap = requireDir('./build');

var browserify = require('browserify');
// Basic usage
gulp.task('browserify', function(done) {
    [
        'videojs-4x.vast.js',
        'videojs-5x.vast.js'
    ].forEach(function (entry, i, entries) {
        // Count remaining bundling operations to track
        // when to call done(). Could alternatively use
        // merge-stream and return its output.
        entries.remaining = entries.remaining || entries.length;

        browserify({
            entries: 'src/plugin/' + entry,
            paths: 'bower_components'
        })
            .bundle()
            .pipe(
                fs.createWriteStream('./tmp/' + entry)
                    .on('finish', function () {
                        if (! --entries.remaining) done();
                    })
            );
        });
});

gulp.task('default', function (finishTask) {
    async.series([
            printWelcomeMessage,
            printBanner,
            printTasksHelpTable
        ],
        finishTask
    );

    /*** Local functions ***/

    function printWelcomeMessage(done) {
        console.log("Welcome to MailOnline's new".info);
        done(null);
    }

    function printBanner(done) {
        asciify('Videojs Vast Vpaid', function (err, res) {
            console.log(res.help);
            done(null);
        });
    }

    function printTasksHelpTable(done) {
        var table = new Table({
            head: ['Name', 'Description'],
            colWidths: [25, 80],
            chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
                , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
                , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
                , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
        });

        var buildTasks = getBuildTasks(buildTasksMap);

        buildTasks.forEach(function (task) {
            table.push([task.name, task.description]);
        });

        console.log('###### Below, you have the list of all the available build tasks ########');
        console.log(table.toString());
        //console.log('   ');
        //console.log("NOTE: if a task is run with '--env production' it will execute the build task for production. Minifying scritps and so on".blue);
        console.log('   ');
        done(null);
    }

    function getBuildTasks(tasksDir) {
        var tasks = [];
        Object.keys(tasksDir).forEach(function (taskName) {
            var task = tasksDir[taskName];
            if(task instanceof BuildTaskDoc){
                tasks.push(task);
            }
        });


        return tasks.sort(function compare(a, b) {
            if (a.order < b.order) {
                return -1;
            }
            if (a.order > b.order) {
                return 1;
            }
            // a must be equal to b
            return 0;
        });
    }

});