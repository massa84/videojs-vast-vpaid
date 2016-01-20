'use strict';

var videoJsVAST = require('./plugin/videojs.vast');

var baseVideoJsComponent = videojs.Component;

var AdsLabel = require('./plugin/components/ads-label')(baseVideoJsComponent);
var BlackPoster = require('./plugin/components/black-poster')(baseVideoJsComponent);

videojs.AdsLabel = videojs.Component.extend(AdsLabel);
videojs.BlackPoster = videojs.Component.extend(BlackPoster);

videojs.plugin('vastClient', videoJsVAST);

