'use strict';

var vastUtil = require('./vastUtil');

var xml = require('../../../utils/xml');

function TrackingEvent(trackingJTree, duration) {
  if (!(this instanceof TrackingEvent)) {
    return new TrackingEvent(trackingJTree, duration);
  }

  this.name = trackingJTree.attr('event');
  this.uri = xml.keyValue(trackingJTree);

  if('progress' === this.name) {
    this.offset = vastUtil.parseOffset(trackingJTree.attr('offset'), duration);
  }
}

module.exports = TrackingEvent;