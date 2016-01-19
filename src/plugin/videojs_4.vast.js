'use strict';

var videoJsVAST = require('./videojs.vast');

var baseVideoJsComponent = videojs.Component;

var AdsLabel = require('./components/ads-label')(baseVideoJsComponent);
var BlackPoster = require('./components/black-poster')(baseVideoJsComponent);

videojs.AdsLabel = videojs.Component.extend(AdsLabel);
videojs.BlackPoster = videojs.Component.extend(BlackPoster);

videojs.plugin('vastClient', videoJsVAST);

