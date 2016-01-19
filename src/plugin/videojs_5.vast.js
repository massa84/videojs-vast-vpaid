'use strict';

var videoJsVAST = require('./videojs.vast');

var baseVideoJsComponent = videojs.getComponent('Component');

var AdsLabel = require('./components/ads-label')(baseVideoJsComponent);
var BlackPoster = require('./components/black-poster')(baseVideoJsComponent);

videojs.registerComponent('AdsLabel', videojs.extend(baseVideoJsComponent, AdsLabel));
videojs.registerComponent('BlackPoster', videojs.extend(baseVideoJsComponent, BlackPoster));

videojs.plugin('vastClient', videoJsVAST);
