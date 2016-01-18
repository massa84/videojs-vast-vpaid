var path = require('path');
var pkg = require('../package.json');
var parseArgs = require('minimist');

var knownOptions = {
  string: 'env',
  default: {env: process.env.NODE_ENV || 'development'}
};

var videojs4x = 'bower_components/video-4x.js/dist/video-js/';
var videojs5x = 'bower_components/video-5x.js/dist/video-js/';

var options = parseArgs(process.argv.slice(2), knownOptions);
module.exports = {
  git:{
    remoteUrl: process.env.GH_TOKEN ? "https://"+process.env.GH_TOKEN+"@github.com/MailOnline/videojs-vast-vpaid" : "origin"
  },
  options: options,
  env: options.env,
  //Files needed to build the demo
  demo: {
    pages: [
      'demo/tpls/index.html'
    ],

    styles:  {
      4x: [
        videojs4x + 'video-js.css',
        'demo/styles/*.css'
      ],
      5x: [
        videojs5x + 'video-js.css',
        'demo/styles/*.css'
      ]
    },

    assets: [
      'demo/assets/*'
    ],

    fonts: {
      4x: [
        videojs4x + 'font/*'
      ],
      5x: [
        videojs5x + 'font/*'
      ]
    },

    scripts: {
      4x: [
        videojs4x + 'video.dev.js'
      ],
      5x: [
        videojs5x + 'video.dev.js'
      ]
    }
  },

  //Vendor files
  vendor: {
    scripts: [
      'bower_components/VPAIDFLASHClient/bin/VPAIDFLASHClient.js',
      'bower_components/VPAIDHTML5Client/bin/VPAIDHTML5Client.js'
    ],
    //Whatever we add in here will be added to the build as a required resource
    libraries: [
      'node_modules/es5-shim/es5-shim.js', //Required for the player to work on old browsers
      'lib/ie8fix.js', //Required for make the ad's work in ie8
      'bower_components/swfobject/swfobject/src/swfobject.js'
    ],
    sourcemaps: [
      'bower_components/VPAIDFLASHClient/bin/VPAIDFLASHClient.js.map'
    ],
    styles: [
      //Empty for the moment
    ],
    assets: [
      'bower_components/VPAIDFLASHClient/bin/VPAIDFlash.swf'
    ],
    fonts: [
      //Empty for the moment
    ]
  },

  plugin: {
    scripts: {
      4x: [
        'src/utils/pollyfill.js',
        'src/utils/utilityFunctions.js',
        'src/utils/**/*.js',
        'src/ads/**/*.js',
        'src/plugin/videojs5x.vast.js',
        'src/plugin/components/**/*.js'
      ],
      5x: [
        'src/utils/pollyfill.js',
        'src/utils/utilityFunctions.js',
        'src/utils/**/*.js',
        'src/ads/**/*.js',
        'src/plugin/videojs5x.vast.js',
        'src/plugin/components/**/*.js'
      ]
    },
    styles: [
      'src/**/*.css'
    ],
    tests: {
      unit: [
        'test/test-utils.css',
        'test/test-utils.js',
        'test/**/*.js'
      ]
    }
  },

  //App files for production
  prodfile: {
    scripts: {
      4x: pkg.name + '4x.js',
      5x: pkg.name + '5x.js'
    }
    styles: pkg.name + '.css'
  },

  //Dist folder
  DIST: path.normalize('__dirname/../bin'),
  DEV: path.normalize('__dirname/../dev')

};
