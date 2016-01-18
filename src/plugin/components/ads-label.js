var dom = require('../../utils/dom');

var AdsLabel = {
  /** @constructor */
  init: function init(player, options) {
    vjs.Component.call(this, player, options);

    var that = this;

    // We asynchronously reposition the ads label element
    setTimeout(function () {
      var currentTimeComp = player.controlBar &&( player.controlBar.getChild("timerControls") || player.controlBar.getChild("currentTimeDisplay") );
      if(currentTimeComp) {
        player.controlBar.el().insertBefore(that.el(), currentTimeComp.el());
      }
      dom.removeClass(that.el(), 'vjs-label-hidden');
    }, 0);
  },

  createEl: function createEl() {
    return vjs.Component.prototype.createEl.call(this, 'div', {
      className: 'vjs-ads-label vjs-control vjs-label-hidden',
      innerHTML: 'Advertisement'
    })
  }
};

module.exports = AdsLabel;