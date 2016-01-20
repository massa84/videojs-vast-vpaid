'use strict';

require('./plugin/components/ads-label_4');
require('./plugin/components/black-poster_4');

var videoJsVAST = require('./plugin/videojs.vast');

videojs.plugin('vastClient', videoJsVAST);

