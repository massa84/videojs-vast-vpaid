'use strict';

var videoJsVAST = require('./plugin/videojs.vast');

var baseVideoJsComponent = videojs.getComponent('Component');

var AdsLabel = require('./plugin/components/ads-label')(baseVideoJsComponent);
var BlackPoster = require('./plugin/components/black-poster')(baseVideoJsComponent);

videojs.registerComponent('AdsLabel', videojs.extend(baseVideoJsComponent, AdsLabel));
videojs.registerComponent('BlackPoster', videojs.extend(baseVideoJsComponent, BlackPoster));

videojs.plugin('vastClient', videoJsVAST);
