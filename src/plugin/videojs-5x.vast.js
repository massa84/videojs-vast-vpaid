'use strict';

var videoJsVAST = require('./videojs.vast');
var AdsLabel = require('./components/ads-label');
var BlackPoster = require('./components/black-poster');

videojs.AdsLabel = videojs.Component.extend(AdsLabel);
videojs.BlackPoster = videojs.Component.extend(BlackPoster);

videojs.plugin('vastClient', videoJsVAST);
