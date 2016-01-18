/**
 * The component that shows a black screen until the ads plugin has decided if it can or it can not play the ad.
 *
 * Note: In case you wonder why instead of this black poster we don't just show the spinner loader.
 *       IOS devices do not work well with animations and the browser chrashes from time to time That is why we chose to
 *       have a secondary black poster.
 *
 *       It also makes it much more easier for the users of the plugin since it does not change the default behaviour of the
 *       spinner and the player works the same way with and without the plugin.
 *
 * @param {vjs.Player|Object} player
 * @param {Object=} options
 * @constructor
 */
var BlackPoster = {
  /** @constructor */
  init: function init(player, options) {
    vjs.Component.call(this, player, options);

    var posterImg = player.getChild('posterImage');

    //We need to do it asynchronously to be sure that the black poster el is on the dom.
    setTimeout(function() {
      if(posterImg) {
        player.el().insertBefore(this.el(), posterImg.el());
      }
    }.bind(this), 0);
  },
  createEl: function createEl(){
    return vjs.createEl('div', {
      className: 'vjs-black-poster'
    });
  }
};

module.exports = BlackPoster;