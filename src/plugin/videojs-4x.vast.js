'use strict';

var videoJsVAST = require('./videojs.vast');
var AdsLabel = require('./components/ads-label');
var BlackPoster = require('./components/black-poster');

vjs.AdsLabel = vjs.Component.extend(AdsLabel);
vjs.BlackPoster = vjs.Component.extend(BlackPoster);

vjs.plugin('vastClient', videoJsVAST);
