(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//simple representation of the API

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IVPAIDAdUnit = exports.IVPAIDAdUnit = function () {
    function IVPAIDAdUnit() {
        _classCallCheck(this, IVPAIDAdUnit);
    }

    _createClass(IVPAIDAdUnit, [{
        key: 'handshakeVersion',

        //all methods below
        //are async methods
        value: function handshakeVersion() {
            var playerVPAIDVersion = arguments.length <= 0 || arguments[0] === undefined ? '2.0' : arguments[0];
            var callback = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];
        }

        //creativeData is an object to be consistent with VPAIDHTML

    }, {
        key: 'initAd',
        value: function initAd(width, height, viewMode, desiredBitrate) {
            var creativeData = arguments.length <= 4 || arguments[4] === undefined ? { AdParameters: '' } : arguments[4];
            var environmentVars = arguments.length <= 5 || arguments[5] === undefined ? { flashVars: '' } : arguments[5];
            var callback = arguments.length <= 6 || arguments[6] === undefined ? undefined : arguments[6];
        }
    }, {
        key: 'resizeAd',
        value: function resizeAd(width, height, viewMode) {
            var callback = arguments.length <= 3 || arguments[3] === undefined ? undefined : arguments[3];
        }
    }, {
        key: 'startAd',
        value: function startAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
        }
    }, {
        key: 'stopAd',
        value: function stopAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
        }
    }, {
        key: 'pauseAd',
        value: function pauseAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
        }
    }, {
        key: 'resumeAd',
        value: function resumeAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
        }
    }, {
        key: 'expandAd',
        value: function expandAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
        }
    }, {
        key: 'collapseAd',
        value: function collapseAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
        }
    }, {
        key: 'skipAd',
        value: function skipAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];
        }

        //properties that will be treat as async methods

    }, {
        key: 'getAdLinear',
        value: function getAdLinear(callback) {}
    }, {
        key: 'getAdWidth',
        value: function getAdWidth(callback) {}
    }, {
        key: 'getAdHeight',
        value: function getAdHeight(callback) {}
    }, {
        key: 'getAdExpanded',
        value: function getAdExpanded(callback) {}
    }, {
        key: 'getAdSkippableState',
        value: function getAdSkippableState(callback) {}
    }, {
        key: 'getAdRemainingTime',
        value: function getAdRemainingTime(callback) {}
    }, {
        key: 'getAdDuration',
        value: function getAdDuration(callback) {}
    }, {
        key: 'setAdVolume',
        value: function setAdVolume(soundVolume) {
            var callback = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];
        }
    }, {
        key: 'getAdVolume',
        value: function getAdVolume(callback) {}
    }, {
        key: 'getAdCompanions',
        value: function getAdCompanions(callback) {}
    }, {
        key: 'getAdIcons',
        value: function getAdIcons(callback) {}
    }]);

    return IVPAIDAdUnit;
}();

Object.defineProperty(IVPAIDAdUnit, 'EVENTS', {
    writable: false,
    configurable: false,
    value: ['AdLoaded', 'AdStarted', 'AdStopped', 'AdSkipped', 'AdSkippableStateChange', // VPAID 2.0 new event
    'AdSizeChange', // VPAID 2.0 new event
    'AdLinearChange', 'AdDurationChange', // VPAID 2.0 new event
    'AdExpandedChange', 'AdRemainingTimeChange', // [Deprecated in 2.0] but will be still fired for backwards compatibility
    'AdVolumeChange', 'AdImpression', 'AdVideoStart', 'AdVideoFirstQuartile', 'AdVideoMidpoint', 'AdVideoThirdQuartile', 'AdVideoComplete', 'AdClickThru', 'AdInteraction', // VPAID 2.0 new event
    'AdUserAcceptInvitation', 'AdUserMinimize', 'AdUserClose', 'AdPaused', 'AdPlaying', 'AdLog', 'AdError']
});

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IVPAIDAdUnit = require('./IVPAIDAdUnit').IVPAIDAdUnit;
var ALL_VPAID_METHODS = Object.getOwnPropertyNames(IVPAIDAdUnit.prototype).filter(function (property) {
    return ['constructor'].indexOf(property) === -1;
});

var VPAIDAdUnit = exports.VPAIDAdUnit = function (_IVPAIDAdUnit) {
    _inherits(VPAIDAdUnit, _IVPAIDAdUnit);

    function VPAIDAdUnit(flash) {
        _classCallCheck(this, VPAIDAdUnit);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VPAIDAdUnit).call(this));

        _this._destroyed = false;
        _this._flash = flash;
        return _this;
    }

    _createClass(VPAIDAdUnit, [{
        key: '_destroy',
        value: function _destroy() {
            var _this2 = this;

            this._destroyed = true;
            ALL_VPAID_METHODS.forEach(function (methodName) {
                _this2._flash.removeCallbackByMethodName(methodName);
            });
            IVPAIDAdUnit.EVENTS.forEach(function (event) {
                _this2._flash.offEvent(event);
            });

            this._flash = null;
        }
    }, {
        key: 'isDestroyed',
        value: function isDestroyed() {
            return this._destroyed;
        }
    }, {
        key: 'on',
        value: function on(eventName, callback) {
            this._flash.on(eventName, callback);
        }
    }, {
        key: 'off',
        value: function off(eventName, callback) {
            this._flash.off(eventName, callback);
        }

        //VPAID interface

    }, {
        key: 'handshakeVersion',
        value: function handshakeVersion() {
            var playerVPAIDVersion = arguments.length <= 0 || arguments[0] === undefined ? '2.0' : arguments[0];
            var callback = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];

            this._flash.callFlashMethod('handshakeVersion', [playerVPAIDVersion], callback);
        }
    }, {
        key: 'initAd',
        value: function initAd(width, height, viewMode, desiredBitrate) {
            var creativeData = arguments.length <= 4 || arguments[4] === undefined ? { AdParameters: '' } : arguments[4];
            var environmentVars = arguments.length <= 5 || arguments[5] === undefined ? { flashVars: '' } : arguments[5];
            var callback = arguments.length <= 6 || arguments[6] === undefined ? undefined : arguments[6];

            //resize element that has the flash object
            this._flash.setSize(width, height);
            creativeData = creativeData || { AdParameters: '' };
            environmentVars = environmentVars || { flashVars: '' };

            this._flash.callFlashMethod('initAd', [this._flash.getWidth(), this._flash.getHeight(), viewMode, desiredBitrate, creativeData.AdParameters || '', environmentVars.flashVars || ''], callback);
        }
    }, {
        key: 'resizeAd',
        value: function resizeAd(width, height, viewMode) {
            var callback = arguments.length <= 3 || arguments[3] === undefined ? undefined : arguments[3];

            //resize element that has the flash object
            this._flash.setSize(width, height);

            //resize ad inside the flash
            this._flash.callFlashMethod('resizeAd', [this._flash.getWidth(), this._flash.getHeight(), viewMode], callback);
        }
    }, {
        key: 'startAd',
        value: function startAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            this._flash.callFlashMethod('startAd', [], callback);
        }
    }, {
        key: 'stopAd',
        value: function stopAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            this._flash.callFlashMethod('stopAd', [], callback);
        }
    }, {
        key: 'pauseAd',
        value: function pauseAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            this._flash.callFlashMethod('pauseAd', [], callback);
        }
    }, {
        key: 'resumeAd',
        value: function resumeAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            this._flash.callFlashMethod('resumeAd', [], callback);
        }
    }, {
        key: 'expandAd',
        value: function expandAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            this._flash.callFlashMethod('expandAd', [], callback);
        }
    }, {
        key: 'collapseAd',
        value: function collapseAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            this._flash.callFlashMethod('collapseAd', [], callback);
        }
    }, {
        key: 'skipAd',
        value: function skipAd() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            this._flash.callFlashMethod('skipAd', [], callback);
        }

        //properties that will be treat as async methods

    }, {
        key: 'getAdLinear',
        value: function getAdLinear(callback) {
            this._flash.callFlashMethod('getAdLinear', [], callback);
        }
    }, {
        key: 'getAdWidth',
        value: function getAdWidth(callback) {
            this._flash.callFlashMethod('getAdWidth', [], callback);
        }
    }, {
        key: 'getAdHeight',
        value: function getAdHeight(callback) {
            this._flash.callFlashMethod('getAdHeight', [], callback);
        }
    }, {
        key: 'getAdExpanded',
        value: function getAdExpanded(callback) {
            this._flash.callFlashMethod('getAdExpanded', [], callback);
        }
    }, {
        key: 'getAdSkippableState',
        value: function getAdSkippableState(callback) {
            this._flash.callFlashMethod('getAdSkippableState', [], callback);
        }
    }, {
        key: 'getAdRemainingTime',
        value: function getAdRemainingTime(callback) {
            this._flash.callFlashMethod('getAdRemainingTime', [], callback);
        }
    }, {
        key: 'getAdDuration',
        value: function getAdDuration(callback) {
            this._flash.callFlashMethod('getAdDuration', [], callback);
        }
    }, {
        key: 'setAdVolume',
        value: function setAdVolume(volume) {
            var callback = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];

            this._flash.callFlashMethod('setAdVolume', [volume], callback);
        }
    }, {
        key: 'getAdVolume',
        value: function getAdVolume(callback) {
            this._flash.callFlashMethod('getAdVolume', [], callback);
        }
    }, {
        key: 'getAdCompanions',
        value: function getAdCompanions(callback) {
            this._flash.callFlashMethod('getAdCompanions', [], callback);
        }
    }, {
        key: 'getAdIcons',
        value: function getAdIcons(callback) {
            this._flash.callFlashMethod('getAdIcons', [], callback);
        }
    }]);

    return VPAIDAdUnit;
}(IVPAIDAdUnit);

},{"./IVPAIDAdUnit":1}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var JSFlashBridge = require('./jsFlashBridge').JSFlashBridge;
var VPAIDAdUnit = require('./VPAIDAdUnit').VPAIDAdUnit;

var noop = require('./utils').noop;
var callbackTimeout = require('./utils').callbackTimeout;
var isPositiveInt = require('./utils').isPositiveInt;
var createElementWithID = require('./utils').createElementWithID;
var uniqueVPAID = require('./utils').unique('vpaid');

var ERROR = 'error';
var FLASH_VERSION = '10.1.0';

var VPAIDFLASHClient = function () {
    function VPAIDFLASHClient(vpaidParentEl, callback) {
        var swfConfig = arguments.length <= 2 || arguments[2] === undefined ? { data: 'VPAIDFlash.swf', width: 800, height: 400 } : arguments[2];

        var _this = this;

        var params = arguments.length <= 3 || arguments[3] === undefined ? { wmode: 'transparent', salign: 'tl', align: 'left', allowScriptAccess: 'always', scale: 'noScale', allowFullScreen: 'true', quality: 'high' } : arguments[3];
        var vpaidOptions = arguments.length <= 4 || arguments[4] === undefined ? { debug: false, timeout: 10000 } : arguments[4];

        _classCallCheck(this, VPAIDFLASHClient);

        if (!VPAIDFLASHClient.hasExternalDependencies()) {
            return onError('no swfobject in global scope. check: https://github.com/swfobject/swfobject or https://code.google.com/p/swfobject/');
        }

        this._vpaidParentEl = vpaidParentEl;
        this._flashID = uniqueVPAID();
        this._destroyed = false;
        callback = callback || noop;

        swfConfig.width = isPositiveInt(swfConfig.width, 800);
        swfConfig.height = isPositiveInt(swfConfig.height, 400);

        createElementWithID(vpaidParentEl, this._flashID);

        params.movie = swfConfig.data;
        params.FlashVars = 'flashid=' + this._flashID + '&handler=' + JSFlashBridge.VPAID_FLASH_HANDLER + '&debug=' + vpaidOptions.debug + '&salign=' + params.salign;

        if (!VPAIDFLASHClient.isSupported()) {
            return onError('user don\'t support flash or doesn\'t have the minimum required version of flash ' + FLASH_VERSION);
        }

        this.el = swfobject.createSWF(swfConfig, params, this._flashID);

        if (!this.el) {
            return onError('swfobject failed to create object in element');
        }

        var handler = callbackTimeout(vpaidOptions.timeout, function (err, data) {
            $loadPendedAdUnit.call(_this);
            callback(err, data);
        }, function () {
            callback('vpaid flash load timeout ' + vpaidOptions.timeout);
        });

        this._flash = new JSFlashBridge(this.el, swfConfig.data, this._flashID, swfConfig.width, swfConfig.height, handler);

        function onError(error) {
            setTimeout(function () {
                callback(new Error(error));
            }, 0);
            return this;
        }
    }

    _createClass(VPAIDFLASHClient, [{
        key: 'destroy',
        value: function destroy() {
            this._destroyAdUnit();

            if (this._flash) {
                this._flash.destroy();
                this._flash = null;
            }
            this.el = null;
            this._destroyed = true;
        }
    }, {
        key: 'isDestroyed',
        value: function isDestroyed() {
            return this._destroyed;
        }
    }, {
        key: '_destroyAdUnit',
        value: function _destroyAdUnit() {
            delete this._loadLater;

            if (this._adUnitLoad) {
                this._adUnitLoad = null;
                this._flash.removeCallback(this._adUnitLoad);
            }

            if (this._adUnit) {
                this._adUnit._destroy();
                this._adUnit = null;
            }
        }
    }, {
        key: 'loadAdUnit',
        value: function loadAdUnit(adURL, callback) {
            var _this2 = this;

            $throwIfDestroyed.call(this);

            if (this._adUnit) {
                this._destroyAdUnit();
            }

            if (this._flash.isReady()) {
                this._adUnitLoad = function (err, message) {
                    if (!err) {
                        _this2._adUnit = new VPAIDAdUnit(_this2._flash);
                    }
                    _this2._adUnitLoad = null;
                    callback(err, _this2._adUnit);
                };

                this._flash.callFlashMethod('loadAdUnit', [adURL], this._adUnitLoad);
            } else {
                this._loadLater = { url: adURL, callback: callback };
            }
        }
    }, {
        key: 'unloadAdUnit',
        value: function unloadAdUnit() {
            var callback = arguments.length <= 0 || arguments[0] === undefined ? undefined : arguments[0];

            $throwIfDestroyed.call(this);

            this._destroyAdUnit();
            this._flash.callFlashMethod('unloadAdUnit', [], callback);
        }
    }, {
        key: 'getFlashID',
        value: function getFlashID() {
            $throwIfDestroyed.call(this);
            return this._flash.getFlashID();
        }
    }, {
        key: 'getFlashURL',
        value: function getFlashURL() {
            $throwIfDestroyed.call(this);
            return this._flash.getFlashURL();
        }
    }]);

    return VPAIDFLASHClient;
}();

setStaticProperty('isSupported', function () {
    return VPAIDFLASHClient.hasExternalDependencies() && swfobject.hasFlashPlayerVersion(FLASH_VERSION);
});

setStaticProperty('hasExternalDependencies', function () {
    return !!window.swfobject;
});

function $throwIfDestroyed() {
    if (this._destroyed) {
        throw new error('VPAIDFlashToJS is destroyed!');
    }
}

function $loadPendedAdUnit() {
    if (this._loadLater) {
        this.loadAdUnit(this._loadLater.url, this._loadLater.callback);
        delete this._loadLater;
    }
}

function setStaticProperty(propertyName, value) {
    Object.defineProperty(VPAIDFLASHClient, propertyName, {
        writable: false,
        configurable: false,
        value: value
    });
}

window.VPAIDFLASHClient = VPAIDFLASHClient;
module.exports = VPAIDFLASHClient;

},{"./VPAIDAdUnit":2,"./jsFlashBridge":4,"./utils":7}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var unique = require('./utils').unique;
var isPositiveInt = require('./utils').isPositiveInt;
var stringEndsWith = require('./utils').stringEndsWith;
var SingleValueRegistry = require('./registry').SingleValueRegistry;
var MultipleValuesRegistry = require('./registry').MultipleValuesRegistry;
var registry = require('./jsFlashBridgeRegistry');
var VPAID_FLASH_HANDLER = 'vpaid_video_flash_handler';
var ERROR = 'AdError';

var JSFlashBridge = exports.JSFlashBridge = function () {
    function JSFlashBridge(el, flashURL, flashID, width, height, loadHandShake) {
        _classCallCheck(this, JSFlashBridge);

        this._el = el;
        this._flashID = flashID;
        this._flashURL = flashURL;
        this._width = width;
        this._height = height;
        this._handlers = new MultipleValuesRegistry();
        this._callbacks = new SingleValueRegistry();
        this._uniqueMethodIdentifier = unique(this._flashID);
        this._ready = false;
        this._handShakeHandler = loadHandShake;

        registry.addInstance(this._flashID, this);
    }

    _createClass(JSFlashBridge, [{
        key: 'on',
        value: function on(eventName, callback) {
            this._handlers.add(eventName, callback);
        }
    }, {
        key: 'off',
        value: function off(eventName, callback) {
            return this._handlers.remove(eventName, callback);
        }
    }, {
        key: 'offEvent',
        value: function offEvent(eventName) {
            return this._handlers.removeByKey(eventName);
        }
    }, {
        key: 'offAll',
        value: function offAll() {
            return this._handlers.removeAll();
        }
    }, {
        key: 'callFlashMethod',
        value: function callFlashMethod(methodName) {
            var args = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
            var callback = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];

            var callbackID = '';
            // if no callback, some methods the return is void so they don't need callback
            if (callback) {
                callbackID = this._uniqueMethodIdentifier() + '_' + methodName;
                this._callbacks.add(callbackID, callback);
            }

            try {
                //methods are created by ExternalInterface.addCallback in as3 code, if for some reason it failed
                //this code will throw an error
                this._el[methodName]([callbackID].concat(args));
            } catch (e) {
                if (callback) {
                    $asyncCallback.call(this, callbackID, e);
                } else {

                    //if there isn't any callback to return error use error event handler
                    this._trigger(ERROR, e);
                }
            }
        }
    }, {
        key: 'removeCallback',
        value: function removeCallback(callback) {
            return this._callbacks.removeByValue(callback);
        }
    }, {
        key: 'removeCallbackByMethodName',
        value: function removeCallbackByMethodName(suffix) {
            var _this = this;

            this._callbacks.filterKeys(function (key) {
                return stringEndsWith(key, suffix);
            }).forEach(function (key) {
                _this._callbacks.remove(key);
            });
        }
    }, {
        key: 'removeAllCallbacks',
        value: function removeAllCallbacks() {
            return this._callbacks.removeAll();
        }
    }, {
        key: '_trigger',
        value: function _trigger(eventName, event) {
            var _this2 = this;

            this._handlers.get(eventName).forEach(function (callback) {
                //clickThru has to be sync, if not will be block by the popupblocker
                if (eventName === 'AdClickThru') {
                    callback(event);
                } else {
                    setTimeout(function () {
                        if (_this2._handlers.get(eventName).length > 0) {
                            callback(event);
                        }
                    }, 0);
                }
            });
        }
    }, {
        key: '_callCallback',
        value: function _callCallback(methodName, callbackID, err, result) {

            var callback = this._callbacks.get(callbackID);

            //not all methods callback's are mandatory
            //but if there exist an error, fire the error event
            if (!callback) {
                if (err && callbackID === '') {
                    this.trigger(ERROR, err);
                }
                return;
            }

            $asyncCallback.call(this, callbackID, err, result);
        }
    }, {
        key: '_handShake',
        value: function _handShake(err, data) {
            this._ready = true;
            if (this._handShakeHandler) {
                this._handShakeHandler(err, data);
                delete this._handShakeHandler;
            }
        }

        //methods like properties specific to this implementation of VPAID

    }, {
        key: 'getSize',
        value: function getSize() {
            return { width: this._width, height: this._height };
        }
    }, {
        key: 'setSize',
        value: function setSize(newWidth, newHeight) {
            this._width = isPositiveInt(newWidth, this._width);
            this._height = isPositiveInt(newHeight, this._height);
            this._el.setAttribute('width', this._width);
            this._el.setAttribute('height', this._height);
        }
    }, {
        key: 'getWidth',
        value: function getWidth() {
            return this._width;
        }
    }, {
        key: 'setWidth',
        value: function setWidth(newWidth) {
            this.setSize(newWidth, this._height);
        }
    }, {
        key: 'getHeight',
        value: function getHeight() {
            return this._height;
        }
    }, {
        key: 'setHeight',
        value: function setHeight(newHeight) {
            this.setSize(this._width, newHeight);
        }
    }, {
        key: 'getFlashID',
        value: function getFlashID() {
            return this._flashID;
        }
    }, {
        key: 'getFlashURL',
        value: function getFlashURL() {
            return this._flashURL;
        }
    }, {
        key: 'isReady',
        value: function isReady() {
            return this._ready;
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.offAll();
            this.removeAllCallbacks();
            registry.removeInstanceByID(this._flashID);
            if (this._el.parentElement) {
                this._el.parentElement.removeChild(this._el);
            }
        }
    }]);

    return JSFlashBridge;
}();

function $asyncCallback(callbackID, err, result) {
    var _this3 = this;

    setTimeout(function () {
        var callback = _this3._callbacks.get(callbackID);
        if (callback) {
            _this3._callbacks.remove(callbackID);
            callback(err, result);
        }
    }, 0);
}

Object.defineProperty(JSFlashBridge, 'VPAID_FLASH_HANDLER', {
    writable: false,
    configurable: false,
    value: VPAID_FLASH_HANDLER
});

/**
 * External interface handler
 *
 * @param {string} flashID identifier of the flash who call this
 * @param {string} typeID what type of message is, can be 'event' or 'callback'
 * @param {string} typeName if the typeID is a event the typeName will be the eventName, if is a callback the typeID is the methodName that is related this callback
 * @param {string} callbackID only applies when the typeID is 'callback', identifier of the callback to call
 * @param {object} error error object
 * @param {object} data
 */
window[VPAID_FLASH_HANDLER] = function (flashID, typeID, typeName, callbackID, error, data) {
    var instance = registry.getInstanceByID(flashID);
    if (!instance) return;
    if (typeName === 'handShake') {
        instance._handShake(error, data);
    } else {
        if (typeID !== 'event') {
            instance._callCallback(typeName, callbackID, error, data);
        } else {
            instance._trigger(typeName, data);
        }
    }
};

},{"./jsFlashBridgeRegistry":5,"./registry":6,"./utils":7}],5:[function(require,module,exports){
'use strict';

var SingleValueRegistry = require('./registry').SingleValueRegistry;
var instances = new SingleValueRegistry();

var JSFlashBridgeRegistry = {};
Object.defineProperty(JSFlashBridgeRegistry, 'addInstance', {
    writable: false,
    configurable: false,
    value: function value(id, instance) {
        instances.add(id, instance);
    }
});

Object.defineProperty(JSFlashBridgeRegistry, 'getInstanceByID', {
    writable: false,
    configurable: false,
    value: function value(id) {
        return instances.get(id);
    }
});

Object.defineProperty(JSFlashBridgeRegistry, 'removeInstanceByID', {
    writable: false,
    configurable: false,
    value: function value(id) {
        return instances.remove(id);
    }
});

module.exports = JSFlashBridgeRegistry;

},{"./registry":6}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MultipleValuesRegistry = exports.MultipleValuesRegistry = function () {
    function MultipleValuesRegistry() {
        _classCallCheck(this, MultipleValuesRegistry);

        this._registries = {};
    }

    _createClass(MultipleValuesRegistry, [{
        key: 'add',
        value: function add(id, value) {
            if (!this._registries[id]) {
                this._registries[id] = [];
            }
            if (this._registries[id].indexOf(value) === -1) {
                this._registries[id].push(value);
            }
        }
    }, {
        key: 'get',
        value: function get(id) {
            return this._registries[id] || [];
        }
    }, {
        key: 'filterKeys',
        value: function filterKeys(handler) {
            return Object.keys(this._registries).filter(handler);
        }
    }, {
        key: 'findByValue',
        value: function findByValue(value) {
            var _this = this;

            var keys = Object.keys(this._registries).filter(function (key) {
                return _this._registries[key].indexOf(value) !== -1;
            });

            return keys;
        }
    }, {
        key: 'remove',
        value: function remove(key, value) {
            if (!this._registries[key]) {
                return;
            }

            var index = this._registries[key].indexOf(value);

            if (index < 0) {
                return;
            }
            return this._registries[key].splice(index, 1);
        }
    }, {
        key: 'removeByKey',
        value: function removeByKey(id) {
            var old = this._registries[id];
            delete this._registries[id];
            return old;
        }
    }, {
        key: 'removeByValue',
        value: function removeByValue(value) {
            var _this2 = this;

            var keys = this.findByValue(value);
            return keys.map(function (key) {
                return _this2.remove(key, value);
            });
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            var old = this._registries;
            this._registries = {};
            return old;
        }
    }, {
        key: 'size',
        value: function size() {
            return Object.keys(this._registries).length;
        }
    }]);

    return MultipleValuesRegistry;
}();

var SingleValueRegistry = exports.SingleValueRegistry = function () {
    function SingleValueRegistry() {
        _classCallCheck(this, SingleValueRegistry);

        this._registries = {};
    }

    _createClass(SingleValueRegistry, [{
        key: 'add',
        value: function add(id, value) {
            this._registries[id] = value;
        }
    }, {
        key: 'get',
        value: function get(id) {
            return this._registries[id];
        }
    }, {
        key: 'filterKeys',
        value: function filterKeys(handler) {
            return Object.keys(this._registries).filter(handler);
        }
    }, {
        key: 'findByValue',
        value: function findByValue(value) {
            var _this3 = this;

            var keys = Object.keys(this._registries).filter(function (key) {
                return _this3._registries[key] === value;
            });

            return keys;
        }
    }, {
        key: 'remove',
        value: function remove(id) {
            var old = this._registries[id];
            delete this._registries[id];
            return old;
        }
    }, {
        key: 'removeByValue',
        value: function removeByValue(value) {
            var _this4 = this;

            var keys = this.findByValue(value);
            return keys.map(function (key) {
                return _this4.remove(key);
            });
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            var old = this._registries;
            this._registries = {};
            return old;
        }
    }, {
        key: 'size',
        value: function size() {
            return Object.keys(this._registries).length;
        }
    }]);

    return SingleValueRegistry;
}();

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unique = unique;
exports.noop = noop;
exports.callbackTimeout = callbackTimeout;
exports.createElementWithID = createElementWithID;
exports.isPositiveInt = isPositiveInt;
exports.stringEndsWith = stringEndsWith;
function unique(prefix) {
    var count = -1;
    return function (f) {
        return prefix + '_' + ++count;
    };
}

function noop() {}

function callbackTimeout(timer, onSuccess, onTimeout) {

    var timeout = setTimeout(function () {

        onSuccess = noop;
        onTimeout();
    }, timer);

    return function () {
        clearTimeout(timeout);
        onSuccess.apply(this, arguments);
    };
}

function createElementWithID(parent, id) {
    var nEl = document.createElement('div');
    nEl.id = id;
    parent.innerHTML = '';
    parent.appendChild(nEl);
    return nEl;
}

function isPositiveInt(newVal, oldVal) {
    return !isNaN(parseFloat(newVal)) && isFinite(newVal) && newVal > 0 ? newVal : oldVal;
}

var endsWith = function () {
    if (String.prototype.endsWith) return String.prototype.endsWith;
    return function endsWith(searchString, position) {
        var subjectString = this.toString();
        if (position === undefined || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;
    };
}();

function stringEndsWith(string, search) {
    return endsWith.call(string, search);
}

},{}],8:[function(require,module,exports){
'use strict';

var METHODS = ['handshakeVersion', 'initAd', 'startAd', 'stopAd', 'skipAd', // VPAID 2.0 new method
'resizeAd', 'pauseAd', 'resumeAd', 'expandAd', 'collapseAd', 'subscribe', 'unsubscribe'];

var EVENTS = ['AdLoaded', 'AdStarted', 'AdStopped', 'AdSkipped', 'AdSkippableStateChange', // VPAID 2.0 new event
'AdSizeChange', // VPAID 2.0 new event
'AdLinearChange', 'AdDurationChange', // VPAID 2.0 new event
'AdExpandedChange', 'AdRemainingTimeChange', // [Deprecated in 2.0] but will be still fired for backwards compatibility
'AdVolumeChange', 'AdImpression', 'AdVideoStart', 'AdVideoFirstQuartile', 'AdVideoMidpoint', 'AdVideoThirdQuartile', 'AdVideoComplete', 'AdClickThru', 'AdInteraction', // VPAID 2.0 new event
'AdUserAcceptInvitation', 'AdUserMinimize', 'AdUserClose', 'AdPaused', 'AdPlaying', 'AdLog', 'AdError'];

var GETTERS = ['getAdLinear', 'getAdWidth', // VPAID 2.0 new getter
'getAdHeight', // VPAID 2.0 new getter
'getAdExpanded', 'getAdSkippableState', // VPAID 2.0 new getter
'getAdRemainingTime', 'getAdDuration', // VPAID 2.0 new getter
'getAdVolume', 'getAdCompanions', // VPAID 2.0 new getter
'getAdIcons' // VPAID 2.0 new getter
];

var SETTERS = ['setAdVolume'];

/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */

/**
 * IVPAIDAdUnit
 *
 * @class
 *
 * @param {object} creative
 * @param {HTMLElement} el
 * @param {HTMLVideoElement} video
 */
function IVPAIDAdUnit(creative, el, video) {}

/**
 * handshakeVersion
 *
 * @param {string} VPAIDVersion
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.handshakeVersion = function (VPAIDVersion, callback) {};

/**
 * initAd
 *
 * @param {number} width
 * @param {number} height
 * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'
 * @param {number} desiredBitrate indicates the desired bitrate in kbps
 * @param {object} [creativeData] used for additional initialization data
 * @param {object} [environmentVars] used for passing implementation-specific of js version
 * @param {NodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.initAd = function (width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {};

/**
 * startAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.startAd = function (callback) {};

/**
 * stopAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.stopAd = function (callback) {};

/**
 * skipAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.skipAd = function (callback) {};

/**
 * resizeAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.resizeAd = function (width, height, viewMode, callback) {};

/**
 * pauseAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.pauseAd = function (callback) {};

/**
 * resumeAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.resumeAd = function (callback) {};

/**
 * expandAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.expandAd = function (callback) {};

/**
 * collapseAd
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.collapseAd = function (callback) {};

/**
 * subscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 * @param {object} context
 */
IVPAIDAdUnit.prototype.subscribe = function (event, handler, context) {};

/**
 * startAd
 *
 * @param {string} event
 * @param {function} handler
 */
IVPAIDAdUnit.prototype.unsubscribe = function (event, handler) {};

/**
 * getAdLinear
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdLinear = function (callback) {};

/**
 * getAdWidth
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdWidth = function (callback) {};

/**
 * getAdHeight
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdHeight = function (callback) {};

/**
 * getAdExpanded
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdExpanded = function (callback) {};

/**
 * getAdSkippableState
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdSkippableState = function (callback) {};

/**
 * getAdRemainingTime
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdRemainingTime = function (callback) {};

/**
 * getAdDuration
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdDuration = function (callback) {};

/**
 * getAdVolume
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdVolume = function (callback) {};

/**
 * getAdCompanions
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdCompanions = function (callback) {};

/**
 * getAdIcons
 *
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.getAdIcons = function (callback) {};

/**
 * setAdVolume
 *
 * @param {number} volume
 * @param {nodeStyleCallback} callback
 */
IVPAIDAdUnit.prototype.setAdVolume = function (volume, callback) {};

addStaticToInterface(IVPAIDAdUnit, 'METHODS', METHODS);
addStaticToInterface(IVPAIDAdUnit, 'GETTERS', GETTERS);
addStaticToInterface(IVPAIDAdUnit, 'SETTERS', SETTERS);
addStaticToInterface(IVPAIDAdUnit, 'EVENTS', EVENTS);

var VPAID1_METHODS = METHODS.filter(function (method) {
  return ['skipAd'].indexOf(method) === -1;
});

addStaticToInterface(IVPAIDAdUnit, 'checkVPAIDInterface', function checkVPAIDInterface(creative) {
  var result = VPAID1_METHODS.every(function (key) {
    return typeof creative[key] === 'function';
  });
  return result;
});

module.exports = IVPAIDAdUnit;

function addStaticToInterface(Interface, name, value) {
  Object.defineProperty(Interface, name, {
    writable: false,
    configurable: false,
    value: value
  });
}

},{}],9:[function(require,module,exports){
'use strict';

var IVPAIDAdUnit = require('./IVPAIDAdUnit');
var Subscriber = require('./subscriber');
var checkVPAIDInterface = IVPAIDAdUnit.checkVPAIDInterface;
var utils = require('./utils');
var METHODS = IVPAIDAdUnit.METHODS;
var ERROR = 'AdError';
var AD_CLICK = 'AdClickThru';
var FILTERED_EVENTS = IVPAIDAdUnit.EVENTS.filter(function (event) {
    return event != AD_CLICK;
});

/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */

/**
 * VPAIDAdUnit
 * @class
 *
 * @param VPAIDCreative
 * @param {HTMLElement} [el] this will be used in initAd environmentVars.slot if defined
 * @param {HTMLVideoElement} [video] this will be used in initAd environmentVars.videoSlot if defined
 */
function VPAIDAdUnit(VPAIDCreative, el, video, iframe) {
    this._isValid = checkVPAIDInterface(VPAIDCreative);
    if (this._isValid) {
        this._creative = VPAIDCreative;
        this._el = el;
        this._videoEl = video;
        this._iframe = iframe;
        this._subscribers = new Subscriber();
        $addEventsSubscribers.call(this);
    }
}

VPAIDAdUnit.prototype = Object.create(IVPAIDAdUnit.prototype);

/**
 * isValidVPAIDAd will return if the VPAIDCreative passed in constructor is valid or not
 *
 * @return {boolean}
 */
VPAIDAdUnit.prototype.isValidVPAIDAd = function isValidVPAIDAd() {
    return this._isValid;
};

IVPAIDAdUnit.METHODS.forEach(function (method) {
    //NOTE: this methods arguments order are implemented differently from the spec
    var ignores = ['subscribe', 'unsubscribe', 'initAd'];

    if (ignores.indexOf(method) !== -1) return;

    VPAIDAdUnit.prototype[method] = function () {
        var ariaty = IVPAIDAdUnit.prototype[method].length;
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        var args = Array.prototype.slice.call(arguments);
        var callback = ariaty === args.length ? args.pop() : undefined;

        setTimeout(function () {
            var result,
                error = null;
            try {
                result = this._creative[method].apply(this._creative, args);
            } catch (e) {
                error = e;
            }

            callOrTriggerEvent(callback, this._subscribers, error, result);
        }.bind(this), 0);
    };
});

/**
 * initAd concreate implementation
 *
 * @param {number} width
 * @param {number} height
 * @param {string} viewMode can be 'normal', 'thumbnail' or 'fullscreen'
 * @param {number} desiredBitrate indicates the desired bitrate in kbps
 * @param {object} [creativeData] used for additional initialization data
 * @param {object} [environmentVars] used for passing implementation-specific of js version, if el & video was used in constructor slot & videoSlot will be added to the object
 * @param {NodeStyleCallback} callback
 */
VPAIDAdUnit.prototype.initAd = function initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars, callback) {
    creativeData = creativeData || {};
    environmentVars = utils.extend({
        slot: this._el,
        videoSlot: this._videoEl
    }, environmentVars || {});

    setTimeout(function () {
        var error;
        try {
            this._creative.initAd(width, height, viewMode, desiredBitrate, creativeData, environmentVars);
        } catch (e) {
            error = e;
        }

        callOrTriggerEvent(callback, this._subscribers, error);
    }.bind(this), 0);
};

/**
 * subscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 * @param {object} context
 */
VPAIDAdUnit.prototype.subscribe = function subscribe(event, handler, context) {
    this._subscribers.subscribe(handler, event, context);
};

/**
 * unsubscribe
 *
 * @param {string} event
 * @param {nodeStyleCallback} handler
 */
VPAIDAdUnit.prototype.unsubscribe = function unsubscribe(event, handler) {
    this._subscribers.unsubscribe(handler, event);
};

//alias
VPAIDAdUnit.prototype.on = VPAIDAdUnit.prototype.subscribe;
VPAIDAdUnit.prototype.off = VPAIDAdUnit.prototype.unsubscribe;

IVPAIDAdUnit.GETTERS.forEach(function (getter) {
    VPAIDAdUnit.prototype[getter] = function (callback) {
        setTimeout(function () {

            var result,
                error = null;
            try {
                result = this._creative[getter]();
            } catch (e) {
                error = e;
            }

            callOrTriggerEvent(callback, this._subscribers, error, result);
        }.bind(this), 0);
    };
});

/**
 * setAdVolume
 *
 * @param volume
 * @param {nodeStyleCallback} callback
 */
VPAIDAdUnit.prototype.setAdVolume = function setAdVolume(volume, callback) {
    setTimeout(function () {

        var result,
            error = null;
        try {
            this._creative.setAdVolume(volume);
            result = this._creative.getAdVolume();
        } catch (e) {
            error = e;
        }

        if (!error) {
            error = utils.validate(result === volume, 'failed to apply volume: ' + volume);
        }
        callOrTriggerEvent(callback, this._subscribers, error, result);
    }.bind(this), 0);
};

VPAIDAdUnit.prototype._destroy = function destroy() {
    this.stopAd();
    this._subscribers.unsubscribeAll();
};

function $addEventsSubscribers() {
    // some ads implement
    // so they only handle one subscriber
    // to handle this we create our one
    FILTERED_EVENTS.forEach(function (event) {
        this._creative.subscribe($trigger.bind(this, event), event);
    }.bind(this));

    // map the click event to be an object instead of depending of the order of the arguments
    // and to be consistent with the flash
    this._creative.subscribe($clickThruHook.bind(this), AD_CLICK);

    // because we are adding the element inside the iframe
    // the user is not able to click in the video
    if (this._videoEl) {
        var documentElement = this._iframe.contentDocument.documentElement;
        var videoEl = this._videoEl;
        documentElement.addEventListener('click', function (e) {
            if (e.target === documentElement) {
                videoEl.click();
            }
        });
    }
}

function $clickThruHook(url, id, playerHandles) {
    this._subscribers.triggerSync(AD_CLICK, { url: url, id: id, playerHandles: playerHandles });
}

function $trigger(event) {
    // TODO avoid leaking arguments
    // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
    this._subscribers.trigger(event, Array.prototype.slice(arguments, 1));
}

function callOrTriggerEvent(callback, subscribers, error, result) {
    if (callback) {
        callback(error, result);
    } else if (error) {
        subscribers.trigger(ERROR, error);
    }
}

module.exports = VPAIDAdUnit;

},{"./IVPAIDAdUnit":8,"./subscriber":11,"./utils":12}],10:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var unique = utils.unique('vpaidIframe');
var VPAIDAdUnit = require('./VPAIDAdUnit');

var defaultTemplate = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body style="margin:0;padding:0">';
defaultTemplate += '<script type="text/javascript" src="{{iframeURL_JS}}"></script><script>';
defaultTemplate += 'parent.postMessage(\'{"event": "ready", "id": "{{iframeID}}"}\', window.location.origin);';
defaultTemplate += '</script><div class="ad-element"></div></body></html>';

var AD_STOPPED = 'AdStopped';

/**
 * This callback is displayed as global member. The callback use nodejs error-first callback style
 * @callback NodeStyleCallback
 * @param {string|null}
 * @param {undefined|object}
 */

/**
 * VPAIDHTML5Client
 * @class
 *
 * @param {HTMLElement} el that will contain the iframe to load adUnit and a el to add to adUnit slot
 * @param {HTMLVideoElement} video default video element to be used by adUnit
 * @param {object} [templateConfig] template: html template to be used instead of the default, extraOptions: to be used when rendering the template
 * @param {object} [vpaidOptions] timeout: when loading adUnit
 */
function VPAIDHTML5Client(el, video, templateConfig, vpaidOptions) {
    templateConfig = templateConfig || {};

    this._id = unique();
    this._destroyed = false;

    this._frameContainer = utils.createElementInEl(el, 'div');
    this._videoEl = video;
    this._vpaidOptions = vpaidOptions || { timeout: 10000 };

    this._templateConfig = {
        template: templateConfig.template || defaultTemplate,
        extraOptions: templateConfig.extraOptions || {}
    };
}

/**
 * destroy
 *
 */
VPAIDHTML5Client.prototype.destroy = function destroy() {
    if (this._destroyed) {
        return;
    }
    this._destroyed = true;
    $unloadPreviousAdUnit.call(this);
};

/**
 * isDestroyed
 *
 * @return {boolean}
 */
VPAIDHTML5Client.prototype.isDestroyed = function isDestroyed() {
    return this._destroyed;
};

/**
 * loadAdUnit
 *
 * @param {string} adURL url of the js of the adUnit
 * @param {nodeStyleCallback} callback
 */
VPAIDHTML5Client.prototype.loadAdUnit = function loadAdUnit(adURL, callback) {
    $throwIfDestroyed.call(this);
    $unloadPreviousAdUnit.call(this);

    var frame = utils.createIframeWithContent(this._frameContainer, this._templateConfig.template, utils.extend({
        iframeURL_JS: adURL,
        iframeID: this.getID()
    }, this._templateConfig.extraOptions));
    this._frame = frame;

    this._onLoad = utils.callbackTimeout(this._vpaidOptions.timeout, onLoad.bind(this), onTimeout.bind(this));

    window.addEventListener('message', this._onLoad);

    function onLoad(e) {
        /*jshint validthis: false */
        //don't clear timeout
        if (e.origin !== window.location.origin) return;
        var result = JSON.parse(e.data);

        //don't clear timeout
        if (result.id !== this.getID()) return;

        var adUnit, error, createAd;
        if (!this._frame.contentWindow) {

            error = 'the iframe is not anymore in the DOM tree';
        } else {
            createAd = this._frame.contentWindow.getVPAIDAd;
            error = utils.validate(typeof createAd === 'function', 'the ad didn\'t return a function to create an ad');
        }

        if (!error) {
            var adEl = this._frame.contentWindow.document.querySelector('.ad-element');
            adUnit = new VPAIDAdUnit(createAd(), adEl, this._videoEl, this._frame);
            adUnit.subscribe(AD_STOPPED, $adDestroyed.bind(this));
            error = utils.validate(adUnit.isValidVPAIDAd(), 'the add is not fully complaint with VPAID specification');
        }

        this._adUnit = adUnit;
        $destroyLoadListener.call(this);
        callback(error, error ? null : adUnit);

        //clear timeout
        return true;
    }

    function onTimeout() {
        callback('timeout', null);
    }
};

/**
 * unloadAdUnit
 *
 */
VPAIDHTML5Client.prototype.unloadAdUnit = function unloadAdUnit() {
    $unloadPreviousAdUnit.call(this);
};

/**
 * getID will return the unique id
 *
 * @return {string}
 */
VPAIDHTML5Client.prototype.getID = function () {
    return this._id;
};

/**
 * $removeEl
 *
 * @param {string} key
 */
function $removeEl(key) {
    var el = this[key];
    if (el) {
        el.remove();
        delete this[key];
    }
}

function $adDestroyed() {
    $removeAdElements.call(this);
    delete this._adUnit;
}

function $unloadPreviousAdUnit() {
    $removeAdElements.call(this);
    $destroyAdUnit.call(this);
}

function $removeAdElements() {
    $removeEl.call(this, '_frame');
    $destroyLoadListener.call(this);
}

/**
 * $destroyLoadListener
 *
 */
function $destroyLoadListener() {
    if (this._onLoad) {
        window.removeEventListener('message', this._onLoad);
        utils.clearCallbackTimeout(this._onLoad);
        delete this._onLoad;
    }
}

function $destroyAdUnit() {
    if (this._adUnit) {
        this._adUnit.stopAd();
        delete this._adUnit;
    }
}

/**
 * $throwIfDestroyed
 *
 */
function $throwIfDestroyed() {
    if (this._destroyed) {
        throw new Error('VPAIDHTML5Client already destroyed!');
    }
}

module.exports = VPAIDHTML5Client;
window.VPAIDHTML5Client = VPAIDHTML5Client;

},{"./VPAIDAdUnit":9,"./utils":12}],11:[function(require,module,exports){
'use strict';

function Subscriber() {
    this._subscribers = {};
}

Subscriber.prototype.subscribe = function subscribe(handler, eventName, context) {
    this.get(eventName).push({ handler: handler, context: context });
};

Subscriber.prototype.unsubscribe = function unsubscribe(handler, eventName) {
    this._subscribers[eventName] = this.get(eventName).filter(function (subscriber) {
        return handler === subscriber.handler;
    });
};

Subscriber.prototype.unsubscribeAll = function unsubscribeAll() {
    this._subscribers = {};
};

Subscriber.prototype.trigger = function (eventName, data) {
    var that = this;
    that.get(eventName).forEach(function (subscriber) {
        setTimeout(function () {
            if (that.get(eventName)) {
                subscriber.handler.call(subscriber.context, data);
            }
        }, 0);
    });
};

Subscriber.prototype.triggerSync = function (eventName, data) {
    this.get(eventName).forEach(function (subscriber) {
        subscriber.handler.call(subscriber.context, data);
    });
};

Subscriber.prototype.get = function get(eventName) {
    if (!this._subscribers[eventName]) {
        this._subscribers[eventName] = [];
    }
    return this._subscribers[eventName];
};

module.exports = Subscriber;

},{}],12:[function(require,module,exports){
'use strict';

/**
 * noop a empty function
 */

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function noop() {}

/**
 * validate if is not validate will return an Error with the message
 *
 * @param {boolean} isValid
 * @param {string} message
 */
function validate(isValid, message) {
    return isValid ? null : new Error(message);
}

var timeouts = {};
/**
 * clearCallbackTimeout
 *
 * @param {function} func handler to remove
 */
function clearCallbackTimeout(func) {
    var timeout = timeouts[func];
    if (timeout) {
        clearTimeout(timeout);
        delete timeouts[func];
    }
}

/**
 * callbackTimeout if the onSuccess is not called and returns true in the timelimit then onTimeout will be called
 *
 * @param {number} timer
 * @param {function} onSuccess
 * @param {function} onTimeout
 */
function callbackTimeout(timer, onSuccess, onTimeout) {
    var _callback, timeout;

    timeout = setTimeout(function () {
        onSuccess = noop;
        delete timeout[_callback];
        onTimeout();
    }, timer);

    _callback = function callback() {
        // TODO avoid leaking arguments
        // https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
        if (onSuccess.apply(this, arguments)) {
            clearCallbackTimeout(_callback);
        }
    };

    timeouts[_callback] = timeout;

    return _callback;
}

/**
 * createElementInEl
 *
 * @param {HTMLElement} parent
 * @param {string} tagName
 * @param {string} id
 */
function createElementInEl(parent, tagName, id) {
    var nEl = document.createElement(tagName);
    if (id) nEl.id = id;
    parent.appendChild(nEl);
    return nEl;
}

/**
 * createIframeWithContent
 *
 * @param {HTMLElement} parent
 * @param {string} template simple template using {{var}}
 * @param {object} data
 */
function createIframeWithContent(parent, template, data) {
    var iframe = createIframe(parent);
    if (!setIframeContent(iframe, simpleTemplate(template, data))) return;
    return iframe;
}

/**
 * createIframe
 *
 * @param {HTMLElement} parent
 * @param {string} url
 */
function createIframe(parent, url) {
    var nEl = document.createElement('iframe');
    nEl.src = url || 'about:blank';
    nEl.marginWidth = '0';
    nEl.marginHeight = '0';
    nEl.frameBorder = '0';
    nEl.width = '100%';
    nEl.height = '100%';
    nEl.style.position = 'absolute';
    nEl.style.left = '0';
    nEl.style.top = '0';
    nEl.style.margin = '0px';
    nEl.style.padding = '0px';
    nEl.style.border = 'none';
    nEl.setAttribute('SCROLLING', 'NO');
    parent.innerHTML = '';
    parent.appendChild(nEl);
    return nEl;
}

/**
 * simpleTemplate
 *
 * @param {string} template
 * @param {object} data
 */
function simpleTemplate(template, data) {
    Object.keys(data).forEach(function (key) {
        var value = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? JSON.stringify(data[key]) : data[key];
        template = template.replace(new RegExp('{{' + key + '}}', 'g'), value);
    });
    return template;
}

/**
 * setIframeContent
 *
 * @param {HTMLIframeElement} iframeEl
 * @param content
 */
function setIframeContent(iframeEl, content) {
    var iframeDoc = iframeEl.contentWindow && iframeEl.contentWindow.document;
    if (!iframeDoc) return false;

    iframeDoc.write(content);

    return true;
}

/**
 * extend object with keys from another object
 *
 * @param {object} toExtend
 * @param {object} fromSource
 */
function extend(toExtend, fromSource) {
    Object.keys(fromSource).forEach(function (key) {
        toExtend[key] = fromSource[key];
    });
    return toExtend;
}

/**
 * unique will create a unique string everytime is called, sequentially and prefixed
 *
 * @param {string} prefix
 */
function unique(prefix) {
    var count = -1;
    return function () {
        return prefix + '_' + ++count;
    };
}

module.exports = {
    noop: noop,
    validate: validate,
    clearCallbackTimeout: clearCallbackTimeout,
    callbackTimeout: callbackTimeout,
    createElementInEl: createElementInEl,
    createIframeWithContent: createIframeWithContent,
    createIframe: createIframe,
    simpleTemplate: simpleTemplate,
    setIframeContent: setIframeContent,
    extend: extend,
    unique: unique
};

},{}],13:[function(require,module,exports){
'use strict';

var InLine = require('./InLine');
var Wrapper = require('./Wrapper');

function Ad(adJTree) {
  if (!(this instanceof Ad)) {
    return new Ad(adJTree);
  }
  this.initialize(adJTree);
}

Ad.prototype.initialize = function (adJTree) {
  this.id = adJTree.attr('id');
  this.sequence = adJTree.attr('sequence');

  if (adJTree.inLine) {
    this.inLine = new InLine(adJTree.inLine);
  }

  if (adJTree.wrapper) {
    this.wrapper = new Wrapper(adJTree.wrapper);
  }
};

module.exports = Ad;

},{"./InLine":15,"./Wrapper":25}],14:[function(require,module,exports){
'use strict';

var Linear = require('./Linear');

function Creative(creativeJTree) {
  if (!(this instanceof Creative)) {
    return new Creative(creativeJTree);
  }

  this.id = creativeJTree.attr('id');
  this.sequence = creativeJTree.attr('sequence');
  this.adId = creativeJTree.attr('adId');
  this.apiFramework = creativeJTree.attr('apiFramework');

  if (creativeJTree.linear) {
    this.linear = new Linear(creativeJTree.linear);
  }
}

module.exports = Creative;

},{"./Linear":16}],15:[function(require,module,exports){
'use strict';

var vastUtil = require('./vastUtil');

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function InLine(inlineJTree) {
  if (!(this instanceof InLine)) {
    return new InLine(inlineJTree);
  }

  //Required Fields
  this.adTitle = xml.keyValue(inlineJTree.adTitle);
  this.adSystem = xml.keyValue(inlineJTree.adSystem);
  this.impressions = vastUtil.parseImpressions(inlineJTree.impression);
  this.creatives = vastUtil.parseCreatives(inlineJTree.creatives);

  //Optional Fields
  this.description = xml.keyValue(inlineJTree.description);
  this.advertiser = xml.keyValue(inlineJTree.advertiser);
  this.surveys = parseSurveys(inlineJTree.survey);
  this.error = xml.keyValue(inlineJTree.error);
  this.pricing = xml.keyValue(inlineJTree.pricing);
  this.extensions = inlineJTree.extensions;

  /*** Local Functions ***/
  function parseSurveys(inlineSurveys) {
    if (inlineSurveys) {
      return utilities.transformArray(utilities.isArray(inlineSurveys) ? inlineSurveys : [inlineSurveys], function (survey) {
        if (utilities.isNotEmptyString(survey.keyValue)) {
          return {
            uri: survey.keyValue,
            type: survey.attr('type')
          };
        }

        return undefined;
      });
    }
    return [];
  }
}

module.exports = InLine;

},{"../../utils/utilityFunctions":42,"../../utils/xml":43,"./vastUtil":27}],16:[function(require,module,exports){
'use strict';

var TrackingEvent = require('./TrackingEvent');
var MediaFile = require('./MediaFile');
var VideoClicks = require('./VideoClicks');

var utilities = require('../../utils/utilityFunctions');
var parsers = require('./parsers');

var xml = require('../../utils/xml');

function Linear(linearJTree) {
  if (!(this instanceof Linear)) {
    return new Linear(linearJTree);
  }

  //Required Elements
  this.duration = parsers.duration(xml.keyValue(linearJTree.duration));
  this.mediaFiles = parseMediaFiles(linearJTree.mediaFiles && linearJTree.mediaFiles.mediaFile);

  //Optional fields
  this.trackingEvents = parseTrackingEvents(linearJTree.trackingEvents && linearJTree.trackingEvents.tracking, this.duration);
  this.skipoffset = parsers.offset(xml.attr(linearJTree, 'skipoffset'), this.duration);

  if (linearJTree.videoClicks) {
    this.videoClicks = new VideoClicks(linearJTree.videoClicks);
  }

  if (linearJTree.adParameters) {
    this.adParameters = xml.keyValue(linearJTree.adParameters);

    if (xml.attr(linearJTree.adParameters, 'xmlEncoded')) {
      this.adParameters = xml.decode(this.adParameters);
    }
  }

  /*** Local functions ***/
  function parseTrackingEvents(trackingEvents, duration) {
    var trackings = [];
    if (utilities.isDefined(trackingEvents)) {
      trackingEvents = utilities.isArray(trackingEvents) ? trackingEvents : [trackingEvents];
      trackingEvents.forEach(function (trackingData) {
        trackings.push(new TrackingEvent(trackingData, duration));
      });
    }
    return trackings;
  }

  function parseMediaFiles(mediaFilesJxonTree) {
    var mediaFiles = [];
    if (utilities.isDefined(mediaFilesJxonTree)) {
      mediaFilesJxonTree = utilities.isArray(mediaFilesJxonTree) ? mediaFilesJxonTree : [mediaFilesJxonTree];

      mediaFilesJxonTree.forEach(function (mfData) {
        mediaFiles.push(new MediaFile(mfData));
      });
    }
    return mediaFiles;
  }
}

module.exports = Linear;

},{"../../utils/utilityFunctions":42,"../../utils/xml":43,"./MediaFile":17,"./TrackingEvent":18,"./VideoClicks":24,"./parsers":26}],17:[function(require,module,exports){
'use strict';

var xml = require('../../utils/xml');

function MediaFile(mediaFileJTree) {
  if (!(this instanceof MediaFile)) {
    return new MediaFile(mediaFileJTree);
  }

  //Required attributes
  this.src = xml.keyValue(mediaFileJTree);
  this.delivery = mediaFileJTree.attr('delivery');
  this.type = mediaFileJTree.attr('type');
  this.width = mediaFileJTree.attr('width');
  this.height = mediaFileJTree.attr('height');

  //Optional attributes
  this.codec = mediaFileJTree.attr('codec');
  this.id = mediaFileJTree.attr('id');
  this.bitrate = mediaFileJTree.attr('bitrate');
  this.minBitrate = mediaFileJTree.attr('minBitrate');
  this.maxBitrate = mediaFileJTree.attr('maxBitrate');
  this.scalable = mediaFileJTree.attr('scalable');
  this.maintainAspectRatio = mediaFileJTree.attr('maintainAspectRatio');
  this.apiFramework = mediaFileJTree.attr('apiFramework');
}

module.exports = MediaFile;

},{"../../utils/xml":43}],18:[function(require,module,exports){
'use strict';

var parsers = require('./parsers');

var xml = require('../../utils/xml');

function TrackingEvent(trackingJTree, duration) {
  if (!(this instanceof TrackingEvent)) {
    return new TrackingEvent(trackingJTree, duration);
  }

  this.name = trackingJTree.attr('event');
  this.uri = xml.keyValue(trackingJTree);

  if ('progress' === this.name) {
    this.offset = parsers.offset(trackingJTree.attr('offset'), duration);
  }
}

module.exports = TrackingEvent;

},{"../../utils/xml":43,"./parsers":26}],19:[function(require,module,exports){
'use strict';

var Ad = require('./Ad');
var VASTError = require('./VASTError');
var VASTResponse = require('./VASTResponse');
var vastUtil = require('./vastUtil');

var async = require('../../utils/async');
var http = require('../../utils/http').http;
var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function VASTClient(options) {
  if (!(this instanceof VASTClient)) {
    return new VASTClient(options);
  }
  var defaultOptions = {
    WRAPPER_LIMIT: 5
  };

  options = options || {};
  this.settings = utilities.extend({}, options, defaultOptions);
  this.errorURLMacros = [];
}

VASTClient.prototype.getVASTResponse = function getVASTResponse(adTagUrl, callback) {
  var that = this;

  var error = sanityCheck(adTagUrl, callback);
  if (error) {
    if (utilities.isFunction(callback)) {
      return callback(error);
    }
    throw error;
  }

  async.waterfall([this._getVASTAd.bind(this, adTagUrl), buildVASTResponse], callback);

  /*** Local functions ***/
  function buildVASTResponse(adsChain, cb) {
    try {
      var response = that._buildVASTResponse(adsChain);
      cb(null, response);
    } catch (e) {
      cb(e);
    }
  }

  function sanityCheck(adTagUrl, cb) {
    if (!adTagUrl) {
      return new VASTError('on VASTClient.getVASTResponse, missing ad tag URL');
    }

    if (!utilities.isFunction(cb)) {
      return new VASTError('on VASTClient.getVASTResponse, missing callback function');
    }
  }
};

VASTClient.prototype._getVASTAd = function (adTagUrl, callback) {
  var that = this;

  getAdWaterfall(adTagUrl, function (error, vastTree) {
    var waterfallAds = vastTree && utilities.isArray(vastTree.ads) ? vastTree.ads : null;
    if (error) {
      that._trackError(error, waterfallAds);
      return callback(error, waterfallAds);
    }

    getAd(waterfallAds.shift(), [], waterfallHandler);

    /*** Local functions ***/
    function waterfallHandler(error, adChain) {
      if (error) {
        that._trackError(error, adChain);
        if (waterfallAds.length > 0) {
          getAd(waterfallAds.shift(), [], waterfallHandler);
        } else {
          callback(error, adChain);
        }
      } else {
        callback(null, adChain);
      }
    }
  });

  /*** Local functions ***/
  function getAdWaterfall(adTagUrl, callback) {
    var requestVastXML = that._requestVASTXml.bind(that, adTagUrl);
    async.waterfall([requestVastXML, buildVastWaterfall], callback);
  }

  function buildVastWaterfall(xmlStr, callback) {
    var vastTree;
    try {
      vastTree = xml.toJXONTree(xmlStr);

      if (utilities.isArray(vastTree.ad)) {
        vastTree.ads = vastTree.ad;
      } else if (vastTree.ad) {
        vastTree.ads = [vastTree.ad];
      } else {
        vastTree.ads = [];
      }
      callback(validateVASTTree(vastTree), vastTree);
    } catch (e) {
      callback(new VASTError("on VASTClient.getVASTAd.buildVastWaterfall, error parsing xml", 100), null);
    }
  }

  function validateVASTTree(vastTree) {
    var vastVersion = xml.attr(vastTree, 'version');

    if (!vastTree.ad) {
      return new VASTError('on VASTClient.getVASTAd.validateVASTTree, no Ad in VAST tree', 303);
    }

    if (vastVersion && vastVersion != 3 && vastVersion != 2) {
      return new VASTError('on VASTClient.getVASTAd.validateVASTTree, not supported VAST version "' + vastVersion + '"', 102);
    }

    return null;
  }

  function getAd(adTagUrl, adChain, callback) {
    if (adChain.length >= that.WRAPPER_LIMIT) {
      return callback(new VASTError("on VASTClient.getVASTAd.getAd, players wrapper limit reached (the limit is " + that.WRAPPER_LIMIT + ")", 302), adChain);
    }

    async.waterfall([function (next) {
      if (utilities.isString(adTagUrl)) {
        requestVASTAd(adTagUrl, next);
      } else {
        next(null, adTagUrl);
      }
    }, buildAd], function (error, ad) {
      if (ad) {
        adChain.push(ad);
      }

      if (error) {
        return callback(error, adChain);
      }

      if (ad.wrapper) {
        return getAd(ad.wrapper.VASTAdTagURI, adChain, callback);
      }

      return callback(null, adChain);
    });
  }

  function buildAd(adJxonTree, callback) {
    try {
      var ad = new Ad(adJxonTree);
      callback(validateAd(ad), ad);
    } catch (e) {
      callback(new VASTError('on VASTClient.getVASTAd.buildAd, error parsing xml', 100), null);
    }
  }

  function validateAd(ad) {
    var wrapper = ad.wrapper;
    var inLine = ad.inLine;
    var errMsgPrefix = 'on VASTClient.getVASTAd.validateAd, ';

    if (inLine && wrapper) {
      return new VASTError(errMsgPrefix + "InLine and Wrapper both found on the same Ad", 101);
    }

    if (!inLine && !wrapper) {
      return new VASTError(errMsgPrefix + "nor wrapper nor inline elements found on the Ad", 101);
    }

    if (inLine && inLine.creatives.length === 0) {
      return new VASTError(errMsgPrefix + "missing creative in InLine element", 101);
    }

    if (wrapper && !wrapper.VASTAdTagURI) {
      return new VASTError(errMsgPrefix + "missing 'VASTAdTagURI' in wrapper", 101);
    }
  }

  function requestVASTAd(adTagUrl, callback) {
    that._requestVASTXml(adTagUrl, function (error, xmlStr) {
      if (error) {
        return callback(error);
      }
      try {
        var vastTree = xml.toJXONTree(xmlStr);
        callback(validateVASTTree(vastTree), vastTree.ad);
      } catch (e) {
        callback(new VASTError("on VASTClient.getVASTAd.requestVASTAd, error parsing xml", 100));
      }
    });
  }
};

VASTClient.prototype._requestVASTXml = function requestVASTXml(adTagUrl, callback) {
  try {
    if (utilities.isFunction(adTagUrl)) {
      adTagUrl(requestHandler);
    } else {
      http.get(adTagUrl, requestHandler, {
        withCredentials: true
      });
    }
  } catch (e) {
    callback(e);
  }

  /*** Local functions ***/
  function requestHandler(error, response, status) {
    if (error) {
      var errMsg = utilities.isDefined(status) ? "on VASTClient.requestVastXML, HTTP request error with status '" + status + "'" : "on VASTClient.requestVastXML, Error getting the the VAST XML with he passed adTagXML fn";
      return callback(new VASTError(errMsg, 301), null);
    }

    callback(null, response);
  }
};

VASTClient.prototype._buildVASTResponse = function buildVASTResponse(adsChain) {
  var response = new VASTResponse();
  addAdsToResponse(response, adsChain);
  validateResponse(response);

  return response;

  //*** Local function ****
  function addAdsToResponse(response, ads) {
    ads.forEach(function (ad) {
      response.addAd(ad);
    });
  }

  function validateResponse(response) {
    var progressEvents = response.trackingEvents.progress;

    if (!response.hasLinear()) {
      throw new VASTError("on VASTClient._buildVASTResponse, Received an Ad type that is not supported", 200);
    }

    if (response.duration === undefined) {
      throw new VASTError("on VASTClient._buildVASTResponse, Missing duration field in VAST response", 101);
    }

    if (progressEvents) {
      progressEvents.forEach(function (progressEvent) {
        if (!utilities.isNumber(progressEvent.offset)) {
          throw new VASTError("on VASTClient._buildVASTResponse, missing or wrong offset attribute on progress tracking event", 101);
        }
      });
    }
  }
};

VASTClient.prototype._trackError = function (error, adChain) {
  if (!utilities.isArray(adChain) || adChain.length === 0) {
    //There is nothing to track
    return;
  }

  var errorURLMacros = [];
  adChain.forEach(addErrorUrlMacros);
  vastUtil.track(errorURLMacros, { ERRORCODE: error.code || 900 }); //900 <== Undefined error

  /*** Local functions  ***/
  function addErrorUrlMacros(ad) {
    if (ad.wrapper && ad.wrapper.error) {
      errorURLMacros.push(ad.wrapper.error);
    }

    if (ad.inLine && ad.inLine.error) {
      errorURLMacros.push(ad.inLine.error);
    }
  }
};

module.exports = VASTClient;

},{"../../utils/async":37,"../../utils/http":39,"../../utils/utilityFunctions":42,"../../utils/xml":43,"./Ad":13,"./VASTError":20,"./VASTResponse":22,"./vastUtil":27}],20:[function(require,module,exports){
'use strict';

function VASTError(message, code) {
  this.message = 'VAST Error: ' + (message || '');
  if (code) {
    this.code = code;
  }
}

VASTError.prototype = new Error();
VASTError.prototype.name = "VAST Error";

module.exports = VASTError;

},{}],21:[function(require,module,exports){
'use strict';

/**
 * Inner helper class that deals with the logic of the individual steps needed to setup an ad in the player.
 *
 * @param player {object} instance of the player that will play the ad. It assumes that the videojs-contrib-ads plugin
 *                        has been initialized when you use its utility functions.
 *
 * @constructor
 */

var VASTResponse = require('./VASTResponse');
var VASTError = require('./VASTError');
var VASTTracker = require('./VASTTracker');
var vastUtil = require('./vastUtil');

var async = require('../../utils/async');
var dom = require('../../utils/dom');
var playerUtils = require('../../utils/playerUtils');
var utilities = require('../../utils/utilityFunctions');

function VASTIntegrator(player) {
  if (!(this instanceof VASTIntegrator)) {
    return new VASTIntegrator(player);
  }

  this.player = player;
}

VASTIntegrator.prototype.playAd = function playAd(vastResponse, callback) {
  var that = this;
  callback = callback || utilities.noop;

  if (!(vastResponse instanceof VASTResponse)) {
    return callback(new VASTError('On VASTIntegrator, missing required VASTResponse'));
  }

  async.waterfall([function (next) {
    next(null, vastResponse);
  }, this._selectAdSource.bind(this), this._createVASTTracker.bind(this), this._addClickThrough.bind(this), this._addSkipButton.bind(this), this._setupEvents.bind(this), this._playSelectedAd.bind(this)], function (error, response) {
    if (error && response) {
      that._trackError(error, response);
    }
    callback(error, response);
  });

  this._adUnit = {
    _src: null,
    type: 'VAST',
    pauseAd: function pauseAd() {
      that.player.pause(true);
    },

    resumeAd: function resumeAd() {
      that.player.play(true);
    },

    isPaused: function isPaused() {
      return that.player.paused(true);
    },

    getSrc: function getSrc() {
      return this._src;
    }
  };

  return this._adUnit;
};

VASTIntegrator.prototype._selectAdSource = function selectAdSource(response, callback) {
  var source;

  var playerWidth = dom.getDimension(this.player.el()).width;
  response.mediaFiles.sort(function compareTo(a, b) {
    var deltaA = Math.abs(playerWidth - a.width);
    var deltaB = Math.abs(playerWidth - b.width);
    return deltaA - deltaB;
  });

  source = this.player.selectSource(response.mediaFiles).source;

  if (source) {
    if (this._adUnit) {
      this._adUnit._src = source;
    }
    return callback(null, source, response);
  }

  // code 403 <== Couldn't find MediaFile that is supported by this video player
  callback(new VASTError("Could not find Ad mediafile supported by this player", 403), response);
};

VASTIntegrator.prototype._createVASTTracker = function createVASTTracker(adMediaFile, response, callback) {
  try {
    callback(null, adMediaFile, new VASTTracker(adMediaFile.src, response), response);
  } catch (e) {
    callback(e, response);
  }
};

VASTIntegrator.prototype._setupEvents = function setupEvents(adMediaFile, tracker, response, callback) {
  var previouslyMuted;
  var player = this.player;
  player.on('fullscreenchange', trackFullscreenChange);
  player.on('vast.adStart', trackImpressions);
  player.on('pause', trackPause);
  player.on('timeupdate', trackProgress);
  player.on('volumechange', trackVolumeChange);

  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], unbindEvents);
  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel', 'vast.adSkip'], function (evt) {
    if (evt.type === 'vast.adEnd') {
      tracker.trackComplete();
    }
  });

  return callback(null, adMediaFile, response);

  /*** Local Functions ***/
  function unbindEvents() {
    player.off('fullscreenchange', trackFullscreenChange);
    player.off('vast.adStart', trackImpressions);
    player.off('pause', trackPause);
    player.off('timeupdate', trackProgress);
    player.off('volumechange', trackVolumeChange);
  }

  function trackFullscreenChange() {
    if (player.isFullscreen()) {
      tracker.trackFullscreen();
    } else {
      tracker.trackExitFullscreen();
    }
  }

  function trackPause() {
    //NOTE: whenever a video ends the video Element triggers a 'pause' event before the 'ended' event.
    //      We should not track this pause event because it makes the VAST tracking confusing again we use a
    //      Threshold of 2 seconds to prevent false positives on IOS.
    if (Math.abs(player.duration() - player.currentTime()) < 2) {
      return;
    }

    tracker.trackPause();
    playerUtils.once(player, ['play', 'vast.adEnd', 'vast.adsCancel'], function (evt) {
      if (evt.type === 'play') {
        tracker.trackResume();
      }
    });
  }

  function trackProgress() {
    var currentTimeInMs = player.currentTime() * 1000;
    tracker.trackProgress(currentTimeInMs);
  }

  function trackImpressions() {
    tracker.trackImpressions();
    tracker.trackCreativeView();
  }

  function trackVolumeChange() {
    var muted = player.muted();
    if (muted) {
      tracker.trackMute();
    } else if (previouslyMuted) {
      tracker.trackUnmute();
    }
    previouslyMuted = muted;
  }
};

VASTIntegrator.prototype._addSkipButton = function addSkipButton(source, tracker, response, callback) {
  var skipOffsetInSec;
  var that = this;

  if (utilities.isNumber(response.skipoffset)) {
    skipOffsetInSec = response.skipoffset / 1000;
    addSkipButtonToPlayer(this.player, skipOffsetInSec);
  }
  callback(null, source, tracker, response);

  /*** Local function ***/
  function addSkipButtonToPlayer(player, skipOffset) {
    var skipButton = createSkipButton(player);
    var updateSkipButton = updateSkipButtonState.bind(that, skipButton, skipOffset, player);

    player.el().appendChild(skipButton);
    player.on('timeupdate', updateSkipButton);

    playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeSkipButton);

    function removeSkipButton() {
      player.off('timeupdate', updateSkipButton);
      dom.remove(skipButton);
    }
  }

  function createSkipButton(player) {
    var skipButton = window.document.createElement("div");
    dom.addClass(skipButton, "vast-skip-button");

    skipButton.onclick = function (e) {
      if (dom.hasClass(skipButton, 'enabled')) {
        tracker.trackSkip();
        player.trigger('vast.adSkip');
      }

      //We prevent event propagation to avoid problems with the clickThrough and so on
      if (window.Event.prototype.stopPropagation !== undefined) {
        e.stopPropagation();
      } else {
        return false;
      }
    };

    return skipButton;
  }

  function updateSkipButtonState(skipButton, skipOffset, player) {
    var timeLeft = Math.ceil(skipOffset - player.currentTime());
    if (timeLeft > 0) {
      skipButton.innerHTML = "Skip in " + utilities.toFixedDigits(timeLeft, 2) + "...";
    } else {
      if (!dom.hasClass(skipButton, 'enabled')) {
        dom.addClass(skipButton, 'enabled');
        skipButton.innerHTML = "Skip ad";
      }
    }
  }
};

VASTIntegrator.prototype._addClickThrough = function addClickThrough(mediaFile, tracker, response, callback) {
  var player = this.player;
  var blocker = createClickThroughBlocker(player, tracker, response);
  var updateBlocker = updateBlockerURL.bind(this, blocker, response, player);

  player.el().insertBefore(blocker, player.controlBar.el());
  player.on('timeupdate', updateBlocker);
  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeBlocker);

  return callback(null, mediaFile, tracker, response);

  /*** Local Functions ***/

  function createClickThroughBlocker(player, tracker, response) {
    var blocker = window.document.createElement("a");
    var clickThroughMacro = response.clickThrough;

    dom.addClass(blocker, 'vast-blocker');
    blocker.href = generateClickThroughURL(clickThroughMacro, player);

    if (utilities.isString(clickThroughMacro)) {
      blocker.target = "_blank";
    }

    blocker.onclick = function (e) {
      if (player.paused()) {
        player.play();

        //We prevent event propagation to avoid problems with the player's normal pause mechanism
        if (window.Event.prototype.stopPropagation !== undefined) {
          e.stopPropagation();
        }
        return false;
      }

      player.pause();
      tracker.trackClick();
    };

    return blocker;
  }

  function updateBlockerURL(blocker, response, player) {
    blocker.href = generateClickThroughURL(response.clickThrough, player);
  }

  function generateClickThroughURL(clickThroughMacro, player) {
    var variables = {
      ASSETURI: mediaFile.src,
      CONTENTPLAYHEAD: vastUtil.formatProgress(player.currentTime() * 1000)
    };

    return clickThroughMacro ? vastUtil.parseURLMacro(clickThroughMacro, variables) : '#';
  }

  function removeBlocker() {
    player.off('timeupdate', updateBlocker);
    dom.remove(blocker);
  }
};

VASTIntegrator.prototype._playSelectedAd = function playSelectedAd(source, response, callback) {
  var player = this.player;

  player.preload("auto"); //without preload=auto the durationchange event is never fired
  player.src(source);

  playerUtils.once(player, ['durationchange', 'error', 'vast.adsCancel'], function (evt) {
    if (evt.type === 'durationchange') {
      playAd();
    } else if (evt.type === 'error') {
      callback(new VASTError("on VASTIntegrator, Player is unable to play the Ad", 400), response);
    }
    //NOTE: If the ads get canceled we do nothing/
  });

  /**** local functions ******/
  function playAd() {
    player.play();
    playerUtils.once(player, ['playing', 'vast.adsCancel'], function (evt) {
      if (evt.type === 'vast.adsCancel') {
        return;
      }

      player.trigger('vast.adStart');

      playerUtils.once(player, ['ended', 'vast.adsCancel', 'vast.adSkip'], function (evt) {
        if (evt.type === 'ended' || evt.type === 'vast.adSkip') {
          callback(null, response);
        }
        //NOTE: if the ads get cancel we do nothing
      });
    });
  }
};

VASTIntegrator.prototype._trackError = function trackError(error, response) {
  vastUtil.track(response.errorURLMacros, { ERRORCODE: error.code || 900 });
};

module.exports = VASTIntegrator;

},{"../../utils/async":37,"../../utils/dom":38,"../../utils/playerUtils":40,"../../utils/utilityFunctions":42,"./VASTError":20,"./VASTResponse":22,"./VASTTracker":23,"./vastUtil":27}],22:[function(require,module,exports){
'use strict';

var Ad = require('./Ad');
var VideoClicks = require('./VideoClicks');
var Linear = require('./Linear');
var InLine = require('./InLine');
var Wrapper = require('./Wrapper');

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

window.InLine__A = InLine;
function VASTResponse() {
  if (!(this instanceof VASTResponse)) {
    return new VASTResponse();
  }

  this._linearAdded = false;
  this.ads = [];
  this.errorURLMacros = [];
  this.impressions = [];
  this.clickTrackings = [];
  this.customClicks = [];
  this.trackingEvents = {};
  this.mediaFiles = [];
  this.clickThrough = undefined;
  this.adTitle = '';
  this.duration = undefined;
  this.skipoffset = undefined;
}

VASTResponse.prototype.addAd = function (ad) {
  var inLine, wrapper;
  if (ad instanceof Ad) {
    inLine = ad.inLine;
    wrapper = ad.wrapper;

    this.ads.push(ad);

    if (inLine) {
      this._addInLine(inLine);
    }

    if (wrapper) {
      this._addWrapper(wrapper);
    }
  }
};

VASTResponse.prototype._addErrorTrackUrl = function (error) {
  var errorURL = error instanceof xml.JXONTree ? xml.keyValue(error) : error;
  if (errorURL) {
    this.errorURLMacros.push(errorURL);
  }
};

VASTResponse.prototype._addImpressions = function (impressions) {
  utilities.isArray(impressions) && appendToArray(this.impressions, impressions);
};

VASTResponse.prototype._addClickThrough = function (clickThrough) {
  if (utilities.isNotEmptyString(clickThrough)) {
    this.clickThrough = clickThrough;
  }
};

VASTResponse.prototype._addClickTrackings = function (clickTrackings) {
  utilities.isArray(clickTrackings) && appendToArray(this.clickTrackings, clickTrackings);
};

VASTResponse.prototype._addCustomClicks = function (customClicks) {
  utilities.isArray(customClicks) && appendToArray(this.customClicks, customClicks);
};

VASTResponse.prototype._addTrackingEvents = function (trackingEvents) {
  var eventsMap = this.trackingEvents;

  if (trackingEvents) {
    trackingEvents = utilities.isArray(trackingEvents) ? trackingEvents : [trackingEvents];
    trackingEvents.forEach(function (trackingEvent) {
      if (!eventsMap[trackingEvent.name]) {
        eventsMap[trackingEvent.name] = [];
      }
      eventsMap[trackingEvent.name].push(trackingEvent);
    });
  }
};

VASTResponse.prototype._addTitle = function (title) {
  if (utilities.isNotEmptyString(title)) {
    this.adTitle = title;
  }
};

VASTResponse.prototype._addDuration = function (duration) {
  if (utilities.isNumber(duration)) {
    this.duration = duration;
  }
};

VASTResponse.prototype._addVideoClicks = function (videoClicks) {
  if (videoClicks instanceof VideoClicks) {
    this._addClickThrough(videoClicks.clickThrough);
    this._addClickTrackings(videoClicks.clickTrackings);
    this._addCustomClicks(videoClicks.customClicks);
  }
};

VASTResponse.prototype._addMediaFiles = function (mediaFiles) {
  utilities.isArray(mediaFiles) && appendToArray(this.mediaFiles, mediaFiles);
};

VASTResponse.prototype._addSkipoffset = function (offset) {
  if (offset) {
    this.skipoffset = offset;
  }
};

VASTResponse.prototype._addAdParameters = function (adParameters) {
  if (adParameters) {
    this.adParameters = adParameters;
  }
};

VASTResponse.prototype._addLinear = function (linear) {
  if (linear instanceof Linear) {
    this._addDuration(linear.duration);
    this._addTrackingEvents(linear.trackingEvents);
    this._addVideoClicks(linear.videoClicks);
    this._addMediaFiles(linear.mediaFiles);
    this._addSkipoffset(linear.skipoffset);
    this._addAdParameters(linear.adParameters);
    this._linearAdded = true;
  }
};

VASTResponse.prototype._addInLine = function (inLine) {
  var that = this;

  if (inLine instanceof InLine) {
    this._addTitle(inLine.adTitle);
    this._addErrorTrackUrl(inLine.error);
    this._addImpressions(inLine.impressions);

    inLine.creatives.forEach(function (creative) {
      if (creative.linear) {
        that._addLinear(creative.linear);
      }
    });
  }
};

VASTResponse.prototype._addWrapper = function (wrapper) {
  var that = this;

  if (wrapper instanceof Wrapper) {
    this._addErrorTrackUrl(wrapper.error);
    this._addImpressions(wrapper.impressions);

    wrapper.creatives.forEach(function (creative) {
      var linear = creative.linear;
      if (linear) {
        that._addVideoClicks(linear.videoClicks);
        that.clickThrough = undefined; //We ensure that no clickThrough has been added
        that._addTrackingEvents(linear.trackingEvents);
      }
    });
  }
};

VASTResponse.prototype.hasLinear = function () {
  return this._linearAdded;
};

function appendToArray(array, items) {
  items.forEach(function (item) {
    array.push(item);
  });
}

module.exports = VASTResponse;

},{"../../utils/utilityFunctions":42,"../../utils/xml":43,"./Ad":13,"./InLine":15,"./Linear":16,"./VideoClicks":24,"./Wrapper":25}],23:[function(require,module,exports){
'use strict';

var VASTError = require('./VASTError');
var VASTResponse = require('./VASTResponse');
var vastUtil = require('./vastUtil');
var utilities = require('../../utils/utilityFunctions');

function VASTTracker(assetURI, vastResponse) {
  if (!(this instanceof VASTTracker)) {
    return new VASTTracker(assetURI, vastResponse);
  }

  this.sanityCheck(assetURI, vastResponse);
  this.initialize(assetURI, vastResponse);
}

VASTTracker.prototype.initialize = function (assetURI, vastResponse) {
  this.response = vastResponse;
  this.assetURI = assetURI;
  this.progress = 0;
  this.quartiles = {
    firstQuartile: { tracked: false, time: Math.round(25 * vastResponse.duration) / 100 },
    midpoint: { tracked: false, time: Math.round(50 * vastResponse.duration) / 100 },
    thirdQuartile: { tracked: false, time: Math.round(75 * vastResponse.duration) / 100 }
  };
};

VASTTracker.prototype.sanityCheck = function (assetURI, vastResponse) {
  if (!utilities.isString(assetURI) || utilities.isEmptyString(assetURI)) {
    throw new VASTError('on VASTTracker constructor, missing required the URI of the ad asset being played');
  }

  if (!(vastResponse instanceof VASTResponse)) {
    throw new VASTError('on VASTTracker constructor, missing required VAST response');
  }
};

VASTTracker.prototype.trackURLs = function trackURLs(urls, variables) {
  if (utilities.isArray(urls) && urls.length > 0) {
    variables = utilities.extend({
      ASSETURI: this.assetURI,
      CONTENTPLAYHEAD: vastUtil.formatProgress(this.progress)
    }, variables || {});

    vastUtil.track(urls, variables);
  }
};

VASTTracker.prototype.trackEvent = function trackEvent(eventName, trackOnce) {
  this.trackURLs(getEventUris(this.response.trackingEvents[eventName]));
  if (trackOnce) {
    this.response.trackingEvents[eventName] = undefined;
  }

  /*** Local function ***/
  function getEventUris(trackingEvents) {
    var uris;

    if (trackingEvents) {
      uris = [];
      trackingEvents.forEach(function (event) {
        uris.push(event.uri);
      });
    }
    return uris;
  }
};

VASTTracker.prototype.trackProgress = function trackProgress(newProgressInMs) {
  var that = this;
  var events = [];
  var ONCE = true;
  var ALWAYS = false;
  var trackingEvents = this.response.trackingEvents;

  if (utilities.isNumber(newProgressInMs)) {
    addTrackEvent('start', ONCE, newProgressInMs > 0);
    addTrackEvent('rewind', ALWAYS, hasRewound(this.progress, newProgressInMs));
    addQuartileEvents(newProgressInMs);
    trackProgressEvents(newProgressInMs);
    trackEvents();
    this.progress = newProgressInMs;
  }

  /*** Local function ***/
  function hasRewound(currentProgress, newProgress) {
    var REWIND_THRESHOLD = 3000; //IOS video clock is very unreliable and we need a 3 seconds threshold to ensure that there was a rewind an that it was on purpose.
    return currentProgress > newProgressInMs && Math.abs(newProgress - currentProgress) > REWIND_THRESHOLD;
  }

  function addTrackEvent(eventName, trackOnce, canBeAdded) {
    if (trackingEvents[eventName] && canBeAdded) {
      events.push({
        name: eventName,
        trackOnce: !!trackOnce
      });
    }
  }

  function addQuartileEvents(progress) {
    var quartiles = that.quartiles;
    var firstQuartile = that.quartiles.firstQuartile;
    var midpoint = that.quartiles.midpoint;
    var thirdQuartile = that.quartiles.thirdQuartile;

    if (!firstQuartile.tracked) {
      trackQuartile('firstQuartile', progress);
    } else if (!midpoint.tracked) {
      trackQuartile('midpoint', progress);
    } else if (!thirdQuartile.tracked) {
      trackQuartile('thirdQuartile', progress);
    }

    /*** Local function ***/
    function trackQuartile(quartileName, progress) {
      var quartile = quartiles[quartileName];
      if (canBeTracked(quartile, progress)) {
        quartile.tracked = true;
        addTrackEvent(quartileName, ONCE, true);
      }
    }
  }

  function canBeTracked(quartile, progress) {
    var quartileTime = quartile.time;
    //We only fire the quartile event if the progress is bigger than the quartile time by 5 seconds at most.
    return progress >= quartileTime && progress <= quartileTime + 5000;
  }

  function trackProgressEvents(progress) {
    if (!utilities.isArray(trackingEvents.progress)) {
      return; //Nothing to track
    }

    var pendingProgressEvts = [];

    trackingEvents.progress.forEach(function (evt) {
      if (evt.offset <= progress) {
        that.trackURLs([evt.uri]);
      } else {
        pendingProgressEvts.push(evt);
      }
    });
    trackingEvents.progress = pendingProgressEvts;
  }

  function trackEvents() {
    events.forEach(function (event) {
      that.trackEvent(event.name, event.trackOnce);
    });
  }
};

['rewind', 'fullscreen', 'exitFullscreen', 'pause', 'resume', 'mute', 'unmute', 'acceptInvitation', 'acceptInvitationLinear', 'collapse', 'expand'].forEach(function (eventName) {
  VASTTracker.prototype['track' + utilities.capitalize(eventName)] = function () {
    this.trackEvent(eventName);
  };
});

['start', 'skip', 'close', 'closeLinear'].forEach(function (eventName) {
  VASTTracker.prototype['track' + utilities.capitalize(eventName)] = function () {
    this.trackEvent(eventName, true);
  };
});

['firstQuartile', 'midpoint', 'thirdQuartile'].forEach(function (quartile) {
  VASTTracker.prototype['track' + utilities.capitalize(quartile)] = function () {
    this.quartiles[quartile].tracked = true;
    this.trackEvent(quartile, true);
  };
});

VASTTracker.prototype.trackComplete = function () {
  if (this.quartiles.thirdQuartile.tracked) {
    this.trackEvent('complete', true);
  }
};

VASTTracker.prototype.trackErrorWithCode = function trackErrorWithCode(errorcode) {
  if (utilities.isNumber(errorcode)) {
    this.trackURLs(this.response.errorURLMacros, { ERRORCODE: errorcode });
  }
};

VASTTracker.prototype.trackImpressions = function trackImpressions() {
  this.trackURLs(this.response.impressions);
};

VASTTracker.prototype.trackCreativeView = function trackCreativeView() {
  this.trackEvent('creativeView');
};

VASTTracker.prototype.trackClick = function trackClick() {
  this.trackURLs(this.response.clickTrackings);
};

module.exports = VASTTracker;

},{"../../utils/utilityFunctions":42,"./VASTError":20,"./VASTResponse":22,"./vastUtil":27}],24:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function VideoClicks(videoClickJTree) {
  if (!(this instanceof VideoClicks)) {
    return new VideoClicks(videoClickJTree);
  }

  this.clickThrough = xml.keyValue(videoClickJTree.clickThrough);
  this.clickTrackings = parseClickTrackings(videoClickJTree.clickTracking);
  this.customClicks = parseClickTrackings(videoClickJTree.customClick);

  /*** Local functions ***/
  function parseClickTrackings(trackingData) {
    var clickTrackings = [];
    if (trackingData) {
      trackingData = utilities.isArray(trackingData) ? trackingData : [trackingData];
      trackingData.forEach(function (clickTrackingData) {
        clickTrackings.push(xml.keyValue(clickTrackingData));
      });
    }
    return clickTrackings;
  }
}

module.exports = VideoClicks;

},{"../../utils/utilityFunctions":42,"../../utils/xml":43}],25:[function(require,module,exports){
'use strict';

var vastUtil = require('./vastUtil');

var utilities = require('../../utils/utilityFunctions');
var xml = require('../../utils/xml');

function Wrapper(wrapperJTree) {
  if (!(this instanceof Wrapper)) {
    return new Wrapper(wrapperJTree);
  }

  //Required elements
  this.adSystem = xml.keyValue(wrapperJTree.adSystem);
  this.impressions = vastUtil.parseImpressions(wrapperJTree.impression);
  this.VASTAdTagURI = xml.keyValue(wrapperJTree.vASTAdTagURI);

  //Optional elements
  this.creatives = vastUtil.parseCreatives(wrapperJTree.creatives);
  this.error = xml.keyValue(wrapperJTree.error);
  this.extensions = wrapperJTree.extensions;

  //Optional attrs
  this.followAdditionalWrappers = utilities.isDefined(xml.attr(wrapperJTree, 'followAdditionalWrappers')) ? xml.attr(wrapperJTree, 'followAdditionalWrappers') : true;
  this.allowMultipleAds = xml.attr(wrapperJTree, 'allowMultipleAds');
  this.fallbackOnNoAd = xml.attr(wrapperJTree, 'fallbackOnNoAd');
}

module.exports = Wrapper;

},{"../../utils/utilityFunctions":42,"../../utils/xml":43,"./vastUtil":27}],26:[function(require,module,exports){
'use strict';

var utilities = require('../../utils/utilityFunctions');

var durationRegex = /(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/;

var parsers = {

  duration: function parseDuration(durationStr) {

    var match, durationInMs;

    if (utilities.isString(durationStr)) {
      match = durationStr.match(durationRegex);
      if (match) {
        durationInMs = parseHoursToMs(match[1]) + parseMinToMs(match[2]) + parseSecToMs(match[3]) + parseInt(match[5] || 0);
      }
    }

    return isNaN(durationInMs) ? null : durationInMs;

    /*** local functions ***/
    function parseHoursToMs(hourStr) {
      return parseInt(hourStr, 10) * 60 * 60 * 1000;
    }

    function parseMinToMs(minStr) {
      return parseInt(minStr, 10) * 60 * 1000;
    }

    function parseSecToMs(secStr) {
      return parseInt(secStr, 10) * 1000;
    }
  },

  offset: function parseOffset(offset, duration) {
    if (isPercentage(offset)) {
      return calculatePercentage(offset, duration);
    }
    return parsers.duration(offset);

    /*** Local function ***/
    function isPercentage(offset) {
      var percentageRegex = /^\d+(\.\d+)?%$/g;
      return percentageRegex.test(offset);
    }

    function calculatePercentage(percentStr, duration) {
      if (duration) {
        return calcPercent(duration, parseFloat(percentStr.replace('%', '')));
      }
      return null;
    }

    function calcPercent(quantity, percent) {
      return quantity * percent / 100;
    }
  }

};

module.exports = parsers;

},{"../../utils/utilityFunctions":42}],27:[function(require,module,exports){
'use strict';

var Creative = require('./Creative');
var utilities = require('../../utils/utilityFunctions');

var vastUtil = {

  track: function track(URLMacros, variables) {
    var sources = vastUtil.parseURLMacros(URLMacros, variables);
    var trackImgs = [];
    sources.forEach(function (src) {
      var img = new Image();
      img.src = src;
      trackImgs.push(img);
    });
    return trackImgs;
  },

  parseURLMacros: function parseMacros(URLMacros, variables) {
    var parsedURLs = [];

    variables = variables || {};

    if (!variables["CACHEBUSTING"]) {
      variables["CACHEBUSTING"] = Math.round(Math.random() * 1.0e+10);
    }

    URLMacros.forEach(function (URLMacro) {
      parsedURLs.push(vastUtil._parseURLMacro(URLMacro, variables));
    });

    return parsedURLs;
  },

  parseURLMacro: function parseMacro(URLMacro, variables) {
    variables = variables || {};

    if (!variables["CACHEBUSTING"]) {
      variables["CACHEBUSTING"] = Math.round(Math.random() * 1.0e+10);
    }

    return vastUtil._parseURLMacro(URLMacro, variables);
  },

  _parseURLMacro: function parseMacro(URLMacro, variables) {
    variables = variables || {};

    utilities.forEach(variables, function (value, key) {
      URLMacro = URLMacro.replace(new RegExp("\\[" + key + "\\\]", 'gm'), value);
    });

    return URLMacro;
  },

  parseDuration: function parseDuration(durationStr) {
    var durationRegex = /(\d\d):(\d\d):(\d\d)(\.(\d\d\d))?/;
    var match, durationInMs;

    if (utilities.isString(durationStr)) {
      match = durationStr.match(durationRegex);
      if (match) {
        durationInMs = parseHoursToMs(match[1]) + parseMinToMs(match[2]) + parseSecToMs(match[3]) + parseInt(match[5] || 0);
      }
    }

    return isNaN(durationInMs) ? null : durationInMs;

    /*** local functions ***/
    function parseHoursToMs(hourStr) {
      return parseInt(hourStr, 10) * 60 * 60 * 1000;
    }

    function parseMinToMs(minStr) {
      return parseInt(minStr, 10) * 60 * 1000;
    }

    function parseSecToMs(secStr) {
      return parseInt(secStr, 10) * 1000;
    }
  },

  parseImpressions: function parseImpressions(impressions) {
    if (impressions) {
      impressions = utilities.isArray(impressions) ? impressions : [impressions];
      return utilities.transformArray(impressions, function (impression) {
        if (utilities.isNotEmptyString(impression.keyValue)) {
          return impression.keyValue;
        }
        return undefined;
      });
    }
    return [];
  },

  parseCreatives: function parseCreatives(creativesJTree) {
    var creatives = [];
    var creativesData;
    if (utilities.isDefined(creativesJTree) && utilities.isDefined(creativesJTree.creative)) {
      creativesData = utilities.isArray(creativesJTree.creative) ? creativesJTree.creative : [creativesJTree.creative];
      creativesData.forEach(function (creative) {
        creatives.push(new Creative(creative));
      });
    }
    return creatives;
  },

  //We assume that the progress is going to arrive in milliseconds
  formatProgress: function formatProgress(progress) {
    var hours, minutes, seconds, milliseconds;
    hours = progress / (60 * 60 * 1000);
    hours = Math.floor(hours);
    minutes = progress / (60 * 1000) % 60;
    minutes = Math.floor(minutes);
    seconds = progress / 1000 % 60;
    seconds = Math.floor(seconds);
    milliseconds = progress % 1000;
    return utilities.toFixedDigits(hours, 2) + ':' + utilities.toFixedDigits(minutes, 2) + ':' + utilities.toFixedDigits(seconds, 2) + '.' + utilities.toFixedDigits(milliseconds, 3);
  },

  parseOffset: function parseOffset(offset, duration) {
    if (isPercentage(offset)) {
      return calculatePercentage(offset, duration);
    }
    return vastUtil.parseDuration(offset);

    /*** Local function ***/
    function isPercentage(offset) {
      var percentageRegex = /^\d+(\.\d+)?%$/g;
      return percentageRegex.test(offset);
    }

    function calculatePercentage(percentStr, duration) {
      if (duration) {
        return calcPercent(duration, parseFloat(percentStr.replace('%', '')));
      }
      return null;
    }

    function calcPercent(quantity, percent) {
      return quantity * percent / 100;
    }
  },

  isVPAID: function isVPAIDMediaFile(mediaFile) {
    return !!mediaFile && mediaFile.apiFramework === 'VPAID';
  }
};

module.exports = vastUtil;

},{"../../utils/utilityFunctions":42,"./Creative":14}],28:[function(require,module,exports){
'use strict';

var VASTError = require('../vast/VASTError');

var utilities = require('../../utils/utilityFunctions');

function VPAIDAdUnitWrapper(vpaidAdUnit, opts) {
  if (!(this instanceof VPAIDAdUnitWrapper)) {
    return new VPAIDAdUnitWrapper(vpaidAdUnit, opts);
  }
  sanityCheck(vpaidAdUnit, opts);

  this.options = utilities.extend({}, opts);

  this._adUnit = vpaidAdUnit;

  /*** Local Functions ***/
  function sanityCheck(adUnit, opts) {
    if (!adUnit || !VPAIDAdUnitWrapper.checkVPAIDInterface(adUnit)) {
      throw new VASTError('on VPAIDAdUnitWrapper, the passed VPAID adUnit does not fully implement the VPAID interface');
    }

    if (!utilities.isObject(opts)) {
      throw new VASTError("on VPAIDAdUnitWrapper, expected options hash  but got '" + opts + "'");
    }

    if (!("responseTimeout" in opts) || !utilities.isNumber(opts.responseTimeout)) {
      throw new VASTError("on VPAIDAdUnitWrapper, expected responseTimeout in options");
    }
  }
}

VPAIDAdUnitWrapper.checkVPAIDInterface = function checkVPAIDInterface(VPAIDAdUnit) {
  //NOTE: skipAd is not part of the method list because it only appears in VPAID 2.0 and we support VPAID 1.0
  var VPAIDInterfaceMethods = ['handshakeVersion', 'initAd', 'startAd', 'stopAd', 'resizeAd', 'pauseAd', 'expandAd', 'collapseAd'];

  for (var i = 0, len = VPAIDInterfaceMethods.length; i < len; i++) {
    if (!VPAIDAdUnit || !utilities.isFunction(VPAIDAdUnit[VPAIDInterfaceMethods[i]])) {
      return false;
    }
  }

  return canSubscribeToEvents(VPAIDAdUnit) && canUnsubscribeFromEvents(VPAIDAdUnit);

  /*** Local Functions ***/

  function canSubscribeToEvents(adUnit) {
    return utilities.isFunction(adUnit.subscribe) || utilities.isFunction(adUnit.addEventListener) || utilities.isFunction(adUnit.on);
  }

  function canUnsubscribeFromEvents(adUnit) {
    return utilities.isFunction(adUnit.unsubscribe) || utilities.isFunction(adUnit.removeEventListener) || utilities.isFunction(adUnit.off);
  }
};

VPAIDAdUnitWrapper.prototype.adUnitAsyncCall = function () {
  var args = utilities.arrayLikeObjToArray(arguments);
  var method = args.shift();
  var cb = args.pop();
  var timeoutId;

  sanityCheck(method, cb, this._adUnit);
  args.push(wrapCallback());

  this._adUnit[method].apply(this._adUnit, args);
  timeoutId = setTimeout(function () {
    timeoutId = null;
    cb(new VASTError("on VPAIDAdUnitWrapper, timeout while waiting for a response on call '" + method + "'"));
    cb = utilities.noop;
  }, this.options.responseTimeout);

  /*** Local functions ***/
  function sanityCheck(method, cb, adUnit) {
    if (!utilities.isString(method) || !utilities.isFunction(adUnit[method])) {
      throw new VASTError("on VPAIDAdUnitWrapper.adUnitAsyncCall, invalid method name");
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError("on VPAIDAdUnitWrapper.adUnitAsyncCall, missing callback");
    }
  }

  function wrapCallback() {
    return function () {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      cb.apply(this, arguments);
    };
  }
};

VPAIDAdUnitWrapper.prototype.on = function (evtName, handler) {
  var addEventListener = this._adUnit.addEventListener || this._adUnit.subscribe || this._adUnit.on;
  addEventListener.call(this._adUnit, evtName, handler);
};

VPAIDAdUnitWrapper.prototype.off = function (evtName, handler) {
  var removeEventListener = this._adUnit.removeEventListener || this._adUnit.unsubscribe || this._adUnit.off;
  removeEventListener.call(this._adUnit, evtName, handler);
};

VPAIDAdUnitWrapper.prototype.waitForEvent = function (evtName, cb, context) {
  var timeoutId;
  sanityCheck(evtName, cb);
  context = context || null;

  this.on(evtName, responseListener);

  timeoutId = setTimeout(function () {
    cb(new VASTError("on VPAIDAdUnitWrapper.waitForEvent, timeout while waiting for event '" + evtName + "'"));
    timeoutId = null;
    cb = utilities.noop;
  }, this.options.responseTimeout);

  /*** Local functions ***/
  function sanityCheck(evtName, cb) {
    if (!utilities.isString(evtName)) {
      throw new VASTError("on VPAIDAdUnitWrapper.waitForEvent, missing evt name");
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError("on VPAIDAdUnitWrapper.waitForEvent, missing callback");
    }
  }

  function responseListener() {
    var args = utilities.arrayLikeObjToArray(arguments);

    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }

    args.unshift(null);
    cb.apply(context, args);
  }
};

// VPAID METHODS
VPAIDAdUnitWrapper.prototype.handshakeVersion = function (version, cb) {
  this.adUnitAsyncCall('handshakeVersion', version, cb);
};

/* jshint maxparams:6 */
VPAIDAdUnitWrapper.prototype.initAd = function (width, height, viewMode, desiredBitrate, adUnitData, cb) {
  this.waitForEvent('AdLoaded', cb);
  this._adUnit.initAd(width, height, viewMode, desiredBitrate, adUnitData);
};

VPAIDAdUnitWrapper.prototype.resizeAd = function (width, height, viewMode, cb) {
  // NOTE: AdSizeChange event is only supported on VPAID 2.0 so for the moment we are not going to use it
  // and will assume that everything is fine after the async call
  this.adUnitAsyncCall('resizeAd', width, height, viewMode, cb);
};

VPAIDAdUnitWrapper.prototype.startAd = function (cb) {
  this.waitForEvent('AdStarted', cb);
  this._adUnit.startAd();
};

VPAIDAdUnitWrapper.prototype.stopAd = function (cb) {
  this.waitForEvent('AdStopped', cb);
  this._adUnit.stopAd();
};

VPAIDAdUnitWrapper.prototype.pauseAd = function (cb) {
  this.waitForEvent('AdPaused', cb);
  this._adUnit.pauseAd();
};

VPAIDAdUnitWrapper.prototype.resumeAd = function (cb) {
  this.waitForEvent('AdPlaying', cb);
  this._adUnit.resumeAd();
};

VPAIDAdUnitWrapper.prototype.expandAd = function (cb) {
  this.waitForEvent('AdExpandedChange', cb);
  this._adUnit.expandAd();
};

VPAIDAdUnitWrapper.prototype.collapseAd = function (cb) {
  this.waitForEvent('AdExpandedChange', cb);
  this._adUnit.collapseAd();
};

VPAIDAdUnitWrapper.prototype.skipAd = function (cb) {
  this.waitForEvent('AdSkipped', cb);
  this._adUnit.skipAd();
};

//VPAID property getters
['adLinear', 'adWidth', 'adHeight', 'adExpanded', 'adSkippableState', 'adRemainingTime', 'adDuration', 'adVolume', 'adCompanions', 'adIcons'].forEach(function (property) {
  var getterName = 'get' + utilities.capitalize(property);

  VPAIDAdUnitWrapper.prototype[getterName] = function (cb) {
    this.adUnitAsyncCall(getterName, cb);
  };
});

//VPAID property setters
VPAIDAdUnitWrapper.prototype.setAdVolume = function (volume, cb) {
  this.adUnitAsyncCall('setAdVolume', volume, cb);
};

module.exports = VPAIDAdUnitWrapper;

},{"../../utils/utilityFunctions":42,"../vast/VASTError":20}],29:[function(require,module,exports){
'use strict';

var VASTError = require('../vast/VASTError');

var VPAIDFLASHClient = require('VPAIDFLASHClient/js/VPAIDFLASHClient');

var utilities = require('../../utils/utilityFunctions');
var dom = require('../../utils/dom');

function VPAIDFlashTech(mediaFile, settings) {
  if (!(this instanceof VPAIDFlashTech)) {
    return new VPAIDFlashTech(mediaFile);
  }
  sanityCheck(mediaFile);
  this.name = 'vpaid-flash';
  this.mediaFile = mediaFile;
  this.containerEl = null;
  this.vpaidFlashClient = null;
  this.settings = settings;

  /*** local functions ***/
  function sanityCheck(mediaFile) {
    if (!mediaFile || !utilities.isString(mediaFile.src)) {
      throw new VASTError('on VPAIDFlashTech, invalid MediaFile');
    }
  }
}

VPAIDFlashTech.VPAIDFLASHClient = VPAIDFLASHClient;

VPAIDFlashTech.supports = function (type) {
  return type === 'application/x-shockwave-flash' && VPAIDFlashTech.VPAIDFLASHClient.isSupported();
};

VPAIDFlashTech.prototype.loadAdUnit = function loadFlashCreative(containerEl, objectEl, callback) {
  var that = this;
  var flashClientOpts = this.settings && this.settings.vpaidFlashLoaderPath ? { data: this.settings.vpaidFlashLoaderPath } : undefined;
  sanityCheck(containerEl, callback);

  this.containerEl = containerEl;
  this.vpaidFlashClient = new VPAIDFlashTech.VPAIDFLASHClient(containerEl, function (error) {
    if (error) {
      return callback(error);
    }

    that.vpaidFlashClient.loadAdUnit(that.mediaFile.src, callback);
  }, flashClientOpts);

  /*** Local Functions ***/
  function sanityCheck(container, cb) {

    if (!dom.isDomElement(container)) {
      throw new VASTError('on VPAIDFlashTech.loadAdUnit, invalid dom container element');
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError('on VPAIDFlashTech.loadAdUnit, missing valid callback');
    }
  }
};

VPAIDFlashTech.prototype.unloadAdUnit = function () {
  if (this.vpaidFlashClient) {
    try {
      this.vpaidFlashClient.destroy();
    } catch (e) {
      if (console && utilities.isFunction(console.log)) {
        console.log('VAST ERROR: trying to unload the VPAID adunit');
      }
    }
    this.vpaidFlashClient = null;
  }

  if (this.containerEl) {
    dom.remove(this.containerEl);
    this.containerEl = null;
  }
};

module.exports = VPAIDFlashTech;

},{"../../utils/dom":38,"../../utils/utilityFunctions":42,"../vast/VASTError":20,"VPAIDFLASHClient/js/VPAIDFLASHClient":3}],30:[function(require,module,exports){
'use strict';

var VASTError = require('../vast/VASTError');

var VPAIDHTML5Client = require('VPAIDHTML5Client/js/VPAIDHTML5Client');

var utilities = require('../../utils/utilityFunctions');
var dom = require('../../utils/dom');

function VPAIDHTML5Tech(mediaFile) {

  if (!(this instanceof VPAIDHTML5Tech)) {
    return new VPAIDHTML5Tech(mediaFile);
  }

  sanityCheck(mediaFile);

  this.name = 'vpaid-html5';
  this.containerEl = null;
  this.videoEl = null;
  this.vpaidHTMLClient = null;

  this.mediaFile = mediaFile;

  function sanityCheck(mediaFile) {
    if (!mediaFile || !utilities.isString(mediaFile.src)) {
      throw new VASTError(VPAIDHTML5Tech.INVALID_MEDIA_FILE);
    }
  }
}

VPAIDHTML5Tech.VPAIDHTML5Client = VPAIDHTML5Client;

VPAIDHTML5Tech.supports = function (type) {
  return !utilities.isOldIE() && type === 'application/javascript';
};

VPAIDHTML5Tech.prototype.loadAdUnit = function loadAdUnit(containerEl, videoEl, callback) {
  sanityCheck(containerEl, videoEl, callback);

  this.containerEl = containerEl;
  this.videoEl = videoEl;
  this.vpaidHTMLClient = new VPAIDHTML5Tech.VPAIDHTML5Client(containerEl, videoEl, {});
  this.vpaidHTMLClient.loadAdUnit(this.mediaFile.src, callback);

  function sanityCheck(container, video, cb) {
    if (!dom.isDomElement(container)) {
      throw new VASTError(VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL);
    }

    if (!dom.isDomElement(video) || video.tagName.toLowerCase() !== 'video') {
      throw new VASTError(VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL);
    }

    if (!utilities.isFunction(cb)) {
      throw new VASTError(VPAIDHTML5Tech.MISSING_CALLBACK);
    }
  }
};

VPAIDHTML5Tech.prototype.unloadAdUnit = function unloadAdUnit() {
  if (this.vpaidHTMLClient) {
    try {
      this.vpaidHTMLClient.destroy();
    } catch (e) {
      if (console && utilities.isFunction(console.log)) {
        console.log('VAST ERROR: trying to unload the VPAID adunit');
      }
    }

    this.vpaidHTMLClient = null;
  }

  if (this.containerEl) {
    dom.remove(this.containerEl);
    this.containerEl = null;
  }
};

var PREFIX = 'on VPAIDHTML5Tech';
VPAIDHTML5Tech.INVALID_MEDIA_FILE = PREFIX + ', invalid MediaFile';
VPAIDHTML5Tech.INVALID_DOM_CONTAINER_EL = PREFIX + ', invalid container HtmlElement';
VPAIDHTML5Tech.INVALID_DOM_VIDEO_EL = PREFIX + ', invalid HTMLVideoElement';
VPAIDHTML5Tech.MISSING_CALLBACK = PREFIX + ', missing valid callback';

module.exports = VPAIDHTML5Tech;

},{"../../utils/dom":38,"../../utils/utilityFunctions":42,"../vast/VASTError":20,"VPAIDHTML5Client/js/VPAIDHTML5Client":10}],31:[function(require,module,exports){
'use strict';

var VASTError = require('../vast/VASTError');
var VASTResponse = require('../vast/VASTResponse');
var VASTTracker = require('../vast/VASTTracker');
var vastUtil = require('../vast/vastUtil');

var VPAIDAdUnitWrapper = require('./VPAIDAdUnitWrapper');
var VPAIDHTML5Tech = require('./VPAIDHTML5Tech');
var VPAIDFlashTech = require('./VPAIDFlashTech');

var async = require('../../utils/async');
var dom = require('../../utils/dom');
var playerUtils = require('../../utils/playerUtils');
var utilities = require('../../utils/utilityFunctions');

function VPAIDIntegrator(player, settings) {
  if (!(this instanceof VPAIDIntegrator)) {
    return new VPAIDIntegrator(player);
  }

  this.VIEW_MODE = {
    NORMAL: 'normal',
    FULLSCREEN: "fullscreen",
    THUMBNAIL: "thumbnail"
  };
  this.player = player;
  this.containerEl = createVPAIDContainerEl(player);
  this.options = {
    responseTimeout: 5000,
    VPAID_VERSION: '2.0'
  };
  this.settings = settings;

  /*** Local functions ***/

  function createVPAIDContainerEl() {
    var containerEl = document.createElement('div');
    dom.addClass(containerEl, 'VPAID-container');
    player.el().insertBefore(containerEl, player.controlBar.el());
    return containerEl;
  }
}

//List of supported VPAID technologies
VPAIDIntegrator.techs = [VPAIDFlashTech, VPAIDHTML5Tech];

VPAIDIntegrator.prototype.playAd = function playVPaidAd(vastResponse, callback) {
  var that = this;
  var tech;
  var player = this.player;

  callback = callback || utilities.noop;
  if (!(vastResponse instanceof VASTResponse)) {
    return callback(new VASTError('on VASTIntegrator.playAd, missing required VASTResponse'));
  }

  tech = this._findSupportedTech(vastResponse, this.settings);
  dom.addClass(player.el(), 'vjs-vpaid-ad');

  player.on('vast.adsCancel', triggerVpaidAdEnd);
  player.one('vpaid.adEnd', function () {
    player.off('vast.adsCancel', triggerVpaidAdEnd);
    removeAdUnit();
  });

  if (tech) {
    async.waterfall([function (next) {
      next(null, tech, vastResponse);
    }, this._loadAdUnit.bind(this), this._playAdUnit.bind(this), this._finishPlaying.bind(this)], function (error, adUnit, vastResponse) {
      if (error) {
        that._trackError(vastResponse);
      }
      player.trigger('vpaid.adEnd');
      callback(error, vastResponse);
    });

    this._adUnit = {
      _paused: true,
      type: 'VPAID',
      pauseAd: function pauseAd() {
        player.trigger('vpaid.pauseAd');
        player.pause(true); //we make sure that the video content gets stopped.
      },
      resumeAd: function resumeAd() {
        player.trigger('vpaid.resumeAd');
      },
      isPaused: function isPaused() {
        return this._paused;
      },
      getSrc: function getSrc() {
        return tech.mediaFile;
      }
    };

    return this._adUnit;
  }

  callback(new VASTError('on VPAIDIntegrator.playAd, could not find a supported mediaFile'));

  return null;
  /*** Local functions ***/
  function triggerVpaidAdEnd() {
    player.trigger('vpaid.adEnd');
  }

  function removeAdUnit() {
    if (tech) {
      tech.unloadAdUnit();
    }
    dom.removeClass(player.el(), 'vjs-vpaid-ad');
  }
};

VPAIDIntegrator.prototype._findSupportedTech = function (vastResponse, settings) {
  if (!(vastResponse instanceof VASTResponse)) {
    return null;
  }

  var vpaidMediaFiles = vastResponse.mediaFiles.filter(vastUtil.isVPAID);
  var i, len, mediaFile, VPAIDTech;

  for (i = 0, len = vpaidMediaFiles.length; i < len; i += 1) {
    mediaFile = vpaidMediaFiles[i];
    VPAIDTech = findSupportedTech(mediaFile);
    if (VPAIDTech) {
      return new VPAIDTech(mediaFile, settings);
    }
  }
  return null;

  /*** Local functions ***/
  function findSupportedTech(mediafile) {
    var type = mediafile.type;
    var i, len, VPAIDTech;
    for (i = 0, len = VPAIDIntegrator.techs.length; i < len; i += 1) {
      VPAIDTech = VPAIDIntegrator.techs[i];
      if (VPAIDTech.supports(type)) {
        return VPAIDTech;
      }
    }
    return null;
  }
};

VPAIDIntegrator.prototype._createVPAIDAdUnitWrapper = function (adUnit, src, responseTimeout) {
  return new VPAIDAdUnitWrapper(adUnit, { src: src, responseTimeout: responseTimeout });
};

VPAIDIntegrator.prototype._loadAdUnit = function (tech, vastResponse, next) {
  var that = this;
  var player = this.player;
  var vjsTechEl = player.el().querySelector('.vjs-tech');
  var responseTimeout = this.settings.responseTimeout || this.options.responseTimeout;
  tech.loadAdUnit(this.containerEl, vjsTechEl, function (error, adUnit) {
    if (error) {
      return next(error, adUnit, vastResponse);
    }

    try {
      var WrappedAdUnit = that._createVPAIDAdUnitWrapper(adUnit, tech.mediaFile.src, responseTimeout);
      var techClass = 'vjs-' + tech.name + '-ad';
      dom.addClass(player.el(), techClass);
      player.one('vpaid.adEnd', function () {
        dom.removeClass(player.el(), techClass);
      });
      next(null, WrappedAdUnit, vastResponse);
    } catch (e) {
      next(e, adUnit, vastResponse);
    }
  });
};

VPAIDIntegrator.prototype._playAdUnit = function (adUnit, vastResponse, callback) {
  async.waterfall([function (next) {
    next(null, adUnit, vastResponse);
  }, this._handshake.bind(this), this._initAd.bind(this), this._setupEvents.bind(this), this._addSkipButton.bind(this), this._linkPlayerControls.bind(this), this._startAd.bind(this)], callback);
};

VPAIDIntegrator.prototype._handshake = function handshake(adUnit, vastResponse, next) {
  adUnit.handshakeVersion(this.options.VPAID_VERSION, function (error, version) {
    if (error) {
      return next(error, adUnit, vastResponse);
    }

    if (version && isSupportedVersion(version)) {
      return next(null, adUnit, vastResponse);
    }

    return next(new VASTError('on VPAIDIntegrator._handshake, unsupported version "' + version + '"'), adUnit, vastResponse);
  });

  function isSupportedVersion(version) {
    var majorNum = major(version);
    return majorNum >= 1 && majorNum <= 2;
  }

  function major(version) {
    var parts = version.split('.');
    return parseInt(parts[0], 10);
  }
};

VPAIDIntegrator.prototype._initAd = function (adUnit, vastResponse, next) {
  var tech = this.player.el().querySelector('.vjs-tech');
  var dimension = dom.getDimension(tech);
  adUnit.initAd(dimension.width, dimension.height, this.VIEW_MODE.NORMAL, -1, { AdParameters: vastResponse.adParameters || '' }, function (error) {
    next(error, adUnit, vastResponse);
  });
};

VPAIDIntegrator.prototype._createVASTTracker = function (adUnitSrc, vastResponse) {
  return new VASTTracker(adUnitSrc, vastResponse);
};

VPAIDIntegrator.prototype._setupEvents = function (adUnit, vastResponse, next) {
  var adUnitSrc = adUnit.options.src;
  var tracker = this._createVASTTracker(adUnitSrc, vastResponse);
  var player = this.player;
  var that = this;

  adUnit.on('AdSkipped', function () {
    player.trigger('vpaid.AdSkipped');
    tracker.trackSkip();
  });

  adUnit.on('AdImpression', function () {
    player.trigger('vpaid.AdImpression');
    tracker.trackImpressions();
  });

  adUnit.on('AdStarted', function () {
    player.trigger('vpaid.AdStarted');
    tracker.trackCreativeView();
    notifyPlayToPlayer();
  });

  adUnit.on('AdVideoStart', function () {
    player.trigger('vpaid.AdVideoStart');
    tracker.trackStart();
    notifyPlayToPlayer();
  });

  adUnit.on('AdPlaying', function () {
    player.trigger('vpaid.AdPlaying');
    tracker.trackResume();
    notifyPlayToPlayer();
  });

  adUnit.on('AdPaused', function () {
    player.trigger('vpaid.AdPaused');
    tracker.trackPause();
    notifyPauseToPlayer();
  });

  function notifyPlayToPlayer() {
    if (that._adUnit && that._adUnit.isPaused()) {
      that._adUnit._paused = false;
    }
    player.trigger('play');
  }

  function notifyPauseToPlayer() {
    if (that._adUnit) {
      that._adUnit._paused = true;
    }
    player.trigger('pause');
  }

  adUnit.on('AdVideoFirstQuartile', function () {
    player.trigger('vpaid.AdVideoFirstQuartile');
    tracker.trackFirstQuartile();
  });

  adUnit.on('AdVideoMidpoint', function () {
    player.trigger('vpaid.AdVideoMidpoint');
    tracker.trackMidpoint();
  });

  adUnit.on('AdVideoThirdQuartile', function () {
    player.trigger('vpaid.AdVideoThirdQuartile');
    tracker.trackThirdQuartile();
  });

  adUnit.on('AdVideoComplete', function () {
    player.trigger('vpaid.AdVideoComplete');
    tracker.trackComplete();
  });

  adUnit.on('AdClickThru', function (data) {
    player.trigger('vpaid.AdClickThru');
    var url = data.url;
    var playerHandles = data.playerHandles;
    var clickThruUrl = utilities.isNotEmptyString(url) ? url : generateClickThroughURL(vastResponse.clickThrough);

    tracker.trackClick();
    if (playerHandles && clickThruUrl) {
      window.open(clickThruUrl, '_blank');
    }

    function generateClickThroughURL(clickThroughMacro) {
      var variables = {
        ASSETURI: adUnit.options.src,
        CONTENTPLAYHEAD: 0 //In VPAID there is no method to know the current time from the adUnit
      };

      return clickThroughMacro ? vastUtil.parseURLMacro(clickThroughMacro, variables) : null;
    }
  });

  adUnit.on('AdUserAcceptInvitation', function () {
    player.trigger('vpaid.AdUserAcceptInvitation');
    tracker.trackAcceptInvitation();
    tracker.trackAcceptInvitationLinear();
  });

  adUnit.on('AdUserClose', function () {
    player.trigger('vpaid.AdUserClose');
    tracker.trackClose();
    tracker.trackCloseLinear();
  });

  adUnit.on('AdUserMinimize', function () {
    player.trigger('vpaid.AdUserMinimize');
    tracker.trackCollapse();
  });

  adUnit.on('AdError', function () {
    player.trigger('vpaid.AdError');
    //NOTE: we track errors code 901, as noted in VAST 3.0
    tracker.trackErrorWithCode(901);
  });

  adUnit.on('AdVolumeChange', function () {
    player.trigger('vpaid.AdVolumeChange');
    var lastVolume = player.volume();
    adUnit.getAdVolume(function (error, currentVolume) {
      if (currentVolume === 0 && lastVolume > 0) {
        tracker.trackMute();
      }

      if (currentVolume > 0 && lastVolume === 0) {
        tracker.trackUnmute();
      }

      player.volume(currentVolume);
    });
  });

  var updateViewSize = resizeAd.bind(this, player, adUnit, this.VIEW_MODE);
  var updateViewSizeThrottled = utilities.throttle(updateViewSize, 100);
  var autoResize = this.settings.autoResize;

  if (autoResize) {
    dom.addEventListener(window, 'resize', updateViewSizeThrottled);
    dom.addEventListener(window, 'orientationchange', updateViewSizeThrottled);
  }

  player.on('vast.resize', updateViewSize);
  player.on('vpaid.pauseAd', pauseAdUnit);
  player.on('vpaid.resumeAd', resumeAdUnit);

  player.one('vpaid.adEnd', function () {
    player.off('vast.resize', updateViewSize);
    player.off('vpaid.pauseAd', pauseAdUnit);
    player.off('vpaid.resumeAd', resumeAdUnit);

    if (autoResize) {
      dom.removeEventListener(window, 'resize', updateViewSizeThrottled);
      dom.removeEventListener(window, 'orientationchange', updateViewSizeThrottled);
    }
  });

  next(null, adUnit, vastResponse);

  /*** Local Functions ***/
  function pauseAdUnit() {
    adUnit.pauseAd(utilities.noop);
  }

  function resumeAdUnit() {
    adUnit.resumeAd(utilities.noop);
  }
};

VPAIDIntegrator.prototype._addSkipButton = function (adUnit, vastResponse, next) {
  var skipButton;
  var player = this.player;

  adUnit.on('AdSkippableStateChange', updateSkipButtonState);

  playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeSkipButton);

  next(null, adUnit, vastResponse);

  /*** Local function ***/
  function updateSkipButtonState() {
    player.trigger('vpaid.AdSkippableStateChange');
    adUnit.getAdSkippableState(function (error, isSkippable) {
      if (isSkippable) {
        if (!skipButton) {
          addSkipButton(player);
        }
      } else {
        removeSkipButton(player);
      }
    });
  }

  function addSkipButton(player) {
    skipButton = createSkipButton(player);
    player.el().appendChild(skipButton);
  }

  function removeSkipButton() {
    dom.remove(skipButton);
    skipButton = null;
  }

  function createSkipButton() {
    var skipButton = window.document.createElement("div");
    dom.addClass(skipButton, "vast-skip-button");
    dom.addClass(skipButton, "enabled");
    skipButton.innerHTML = "Skip ad";

    skipButton.onclick = function (e) {
      adUnit.skipAd(utilities.noop); //We skip the adUnit

      //We prevent event propagation to avoid problems with the clickThrough and so on
      if (window.Event.prototype.stopPropagation !== undefined) {
        e.stopPropagation();
      } else {
        return false;
      }
    };

    return skipButton;
  }
};

VPAIDIntegrator.prototype._linkPlayerControls = function (adUnit, vastResponse, next) {
  var that = this;
  linkVolumeControl(this.player, adUnit);
  linkFullScreenControl(this.player, adUnit, this.VIEW_MODE);

  next(null, adUnit, vastResponse);

  /*** Local functions ***/
  function linkVolumeControl(player, adUnit) {
    player.on('volumechange', updateAdUnitVolume);
    adUnit.on('AdVolumeChange', updatePlayerVolume);

    player.one('vpaid.adEnd', function () {
      player.off('volumechange', updateAdUnitVolume);
    });

    /*** local functions ***/
    function updateAdUnitVolume() {
      var vol = player.muted() ? 0 : player.volume();
      adUnit.setAdVolume(vol, logError);
    }

    function updatePlayerVolume() {
      player.trigger('vpaid.AdVolumeChange');
      adUnit.getAdVolume(function (error, vol) {
        if (error) {
          logError(error);
        } else {
          player.volume(vol);
        }
      });
    }
  }

  function linkFullScreenControl(player, adUnit, VIEW_MODE) {
    var updateViewSize = resizeAd.bind(that, player, adUnit, VIEW_MODE);

    player.on('fullscreenchange', updateViewSize);

    player.one('vpaid.adEnd', function () {
      player.off('fullscreenchange', updateViewSize);
    });
  }
};

VPAIDIntegrator.prototype._startAd = function (adUnit, vastResponse, next) {
  var player = this.player;

  adUnit.startAd(function (error) {
    if (!error) {
      player.trigger('vast.adStart');
    }
    next(error, adUnit, vastResponse);
  });
};

VPAIDIntegrator.prototype._finishPlaying = function (adUnit, vastResponse, next) {
  var player = this.player;
  adUnit.on('AdStopped', function () {
    player.trigger('vpaid.AdStopped');
    finishPlayingAd(null);
  });

  adUnit.on('AdError', function (error) {
    var errMsg = error ? error.message : 'on VPAIDIntegrator, error while waiting for the adUnit to finish playing';
    finishPlayingAd(new VASTError(errMsg));
  });

  /*** local functions ***/
  function finishPlayingAd(error) {
    next(error, adUnit, vastResponse);
  }
};

VPAIDIntegrator.prototype._trackError = function trackError(response) {
  vastUtil.track(response.errorURLMacros, { ERRORCODE: 901 });
};

function resizeAd(player, adUnit, VIEW_MODE) {
  var tech = player.el().querySelector('.vjs-tech');
  var dimension = dom.getDimension(tech);
  var MODE = player.isFullscreen() ? VIEW_MODE.FULLSCREEN : VIEW_MODE.NORMAL;
  adUnit.resizeAd(dimension.width, dimension.height, MODE, logError);
}

function logError(error) {
  if (error && console && console.log) {
    console.log('ERROR: ' + error.message, error);
  }
}

module.exports = VPAIDIntegrator;

},{"../../utils/async":37,"../../utils/dom":38,"../../utils/playerUtils":40,"../../utils/utilityFunctions":42,"../vast/VASTError":20,"../vast/VASTResponse":22,"../vast/VASTTracker":23,"../vast/vastUtil":27,"./VPAIDAdUnitWrapper":28,"./VPAIDFlashTech":29,"./VPAIDHTML5Tech":30}],32:[function(require,module,exports){
'use strict';

var dom = require('../../utils/dom');

var element = document.createElement('div');
element.className = 'vjs-ads-label vjs-control vjs-label-hidden';
element.innerHTML = 'Advertisement';

var AdsLabelFactory = function AdsLabelFactory(baseComponent) {
  return {
    /** @constructor */
    init: function init(player, options) {
      options.el = element;
      baseComponent.call(this, player, options);

      // We asynchronously reposition the ads label element
      setTimeout(function () {
        var currentTimeComp = player.controlBar && (player.controlBar.getChild("timerControls") || player.controlBar.getChild("currentTimeDisplay"));
        if (currentTimeComp) {
          player.controlBar.el().insertBefore(element, currentTimeComp.el());
        }
        dom.removeClass(element, 'vjs-label-hidden');
      }, 0);
    },

    el: function getElement() {
      return element;
    }
  };
};

module.exports = AdsLabelFactory;

},{"../../utils/dom":38}],33:[function(require,module,exports){
'use strict';

var baseVideoJsComponent = videojs.Component;

var AdsLabel = require('./ads-label')(baseVideoJsComponent);

videojs.AdsLabel = videojs.Component.extend(AdsLabel);

},{"./ads-label":32}],34:[function(require,module,exports){
'use strict';

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

var element = document.createElement('div');

var BlackPosterFactory = function BlackPosterFactory(baseComponent) {
  return {
    /** @constructor */
    init: function init(player, options) {
      options.el = element;
      element.className = 'vjs-black-poster';
      baseComponent.call(this, player, options);

      var posterImg = player.getChild('posterImage');

      //We need to do it asynchronously to be sure that the black poster el is on the dom.
      setTimeout(function () {
        if (posterImg && player && player.el()) {
          player.el().insertBefore(element, posterImg.el());
        }
      }, 0);
    },
    el: function getElement() {
      return element;
    }
  };
};

module.exports = BlackPosterFactory;

},{}],35:[function(require,module,exports){
'use strict';

var baseVideoJsComponent = videojs.Component;

var BlackPoster = require('./black-poster')(baseVideoJsComponent);

videojs.BlackPoster = videojs.Component.extend(BlackPoster);

},{"./black-poster":34}],36:[function(require,module,exports){
'use strict';

var VASTClient = require('../ads/vast/VASTClient');
var VASTError = require('../ads/vast/VASTError');
var vastUtil = require('../ads/vast/vastUtil');

var VASTIntegrator = require('../ads/vast/VASTIntegrator');
var VPAIDIntegrator = require('../ads/vpaid/VPAIDIntegrator');

var async = require('../utils/async');
var dom = require('../utils/dom');
var playerUtils = require('../utils/playerUtils');
var utilities = require('../utils/utilityFunctions');

module.exports = function VASTPlugin(options) {
  var snapshot;
  var player = this;
  var vast = new VASTClient();
  var adsCanceled = false;
  var defaultOpts = {
    // maximum amount of time in ms to wait to receive `adsready` from the ad
    // implementation after play has been requested. Ad implementations are
    // expected to load any dynamic libraries and make any requests to determine
    // ad policies for a video during this time.
    timeout: 500,

    //TODO:finish this IOS FIX
    //Whenever you play an add on IOS, the native player kicks in and we loose control of it. On very heavy pages the 'play' event
    // May occur after the video content has already started. This is wrong if you want to play a preroll ad that needs to happen before the user
    // starts watching the content. To prevent this usec
    iosPrerollCancelTimeout: 2000,

    // maximun amount of time for the ad to actually start playing. If this timeout gets
    // triggered the ads will be cancelled
    adCancelTimeout: 3000,

    // Boolean flag that configures the player to play a new ad before the user sees the video again
    // the current video
    playAdAlways: false,

    // Flag to enable or disable the ads by default.
    adsEnabled: true,

    // Boolean flag to enable or disable the resize with window.resize or orientationchange
    autoResize: true,

    // Path to the VPAID flash ad's loader
    vpaidFlashLoaderPath: '/VPAIDFlash.swf'
  };

  var settings = utilities.extend({}, defaultOpts, options || {});

  if (utilities.isUndefined(settings.adTagUrl) && utilities.isDefined(settings.url)) {
    settings.adTagUrl = settings.url;
  }

  if (utilities.isString(settings.adTagUrl)) {
    settings.adTagUrl = utilities.echoFn(settings.adTagUrl);
  }

  if (utilities.isDefined(settings.adTagXML) && !utilities.isFunction(settings.adTagXML)) {
    return trackAdError(new VASTError('on VideoJS VAST plugin, the passed adTagXML option does not contain a function'));
  }

  if (!utilities.isDefined(settings.adTagUrl) && !utilities.isFunction(settings.adTagXML)) {
    return trackAdError(new VASTError('on VideoJS VAST plugin, missing adTagUrl on options object'));
  }

  playerUtils.prepareForAds(player);

  if (settings.playAdAlways) {
    // No matter what happens we play a new ad before the user sees the video again.
    player.on('vast.contentEnd', function () {
      setTimeout(function () {
        player.trigger('vast.reset');
      }, 0);
    });
  }

  player.on('vast.firstPlay', tryToPlayPrerollAd);

  player.on('vast.reset', function () {
    //If we are reseting the plugin, we don't want to restore the content
    snapshot = null;
    cancelAds();
  });

  player.vast = {
    isEnabled: function isEnabled() {
      return settings.adsEnabled;
    },

    enable: function enable() {
      settings.adsEnabled = true;
    },

    disable: function disable() {
      settings.adsEnabled = false;
    }
  };

  return player.vast;

  /**** Local functions ****/
  function tryToPlayPrerollAd() {
    //We remove the poster to prevent flickering whenever the content starts playing
    playerUtils.removeNativePoster(player);

    playerUtils.once(player, ['vast.adsCancel', 'vast.adEnd'], function () {
      removeAdUnit();
      restoreVideoContent();
    });

    async.waterfall([checkAdsEnabled, preparePlayerForAd, playPrerollAd], function (error, response) {
      if (error) {
        trackAdError(error, response);
      } else {
        player.trigger('vast.adEnd');
      }
    });

    /*** Local functions ***/

    function removeAdUnit() {
      if (player.vast && player.vast.adUnit) {
        player.vast.adUnit = null; //We remove the adUnit
      }
    }

    function restoreVideoContent() {
      setupContentEvents();
      if (snapshot) {
        playerUtils.restorePlayerSnapshot(player, snapshot);
        snapshot = null;
      }
    }

    function setupContentEvents() {
      playerUtils.once(player, ['playing', 'vast.reset', 'vast.firstPlay'], function (evt) {
        if (evt.type !== 'playing') {
          return;
        }

        player.trigger('vast.contentStart');

        playerUtils.once(player, ['ended', 'vast.reset', 'vast.firstPlay'], function (evt) {
          if (evt.type === 'ended') {
            player.trigger('vast.contentEnd');
          }
        });
      });
    }

    function checkAdsEnabled(next) {
      if (settings.adsEnabled) {
        return next(null);
      }
      next(new VASTError('Ads are not enabled'));
    }

    function preparePlayerForAd(next) {
      if (canPlayPrerollAd()) {
        snapshot = playerUtils.getPlayerSnapshot(player);
        player.pause();
        addSpinnerIcon();
        startAdCancelTimeout();
        next(null);
      } else {
        next(new VASTError('video content has been playing before preroll ad'));
      }
    }

    function canPlayPrerollAd() {
      return !utilities.isIPhone() || player.currentTime() <= settings.iosPrerollCancelTimeout;
    }

    function startAdCancelTimeout() {
      var adCancelTimeoutId;
      adsCanceled = false;

      adCancelTimeoutId = setTimeout(function () {
        trackAdError(new VASTError('timeout while waiting for the video to start playing', 402));
      }, settings.adCancelTimeout);

      playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], clearAdCancelTimeout);

      /*** local functions ***/
      function clearAdCancelTimeout() {
        if (adCancelTimeoutId) {
          clearTimeout(adCancelTimeoutId);
          adCancelTimeoutId = null;
        }
      }
    }

    function addSpinnerIcon() {
      dom.addClass(player.el(), 'vjs-vast-ad-loading');
      playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], removeSpinnerIcon);
    }

    function removeSpinnerIcon() {
      //IMPORTANT NOTE: We remove the spinnerIcon asynchronously to give time to the browser to start the video.
      // If we remove it synchronously we see a flash of the content video before the ad starts playing.
      setTimeout(function () {
        dom.removeClass(player.el(), 'vjs-vast-ad-loading');
      }, 100);
    }
  }

  function cancelAds() {
    player.trigger('vast.adsCancel');
    adsCanceled = true;
  }

  function playPrerollAd(callback) {
    async.waterfall([getVastResponse, playAd], callback);
  }

  function getVastResponse(callback) {
    vast.getVASTResponse(settings.adTagUrl ? settings.adTagUrl() : settings.adTagXML, callback);
  }

  function playAd(vastResponse, callback) {
    //TODO: Find a better way to stop the play. The 'playPrerollWaterfall' ends in an inconsistent situation
    //If the state is not 'preroll?' it means the ads were canceled therefore, we break the waterfall
    if (adsCanceled) {
      return;
    }

    var adIntegrator = isVPAID(vastResponse) ? new VPAIDIntegrator(player, settings) : new VASTIntegrator(player);
    var adFinished = false;

    playerUtils.once(player, ['vast.adStart', 'vast.adsCancel'], function (evt) {
      if (evt.type === 'vast.adStart') {
        addAdsLabel();
      }
    });

    playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel'], removeAdsLabel);

    if (utilities.isIDevice()) {
      preventManualProgress();
    }

    player.vast.adUnit = adIntegrator.playAd(vastResponse, callback);

    /*** Local functions ****/
    function addAdsLabel() {
      if (adFinished || player.controlBar.getChild('AdsLabel')) {
        return;
      }

      player.controlBar.addChild('AdsLabel');
    }

    function removeAdsLabel() {
      player.controlBar.removeChild('AdsLabel');
      adFinished = true;
    }

    function preventManualProgress() {
      //IOS video clock is very unreliable and we need a 3 seconds threshold to ensure that the user forwarded/rewound the ad
      var PROGRESS_THRESHOLD = 3;
      var previousTime = 0;
      var skipad_attempts = 0;

      player.on('timeupdate', adTimeupdateHandler);
      playerUtils.once(player, ['vast.adEnd', 'vast.adsCancel', 'vast.adError'], stopPreventManualProgress);

      /*** Local functions ***/
      function adTimeupdateHandler() {
        var currentTime = player.currentTime();
        var progressDelta = Math.abs(currentTime - previousTime);

        if (progressDelta > PROGRESS_THRESHOLD) {
          skipad_attempts += 1;
          if (skipad_attempts >= 2) {
            player.pause();
          }
          player.currentTime(previousTime);
        } else {
          previousTime = currentTime;
        }
      }

      function stopPreventManualProgress() {
        player.off('timeupdate', adTimeupdateHandler);
      }
    }
  }

  function trackAdError(error, vastResponse) {
    player.trigger({ type: 'vast.adError', error: error });
    cancelAds();
    if (console && console.log) {
      console.log('AD ERROR:', error.message, error, vastResponse);
    }
  }

  function isVPAID(vastResponse) {
    var i, len;
    var mediaFiles = vastResponse.mediaFiles;
    for (i = 0, len = mediaFiles.length; i < len; i++) {
      if (vastUtil.isVPAID(mediaFiles[i])) {
        return true;
      }
    }
    return false;
  }
};

},{"../ads/vast/VASTClient":19,"../ads/vast/VASTError":20,"../ads/vast/VASTIntegrator":21,"../ads/vast/vastUtil":27,"../ads/vpaid/VPAIDIntegrator":31,"../utils/async":37,"../utils/dom":38,"../utils/playerUtils":40,"../utils/utilityFunctions":42}],37:[function(require,module,exports){
'use strict';

//Small subset of async

var utilities = require('./utilityFunctions');

var async = {};

async.setImmediate = function (fn) {
  setTimeout(fn, 0);
};

async.iterator = function (tasks) {
  var makeCallback = function makeCallback(index) {
    var fn = function fn() {
      if (tasks.length) {
        tasks[index].apply(null, arguments);
      }
      return fn.next();
    };
    fn.next = function () {
      return index < tasks.length - 1 ? makeCallback(index + 1) : null;
    };
    return fn;
  };
  return makeCallback(0);
};

async.waterfall = function (tasks, callback) {
  callback = callback || function () {};
  if (!utilities.isArray(tasks)) {
    var err = new Error('First argument to waterfall must be an array of functions');
    return callback(err);
  }
  if (!tasks.length) {
    return callback();
  }
  var wrapIterator = function wrapIterator(iterator) {
    return function (err) {
      if (err) {
        callback.apply(null, arguments);
        callback = function callback() {};
      } else {
        var args = Array.prototype.slice.call(arguments, 1);
        var next = iterator.next();
        if (next) {
          args.push(wrapIterator(next));
        } else {
          args.push(callback);
        }
        async.setImmediate(function () {
          iterator.apply(null, args);
        });
      }
    };
  };
  wrapIterator(async.iterator(tasks))();
};

async.when = function (condition, callback) {
  if (!utilities.isFunction(callback)) {
    throw new Error("async.when error: missing callback argument");
  }

  var isAllowed = utilities.isFunction(condition) ? condition : function () {
    return !!condition;
  };

  return function () {
    var args = utilities.arrayLikeObjToArray(arguments);
    var next = args.pop();

    if (isAllowed.apply(null, args)) {
      return callback.apply(this, arguments);
    }

    args.unshift(null);
    return next.apply(null, args);
  };
};

module.exports = async;

},{"./utilityFunctions":42}],38:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

var dom = {};

dom.isVisible = function isVisible(el) {
  var style = window.getComputedStyle(el);
  return style.visibility !== 'hidden';
};

dom.isHidden = function isHidden(el) {
  var style = window.getComputedStyle(el);
  return style.display === 'none';
};

dom.isShown = function isShown(el) {
  return !dom.isHidden(el);
};

dom.hide = function hide(el) {
  el.__prev_style_display_ = el.style.display;
  el.style.display = 'none';
};

dom.show = function show(el) {
  if (dom.isHidden(el)) {
    el.style.display = el.__prev_style_display_;
  }
  el.__prev_style_display_ = undefined;
};

dom.hasClass = function hasClass(el, cssClass) {
  var classes, i, len;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.contains(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    cssClass = cssClass || '';

    for (i = 0, len = classes.length; i < len; i += 1) {
      if (classes[i] === cssClass) {
        return true;
      }
    }
  }
  return false;
};

dom.addClass = function (el, cssClass) {
  var classes;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.add(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    if (utilities.isString(cssClass) && utilities.isNotEmptyString(cssClass.replace(/\s+/, ''))) {
      classes.push(cssClass);
      el.setAttribute('class', classes.join(' '));
    }
  }
};

dom.removeClass = function (el, cssClass) {
  var classes;

  if (utilities.isNotEmptyString(cssClass)) {
    if (el.classList) {
      return el.classList.remove(cssClass);
    }

    classes = utilities.isString(el.getAttribute('class')) ? el.getAttribute('class').split(/\s+/) : [];
    var newClasses = [];
    var i, len;
    if (utilities.isString(cssClass) && utilities.isNotEmptyString(cssClass.replace(/\s+/, ''))) {

      for (i = 0, len = classes.length; i < len; i += 1) {
        if (cssClass !== classes[i]) {
          newClasses.push(classes[i]);
        }
      }
      el.setAttribute('class', newClasses.join(' '));
    }
  }
};

dom.addEventListener = function addEventListener(el, type, handler) {
  if (utilities.isArray(el)) {
    utilities.forEach(el, function (e) {
      dom.addEventListener(e, type, handler);
    });
    return;
  }

  if (utilities.isArray(type)) {
    utilities.forEach(type, function (t) {
      dom.addEventListener(el, t, handler);
    });
    return;
  }

  if (el.addEventListener) {
    el.addEventListener(type, handler, false);
  } else if (el.attachEvent) {
    // WARNING!!! this is a very naive implementation !
    // the event object that should be passed to the handler
    // would not be there for IE8
    // we should use "window.event" and then "event.srcElement"
    // instead of "event.target"
    el.attachEvent("on" + type, handler);
  }
};

dom.removeEventListener = function removeEventListener(el, type, handler) {
  if (utilities.isArray(el)) {
    utilities.forEach(el, function (e) {
      dom.removeEventListener(e, type, handler);
    });
    return;
  }

  if (utilities.isArray(type)) {
    utilities.forEach(type, function (t) {
      dom.removeEventListener(el, t, handler);
    });
    return;
  }

  if (el.removeEventListener) {
    el.removeEventListener(type, handler, false);
  } else if (el.detachEvent) {
    el.detachEvent("on" + type, handler);
  } else {
    el["on" + type] = null;
  }
};

dom.dispatchEvent = function dispatchEvent(el, event) {
  if (el.dispatchEvent) {
    el.dispatchEvent(event);
  } else {
    el.fireEvent("on" + event.eventType, event);
  }
};

dom.isDescendant = function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

dom.getTextContent = function getTextContent(el) {
  return el.textContent || el.text;
};

dom.prependChild = function prependChild(parent, child) {
  if (child.parentNode) {
    child.parentNode.removeChild(child);
  }
  return parent.insertBefore(child, parent.firstChild);
};

dom.remove = function removeNode(node) {
  if (node && node.parentNode) {
    node.parentNode.removeChild(node);
  }
};

dom.isDomElement = function isDomElement(o) {
  return o instanceof Element;
};

dom.click = function (el, handler) {
  dom.addEventListener(el, 'click', handler);
};

dom.once = function (el, type, handler) {
  function handlerWrap() {
    handler.apply(null, arguments);
    dom.removeEventListener(el, type, handlerWrap);
  }

  dom.addEventListener(el, type, handlerWrap);
};

//Note: there is no getBoundingClientRect on iPad so we need a fallback
dom.getDimension = function getDimension(element) {
  var rect;

  //On IE9 and below getBoundingClientRect does not work consistently
  if (!utilities.isOldIE() && element.getBoundingClientRect) {
    rect = element.getBoundingClientRect();
    return {
      width: rect.width,
      height: rect.height
    };
  }

  return {
    width: element.offsetWidth,
    height: element.offsetHeight
  };
};

module.exports = dom;

},{"./utilityFunctions":42}],39:[function(require,module,exports){
'use strict';

var urlUtils = require('./urlUtils');
var utilities = require('./utilityFunctions');

function HttpRequestError(message) {
  this.message = 'HttpRequest Error: ' + (message || '');
}
HttpRequestError.prototype = new Error();
HttpRequestError.prototype.name = "HttpRequest Error";

function HttpRequest(createXhr) {
  if (!utilities.isFunction(createXhr)) {
    throw new HttpRequestError('Missing XMLHttpRequest factory method');
  }

  this.createXhr = createXhr;
}

HttpRequest.prototype.run = function (method, url, callback, options) {
  sanityCheck(url, callback, options);
  var timeout, timeoutId;
  var xhr = this.createXhr();
  options = options || {};
  timeout = utilities.isNumber(options.timeout) ? options.timeout : 0;

  xhr.open(method, urlUtils.urlParts(url).href, true);

  if (options.headers) {
    setHeaders(xhr, options.headers);
  }

  if (options.withCredentials) {
    xhr.withCredentials = true;
  }

  xhr.onload = function () {
    var statusText, response, status;

    /**
     * The only way to do a secure request on IE8 and IE9 is with the XDomainRequest object. Unfortunately, microsoft is
     * so nice that decided that the status property and the 'getAllResponseHeaders' method where not needed so we have to
     * fake them. If the request gets done with an XDomainRequest instance, we will assume that there are no headers and
     * the status will always be 200. If you don't like it, DO NOT USE ANCIENT BROWSERS!!!
     *
     * For mor info go to: https://msdn.microsoft.com/en-us/library/cc288060(v=vs.85).aspx
     */
    if (!xhr.getAllResponseHeaders) {
      xhr.getAllResponseHeaders = function () {
        return null;
      };
    }

    if (!xhr.status) {
      xhr.status = 200;
    }

    if (utilities.isDefined(timeoutId)) {
      clearTimeout(timeoutId);
      timeoutId = undefined;
    }

    statusText = xhr.statusText || '';

    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
    // response/responseType properties were introduced in XHR Level2 spec (supported by IE10)
    response = 'response' in xhr ? xhr.response : xhr.responseText;

    // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
    status = xhr.status === 1223 ? 204 : xhr.status;

    callback(status, response, xhr.getAllResponseHeaders(), statusText);
  };

  xhr.onerror = requestError;
  xhr.onabort = requestError;

  xhr.send();

  if (timeout > 0) {
    timeoutId = setTimeout(function () {
      xhr && xhr.abort();
    }, timeout);
  }

  function sanityCheck(url, callback, options) {
    if (!utilities.isString(url) || utilities.isEmptyString(url)) {
      throw new HttpRequestError("Invalid url '" + url + "'");
    }

    if (!utilities.isFunction(callback)) {
      throw new HttpRequestError("Invalid handler '" + callback + "' for the http request");
    }

    if (utilities.isDefined(options) && !utilities.isObject(options)) {
      throw new HttpRequestError("Invalid options map '" + options + "'");
    }
  }

  function setHeaders(xhr, headers) {
    utilities.forEach(headers, function (value, key) {
      if (utilities.isDefined(value)) {
        xhr.setRequestHeader(key, value);
      }
    });
  }

  function requestError() {
    callback(-1, null, null, '');
  }
};

HttpRequest.prototype.get = function (url, callback, options) {
  this.run('GET', url, processResponse, options);

  function processResponse(status, response, headersString, statusText) {
    if (isSuccess(status)) {
      callback(null, response, status, headersString, statusText);
    } else {
      callback(new HttpRequestError(statusText), response, status, headersString, statusText);
    }
  }

  function isSuccess(status) {
    return 200 <= status && status < 300;
  }
};

function createXhr() {
  var xhr = new XMLHttpRequest();
  if (!("withCredentials" in xhr)) {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
  }
  return xhr;
}

var http = new HttpRequest(createXhr);

module.exports = {
  http: http,
  HttpRequest: HttpRequest,
  HttpRequestError: HttpRequestError,
  createXhr: createXhr
};

},{"./urlUtils":41,"./utilityFunctions":42}],40:[function(require,module,exports){
'use strict';

var dom = require('./dom');
var utilities = require('./utilityFunctions');

var playerUtils = {};

/**
 * Returns an object that captures the portions of player state relevant to
 * video playback. The result of this function can be passed to
 * restorePlayerSnapshot with a player to return the player to the state it
 * was in when this function was invoked.
 * @param {object} player The videojs player object
 */
playerUtils.getPlayerSnapshot = function getPlayerSnapshot(player) {
  var tech = player.el().querySelector('.vjs-tech');

  var snapshot = {
    ended: player.ended(),
    src: player.currentSrc(),
    currentTime: player.currentTime(),
    type: player.currentType(),
    playing: !player.paused(),
    suppressedTracks: getSuppressedTracks(player)
  };

  if (tech) {
    snapshot.nativePoster = tech.poster;
    snapshot.style = tech.getAttribute('style');
  }
  return snapshot;

  /**** Local Functions ****/
  function getSuppressedTracks(player) {
    var tracks = player.remoteTextTracks ? player.remoteTextTracks() : [];

    if (tracks && utilities.isArray(tracks.tracks_)) {
      tracks = tracks.tracks_;
    }

    if (!utilities.isArray(tracks)) {
      tracks = [];
    }

    var suppressedTracks = [];
    tracks.forEach(function (track) {
      suppressedTracks.push({
        track: track,
        mode: track.mode
      });
      track.mode = 'disabled';
    });

    return suppressedTracks;
  }
};

/**
 * Attempts to modify the specified player so that its state is equivalent to
 * the state of the snapshot.
 * @param {object} snapshot - the player state to apply
 */
playerUtils.restorePlayerSnapshot = function restorePlayerSnapshot(player, snapshot) {
  var tech = player.el().querySelector('.vjs-tech');
  var attempts = 20; // the number of remaining attempts to restore the snapshot

  if (snapshot.nativePoster) {
    tech.poster = snapshot.nativePoster;
  }

  if ('style' in snapshot) {
    // overwrite all css style properties to restore state precisely
    tech.setAttribute('style', snapshot.style || '');
  }

  if (hasSrcChanged(player, snapshot)) {

    // on ios7, fiddling with textTracks too early will cause safari to crash
    player.one('contentloadedmetadata', restoreTracks);

    player.one('canplay', tryToResume);
    ensureCanplayEvtGetsFired();

    // if the src changed for ad playback, reset it
    player.src({ src: snapshot.src, type: snapshot.type });

    // safari requires a call to `load` to pick up a changed source
    player.load();
  } else {
    restoreTracks();

    if (snapshot.playing) {
      player.play();
    }
  }

  /*** Local Functions ***/

  /**
   * Sometimes firefox does not trigger the 'canplay' evt.
   * This code ensure that it always gets triggered triggered.
   */
  function ensureCanplayEvtGetsFired() {
    var timeoutId = setTimeout(function () {
      player.trigger('canplay');
    }, 1000);

    player.one('canplay', function () {
      clearTimeout(timeoutId);
    });
  }

  /**
   * Determine whether the player needs to be restored to its state
   * before ad playback began. With a custom ad display or burned-in
   * ads, the content player state hasn't been modified and so no
   * restoration is required
   */
  function hasSrcChanged(player, snapshot) {
    if (player.src()) {
      return player.src() !== snapshot.src;
    }
    // the player was configured through source element children
    return player.currentSrc() !== snapshot.src;
  }

  function restoreTracks() {
    var suppressedTracks = snapshot.suppressedTracks;
    suppressedTracks.forEach(function (trackSnapshot) {
      trackSnapshot.track.mode = trackSnapshot.mode;
    });
  }

  /**
   * Determine if the video element has loaded enough of the snapshot source
   * to be ready to apply the rest of the state
   */
  function tryToResume() {
    if (playerUtils.isReadyToResume(tech)) {
      // if some period of the video is seekable, resume playback
      return resume();
    }

    // delay a bit and then check again unless we're out of attempts
    if (attempts--) {
      setTimeout(tryToResume, 50);
    } else {
      (function () {
        try {
          resume();
        } catch (e) {
          videojs.log.warn('Failed to resume the content after an advertisement', e);
        }
      })();
    }

    /*** Local functions ***/
    function resume() {
      player.currentTime(snapshot.currentTime);

      if (snapshot.playing) {
        player.play();
      }
    }
  }
};

playerUtils.isReadyToResume = function (tech) {
  if (tech.readyState > 1) {
    // some browsers and media aren't "seekable".
    // readyState greater than 1 allows for seeking without exceptions
    return true;
  }

  if (tech.seekable === undefined) {
    // if the tech doesn't expose the seekable time ranges, try to
    // resume playback immediately
    return true;
  }

  if (tech.seekable.length > 0) {
    // if some period of the video is seekable, resume playback
    return true;
  }

  return false;
};

/**
 * This function prepares the player to display ads.
 * Adding convenience events like the 'vast.firsPlay' that gets fired when the video is first played
 * and ads the blackPoster to the player to prevent content from being displayed before the preroll ad.
 *
 * @param player
 */
playerUtils.prepareForAds = function (player) {
  var blackPoster = player.addChild('blackPoster');
  var _firstPlay = true;
  var volumeSnapshot;

  monkeyPatchPlayerApi();

  player.on('play', tryToTriggerFirstPlay);
  player.on('vast.reset', resetFirstPlay); //Every time we change the sources we reset the first play.
  player.on('vast.firstPlay', restoreContentVolume);
  player.on('error', hideBlackPoster); //If there is an error in the player we remove the blackposter to show the err msg
  player.on('vast.adStart', hideBlackPoster);
  player.on('vast.adsCancel', hideBlackPoster);
  player.on('vast.adError', hideBlackPoster);
  player.on('vast.adStart', addStyles);
  player.on('vast.adEnd', removeStyles);
  player.on('vast.adsCancel', removeStyles);

  /*** Local Functions ***/

  /**
   What this function does is ugly and horrible and I should think twice before calling myself a good developer. With that said,
   it is the best solution I could find to mute the video until the 'play' event happens (on mobile devices) and the plugin can decide whether
   to play the ad or not.
    We also need this monkeypatch to be able to pause and resume an ad using the player's API
    If you have a better solution please do tell me.
   */
  function monkeyPatchPlayerApi() {

    /**
     * Monkey patch needed to handle firstPlay and resume of playing ad.
     *
     * @param callOrigPlay necessary flag to prevent infinite loop when you are restoring a VAST ad.
     * @returns {player}
     */
    var origPlay = player.play;
    player.play = function (callOrigPlay) {
      var that = this;

      if (isFirstPlay()) {
        firstPlay();
      } else {
        resume(callOrigPlay);
      }

      return this;

      /*** local functions ***/
      function firstPlay() {
        if (!utilities.isIPhone()) {
          volumeSnapshot = saveVolumeSnapshot();
          player.muted(true);
        }

        origPlay.apply(that, arguments);
      }

      function resume(callOrigPlay) {
        if (isAdPlaying() && !callOrigPlay) {
          player.vast.adUnit.resumeAd();
        } else {
          origPlay.apply(that, arguments);
        }
      }
    };

    /**
     * Needed monkey patch to handle pause of playing ad.
     *
     * @param callOrigPlay necessary flag to prevent infinite loop when you are pausing a VAST ad.
     * @returns {player}
     */
    var origPause = player.pause;
    player.pause = function (callOrigPause) {
      if (isAdPlaying() && !callOrigPause) {
        player.vast.adUnit.pauseAd();
      } else {
        origPause.apply(this, arguments);
      }
      return this;
    };

    /**
     * Needed monkey patch to handle paused state of the player when ads are playing.
     *
     * @param callOrigPlay necessary flag to prevent infinite loop when you are pausing a VAST ad.
     * @returns {player}
     */
    var origPaused = player.paused;
    player.paused = function (callOrigPaused) {
      if (isAdPlaying() && !callOrigPaused) {
        return player.vast.adUnit.isPaused();
      }
      return origPaused.apply(this, arguments);
    };
  }

  function isAdPlaying() {
    return player.vast && player.vast.adUnit;
  }

  function tryToTriggerFirstPlay() {
    if (isFirstPlay()) {
      _firstPlay = false;
      player.trigger('vast.firstPlay');
    }
  }

  function resetFirstPlay() {
    _firstPlay = true;
    blackPoster.show();
    restoreContentVolume();
  }

  function isFirstPlay() {
    return _firstPlay;
  }

  function saveVolumeSnapshot() {
    return {
      muted: player.muted(),
      volume: player.volume()
    };
  }

  function restoreContentVolume() {
    if (volumeSnapshot) {
      player.currentTime(0);
      restoreVolumeSnapshot(volumeSnapshot);
      volumeSnapshot = null;
    }
  }

  function restoreVolumeSnapshot(snapshot) {
    if (utilities.isObject(snapshot)) {
      player.volume(snapshot.volume);
      player.muted(snapshot.muted);
    }
  }

  function hideBlackPoster() {
    if (!dom.hasClass(blackPoster.el(), 'vjs-hidden')) {
      blackPoster.hide();
    }
  }

  function addStyles() {
    dom.addClass(player.el(), 'vjs-ad-playing');
  }

  function removeStyles() {
    dom.removeClass(player.el(), 'vjs-ad-playing');
  }
};

/**
 * Remove the poster attribute from the video element tech, if present. When
 * reusing a video element for multiple videos, the poster image will briefly
 * reappear while the new source loads. Removing the attribute ahead of time
 * prevents the poster from showing up between videos.
 * @param {object} player The videojs player object
 */
playerUtils.removeNativePoster = function (player) {
  var tech = player.el().querySelector('.vjs-tech');
  if (tech) {
    tech.removeAttribute('poster');
  }
};

/**
 * Helper function to listen to many events until one of them gets fired, then we
 * execute the handler and unsubscribe all the event listeners;
 *
 * @param player specific player from where to listen for the events
 * @param events array of events
 * @param handler function to execute once one of the events fires
 */
playerUtils.once = function once(player, events, handler) {
  function listener() {
    handler.apply(null, arguments);

    events.forEach(function (event) {
      player.off(event, listener);
    });
  }

  events.forEach(function (event) {
    player.on(event, listener);
  });
};

module.exports = playerUtils;

},{"./dom":38,"./utilityFunctions":42}],41:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

/**
 *
 * IMPORTANT NOTE: This function comes from angularJs and was originally called urlResolve
 *                 you can take a look at the original code here https://github.com/angular/angular.js/blob/master/src/ng/urlUtils.js
 *
 * Implementation Notes for non-IE browsers
 * ----------------------------------------
 * Assigning a URL to the href property of an anchor DOM node, even one attached to the DOM,
 * results both in the normalizing and parsing of the URL.  Normalizing means that a relative
 * URL will be resolved into an absolute URL in the context of the application document.
 * Parsing means that the anchor node's host, hostname, protocol, port, pathname and related
 * properties are all populated to reflect the normalized URL.  This approach has wide
 * compatibility - Safari 1+, Mozilla 1+, Opera 7+,e etc.  See
 * http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *
 * Implementation Notes for IE
 * ---------------------------
 * IE >= 8 and <= 10 normalizes the URL when assigned to the anchor node similar to the other
 * browsers.  However, the parsed components will not be set if the URL assigned did not specify
 * them.  (e.g. if you assign a.href = "foo", then a.protocol, a.host, etc. will be empty.)  We
 * work around that by performing the parsing in a 2nd step by taking a previously normalized
 * URL (e.g. by assigning to a.href) and assigning it a.href again.  This correctly populates the
 * properties such as protocol, hostname, port, etc.
 *
 * IE7 does not normalize the URL when assigned to an anchor node.  (Apparently, it does, if one
 * uses the inner HTML approach to assign the URL as part of an HTML snippet -
 * http://stackoverflow.com/a/472729)  However, setting img[src] does normalize the URL.
 * Unfortunately, setting img[src] to something like "javascript:foo" on IE throws an exception.
 * Since the primary usage for normalizing URLs is to sanitize such URLs, we can't use that
 * method and IE < 8 is unsupported.
 *
 * References:
 *   http://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement
 *   http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *   http://url.spec.whatwg.org/#urlutils
 *   https://github.com/angular/angular.js/pull/2902
 *   http://james.padolsey.com/javascript/parsing-urls-with-the-dom/
 *
 * @kind function
 * @param {string} url The URL to be parsed.
 * @description Normalizes and parses a URL.
 * @returns {object} Returns the normalized URL as a dictionary.
 *
 *   | member name   | Description    |
 *   |---------------|----------------|
 *   | href          | A normalized version of the provided URL if it was not an absolute URL |
 *   | protocol      | The protocol including the trailing colon                              |
 *   | host          | The host and port (if the port is non-default) of the normalizedUrl    |
 *   | search        | The search params, minus the question mark                             |
 *   | hash          | The hash string, minus the hash symbol
 *   | hostname      | The hostname
 *   | port          | The port, without ":"
 *   | pathname      | The pathname, beginning with "/"
 *
 */

var urlParsingNode = document.createElement("a");
/**
 * documentMode is an IE-only property
 * http://msdn.microsoft.com/en-us/library/ie/cc196988(v=vs.85).aspx
 */
var msie = document.documentMode;

function urlParts(url) {
  var href = url;

  if (msie) {
    // Normalize before parse.  Refer Implementation Notes on why this is
    // done in two steps on IE.
    urlParsingNode.setAttribute("href", href);
    href = urlParsingNode.href;
  }

  urlParsingNode.setAttribute('href', href);

  // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
  return {
    href: urlParsingNode.href,
    protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
    host: urlParsingNode.host,
    search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
    hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
    hostname: urlParsingNode.hostname,
    port: utilities.isNotEmptyString(urlParsingNode.port) ? urlParsingNode.port : 80,
    pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
  };
}

/**
 * This function accepts a query string (search part of a url) and returns a dictionary with
 * the different key value pairs
 * @param {string} qs queryString
 */
function queryStringToObj(qs, cond) {
  var pairs, qsObj;

  cond = utilities.isFunction(cond) ? cond : function () {
    return true;
  };

  qs = qs.trim().replace(/^\?/, '');
  pairs = qs.split('&');
  qsObj = {};

  utilities.forEach(pairs, function (pair) {
    var keyValue, key, value;
    if (pair !== '') {
      keyValue = pair.split('=');
      key = keyValue[0];
      value = keyValue[1];
      if (cond(key, value)) {
        qsObj[key] = value;
      }
    }
  });

  return qsObj;
}

/**
 * This function accepts an object and serializes it into a query string without the leading '?'
 * @param obj
 * @returns {string}
 */
function objToQueryString(obj) {
  var pairs = [];
  utilities.forEach(obj, function (value, key) {
    pairs.push(key + '=' + value);
  });
  return pairs.join('&');
}

module.exports = {
  urlParts: urlParts,
  queryStringToObj: queryStringToObj,
  objToQueryString: objToQueryString
};

},{"./utilityFunctions":42}],42:[function(require,module,exports){
/*jshint unused:false */
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var NODE_TYPE_ELEMENT = 1;
var SNAKE_CASE_REGEXP = /[A-Z]/g;
var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i;
/*jslint maxlen: 500 */
var ISO8086_REGEXP = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;

function noop() {}

function isNull(o) {
  return o === null;
}

function isDefined(o) {
  return o !== undefined;
}

function isUndefined(o) {
  return o === undefined;
}

function isObject(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

function isFunction(str) {
  return typeof str === 'function';
}

function isNumber(num) {
  return typeof num === 'number';
}

function isWindow(obj) {
  return utilities.isObject(obj) && obj.window === obj;
}

function isArray(array) {
  return Object.prototype.toString.call(array) === '[object Array]';
}

function isArrayLike(obj) {
  if (obj === null || utilities.isWindow(obj) || utilities.isFunction(obj) || utilities.isUndefined(obj)) {
    return false;
  }

  var length = obj.length;

  if (obj.nodeType === NODE_TYPE_ELEMENT && length) {
    return true;
  }

  return utilities.isString(obj) || utilities.isArray(obj) || length === 0 || typeof length === 'number' && length > 0 && length - 1 in obj;
}

function isString(str) {
  return typeof str === 'string';
}

function isEmptyString(str) {
  return utilities.isString(str) && str.length === 0;
}

function isNotEmptyString(str) {
  return utilities.isString(str) && str.length !== 0;
}

function arrayLikeObjToArray(args) {
  return Array.prototype.slice.call(args);
}

function forEach(obj, iterator, context) {
  var key, length;
  if (obj) {
    if (isFunction(obj)) {
      for (key in obj) {
        // Need to check if hasOwnProperty exists,
        // as on IE8 the result of querySelectorAll is an object without a hasOwnProperty function
        if (key !== 'prototype' && key !== 'length' && key !== 'name' && (!obj.hasOwnProperty || obj.hasOwnProperty(key))) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (isArray(obj)) {
      var isPrimitive = (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object';
      for (key = 0, length = obj.length; key < length; key++) {
        if (isPrimitive || key in obj) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    } else if (obj.forEach && obj.forEach !== forEach) {
      obj.forEach(iterator, context, obj);
    } else {
      for (key in obj) {
        if (obj.hasOwnProperty(key)) {
          iterator.call(context, obj[key], key, obj);
        }
      }
    }
  }
  return obj;
}

function snake_case(name, separator) {
  separator = separator || '_';
  return name.replace(SNAKE_CASE_REGEXP, function (letter, pos) {
    return (pos ? separator : '') + letter.toLowerCase();
  });
}

function isValidEmail(email) {
  if (!utilities.isString(email)) {
    return false;
  }

  return EMAIL_REGEXP.test(email.trim());
}

function extend(obj) {
  var arg, i, k;
  for (i = 1; i < arguments.length; i++) {
    arg = arguments[i];
    for (k in arg) {
      if (arg.hasOwnProperty(k)) {
        if (isObject(obj[k]) && !isNull(obj[k]) && isObject(arg[k])) {
          obj[k] = extend({}, obj[k], arg[k]);
        } else {
          obj[k] = arg[k];
        }
      }
    }
  }
  return obj;
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function decapitalize(s) {
  return s.charAt(0).toLowerCase() + s.slice(1);
}

/**
 * This method works the same way array.prototype.map works but if the transformer returns undefine, then
 * it won't be added to the transformed Array.
 */
function transformArray(array, transformer) {
  var transformedArray = [];

  array.forEach(function (item, index) {
    var transformedItem = transformer(item, index);
    if (utilities.isDefined(transformedItem)) {
      transformedArray.push(transformedItem);
    }
  });

  return transformedArray;
}

function toFixedDigits(num, digits) {
  var formattedNum = num + '';
  digits = utilities.isNumber(digits) ? digits : 0;
  num = utilities.isNumber(num) ? num : parseInt(num, 10);
  if (utilities.isNumber(num) && !isNaN(num)) {
    formattedNum = num + '';
    while (formattedNum.length < digits) {
      formattedNum = '0' + formattedNum;
    }
    return formattedNum;
  }
  return NaN + '';
}

function throttle(callback, delay) {
  var previousCall = new Date().getTime() - (delay + 1);
  return function () {
    var time = new Date().getTime();
    if (time - previousCall >= delay) {
      previousCall = time;
      callback.apply(this, arguments);
    }
  };
}

function debounce(callback, wait) {
  var timeoutId;

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function () {
      callback.apply(this, arguments);
      timeoutId = undefined;
    }, wait);
  };
}

// a function designed to blow up the stack in a naive way
// but it is ok for videoJs children components
function treeSearch(root, getChildren, found) {
  var children = getChildren(root);
  for (var i = 0; i < children.length; i++) {
    if (found(children[i])) {
      return children[i];
    } else {
      var el = treeSearch(children[i], getChildren, found);
      if (el) {
        return el;
      }
    }
  }
}

function echoFn(val) {
  return function () {
    return val;
  };
}

//Note: Supported formats come from http://www.w3.org/TR/NOTE-datetime
// and the iso8601 regex comes from http://www.pelagodesign.com/blog/2009/05/20/iso-8601-date-validation-that-doesnt-suck/
function isISO8601(value) {
  if (utilities.isNumber(value)) {
    value = value + ''; //we make sure that we are working with strings
  }

  if (!utilities.isString(value)) {
    return false;
  }

  return ISO8086_REGEXP.test(value.trim());
}

/**
 * Checks if the Browser is IE9 and below
 * @returns {boolean}
 */
function isOldIE() {
  var version = utilities.getInternetExplorerVersion(navigator);
  if (version === -1) {
    return false;
  }

  return version < 10;
}

/**
 * Returns the version of Internet Explorer or a -1 (indicating the use of another browser).
 * Source: https://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
 * @returns {number} the version of Internet Explorer or a -1 (indicating the use of another browser).
 */
function getInternetExplorerVersion(navigator) {
  var rv = -1;

  if (navigator.appName == 'Microsoft Internet Explorer') {
    var ua = navigator.userAgent;
    var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    var res = re.exec(ua);
    if (res !== null) {
      rv = parseFloat(res[1]);
    }
  }

  return rv;
}

/*** Mobile Utility functions ***/
function isIDevice() {
  return (/iP(hone|ad)/.test(utilities._UA)
  );
}

function isMobile() {
  return (/iP(hone|ad|od)|Android|Windows Phone/.test(utilities._UA)
  );
}

function isIPhone() {
  return (/iP(hone|od)/.test(utilities._UA)
  );
}

function isAndroid() {
  return (/Android/.test(utilities._UA)
  );
}

var utilities = {
  _UA: navigator.userAgent,
  noop: noop,
  isNull: isNull,
  isDefined: isDefined,
  isUndefined: isUndefined,
  isObject: isObject,
  isFunction: isFunction,
  isNumber: isNumber,
  isWindow: isWindow,
  isArray: isArray,
  isArrayLike: isArrayLike,
  isString: isString,
  isEmptyString: isEmptyString,
  isNotEmptyString: isNotEmptyString,
  arrayLikeObjToArray: arrayLikeObjToArray,
  forEach: forEach,
  snake_case: snake_case,
  isValidEmail: isValidEmail,
  extend: extend,
  capitalize: capitalize,
  decapitalize: decapitalize,
  transformArray: transformArray,
  toFixedDigits: toFixedDigits,
  throttle: throttle,
  debounce: debounce,
  treeSearch: treeSearch,
  echoFn: echoFn,
  isISO8601: isISO8601,
  isOldIE: isOldIE,
  getInternetExplorerVersion: getInternetExplorerVersion,
  isIDevice: isIDevice,
  isMobile: isMobile,
  isIPhone: isIPhone,
  isAndroid: isAndroid
};

module.exports = utilities;

},{}],43:[function(require,module,exports){
'use strict';

var utilities = require('./utilityFunctions');

var xml = {};

xml.strToXMLDoc = function strToXMLDoc(stringContainingXMLSource) {
  //IE 8
  if (typeof window.DOMParser === 'undefined') {
    var xmlDocument = new ActiveXObject('Microsoft.XMLDOM');
    xmlDocument.async = false;
    xmlDocument.loadXML(stringContainingXMLSource);
    return xmlDocument;
  }

  return parseString(stringContainingXMLSource);

  function parseString(stringContainingXMLSource) {
    var parser = new DOMParser();
    var parsedDocument;

    //Note: This try catch is to deal with the fact that on IE parser.parseFromString does throw an error but the rest of the browsers don't.
    try {
      parsedDocument = parser.parseFromString(stringContainingXMLSource, "application/xml");

      if (isParseError(parsedDocument) || utilities.isEmptyString(stringContainingXMLSource)) {
        throw new Error();
      }
    } catch (e) {
      throw new Error("xml.strToXMLDOC: Error parsing the string: '" + stringContainingXMLSource + "'");
    }

    return parsedDocument;
  }

  function isParseError(parsedDocument) {
    try {
      // parser and parsererrorNS could be cached on startup for efficiency
      var parser = new DOMParser(),
          erroneousParse = parser.parseFromString('INVALID', 'text/xml'),
          parsererrorNS = erroneousParse.getElementsByTagName("parsererror")[0].namespaceURI;

      if (parsererrorNS === 'http://www.w3.org/1999/xhtml') {
        // In PhantomJS the parseerror element doesn't seem to have a special namespace, so we are just guessing here :(
        return parsedDocument.getElementsByTagName("parsererror").length > 0;
      }

      return parsedDocument.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0;
    } catch (e) {
      //Note on IE parseString throws an error by itself and it will never reach this code. Because it will have failed before
    }
  }
};

xml.parseText = function parseText(sValue) {
  if (/^\s*$/.test(sValue)) {
    return null;
  }
  if (/^(?:true|false)$/i.test(sValue)) {
    return sValue.toLowerCase() === "true";
  }
  if (isFinite(sValue)) {
    return parseFloat(sValue);
  }
  if (utilities.isISO8601(sValue)) {
    return new Date(sValue);
  }
  return sValue.trim();
};

xml.JXONTree = function JXONTree(oXMLParent) {
  var parseText = xml.parseText;

  //The document object is an especial object that it may miss some functions or attrs depending on the browser.
  //To prevent this problem with create the JXONTree using the root childNode which is a fully fleshed node on all supported
  //browsers.
  if (oXMLParent.documentElement) {
    return new xml.JXONTree(oXMLParent.documentElement);
  }

  if (oXMLParent.hasChildNodes()) {
    var sCollectedTxt = "";
    for (var oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
      oNode = oXMLParent.childNodes.item(nItem);
      /*jshint bitwise: false*/
      if ((oNode.nodeType - 1 | 1) === 3) {
        sCollectedTxt += oNode.nodeType === 3 ? oNode.nodeValue.trim() : oNode.nodeValue;
      } else if (oNode.nodeType === 1 && !oNode.prefix) {
        sProp = utilities.decapitalize(oNode.nodeName);
        vContent = new xml.JXONTree(oNode);
        if (this.hasOwnProperty(sProp)) {
          if (this[sProp].constructor !== Array) {
            this[sProp] = [this[sProp]];
          }
          this[sProp].push(vContent);
        } else {
          this[sProp] = vContent;
        }
      }
    }
    if (sCollectedTxt) {
      this.keyValue = parseText(sCollectedTxt);
    }
  }

  //IE8 Stupid fix
  var hasAttr = typeof oXMLParent.hasAttributes === 'undefined' ? oXMLParent.attributes.length > 0 : oXMLParent.hasAttributes();
  if (hasAttr) {
    var oAttrib;
    for (var nAttrib = 0; nAttrib < oXMLParent.attributes.length; nAttrib++) {
      oAttrib = oXMLParent.attributes.item(nAttrib);
      this["@" + utilities.decapitalize(oAttrib.name)] = parseText(oAttrib.value.trim());
    }
  }
};

xml.JXONTree.prototype.attr = function (attr) {
  return this['@' + utilities.decapitalize(attr)];
};

xml.toJXONTree = function toJXONTree(xmlString) {
  var xmlDoc = xml.strToXMLDoc(xmlString);
  return new xml.JXONTree(xmlDoc);
};

/**
 * Helper function to extract the keyvalue of a JXONTree obj
 *
 * @param xmlObj {JXONTree}
 * return the key value or undefined;
 */
xml.keyValue = function getKeyValue(xmlObj) {
  if (xmlObj) {
    return xmlObj.keyValue;
  }
  return undefined;
};

xml.attr = function getAttrValue(xmlObj, attr) {
  if (xmlObj) {
    return xmlObj['@' + utilities.decapitalize(attr)];
  }
  return undefined;
};

xml.encode = function encodeXML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
};

xml.decode = function decodeXML(str) {
  return str.replace(/&apos;/g, "'").replace(/&quot;/g, '"').replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&');
};

module.exports = xml;

},{"./utilityFunctions":42}],44:[function(require,module,exports){
'use strict';

require('./plugin/components/ads-label_4');
require('./plugin/components/black-poster_4');

var videoJsVAST = require('./plugin/videojs.vast');

videojs.plugin('vastClient', videoJsVAST);

},{"./plugin/components/ads-label_4":33,"./plugin/components/black-poster_4":35,"./plugin/videojs.vast":36}]},{},[44])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlERkxBU0hDbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREZMQVNIQ2xpZW50L2pzL1ZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREZMQVNIQ2xpZW50L2pzL1ZQQUlERkxBU0hDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlERkxBU0hDbGllbnQvanMvanNGbGFzaEJyaWRnZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvVlBBSURGTEFTSENsaWVudC9qcy9qc0ZsYXNoQnJpZGdlUmVnaXN0cnkuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlERkxBU0hDbGllbnQvanMvcmVnaXN0cnkuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlERkxBU0hDbGllbnQvanMvdXRpbHMuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvc3Vic2NyaWJlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvVlBBSURIVE1MNUNsaWVudC9qcy91dGlscy5qcyIsInNyYy9qcy9hZHMvdmFzdC9BZC5qcyIsInNyYy9qcy9hZHMvdmFzdC9DcmVhdGl2ZS5qcyIsInNyYy9qcy9hZHMvdmFzdC9JbkxpbmUuanMiLCJzcmMvanMvYWRzL3Zhc3QvTGluZWFyLmpzIiwic3JjL2pzL2Fkcy92YXN0L01lZGlhRmlsZS5qcyIsInNyYy9qcy9hZHMvdmFzdC9UcmFja2luZ0V2ZW50LmpzIiwic3JjL2pzL2Fkcy92YXN0L1ZBU1RDbGllbnQuanMiLCJzcmMvanMvYWRzL3Zhc3QvVkFTVEVycm9yLmpzIiwic3JjL2pzL2Fkcy92YXN0L1ZBU1RJbnRlZ3JhdG9yLmpzIiwic3JjL2pzL2Fkcy92YXN0L1ZBU1RSZXNwb25zZS5qcyIsInNyYy9qcy9hZHMvdmFzdC9WQVNUVHJhY2tlci5qcyIsInNyYy9qcy9hZHMvdmFzdC9WaWRlb0NsaWNrcy5qcyIsInNyYy9qcy9hZHMvdmFzdC9XcmFwcGVyLmpzIiwic3JjL2pzL2Fkcy92YXN0L3BhcnNlcnMuanMiLCJzcmMvanMvYWRzL3Zhc3QvdmFzdFV0aWwuanMiLCJzcmMvanMvYWRzL3ZwYWlkL1ZQQUlEQWRVbml0V3JhcHBlci5qcyIsInNyYy9qcy9hZHMvdnBhaWQvVlBBSURGbGFzaFRlY2guanMiLCJzcmMvanMvYWRzL3ZwYWlkL1ZQQUlESFRNTDVUZWNoLmpzIiwic3JjL2pzL2Fkcy92cGFpZC9WUEFJREludGVncmF0b3IuanMiLCJzcmMvanMvcGx1Z2luL2NvbXBvbmVudHMvYWRzLWxhYmVsLmpzIiwic3JjL2pzL3BsdWdpbi9jb21wb25lbnRzL2Fkcy1sYWJlbF80LmpzIiwic3JjL2pzL3BsdWdpbi9jb21wb25lbnRzL2JsYWNrLXBvc3Rlci5qcyIsInNyYy9qcy9wbHVnaW4vY29tcG9uZW50cy9ibGFjay1wb3N0ZXJfNC5qcyIsInNyYy9qcy9wbHVnaW4vdmlkZW9qcy52YXN0LmpzIiwic3JjL2pzL3V0aWxzL2FzeW5jLmpzIiwic3JjL2pzL3V0aWxzL2RvbS5qcyIsInNyYy9qcy91dGlscy9odHRwLmpzIiwic3JjL2pzL3V0aWxzL3BsYXllclV0aWxzLmpzIiwic3JjL2pzL3V0aWxzL3VybFV0aWxzLmpzIiwic3JjL2pzL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMuanMiLCJzcmMvanMvdXRpbHMveG1sLmpzIiwic3JjL2pzL3ZpZGVvanNfNC52YXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7Ozs7OztJQUdhOzs7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UWIsT0FBTyxPQUFQLEdBQWlCLEdBQWpCOzs7QUNqSkE7O0FBRUEsUUFBUSxpQ0FBUjtBQUNBLFFBQVEsb0NBQVI7O0FBRUEsSUFBSSxjQUFjLFFBQVEsdUJBQVIsQ0FBZDs7QUFFSixRQUFRLE1BQVIsQ0FBZSxZQUFmLEVBQTZCLFdBQTdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuLy9zaW1wbGUgcmVwcmVzZW50YXRpb24gb2YgdGhlIEFQSVxuZXhwb3J0IGNsYXNzIElWUEFJREFkVW5pdCB7XG5cbiAgICAvL2FsbCBtZXRob2RzIGJlbG93XG4gICAgLy9hcmUgYXN5bmMgbWV0aG9kc1xuICAgIGhhbmRzaGFrZVZlcnNpb24ocGxheWVyVlBBSURWZXJzaW9uID0gJzIuMCcsIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuXG4gICAgLy9jcmVhdGl2ZURhdGEgaXMgYW4gb2JqZWN0IHRvIGJlIGNvbnNpc3RlbnQgd2l0aCBWUEFJREhUTUxcbiAgICBpbml0QWQgKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhID0ge0FkUGFyYW1ldGVyczonJ30sIGVudmlyb25tZW50VmFycyA9IHtmbGFzaFZhcnM6ICcnfSwgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgcmVzaXplQWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuXG4gICAgc3RhcnRBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cbiAgICBzdG9wQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgcGF1c2VBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cbiAgICByZXN1bWVBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cbiAgICBleHBhbmRBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cbiAgICBjb2xsYXBzZUFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuICAgIHNraXBBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cblxuICAgIC8vcHJvcGVydGllcyB0aGF0IHdpbGwgYmUgdHJlYXQgYXMgYXN5bmMgbWV0aG9kc1xuICAgIGdldEFkTGluZWFyKGNhbGxiYWNrKSB7fVxuICAgIGdldEFkV2lkdGgoY2FsbGJhY2spIHt9XG4gICAgZ2V0QWRIZWlnaHQoY2FsbGJhY2spIHt9XG4gICAgZ2V0QWRFeHBhbmRlZChjYWxsYmFjaykge31cbiAgICBnZXRBZFNraXBwYWJsZVN0YXRlKGNhbGxiYWNrKSB7fVxuICAgIGdldEFkUmVtYWluaW5nVGltZShjYWxsYmFjaykge31cbiAgICBnZXRBZER1cmF0aW9uKGNhbGxiYWNrKSB7fVxuICAgIHNldEFkVm9sdW1lKHNvdW5kVm9sdW1lLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cbiAgICBnZXRBZFZvbHVtZShjYWxsYmFjaykge31cbiAgICBnZXRBZENvbXBhbmlvbnMoY2FsbGJhY2spIHt9XG4gICAgZ2V0QWRJY29ucyhjYWxsYmFjaykge31cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KElWUEFJREFkVW5pdCwgJ0VWRU5UUycsIHtcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogW1xuICAgICAgICAnQWRMb2FkZWQnLFxuICAgICAgICAnQWRTdGFydGVkJyxcbiAgICAgICAgJ0FkU3RvcHBlZCcsXG4gICAgICAgICdBZFNraXBwZWQnLFxuICAgICAgICAnQWRTa2lwcGFibGVTdGF0ZUNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAgICAgJ0FkU2l6ZUNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAgICAgJ0FkTGluZWFyQ2hhbmdlJyxcbiAgICAgICAgJ0FkRHVyYXRpb25DaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgICAgICdBZEV4cGFuZGVkQ2hhbmdlJyxcbiAgICAgICAgJ0FkUmVtYWluaW5nVGltZUNoYW5nZScsIC8vIFtEZXByZWNhdGVkIGluIDIuMF0gYnV0IHdpbGwgYmUgc3RpbGwgZmlyZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICAgICdBZFZvbHVtZUNoYW5nZScsXG4gICAgICAgICdBZEltcHJlc3Npb24nLFxuICAgICAgICAnQWRWaWRlb1N0YXJ0JyxcbiAgICAgICAgJ0FkVmlkZW9GaXJzdFF1YXJ0aWxlJyxcbiAgICAgICAgJ0FkVmlkZW9NaWRwb2ludCcsXG4gICAgICAgICdBZFZpZGVvVGhpcmRRdWFydGlsZScsXG4gICAgICAgICdBZFZpZGVvQ29tcGxldGUnLFxuICAgICAgICAnQWRDbGlja1RocnUnLFxuICAgICAgICAnQWRJbnRlcmFjdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAgICAgJ0FkVXNlckFjY2VwdEludml0YXRpb24nLFxuICAgICAgICAnQWRVc2VyTWluaW1pemUnLFxuICAgICAgICAnQWRVc2VyQ2xvc2UnLFxuICAgICAgICAnQWRQYXVzZWQnLFxuICAgICAgICAnQWRQbGF5aW5nJyxcbiAgICAgICAgJ0FkTG9nJyxcbiAgICAgICAgJ0FkRXJyb3InXG4gICAgXVxufSk7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxubGV0IElWUEFJREFkVW5pdCA9IHJlcXVpcmUoJy4vSVZQQUlEQWRVbml0JykuSVZQQUlEQWRVbml0O1xubGV0IEFMTF9WUEFJRF9NRVRIT0RTID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoSVZQQUlEQWRVbml0LnByb3RvdHlwZSkuZmlsdGVyKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgIHJldHVybiBbJ2NvbnN0cnVjdG9yJ10uaW5kZXhPZihwcm9wZXJ0eSkgPT09IC0xO1xufSk7XG5cbmV4cG9ydCBjbGFzcyBWUEFJREFkVW5pdCBleHRlbmRzIElWUEFJREFkVW5pdCB7XG4gICAgY29uc3RydWN0b3IgKGZsYXNoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9mbGFzaCA9IGZsYXNoO1xuICAgIH1cblxuICAgIF9kZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICBBTExfVlBBSURfTUVUSE9EUy5mb3JFYWNoKChtZXRob2ROYW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9mbGFzaC5yZW1vdmVDYWxsYmFja0J5TWV0aG9kTmFtZShtZXRob2ROYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIElWUEFJREFkVW5pdC5FVkVOVFMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2ZsYXNoLm9mZkV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5fZmxhc2ggPSBudWxsO1xuICAgIH1cblxuICAgIGlzRGVzdHJveWVkICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc3Ryb3llZDtcbiAgICB9XG5cbiAgICBvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLm9uKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIG9mZihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLm9mZihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvL1ZQQUlEIGludGVyZmFjZVxuICAgIGhhbmRzaGFrZVZlcnNpb24ocGxheWVyVlBBSURWZXJzaW9uID0gJzIuMCcsIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnaGFuZHNoYWtlVmVyc2lvbicsIFtwbGF5ZXJWUEFJRFZlcnNpb25dLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGluaXRBZCAod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEgPSB7QWRQYXJhbWV0ZXJzOiAnJ30sIGVudmlyb25tZW50VmFycyA9IHtmbGFzaFZhcnM6ICcnfSwgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy9yZXNpemUgZWxlbWVudCB0aGF0IGhhcyB0aGUgZmxhc2ggb2JqZWN0XG4gICAgICAgIHRoaXMuX2ZsYXNoLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGNyZWF0aXZlRGF0YSA9IGNyZWF0aXZlRGF0YSB8fCB7QWRQYXJhbWV0ZXJzOiAnJ307XG4gICAgICAgIGVudmlyb25tZW50VmFycyA9IGVudmlyb25tZW50VmFycyB8fCB7Zmxhc2hWYXJzOiAnJ307XG5cbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdpbml0QWQnLCBbdGhpcy5fZmxhc2guZ2V0V2lkdGgoKSwgdGhpcy5fZmxhc2guZ2V0SGVpZ2h0KCksIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhLkFkUGFyYW1ldGVycyB8fCAnJywgZW52aXJvbm1lbnRWYXJzLmZsYXNoVmFycyB8fCAnJ10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgcmVzaXplQWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vcmVzaXplIGVsZW1lbnQgdGhhdCBoYXMgdGhlIGZsYXNoIG9iamVjdFxuICAgICAgICB0aGlzLl9mbGFzaC5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgIC8vcmVzaXplIGFkIGluc2lkZSB0aGUgZmxhc2hcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdyZXNpemVBZCcsIFt0aGlzLl9mbGFzaC5nZXRXaWR0aCgpLCB0aGlzLl9mbGFzaC5nZXRIZWlnaHQoKSwgdmlld01vZGVdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHN0YXJ0QWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdzdGFydEFkJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc3RvcEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnc3RvcEFkJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgcGF1c2VBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ3BhdXNlQWQnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICByZXN1bWVBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ3Jlc3VtZUFkJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZXhwYW5kQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdleHBhbmRBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGNvbGxhcHNlQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdjb2xsYXBzZUFkJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc2tpcEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnc2tpcEFkJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICAvL3Byb3BlcnRpZXMgdGhhdCB3aWxsIGJlIHRyZWF0IGFzIGFzeW5jIG1ldGhvZHNcbiAgICBnZXRBZExpbmVhcihjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkTGluZWFyJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0QWRXaWR0aChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkV2lkdGgnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZEhlaWdodChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkSGVpZ2h0JywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0QWRFeHBhbmRlZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkRXhwYW5kZWQnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZFNraXBwYWJsZVN0YXRlKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWRTa2lwcGFibGVTdGF0ZScsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkUmVtYWluaW5nVGltZShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkUmVtYWluaW5nVGltZScsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkRHVyYXRpb24oY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZER1cmF0aW9uJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc2V0QWRWb2x1bWUodm9sdW1lLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ3NldEFkVm9sdW1lJywgW3ZvbHVtZV0sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0QWRWb2x1bWUoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZFZvbHVtZScsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkQ29tcGFuaW9ucyhjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkQ29tcGFuaW9ucycsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkSWNvbnMoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZEljb25zJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxubGV0IEpTRmxhc2hCcmlkZ2UgPSByZXF1aXJlKCcuL2pzRmxhc2hCcmlkZ2UnKS5KU0ZsYXNoQnJpZGdlO1xubGV0IFZQQUlEQWRVbml0ID0gcmVxdWlyZSgnLi9WUEFJREFkVW5pdCcpLlZQQUlEQWRVbml0O1xuXG5sZXQgbm9vcCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5ub29wO1xubGV0IGNhbGxiYWNrVGltZW91dCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5jYWxsYmFja1RpbWVvdXQ7XG5sZXQgaXNQb3NpdGl2ZUludCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5pc1Bvc2l0aXZlSW50O1xubGV0IGNyZWF0ZUVsZW1lbnRXaXRoSUQgPSByZXF1aXJlKCcuL3V0aWxzJykuY3JlYXRlRWxlbWVudFdpdGhJRDtcbmxldCB1bmlxdWVWUEFJRCA9IHJlcXVpcmUoJy4vdXRpbHMnKS51bmlxdWUoJ3ZwYWlkJyk7XG5cbmNvbnN0IEVSUk9SID0gJ2Vycm9yJztcbmNvbnN0IEZMQVNIX1ZFUlNJT04gPSAnMTAuMS4wJztcblxuY2xhc3MgVlBBSURGTEFTSENsaWVudCB7XG4gICAgY29uc3RydWN0b3IgKHZwYWlkUGFyZW50RWwsIGNhbGxiYWNrLCBzd2ZDb25maWcgPSB7ZGF0YTogJ1ZQQUlERmxhc2guc3dmJywgd2lkdGg6IDgwMCwgaGVpZ2h0OiA0MDB9LCBwYXJhbXMgPSB7IHdtb2RlOiAndHJhbnNwYXJlbnQnLCBzYWxpZ246ICd0bCcsIGFsaWduOiAnbGVmdCcsIGFsbG93U2NyaXB0QWNjZXNzOiAnYWx3YXlzJywgc2NhbGU6ICdub1NjYWxlJywgYWxsb3dGdWxsU2NyZWVuOiAndHJ1ZScsIHF1YWxpdHk6ICdoaWdoJ30sIHZwYWlkT3B0aW9ucyA9IHsgZGVidWc6IGZhbHNlLCB0aW1lb3V0OiAxMDAwMCB9KSB7XG5cbiAgICAgICAgaWYgKCFWUEFJREZMQVNIQ2xpZW50Lmhhc0V4dGVybmFsRGVwZW5kZW5jaWVzKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBvbkVycm9yKCdubyBzd2ZvYmplY3QgaW4gZ2xvYmFsIHNjb3BlLiBjaGVjazogaHR0cHM6Ly9naXRodWIuY29tL3N3Zm9iamVjdC9zd2ZvYmplY3Qgb3IgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9zd2ZvYmplY3QvJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl92cGFpZFBhcmVudEVsID0gdnBhaWRQYXJlbnRFbDtcbiAgICAgICAgdGhpcy5fZmxhc2hJRCA9IHVuaXF1ZVZQQUlEKCk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IG5vb3A7XG5cbiAgICAgICAgc3dmQ29uZmlnLndpZHRoID0gaXNQb3NpdGl2ZUludChzd2ZDb25maWcud2lkdGgsIDgwMCk7XG4gICAgICAgIHN3ZkNvbmZpZy5oZWlnaHQgPSBpc1Bvc2l0aXZlSW50KHN3ZkNvbmZpZy5oZWlnaHQsIDQwMCk7XG5cbiAgICAgICAgY3JlYXRlRWxlbWVudFdpdGhJRCh2cGFpZFBhcmVudEVsLCB0aGlzLl9mbGFzaElEKTtcblxuICAgICAgICBwYXJhbXMubW92aWUgPSBzd2ZDb25maWcuZGF0YTtcbiAgICAgICAgcGFyYW1zLkZsYXNoVmFycyA9IGBmbGFzaGlkPSR7dGhpcy5fZmxhc2hJRH0maGFuZGxlcj0ke0pTRmxhc2hCcmlkZ2UuVlBBSURfRkxBU0hfSEFORExFUn0mZGVidWc9JHt2cGFpZE9wdGlvbnMuZGVidWd9JnNhbGlnbj0ke3BhcmFtcy5zYWxpZ259YDtcblxuICAgICAgICBpZiAoIVZQQUlERkxBU0hDbGllbnQuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIG9uRXJyb3IoJ3VzZXIgZG9uXFwndCBzdXBwb3J0IGZsYXNoIG9yIGRvZXNuXFwndCBoYXZlIHRoZSBtaW5pbXVtIHJlcXVpcmVkIHZlcnNpb24gb2YgZmxhc2ggJyArIEZMQVNIX1ZFUlNJT04pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbCA9IHN3Zm9iamVjdC5jcmVhdGVTV0Yoc3dmQ29uZmlnLCBwYXJhbXMsIHRoaXMuX2ZsYXNoSUQpO1xuXG4gICAgICAgIGlmICghdGhpcy5lbCkge1xuICAgICAgICAgICAgcmV0dXJuIG9uRXJyb3IoICdzd2ZvYmplY3QgZmFpbGVkIHRvIGNyZWF0ZSBvYmplY3QgaW4gZWxlbWVudCcgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBoYW5kbGVyID0gY2FsbGJhY2tUaW1lb3V0KHZwYWlkT3B0aW9ucy50aW1lb3V0LFxuICAgICAgICAgICAgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICRsb2FkUGVuZGVkQWRVbml0LmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCBkYXRhKTtcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayggJ3ZwYWlkIGZsYXNoIGxvYWQgdGltZW91dCAnICsgdnBhaWRPcHRpb25zLnRpbWVvdXQgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLl9mbGFzaCA9IG5ldyBKU0ZsYXNoQnJpZGdlKHRoaXMuZWwsIHN3ZkNvbmZpZy5kYXRhLCB0aGlzLl9mbGFzaElELCBzd2ZDb25maWcud2lkdGgsIHN3ZkNvbmZpZy5oZWlnaHQsIGhhbmRsZXIpO1xuXG4gICAgICAgIGZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcihlcnJvcikpO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZGVzdHJveSAoKSB7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3lBZFVuaXQoKTtcblxuICAgICAgICBpZiAodGhpcy5fZmxhc2gpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZsYXNoLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX2ZsYXNoID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsID0gbnVsbDtcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpc0Rlc3Ryb3llZCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXN0cm95ZWQ7XG4gICAgfVxuXG4gICAgX2Rlc3Ryb3lBZFVuaXQoKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9sb2FkTGF0ZXI7XG5cbiAgICAgICAgaWYgKHRoaXMuX2FkVW5pdExvYWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkVW5pdExvYWQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fZmxhc2gucmVtb3ZlQ2FsbGJhY2sodGhpcy5fYWRVbml0TG9hZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fYWRVbml0KSB7XG4gICAgICAgICAgICB0aGlzLl9hZFVuaXQuX2Rlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuX2FkVW5pdCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkQWRVbml0KGFkVVJMLCBjYWxsYmFjaykge1xuICAgICAgICAkdGhyb3dJZkRlc3Ryb3llZC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLl9hZFVuaXQpIHtcbiAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lBZFVuaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9mbGFzaC5pc1JlYWR5KCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2FkVW5pdExvYWQgPSAoZXJyLCBtZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWRVbml0ID0gbmV3IFZQQUlEQWRVbml0KHRoaXMuX2ZsYXNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRVbml0TG9hZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyLCB0aGlzLl9hZFVuaXQpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdsb2FkQWRVbml0JywgW2FkVVJMXSwgdGhpcy5fYWRVbml0TG9hZCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRMYXRlciA9IHt1cmw6IGFkVVJMLCBjYWxsYmFja307XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmxvYWRBZFVuaXQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcblxuICAgICAgICB0aGlzLl9kZXN0cm95QWRVbml0KCk7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgndW5sb2FkQWRVbml0JywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0Rmxhc2hJRCgpIHtcbiAgICAgICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZsYXNoLmdldEZsYXNoSUQoKTtcbiAgICB9XG4gICAgZ2V0Rmxhc2hVUkwoKSB7XG4gICAgICAgICR0aHJvd0lmRGVzdHJveWVkLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9mbGFzaC5nZXRGbGFzaFVSTCgpO1xuICAgIH1cbn1cblxuc2V0U3RhdGljUHJvcGVydHkoJ2lzU3VwcG9ydGVkJywgKCkgPT4ge1xuICAgIHJldHVybiBWUEFJREZMQVNIQ2xpZW50Lmhhc0V4dGVybmFsRGVwZW5kZW5jaWVzKCkgJiYgc3dmb2JqZWN0Lmhhc0ZsYXNoUGxheWVyVmVyc2lvbihGTEFTSF9WRVJTSU9OKTtcbn0pO1xuXG5zZXRTdGF0aWNQcm9wZXJ0eSgnaGFzRXh0ZXJuYWxEZXBlbmRlbmNpZXMnLCAoKSA9PiB7XG4gICAgcmV0dXJuICEhd2luZG93LnN3Zm9iamVjdDtcbn0pO1xuXG5mdW5jdGlvbiAkdGhyb3dJZkRlc3Ryb3llZCgpIHtcbiAgICBpZih0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IGVycm9yKCdWUEFJREZsYXNoVG9KUyBpcyBkZXN0cm95ZWQhJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiAkbG9hZFBlbmRlZEFkVW5pdCgpIHtcbiAgICBpZiAodGhpcy5fbG9hZExhdGVyKSB7XG4gICAgICAgIHRoaXMubG9hZEFkVW5pdCh0aGlzLl9sb2FkTGF0ZXIudXJsLCB0aGlzLl9sb2FkTGF0ZXIuY2FsbGJhY2spO1xuICAgICAgICBkZWxldGUgdGhpcy5fbG9hZExhdGVyO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2V0U3RhdGljUHJvcGVydHkocHJvcGVydHlOYW1lLCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWUEFJREZMQVNIQ2xpZW50LCBwcm9wZXJ0eU5hbWUsIHtcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbn1cblxud2luZG93LlZQQUlERkxBU0hDbGllbnQgPSBWUEFJREZMQVNIQ2xpZW50O1xubW9kdWxlLmV4cG9ydHMgPSBWUEFJREZMQVNIQ2xpZW50O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmxldCB1bmlxdWUgPSByZXF1aXJlKCcuL3V0aWxzJykudW5pcXVlO1xubGV0IGlzUG9zaXRpdmVJbnQgPSByZXF1aXJlKCcuL3V0aWxzJykuaXNQb3NpdGl2ZUludDtcbmxldCBzdHJpbmdFbmRzV2l0aCA9IHJlcXVpcmUoJy4vdXRpbHMnKS5zdHJpbmdFbmRzV2l0aDtcbmxldCBTaW5nbGVWYWx1ZVJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9yZWdpc3RyeScpLlNpbmdsZVZhbHVlUmVnaXN0cnk7XG5sZXQgTXVsdGlwbGVWYWx1ZXNSZWdpc3RyeSA9IHJlcXVpcmUoJy4vcmVnaXN0cnknKS5NdWx0aXBsZVZhbHVlc1JlZ2lzdHJ5O1xuY29uc3QgcmVnaXN0cnkgPSByZXF1aXJlKCcuL2pzRmxhc2hCcmlkZ2VSZWdpc3RyeScpO1xuY29uc3QgVlBBSURfRkxBU0hfSEFORExFUiA9ICd2cGFpZF92aWRlb19mbGFzaF9oYW5kbGVyJztcbmNvbnN0IEVSUk9SID0gJ0FkRXJyb3InO1xuXG5leHBvcnQgY2xhc3MgSlNGbGFzaEJyaWRnZSB7XG4gICAgY29uc3RydWN0b3IgKGVsLCBmbGFzaFVSTCwgZmxhc2hJRCwgd2lkdGgsIGhlaWdodCwgbG9hZEhhbmRTaGFrZSkge1xuICAgICAgICB0aGlzLl9lbCA9IGVsO1xuICAgICAgICB0aGlzLl9mbGFzaElEID0gZmxhc2hJRDtcbiAgICAgICAgdGhpcy5fZmxhc2hVUkwgPSBmbGFzaFVSTDtcbiAgICAgICAgdGhpcy5fd2lkdGggPSB3aWR0aDtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICB0aGlzLl9oYW5kbGVycyA9IG5ldyBNdWx0aXBsZVZhbHVlc1JlZ2lzdHJ5KCk7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrcyA9IG5ldyBTaW5nbGVWYWx1ZVJlZ2lzdHJ5KCk7XG4gICAgICAgIHRoaXMuX3VuaXF1ZU1ldGhvZElkZW50aWZpZXIgPSB1bmlxdWUodGhpcy5fZmxhc2hJRCk7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2hhbmRTaGFrZUhhbmRsZXIgPSBsb2FkSGFuZFNoYWtlO1xuXG4gICAgICAgIHJlZ2lzdHJ5LmFkZEluc3RhbmNlKHRoaXMuX2ZsYXNoSUQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnMuYWRkKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIG9mZihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVycy5yZW1vdmUoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgb2ZmRXZlbnQoZXZlbnROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVycy5yZW1vdmVCeUtleShldmVudE5hbWUpO1xuICAgIH1cblxuICAgIG9mZkFsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZXJzLnJlbW92ZUFsbCgpO1xuICAgIH1cblxuICAgIGNhbGxGbGFzaE1ldGhvZChtZXRob2ROYW1lLCBhcmdzID0gW10sIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBjYWxsYmFja0lEID0gJyc7XG4gICAgICAgIC8vIGlmIG5vIGNhbGxiYWNrLCBzb21lIG1ldGhvZHMgdGhlIHJldHVybiBpcyB2b2lkIHNvIHRoZXkgZG9uJ3QgbmVlZCBjYWxsYmFja1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrSUQgPSBgJHt0aGlzLl91bmlxdWVNZXRob2RJZGVudGlmaWVyKCl9XyR7bWV0aG9kTmFtZX1gO1xuICAgICAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmFkZChjYWxsYmFja0lELCBjYWxsYmFjayk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvL21ldGhvZHMgYXJlIGNyZWF0ZWQgYnkgRXh0ZXJuYWxJbnRlcmZhY2UuYWRkQ2FsbGJhY2sgaW4gYXMzIGNvZGUsIGlmIGZvciBzb21lIHJlYXNvbiBpdCBmYWlsZWRcbiAgICAgICAgICAgIC8vdGhpcyBjb2RlIHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgICAgIHRoaXMuX2VsW21ldGhvZE5hbWVdKFtjYWxsYmFja0lEXS5jb25jYXQoYXJncykpO1xuXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICRhc3luY0NhbGxiYWNrLmNhbGwodGhpcywgY2FsbGJhY2tJRCwgZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy9pZiB0aGVyZSBpc24ndCBhbnkgY2FsbGJhY2sgdG8gcmV0dXJuIGVycm9yIHVzZSBlcnJvciBldmVudCBoYW5kbGVyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJpZ2dlcihFUlJPUiwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVDYWxsYmFjayhjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzLnJlbW92ZUJ5VmFsdWUoY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHJlbW92ZUNhbGxiYWNrQnlNZXRob2ROYW1lKHN1ZmZpeCkge1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MuZmlsdGVyS2V5cygoa2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5nRW5kc1dpdGgoa2V5LCBzdWZmaXgpO1xuICAgICAgICB9KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcy5yZW1vdmUoa2V5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQWxsQ2FsbGJhY2tzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzLnJlbW92ZUFsbCgpO1xuICAgIH1cblxuICAgIF90cmlnZ2VyKGV2ZW50TmFtZSwgZXZlbnQpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnMuZ2V0KGV2ZW50TmFtZSkuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgICAgICAgIC8vY2xpY2tUaHJ1IGhhcyB0byBiZSBzeW5jLCBpZiBub3Qgd2lsbCBiZSBibG9jayBieSB0aGUgcG9wdXBibG9ja2VyXG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lID09PSAnQWRDbGlja1RocnUnKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hhbmRsZXJzLmdldChldmVudE5hbWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfY2FsbENhbGxiYWNrKG1ldGhvZE5hbWUsIGNhbGxiYWNrSUQsIGVyciwgcmVzdWx0KSB7XG5cbiAgICAgICAgbGV0IGNhbGxiYWNrID0gdGhpcy5fY2FsbGJhY2tzLmdldChjYWxsYmFja0lEKTtcblxuICAgICAgICAvL25vdCBhbGwgbWV0aG9kcyBjYWxsYmFjaydzIGFyZSBtYW5kYXRvcnlcbiAgICAgICAgLy9idXQgaWYgdGhlcmUgZXhpc3QgYW4gZXJyb3IsIGZpcmUgdGhlIGVycm9yIGV2ZW50XG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmIChlcnIgJiYgY2FsbGJhY2tJRCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoRVJST1IsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkYXN5bmNDYWxsYmFjay5jYWxsKHRoaXMsIGNhbGxiYWNrSUQsIGVyciwgcmVzdWx0KTtcblxuICAgIH1cblxuICAgIF9oYW5kU2hha2UoZXJyLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX3JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuX2hhbmRTaGFrZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2hhbmRTaGFrZUhhbmRsZXIoZXJyLCBkYXRhKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9oYW5kU2hha2VIYW5kbGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9tZXRob2RzIGxpa2UgcHJvcGVydGllcyBzcGVjaWZpYyB0byB0aGlzIGltcGxlbWVudGF0aW9uIG9mIFZQQUlEXG4gICAgZ2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHt3aWR0aDogdGhpcy5fd2lkdGgsIGhlaWdodDogdGhpcy5faGVpZ2h0fTtcbiAgICB9XG4gICAgc2V0U2l6ZShuZXdXaWR0aCwgbmV3SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gaXNQb3NpdGl2ZUludChuZXdXaWR0aCwgdGhpcy5fd2lkdGgpO1xuICAgICAgICB0aGlzLl9oZWlnaHQgPSBpc1Bvc2l0aXZlSW50KG5ld0hlaWdodCwgdGhpcy5faGVpZ2h0KTtcbiAgICAgICAgdGhpcy5fZWwuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMuX3dpZHRoKTtcbiAgICAgICAgdGhpcy5fZWwuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLl9oZWlnaHQpO1xuICAgIH1cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICAgIH1cbiAgICBzZXRXaWR0aChuZXdXaWR0aCkge1xuICAgICAgICB0aGlzLnNldFNpemUobmV3V2lkdGgsIHRoaXMuX2hlaWdodCk7XG4gICAgfVxuICAgIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgICB9XG4gICAgc2V0SGVpZ2h0KG5ld0hlaWdodCkge1xuICAgICAgICB0aGlzLnNldFNpemUodGhpcy5fd2lkdGgsIG5ld0hlaWdodCk7XG4gICAgfVxuICAgIGdldEZsYXNoSUQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mbGFzaElEO1xuICAgIH1cbiAgICBnZXRGbGFzaFVSTCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZsYXNoVVJMO1xuICAgIH1cbiAgICBpc1JlYWR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVhZHk7XG4gICAgfVxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub2ZmQWxsKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgIHJlZ2lzdHJ5LnJlbW92ZUluc3RhbmNlQnlJRCh0aGlzLl9mbGFzaElEKTtcbiAgICAgICAgaWYgKHRoaXMuX2VsLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX2VsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5fZWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiAkYXN5bmNDYWxsYmFjayhjYWxsYmFja0lELCBlcnIsIHJlc3VsdCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBsZXQgY2FsbGJhY2sgPSB0aGlzLl9jYWxsYmFja3MuZ2V0KGNhbGxiYWNrSUQpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcy5yZW1vdmUoY2FsbGJhY2tJRCk7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9LCAwKTtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTRmxhc2hCcmlkZ2UsICdWUEFJRF9GTEFTSF9IQU5ETEVSJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBWUEFJRF9GTEFTSF9IQU5ETEVSXG59KTtcblxuLyoqXG4gKiBFeHRlcm5hbCBpbnRlcmZhY2UgaGFuZGxlclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmbGFzaElEIGlkZW50aWZpZXIgb2YgdGhlIGZsYXNoIHdobyBjYWxsIHRoaXNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlSUQgd2hhdCB0eXBlIG9mIG1lc3NhZ2UgaXMsIGNhbiBiZSAnZXZlbnQnIG9yICdjYWxsYmFjaydcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlTmFtZSBpZiB0aGUgdHlwZUlEIGlzIGEgZXZlbnQgdGhlIHR5cGVOYW1lIHdpbGwgYmUgdGhlIGV2ZW50TmFtZSwgaWYgaXMgYSBjYWxsYmFjayB0aGUgdHlwZUlEIGlzIHRoZSBtZXRob2ROYW1lIHRoYXQgaXMgcmVsYXRlZCB0aGlzIGNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ30gY2FsbGJhY2tJRCBvbmx5IGFwcGxpZXMgd2hlbiB0aGUgdHlwZUlEIGlzICdjYWxsYmFjaycsIGlkZW50aWZpZXIgb2YgdGhlIGNhbGxiYWNrIHRvIGNhbGxcbiAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvciBlcnJvciBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbndpbmRvd1tWUEFJRF9GTEFTSF9IQU5ETEVSXSA9IChmbGFzaElELCB0eXBlSUQsIHR5cGVOYW1lLCBjYWxsYmFja0lELCBlcnJvciwgZGF0YSkgPT4ge1xuICAgIGxldCBpbnN0YW5jZSA9IHJlZ2lzdHJ5LmdldEluc3RhbmNlQnlJRChmbGFzaElEKTtcbiAgICBpZiAoIWluc3RhbmNlKSByZXR1cm47XG4gICAgaWYgKHR5cGVOYW1lID09PSAnaGFuZFNoYWtlJykge1xuICAgICAgICBpbnN0YW5jZS5faGFuZFNoYWtlKGVycm9yLCBkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZUlEICE9PSAnZXZlbnQnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5fY2FsbENhbGxiYWNrKHR5cGVOYW1lLCBjYWxsYmFja0lELCBlcnJvciwgZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5fdHJpZ2dlcih0eXBlTmFtZSwgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmxldCBTaW5nbGVWYWx1ZVJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9yZWdpc3RyeScpLlNpbmdsZVZhbHVlUmVnaXN0cnk7XG5sZXQgaW5zdGFuY2VzID0gbmV3IFNpbmdsZVZhbHVlUmVnaXN0cnkoKTtcblxuY29uc3QgSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5ID0ge307XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5LCAnYWRkSW5zdGFuY2UnLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIChpZCwgaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2VzLmFkZChpZCwgaW5zdGFuY2UpO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5LCAnZ2V0SW5zdGFuY2VCeUlEJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlcy5nZXQoaWQpO1xuICAgIH1cbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoSlNGbGFzaEJyaWRnZVJlZ2lzdHJ5LCAncmVtb3ZlSW5zdGFuY2VCeUlEJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlcy5yZW1vdmUoaWQpO1xuICAgIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEpTRmxhc2hCcmlkZ2VSZWdpc3RyeTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY2xhc3MgTXVsdGlwbGVWYWx1ZXNSZWdpc3RyeSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLl9yZWdpc3RyaWVzID0ge307XG4gICAgfVxuICAgIGFkZCAoaWQsIHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5fcmVnaXN0cmllc1tpZF0pIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdHJpZXNbaWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3JlZ2lzdHJpZXNbaWRdLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5fcmVnaXN0cmllc1tpZF0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0IChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0cmllc1tpZF0gfHwgW107XG4gICAgfVxuICAgIGZpbHRlcktleXMgKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3JlZ2lzdHJpZXMpLmZpbHRlcihoYW5kbGVyKTtcbiAgICB9XG4gICAgZmluZEJ5VmFsdWUgKHZhbHVlKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5fcmVnaXN0cmllcykuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyaWVzW2tleV0uaW5kZXhPZih2YWx1ZSkgIT09IC0xO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG4gICAgcmVtb3ZlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9yZWdpc3RyaWVzW2tleV0pIHsgcmV0dXJuOyB9XG5cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fcmVnaXN0cmllc1trZXldLmluZGV4T2YodmFsdWUpO1xuXG4gICAgICAgIGlmIChpbmRleCA8IDApIHsgcmV0dXJuOyB9XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyaWVzW2tleV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gICAgcmVtb3ZlQnlLZXkgKGlkKSB7XG4gICAgICAgIGxldCBvbGQgPSB0aGlzLl9yZWdpc3RyaWVzW2lkXTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3JlZ2lzdHJpZXNbaWRdO1xuICAgICAgICByZXR1cm4gb2xkO1xuICAgIH1cbiAgICByZW1vdmVCeVZhbHVlICh2YWx1ZSkge1xuICAgICAgICBsZXQga2V5cyA9IHRoaXMuZmluZEJ5VmFsdWUodmFsdWUpO1xuICAgICAgICByZXR1cm4ga2V5cy5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGtleSwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVtb3ZlQWxsKCkge1xuICAgICAgICBsZXQgb2xkID0gdGhpcy5fcmVnaXN0cmllcztcbiAgICAgICAgdGhpcy5fcmVnaXN0cmllcyA9IHt9O1xuICAgICAgICByZXR1cm4gb2xkO1xuICAgIH1cbiAgICBzaXplKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcmVnaXN0cmllcykubGVuZ3RoO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpbmdsZVZhbHVlUmVnaXN0cnkge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0cmllcyA9IHt9O1xuICAgIH1cbiAgICBhZGQgKGlkLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9yZWdpc3RyaWVzW2lkXSA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyaWVzW2lkXTtcbiAgICB9XG4gICAgZmlsdGVyS2V5cyAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcmVnaXN0cmllcykuZmlsdGVyKGhhbmRsZXIpO1xuICAgIH1cbiAgICBmaW5kQnlWYWx1ZSAodmFsdWUpIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLl9yZWdpc3RyaWVzKS5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdHJpZXNba2V5XSA9PT0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBrZXlzO1xuICAgIH1cbiAgICByZW1vdmUgKGlkKSB7XG4gICAgICAgIGxldCBvbGQgPSB0aGlzLl9yZWdpc3RyaWVzW2lkXTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3JlZ2lzdHJpZXNbaWRdO1xuICAgICAgICByZXR1cm4gb2xkO1xuICAgIH1cbiAgICByZW1vdmVCeVZhbHVlICh2YWx1ZSkge1xuICAgICAgICBsZXQga2V5cyA9IHRoaXMuZmluZEJ5VmFsdWUodmFsdWUpO1xuICAgICAgICByZXR1cm4ga2V5cy5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGtleSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZW1vdmVBbGwoKSB7XG4gICAgICAgIGxldCBvbGQgPSB0aGlzLl9yZWdpc3RyaWVzO1xuICAgICAgICB0aGlzLl9yZWdpc3RyaWVzID0ge307XG4gICAgICAgIHJldHVybiBvbGQ7XG4gICAgfVxuICAgIHNpemUoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9yZWdpc3RyaWVzKS5sZW5ndGg7XG4gICAgfVxufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlxdWUocHJlZml4KSB7XG4gICAgbGV0IGNvdW50ID0gLTE7XG4gICAgcmV0dXJuIGYgPT4ge1xuICAgICAgICByZXR1cm4gYCR7cHJlZml4fV8keysrY291bnR9YDtcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY2FsbGJhY2tUaW1lb3V0KHRpbWVyLCBvblN1Y2Nlc3MsIG9uVGltZW91dCkge1xuXG4gICAgbGV0IHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICBvblN1Y2Nlc3MgPSBub29wO1xuICAgICAgICBvblRpbWVvdXQoKTtcblxuICAgIH0sIHRpbWVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgb25TdWNjZXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFdpdGhJRChwYXJlbnQsIGlkKSB7XG4gICAgdmFyIG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5FbC5pZCA9IGlkO1xuICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobkVsKTtcbiAgICByZXR1cm4gbkVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQb3NpdGl2ZUludChuZXdWYWwsIG9sZFZhbCkge1xuICAgIHJldHVybiAhaXNOYU4ocGFyc2VGbG9hdChuZXdWYWwpKSAmJiBpc0Zpbml0ZShuZXdWYWwpICYmIG5ld1ZhbCA+IDAgPyBuZXdWYWwgOiBvbGRWYWw7XG59XG5cbmxldCBlbmRzV2l0aCA9IChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGgpIHJldHVybiBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoO1xuICAgIHJldHVybiBmdW5jdGlvbiBlbmRzV2l0aCAoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbikge1xuICAgICAgICB2YXIgc3ViamVjdFN0cmluZyA9IHRoaXMudG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgcG9zaXRpb24gPiBzdWJqZWN0U3RyaW5nLmxlbmd0aCkge1xuICAgICAgICAgICAgcG9zaXRpb24gPSBzdWJqZWN0U3RyaW5nLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBwb3NpdGlvbiAtPSBzZWFyY2hTdHJpbmcubGVuZ3RoO1xuICAgICAgICB2YXIgbGFzdEluZGV4ID0gc3ViamVjdFN0cmluZy5pbmRleE9mKHNlYXJjaFN0cmluZywgcG9zaXRpb24pO1xuICAgICAgICByZXR1cm4gbGFzdEluZGV4ICE9PSAtMSAmJiBsYXN0SW5kZXggPT09IHBvc2l0aW9uO1xuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdFbmRzV2l0aChzdHJpbmcsIHNlYXJjaCkge1xuICAgIHJldHVybiBlbmRzV2l0aC5jYWxsKHN0cmluZywgc2VhcmNoKTtcbn1cblxuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBNRVRIT0RTID0gW1xuICAgICdoYW5kc2hha2VWZXJzaW9uJyxcbiAgICAnaW5pdEFkJyxcbiAgICAnc3RhcnRBZCcsXG4gICAgJ3N0b3BBZCcsXG4gICAgJ3NraXBBZCcsIC8vIFZQQUlEIDIuMCBuZXcgbWV0aG9kXG4gICAgJ3Jlc2l6ZUFkJyxcbiAgICAncGF1c2VBZCcsXG4gICAgJ3Jlc3VtZUFkJyxcbiAgICAnZXhwYW5kQWQnLFxuICAgICdjb2xsYXBzZUFkJyxcbiAgICAnc3Vic2NyaWJlJyxcbiAgICAndW5zdWJzY3JpYmUnXG5dO1xuXG52YXIgRVZFTlRTID0gW1xuICAgICdBZExvYWRlZCcsXG4gICAgJ0FkU3RhcnRlZCcsXG4gICAgJ0FkU3RvcHBlZCcsXG4gICAgJ0FkU2tpcHBlZCcsXG4gICAgJ0FkU2tpcHBhYmxlU3RhdGVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgJ0FkU2l6ZUNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRMaW5lYXJDaGFuZ2UnLFxuICAgICdBZER1cmF0aW9uQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZEV4cGFuZGVkQ2hhbmdlJyxcbiAgICAnQWRSZW1haW5pbmdUaW1lQ2hhbmdlJywgLy8gW0RlcHJlY2F0ZWQgaW4gMi4wXSBidXQgd2lsbCBiZSBzdGlsbCBmaXJlZCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcbiAgICAnQWRWb2x1bWVDaGFuZ2UnLFxuICAgICdBZEltcHJlc3Npb24nLFxuICAgICdBZFZpZGVvU3RhcnQnLFxuICAgICdBZFZpZGVvRmlyc3RRdWFydGlsZScsXG4gICAgJ0FkVmlkZW9NaWRwb2ludCcsXG4gICAgJ0FkVmlkZW9UaGlyZFF1YXJ0aWxlJyxcbiAgICAnQWRWaWRlb0NvbXBsZXRlJyxcbiAgICAnQWRDbGlja1RocnUnLFxuICAgICdBZEludGVyYWN0aW9uJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZFVzZXJBY2NlcHRJbnZpdGF0aW9uJyxcbiAgICAnQWRVc2VyTWluaW1pemUnLFxuICAgICdBZFVzZXJDbG9zZScsXG4gICAgJ0FkUGF1c2VkJyxcbiAgICAnQWRQbGF5aW5nJyxcbiAgICAnQWRMb2cnLFxuICAgICdBZEVycm9yJ1xuXTtcblxudmFyIEdFVFRFUlMgPSBbXG4gICAgJ2dldEFkTGluZWFyJyxcbiAgICAnZ2V0QWRXaWR0aCcsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkSGVpZ2h0JywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRFeHBhbmRlZCcsXG4gICAgJ2dldEFkU2tpcHBhYmxlU3RhdGUnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZFJlbWFpbmluZ1RpbWUnLFxuICAgICdnZXRBZER1cmF0aW9uJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRWb2x1bWUnLFxuICAgICdnZXRBZENvbXBhbmlvbnMnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZEljb25zJyAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuXTtcblxudmFyIFNFVFRFUlMgPSBbXG4gICAgJ3NldEFkVm9sdW1lJ1xuXTtcblxuXG4vKipcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGdsb2JhbCBtZW1iZXIuIFRoZSBjYWxsYmFjayB1c2Ugbm9kZWpzIGVycm9yLWZpcnN0IGNhbGxiYWNrIHN0eWxlXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9XG4gKiBAcGFyYW0ge3VuZGVmaW5lZHxvYmplY3R9XG4gKi9cblxuXG4vKipcbiAqIElWUEFJREFkVW5pdFxuICpcbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjcmVhdGl2ZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxcbiAqIEBwYXJhbSB7SFRNTFZpZGVvRWxlbWVudH0gdmlkZW9cbiAqL1xuZnVuY3Rpb24gSVZQQUlEQWRVbml0KGNyZWF0aXZlLCBlbCwgdmlkZW8pIHt9XG5cblxuLyoqXG4gKiBoYW5kc2hha2VWZXJzaW9uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFZQQUlEVmVyc2lvblxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5oYW5kc2hha2VWZXJzaW9uID0gZnVuY3Rpb24gKFZQQUlEVmVyc2lvbiwgY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGluaXRBZFxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICogQHBhcmFtIHtzdHJpbmd9IHZpZXdNb2RlIGNhbiBiZSAnbm9ybWFsJywgJ3RodW1ibmFpbCcgb3IgJ2Z1bGxzY3JlZW4nXG4gKiBAcGFyYW0ge251bWJlcn0gZGVzaXJlZEJpdHJhdGUgaW5kaWNhdGVzIHRoZSBkZXNpcmVkIGJpdHJhdGUgaW4ga2Jwc1xuICogQHBhcmFtIHtvYmplY3R9IFtjcmVhdGl2ZURhdGFdIHVzZWQgZm9yIGFkZGl0aW9uYWwgaW5pdGlhbGl6YXRpb24gZGF0YVxuICogQHBhcmFtIHtvYmplY3R9IFtlbnZpcm9ubWVudFZhcnNdIHVzZWQgZm9yIHBhc3NpbmcgaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgb2YganMgdmVyc2lvblxuICogQHBhcmFtIHtOb2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5pbml0QWQgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSwgZW52aXJvbm1lbnRWYXJzLCBjYWxsYmFjaykge307XG5cbi8qKlxuICogc3RhcnRBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc3RhcnRBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBzdG9wQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnN0b3BBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBza2lwQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnNraXBBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiByZXNpemVBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUucmVzaXplQWQgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHBhdXNlQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnBhdXNlQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogcmVzdW1lQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnJlc3VtZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGV4cGFuZEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5leHBhbmRBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBjb2xsYXBzZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5jb2xsYXBzZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHN1YnNjcmliZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gaGFuZGxlclxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlciwgY29udGV4dCkge307XG5cbi8qKlxuICogc3RhcnRBZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlclxuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIpIHt9O1xuXG5cblxuLyoqXG4gKiBnZXRBZExpbmVhclxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRMaW5lYXIgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRXaWR0aFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRXaWR0aCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZEhlaWdodFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRIZWlnaHQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRFeHBhbmRlZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRFeHBhbmRlZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZFNraXBwYWJsZVN0YXRlXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZFNraXBwYWJsZVN0YXRlID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkUmVtYWluaW5nVGltZVxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRSZW1haW5pbmdUaW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkRHVyYXRpb25cbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkRHVyYXRpb24gPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRWb2x1bWVcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkVm9sdW1lID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkQ29tcGFuaW9uc1xuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRDb21wYW5pb25zID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkSWNvbnNcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkSWNvbnMgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc2V0QWRWb2x1bWVcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdm9sdW1lXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnNldEFkVm9sdW1lID0gZnVuY3Rpb24odm9sdW1lLCBjYWxsYmFjaykge307XG5cbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ01FVEhPRFMnLCBNRVRIT0RTKTtcbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ0dFVFRFUlMnLCBHRVRURVJTKTtcbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ1NFVFRFUlMnLCBTRVRURVJTKTtcbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ0VWRU5UUycsICBFVkVOVFMpO1xuXG5cbnZhciBWUEFJRDFfTUVUSE9EUyA9IE1FVEhPRFMuZmlsdGVyKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIHJldHVybiBbJ3NraXBBZCddLmluZGV4T2YobWV0aG9kKSA9PT0gLTE7XG59KTtcblxuYWRkU3RhdGljVG9JbnRlcmZhY2UoSVZQQUlEQWRVbml0LCAnY2hlY2tWUEFJREludGVyZmFjZScsIGZ1bmN0aW9uIGNoZWNrVlBBSURJbnRlcmZhY2UgKGNyZWF0aXZlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFZQQUlEMV9NRVRIT0RTLmV2ZXJ5KGZ1bmN0aW9uKGtleSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGNyZWF0aXZlW2tleV0gPT09ICdmdW5jdGlvbic7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IElWUEFJREFkVW5pdDtcblxuZnVuY3Rpb24gYWRkU3RhdGljVG9JbnRlcmZhY2UoSW50ZXJmYWNlLCBuYW1lLCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbnRlcmZhY2UsIG5hbWUsIHtcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcbn1cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSVZQQUlEQWRVbml0ID0gcmVxdWlyZSgnLi9JVlBBSURBZFVuaXQnKTtcbnZhciBTdWJzY3JpYmVyID0gcmVxdWlyZSgnLi9zdWJzY3JpYmVyJyk7XG52YXIgY2hlY2tWUEFJREludGVyZmFjZSA9IElWUEFJREFkVW5pdC5jaGVja1ZQQUlESW50ZXJmYWNlO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIE1FVEhPRFMgPSBJVlBBSURBZFVuaXQuTUVUSE9EUztcbnZhciBFUlJPUiA9ICdBZEVycm9yJztcbnZhciBBRF9DTElDSyA9ICdBZENsaWNrVGhydSc7XG52YXIgRklMVEVSRURfRVZFTlRTID0gSVZQQUlEQWRVbml0LkVWRU5UUy5maWx0ZXIoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuIGV2ZW50ICE9IEFEX0NMSUNLO1xufSk7XG5cbi8qKlxuICogVGhpcyBjYWxsYmFjayBpcyBkaXNwbGF5ZWQgYXMgZ2xvYmFsIG1lbWJlci4gVGhlIGNhbGxiYWNrIHVzZSBub2RlanMgZXJyb3ItZmlyc3QgY2FsbGJhY2sgc3R5bGVcbiAqIEBjYWxsYmFjayBOb2RlU3R5bGVDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd8bnVsbH1cbiAqIEBwYXJhbSB7dW5kZWZpbmVkfG9iamVjdH1cbiAqL1xuXG5cbi8qKlxuICogVlBBSURBZFVuaXRcbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSBWUEFJRENyZWF0aXZlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbZWxdIHRoaXMgd2lsbCBiZSB1c2VkIGluIGluaXRBZCBlbnZpcm9ubWVudFZhcnMuc2xvdCBpZiBkZWZpbmVkXG4gKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IFt2aWRlb10gdGhpcyB3aWxsIGJlIHVzZWQgaW4gaW5pdEFkIGVudmlyb25tZW50VmFycy52aWRlb1Nsb3QgaWYgZGVmaW5lZFxuICovXG5mdW5jdGlvbiBWUEFJREFkVW5pdChWUEFJRENyZWF0aXZlLCBlbCwgdmlkZW8sIGlmcmFtZSkge1xuICAgIHRoaXMuX2lzVmFsaWQgPSBjaGVja1ZQQUlESW50ZXJmYWNlKFZQQUlEQ3JlYXRpdmUpO1xuICAgIGlmICh0aGlzLl9pc1ZhbGlkKSB7XG4gICAgICAgIHRoaXMuX2NyZWF0aXZlID0gVlBBSURDcmVhdGl2ZTtcbiAgICAgICAgdGhpcy5fZWwgPSBlbDtcbiAgICAgICAgdGhpcy5fdmlkZW9FbCA9IHZpZGVvO1xuICAgICAgICB0aGlzLl9pZnJhbWUgPSBpZnJhbWU7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzID0gbmV3IFN1YnNjcmliZXIoKTtcbiAgICAgICAgJGFkZEV2ZW50c1N1YnNjcmliZXJzLmNhbGwodGhpcyk7XG4gICAgfVxufVxuXG5WUEFJREFkVW5pdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKElWUEFJREFkVW5pdC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIGlzVmFsaWRWUEFJREFkIHdpbGwgcmV0dXJuIGlmIHRoZSBWUEFJRENyZWF0aXZlIHBhc3NlZCBpbiBjb25zdHJ1Y3RvciBpcyB2YWxpZCBvciBub3RcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuaXNWYWxpZFZQQUlEQWQgPSBmdW5jdGlvbiBpc1ZhbGlkVlBBSURBZCgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNWYWxpZDtcbn07XG5cbklWUEFJREFkVW5pdC5NRVRIT0RTLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgLy9OT1RFOiB0aGlzIG1ldGhvZHMgYXJndW1lbnRzIG9yZGVyIGFyZSBpbXBsZW1lbnRlZCBkaWZmZXJlbnRseSBmcm9tIHRoZSBzcGVjXG4gICAgdmFyIGlnbm9yZXMgPSBbXG4gICAgICAgICdzdWJzY3JpYmUnLFxuICAgICAgICAndW5zdWJzY3JpYmUnLFxuICAgICAgICAnaW5pdEFkJ1xuICAgIF07XG5cbiAgICBpZiAoaWdub3Jlcy5pbmRleE9mKG1ldGhvZCkgIT09IC0xKSByZXR1cm47XG5cbiAgICBWUEFJREFkVW5pdC5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyaWF0eSA9IElWUEFJREFkVW5pdC5wcm90b3R5cGVbbWV0aG9kXS5sZW5ndGg7XG4gICAgICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gKGFyaWF0eSA9PT0gYXJncy5sZW5ndGgpID8gYXJncy5wb3AoKSA6IHVuZGVmaW5lZDtcblxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQsIGVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fY3JlYXRpdmVbbWV0aG9kXS5hcHBseSh0aGlzLl9jcmVhdGl2ZSwgYXJncyk7XG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpO1xuICAgICAgICB9LmJpbmQodGhpcyksIDApO1xuICAgIH07XG59KTtcblxuXG4vKipcbiAqIGluaXRBZCBjb25jcmVhdGUgaW1wbGVtZW50YXRpb25cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqIEBwYXJhbSB7c3RyaW5nfSB2aWV3TW9kZSBjYW4gYmUgJ25vcm1hbCcsICd0aHVtYm5haWwnIG9yICdmdWxsc2NyZWVuJ1xuICogQHBhcmFtIHtudW1iZXJ9IGRlc2lyZWRCaXRyYXRlIGluZGljYXRlcyB0aGUgZGVzaXJlZCBiaXRyYXRlIGluIGticHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY3JlYXRpdmVEYXRhXSB1c2VkIGZvciBhZGRpdGlvbmFsIGluaXRpYWxpemF0aW9uIGRhdGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBbZW52aXJvbm1lbnRWYXJzXSB1c2VkIGZvciBwYXNzaW5nIGltcGxlbWVudGF0aW9uLXNwZWNpZmljIG9mIGpzIHZlcnNpb24sIGlmIGVsICYgdmlkZW8gd2FzIHVzZWQgaW4gY29uc3RydWN0b3Igc2xvdCAmIHZpZGVvU2xvdCB3aWxsIGJlIGFkZGVkIHRvIHRoZSBvYmplY3RcbiAqIEBwYXJhbSB7Tm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5pbml0QWQgPSBmdW5jdGlvbiBpbml0QWQod2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEsIGVudmlyb25tZW50VmFycywgY2FsbGJhY2spIHtcbiAgICBjcmVhdGl2ZURhdGEgPSBjcmVhdGl2ZURhdGEgfHwge307XG4gICAgZW52aXJvbm1lbnRWYXJzID0gdXRpbHMuZXh0ZW5kKHtcbiAgICAgICAgc2xvdDogdGhpcy5fZWwsXG4gICAgICAgIHZpZGVvU2xvdDogdGhpcy5fdmlkZW9FbFxuICAgIH0sIGVudmlyb25tZW50VmFycyB8fCB7fSk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRpdmUuaW5pdEFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhLCBlbnZpcm9ubWVudFZhcnMpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvcik7XG4gICAgfS5iaW5kKHRoaXMpLCAwKTtcbn07XG5cbi8qKlxuICogc3Vic2NyaWJlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBoYW5kbGVyXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dFxuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50LCBoYW5kbGVyLCBjb250ZXh0KSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMuc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50LCBjb250ZXh0KTtcbn07XG5cblxuLyoqXG4gKiB1bnN1YnNjcmliZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gaGFuZGxlclxuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShldmVudCwgaGFuZGxlcikge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnVuc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50KTtcbn07XG5cbi8vYWxpYXNcblZQQUlEQWRVbml0LnByb3RvdHlwZS5vbiA9IFZQQUlEQWRVbml0LnByb3RvdHlwZS5zdWJzY3JpYmU7XG5WUEFJREFkVW5pdC5wcm90b3R5cGUub2ZmID0gVlBBSURBZFVuaXQucHJvdG90eXBlLnVuc3Vic2NyaWJlO1xuXG5JVlBBSURBZFVuaXQuR0VUVEVSUy5mb3JFYWNoKGZ1bmN0aW9uKGdldHRlcikge1xuICAgIFZQQUlEQWRVbml0LnByb3RvdHlwZVtnZXR0ZXJdID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0aXZlW2dldHRlcl0oKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgMCk7XG4gICAgfTtcbn0pO1xuXG4vKipcbiAqIHNldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHZvbHVtZVxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLnNldEFkVm9sdW1lID0gZnVuY3Rpb24gc2V0QWRWb2x1bWUodm9sdW1lLCBjYWxsYmFjaykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciByZXN1bHQsIGVycm9yID0gbnVsbDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0aXZlLnNldEFkVm9sdW1lKHZvbHVtZSk7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9jcmVhdGl2ZS5nZXRBZFZvbHVtZSgpO1xuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIGVycm9yID0gdXRpbHMudmFsaWRhdGUocmVzdWx0ID09PSB2b2x1bWUsICdmYWlsZWQgdG8gYXBwbHkgdm9sdW1lOiAnICsgdm9sdW1lKTtcbiAgICAgICAgfVxuICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KTtcbiAgICB9LmJpbmQodGhpcyksIDApO1xufTtcblxuVlBBSURBZFVuaXQucHJvdG90eXBlLl9kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB0aGlzLnN0b3BBZCgpO1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnVuc3Vic2NyaWJlQWxsKCk7XG59O1xuXG5mdW5jdGlvbiAkYWRkRXZlbnRzU3Vic2NyaWJlcnMoKSB7XG4gICAgLy8gc29tZSBhZHMgaW1wbGVtZW50XG4gICAgLy8gc28gdGhleSBvbmx5IGhhbmRsZSBvbmUgc3Vic2NyaWJlclxuICAgIC8vIHRvIGhhbmRsZSB0aGlzIHdlIGNyZWF0ZSBvdXIgb25lXG4gICAgRklMVEVSRURfRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2NyZWF0aXZlLnN1YnNjcmliZSgkdHJpZ2dlci5iaW5kKHRoaXMsIGV2ZW50KSwgZXZlbnQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG5cbiAgICAvLyBtYXAgdGhlIGNsaWNrIGV2ZW50IHRvIGJlIGFuIG9iamVjdCBpbnN0ZWFkIG9mIGRlcGVuZGluZyBvZiB0aGUgb3JkZXIgb2YgdGhlIGFyZ3VtZW50c1xuICAgIC8vIGFuZCB0byBiZSBjb25zaXN0ZW50IHdpdGggdGhlIGZsYXNoXG4gICAgdGhpcy5fY3JlYXRpdmUuc3Vic2NyaWJlKCRjbGlja1RocnVIb29rLmJpbmQodGhpcyksIEFEX0NMSUNLKTtcblxuICAgIC8vIGJlY2F1c2Ugd2UgYXJlIGFkZGluZyB0aGUgZWxlbWVudCBpbnNpZGUgdGhlIGlmcmFtZVxuICAgIC8vIHRoZSB1c2VyIGlzIG5vdCBhYmxlIHRvIGNsaWNrIGluIHRoZSB2aWRlb1xuICAgIGlmICh0aGlzLl92aWRlb0VsKSB7XG4gICAgICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSB0aGlzLl9pZnJhbWUuY29udGVudERvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgdmFyIHZpZGVvRWwgPSB0aGlzLl92aWRlb0VsO1xuICAgICAgICBkb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvY3VtZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZpZGVvRWwuY2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiAkY2xpY2tUaHJ1SG9vayh1cmwsIGlkLCBwbGF5ZXJIYW5kbGVzKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMudHJpZ2dlclN5bmMoQURfQ0xJQ0ssIHt1cmw6IHVybCwgaWQ6IGlkLCBwbGF5ZXJIYW5kbGVzOiBwbGF5ZXJIYW5kbGVzfSk7XG59XG5cbmZ1bmN0aW9uICR0cmlnZ2VyKGV2ZW50KSB7XG4gICAgLy8gVE9ETyBhdm9pZCBsZWFraW5nIGFyZ3VtZW50c1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQvd2lraS9PcHRpbWl6YXRpb24ta2lsbGVycyMzMi1sZWFraW5nLWFyZ3VtZW50c1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnRyaWdnZXIoZXZlbnQsIEFycmF5LnByb3RvdHlwZS5zbGljZShhcmd1bWVudHMsIDEpKTtcbn1cblxuZnVuY3Rpb24gY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCBzdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCkge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhlcnJvciwgcmVzdWx0KTtcbiAgICB9IGVsc2UgaWYgKGVycm9yKSB7XG4gICAgICAgIHN1YnNjcmliZXJzLnRyaWdnZXIoRVJST1IsIGVycm9yKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURBZFVuaXQ7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIHVuaXF1ZSA9IHV0aWxzLnVuaXF1ZSgndnBhaWRJZnJhbWUnKTtcbnZhciBWUEFJREFkVW5pdCA9IHJlcXVpcmUoJy4vVlBBSURBZFVuaXQnKTtcblxudmFyIGRlZmF1bHRUZW1wbGF0ZSA9ICc8IURPQ1RZUEUgaHRtbD48aHRtbCBsYW5nPVwiZW5cIj48aGVhZD48bWV0YSBjaGFyc2V0PVwiVVRGLThcIj48L2hlYWQ+PGJvZHkgc3R5bGU9XCJtYXJnaW46MDtwYWRkaW5nOjBcIj4nO1xuZGVmYXVsdFRlbXBsYXRlICs9ICc8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJ7e2lmcmFtZVVSTF9KU319XCI+PC9zY3JpcHQ+PHNjcmlwdD4nO1xuZGVmYXVsdFRlbXBsYXRlICs9ICdwYXJlbnQucG9zdE1lc3NhZ2UoXFwne1wiZXZlbnRcIjogXCJyZWFkeVwiLCBcImlkXCI6IFwie3tpZnJhbWVJRH19XCJ9XFwnLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTsnO1xuZGVmYXVsdFRlbXBsYXRlICs9ICc8L3NjcmlwdD48ZGl2IGNsYXNzPVwiYWQtZWxlbWVudFwiPjwvZGl2PjwvYm9keT48L2h0bWw+JztcblxudmFyIEFEX1NUT1BQRUQgPSAnQWRTdG9wcGVkJztcblxuLyoqXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBnbG9iYWwgbWVtYmVyLiBUaGUgY2FsbGJhY2sgdXNlIG5vZGVqcyBlcnJvci1maXJzdCBjYWxsYmFjayBzdHlsZVxuICogQGNhbGxiYWNrIE5vZGVTdHlsZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfVxuICogQHBhcmFtIHt1bmRlZmluZWR8b2JqZWN0fVxuICovXG5cbi8qKlxuICogVlBBSURIVE1MNUNsaWVudFxuICogQGNsYXNzXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWwgdGhhdCB3aWxsIGNvbnRhaW4gdGhlIGlmcmFtZSB0byBsb2FkIGFkVW5pdCBhbmQgYSBlbCB0byBhZGQgdG8gYWRVbml0IHNsb3RcbiAqIEBwYXJhbSB7SFRNTFZpZGVvRWxlbWVudH0gdmlkZW8gZGVmYXVsdCB2aWRlbyBlbGVtZW50IHRvIGJlIHVzZWQgYnkgYWRVbml0XG4gKiBAcGFyYW0ge29iamVjdH0gW3RlbXBsYXRlQ29uZmlnXSB0ZW1wbGF0ZTogaHRtbCB0ZW1wbGF0ZSB0byBiZSB1c2VkIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQsIGV4dHJhT3B0aW9uczogdG8gYmUgdXNlZCB3aGVuIHJlbmRlcmluZyB0aGUgdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBbdnBhaWRPcHRpb25zXSB0aW1lb3V0OiB3aGVuIGxvYWRpbmcgYWRVbml0XG4gKi9cbmZ1bmN0aW9uIFZQQUlESFRNTDVDbGllbnQoZWwsIHZpZGVvLCB0ZW1wbGF0ZUNvbmZpZywgdnBhaWRPcHRpb25zKSB7XG4gICAgdGVtcGxhdGVDb25maWcgPSB0ZW1wbGF0ZUNvbmZpZyB8fCB7fTtcblxuICAgIHRoaXMuX2lkID0gdW5pcXVlKCk7XG4gICAgdGhpcy5fZGVzdHJveWVkID0gZmFsc2U7XG5cbiAgICB0aGlzLl9mcmFtZUNvbnRhaW5lciA9IHV0aWxzLmNyZWF0ZUVsZW1lbnRJbkVsKGVsLCAnZGl2Jyk7XG4gICAgdGhpcy5fdmlkZW9FbCA9IHZpZGVvO1xuICAgIHRoaXMuX3ZwYWlkT3B0aW9ucyA9IHZwYWlkT3B0aW9ucyB8fCB7dGltZW91dDogMTAwMDB9O1xuXG4gICAgdGhpcy5fdGVtcGxhdGVDb25maWcgPSB7XG4gICAgICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZUNvbmZpZy50ZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGUsXG4gICAgICAgIGV4dHJhT3B0aW9uczogdGVtcGxhdGVDb25maWcuZXh0cmFPcHRpb25zIHx8IHt9XG4gICAgfTtcblxufVxuXG4vKipcbiAqIGRlc3Ryb3lcbiAqXG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9kZXN0cm95ZWQgPSB0cnVlO1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBpc0Rlc3Ryb3llZFxuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmlzRGVzdHJveWVkID0gZnVuY3Rpb24gaXNEZXN0cm95ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rlc3Ryb3llZDtcbn07XG5cbi8qKlxuICogbG9hZEFkVW5pdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBhZFVSTCB1cmwgb2YgdGhlIGpzIG9mIHRoZSBhZFVuaXRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLmxvYWRBZFVuaXQgPSBmdW5jdGlvbiBsb2FkQWRVbml0KGFkVVJMLCBjYWxsYmFjaykge1xuICAgICR0aHJvd0lmRGVzdHJveWVkLmNhbGwodGhpcyk7XG4gICAgJHVubG9hZFByZXZpb3VzQWRVbml0LmNhbGwodGhpcyk7XG5cbiAgICB2YXIgZnJhbWUgPSB1dGlscy5jcmVhdGVJZnJhbWVXaXRoQ29udGVudChcbiAgICAgICAgdGhpcy5fZnJhbWVDb250YWluZXIsXG4gICAgICAgIHRoaXMuX3RlbXBsYXRlQ29uZmlnLnRlbXBsYXRlLFxuICAgICAgICB1dGlscy5leHRlbmQoe1xuICAgICAgICAgICAgaWZyYW1lVVJMX0pTOiBhZFVSTCxcbiAgICAgICAgICAgIGlmcmFtZUlEOiB0aGlzLmdldElEKClcbiAgICAgICAgfSwgdGhpcy5fdGVtcGxhdGVDb25maWcuZXh0cmFPcHRpb25zKVxuICAgICk7XG4gICAgdGhpcy5fZnJhbWUgPSBmcmFtZTtcblxuICAgIHRoaXMuX29uTG9hZCA9IHV0aWxzLmNhbGxiYWNrVGltZW91dChcbiAgICAgICAgdGhpcy5fdnBhaWRPcHRpb25zLnRpbWVvdXQsXG4gICAgICAgIG9uTG9hZC5iaW5kKHRoaXMpLFxuICAgICAgICBvblRpbWVvdXQuYmluZCh0aGlzKVxuICAgICk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuX29uTG9hZCk7XG5cbiAgICBmdW5jdGlvbiBvbkxvYWQgKGUpIHtcbiAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOiBmYWxzZSAqL1xuICAgICAgICAvL2Rvbid0IGNsZWFyIHRpbWVvdXRcbiAgICAgICAgaWYgKGUub3JpZ2luICE9PSB3aW5kb3cubG9jYXRpb24ub3JpZ2luKSByZXR1cm47XG4gICAgICAgIHZhciByZXN1bHQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG5cbiAgICAgICAgLy9kb24ndCBjbGVhciB0aW1lb3V0XG4gICAgICAgIGlmIChyZXN1bHQuaWQgIT09IHRoaXMuZ2V0SUQoKSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBhZFVuaXQsIGVycm9yLCBjcmVhdGVBZDtcbiAgICAgICAgaWYgKCF0aGlzLl9mcmFtZS5jb250ZW50V2luZG93KSB7XG5cbiAgICAgICAgICAgIGVycm9yID0gJ3RoZSBpZnJhbWUgaXMgbm90IGFueW1vcmUgaW4gdGhlIERPTSB0cmVlJztcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3JlYXRlQWQgPSB0aGlzLl9mcmFtZS5jb250ZW50V2luZG93LmdldFZQQUlEQWQ7XG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKHR5cGVvZiBjcmVhdGVBZCA9PT0gJ2Z1bmN0aW9uJywgJ3RoZSBhZCBkaWRuXFwndCByZXR1cm4gYSBmdW5jdGlvbiB0byBjcmVhdGUgYW4gYWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgIHZhciBhZEVsID0gdGhpcy5fZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWQtZWxlbWVudCcpO1xuICAgICAgICAgICAgYWRVbml0ID0gbmV3IFZQQUlEQWRVbml0KGNyZWF0ZUFkKCksIGFkRWwsIHRoaXMuX3ZpZGVvRWwsIHRoaXMuX2ZyYW1lKTtcbiAgICAgICAgICAgIGFkVW5pdC5zdWJzY3JpYmUoQURfU1RPUFBFRCwgJGFkRGVzdHJveWVkLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgZXJyb3IgPSB1dGlscy52YWxpZGF0ZShhZFVuaXQuaXNWYWxpZFZQQUlEQWQoKSwgJ3RoZSBhZGQgaXMgbm90IGZ1bGx5IGNvbXBsYWludCB3aXRoIFZQQUlEIHNwZWNpZmljYXRpb24nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2FkVW5pdCA9IGFkVW5pdDtcbiAgICAgICAgJGRlc3Ryb3lMb2FkTGlzdGVuZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIGVycm9yID8gbnVsbCA6IGFkVW5pdCk7XG5cbiAgICAgICAgLy9jbGVhciB0aW1lb3V0XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgICAgY2FsbGJhY2soJ3RpbWVvdXQnLCBudWxsKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIHVubG9hZEFkVW5pdFxuICpcbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUudW5sb2FkQWRVbml0ID0gZnVuY3Rpb24gdW5sb2FkQWRVbml0KCkge1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBnZXRJRCB3aWxsIHJldHVybiB0aGUgdW5pcXVlIGlkXG4gKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5nZXRJRCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG59O1xuXG5cbi8qKlxuICogJHJlbW92ZUVsXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5mdW5jdGlvbiAkcmVtb3ZlRWwoa2V5KSB7XG4gICAgdmFyIGVsID0gdGhpc1trZXldO1xuICAgIGlmIChlbCkge1xuICAgICAgICBlbC5yZW1vdmUoKTtcbiAgICAgICAgZGVsZXRlIHRoaXNba2V5XTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uICRhZERlc3Ryb3llZCgpIHtcbiAgICAkcmVtb3ZlQWRFbGVtZW50cy5jYWxsKHRoaXMpO1xuICAgIGRlbGV0ZSB0aGlzLl9hZFVuaXQ7XG59XG5cbmZ1bmN0aW9uICR1bmxvYWRQcmV2aW91c0FkVW5pdCgpIHtcbiAgICAkcmVtb3ZlQWRFbGVtZW50cy5jYWxsKHRoaXMpO1xuICAgICRkZXN0cm95QWRVbml0LmNhbGwodGhpcyk7XG59XG5cbmZ1bmN0aW9uICRyZW1vdmVBZEVsZW1lbnRzKCkge1xuICAgICRyZW1vdmVFbC5jYWxsKHRoaXMsICdfZnJhbWUnKTtcbiAgICAkZGVzdHJveUxvYWRMaXN0ZW5lci5jYWxsKHRoaXMpO1xufVxuXG4vKipcbiAqICRkZXN0cm95TG9hZExpc3RlbmVyXG4gKlxuICovXG5mdW5jdGlvbiAkZGVzdHJveUxvYWRMaXN0ZW5lcigpIHtcbiAgICBpZiAodGhpcy5fb25Mb2FkKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5fb25Mb2FkKTtcbiAgICAgICAgdXRpbHMuY2xlYXJDYWxsYmFja1RpbWVvdXQodGhpcy5fb25Mb2FkKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX29uTG9hZDtcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gJGRlc3Ryb3lBZFVuaXQoKSB7XG4gICAgaWYgKHRoaXMuX2FkVW5pdCkge1xuICAgICAgICB0aGlzLl9hZFVuaXQuc3RvcEFkKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9hZFVuaXQ7XG4gICAgfVxufVxuXG4vKipcbiAqICR0aHJvd0lmRGVzdHJveWVkXG4gKlxuICovXG5mdW5jdGlvbiAkdGhyb3dJZkRlc3Ryb3llZCgpIHtcbiAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvciAoJ1ZQQUlESFRNTDVDbGllbnQgYWxyZWFkeSBkZXN0cm95ZWQhJyk7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlESFRNTDVDbGllbnQ7XG53aW5kb3cuVlBBSURIVE1MNUNsaWVudCA9IFZQQUlESFRNTDVDbGllbnQ7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gU3Vic2NyaWJlcigpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IHt9O1xufVxuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUoaGFuZGxlciwgZXZlbnROYW1lLCBjb250ZXh0KSB7XG4gICAgdGhpcy5nZXQoZXZlbnROYW1lKS5wdXNoKHtoYW5kbGVyOiBoYW5kbGVyLCBjb250ZXh0OiBjb250ZXh0fSk7XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50TmFtZSkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSB0aGlzLmdldChldmVudE5hbWUpLmZpbHRlcihmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICByZXR1cm4gaGFuZGxlciA9PT0gc3Vic2NyaWJlci5oYW5kbGVyO1xuICAgIH0pO1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmVBbGwgPSBmdW5jdGlvbiB1bnN1YnNjcmliZUFsbCgpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IHt9O1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKGV2ZW50TmFtZSwgZGF0YSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB0aGF0LmdldChldmVudE5hbWUpLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhhdC5nZXQoZXZlbnROYW1lKSkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuaGFuZGxlci5jYWxsKHN1YnNjcmliZXIuY29udGV4dCwgZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgIH0pO1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudHJpZ2dlclN5bmMgPSBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICB0aGlzLmdldChldmVudE5hbWUpLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgc3Vic2NyaWJlci5oYW5kbGVyLmNhbGwoc3Vic2NyaWJlci5jb250ZXh0LCBkYXRhKTtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChldmVudE5hbWUpIHtcbiAgICBpZiAoIXRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc3Vic2NyaWJlcnNbZXZlbnROYW1lXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU3Vic2NyaWJlcjtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIG5vb3AgYSBlbXB0eSBmdW5jdGlvblxuICovXG5mdW5jdGlvbiBub29wKCkge31cblxuLyoqXG4gKiB2YWxpZGF0ZSBpZiBpcyBub3QgdmFsaWRhdGUgd2lsbCByZXR1cm4gYW4gRXJyb3Igd2l0aCB0aGUgbWVzc2FnZVxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWYWxpZFxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGUoaXNWYWxpZCwgbWVzc2FnZSkge1xuICAgIHJldHVybiBpc1ZhbGlkID8gbnVsbCA6IG5ldyBFcnJvcihtZXNzYWdlKTtcbn1cblxudmFyIHRpbWVvdXRzID0ge307XG4vKipcbiAqIGNsZWFyQ2FsbGJhY2tUaW1lb3V0XG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBoYW5kbGVyIHRvIHJlbW92ZVxuICovXG5mdW5jdGlvbiBjbGVhckNhbGxiYWNrVGltZW91dChmdW5jKSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aW1lb3V0c1tmdW5jXTtcbiAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIGRlbGV0ZSB0aW1lb3V0c1tmdW5jXTtcbiAgICB9XG59XG5cbi8qKlxuICogY2FsbGJhY2tUaW1lb3V0IGlmIHRoZSBvblN1Y2Nlc3MgaXMgbm90IGNhbGxlZCBhbmQgcmV0dXJucyB0cnVlIGluIHRoZSB0aW1lbGltaXQgdGhlbiBvblRpbWVvdXQgd2lsbCBiZSBjYWxsZWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gdGltZXJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uU3VjY2Vzc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gb25UaW1lb3V0XG4gKi9cbmZ1bmN0aW9uIGNhbGxiYWNrVGltZW91dCh0aW1lciwgb25TdWNjZXNzLCBvblRpbWVvdXQpIHtcbiAgICB2YXIgY2FsbGJhY2ssIHRpbWVvdXQ7XG5cbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG9uU3VjY2VzcyA9IG5vb3A7XG4gICAgICAgIGRlbGV0ZSB0aW1lb3V0W2NhbGxiYWNrXTtcbiAgICAgICAgb25UaW1lb3V0KCk7XG4gICAgfSwgdGltZXIpO1xuXG4gICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3BldGthYW50b25vdi9ibHVlYmlyZC93aWtpL09wdGltaXphdGlvbi1raWxsZXJzIzMyLWxlYWtpbmctYXJndW1lbnRzXG4gICAgICAgIGlmIChvblN1Y2Nlc3MuYXBwbHkodGhpcywgYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgY2xlYXJDYWxsYmFja1RpbWVvdXQoY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHRpbWVvdXRzW2NhbGxiYWNrXSA9IHRpbWVvdXQ7XG5cbiAgICByZXR1cm4gY2FsbGJhY2s7XG59XG5cblxuLyoqXG4gKiBjcmVhdGVFbGVtZW50SW5FbFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHRhZ05hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICovXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50SW5FbChwYXJlbnQsIHRhZ05hbWUsIGlkKSB7XG4gICAgdmFyIG5FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgaWYgKGlkKSBuRWwuaWQgPSBpZDtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobkVsKTtcbiAgICByZXR1cm4gbkVsO1xufVxuXG4vKipcbiAqIGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50XG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgc2ltcGxlIHRlbXBsYXRlIHVzaW5nIHt7dmFyfX1cbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50KHBhcmVudCwgdGVtcGxhdGUsIGRhdGEpIHtcbiAgICB2YXIgaWZyYW1lID0gY3JlYXRlSWZyYW1lKHBhcmVudCk7XG4gICAgaWYgKCFzZXRJZnJhbWVDb250ZW50KGlmcmFtZSwgc2ltcGxlVGVtcGxhdGUodGVtcGxhdGUsIGRhdGEpKSkgcmV0dXJuO1xuICAgIHJldHVybiBpZnJhbWU7XG59XG5cbi8qKlxuICogY3JlYXRlSWZyYW1lXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUlmcmFtZShwYXJlbnQsIHVybCkge1xuICAgIHZhciBuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICBuRWwuc3JjID0gdXJsIHx8ICdhYm91dDpibGFuayc7XG4gICAgbkVsLm1hcmdpbldpZHRoID0gJzAnO1xuICAgIG5FbC5tYXJnaW5IZWlnaHQgPSAnMCc7XG4gICAgbkVsLmZyYW1lQm9yZGVyID0gJzAnO1xuICAgIG5FbC53aWR0aCA9ICcxMDAlJztcbiAgICBuRWwuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIG5FbC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgbkVsLnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgbkVsLnN0eWxlLnRvcCA9ICcwJztcbiAgICBuRWwuc3R5bGUubWFyZ2luID0gJzBweCc7XG4gICAgbkVsLnN0eWxlLnBhZGRpbmcgPSAnMHB4JztcbiAgICBuRWwuc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuICAgIG5FbC5zZXRBdHRyaWJ1dGUoJ1NDUk9MTElORycsJ05PJyk7XG4gICAgcGFyZW50LmlubmVySFRNTCA9ICcnO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChuRWwpO1xuICAgIHJldHVybiBuRWw7XG59XG5cbi8qKlxuICogc2ltcGxlVGVtcGxhdGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gKi9cbmZ1bmN0aW9uIHNpbXBsZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKSB7XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9ICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSA/IEpTT04uc3RyaW5naWZ5KGRhdGFba2V5XSkgOiBkYXRhW2tleV07XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShuZXcgUmVnRXhwKCd7eycgKyBrZXkgKyAnfX0nLCAnZycpLCB2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufVxuXG4vKipcbiAqIHNldElmcmFtZUNvbnRlbnRcbiAqXG4gKiBAcGFyYW0ge0hUTUxJZnJhbWVFbGVtZW50fSBpZnJhbWVFbFxuICogQHBhcmFtIGNvbnRlbnRcbiAqL1xuZnVuY3Rpb24gc2V0SWZyYW1lQ29udGVudChpZnJhbWVFbCwgY29udGVudCkge1xuICAgIHZhciBpZnJhbWVEb2MgPSBpZnJhbWVFbC5jb250ZW50V2luZG93ICYmIGlmcmFtZUVsLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gICAgaWYgKCFpZnJhbWVEb2MpIHJldHVybiBmYWxzZTtcblxuICAgIGlmcmFtZURvYy53cml0ZShjb250ZW50KTtcblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5cbi8qKlxuICogZXh0ZW5kIG9iamVjdCB3aXRoIGtleXMgZnJvbSBhbm90aGVyIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0b0V4dGVuZFxuICogQHBhcmFtIHtvYmplY3R9IGZyb21Tb3VyY2VcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKHRvRXh0ZW5kLCBmcm9tU291cmNlKSB7XG4gICAgT2JqZWN0LmtleXMoZnJvbVNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgdG9FeHRlbmRba2V5XSA9IGZyb21Tb3VyY2Vba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG9FeHRlbmQ7XG59XG5cblxuLyoqXG4gKiB1bmlxdWUgd2lsbCBjcmVhdGUgYSB1bmlxdWUgc3RyaW5nIGV2ZXJ5dGltZSBpcyBjYWxsZWQsIHNlcXVlbnRpYWxseSBhbmQgcHJlZml4ZWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4XG4gKi9cbmZ1bmN0aW9uIHVuaXF1ZShwcmVmaXgpIHtcbiAgICB2YXIgY291bnQgPSAtMTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgJ18nICsgKCsrY291bnQpO1xuICAgIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIG5vb3A6IG5vb3AsXG4gICAgdmFsaWRhdGU6IHZhbGlkYXRlLFxuICAgIGNsZWFyQ2FsbGJhY2tUaW1lb3V0OiBjbGVhckNhbGxiYWNrVGltZW91dCxcbiAgICBjYWxsYmFja1RpbWVvdXQ6IGNhbGxiYWNrVGltZW91dCxcbiAgICBjcmVhdGVFbGVtZW50SW5FbDogY3JlYXRlRWxlbWVudEluRWwsXG4gICAgY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQ6IGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50LFxuICAgIGNyZWF0ZUlmcmFtZTogY3JlYXRlSWZyYW1lLFxuICAgIHNpbXBsZVRlbXBsYXRlOiBzaW1wbGVUZW1wbGF0ZSxcbiAgICBzZXRJZnJhbWVDb250ZW50OiBzZXRJZnJhbWVDb250ZW50LFxuICAgIGV4dGVuZDogZXh0ZW5kLFxuICAgIHVuaXF1ZTogdW5pcXVlXG59O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBJbkxpbmUgPSByZXF1aXJlKCcuL0luTGluZScpO1xudmFyIFdyYXBwZXIgPSByZXF1aXJlKCcuL1dyYXBwZXInKTtcblxuZnVuY3Rpb24gQWQoYWRKVHJlZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgQWQpKSB7XG4gICAgcmV0dXJuIG5ldyBBZChhZEpUcmVlKTtcbiAgfVxuICB0aGlzLmluaXRpYWxpemUoYWRKVHJlZSk7XG59XG5cbkFkLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oYWRKVHJlZSkge1xuICB0aGlzLmlkID0gYWRKVHJlZS5hdHRyKCdpZCcpO1xuICB0aGlzLnNlcXVlbmNlID0gYWRKVHJlZS5hdHRyKCdzZXF1ZW5jZScpO1xuXG4gIGlmKGFkSlRyZWUuaW5MaW5lKSB7XG4gICAgdGhpcy5pbkxpbmUgPSBuZXcgSW5MaW5lKGFkSlRyZWUuaW5MaW5lKTtcbiAgfVxuXG4gIGlmKGFkSlRyZWUud3JhcHBlcil7XG4gICAgdGhpcy53cmFwcGVyID0gbmV3IFdyYXBwZXIoYWRKVHJlZS53cmFwcGVyKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBMaW5lYXIgPSByZXF1aXJlKCcuL0xpbmVhcicpO1xuXG5mdW5jdGlvbiBDcmVhdGl2ZShjcmVhdGl2ZUpUcmVlKSB7XG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIENyZWF0aXZlKSkge1xuICAgIHJldHVybiBuZXcgQ3JlYXRpdmUoY3JlYXRpdmVKVHJlZSk7XG4gIH1cblxuICB0aGlzLmlkID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdpZCcpO1xuICB0aGlzLnNlcXVlbmNlID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdzZXF1ZW5jZScpO1xuICB0aGlzLmFkSWQgPSBjcmVhdGl2ZUpUcmVlLmF0dHIoJ2FkSWQnKTtcbiAgdGhpcy5hcGlGcmFtZXdvcmsgPSBjcmVhdGl2ZUpUcmVlLmF0dHIoJ2FwaUZyYW1ld29yaycpO1xuXG4gIGlmKGNyZWF0aXZlSlRyZWUubGluZWFyKSB7XG4gICAgdGhpcy5saW5lYXIgPSBuZXcgTGluZWFyKGNyZWF0aXZlSlRyZWUubGluZWFyKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENyZWF0aXZlOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5mdW5jdGlvbiBJbkxpbmUoaW5saW5lSlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEluTGluZSkpIHtcbiAgICByZXR1cm4gbmV3IEluTGluZShpbmxpbmVKVHJlZSk7XG4gIH1cblxuICAvL1JlcXVpcmVkIEZpZWxkc1xuICB0aGlzLmFkVGl0bGUgPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuYWRUaXRsZSk7XG4gIHRoaXMuYWRTeXN0ZW0gPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuYWRTeXN0ZW0pO1xuICB0aGlzLmltcHJlc3Npb25zID0gdmFzdFV0aWwucGFyc2VJbXByZXNzaW9ucyhpbmxpbmVKVHJlZS5pbXByZXNzaW9uKTtcbiAgdGhpcy5jcmVhdGl2ZXMgPSB2YXN0VXRpbC5wYXJzZUNyZWF0aXZlcyhpbmxpbmVKVHJlZS5jcmVhdGl2ZXMpO1xuXG4gIC8vT3B0aW9uYWwgRmllbGRzXG4gIHRoaXMuZGVzY3JpcHRpb24gPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuZGVzY3JpcHRpb24pO1xuICB0aGlzLmFkdmVydGlzZXIgPSB4bWwua2V5VmFsdWUoaW5saW5lSlRyZWUuYWR2ZXJ0aXNlcik7XG4gIHRoaXMuc3VydmV5cyA9IHBhcnNlU3VydmV5cyhpbmxpbmVKVHJlZS5zdXJ2ZXkpO1xuICB0aGlzLmVycm9yID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmVycm9yKTtcbiAgdGhpcy5wcmljaW5nID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLnByaWNpbmcpO1xuICB0aGlzLmV4dGVuc2lvbnMgPSBpbmxpbmVKVHJlZS5leHRlbnNpb25zO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGFyc2VTdXJ2ZXlzKGlubGluZVN1cnZleXMpIHtcbiAgICBpZiAoaW5saW5lU3VydmV5cykge1xuICAgICAgcmV0dXJuIHV0aWxpdGllcy50cmFuc2Zvcm1BcnJheSh1dGlsaXRpZXMuaXNBcnJheShpbmxpbmVTdXJ2ZXlzKSA/IGlubGluZVN1cnZleXMgOiBbaW5saW5lU3VydmV5c10sIGZ1bmN0aW9uIChzdXJ2ZXkpIHtcbiAgICAgICAgaWYodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoc3VydmV5LmtleVZhbHVlKSl7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVyaTogc3VydmV5LmtleVZhbHVlLFxuICAgICAgICAgICAgdHlwZTogc3VydmV5LmF0dHIoJ3R5cGUnKVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEluTGluZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBUcmFja2luZ0V2ZW50ID0gcmVxdWlyZSgnLi9UcmFja2luZ0V2ZW50Jyk7XG52YXIgTWVkaWFGaWxlID0gcmVxdWlyZSgnLi9NZWRpYUZpbGUnKTtcbnZhciBWaWRlb0NsaWNrcyA9IHJlcXVpcmUoJy4vVmlkZW9DbGlja3MnKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciBwYXJzZXJzID0gcmVxdWlyZSgnLi9wYXJzZXJzJyk7XG5cbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxuXG5mdW5jdGlvbiBMaW5lYXIobGluZWFySlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIExpbmVhcikpIHtcbiAgICByZXR1cm4gbmV3IExpbmVhcihsaW5lYXJKVHJlZSk7XG4gIH1cblxuICAvL1JlcXVpcmVkIEVsZW1lbnRzXG4gIHRoaXMuZHVyYXRpb24gPSBwYXJzZXJzLmR1cmF0aW9uKHhtbC5rZXlWYWx1ZShsaW5lYXJKVHJlZS5kdXJhdGlvbikpO1xuICB0aGlzLm1lZGlhRmlsZXMgPSBwYXJzZU1lZGlhRmlsZXMobGluZWFySlRyZWUubWVkaWFGaWxlcyAmJiBsaW5lYXJKVHJlZS5tZWRpYUZpbGVzLm1lZGlhRmlsZSk7XG5cbiAgLy9PcHRpb25hbCBmaWVsZHNcbiAgdGhpcy50cmFja2luZ0V2ZW50cyA9IHBhcnNlVHJhY2tpbmdFdmVudHMobGluZWFySlRyZWUudHJhY2tpbmdFdmVudHMgJiYgbGluZWFySlRyZWUudHJhY2tpbmdFdmVudHMudHJhY2tpbmcsIHRoaXMuZHVyYXRpb24pO1xuICB0aGlzLnNraXBvZmZzZXQgPSBwYXJzZXJzLm9mZnNldCh4bWwuYXR0cihsaW5lYXJKVHJlZSwgJ3NraXBvZmZzZXQnKSwgdGhpcy5kdXJhdGlvbik7XG5cbiAgaWYgKGxpbmVhckpUcmVlLnZpZGVvQ2xpY2tzKSB7XG4gICAgdGhpcy52aWRlb0NsaWNrcyA9IG5ldyBWaWRlb0NsaWNrcyhsaW5lYXJKVHJlZS52aWRlb0NsaWNrcyk7XG4gIH1cblxuICBpZihsaW5lYXJKVHJlZS5hZFBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLmFkUGFyYW1ldGVycyA9IHhtbC5rZXlWYWx1ZShsaW5lYXJKVHJlZS5hZFBhcmFtZXRlcnMpO1xuXG4gICAgaWYoeG1sLmF0dHIobGluZWFySlRyZWUuYWRQYXJhbWV0ZXJzLCAneG1sRW5jb2RlZCcpKXtcbiAgICAgIHRoaXMuYWRQYXJhbWV0ZXJzID0geG1sLmRlY29kZSh0aGlzLmFkUGFyYW1ldGVycyk7XG4gICAgfVxuICB9XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBwYXJzZVRyYWNraW5nRXZlbnRzKHRyYWNraW5nRXZlbnRzLCBkdXJhdGlvbikge1xuICAgIHZhciB0cmFja2luZ3MgPSBbXTtcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh0cmFja2luZ0V2ZW50cykpIHtcbiAgICAgIHRyYWNraW5nRXZlbnRzID0gdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdFdmVudHMpID8gdHJhY2tpbmdFdmVudHMgOiBbdHJhY2tpbmdFdmVudHNdO1xuICAgICAgdHJhY2tpbmdFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tpbmdEYXRhKSB7XG4gICAgICAgIHRyYWNraW5ncy5wdXNoKG5ldyBUcmFja2luZ0V2ZW50KHRyYWNraW5nRGF0YSwgZHVyYXRpb24pKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdHJhY2tpbmdzO1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VNZWRpYUZpbGVzKG1lZGlhRmlsZXNKeG9uVHJlZSkge1xuICAgIHZhciBtZWRpYUZpbGVzID0gW107XG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQobWVkaWFGaWxlc0p4b25UcmVlKSkge1xuICAgICAgbWVkaWFGaWxlc0p4b25UcmVlID0gdXRpbGl0aWVzLmlzQXJyYXkobWVkaWFGaWxlc0p4b25UcmVlKSA/IG1lZGlhRmlsZXNKeG9uVHJlZSA6IFttZWRpYUZpbGVzSnhvblRyZWVdO1xuXG4gICAgICBtZWRpYUZpbGVzSnhvblRyZWUuZm9yRWFjaChmdW5jdGlvbiAobWZEYXRhKSB7XG4gICAgICAgIG1lZGlhRmlsZXMucHVzaChuZXcgTWVkaWFGaWxlKG1mRGF0YSkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBtZWRpYUZpbGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTGluZWFyOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5mdW5jdGlvbiBNZWRpYUZpbGUobWVkaWFGaWxlSlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1lZGlhRmlsZSkpIHtcbiAgICByZXR1cm4gbmV3IE1lZGlhRmlsZShtZWRpYUZpbGVKVHJlZSk7XG4gIH1cblxuICAvL1JlcXVpcmVkIGF0dHJpYnV0ZXNcbiAgdGhpcy5zcmMgPSB4bWwua2V5VmFsdWUobWVkaWFGaWxlSlRyZWUpO1xuICB0aGlzLmRlbGl2ZXJ5ID0gbWVkaWFGaWxlSlRyZWUuYXR0cignZGVsaXZlcnknKTtcbiAgdGhpcy50eXBlID0gbWVkaWFGaWxlSlRyZWUuYXR0cigndHlwZScpO1xuICB0aGlzLndpZHRoID0gbWVkaWFGaWxlSlRyZWUuYXR0cignd2lkdGgnKTtcbiAgdGhpcy5oZWlnaHQgPSBtZWRpYUZpbGVKVHJlZS5hdHRyKCdoZWlnaHQnKTtcblxuICAvL09wdGlvbmFsIGF0dHJpYnV0ZXNcbiAgdGhpcy5jb2RlYyA9IG1lZGlhRmlsZUpUcmVlLmF0dHIoJ2NvZGVjJyk7XG4gIHRoaXMuaWQgPSBtZWRpYUZpbGVKVHJlZS5hdHRyKCdpZCcpO1xuICB0aGlzLmJpdHJhdGUgPSBtZWRpYUZpbGVKVHJlZS5hdHRyKCdiaXRyYXRlJyk7XG4gIHRoaXMubWluQml0cmF0ZSA9IG1lZGlhRmlsZUpUcmVlLmF0dHIoJ21pbkJpdHJhdGUnKTtcbiAgdGhpcy5tYXhCaXRyYXRlID0gbWVkaWFGaWxlSlRyZWUuYXR0cignbWF4Qml0cmF0ZScpO1xuICB0aGlzLnNjYWxhYmxlID0gbWVkaWFGaWxlSlRyZWUuYXR0cignc2NhbGFibGUnKTtcbiAgdGhpcy5tYWludGFpbkFzcGVjdFJhdGlvID0gbWVkaWFGaWxlSlRyZWUuYXR0cignbWFpbnRhaW5Bc3BlY3RSYXRpbycpO1xuICB0aGlzLmFwaUZyYW1ld29yayA9IG1lZGlhRmlsZUpUcmVlLmF0dHIoJ2FwaUZyYW1ld29yaycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1lZGlhRmlsZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBwYXJzZXJzID0gcmVxdWlyZSgnLi9wYXJzZXJzJyk7XG5cbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxuZnVuY3Rpb24gVHJhY2tpbmdFdmVudCh0cmFja2luZ0pUcmVlLCBkdXJhdGlvbikge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVHJhY2tpbmdFdmVudCkpIHtcbiAgICByZXR1cm4gbmV3IFRyYWNraW5nRXZlbnQodHJhY2tpbmdKVHJlZSwgZHVyYXRpb24pO1xuICB9XG5cbiAgdGhpcy5uYW1lID0gdHJhY2tpbmdKVHJlZS5hdHRyKCdldmVudCcpO1xuICB0aGlzLnVyaSA9IHhtbC5rZXlWYWx1ZSh0cmFja2luZ0pUcmVlKTtcblxuICBpZigncHJvZ3Jlc3MnID09PSB0aGlzLm5hbWUpIHtcbiAgICB0aGlzLm9mZnNldCA9IHBhcnNlcnMub2Zmc2V0KHRyYWNraW5nSlRyZWUuYXR0cignb2Zmc2V0JyksIGR1cmF0aW9uKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYWNraW5nRXZlbnQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWQgPSByZXF1aXJlKCcuL0FkJyk7XG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi9WQVNURXJyb3InKTtcbnZhciBWQVNUUmVzcG9uc2UgPSByZXF1aXJlKCcuL1ZBU1RSZXNwb25zZScpO1xudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xuXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hc3luYycpO1xudmFyIGh0dHAgPSByZXF1aXJlKCcuLi8uLi91dGlscy9odHRwJykuaHR0cDtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbmZ1bmN0aW9uIFZBU1RDbGllbnQob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVkFTVENsaWVudCkpIHtcbiAgICByZXR1cm4gbmV3IFZBU1RDbGllbnQob3B0aW9ucyk7XG4gIH1cbiAgdmFyIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIFdSQVBQRVJfTElNSVQ6IDVcbiAgfTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5zZXR0aW5ncyA9IHV0aWxpdGllcy5leHRlbmQoe30sIG9wdGlvbnMsIGRlZmF1bHRPcHRpb25zKTtcbiAgdGhpcy5lcnJvclVSTE1hY3JvcyA9IFtdO1xufVxuXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5nZXRWQVNUUmVzcG9uc2UgPSBmdW5jdGlvbiBnZXRWQVNUUmVzcG9uc2UoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICB2YXIgZXJyb3IgPSBzYW5pdHlDaGVjayhhZFRhZ1VybCwgY2FsbGJhY2spO1xuICBpZiAoZXJyb3IpIHtcbiAgICBpZiAodXRpbGl0aWVzLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICB0aGlzLl9nZXRWQVNUQWQuYmluZCh0aGlzLCBhZFRhZ1VybCksXG4gICAgICBidWlsZFZBU1RSZXNwb25zZVxuICAgIF0sXG4gICAgY2FsbGJhY2spO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gYnVpbGRWQVNUUmVzcG9uc2UoYWRzQ2hhaW4sIGNiKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciByZXNwb25zZSA9IHRoYXQuX2J1aWxkVkFTVFJlc3BvbnNlKGFkc0NoYWluKTtcbiAgICAgIGNiKG51bGwsIHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjYihlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhhZFRhZ1VybCwgY2IpIHtcbiAgICBpZiAoIWFkVGFnVXJsKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUUmVzcG9uc2UsIG1pc3NpbmcgYWQgdGFnIFVSTCcpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUUmVzcG9uc2UsIG1pc3NpbmcgY2FsbGJhY2sgZnVuY3Rpb24nKTtcbiAgICB9XG4gIH1cbn07XG5cblZBU1RDbGllbnQucHJvdG90eXBlLl9nZXRWQVNUQWQgPSBmdW5jdGlvbiAoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICBnZXRBZFdhdGVyZmFsbChhZFRhZ1VybCwgZnVuY3Rpb24gKGVycm9yLCB2YXN0VHJlZSkge1xuICAgIHZhciB3YXRlcmZhbGxBZHMgPSB2YXN0VHJlZSAmJiB1dGlsaXRpZXMuaXNBcnJheSh2YXN0VHJlZS5hZHMpID8gdmFzdFRyZWUuYWRzIDogbnVsbDtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoYXQuX3RyYWNrRXJyb3IoZXJyb3IsIHdhdGVyZmFsbEFkcyk7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IsIHdhdGVyZmFsbEFkcyk7XG4gICAgfVxuXG4gICAgZ2V0QWQod2F0ZXJmYWxsQWRzLnNoaWZ0KCksIFtdLCB3YXRlcmZhbGxIYW5kbGVyKTtcblxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICBmdW5jdGlvbiB3YXRlcmZhbGxIYW5kbGVyKGVycm9yLCBhZENoYWluKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdGhhdC5fdHJhY2tFcnJvcihlcnJvciwgYWRDaGFpbik7XG4gICAgICAgIGlmICh3YXRlcmZhbGxBZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGdldEFkKHdhdGVyZmFsbEFkcy5zaGlmdCgpLFtdLCB3YXRlcmZhbGxIYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhlcnJvciwgYWRDaGFpbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKG51bGwsIGFkQ2hhaW4pO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBnZXRBZFdhdGVyZmFsbChhZFRhZ1VybCwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVxdWVzdFZhc3RYTUwgPSB0aGF0Ll9yZXF1ZXN0VkFTVFhtbC5iaW5kKHRoYXQsIGFkVGFnVXJsKTtcbiAgICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgcmVxdWVzdFZhc3RYTUwsXG4gICAgICBidWlsZFZhc3RXYXRlcmZhbGxcbiAgICBdLCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZFZhc3RXYXRlcmZhbGwoeG1sU3RyLCBjYWxsYmFjaykge1xuICAgIHZhciB2YXN0VHJlZTtcbiAgICB0cnkge1xuICAgICAgdmFzdFRyZWUgPSB4bWwudG9KWE9OVHJlZSh4bWxTdHIpO1xuXG4gICAgICBpZih1dGlsaXRpZXMuaXNBcnJheSh2YXN0VHJlZS5hZCkpIHtcbiAgICAgICAgdmFzdFRyZWUuYWRzID0gdmFzdFRyZWUuYWQ7XG4gICAgICB9IGVsc2UgaWYodmFzdFRyZWUuYWQpe1xuICAgICAgICB2YXN0VHJlZS5hZHMgPSBbdmFzdFRyZWUuYWRdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFzdFRyZWUuYWRzID0gW107XG4gICAgICB9XG4gICAgICBjYWxsYmFjayh2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSwgdmFzdFRyZWUpO1xuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLmJ1aWxkVmFzdFdhdGVyZmFsbCwgZXJyb3IgcGFyc2luZyB4bWxcIiwgMTAwKSwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVWQVNUVHJlZSh2YXN0VHJlZSkge1xuICAgIHZhciB2YXN0VmVyc2lvbiA9IHhtbC5hdHRyKHZhc3RUcmVlLCAndmVyc2lvbicpO1xuXG4gICAgaWYgKCF2YXN0VHJlZS5hZCkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLnZhbGlkYXRlVkFTVFRyZWUsIG5vIEFkIGluIFZBU1QgdHJlZScsIDMwMyk7XG4gICAgfVxuXG4gICAgaWYgKHZhc3RWZXJzaW9uICYmICh2YXN0VmVyc2lvbiAhPSAzICYmIHZhc3RWZXJzaW9uICE9IDIpKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQudmFsaWRhdGVWQVNUVHJlZSwgbm90IHN1cHBvcnRlZCBWQVNUIHZlcnNpb24gXCInICsgdmFzdFZlcnNpb24gKyAnXCInLCAxMDIpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QWQoYWRUYWdVcmwsIGFkQ2hhaW4sIGNhbGxiYWNrKSB7XG4gICAgaWYgKGFkQ2hhaW4ubGVuZ3RoID49IHRoYXQuV1JBUFBFUl9MSU1JVCkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC5nZXRBZCwgcGxheWVycyB3cmFwcGVyIGxpbWl0IHJlYWNoZWQgKHRoZSBsaW1pdCBpcyBcIiArIHRoYXQuV1JBUFBFUl9MSU1JVCArIFwiKVwiLCAzMDIpLCBhZENoYWluKTtcbiAgICB9XG5cbiAgICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhhZFRhZ1VybCkpIHtcbiAgICAgICAgICByZXF1ZXN0VkFTVEFkKGFkVGFnVXJsLCBuZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KG51bGwsIGFkVGFnVXJsKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJ1aWxkQWRcbiAgICBdLCBmdW5jdGlvbiAoZXJyb3IsIGFkKSB7XG4gICAgICBpZiAoYWQpIHtcbiAgICAgICAgYWRDaGFpbi5wdXNoKGFkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvciwgYWRDaGFpbik7XG4gICAgICB9XG5cbiAgICAgIGlmIChhZC53cmFwcGVyKSB7XG4gICAgICAgIHJldHVybiBnZXRBZChhZC53cmFwcGVyLlZBU1RBZFRhZ1VSSSwgYWRDaGFpbiwgY2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgYWRDaGFpbik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBidWlsZEFkKGFkSnhvblRyZWUsIGNhbGxiYWNrKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhZCA9IG5ldyBBZChhZEp4b25UcmVlKTtcbiAgICAgIGNhbGxiYWNrKHZhbGlkYXRlQWQoYWQpLCBhZCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcignb24gVkFTVENsaWVudC5nZXRWQVNUQWQuYnVpbGRBZCwgZXJyb3IgcGFyc2luZyB4bWwnLCAxMDApLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZUFkKGFkKSB7XG4gICAgdmFyIHdyYXBwZXIgPSBhZC53cmFwcGVyO1xuICAgIHZhciBpbkxpbmUgPSBhZC5pbkxpbmU7XG4gICAgdmFyIGVyck1zZ1ByZWZpeCA9ICdvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC52YWxpZGF0ZUFkLCAnO1xuXG4gICAgaWYgKGluTGluZSAmJiB3cmFwcGVyKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcihlcnJNc2dQcmVmaXggK1wiSW5MaW5lIGFuZCBXcmFwcGVyIGJvdGggZm91bmQgb24gdGhlIHNhbWUgQWRcIiwgMTAxKTtcbiAgICB9XG5cbiAgICBpZiAoIWluTGluZSAmJiAhd3JhcHBlcikge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICsgXCJub3Igd3JhcHBlciBub3IgaW5saW5lIGVsZW1lbnRzIGZvdW5kIG9uIHRoZSBBZFwiLCAxMDEpO1xuICAgIH1cblxuICAgIGlmIChpbkxpbmUgJiYgaW5MaW5lLmNyZWF0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArIFwibWlzc2luZyBjcmVhdGl2ZSBpbiBJbkxpbmUgZWxlbWVudFwiLCAxMDEpO1xuICAgIH1cblxuICAgIGlmICh3cmFwcGVyICYmICF3cmFwcGVyLlZBU1RBZFRhZ1VSSSkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICsgXCJtaXNzaW5nICdWQVNUQWRUYWdVUkknIGluIHdyYXBwZXJcIiwgMTAxKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXF1ZXN0VkFTVEFkKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICAgIHRoYXQuX3JlcXVlc3RWQVNUWG1sKGFkVGFnVXJsLCBmdW5jdGlvbiAoZXJyb3IsIHhtbFN0cikge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgdmFzdFRyZWUgPSB4bWwudG9KWE9OVHJlZSh4bWxTdHIpO1xuICAgICAgICBjYWxsYmFjayh2YWxpZGF0ZVZBU1RUcmVlKHZhc3RUcmVlKSwgdmFzdFRyZWUuYWQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5nZXRWQVNUQWQucmVxdWVzdFZBU1RBZCwgZXJyb3IgcGFyc2luZyB4bWxcIiwgMTAwKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblZBU1RDbGllbnQucHJvdG90eXBlLl9yZXF1ZXN0VkFTVFhtbCA9IGZ1bmN0aW9uIHJlcXVlc3RWQVNUWG1sKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICB0cnkge1xuICAgIGlmICh1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFRhZ1VybCkpIHtcbiAgICAgIGFkVGFnVXJsKHJlcXVlc3RIYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaHR0cC5nZXQoYWRUYWdVcmwsIHJlcXVlc3RIYW5kbGVyLCB7XG4gICAgICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgY2FsbGJhY2soZSk7XG4gIH1cblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHJlcXVlc3RIYW5kbGVyKGVycm9yLCByZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB2YXIgZXJyTXNnID0gdXRpbGl0aWVzLmlzRGVmaW5lZChzdGF0dXMpID9cbiAgICAgIFwib24gVkFTVENsaWVudC5yZXF1ZXN0VmFzdFhNTCwgSFRUUCByZXF1ZXN0IGVycm9yIHdpdGggc3RhdHVzICdcIiArIHN0YXR1cyArIFwiJ1wiIDpcbiAgICAgICAgXCJvbiBWQVNUQ2xpZW50LnJlcXVlc3RWYXN0WE1MLCBFcnJvciBnZXR0aW5nIHRoZSB0aGUgVkFTVCBYTUwgd2l0aCBoZSBwYXNzZWQgYWRUYWdYTUwgZm5cIjtcbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKGVyck1zZywgMzAxKSwgbnVsbCk7XG4gICAgfVxuXG4gICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UpO1xuICB9XG59O1xuXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fYnVpbGRWQVNUUmVzcG9uc2UgPSBmdW5jdGlvbiBidWlsZFZBU1RSZXNwb25zZShhZHNDaGFpbikge1xuICB2YXIgcmVzcG9uc2UgPSBuZXcgVkFTVFJlc3BvbnNlKCk7XG4gIGFkZEFkc1RvUmVzcG9uc2UocmVzcG9uc2UsIGFkc0NoYWluKTtcbiAgdmFsaWRhdGVSZXNwb25zZShyZXNwb25zZSk7XG5cbiAgcmV0dXJuIHJlc3BvbnNlO1xuXG4gIC8vKioqIExvY2FsIGZ1bmN0aW9uICoqKipcbiAgZnVuY3Rpb24gYWRkQWRzVG9SZXNwb25zZShyZXNwb25zZSwgYWRzKSB7XG4gICAgYWRzLmZvckVhY2goZnVuY3Rpb24gKGFkKSB7XG4gICAgICByZXNwb25zZS5hZGRBZChhZCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB2YWxpZGF0ZVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgdmFyIHByb2dyZXNzRXZlbnRzID0gcmVzcG9uc2UudHJhY2tpbmdFdmVudHMucHJvZ3Jlc3M7XG5cbiAgICBpZiAoIXJlc3BvbnNlLmhhc0xpbmVhcigpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5fYnVpbGRWQVNUUmVzcG9uc2UsIFJlY2VpdmVkIGFuIEFkIHR5cGUgdGhhdCBpcyBub3Qgc3VwcG9ydGVkXCIsIDIwMCk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3BvbnNlLmR1cmF0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50Ll9idWlsZFZBU1RSZXNwb25zZSwgTWlzc2luZyBkdXJhdGlvbiBmaWVsZCBpbiBWQVNUIHJlc3BvbnNlXCIsIDEwMSk7XG4gICAgfVxuXG4gICAgaWYgKHByb2dyZXNzRXZlbnRzKSB7XG4gICAgICBwcm9ncmVzc0V2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9ncmVzc0V2ZW50KSB7XG4gICAgICAgIGlmICghdXRpbGl0aWVzLmlzTnVtYmVyKHByb2dyZXNzRXZlbnQub2Zmc2V0KSkge1xuICAgICAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50Ll9idWlsZFZBU1RSZXNwb25zZSwgbWlzc2luZyBvciB3cm9uZyBvZmZzZXQgYXR0cmlidXRlIG9uIHByb2dyZXNzIHRyYWNraW5nIGV2ZW50XCIsIDEwMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuVkFTVENsaWVudC5wcm90b3R5cGUuX3RyYWNrRXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IsIGFkQ2hhaW4pIHtcbiAgaWYgKCF1dGlsaXRpZXMuaXNBcnJheShhZENoYWluKSB8fCBhZENoYWluLmxlbmd0aCA9PT0gMCkgeyAvL1RoZXJlIGlzIG5vdGhpbmcgdG8gdHJhY2tcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgZXJyb3JVUkxNYWNyb3MgPSBbXTtcbiAgYWRDaGFpbi5mb3JFYWNoKGFkZEVycm9yVXJsTWFjcm9zKTtcbiAgdmFzdFV0aWwudHJhY2soZXJyb3JVUkxNYWNyb3MsIHtFUlJPUkNPREU6IGVycm9yLmNvZGUgfHwgOTAwfSk7ICAvLzkwMCA8PT0gVW5kZWZpbmVkIGVycm9yXG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgICoqKi9cbiAgZnVuY3Rpb24gYWRkRXJyb3JVcmxNYWNyb3MoYWQpIHtcbiAgICBpZiAoYWQud3JhcHBlciAmJiBhZC53cmFwcGVyLmVycm9yKSB7XG4gICAgICBlcnJvclVSTE1hY3Jvcy5wdXNoKGFkLndyYXBwZXIuZXJyb3IpO1xuICAgIH1cblxuICAgIGlmIChhZC5pbkxpbmUgJiYgYWQuaW5MaW5lLmVycm9yKSB7XG4gICAgICBlcnJvclVSTE1hY3Jvcy5wdXNoKGFkLmluTGluZS5lcnJvcik7XG4gICAgfVxuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RDbGllbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFZBU1RFcnJvcihtZXNzYWdlLCBjb2RlKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdWQVNUIEVycm9yOiAnICsgKG1lc3NhZ2UgfHwgJycpO1xuICBpZiAoY29kZSkge1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gIH1cbn1cblxuVkFTVEVycm9yLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuVkFTVEVycm9yLnByb3RvdHlwZS5uYW1lID0gXCJWQVNUIEVycm9yXCI7XG5cbm1vZHVsZS5leHBvcnRzID0gVkFTVEVycm9yOyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBJbm5lciBoZWxwZXIgY2xhc3MgdGhhdCBkZWFscyB3aXRoIHRoZSBsb2dpYyBvZiB0aGUgaW5kaXZpZHVhbCBzdGVwcyBuZWVkZWQgdG8gc2V0dXAgYW4gYWQgaW4gdGhlIHBsYXllci5cbiAqXG4gKiBAcGFyYW0gcGxheWVyIHtvYmplY3R9IGluc3RhbmNlIG9mIHRoZSBwbGF5ZXIgdGhhdCB3aWxsIHBsYXkgdGhlIGFkLiBJdCBhc3N1bWVzIHRoYXQgdGhlIHZpZGVvanMtY29udHJpYi1hZHMgcGx1Z2luXG4gKiAgICAgICAgICAgICAgICAgICAgICAgIGhhcyBiZWVuIGluaXRpYWxpemVkIHdoZW4geW91IHVzZSBpdHMgdXRpbGl0eSBmdW5jdGlvbnMuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKi9cblxudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4vVkFTVFJlc3BvbnNlJyk7XG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi9WQVNURXJyb3InKTtcbnZhciBWQVNUVHJhY2tlciA9IHJlcXVpcmUoJy4vVkFTVFRyYWNrZXInKTtcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcblxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXN5bmMnKTtcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcbnZhciBwbGF5ZXJVdGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3BsYXllclV0aWxzJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBWQVNUSW50ZWdyYXRvcihwbGF5ZXIpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RJbnRlZ3JhdG9yKSkge1xuICAgIHJldHVybiBuZXcgVkFTVEludGVncmF0b3IocGxheWVyKTtcbiAgfVxuXG4gIHRoaXMucGxheWVyID0gcGxheWVyO1xufVxuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUucGxheUFkID0gZnVuY3Rpb24gcGxheUFkKHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IHV0aWxpdGllcy5ub29wO1xuXG4gIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcbiAgICByZXR1cm4gY2FsbGJhY2sobmV3IFZBU1RFcnJvcignT24gVkFTVEludGVncmF0b3IsIG1pc3NpbmcgcmVxdWlyZWQgVkFTVFJlc3BvbnNlJykpO1xuICB9XG5cbiAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgbmV4dChudWxsLCB2YXN0UmVzcG9uc2UpO1xuICAgIH0sXG4gICAgdGhpcy5fc2VsZWN0QWRTb3VyY2UuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9jcmVhdGVWQVNUVHJhY2tlci5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2FkZENsaWNrVGhyb3VnaC5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2FkZFNraXBCdXR0b24uYmluZCh0aGlzKSxcbiAgICB0aGlzLl9zZXR1cEV2ZW50cy5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX3BsYXlTZWxlY3RlZEFkLmJpbmQodGhpcylcbiAgXSwgZnVuY3Rpb24gKGVycm9yLCByZXNwb25zZSkge1xuICAgIGlmIChlcnJvciAmJiByZXNwb25zZSkge1xuICAgICAgdGhhdC5fdHJhY2tFcnJvcihlcnJvciwgcmVzcG9uc2UpO1xuICAgIH1cbiAgICBjYWxsYmFjayhlcnJvciwgcmVzcG9uc2UpO1xuICB9KTtcblxuICB0aGlzLl9hZFVuaXQgPSB7XG4gICAgX3NyYzogbnVsbCxcbiAgICB0eXBlOiAnVkFTVCcsXG4gICAgcGF1c2VBZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5wbGF5ZXIucGF1c2UodHJ1ZSk7XG4gICAgfSxcblxuICAgIHJlc3VtZUFkOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LnBsYXllci5wbGF5KHRydWUpO1xuICAgIH0sXG5cbiAgICBpc1BhdXNlZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoYXQucGxheWVyLnBhdXNlZCh0cnVlKTtcbiAgICB9LFxuXG4gICAgZ2V0U3JjOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc3JjO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdGhpcy5fYWRVbml0O1xufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9zZWxlY3RBZFNvdXJjZSA9IGZ1bmN0aW9uIHNlbGVjdEFkU291cmNlKHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgc291cmNlO1xuXG4gIHZhciBwbGF5ZXJXaWR0aCA9IGRvbS5nZXREaW1lbnNpb24odGhpcy5wbGF5ZXIuZWwoKSkud2lkdGg7XG4gIHJlc3BvbnNlLm1lZGlhRmlsZXMuc29ydChmdW5jdGlvbiBjb21wYXJlVG8oYSwgYikge1xuICAgIHZhciBkZWx0YUEgPSBNYXRoLmFicyhwbGF5ZXJXaWR0aCAtIGEud2lkdGgpO1xuICAgIHZhciBkZWx0YUIgPSBNYXRoLmFicyhwbGF5ZXJXaWR0aCAtIGIud2lkdGgpO1xuICAgIHJldHVybiBkZWx0YUEgLSBkZWx0YUI7XG4gIH0pO1xuXG4gIHNvdXJjZSA9IHRoaXMucGxheWVyLnNlbGVjdFNvdXJjZShyZXNwb25zZS5tZWRpYUZpbGVzKS5zb3VyY2U7XG5cbiAgaWYgKHNvdXJjZSkge1xuICAgIGlmICh0aGlzLl9hZFVuaXQpIHtcbiAgICAgIHRoaXMuX2FkVW5pdC5fc3JjID0gc291cmNlO1xuICAgIH1cbiAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgc291cmNlLCByZXNwb25zZSk7XG4gIH1cblxuICAvLyBjb2RlIDQwMyA8PT0gQ291bGRuJ3QgZmluZCBNZWRpYUZpbGUgdGhhdCBpcyBzdXBwb3J0ZWQgYnkgdGhpcyB2aWRlbyBwbGF5ZXJcbiAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIkNvdWxkIG5vdCBmaW5kIEFkIG1lZGlhZmlsZSBzdXBwb3J0ZWQgYnkgdGhpcyBwbGF5ZXJcIiwgNDAzKSwgcmVzcG9uc2UpO1xufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9jcmVhdGVWQVNUVHJhY2tlciA9IGZ1bmN0aW9uIGNyZWF0ZVZBU1RUcmFja2VyKGFkTWVkaWFGaWxlLCByZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdHJ5IHtcbiAgICBjYWxsYmFjayhudWxsLCBhZE1lZGlhRmlsZSwgbmV3IFZBU1RUcmFja2VyKGFkTWVkaWFGaWxlLnNyYywgcmVzcG9uc2UpLCByZXNwb25zZSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWxsYmFjayhlLCByZXNwb25zZSk7XG4gIH1cbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fc2V0dXBFdmVudHMgPSBmdW5jdGlvbiBzZXR1cEV2ZW50cyhhZE1lZGlhRmlsZSwgdHJhY2tlciwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciBwcmV2aW91c2x5TXV0ZWQ7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgcGxheWVyLm9uKCdmdWxsc2NyZWVuY2hhbmdlJywgdHJhY2tGdWxsc2NyZWVuQ2hhbmdlKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkU3RhcnQnLCB0cmFja0ltcHJlc3Npb25zKTtcbiAgcGxheWVyLm9uKCdwYXVzZScsIHRyYWNrUGF1c2UpO1xuICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCB0cmFja1Byb2dyZXNzKTtcbiAgcGxheWVyLm9uKCd2b2x1bWVjaGFuZ2UnLCB0cmFja1ZvbHVtZUNoYW5nZSk7XG5cbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCB1bmJpbmRFdmVudHMpO1xuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJywgJ3Zhc3QuYWRTa2lwJ10sIGZ1bmN0aW9uKGV2dCl7XG4gICAgaWYoZXZ0LnR5cGUgPT09ICd2YXN0LmFkRW5kJyl7XG4gICAgICB0cmFja2VyLnRyYWNrQ29tcGxldGUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjYWxsYmFjayhudWxsLCBhZE1lZGlhRmlsZSwgcmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gdW5iaW5kRXZlbnRzKCkge1xuICAgIHBsYXllci5vZmYoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB0cmFja0Z1bGxzY3JlZW5DaGFuZ2UpO1xuICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRTdGFydCcsIHRyYWNrSW1wcmVzc2lvbnMpO1xuICAgIHBsYXllci5vZmYoJ3BhdXNlJywgdHJhY2tQYXVzZSk7XG4gICAgcGxheWVyLm9mZigndGltZXVwZGF0ZScsIHRyYWNrUHJvZ3Jlc3MpO1xuICAgIHBsYXllci5vZmYoJ3ZvbHVtZWNoYW5nZScsIHRyYWNrVm9sdW1lQ2hhbmdlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrRnVsbHNjcmVlbkNoYW5nZSgpIHtcbiAgICBpZiAocGxheWVyLmlzRnVsbHNjcmVlbigpKSB7XG4gICAgICB0cmFja2VyLnRyYWNrRnVsbHNjcmVlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFja2VyLnRyYWNrRXhpdEZ1bGxzY3JlZW4oKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1BhdXNlKCkge1xuICAgIC8vTk9URTogd2hlbmV2ZXIgYSB2aWRlbyBlbmRzIHRoZSB2aWRlbyBFbGVtZW50IHRyaWdnZXJzIGEgJ3BhdXNlJyBldmVudCBiZWZvcmUgdGhlICdlbmRlZCcgZXZlbnQuXG4gICAgLy8gICAgICBXZSBzaG91bGQgbm90IHRyYWNrIHRoaXMgcGF1c2UgZXZlbnQgYmVjYXVzZSBpdCBtYWtlcyB0aGUgVkFTVCB0cmFja2luZyBjb25mdXNpbmcgYWdhaW4gd2UgdXNlIGFcbiAgICAvLyAgICAgIFRocmVzaG9sZCBvZiAyIHNlY29uZHMgdG8gcHJldmVudCBmYWxzZSBwb3NpdGl2ZXMgb24gSU9TLlxuICAgIGlmIChNYXRoLmFicyhwbGF5ZXIuZHVyYXRpb24oKSAtIHBsYXllci5jdXJyZW50VGltZSgpKSA8IDIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cmFja2VyLnRyYWNrUGF1c2UoKTtcbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydwbGF5JywgJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYoZXZ0LnR5cGUgPT09ICdwbGF5Jyl7XG4gICAgICAgIHRyYWNrZXIudHJhY2tSZXN1bWUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrUHJvZ3Jlc3MoKSB7XG4gICAgdmFyIGN1cnJlbnRUaW1lSW5NcyA9IHBsYXllci5jdXJyZW50VGltZSgpICogMTAwMDtcbiAgICB0cmFja2VyLnRyYWNrUHJvZ3Jlc3MoY3VycmVudFRpbWVJbk1zKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrSW1wcmVzc2lvbnMoKSB7XG4gICAgdHJhY2tlci50cmFja0ltcHJlc3Npb25zKCk7XG4gICAgdHJhY2tlci50cmFja0NyZWF0aXZlVmlldygpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tWb2x1bWVDaGFuZ2UoKSB7XG4gICAgdmFyIG11dGVkID0gcGxheWVyLm11dGVkKCk7XG4gICAgaWYgKG11dGVkKSB7XG4gICAgICB0cmFja2VyLnRyYWNrTXV0ZSgpO1xuICAgIH0gZWxzZSBpZiAocHJldmlvdXNseU11dGVkKSB7XG4gICAgICB0cmFja2VyLnRyYWNrVW5tdXRlKCk7XG4gICAgfVxuICAgIHByZXZpb3VzbHlNdXRlZCA9IG11dGVkO1xuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX2FkZFNraXBCdXR0b24gPSBmdW5jdGlvbiBhZGRTa2lwQnV0dG9uKHNvdXJjZSwgdHJhY2tlciwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciBza2lwT2Zmc2V0SW5TZWM7XG4gIHZhciB0aGF0ID0gdGhpcztcblxuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKHJlc3BvbnNlLnNraXBvZmZzZXQpKSB7XG4gICAgc2tpcE9mZnNldEluU2VjID0gcmVzcG9uc2Uuc2tpcG9mZnNldCAvIDEwMDA7XG4gICAgYWRkU2tpcEJ1dHRvblRvUGxheWVyKHRoaXMucGxheWVyLCBza2lwT2Zmc2V0SW5TZWMpO1xuICB9XG4gIGNhbGxiYWNrKG51bGwsIHNvdXJjZSwgdHJhY2tlciwgcmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICBmdW5jdGlvbiBhZGRTa2lwQnV0dG9uVG9QbGF5ZXIocGxheWVyLCBza2lwT2Zmc2V0KSB7XG4gICAgdmFyIHNraXBCdXR0b24gPSBjcmVhdGVTa2lwQnV0dG9uKHBsYXllcik7XG4gICAgdmFyIHVwZGF0ZVNraXBCdXR0b24gPSB1cGRhdGVTa2lwQnV0dG9uU3RhdGUuYmluZCh0aGF0LCBza2lwQnV0dG9uLCBza2lwT2Zmc2V0LCBwbGF5ZXIpO1xuXG4gICAgcGxheWVyLmVsKCkuYXBwZW5kQ2hpbGQoc2tpcEJ1dHRvbik7XG4gICAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdXBkYXRlU2tpcEJ1dHRvbik7XG5cbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZVNraXBCdXR0b24pO1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlU2tpcEJ1dHRvbigpIHtcbiAgICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB1cGRhdGVTa2lwQnV0dG9uKTtcbiAgICAgIGRvbS5yZW1vdmUoc2tpcEJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2tpcEJ1dHRvbihwbGF5ZXIpIHtcbiAgICB2YXIgc2tpcEJ1dHRvbiA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCBcInZhc3Qtc2tpcC1idXR0b25cIik7XG5cbiAgICBza2lwQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGRvbS5oYXNDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpKSB7XG4gICAgICAgIHRyYWNrZXIudHJhY2tTa2lwKCk7XG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU2tpcCcpO1xuICAgICAgfVxuXG4gICAgICAvL1dlIHByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb24gdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgY2xpY2tUaHJvdWdoIGFuZCBzbyBvblxuICAgICAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHNraXBCdXR0b247XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTa2lwQnV0dG9uU3RhdGUoc2tpcEJ1dHRvbiwgc2tpcE9mZnNldCwgcGxheWVyKSB7XG4gICAgdmFyIHRpbWVMZWZ0ID0gTWF0aC5jZWlsKHNraXBPZmZzZXQgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSk7XG4gICAgaWYgKHRpbWVMZWZ0ID4gMCkge1xuICAgICAgc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNraXAgaW4gXCIgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyh0aW1lTGVmdCwgMikgKyBcIi4uLlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWRvbS5oYXNDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpKSB7XG4gICAgICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCAnZW5hYmxlZCcpO1xuICAgICAgICBza2lwQnV0dG9uLmlubmVySFRNTCA9IFwiU2tpcCBhZFwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9hZGRDbGlja1Rocm91Z2ggPSBmdW5jdGlvbiBhZGRDbGlja1Rocm91Z2gobWVkaWFGaWxlLCB0cmFja2VyLCByZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgYmxvY2tlciA9IGNyZWF0ZUNsaWNrVGhyb3VnaEJsb2NrZXIocGxheWVyLCB0cmFja2VyLCByZXNwb25zZSk7XG4gIHZhciB1cGRhdGVCbG9ja2VyID0gdXBkYXRlQmxvY2tlclVSTC5iaW5kKHRoaXMsIGJsb2NrZXIsIHJlc3BvbnNlLCBwbGF5ZXIpO1xuXG4gIHBsYXllci5lbCgpLmluc2VydEJlZm9yZShibG9ja2VyLCBwbGF5ZXIuY29udHJvbEJhci5lbCgpKTtcbiAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdXBkYXRlQmxvY2tlcik7XG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlQmxvY2tlcik7XG5cbiAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIG1lZGlhRmlsZSwgdHJhY2tlciwgcmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cblxuICBmdW5jdGlvbiBjcmVhdGVDbGlja1Rocm91Z2hCbG9ja2VyKHBsYXllciwgdHJhY2tlciwgcmVzcG9uc2UpIHtcbiAgICB2YXIgYmxvY2tlciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICB2YXIgY2xpY2tUaHJvdWdoTWFjcm8gPSByZXNwb25zZS5jbGlja1Rocm91Z2g7XG5cbiAgICBkb20uYWRkQ2xhc3MoYmxvY2tlciwgJ3Zhc3QtYmxvY2tlcicpO1xuICAgIGJsb2NrZXIuaHJlZiA9IGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKGNsaWNrVGhyb3VnaE1hY3JvLCBwbGF5ZXIpO1xuXG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhjbGlja1Rocm91Z2hNYWNybykpIHtcbiAgICAgIGJsb2NrZXIudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgICB9XG5cbiAgICBibG9ja2VyLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKHBsYXllci5wYXVzZWQoKSkge1xuICAgICAgICBwbGF5ZXIucGxheSgpO1xuXG4gICAgICAgIC8vV2UgcHJldmVudCBldmVudCBwcm9wYWdhdGlvbiB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIHRoZSBwbGF5ZXIncyBub3JtYWwgcGF1c2UgbWVjaGFuaXNtXG4gICAgICAgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgICAgdHJhY2tlci50cmFja0NsaWNrKCk7XG4gICAgfTtcblxuICAgIHJldHVybiBibG9ja2VyO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlQmxvY2tlclVSTChibG9ja2VyLCByZXNwb25zZSwgcGxheWVyKSB7XG4gICAgYmxvY2tlci5ocmVmID0gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwocmVzcG9uc2UuY2xpY2tUaHJvdWdoLCBwbGF5ZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwoY2xpY2tUaHJvdWdoTWFjcm8sIHBsYXllcikge1xuICAgIHZhciB2YXJpYWJsZXMgPSB7XG4gICAgICBBU1NFVFVSSTogbWVkaWFGaWxlLnNyYyxcbiAgICAgIENPTlRFTlRQTEFZSEVBRDogdmFzdFV0aWwuZm9ybWF0UHJvZ3Jlc3MocGxheWVyLmN1cnJlbnRUaW1lKCkgKiAxMDAwKVxuICAgIH07XG5cbiAgICByZXR1cm4gY2xpY2tUaHJvdWdoTWFjcm8gPyB2YXN0VXRpbC5wYXJzZVVSTE1hY3JvKGNsaWNrVGhyb3VnaE1hY3JvLCB2YXJpYWJsZXMpIDogJyMnO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQmxvY2tlcigpIHtcbiAgICBwbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgdXBkYXRlQmxvY2tlcik7XG4gICAgZG9tLnJlbW92ZShibG9ja2VyKTtcbiAgfVxufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9wbGF5U2VsZWN0ZWRBZCA9IGZ1bmN0aW9uIHBsYXlTZWxlY3RlZEFkKHNvdXJjZSwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcblxuICBwbGF5ZXIucHJlbG9hZChcImF1dG9cIik7IC8vd2l0aG91dCBwcmVsb2FkPWF1dG8gdGhlIGR1cmF0aW9uY2hhbmdlIGV2ZW50IGlzIG5ldmVyIGZpcmVkXG4gIHBsYXllci5zcmMoc291cmNlKTtcblxuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydkdXJhdGlvbmNoYW5nZScsICdlcnJvcicsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKGV2dC50eXBlID09PSAnZHVyYXRpb25jaGFuZ2UnKSB7XG4gICAgICBwbGF5QWQoKTtcbiAgICB9IGVsc2UgaWYoZXZ0LnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUSW50ZWdyYXRvciwgUGxheWVyIGlzIHVuYWJsZSB0byBwbGF5IHRoZSBBZFwiLCA0MDApLCByZXNwb25zZSk7XG4gICAgfVxuICAgIC8vTk9URTogSWYgdGhlIGFkcyBnZXQgY2FuY2VsZWQgd2UgZG8gbm90aGluZy9cbiAgfSk7XG5cbiAgLyoqKiogbG9jYWwgZnVuY3Rpb25zICoqKioqKi9cbiAgZnVuY3Rpb24gcGxheUFkKCkge1xuICAgIHBsYXllci5wbGF5KCk7XG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsncGxheWluZycsICd2YXN0LmFkc0NhbmNlbCddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZihldnQudHlwZSA9PT0gJ3Zhc3QuYWRzQ2FuY2VsJyl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRTdGFydCcpO1xuXG4gICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydlbmRlZCcsICd2YXN0LmFkc0NhbmNlbCcsICd2YXN0LmFkU2tpcCddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGlmKGV2dC50eXBlID09PSAnZW5kZWQnIHx8IGV2dC50eXBlID09PSAndmFzdC5hZFNraXAnKXtcbiAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9OT1RFOiBpZiB0aGUgYWRzIGdldCBjYW5jZWwgd2UgZG8gbm90aGluZ1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fdHJhY2tFcnJvciA9IGZ1bmN0aW9uIHRyYWNrRXJyb3IoZXJyb3IsIHJlc3BvbnNlKSB7XG4gIHZhc3RVdGlsLnRyYWNrKHJlc3BvbnNlLmVycm9yVVJMTWFjcm9zLCB7RVJST1JDT0RFOiBlcnJvci5jb2RlIHx8IDkwMH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWQVNUSW50ZWdyYXRvcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBBZCA9IHJlcXVpcmUoJy4vQWQnKTtcbnZhciBWaWRlb0NsaWNrcyA9IHJlcXVpcmUoJy4vVmlkZW9DbGlja3MnKTtcbnZhciBMaW5lYXIgPSByZXF1aXJlKCcuL0xpbmVhcicpO1xudmFyIEluTGluZSA9IHJlcXVpcmUoJy4vSW5MaW5lJyk7XG52YXIgV3JhcHBlciA9IHJlcXVpcmUoJy4vV3JhcHBlcicpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG53aW5kb3cuSW5MaW5lX19BID0gSW5MaW5lO1xuZnVuY3Rpb24gVkFTVFJlc3BvbnNlKCkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVkFTVFJlc3BvbnNlKSkge1xuICAgIHJldHVybiBuZXcgVkFTVFJlc3BvbnNlKCk7XG4gIH1cblxuICB0aGlzLl9saW5lYXJBZGRlZCA9IGZhbHNlO1xuICB0aGlzLmFkcyA9IFtdO1xuICB0aGlzLmVycm9yVVJMTWFjcm9zID0gW107XG4gIHRoaXMuaW1wcmVzc2lvbnMgPSBbXTtcbiAgdGhpcy5jbGlja1RyYWNraW5ncyA9IFtdO1xuICB0aGlzLmN1c3RvbUNsaWNrcyA9IFtdO1xuICB0aGlzLnRyYWNraW5nRXZlbnRzID0ge307XG4gIHRoaXMubWVkaWFGaWxlcyA9IFtdO1xuICB0aGlzLmNsaWNrVGhyb3VnaCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5hZFRpdGxlID0gJyc7XG4gIHRoaXMuZHVyYXRpb24gPSB1bmRlZmluZWQ7XG4gIHRoaXMuc2tpcG9mZnNldCA9IHVuZGVmaW5lZDtcbn1cblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5hZGRBZCA9IGZ1bmN0aW9uIChhZCkge1xuICB2YXIgaW5MaW5lLCB3cmFwcGVyO1xuICBpZiAoYWQgaW5zdGFuY2VvZiBBZCkge1xuICAgIGluTGluZSA9IGFkLmluTGluZTtcbiAgICB3cmFwcGVyID0gYWQud3JhcHBlcjtcblxuICAgIHRoaXMuYWRzLnB1c2goYWQpO1xuXG4gICAgaWYgKGluTGluZSkge1xuICAgICAgdGhpcy5fYWRkSW5MaW5lKGluTGluZSk7XG4gICAgfVxuXG4gICAgaWYgKHdyYXBwZXIpIHtcbiAgICAgIHRoaXMuX2FkZFdyYXBwZXIod3JhcHBlcik7XG4gICAgfVxuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRFcnJvclRyYWNrVXJsID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gIHZhciBlcnJvclVSTCA9IGVycm9yIGluc3RhbmNlb2YgeG1sLkpYT05UcmVlID8geG1sLmtleVZhbHVlKGVycm9yKSA6IGVycm9yO1xuICBpZiAoZXJyb3JVUkwpIHtcbiAgICB0aGlzLmVycm9yVVJMTWFjcm9zLnB1c2goZXJyb3JVUkwpO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRJbXByZXNzaW9ucyA9IGZ1bmN0aW9uIChpbXByZXNzaW9ucykge1xuICB1dGlsaXRpZXMuaXNBcnJheShpbXByZXNzaW9ucykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmltcHJlc3Npb25zLCBpbXByZXNzaW9ucyk7XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRDbGlja1Rocm91Z2ggPSBmdW5jdGlvbiAoY2xpY2tUaHJvdWdoKSB7XG4gIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjbGlja1Rocm91Z2gpKSB7XG4gICAgdGhpcy5jbGlja1Rocm91Z2ggPSBjbGlja1Rocm91Z2g7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZENsaWNrVHJhY2tpbmdzID0gZnVuY3Rpb24gKGNsaWNrVHJhY2tpbmdzKSB7XG4gIHV0aWxpdGllcy5pc0FycmF5KGNsaWNrVHJhY2tpbmdzKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMuY2xpY2tUcmFja2luZ3MsIGNsaWNrVHJhY2tpbmdzKTtcbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEN1c3RvbUNsaWNrcyA9IGZ1bmN0aW9uIChjdXN0b21DbGlja3MpIHtcbiAgdXRpbGl0aWVzLmlzQXJyYXkoY3VzdG9tQ2xpY2tzKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMuY3VzdG9tQ2xpY2tzLCBjdXN0b21DbGlja3MpO1xufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkVHJhY2tpbmdFdmVudHMgPSBmdW5jdGlvbiAodHJhY2tpbmdFdmVudHMpIHtcbiAgdmFyIGV2ZW50c01hcCA9IHRoaXMudHJhY2tpbmdFdmVudHM7XG5cbiAgaWYgKHRyYWNraW5nRXZlbnRzKSB7XG4gICAgdHJhY2tpbmdFdmVudHMgPSB1dGlsaXRpZXMuaXNBcnJheSh0cmFja2luZ0V2ZW50cykgPyB0cmFja2luZ0V2ZW50cyA6IFt0cmFja2luZ0V2ZW50c107XG4gICAgdHJhY2tpbmdFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAodHJhY2tpbmdFdmVudCkge1xuICAgICAgaWYgKCFldmVudHNNYXBbdHJhY2tpbmdFdmVudC5uYW1lXSkge1xuICAgICAgICBldmVudHNNYXBbdHJhY2tpbmdFdmVudC5uYW1lXSA9IFtdO1xuICAgICAgfVxuICAgICAgZXZlbnRzTWFwW3RyYWNraW5nRXZlbnQubmFtZV0ucHVzaCh0cmFja2luZ0V2ZW50KTtcbiAgICB9KTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkVGl0bGUgPSBmdW5jdGlvbiAodGl0bGUpIHtcbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHRpdGxlKSkge1xuICAgIHRoaXMuYWRUaXRsZSA9IHRpdGxlO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGREdXJhdGlvbiA9IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKGR1cmF0aW9uKSkge1xuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkVmlkZW9DbGlja3MgPSBmdW5jdGlvbiAodmlkZW9DbGlja3MpIHtcbiAgaWYgKHZpZGVvQ2xpY2tzIGluc3RhbmNlb2YgVmlkZW9DbGlja3MpIHtcbiAgICB0aGlzLl9hZGRDbGlja1Rocm91Z2godmlkZW9DbGlja3MuY2xpY2tUaHJvdWdoKTtcbiAgICB0aGlzLl9hZGRDbGlja1RyYWNraW5ncyh2aWRlb0NsaWNrcy5jbGlja1RyYWNraW5ncyk7XG4gICAgdGhpcy5fYWRkQ3VzdG9tQ2xpY2tzKHZpZGVvQ2xpY2tzLmN1c3RvbUNsaWNrcyk7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZE1lZGlhRmlsZXMgPSBmdW5jdGlvbiAobWVkaWFGaWxlcykge1xuICB1dGlsaXRpZXMuaXNBcnJheShtZWRpYUZpbGVzKSAmJiBhcHBlbmRUb0FycmF5KHRoaXMubWVkaWFGaWxlcywgbWVkaWFGaWxlcyk7XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRTa2lwb2Zmc2V0ID0gZnVuY3Rpb24gKG9mZnNldCkge1xuICBpZiAob2Zmc2V0KSB7XG4gICAgdGhpcy5za2lwb2Zmc2V0ID0gb2Zmc2V0O1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRBZFBhcmFtZXRlcnMgPSBmdW5jdGlvbiAoYWRQYXJhbWV0ZXJzKSB7XG4gIGlmIChhZFBhcmFtZXRlcnMpIHtcbiAgICB0aGlzLmFkUGFyYW1ldGVycyA9IGFkUGFyYW1ldGVycztcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkTGluZWFyID0gZnVuY3Rpb24gKGxpbmVhcikge1xuICBpZiAobGluZWFyIGluc3RhbmNlb2YgTGluZWFyKSB7XG4gICAgdGhpcy5fYWRkRHVyYXRpb24obGluZWFyLmR1cmF0aW9uKTtcbiAgICB0aGlzLl9hZGRUcmFja2luZ0V2ZW50cyhsaW5lYXIudHJhY2tpbmdFdmVudHMpO1xuICAgIHRoaXMuX2FkZFZpZGVvQ2xpY2tzKGxpbmVhci52aWRlb0NsaWNrcyk7XG4gICAgdGhpcy5fYWRkTWVkaWFGaWxlcyhsaW5lYXIubWVkaWFGaWxlcyk7XG4gICAgdGhpcy5fYWRkU2tpcG9mZnNldChsaW5lYXIuc2tpcG9mZnNldCk7XG4gICAgdGhpcy5fYWRkQWRQYXJhbWV0ZXJzKGxpbmVhci5hZFBhcmFtZXRlcnMpO1xuICAgIHRoaXMuX2xpbmVhckFkZGVkID0gdHJ1ZTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkSW5MaW5lID0gZnVuY3Rpb24gKGluTGluZSkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgaWYgKGluTGluZSBpbnN0YW5jZW9mIEluTGluZSkge1xuICAgIHRoaXMuX2FkZFRpdGxlKGluTGluZS5hZFRpdGxlKTtcbiAgICB0aGlzLl9hZGRFcnJvclRyYWNrVXJsKGluTGluZS5lcnJvcik7XG4gICAgdGhpcy5fYWRkSW1wcmVzc2lvbnMoaW5MaW5lLmltcHJlc3Npb25zKTtcblxuICAgIGluTGluZS5jcmVhdGl2ZXMuZm9yRWFjaChmdW5jdGlvbiAoY3JlYXRpdmUpIHtcbiAgICAgIGlmIChjcmVhdGl2ZS5saW5lYXIpIHtcbiAgICAgICAgdGhhdC5fYWRkTGluZWFyKGNyZWF0aXZlLmxpbmVhcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFdyYXBwZXIgPSBmdW5jdGlvbiAod3JhcHBlcikge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgaWYgKHdyYXBwZXIgaW5zdGFuY2VvZiBXcmFwcGVyKSB7XG4gICAgdGhpcy5fYWRkRXJyb3JUcmFja1VybCh3cmFwcGVyLmVycm9yKTtcbiAgICB0aGlzLl9hZGRJbXByZXNzaW9ucyh3cmFwcGVyLmltcHJlc3Npb25zKTtcblxuICAgIHdyYXBwZXIuY3JlYXRpdmVzLmZvckVhY2goZnVuY3Rpb24gKGNyZWF0aXZlKSB7XG4gICAgICB2YXIgbGluZWFyID0gY3JlYXRpdmUubGluZWFyO1xuICAgICAgaWYgKGxpbmVhcikge1xuICAgICAgICB0aGF0Ll9hZGRWaWRlb0NsaWNrcyhsaW5lYXIudmlkZW9DbGlja3MpO1xuICAgICAgICB0aGF0LmNsaWNrVGhyb3VnaCA9IHVuZGVmaW5lZDsvL1dlIGVuc3VyZSB0aGF0IG5vIGNsaWNrVGhyb3VnaCBoYXMgYmVlbiBhZGRlZFxuICAgICAgICB0aGF0Ll9hZGRUcmFja2luZ0V2ZW50cyhsaW5lYXIudHJhY2tpbmdFdmVudHMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLmhhc0xpbmVhciA9IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0aGlzLl9saW5lYXJBZGRlZDtcbn07XG5cbmZ1bmN0aW9uIGFwcGVuZFRvQXJyYXkoYXJyYXksIGl0ZW1zKSB7XG4gIGl0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBhcnJheS5wdXNoKGl0ZW0pO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWQVNUUmVzcG9uc2U7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4vVkFTVEVycm9yJyk7XG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi9WQVNUUmVzcG9uc2UnKTtcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIFZBU1RUcmFja2VyKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RUcmFja2VyKSkge1xuICAgIHJldHVybiBuZXcgVkFTVFRyYWNrZXIoYXNzZXRVUkksIHZhc3RSZXNwb25zZSk7XG4gIH1cblxuICB0aGlzLnNhbml0eUNoZWNrKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpO1xuICB0aGlzLmluaXRpYWxpemUoYXNzZXRVUkksIHZhc3RSZXNwb25zZSk7XG5cbn1cblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbihhc3NldFVSSSwgdmFzdFJlc3BvbnNlKSB7XG4gIHRoaXMucmVzcG9uc2UgPSB2YXN0UmVzcG9uc2U7XG4gIHRoaXMuYXNzZXRVUkkgPSBhc3NldFVSSTtcbiAgdGhpcy5wcm9ncmVzcyA9IDA7XG4gIHRoaXMucXVhcnRpbGVzID0ge1xuICAgIGZpcnN0UXVhcnRpbGU6IHt0cmFja2VkOiBmYWxzZSwgdGltZTogTWF0aC5yb3VuZCgyNSAqIHZhc3RSZXNwb25zZS5kdXJhdGlvbikgLyAxMDB9LFxuICAgIG1pZHBvaW50OiB7dHJhY2tlZDogZmFsc2UsIHRpbWU6IE1hdGgucm91bmQoNTAgKiB2YXN0UmVzcG9uc2UuZHVyYXRpb24pIC8gMTAwfSxcbiAgICB0aGlyZFF1YXJ0aWxlOiB7dHJhY2tlZDogZmFsc2UsIHRpbWU6IE1hdGgucm91bmQoNzUgKiB2YXN0UmVzcG9uc2UuZHVyYXRpb24pIC8gMTAwfVxuICB9O1xufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnNhbml0eUNoZWNrID0gZnVuY3Rpb24oYXNzZXRVUkksIHZhc3RSZXNwb25zZSkge1xuICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhhc3NldFVSSSkgfHwgdXRpbGl0aWVzLmlzRW1wdHlTdHJpbmcoYXNzZXRVUkkpKSB7XG4gICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVkFTVFRyYWNrZXIgY29uc3RydWN0b3IsIG1pc3NpbmcgcmVxdWlyZWQgdGhlIFVSSSBvZiB0aGUgYWQgYXNzZXQgYmVpbmcgcGxheWVkJyk7XG4gIH1cblxuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XG4gICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVkFTVFRyYWNrZXIgY29uc3RydWN0b3IsIG1pc3NpbmcgcmVxdWlyZWQgVkFTVCByZXNwb25zZScpO1xuICB9XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tVUkxzID0gZnVuY3Rpb24gdHJhY2tVUkxzKHVybHMsIHZhcmlhYmxlcykge1xuICBpZiAodXRpbGl0aWVzLmlzQXJyYXkodXJscykgJiYgdXJscy5sZW5ndGggPiAwKSB7XG4gICAgdmFyaWFibGVzID0gdXRpbGl0aWVzLmV4dGVuZCh7XG4gICAgICBBU1NFVFVSSTogdGhpcy5hc3NldFVSSSxcbiAgICAgIENPTlRFTlRQTEFZSEVBRDogdmFzdFV0aWwuZm9ybWF0UHJvZ3Jlc3ModGhpcy5wcm9ncmVzcylcbiAgICB9LCB2YXJpYWJsZXMgfHwge30pO1xuXG4gICAgdmFzdFV0aWwudHJhY2sodXJscywgdmFyaWFibGVzKTtcbiAgfVxufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrRXZlbnQgPSBmdW5jdGlvbiB0cmFja0V2ZW50KGV2ZW50TmFtZSwgdHJhY2tPbmNlKSB7XG4gIHRoaXMudHJhY2tVUkxzKGdldEV2ZW50VXJpcyh0aGlzLnJlc3BvbnNlLnRyYWNraW5nRXZlbnRzW2V2ZW50TmFtZV0pKTtcbiAgaWYgKHRyYWNrT25jZSkge1xuICAgIHRoaXMucmVzcG9uc2UudHJhY2tpbmdFdmVudHNbZXZlbnROYW1lXSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICBmdW5jdGlvbiBnZXRFdmVudFVyaXModHJhY2tpbmdFdmVudHMpIHtcbiAgICB2YXIgdXJpcztcblxuICAgIGlmICh0cmFja2luZ0V2ZW50cykge1xuICAgICAgdXJpcyA9IFtdO1xuICAgICAgdHJhY2tpbmdFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdXJpcy5wdXNoKGV2ZW50LnVyaSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHVyaXM7XG4gIH1cbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja1Byb2dyZXNzID0gZnVuY3Rpb24gdHJhY2tQcm9ncmVzcyhuZXdQcm9ncmVzc0luTXMpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgZXZlbnRzID0gW107XG4gIHZhciBPTkNFID0gdHJ1ZTtcbiAgdmFyIEFMV0FZUyA9IGZhbHNlO1xuICB2YXIgdHJhY2tpbmdFdmVudHMgPSB0aGlzLnJlc3BvbnNlLnRyYWNraW5nRXZlbnRzO1xuXG4gIGlmICh1dGlsaXRpZXMuaXNOdW1iZXIobmV3UHJvZ3Jlc3NJbk1zKSkge1xuICAgIGFkZFRyYWNrRXZlbnQoJ3N0YXJ0JywgT05DRSwgbmV3UHJvZ3Jlc3NJbk1zID4gMCk7XG4gICAgYWRkVHJhY2tFdmVudCgncmV3aW5kJywgQUxXQVlTLCBoYXNSZXdvdW5kKHRoaXMucHJvZ3Jlc3MsIG5ld1Byb2dyZXNzSW5NcykpO1xuICAgIGFkZFF1YXJ0aWxlRXZlbnRzKG5ld1Byb2dyZXNzSW5Ncyk7XG4gICAgdHJhY2tQcm9ncmVzc0V2ZW50cyhuZXdQcm9ncmVzc0luTXMpO1xuICAgIHRyYWNrRXZlbnRzKCk7XG4gICAgdGhpcy5wcm9ncmVzcyA9IG5ld1Byb2dyZXNzSW5NcztcbiAgfVxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICBmdW5jdGlvbiBoYXNSZXdvdW5kKGN1cnJlbnRQcm9ncmVzcywgbmV3UHJvZ3Jlc3MpIHtcbiAgICB2YXIgUkVXSU5EX1RIUkVTSE9MRCA9IDMwMDA7IC8vSU9TIHZpZGVvIGNsb2NrIGlzIHZlcnkgdW5yZWxpYWJsZSBhbmQgd2UgbmVlZCBhIDMgc2Vjb25kcyB0aHJlc2hvbGQgdG8gZW5zdXJlIHRoYXQgdGhlcmUgd2FzIGEgcmV3aW5kIGFuIHRoYXQgaXQgd2FzIG9uIHB1cnBvc2UuXG4gICAgcmV0dXJuIGN1cnJlbnRQcm9ncmVzcyA+IG5ld1Byb2dyZXNzSW5NcyAmJiBNYXRoLmFicyhuZXdQcm9ncmVzcyAtIGN1cnJlbnRQcm9ncmVzcykgPiBSRVdJTkRfVEhSRVNIT0xEO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkVHJhY2tFdmVudChldmVudE5hbWUsIHRyYWNrT25jZSwgY2FuQmVBZGRlZCkge1xuICAgIGlmICh0cmFja2luZ0V2ZW50c1tldmVudE5hbWVdICYmIGNhbkJlQWRkZWQpIHtcbiAgICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgICAgbmFtZTogZXZlbnROYW1lLFxuICAgICAgICB0cmFja09uY2U6ICEhdHJhY2tPbmNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRRdWFydGlsZUV2ZW50cyhwcm9ncmVzcykge1xuICAgIHZhciBxdWFydGlsZXMgPSB0aGF0LnF1YXJ0aWxlcztcbiAgICB2YXIgZmlyc3RRdWFydGlsZSA9IHRoYXQucXVhcnRpbGVzLmZpcnN0UXVhcnRpbGU7XG4gICAgdmFyIG1pZHBvaW50ID0gdGhhdC5xdWFydGlsZXMubWlkcG9pbnQ7XG4gICAgdmFyIHRoaXJkUXVhcnRpbGUgPSB0aGF0LnF1YXJ0aWxlcy50aGlyZFF1YXJ0aWxlO1xuXG4gICAgaWYgKCFmaXJzdFF1YXJ0aWxlLnRyYWNrZWQpIHtcbiAgICAgIHRyYWNrUXVhcnRpbGUoJ2ZpcnN0UXVhcnRpbGUnLCBwcm9ncmVzcyk7XG4gICAgfSBlbHNlIGlmICghbWlkcG9pbnQudHJhY2tlZCkge1xuICAgICAgdHJhY2tRdWFydGlsZSgnbWlkcG9pbnQnLCBwcm9ncmVzcyk7XG4gICAgfSBlbHNlIGlmICghdGhpcmRRdWFydGlsZS50cmFja2VkKXtcbiAgICAgIHRyYWNrUXVhcnRpbGUoJ3RoaXJkUXVhcnRpbGUnLCBwcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG4gICAgZnVuY3Rpb24gdHJhY2tRdWFydGlsZShxdWFydGlsZU5hbWUsIHByb2dyZXNzKXtcbiAgICAgIHZhciBxdWFydGlsZSA9IHF1YXJ0aWxlc1txdWFydGlsZU5hbWVdO1xuICAgICAgaWYoY2FuQmVUcmFja2VkKHF1YXJ0aWxlLCBwcm9ncmVzcykpe1xuICAgICAgICBxdWFydGlsZS50cmFja2VkID0gdHJ1ZTtcbiAgICAgICAgYWRkVHJhY2tFdmVudChxdWFydGlsZU5hbWUsIE9OQ0UsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbkJlVHJhY2tlZChxdWFydGlsZSwgcHJvZ3Jlc3MpIHtcbiAgICB2YXIgcXVhcnRpbGVUaW1lID0gcXVhcnRpbGUudGltZTtcbiAgICAvL1dlIG9ubHkgZmlyZSB0aGUgcXVhcnRpbGUgZXZlbnQgaWYgdGhlIHByb2dyZXNzIGlzIGJpZ2dlciB0aGFuIHRoZSBxdWFydGlsZSB0aW1lIGJ5IDUgc2Vjb25kcyBhdCBtb3N0LlxuICAgIHJldHVybiBwcm9ncmVzcyA+PSBxdWFydGlsZVRpbWUgJiYgcHJvZ3Jlc3MgPD0gKHF1YXJ0aWxlVGltZSArIDUwMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tQcm9ncmVzc0V2ZW50cyhwcm9ncmVzcykge1xuICAgIGlmICghdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdFdmVudHMucHJvZ3Jlc3MpKSB7XG4gICAgICByZXR1cm47IC8vTm90aGluZyB0byB0cmFja1xuICAgIH1cblxuICAgIHZhciBwZW5kaW5nUHJvZ3Jlc3NFdnRzID0gW107XG5cbiAgICB0cmFja2luZ0V2ZW50cy5wcm9ncmVzcy5mb3JFYWNoKGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmIChldnQub2Zmc2V0IDw9IHByb2dyZXNzKSB7XG4gICAgICAgIHRoYXQudHJhY2tVUkxzKFtldnQudXJpXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwZW5kaW5nUHJvZ3Jlc3NFdnRzLnB1c2goZXZ0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0cmFja2luZ0V2ZW50cy5wcm9ncmVzcyA9IHBlbmRpbmdQcm9ncmVzc0V2dHM7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0V2ZW50cygpIHtcbiAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHRoYXQudHJhY2tFdmVudChldmVudC5uYW1lLCBldmVudC50cmFja09uY2UpO1xuICAgIH0pO1xuICB9XG59O1xuXG5bXG4gICdyZXdpbmQnLFxuICAnZnVsbHNjcmVlbicsXG4gICdleGl0RnVsbHNjcmVlbicsXG4gICdwYXVzZScsXG4gICdyZXN1bWUnLFxuICAnbXV0ZScsXG4gICd1bm11dGUnLFxuICAnYWNjZXB0SW52aXRhdGlvbicsXG4gICdhY2NlcHRJbnZpdGF0aW9uTGluZWFyJyxcbiAgJ2NvbGxhcHNlJyxcbiAgJ2V4cGFuZCdcbl0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgVkFTVFRyYWNrZXIucHJvdG90eXBlWyd0cmFjaycgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShldmVudE5hbWUpXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudHJhY2tFdmVudChldmVudE5hbWUpO1xuICAgIH07XG4gIH0pO1xuXG5bXG4gICdzdGFydCcsXG4gICdza2lwJyxcbiAgJ2Nsb3NlJyxcbiAgJ2Nsb3NlTGluZWFyJ1xuXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICBWQVNUVHJhY2tlci5wcm90b3R5cGVbJ3RyYWNrJyArIHV0aWxpdGllcy5jYXBpdGFsaXplKGV2ZW50TmFtZSldID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy50cmFja0V2ZW50KGV2ZW50TmFtZSwgdHJ1ZSk7XG4gICAgfTtcbiAgfSk7XG5cbltcbiAgJ2ZpcnN0UXVhcnRpbGUnLFxuICAnbWlkcG9pbnQnLFxuICAndGhpcmRRdWFydGlsZSdcbl0uZm9yRWFjaChmdW5jdGlvbiAocXVhcnRpbGUpIHtcbiAgICBWQVNUVHJhY2tlci5wcm90b3R5cGVbJ3RyYWNrJyArIHV0aWxpdGllcy5jYXBpdGFsaXplKHF1YXJ0aWxlKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnF1YXJ0aWxlc1txdWFydGlsZV0udHJhY2tlZCA9IHRydWU7XG4gICAgICB0aGlzLnRyYWNrRXZlbnQocXVhcnRpbGUsIHRydWUpO1xuICAgIH07XG4gIH0pO1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYodGhpcy5xdWFydGlsZXMudGhpcmRRdWFydGlsZS50cmFja2VkKXtcbiAgICB0aGlzLnRyYWNrRXZlbnQoJ2NvbXBsZXRlJywgdHJ1ZSk7XG4gIH1cbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0Vycm9yV2l0aENvZGUgPSBmdW5jdGlvbiB0cmFja0Vycm9yV2l0aENvZGUoZXJyb3Jjb2RlKSB7XG4gIGlmICh1dGlsaXRpZXMuaXNOdW1iZXIoZXJyb3Jjb2RlKSkge1xuICAgIHRoaXMudHJhY2tVUkxzKHRoaXMucmVzcG9uc2UuZXJyb3JVUkxNYWNyb3MsIHtFUlJPUkNPREU6IGVycm9yY29kZX0pO1xuICB9XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tJbXByZXNzaW9ucyA9IGZ1bmN0aW9uIHRyYWNrSW1wcmVzc2lvbnMoKSB7XG4gIHRoaXMudHJhY2tVUkxzKHRoaXMucmVzcG9uc2UuaW1wcmVzc2lvbnMpO1xufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrQ3JlYXRpdmVWaWV3ID0gZnVuY3Rpb24gdHJhY2tDcmVhdGl2ZVZpZXcoKSB7XG4gIHRoaXMudHJhY2tFdmVudCgnY3JlYXRpdmVWaWV3Jyk7XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tDbGljayA9IGZ1bmN0aW9uIHRyYWNrQ2xpY2soKSB7XG4gIHRoaXMudHJhY2tVUkxzKHRoaXMucmVzcG9uc2UuY2xpY2tUcmFja2luZ3MpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWQVNUVHJhY2tlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxuZnVuY3Rpb24gVmlkZW9DbGlja3ModmlkZW9DbGlja0pUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWaWRlb0NsaWNrcykpIHtcbiAgICByZXR1cm4gbmV3IFZpZGVvQ2xpY2tzKHZpZGVvQ2xpY2tKVHJlZSk7XG4gIH1cblxuICB0aGlzLmNsaWNrVGhyb3VnaCA9IHhtbC5rZXlWYWx1ZSh2aWRlb0NsaWNrSlRyZWUuY2xpY2tUaHJvdWdoKTtcbiAgdGhpcy5jbGlja1RyYWNraW5ncyA9IHBhcnNlQ2xpY2tUcmFja2luZ3ModmlkZW9DbGlja0pUcmVlLmNsaWNrVHJhY2tpbmcpO1xuICB0aGlzLmN1c3RvbUNsaWNrcyA9IHBhcnNlQ2xpY2tUcmFja2luZ3ModmlkZW9DbGlja0pUcmVlLmN1c3RvbUNsaWNrKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHBhcnNlQ2xpY2tUcmFja2luZ3ModHJhY2tpbmdEYXRhKSB7XG4gICAgdmFyIGNsaWNrVHJhY2tpbmdzID0gW107XG4gICAgaWYgKHRyYWNraW5nRGF0YSkge1xuICAgICAgdHJhY2tpbmdEYXRhID0gdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdEYXRhKSA/IHRyYWNraW5nRGF0YSA6IFt0cmFja2luZ0RhdGFdO1xuICAgICAgdHJhY2tpbmdEYXRhLmZvckVhY2goZnVuY3Rpb24gKGNsaWNrVHJhY2tpbmdEYXRhKSB7XG4gICAgICAgIGNsaWNrVHJhY2tpbmdzLnB1c2goeG1sLmtleVZhbHVlKGNsaWNrVHJhY2tpbmdEYXRhKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNsaWNrVHJhY2tpbmdzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVmlkZW9DbGlja3M7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbmZ1bmN0aW9uIFdyYXBwZXIod3JhcHBlckpUcmVlKSB7XG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIFdyYXBwZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBXcmFwcGVyKHdyYXBwZXJKVHJlZSk7XG4gIH1cblxuICAvL1JlcXVpcmVkIGVsZW1lbnRzXG4gIHRoaXMuYWRTeXN0ZW0gPSB4bWwua2V5VmFsdWUod3JhcHBlckpUcmVlLmFkU3lzdGVtKTtcbiAgdGhpcy5pbXByZXNzaW9ucyA9IHZhc3RVdGlsLnBhcnNlSW1wcmVzc2lvbnMod3JhcHBlckpUcmVlLmltcHJlc3Npb24pO1xuICB0aGlzLlZBU1RBZFRhZ1VSSSA9IHhtbC5rZXlWYWx1ZSh3cmFwcGVySlRyZWUudkFTVEFkVGFnVVJJKTtcblxuICAvL09wdGlvbmFsIGVsZW1lbnRzXG4gIHRoaXMuY3JlYXRpdmVzID0gdmFzdFV0aWwucGFyc2VDcmVhdGl2ZXMod3JhcHBlckpUcmVlLmNyZWF0aXZlcyk7XG4gIHRoaXMuZXJyb3IgPSB4bWwua2V5VmFsdWUod3JhcHBlckpUcmVlLmVycm9yKTtcbiAgdGhpcy5leHRlbnNpb25zID0gd3JhcHBlckpUcmVlLmV4dGVuc2lvbnM7XG5cbiAgLy9PcHRpb25hbCBhdHRyc1xuICB0aGlzLmZvbGxvd0FkZGl0aW9uYWxXcmFwcGVycyA9IHV0aWxpdGllcy5pc0RlZmluZWQoeG1sLmF0dHIod3JhcHBlckpUcmVlLCAnZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzJykpPyB4bWwuYXR0cih3cmFwcGVySlRyZWUsICdmb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnMnKTogdHJ1ZTtcbiAgdGhpcy5hbGxvd011bHRpcGxlQWRzID0geG1sLmF0dHIod3JhcHBlckpUcmVlLCAnYWxsb3dNdWx0aXBsZUFkcycpO1xuICB0aGlzLmZhbGxiYWNrT25Ob0FkID0geG1sLmF0dHIod3JhcHBlckpUcmVlLCAnZmFsbGJhY2tPbk5vQWQnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBXcmFwcGVyOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIGR1cmF0aW9uUmVnZXggPSAvKFxcZFxcZCk6KFxcZFxcZCk6KFxcZFxcZCkoXFwuKFxcZFxcZFxcZCkpPy87XG5cbnZhciBwYXJzZXJzID0ge1xuXG4gIGR1cmF0aW9uOiBmdW5jdGlvbiBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uU3RyKSB7XG5cbiAgICB2YXIgbWF0Y2gsIGR1cmF0aW9uSW5NcztcblxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoZHVyYXRpb25TdHIpKSB7XG4gICAgICBtYXRjaCA9IGR1cmF0aW9uU3RyLm1hdGNoKGR1cmF0aW9uUmVnZXgpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGR1cmF0aW9uSW5NcyA9IHBhcnNlSG91cnNUb01zKG1hdGNoWzFdKSArIHBhcnNlTWluVG9NcyhtYXRjaFsyXSkgKyBwYXJzZVNlY1RvTXMobWF0Y2hbM10pICsgcGFyc2VJbnQobWF0Y2hbNV0gfHwgMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTmFOKGR1cmF0aW9uSW5NcykgPyBudWxsIDogZHVyYXRpb25Jbk1zO1xuXG4gICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgIGZ1bmN0aW9uIHBhcnNlSG91cnNUb01zKGhvdXJTdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChob3VyU3RyLCAxMCkgKiA2MCAqIDYwICogMTAwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZU1pblRvTXMobWluU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQobWluU3RyLCAxMCkgKiA2MCAqIDEwMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VTZWNUb01zKHNlY1N0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHNlY1N0ciwgMTApICogMTAwMDtcbiAgICB9XG4gIH0sXG5cbiAgb2Zmc2V0OiBmdW5jdGlvbiBwYXJzZU9mZnNldChvZmZzZXQsIGR1cmF0aW9uKSB7XG4gICAgaWYoaXNQZXJjZW50YWdlKG9mZnNldCkpe1xuICAgICAgcmV0dXJuIGNhbGN1bGF0ZVBlcmNlbnRhZ2Uob2Zmc2V0LCBkdXJhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBwYXJzZXJzLmR1cmF0aW9uKG9mZnNldCk7XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgICBmdW5jdGlvbiBpc1BlcmNlbnRhZ2Uob2Zmc2V0KSB7XG4gICAgICB2YXIgcGVyY2VudGFnZVJlZ2V4ID0gL15cXGQrKFxcLlxcZCspPyUkL2c7XG4gICAgICByZXR1cm4gcGVyY2VudGFnZVJlZ2V4LnRlc3Qob2Zmc2V0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVQZXJjZW50YWdlKHBlcmNlbnRTdHIsIGR1cmF0aW9uKSB7XG4gICAgICBpZihkdXJhdGlvbikge1xuICAgICAgICByZXR1cm4gY2FsY1BlcmNlbnQoZHVyYXRpb24sIHBhcnNlRmxvYXQocGVyY2VudFN0ci5yZXBsYWNlKCclJywgJycpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjUGVyY2VudChxdWFudGl0eSwgcGVyY2VudCl7XG4gICAgICByZXR1cm4gcXVhbnRpdHkgKiBwZXJjZW50IC8gMTAwO1xuICAgIH1cbiAgfVxuXG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VyczsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBDcmVhdGl2ZSA9IHJlcXVpcmUoJy4vQ3JlYXRpdmUnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciB2YXN0VXRpbCA9IHtcblxuICB0cmFjazogZnVuY3Rpb24gdHJhY2soVVJMTWFjcm9zLCB2YXJpYWJsZXMpIHtcbiAgICB2YXIgc291cmNlcyA9IHZhc3RVdGlsLnBhcnNlVVJMTWFjcm9zKFVSTE1hY3JvcywgdmFyaWFibGVzKTtcbiAgICB2YXIgdHJhY2tJbWdzID0gW107XG4gICAgc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgICB0cmFja0ltZ3MucHVzaChpbWcpO1xuICAgIH0pO1xuICAgIHJldHVybiB0cmFja0ltZ3M7XG4gIH0sXG5cbiAgcGFyc2VVUkxNYWNyb3M6IGZ1bmN0aW9uIHBhcnNlTWFjcm9zKFVSTE1hY3JvcywgdmFyaWFibGVzKSB7XG4gICAgdmFyIHBhcnNlZFVSTHMgPSBbXTtcblxuICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyB8fCB7fTtcblxuICAgIGlmICghKHZhcmlhYmxlc1tcIkNBQ0hFQlVTVElOR1wiXSkpIHtcbiAgICAgIHZhcmlhYmxlc1tcIkNBQ0hFQlVTVElOR1wiXSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEuMGUrMTApO1xuICAgIH1cblxuICAgIFVSTE1hY3Jvcy5mb3JFYWNoKGZ1bmN0aW9uIChVUkxNYWNybykge1xuICAgICAgcGFyc2VkVVJMcy5wdXNoKHZhc3RVdGlsLl9wYXJzZVVSTE1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwYXJzZWRVUkxzO1xuICB9LFxuXG4gIHBhcnNlVVJMTWFjcm86IGZ1bmN0aW9uIHBhcnNlTWFjcm8oVVJMTWFjcm8sIHZhcmlhYmxlcykge1xuICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyB8fCB7fTtcblxuICAgIGlmICghKHZhcmlhYmxlc1tcIkNBQ0hFQlVTVElOR1wiXSkpIHtcbiAgICAgIHZhcmlhYmxlc1tcIkNBQ0hFQlVTVElOR1wiXSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEuMGUrMTApO1xuICAgIH1cblxuICAgIHJldHVybiB2YXN0VXRpbC5fcGFyc2VVUkxNYWNybyhVUkxNYWNybywgdmFyaWFibGVzKTtcbiAgfSxcblxuICBfcGFyc2VVUkxNYWNybzogZnVuY3Rpb24gcGFyc2VNYWNybyhVUkxNYWNybywgdmFyaWFibGVzKSB7XG4gICAgdmFyaWFibGVzID0gdmFyaWFibGVzIHx8IHt9O1xuXG4gICAgdXRpbGl0aWVzLmZvckVhY2godmFyaWFibGVzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgVVJMTWFjcm8gPSBVUkxNYWNyby5yZXBsYWNlKG5ldyBSZWdFeHAoXCJcXFxcW1wiICsga2V5ICsgXCJcXFxcXFxdXCIsICdnbScpLCB2YWx1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gVVJMTWFjcm87XG4gIH0sXG5cbiAgcGFyc2VEdXJhdGlvbjogZnVuY3Rpb24gcGFyc2VEdXJhdGlvbihkdXJhdGlvblN0cikge1xuICAgIHZhciBkdXJhdGlvblJlZ2V4ID0gLyhcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpKFxcLihcXGRcXGRcXGQpKT8vO1xuICAgIHZhciBtYXRjaCwgZHVyYXRpb25Jbk1zO1xuXG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhkdXJhdGlvblN0cikpIHtcbiAgICAgIG1hdGNoID0gZHVyYXRpb25TdHIubWF0Y2goZHVyYXRpb25SZWdleCk7XG4gICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgZHVyYXRpb25Jbk1zID0gcGFyc2VIb3Vyc1RvTXMobWF0Y2hbMV0pICsgcGFyc2VNaW5Ub01zKG1hdGNoWzJdKSArIHBhcnNlU2VjVG9NcyhtYXRjaFszXSkgKyBwYXJzZUludChtYXRjaFs1XSB8fCAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaXNOYU4oZHVyYXRpb25Jbk1zKSA/IG51bGwgOiBkdXJhdGlvbkluTXM7XG5cbiAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgZnVuY3Rpb24gcGFyc2VIb3Vyc1RvTXMoaG91clN0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KGhvdXJTdHIsIDEwKSAqIDYwICogNjAgKiAxMDAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlTWluVG9NcyhtaW5TdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChtaW5TdHIsIDEwKSAqIDYwICogMTAwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZVNlY1RvTXMoc2VjU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoc2VjU3RyLCAxMCkgKiAxMDAwO1xuICAgIH1cbiAgfSxcblxuICBwYXJzZUltcHJlc3Npb25zOiBmdW5jdGlvbiBwYXJzZUltcHJlc3Npb25zKGltcHJlc3Npb25zKSB7XG4gICAgaWYgKGltcHJlc3Npb25zKSB7XG4gICAgICBpbXByZXNzaW9ucyA9IHV0aWxpdGllcy5pc0FycmF5KGltcHJlc3Npb25zKSA/IGltcHJlc3Npb25zIDogW2ltcHJlc3Npb25zXTtcbiAgICAgIHJldHVybiB1dGlsaXRpZXMudHJhbnNmb3JtQXJyYXkoaW1wcmVzc2lvbnMsIGZ1bmN0aW9uIChpbXByZXNzaW9uKSB7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhpbXByZXNzaW9uLmtleVZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBpbXByZXNzaW9uLmtleVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9LFxuXG4gIHBhcnNlQ3JlYXRpdmVzOiBmdW5jdGlvbiBwYXJzZUNyZWF0aXZlcyhjcmVhdGl2ZXNKVHJlZSkge1xuICAgIHZhciBjcmVhdGl2ZXMgPSBbXTtcbiAgICB2YXIgY3JlYXRpdmVzRGF0YTtcbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChjcmVhdGl2ZXNKVHJlZSkgJiYgdXRpbGl0aWVzLmlzRGVmaW5lZChjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZSkpIHtcbiAgICAgIGNyZWF0aXZlc0RhdGEgPSB1dGlsaXRpZXMuaXNBcnJheShjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZSkgPyBjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZSA6IFtjcmVhdGl2ZXNKVHJlZS5jcmVhdGl2ZV07XG4gICAgICBjcmVhdGl2ZXNEYXRhLmZvckVhY2goZnVuY3Rpb24gKGNyZWF0aXZlKSB7XG4gICAgICAgIGNyZWF0aXZlcy5wdXNoKG5ldyBDcmVhdGl2ZShjcmVhdGl2ZSkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGl2ZXM7XG4gIH0sXG5cbiAgLy9XZSBhc3N1bWUgdGhhdCB0aGUgcHJvZ3Jlc3MgaXMgZ29pbmcgdG8gYXJyaXZlIGluIG1pbGxpc2Vjb25kc1xuICBmb3JtYXRQcm9ncmVzczogZnVuY3Rpb24gZm9ybWF0UHJvZ3Jlc3MocHJvZ3Jlc3MpIHtcbiAgICB2YXIgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG1pbGxpc2Vjb25kcztcbiAgICBob3VycyA9IHByb2dyZXNzIC8gKDYwICogNjAgKiAxMDAwKTtcbiAgICBob3VycyA9IE1hdGguZmxvb3IoaG91cnMpO1xuICAgIG1pbnV0ZXMgPSAocHJvZ3Jlc3MgLyAoNjAgKiAxMDAwKSkgJSA2MDtcbiAgICBtaW51dGVzID0gTWF0aC5mbG9vcihtaW51dGVzKTtcbiAgICBzZWNvbmRzID0gKHByb2dyZXNzIC8gMTAwMCkgJSA2MDtcbiAgICBzZWNvbmRzID0gTWF0aC5mbG9vcihzZWNvbmRzKTtcbiAgICBtaWxsaXNlY29uZHMgPSBwcm9ncmVzcyAlIDEwMDA7XG4gICAgcmV0dXJuIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKGhvdXJzLCAyKSArICc6JyArIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKG1pbnV0ZXMsIDIpICsgJzonICsgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHMoc2Vjb25kcywgMikgKyAnLicgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhtaWxsaXNlY29uZHMsIDMpO1xuICB9LFxuXG4gIHBhcnNlT2Zmc2V0OiAgIGZ1bmN0aW9uIHBhcnNlT2Zmc2V0KG9mZnNldCwgZHVyYXRpb24pIHtcbiAgICBpZihpc1BlcmNlbnRhZ2Uob2Zmc2V0KSl7XG4gICAgICByZXR1cm4gY2FsY3VsYXRlUGVyY2VudGFnZShvZmZzZXQsIGR1cmF0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhc3RVdGlsLnBhcnNlRHVyYXRpb24ob2Zmc2V0KTtcblxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICAgIGZ1bmN0aW9uIGlzUGVyY2VudGFnZShvZmZzZXQpIHtcbiAgICAgIHZhciBwZXJjZW50YWdlUmVnZXggPSAvXlxcZCsoXFwuXFxkKyk/JSQvZztcbiAgICAgIHJldHVybiBwZXJjZW50YWdlUmVnZXgudGVzdChvZmZzZXQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZVBlcmNlbnRhZ2UocGVyY2VudFN0ciwgZHVyYXRpb24pIHtcbiAgICAgIGlmKGR1cmF0aW9uKSB7XG4gICAgICAgIHJldHVybiBjYWxjUGVyY2VudChkdXJhdGlvbiwgcGFyc2VGbG9hdChwZXJjZW50U3RyLnJlcGxhY2UoJyUnLCAnJykpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGNQZXJjZW50KHF1YW50aXR5LCBwZXJjZW50KXtcbiAgICAgIHJldHVybiBxdWFudGl0eSAqIHBlcmNlbnQgLyAxMDA7XG4gICAgfVxuICB9LFxuXG4gIGlzVlBBSUQ6IGZ1bmN0aW9uIGlzVlBBSURNZWRpYUZpbGUobWVkaWFGaWxlKSB7XG4gICAgcmV0dXJuICEhbWVkaWFGaWxlICYmIG1lZGlhRmlsZS5hcGlGcmFtZXdvcmsgPT09ICdWUEFJRCc7XG4gIH1cbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSB2YXN0VXRpbDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBWUEFJREFkVW5pdFdyYXBwZXIodnBhaWRBZFVuaXQsIG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZQQUlEQWRVbml0V3JhcHBlcikpIHtcbiAgICByZXR1cm4gbmV3IFZQQUlEQWRVbml0V3JhcHBlcih2cGFpZEFkVW5pdCwgb3B0cyk7XG4gIH1cbiAgc2FuaXR5Q2hlY2sodnBhaWRBZFVuaXQsIG9wdHMpO1xuXG4gIHRoaXMub3B0aW9ucyA9IHV0aWxpdGllcy5leHRlbmQoe30sIG9wdHMpO1xuXG4gIHRoaXMuX2FkVW5pdCA9IHZwYWlkQWRVbml0O1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soYWRVbml0LCBvcHRzKSB7XG4gICAgaWYgKCFhZFVuaXQgfHwgIVZQQUlEQWRVbml0V3JhcHBlci5jaGVja1ZQQUlESW50ZXJmYWNlKGFkVW5pdCkpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZQQUlEQWRVbml0V3JhcHBlciwgdGhlIHBhc3NlZCBWUEFJRCBhZFVuaXQgZG9lcyBub3QgZnVsbHkgaW1wbGVtZW50IHRoZSBWUEFJRCBpbnRlcmZhY2UnKTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc09iamVjdChvcHRzKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlciwgZXhwZWN0ZWQgb3B0aW9ucyBoYXNoICBidXQgZ290ICdcIiArIG9wdHMgKyBcIidcIik7XG4gICAgfVxuXG4gICAgaWYgKCEoXCJyZXNwb25zZVRpbWVvdXRcIiBpbiBvcHRzKSB8fCAhdXRpbGl0aWVzLmlzTnVtYmVyKG9wdHMucmVzcG9uc2VUaW1lb3V0KSApe1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlciwgZXhwZWN0ZWQgcmVzcG9uc2VUaW1lb3V0IGluIG9wdGlvbnNcIik7XG4gICAgfVxuICB9XG59XG5cblZQQUlEQWRVbml0V3JhcHBlci5jaGVja1ZQQUlESW50ZXJmYWNlID0gZnVuY3Rpb24gY2hlY2tWUEFJREludGVyZmFjZShWUEFJREFkVW5pdCkge1xuICAvL05PVEU6IHNraXBBZCBpcyBub3QgcGFydCBvZiB0aGUgbWV0aG9kIGxpc3QgYmVjYXVzZSBpdCBvbmx5IGFwcGVhcnMgaW4gVlBBSUQgMi4wIGFuZCB3ZSBzdXBwb3J0IFZQQUlEIDEuMFxuICB2YXIgVlBBSURJbnRlcmZhY2VNZXRob2RzID0gW1xuICAgICdoYW5kc2hha2VWZXJzaW9uJywgJ2luaXRBZCcsICdzdGFydEFkJywgJ3N0b3BBZCcsICdyZXNpemVBZCcsICdwYXVzZUFkJywgJ2V4cGFuZEFkJywgJ2NvbGxhcHNlQWQnXG4gIF07XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IFZQQUlESW50ZXJmYWNlTWV0aG9kcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghVlBBSURBZFVuaXQgfHwgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKFZQQUlEQWRVbml0W1ZQQUlESW50ZXJmYWNlTWV0aG9kc1tpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cblxuICByZXR1cm4gY2FuU3Vic2NyaWJlVG9FdmVudHMoVlBBSURBZFVuaXQpICYmIGNhblVuc3Vic2NyaWJlRnJvbUV2ZW50cyhWUEFJREFkVW5pdCk7XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuXG4gIGZ1bmN0aW9uIGNhblN1YnNjcmliZVRvRXZlbnRzKGFkVW5pdCkge1xuICAgIHJldHVybiB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQuc3Vic2NyaWJlKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQuYWRkRXZlbnRMaXN0ZW5lcikgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0Lm9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhblVuc3Vic2NyaWJlRnJvbUV2ZW50cyhhZFVuaXQpIHtcbiAgICByZXR1cm4gdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LnVuc3Vic2NyaWJlKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXQucmVtb3ZlRXZlbnRMaXN0ZW5lcikgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0Lm9mZik7XG5cbiAgfVxufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5hZFVuaXRBc3luY0NhbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhcmdzID0gdXRpbGl0aWVzLmFycmF5TGlrZU9ialRvQXJyYXkoYXJndW1lbnRzKTtcbiAgdmFyIG1ldGhvZCA9IGFyZ3Muc2hpZnQoKTtcbiAgdmFyIGNiID0gYXJncy5wb3AoKTtcbiAgdmFyIHRpbWVvdXRJZDtcblxuICBzYW5pdHlDaGVjayhtZXRob2QsIGNiLCB0aGlzLl9hZFVuaXQpO1xuICBhcmdzLnB1c2god3JhcENhbGxiYWNrKCkpO1xuXG4gIHRoaXMuX2FkVW5pdFttZXRob2RdLmFwcGx5KHRoaXMuX2FkVW5pdCwgYXJncyk7XG4gIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgY2IobmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlciwgdGltZW91dCB3aGlsZSB3YWl0aW5nIGZvciBhIHJlc3BvbnNlIG9uIGNhbGwgJ1wiICsgbWV0aG9kICsgXCInXCIpKTtcbiAgICBjYiA9IHV0aWxpdGllcy5ub29wO1xuICB9LCB0aGlzLm9wdGlvbnMucmVzcG9uc2VUaW1lb3V0KTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKG1ldGhvZCwgY2IsIGFkVW5pdCkge1xuICAgIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKG1ldGhvZCkgfHwgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdFttZXRob2RdKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci5hZFVuaXRBc3luY0NhbGwsIGludmFsaWQgbWV0aG9kIG5hbWVcIik7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIuYWRVbml0QXN5bmNDYWxsLCBtaXNzaW5nIGNhbGxiYWNrXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXBDYWxsYmFjaygpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgIH1cbiAgICAgIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfVxufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldnROYW1lLCBoYW5kbGVyKSB7XG4gIHZhciBhZGRFdmVudExpc3RlbmVyID0gdGhpcy5fYWRVbml0LmFkZEV2ZW50TGlzdGVuZXIgfHwgdGhpcy5fYWRVbml0LnN1YnNjcmliZSB8fCB0aGlzLl9hZFVuaXQub247XG4gIGFkZEV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLl9hZFVuaXQsIGV2dE5hbWUsIGhhbmRsZXIpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoZXZ0TmFtZSwgaGFuZGxlcikge1xuICB2YXIgcmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMuX2FkVW5pdC5yZW1vdmVFdmVudExpc3RlbmVyIHx8IHRoaXMuX2FkVW5pdC51bnN1YnNjcmliZSB8fCB0aGlzLl9hZFVuaXQub2ZmO1xuICByZW1vdmVFdmVudExpc3RlbmVyLmNhbGwodGhpcy5fYWRVbml0LCBldnROYW1lLCBoYW5kbGVyKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUud2FpdEZvckV2ZW50ID0gZnVuY3Rpb24gKGV2dE5hbWUsIGNiLCBjb250ZXh0KSB7XG4gIHZhciB0aW1lb3V0SWQ7XG4gIHNhbml0eUNoZWNrKGV2dE5hbWUsIGNiKTtcbiAgY29udGV4dCA9IGNvbnRleHQgfHwgbnVsbDtcblxuICB0aGlzLm9uKGV2dE5hbWUsIHJlc3BvbnNlTGlzdGVuZXIpO1xuXG4gIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGNiKG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIud2FpdEZvckV2ZW50LCB0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIGV2ZW50ICdcIiArIGV2dE5hbWUgKyBcIidcIikpO1xuICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgY2IgPSB1dGlsaXRpZXMubm9vcDtcbiAgfSwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dCk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhldnROYW1lLCBjYikge1xuICAgIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKGV2dE5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLndhaXRGb3JFdmVudCwgbWlzc2luZyBldnQgbmFtZVwiKTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNiKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci53YWl0Rm9yRXZlbnQsIG1pc3NpbmcgY2FsbGJhY2tcIik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzcG9uc2VMaXN0ZW5lcigpIHtcbiAgICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcnJheUxpa2VPYmpUb0FycmF5KGFyZ3VtZW50cyk7XG5cbiAgICBpZiAodGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgIHRpbWVvdXRJZCA9IG51bGw7XG4gICAgfVxuXG4gICAgYXJncy51bnNoaWZ0KG51bGwpO1xuICAgIGNiLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICB9XG59O1xuXG4vLyBWUEFJRCBNRVRIT0RTXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmhhbmRzaGFrZVZlcnNpb24gPSBmdW5jdGlvbiAodmVyc2lvbiwgY2IpIHtcbiAgdGhpcy5hZFVuaXRBc3luY0NhbGwoJ2hhbmRzaGFrZVZlcnNpb24nLCB2ZXJzaW9uLCBjYik7XG59O1xuXG4vKiBqc2hpbnQgbWF4cGFyYW1zOjYgKi9cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuaW5pdEFkID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgYWRVbml0RGF0YSwgY2IpIHtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkTG9hZGVkJywgY2IpO1xuICB0aGlzLl9hZFVuaXQuaW5pdEFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgYWRVbml0RGF0YSk7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnJlc2l6ZUFkID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBjYikge1xuICAvLyBOT1RFOiBBZFNpemVDaGFuZ2UgZXZlbnQgaXMgb25seSBzdXBwb3J0ZWQgb24gVlBBSUQgMi4wIHNvIGZvciB0aGUgbW9tZW50IHdlIGFyZSBub3QgZ29pbmcgdG8gdXNlIGl0XG4gIC8vIGFuZCB3aWxsIGFzc3VtZSB0aGF0IGV2ZXJ5dGhpbmcgaXMgZmluZSBhZnRlciB0aGUgYXN5bmMgY2FsbFxuICB0aGlzLmFkVW5pdEFzeW5jQ2FsbCgncmVzaXplQWQnLCB3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2IpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5zdGFydEFkID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFN0YXJ0ZWQnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5zdGFydEFkKCk7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnN0b3BBZCA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLndhaXRGb3JFdmVudCgnQWRTdG9wcGVkJywgY2IpO1xuICB0aGlzLl9hZFVuaXQuc3RvcEFkKCk7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLnBhdXNlQWQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkUGF1c2VkJywgY2IpO1xuICB0aGlzLl9hZFVuaXQucGF1c2VBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5yZXN1bWVBZCA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLndhaXRGb3JFdmVudCgnQWRQbGF5aW5nJywgY2IpO1xuICB0aGlzLl9hZFVuaXQucmVzdW1lQWQoKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuZXhwYW5kQWQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkRXhwYW5kZWRDaGFuZ2UnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5leHBhbmRBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5jb2xsYXBzZUFkID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZEV4cGFuZGVkQ2hhbmdlJywgY2IpO1xuICB0aGlzLl9hZFVuaXQuY29sbGFwc2VBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5za2lwQWQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkU2tpcHBlZCcsIGNiKTtcbiAgdGhpcy5fYWRVbml0LnNraXBBZCgpO1xufTtcblxuLy9WUEFJRCBwcm9wZXJ0eSBnZXR0ZXJzXG5bXG4gICdhZExpbmVhcicsXG4gICdhZFdpZHRoJyxcbiAgJ2FkSGVpZ2h0JyxcbiAgJ2FkRXhwYW5kZWQnLFxuICAnYWRTa2lwcGFibGVTdGF0ZScsXG4gICdhZFJlbWFpbmluZ1RpbWUnLFxuICAnYWREdXJhdGlvbicsXG4gICdhZFZvbHVtZScsXG4gICdhZENvbXBhbmlvbnMnLFxuICAnYWRJY29ucydcbl0uZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgdmFyIGdldHRlck5hbWUgPSAnZ2V0JyArIHV0aWxpdGllcy5jYXBpdGFsaXplKHByb3BlcnR5KTtcblxuICBWUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlW2dldHRlck5hbWVdID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgdGhpcy5hZFVuaXRBc3luY0NhbGwoZ2V0dGVyTmFtZSwgY2IpO1xuICB9O1xufSk7XG5cbi8vVlBBSUQgcHJvcGVydHkgc2V0dGVyc1xuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5zZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKHZvbHVtZSwgY2Ipe1xuICB0aGlzLmFkVW5pdEFzeW5jQ2FsbCgnc2V0QWRWb2x1bWUnLHZvbHVtZSwgY2IpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREFkVW5pdFdyYXBwZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xuXG52YXIgVlBBSURGTEFTSENsaWVudCA9IHJlcXVpcmUoJ1ZQQUlERkxBU0hDbGllbnQvanMvVlBBSURGTEFTSENsaWVudCcpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xuXG5mdW5jdGlvbiBWUEFJREZsYXNoVGVjaChtZWRpYUZpbGUsIHNldHRpbmdzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWUEFJREZsYXNoVGVjaCkpIHtcbiAgICByZXR1cm4gbmV3IFZQQUlERmxhc2hUZWNoKG1lZGlhRmlsZSk7XG4gIH1cbiAgc2FuaXR5Q2hlY2sobWVkaWFGaWxlKTtcbiAgdGhpcy5uYW1lID0gJ3ZwYWlkLWZsYXNoJztcbiAgdGhpcy5tZWRpYUZpbGUgPSBtZWRpYUZpbGU7XG4gIHRoaXMuY29udGFpbmVyRWwgPSBudWxsO1xuICB0aGlzLnZwYWlkRmxhc2hDbGllbnQgPSBudWxsO1xuICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG5cbiAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhtZWRpYUZpbGUpIHtcbiAgICBpZiAoIW1lZGlhRmlsZSB8fCAhdXRpbGl0aWVzLmlzU3RyaW5nKG1lZGlhRmlsZS5zcmMpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREZsYXNoVGVjaCwgaW52YWxpZCBNZWRpYUZpbGUnKTtcbiAgICB9XG4gIH1cbn1cblxuVlBBSURGbGFzaFRlY2guVlBBSURGTEFTSENsaWVudCA9IFZQQUlERkxBU0hDbGllbnQ7XG5cblZQQUlERmxhc2hUZWNoLnN1cHBvcnRzID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUgPT09ICdhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCcgJiYgVlBBSURGbGFzaFRlY2guVlBBSURGTEFTSENsaWVudC5pc1N1cHBvcnRlZCgpO1xufTtcblxuVlBBSURGbGFzaFRlY2gucHJvdG90eXBlLmxvYWRBZFVuaXQgPSBmdW5jdGlvbiBsb2FkRmxhc2hDcmVhdGl2ZShjb250YWluZXJFbCwgb2JqZWN0RWwsIGNhbGxiYWNrKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIGZsYXNoQ2xpZW50T3B0cyA9IHRoaXMuc2V0dGluZ3MgJiYgdGhpcy5zZXR0aW5ncy52cGFpZEZsYXNoTG9hZGVyUGF0aCA/IHtkYXRhOiB0aGlzLnNldHRpbmdzLnZwYWlkRmxhc2hMb2FkZXJQYXRofSA6IHVuZGVmaW5lZDtcbiAgc2FuaXR5Q2hlY2soY29udGFpbmVyRWwsIGNhbGxiYWNrKTtcblxuICB0aGlzLmNvbnRhaW5lckVsID0gY29udGFpbmVyRWw7XG4gIHRoaXMudnBhaWRGbGFzaENsaWVudCA9IG5ldyBWUEFJREZsYXNoVGVjaC5WUEFJREZMQVNIQ2xpZW50KGNvbnRhaW5lckVsLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnJvcik7XG4gICAgfVxuXG4gICAgdGhhdC52cGFpZEZsYXNoQ2xpZW50LmxvYWRBZFVuaXQodGhhdC5tZWRpYUZpbGUuc3JjLCBjYWxsYmFjayk7XG4gIH0sIGZsYXNoQ2xpZW50T3B0cyk7XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhjb250YWluZXIsIGNiKSB7XG5cbiAgICBpZiAoIWRvbS5pc0RvbUVsZW1lbnQoY29udGFpbmVyKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVlBBSURGbGFzaFRlY2gubG9hZEFkVW5pdCwgaW52YWxpZCBkb20gY29udGFpbmVyIGVsZW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNiKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVlBBSURGbGFzaFRlY2gubG9hZEFkVW5pdCwgbWlzc2luZyB2YWxpZCBjYWxsYmFjaycpO1xuICAgIH1cbiAgfVxufTtcblxuVlBBSURGbGFzaFRlY2gucHJvdG90eXBlLnVubG9hZEFkVW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMudnBhaWRGbGFzaENsaWVudCkge1xuICAgIHRyeXtcbiAgICAgIHRoaXMudnBhaWRGbGFzaENsaWVudC5kZXN0cm95KCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIGlmKGNvbnNvbGUgJiYgdXRpbGl0aWVzLmlzRnVuY3Rpb24oY29uc29sZS5sb2cpKXtcbiAgICAgICAgY29uc29sZS5sb2coJ1ZBU1QgRVJST1I6IHRyeWluZyB0byB1bmxvYWQgdGhlIFZQQUlEIGFkdW5pdCcpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnZwYWlkRmxhc2hDbGllbnQgPSBudWxsO1xuICB9XG5cbiAgaWYgKHRoaXMuY29udGFpbmVyRWwpIHtcbiAgICBkb20ucmVtb3ZlKHRoaXMuY29udGFpbmVyRWwpO1xuICAgIHRoaXMuY29udGFpbmVyRWwgPSBudWxsO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlERmxhc2hUZWNoOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVEVycm9yJyk7XG5cbnZhciBWUEFJREhUTUw1Q2xpZW50ID0gcmVxdWlyZSgnVlBBSURIVE1MNUNsaWVudC9qcy9WUEFJREhUTUw1Q2xpZW50Jyk7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZG9tJyk7XG5cbmZ1bmN0aW9uIFZQQUlESFRNTDVUZWNoKG1lZGlhRmlsZSkge1xuXG4gIGlmKCEodGhpcyBpbnN0YW5jZW9mIFZQQUlESFRNTDVUZWNoKSkge1xuICAgIHJldHVybiBuZXcgVlBBSURIVE1MNVRlY2gobWVkaWFGaWxlKTtcbiAgfVxuXG4gIHNhbml0eUNoZWNrKG1lZGlhRmlsZSk7XG5cbiAgdGhpcy5uYW1lID0gJ3ZwYWlkLWh0bWw1JztcbiAgdGhpcy5jb250YWluZXJFbCA9IG51bGw7XG4gIHRoaXMudmlkZW9FbCA9IG51bGw7XG4gIHRoaXMudnBhaWRIVE1MQ2xpZW50ID0gbnVsbDtcblxuICB0aGlzLm1lZGlhRmlsZSA9IG1lZGlhRmlsZTtcblxuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhtZWRpYUZpbGUpIHtcbiAgICAgIGlmICghbWVkaWFGaWxlIHx8ICF1dGlsaXRpZXMuaXNTdHJpbmcobWVkaWFGaWxlLnNyYykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5JTlZBTElEX01FRElBX0ZJTEUpO1xuICAgICAgfVxuICB9XG59XG5cblZQQUlESFRNTDVUZWNoLlZQQUlESFRNTDVDbGllbnQgPSBWUEFJREhUTUw1Q2xpZW50O1xuXG5WUEFJREhUTUw1VGVjaC5zdXBwb3J0cyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHJldHVybiAhdXRpbGl0aWVzLmlzT2xkSUUoKSAmJiB0eXBlID09PSAnYXBwbGljYXRpb24vamF2YXNjcmlwdCc7XG59O1xuXG5WUEFJREhUTUw1VGVjaC5wcm90b3R5cGUubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIGxvYWRBZFVuaXQoY29udGFpbmVyRWwsIHZpZGVvRWwsIGNhbGxiYWNrKSB7XG4gIHNhbml0eUNoZWNrKGNvbnRhaW5lckVsLCB2aWRlb0VsLCBjYWxsYmFjayk7XG5cbiAgdGhpcy5jb250YWluZXJFbCA9IGNvbnRhaW5lckVsO1xuICB0aGlzLnZpZGVvRWwgPSB2aWRlb0VsO1xuICB0aGlzLnZwYWlkSFRNTENsaWVudCA9IG5ldyBWUEFJREhUTUw1VGVjaC5WUEFJREhUTUw1Q2xpZW50KGNvbnRhaW5lckVsLCB2aWRlb0VsLCB7fSk7XG4gIHRoaXMudnBhaWRIVE1MQ2xpZW50LmxvYWRBZFVuaXQodGhpcy5tZWRpYUZpbGUuc3JjLCBjYWxsYmFjayk7XG5cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soY29udGFpbmVyLCB2aWRlbywgY2IpIHtcbiAgICBpZiAoIWRvbS5pc0RvbUVsZW1lbnQoY29udGFpbmVyKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9DT05UQUlORVJfRUwpO1xuICAgIH1cblxuICAgIGlmICghZG9tLmlzRG9tRWxlbWVudCh2aWRlbykgfHwgdmlkZW8udGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAndmlkZW8nKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFZQQUlESFRNTDVUZWNoLklOVkFMSURfRE9NX0NPTlRBSU5FUl9FTCk7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoVlBBSURIVE1MNVRlY2guTUlTU0lOR19DQUxMQkFDSyk7XG4gICAgfVxuICB9XG59O1xuXG5WUEFJREhUTUw1VGVjaC5wcm90b3R5cGUudW5sb2FkQWRVbml0ID0gZnVuY3Rpb24gdW5sb2FkQWRVbml0KCkge1xuICBpZiAodGhpcy52cGFpZEhUTUxDbGllbnQpIHtcbiAgICB0cnkge1xuICAgICAgdGhpcy52cGFpZEhUTUxDbGllbnQuZGVzdHJveSgpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgaWYgKGNvbnNvbGUgJiYgdXRpbGl0aWVzLmlzRnVuY3Rpb24oY29uc29sZS5sb2cpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdWQVNUIEVSUk9SOiB0cnlpbmcgdG8gdW5sb2FkIHRoZSBWUEFJRCBhZHVuaXQnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnZwYWlkSFRNTENsaWVudCA9IG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5jb250YWluZXJFbCkge1xuICAgIGRvbS5yZW1vdmUodGhpcy5jb250YWluZXJFbCk7XG4gICAgdGhpcy5jb250YWluZXJFbCA9IG51bGw7XG4gIH1cbn07XG5cbnZhciBQUkVGSVggPSAnb24gVlBBSURIVE1MNVRlY2gnO1xuVlBBSURIVE1MNVRlY2guSU5WQUxJRF9NRURJQV9GSUxFID0gUFJFRklYICsgJywgaW52YWxpZCBNZWRpYUZpbGUnO1xuVlBBSURIVE1MNVRlY2guSU5WQUxJRF9ET01fQ09OVEFJTkVSX0VMID0gUFJFRklYICsgJywgaW52YWxpZCBjb250YWluZXIgSHRtbEVsZW1lbnQnO1xuVlBBSURIVE1MNVRlY2guSU5WQUxJRF9ET01fVklERU9fRUwgPSBQUkVGSVggKyAnLCBpbnZhbGlkIEhUTUxWaWRlb0VsZW1lbnQnO1xuVlBBSURIVE1MNVRlY2guTUlTU0lOR19DQUxMQkFDSyA9IFBSRUZJWCArICcsIG1pc3NpbmcgdmFsaWQgY2FsbGJhY2snO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlESFRNTDVUZWNoOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVEVycm9yJyk7XG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNUUmVzcG9uc2UnKTtcbnZhciBWQVNUVHJhY2tlciA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVFRyYWNrZXInKTtcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4uL3Zhc3QvdmFzdFV0aWwnKTtcblxudmFyIFZQQUlEQWRVbml0V3JhcHBlciA9IHJlcXVpcmUoJy4vVlBBSURBZFVuaXRXcmFwcGVyJyk7XG52YXIgVlBBSURIVE1MNVRlY2ggPSByZXF1aXJlKCcuL1ZQQUlESFRNTDVUZWNoJyk7XG52YXIgVlBBSURGbGFzaFRlY2ggPSByZXF1aXJlKCcuL1ZQQUlERmxhc2hUZWNoJyk7XG5cbnZhciBhc3luYyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2FzeW5jJyk7XG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZG9tJyk7XG52YXIgcGxheWVyVXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9wbGF5ZXJVdGlscycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gVlBBSURJbnRlZ3JhdG9yKHBsYXllciwgc2V0dGluZ3MpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZQQUlESW50ZWdyYXRvcikpIHtcbiAgICByZXR1cm4gbmV3IFZQQUlESW50ZWdyYXRvcihwbGF5ZXIpO1xuICB9XG5cbiAgdGhpcy5WSUVXX01PREUgPSB7XG4gICAgTk9STUFMOiAnbm9ybWFsJyxcbiAgICBGVUxMU0NSRUVOOiBcImZ1bGxzY3JlZW5cIixcbiAgICBUSFVNQk5BSUw6IFwidGh1bWJuYWlsXCJcbiAgfTtcbiAgdGhpcy5wbGF5ZXIgPSBwbGF5ZXI7XG4gIHRoaXMuY29udGFpbmVyRWwgPSBjcmVhdGVWUEFJRENvbnRhaW5lckVsKHBsYXllcik7XG4gIHRoaXMub3B0aW9ucyA9IHtcbiAgICByZXNwb25zZVRpbWVvdXQ6IDUwMDAsXG4gICAgVlBBSURfVkVSU0lPTjogJzIuMCdcbiAgfTtcbiAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cblxuICBmdW5jdGlvbiBjcmVhdGVWUEFJRENvbnRhaW5lckVsKCkge1xuICAgIHZhciBjb250YWluZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvbS5hZGRDbGFzcyhjb250YWluZXJFbCwgJ1ZQQUlELWNvbnRhaW5lcicpO1xuICAgIHBsYXllci5lbCgpLmluc2VydEJlZm9yZShjb250YWluZXJFbCwgcGxheWVyLmNvbnRyb2xCYXIuZWwoKSk7XG4gICAgcmV0dXJuIGNvbnRhaW5lckVsO1xuXG4gIH1cbn1cblxuLy9MaXN0IG9mIHN1cHBvcnRlZCBWUEFJRCB0ZWNobm9sb2dpZXNcblZQQUlESW50ZWdyYXRvci50ZWNocyA9IFtcbiAgVlBBSURGbGFzaFRlY2gsXG4gIFZQQUlESFRNTDVUZWNoXG5dO1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLnBsYXlBZCA9IGZ1bmN0aW9uIHBsYXlWUGFpZEFkKHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICB2YXIgdGVjaDtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuXG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgdXRpbGl0aWVzLm5vb3A7XG4gIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcbiAgICByZXR1cm4gY2FsbGJhY2sobmV3IFZBU1RFcnJvcignb24gVkFTVEludGVncmF0b3IucGxheUFkLCBtaXNzaW5nIHJlcXVpcmVkIFZBU1RSZXNwb25zZScpKTtcbiAgfVxuXG4gIHRlY2ggPSB0aGlzLl9maW5kU3VwcG9ydGVkVGVjaCh2YXN0UmVzcG9uc2UsIHRoaXMuc2V0dGluZ3MpO1xuICBkb20uYWRkQ2xhc3MocGxheWVyLmVsKCksICd2anMtdnBhaWQtYWQnKTtcblxuICBwbGF5ZXIub24oJ3Zhc3QuYWRzQ2FuY2VsJywgdHJpZ2dlclZwYWlkQWRFbmQpO1xuICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uKCl7XG4gICAgcGxheWVyLm9mZigndmFzdC5hZHNDYW5jZWwnLCB0cmlnZ2VyVnBhaWRBZEVuZCk7XG4gICAgcmVtb3ZlQWRVbml0KCk7XG4gIH0pO1xuXG4gIGlmICh0ZWNoKSB7XG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICAgIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIG5leHQobnVsbCwgdGVjaCwgdmFzdFJlc3BvbnNlKTtcbiAgICAgIH0sXG4gICAgICB0aGlzLl9sb2FkQWRVbml0LmJpbmQodGhpcyksXG4gICAgICB0aGlzLl9wbGF5QWRVbml0LmJpbmQodGhpcyksXG4gICAgICB0aGlzLl9maW5pc2hQbGF5aW5nLmJpbmQodGhpcylcblxuICAgIF0sIGZ1bmN0aW9uIChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICB0aGF0Ll90cmFja0Vycm9yKHZhc3RSZXNwb25zZSk7XG4gICAgICB9XG4gICAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuYWRFbmQnKTtcbiAgICAgIGNhbGxiYWNrKGVycm9yLCB2YXN0UmVzcG9uc2UpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fYWRVbml0ID0ge1xuICAgICAgX3BhdXNlZDogdHJ1ZSxcbiAgICAgIHR5cGU6ICdWUEFJRCcsXG4gICAgICBwYXVzZUFkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLnBhdXNlQWQnKTtcbiAgICAgICAgcGxheWVyLnBhdXNlKHRydWUpOy8vd2UgbWFrZSBzdXJlIHRoYXQgdGhlIHZpZGVvIGNvbnRlbnQgZ2V0cyBzdG9wcGVkLlxuICAgICAgfSxcbiAgICAgIHJlc3VtZUFkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQucmVzdW1lQWQnKTtcbiAgICAgIH0sXG4gICAgICBpc1BhdXNlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXVzZWQ7XG4gICAgICB9LFxuICAgICAgZ2V0U3JjOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRlY2gubWVkaWFGaWxlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5fYWRVbml0O1xuICB9XG5cbiAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcignb24gVlBBSURJbnRlZ3JhdG9yLnBsYXlBZCwgY291bGQgbm90IGZpbmQgYSBzdXBwb3J0ZWQgbWVkaWFGaWxlJykpO1xuXG4gIHJldHVybiBudWxsO1xuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHRyaWdnZXJWcGFpZEFkRW5kKCl7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLmFkRW5kJyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVBZFVuaXQoKSB7XG4gICAgaWYgKHRlY2gpIHtcbiAgICAgIHRlY2gudW5sb2FkQWRVbml0KCk7XG4gICAgfVxuICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy12cGFpZC1hZCcpO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9maW5kU3VwcG9ydGVkVGVjaCA9IGZ1bmN0aW9uICh2YXN0UmVzcG9uc2UsIHNldHRpbmdzKSB7XG4gIGlmICghKHZhc3RSZXNwb25zZSBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciB2cGFpZE1lZGlhRmlsZXMgPSB2YXN0UmVzcG9uc2UubWVkaWFGaWxlcy5maWx0ZXIodmFzdFV0aWwuaXNWUEFJRCk7XG4gIHZhciBpLCBsZW4sIG1lZGlhRmlsZSwgVlBBSURUZWNoO1xuXG4gIGZvciAoaSA9IDAsIGxlbiA9IHZwYWlkTWVkaWFGaWxlcy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgIG1lZGlhRmlsZSA9IHZwYWlkTWVkaWFGaWxlc1tpXTtcbiAgICBWUEFJRFRlY2ggPSBmaW5kU3VwcG9ydGVkVGVjaChtZWRpYUZpbGUpO1xuICAgIGlmIChWUEFJRFRlY2gpIHtcbiAgICAgIHJldHVybiBuZXcgVlBBSURUZWNoKG1lZGlhRmlsZSwgc2V0dGluZ3MpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIGZpbmRTdXBwb3J0ZWRUZWNoKG1lZGlhZmlsZSkge1xuICAgIHZhciB0eXBlID0gbWVkaWFmaWxlLnR5cGU7XG4gICAgdmFyIGksIGxlbiwgVlBBSURUZWNoO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IFZQQUlESW50ZWdyYXRvci50ZWNocy5sZW5ndGg7IGkgPCBsZW47IGkgKz0gMSkge1xuICAgICAgVlBBSURUZWNoID0gVlBBSURJbnRlZ3JhdG9yLnRlY2hzW2ldO1xuICAgICAgaWYgKFZQQUlEVGVjaC5zdXBwb3J0cyh0eXBlKSkge1xuICAgICAgICByZXR1cm4gVlBBSURUZWNoO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fY3JlYXRlVlBBSURBZFVuaXRXcmFwcGVyID0gZnVuY3Rpb24oYWRVbml0LCBzcmMsIHJlc3BvbnNlVGltZW91dCkge1xuICByZXR1cm4gbmV3IFZQQUlEQWRVbml0V3JhcHBlcihhZFVuaXQsIHtzcmM6IHNyYywgcmVzcG9uc2VUaW1lb3V0OiByZXNwb25zZVRpbWVvdXR9KTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2xvYWRBZFVuaXQgPSBmdW5jdGlvbiAodGVjaCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgdmpzVGVjaEVsID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XG4gIHZhciByZXNwb25zZVRpbWVvdXQgPSB0aGlzLnNldHRpbmdzLnJlc3BvbnNlVGltZW91dCB8fCB0aGlzLm9wdGlvbnMucmVzcG9uc2VUaW1lb3V0O1xuICB0ZWNoLmxvYWRBZFVuaXQodGhpcy5jb250YWluZXJFbCwgdmpzVGVjaEVsLCBmdW5jdGlvbiAoZXJyb3IsIGFkVW5pdCkge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdmFyIFdyYXBwZWRBZFVuaXQgPSB0aGF0Ll9jcmVhdGVWUEFJREFkVW5pdFdyYXBwZXIoYWRVbml0LCB0ZWNoLm1lZGlhRmlsZS5zcmMsIHJlc3BvbnNlVGltZW91dCk7XG4gICAgICB2YXIgdGVjaENsYXNzID0gJ3Zqcy0nICsgdGVjaC5uYW1lICsgJy1hZCc7XG4gICAgICBkb20uYWRkQ2xhc3MocGxheWVyLmVsKCksIHRlY2hDbGFzcyk7XG4gICAgICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksdGVjaENsYXNzKTtcbiAgICAgIH0pO1xuICAgICAgbmV4dChudWxsLCBXcmFwcGVkQWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIG5leHQoZSwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9wbGF5QWRVbml0ID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBjYWxsYmFjaykge1xuICBhc3luYy53YXRlcmZhbGwoW1xuICAgIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgICB9LFxuICAgIHRoaXMuX2hhbmRzaGFrZS5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2luaXRBZC5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX3NldHVwRXZlbnRzLmJpbmQodGhpcyksXG4gICAgdGhpcy5fYWRkU2tpcEJ1dHRvbi5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2xpbmtQbGF5ZXJDb250cm9scy5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX3N0YXJ0QWQuYmluZCh0aGlzKVxuICBdLCBjYWxsYmFjayk7XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9oYW5kc2hha2UgPSBmdW5jdGlvbiBoYW5kc2hha2UoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgYWRVbml0LmhhbmRzaGFrZVZlcnNpb24odGhpcy5vcHRpb25zLlZQQUlEX1ZFUlNJT04sIGZ1bmN0aW9uIChlcnJvciwgdmVyc2lvbikge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIG5leHQoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBpZiAodmVyc2lvbiAmJiBpc1N1cHBvcnRlZFZlcnNpb24odmVyc2lvbikpIHtcbiAgICAgIHJldHVybiBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dChuZXcgVkFTVEVycm9yKCdvbiBWUEFJREludGVncmF0b3IuX2hhbmRzaGFrZSwgdW5zdXBwb3J0ZWQgdmVyc2lvbiBcIicgKyB2ZXJzaW9uICsgJ1wiJyksIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaXNTdXBwb3J0ZWRWZXJzaW9uKHZlcnNpb24pIHtcbiAgICB2YXIgbWFqb3JOdW0gPSBtYWpvcih2ZXJzaW9uKTtcbiAgICByZXR1cm4gbWFqb3JOdW0gPj0gMSAmJiBtYWpvck51bSA8PSAyO1xuICB9XG5cbiAgZnVuY3Rpb24gbWFqb3IodmVyc2lvbikge1xuICAgIHZhciBwYXJ0cyA9IHZlcnNpb24uc3BsaXQoJy4nKTtcbiAgICByZXR1cm4gcGFyc2VJbnQocGFydHNbMF0sIDEwKTtcbiAgfVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5faW5pdEFkID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciB0ZWNoID0gdGhpcy5wbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcbiAgdmFyIGRpbWVuc2lvbiA9IGRvbS5nZXREaW1lbnNpb24odGVjaCk7XG4gIGFkVW5pdC5pbml0QWQoZGltZW5zaW9uLndpZHRoLCBkaW1lbnNpb24uaGVpZ2h0LCB0aGlzLlZJRVdfTU9ERS5OT1JNQUwsIC0xLCB7QWRQYXJhbWV0ZXJzOiB2YXN0UmVzcG9uc2UuYWRQYXJhbWV0ZXJzIHx8ICcnfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9KTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2NyZWF0ZVZBU1RUcmFja2VyID0gZnVuY3Rpb24oYWRVbml0U3JjLCB2YXN0UmVzcG9uc2UpIHtcbiAgcmV0dXJuIG5ldyBWQVNUVHJhY2tlcihhZFVuaXRTcmMsIHZhc3RSZXNwb25zZSk7XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9zZXR1cEV2ZW50cyA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgYWRVbml0U3JjID0gYWRVbml0Lm9wdGlvbnMuc3JjO1xuICB2YXIgdHJhY2tlciA9IHRoaXMuX2NyZWF0ZVZBU1RUcmFja2VyKGFkVW5pdFNyYywgdmFzdFJlc3BvbnNlKTtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgYWRVbml0Lm9uKCdBZFNraXBwZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU2tpcHBlZCcpO1xuICAgIHRyYWNrZXIudHJhY2tTa2lwKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRJbXByZXNzaW9uJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZEltcHJlc3Npb24nKTtcbiAgICB0cmFja2VyLnRyYWNrSW1wcmVzc2lvbnMoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFN0YXJ0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU3RhcnRlZCcpO1xuICAgIHRyYWNrZXIudHJhY2tDcmVhdGl2ZVZpZXcoKTtcbiAgICBub3RpZnlQbGF5VG9QbGF5ZXIoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFZpZGVvU3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9TdGFydCcpO1xuICAgIHRyYWNrZXIudHJhY2tTdGFydCgpO1xuICAgIG5vdGlmeVBsYXlUb1BsYXllcigpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkUGxheWluZycsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRQbGF5aW5nJyk7XG4gICAgdHJhY2tlci50cmFja1Jlc3VtZSgpO1xuICAgIG5vdGlmeVBsYXlUb1BsYXllcigpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkUGF1c2VkJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFBhdXNlZCcpO1xuICAgIHRyYWNrZXIudHJhY2tQYXVzZSgpO1xuICAgIG5vdGlmeVBhdXNlVG9QbGF5ZXIoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gbm90aWZ5UGxheVRvUGxheWVyKCl7XG4gICAgaWYodGhhdC5fYWRVbml0ICYmIHRoYXQuX2FkVW5pdC5pc1BhdXNlZCgpKXtcbiAgICAgIHRoYXQuX2FkVW5pdC5fcGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCdwbGF5Jyk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeVBhdXNlVG9QbGF5ZXIoKSB7XG4gICAgaWYodGhhdC5fYWRVbml0KXtcbiAgICAgIHRoYXQuX2FkVW5pdC5fcGF1c2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgcGxheWVyLnRyaWdnZXIoJ3BhdXNlJyk7XG4gIH1cblxuICBhZFVuaXQub24oJ0FkVmlkZW9GaXJzdFF1YXJ0aWxlJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvRmlyc3RRdWFydGlsZScpO1xuICAgIHRyYWNrZXIudHJhY2tGaXJzdFF1YXJ0aWxlKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRWaWRlb01pZHBvaW50JywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvTWlkcG9pbnQnKTtcbiAgICB0cmFja2VyLnRyYWNrTWlkcG9pbnQoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFZpZGVvVGhpcmRRdWFydGlsZScsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb1RoaXJkUXVhcnRpbGUnKTtcbiAgICB0cmFja2VyLnRyYWNrVGhpcmRRdWFydGlsZSgpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVmlkZW9Db21wbGV0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb0NvbXBsZXRlJyk7XG4gICAgdHJhY2tlci50cmFja0NvbXBsZXRlKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRDbGlja1RocnUnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZENsaWNrVGhydScpO1xuICAgIHZhciB1cmwgPSBkYXRhLnVybDtcbiAgICB2YXIgcGxheWVySGFuZGxlcyA9IGRhdGEucGxheWVySGFuZGxlcztcbiAgICB2YXIgY2xpY2tUaHJ1VXJsID0gdXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcodXJsKSA/IHVybCA6IGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKHZhc3RSZXNwb25zZS5jbGlja1Rocm91Z2gpO1xuXG4gICAgdHJhY2tlci50cmFja0NsaWNrKCk7XG4gICAgaWYgKHBsYXllckhhbmRsZXMgJiYgY2xpY2tUaHJ1VXJsKSB7XG4gICAgICB3aW5kb3cub3BlbihjbGlja1RocnVVcmwsICdfYmxhbmsnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChjbGlja1Rocm91Z2hNYWNybykge1xuICAgICAgdmFyIHZhcmlhYmxlcyA9IHtcbiAgICAgICAgQVNTRVRVUkk6IGFkVW5pdC5vcHRpb25zLnNyYyxcbiAgICAgICAgQ09OVEVOVFBMQVlIRUFEOiAwIC8vSW4gVlBBSUQgdGhlcmUgaXMgbm8gbWV0aG9kIHRvIGtub3cgdGhlIGN1cnJlbnQgdGltZSBmcm9tIHRoZSBhZFVuaXRcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBjbGlja1Rocm91Z2hNYWNybyA/IHZhc3RVdGlsLnBhcnNlVVJMTWFjcm8oY2xpY2tUaHJvdWdoTWFjcm8sIHZhcmlhYmxlcykgOiBudWxsO1xuICAgIH1cbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFVzZXJBY2NlcHRJbnZpdGF0aW9uJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFVzZXJBY2NlcHRJbnZpdGF0aW9uJyk7XG4gICAgdHJhY2tlci50cmFja0FjY2VwdEludml0YXRpb24oKTtcbiAgICB0cmFja2VyLnRyYWNrQWNjZXB0SW52aXRhdGlvbkxpbmVhcigpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVXNlckNsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFVzZXJDbG9zZScpO1xuICAgIHRyYWNrZXIudHJhY2tDbG9zZSgpO1xuICAgIHRyYWNrZXIudHJhY2tDbG9zZUxpbmVhcigpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVXNlck1pbmltaXplJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFVzZXJNaW5pbWl6ZScpO1xuICAgIHRyYWNrZXIudHJhY2tDb2xsYXBzZSgpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkRXJyb3InLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkRXJyb3InKTtcbiAgICAvL05PVEU6IHdlIHRyYWNrIGVycm9ycyBjb2RlIDkwMSwgYXMgbm90ZWQgaW4gVkFTVCAzLjBcbiAgICB0cmFja2VyLnRyYWNrRXJyb3JXaXRoQ29kZSg5MDEpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVm9sdW1lQ2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZvbHVtZUNoYW5nZScpO1xuICAgIHZhciBsYXN0Vm9sdW1lID0gcGxheWVyLnZvbHVtZSgpO1xuICAgIGFkVW5pdC5nZXRBZFZvbHVtZShmdW5jdGlvbiAoZXJyb3IsIGN1cnJlbnRWb2x1bWUpIHtcbiAgICAgIGlmIChjdXJyZW50Vm9sdW1lID09PSAwICYmIGxhc3RWb2x1bWUgPiAwKSB7XG4gICAgICAgIHRyYWNrZXIudHJhY2tNdXRlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjdXJyZW50Vm9sdW1lID4gMCAmJiBsYXN0Vm9sdW1lID09PSAwKSB7XG4gICAgICAgIHRyYWNrZXIudHJhY2tVbm11dGUoKTtcbiAgICAgIH1cblxuICAgICAgcGxheWVyLnZvbHVtZShjdXJyZW50Vm9sdW1lKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgdmFyIHVwZGF0ZVZpZXdTaXplID0gcmVzaXplQWQuYmluZCh0aGlzLCBwbGF5ZXIsIGFkVW5pdCwgdGhpcy5WSUVXX01PREUpO1xuICB2YXIgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQgPSB1dGlsaXRpZXMudGhyb3R0bGUodXBkYXRlVmlld1NpemUsIDEwMCk7XG4gIHZhciBhdXRvUmVzaXplID0gdGhpcy5zZXR0aW5ncy5hdXRvUmVzaXplO1xuXG4gIGlmIChhdXRvUmVzaXplKSB7XG4gICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ29yaWVudGF0aW9uY2hhbmdlJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xuICB9XG5cbiAgcGxheWVyLm9uKCd2YXN0LnJlc2l6ZScsIHVwZGF0ZVZpZXdTaXplKTtcbiAgcGxheWVyLm9uKCd2cGFpZC5wYXVzZUFkJywgcGF1c2VBZFVuaXQpO1xuICBwbGF5ZXIub24oJ3ZwYWlkLnJlc3VtZUFkJywgcmVzdW1lQWRVbml0KTtcblxuICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIub2ZmKCd2YXN0LnJlc2l6ZScsIHVwZGF0ZVZpZXdTaXplKTtcbiAgICBwbGF5ZXIub2ZmKCd2cGFpZC5wYXVzZUFkJywgcGF1c2VBZFVuaXQpO1xuICAgIHBsYXllci5vZmYoJ3ZwYWlkLnJlc3VtZUFkJywgcmVzdW1lQWRVbml0KTtcblxuICAgIGlmIChhdXRvUmVzaXplKSB7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCk7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdvcmllbnRhdGlvbmNoYW5nZScsIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkKTtcbiAgICB9XG4gIH0pO1xuXG4gIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGF1c2VBZFVuaXQoKSB7XG4gICAgYWRVbml0LnBhdXNlQWQodXRpbGl0aWVzLm5vb3ApO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdW1lQWRVbml0KCkge1xuICAgIGFkVW5pdC5yZXN1bWVBZCh1dGlsaXRpZXMubm9vcCk7XG4gIH1cbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2FkZFNraXBCdXR0b24gPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHNraXBCdXR0b247XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcblxuICBhZFVuaXQub24oJ0FkU2tpcHBhYmxlU3RhdGVDaGFuZ2UnLCB1cGRhdGVTa2lwQnV0dG9uU3RhdGUpO1xuXG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlU2tpcEJ1dHRvbik7XG5cbiAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG4gIGZ1bmN0aW9uIHVwZGF0ZVNraXBCdXR0b25TdGF0ZSgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRTa2lwcGFibGVTdGF0ZUNoYW5nZScpO1xuICAgIGFkVW5pdC5nZXRBZFNraXBwYWJsZVN0YXRlKGZ1bmN0aW9uIChlcnJvciwgaXNTa2lwcGFibGUpIHtcbiAgICAgIGlmIChpc1NraXBwYWJsZSkge1xuICAgICAgICBpZiAoIXNraXBCdXR0b24pIHtcbiAgICAgICAgICBhZGRTa2lwQnV0dG9uKHBsYXllcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZVNraXBCdXR0b24ocGxheWVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFNraXBCdXR0b24ocGxheWVyKSB7XG4gICAgc2tpcEJ1dHRvbiA9IGNyZWF0ZVNraXBCdXR0b24ocGxheWVyKTtcbiAgICBwbGF5ZXIuZWwoKS5hcHBlbmRDaGlsZChza2lwQnV0dG9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVNraXBCdXR0b24oKSB7XG4gICAgZG9tLnJlbW92ZShza2lwQnV0dG9uKTtcbiAgICBza2lwQnV0dG9uID0gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNraXBCdXR0b24oKSB7XG4gICAgdmFyIHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgXCJ2YXN0LXNraXAtYnV0dG9uXCIpO1xuICAgIGRvbS5hZGRDbGFzcyhza2lwQnV0dG9uLCBcImVuYWJsZWRcIik7XG4gICAgc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNraXAgYWRcIjtcblxuICAgIHNraXBCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBhZFVuaXQuc2tpcEFkKHV0aWxpdGllcy5ub29wKTsvL1dlIHNraXAgdGhlIGFkVW5pdFxuXG4gICAgICAvL1dlIHByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb24gdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgY2xpY2tUaHJvdWdoIGFuZCBzbyBvblxuICAgICAgaWYgKHdpbmRvdy5FdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHNraXBCdXR0b247XG4gIH1cbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2xpbmtQbGF5ZXJDb250cm9scyA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIGxpbmtWb2x1bWVDb250cm9sKHRoaXMucGxheWVyLCBhZFVuaXQpO1xuICBsaW5rRnVsbFNjcmVlbkNvbnRyb2wodGhpcy5wbGF5ZXIsIGFkVW5pdCwgdGhpcy5WSUVXX01PREUpO1xuXG4gIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gbGlua1ZvbHVtZUNvbnRyb2wocGxheWVyLCBhZFVuaXQpIHtcbiAgICBwbGF5ZXIub24oJ3ZvbHVtZWNoYW5nZScsIHVwZGF0ZUFkVW5pdFZvbHVtZSk7XG4gICAgYWRVbml0Lm9uKCdBZFZvbHVtZUNoYW5nZScsIHVwZGF0ZVBsYXllclZvbHVtZSk7XG5cbiAgICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHBsYXllci5vZmYoJ3ZvbHVtZWNoYW5nZScsIHVwZGF0ZUFkVW5pdFZvbHVtZSk7XG4gICAgfSk7XG5cblxuICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICBmdW5jdGlvbiB1cGRhdGVBZFVuaXRWb2x1bWUoKSB7XG4gICAgICB2YXIgdm9sID0gcGxheWVyLm11dGVkKCkgPyAwIDogcGxheWVyLnZvbHVtZSgpO1xuICAgICAgYWRVbml0LnNldEFkVm9sdW1lKHZvbCwgbG9nRXJyb3IpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBsYXllclZvbHVtZSgpIHtcbiAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZvbHVtZUNoYW5nZScpO1xuICAgICAgYWRVbml0LmdldEFkVm9sdW1lKGZ1bmN0aW9uIChlcnJvciwgdm9sKSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGxvZ0Vycm9yKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXIudm9sdW1lKHZvbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGxpbmtGdWxsU2NyZWVuQ29udHJvbChwbGF5ZXIsIGFkVW5pdCwgVklFV19NT0RFKSB7XG4gICAgdmFyIHVwZGF0ZVZpZXdTaXplID0gcmVzaXplQWQuYmluZCh0aGF0LCBwbGF5ZXIsIGFkVW5pdCwgVklFV19NT0RFKTtcblxuICAgIHBsYXllci5vbignZnVsbHNjcmVlbmNoYW5nZScsIHVwZGF0ZVZpZXdTaXplKTtcblxuICAgIHBsYXllci5vbmUoJ3ZwYWlkLmFkRW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgcGxheWVyLm9mZignZnVsbHNjcmVlbmNoYW5nZScsIHVwZGF0ZVZpZXdTaXplKTtcbiAgICB9KTtcbiAgfVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fc3RhcnRBZCA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cbiAgYWRVbml0LnN0YXJ0QWQoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgaWYgKCFlcnJvcikge1xuICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRTdGFydCcpO1xuICAgIH1cbiAgICBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gIH0pO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fZmluaXNoUGxheWluZyA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIGFkVW5pdC5vbignQWRTdG9wcGVkJywgZnVuY3Rpb24gKCkge1xuICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU3RvcHBlZCcpO1xuICAgZmluaXNoUGxheWluZ0FkKG51bGwpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkRXJyb3InLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICB2YXIgZXJyTXNnID0gZXJyb3I/IGVycm9yLm1lc3NhZ2UgOiAnb24gVlBBSURJbnRlZ3JhdG9yLCBlcnJvciB3aGlsZSB3YWl0aW5nIGZvciB0aGUgYWRVbml0IHRvIGZpbmlzaCBwbGF5aW5nJztcbiAgICBmaW5pc2hQbGF5aW5nQWQobmV3IFZBU1RFcnJvcihlcnJNc2cpKTtcbiAgfSk7XG5cbiAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBmaW5pc2hQbGF5aW5nQWQoZXJyb3IpIHtcbiAgICBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gIH1cbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3RyYWNrRXJyb3IgPSBmdW5jdGlvbiB0cmFja0Vycm9yKHJlc3BvbnNlKSB7XG4gIHZhc3RVdGlsLnRyYWNrKHJlc3BvbnNlLmVycm9yVVJMTWFjcm9zLCB7RVJST1JDT0RFOiA5MDF9KTtcbn07XG5cbmZ1bmN0aW9uIHJlc2l6ZUFkKHBsYXllciwgYWRVbml0LCBWSUVXX01PREUpIHtcbiAgdmFyIHRlY2ggPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcbiAgdmFyIGRpbWVuc2lvbiA9IGRvbS5nZXREaW1lbnNpb24odGVjaCk7XG4gIHZhciBNT0RFID0gcGxheWVyLmlzRnVsbHNjcmVlbigpID8gVklFV19NT0RFLkZVTExTQ1JFRU4gOiBWSUVXX01PREUuTk9STUFMO1xuICBhZFVuaXQucmVzaXplQWQoZGltZW5zaW9uLndpZHRoLCBkaW1lbnNpb24uaGVpZ2h0LCBNT0RFLCBsb2dFcnJvcik7XG59XG5cbmZ1bmN0aW9uIGxvZ0Vycm9yKGVycm9yKSB7XG4gIGlmIChlcnJvciAmJiBjb25zb2xlICYmIGNvbnNvbGUubG9nKSB7XG4gICAgY29uc29sZS5sb2coJ0VSUk9SOiAnICsgZXJyb3IubWVzc2FnZSwgZXJyb3IpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURJbnRlZ3JhdG9yOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xuXG52YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZWxlbWVudC5jbGFzc05hbWUgPSAndmpzLWFkcy1sYWJlbCB2anMtY29udHJvbCB2anMtbGFiZWwtaGlkZGVuJztcbmVsZW1lbnQuaW5uZXJIVE1MID0gJ0FkdmVydGlzZW1lbnQnO1xuXG52YXIgQWRzTGFiZWxGYWN0b3J5ID0gZnVuY3Rpb24oYmFzZUNvbXBvbmVudCkge1xuICByZXR1cm4ge1xuICAgIC8qKiBAY29uc3RydWN0b3IgKi9cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHBsYXllciwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucy5lbCA9IGVsZW1lbnQ7XG4gICAgICBiYXNlQ29tcG9uZW50LmNhbGwodGhpcywgcGxheWVyLCBvcHRpb25zKTtcblxuICAgICAgLy8gV2UgYXN5bmNocm9ub3VzbHkgcmVwb3NpdGlvbiB0aGUgYWRzIGxhYmVsIGVsZW1lbnRcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudFRpbWVDb21wID0gcGxheWVyLmNvbnRyb2xCYXIgJiYoIHBsYXllci5jb250cm9sQmFyLmdldENoaWxkKFwidGltZXJDb250cm9sc1wiKSB8fCBwbGF5ZXIuY29udHJvbEJhci5nZXRDaGlsZChcImN1cnJlbnRUaW1lRGlzcGxheVwiKSApO1xuICAgICAgICBpZihjdXJyZW50VGltZUNvbXApIHtcbiAgICAgICAgICBwbGF5ZXIuY29udHJvbEJhci5lbCgpLmluc2VydEJlZm9yZShlbGVtZW50LCBjdXJyZW50VGltZUNvbXAuZWwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKGVsZW1lbnQsICd2anMtbGFiZWwtaGlkZGVuJyk7XG4gICAgICB9LCAwKTtcbiAgICB9LFxuXG4gICAgZWw6IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFkc0xhYmVsRmFjdG9yeTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBiYXNlVmlkZW9Kc0NvbXBvbmVudCA9IHZpZGVvanMuQ29tcG9uZW50O1xuXG52YXIgQWRzTGFiZWwgPSByZXF1aXJlKCcuL2Fkcy1sYWJlbCcpKGJhc2VWaWRlb0pzQ29tcG9uZW50KTtcblxudmlkZW9qcy5BZHNMYWJlbCA9IHZpZGVvanMuQ29tcG9uZW50LmV4dGVuZChBZHNMYWJlbCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVGhlIGNvbXBvbmVudCB0aGF0IHNob3dzIGEgYmxhY2sgc2NyZWVuIHVudGlsIHRoZSBhZHMgcGx1Z2luIGhhcyBkZWNpZGVkIGlmIGl0IGNhbiBvciBpdCBjYW4gbm90IHBsYXkgdGhlIGFkLlxuICpcbiAqIE5vdGU6IEluIGNhc2UgeW91IHdvbmRlciB3aHkgaW5zdGVhZCBvZiB0aGlzIGJsYWNrIHBvc3RlciB3ZSBkb24ndCBqdXN0IHNob3cgdGhlIHNwaW5uZXIgbG9hZGVyLlxuICogICAgICAgSU9TIGRldmljZXMgZG8gbm90IHdvcmsgd2VsbCB3aXRoIGFuaW1hdGlvbnMgYW5kIHRoZSBicm93c2VyIGNocmFzaGVzIGZyb20gdGltZSB0byB0aW1lIFRoYXQgaXMgd2h5IHdlIGNob3NlIHRvXG4gKiAgICAgICBoYXZlIGEgc2Vjb25kYXJ5IGJsYWNrIHBvc3Rlci5cbiAqXG4gKiAgICAgICBJdCBhbHNvIG1ha2VzIGl0IG11Y2ggbW9yZSBlYXNpZXIgZm9yIHRoZSB1c2VycyBvZiB0aGUgcGx1Z2luIHNpbmNlIGl0IGRvZXMgbm90IGNoYW5nZSB0aGUgZGVmYXVsdCBiZWhhdmlvdXIgb2YgdGhlXG4gKiAgICAgICBzcGlubmVyIGFuZCB0aGUgcGxheWVyIHdvcmtzIHRoZSBzYW1lIHdheSB3aXRoIGFuZCB3aXRob3V0IHRoZSBwbHVnaW4uXG4gKlxuICogQHBhcmFtIHt2anMuUGxheWVyfE9iamVjdH0gcGxheWVyXG4gKiBAcGFyYW0ge09iamVjdD19IG9wdGlvbnNcbiAqIEBjb25zdHJ1Y3RvclxuICovXG52YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG52YXIgQmxhY2tQb3N0ZXJGYWN0b3J5ID0gZnVuY3Rpb24oYmFzZUNvbXBvbmVudCkge1xuICByZXR1cm4ge1xuICAgIC8qKiBAY29uc3RydWN0b3IgKi9cbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KHBsYXllciwgb3B0aW9ucykge1xuICAgICAgb3B0aW9ucy5lbCA9IGVsZW1lbnQ7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9ICd2anMtYmxhY2stcG9zdGVyJztcbiAgICAgIGJhc2VDb21wb25lbnQuY2FsbCh0aGlzLCBwbGF5ZXIsIG9wdGlvbnMpO1xuXG4gICAgICB2YXIgcG9zdGVySW1nID0gcGxheWVyLmdldENoaWxkKCdwb3N0ZXJJbWFnZScpO1xuXG4gICAgICAvL1dlIG5lZWQgdG8gZG8gaXQgYXN5bmNocm9ub3VzbHkgdG8gYmUgc3VyZSB0aGF0IHRoZSBibGFjayBwb3N0ZXIgZWwgaXMgb24gdGhlIGRvbS5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKHBvc3RlckltZyAmJiBwbGF5ZXIgJiYgcGxheWVyLmVsKCkpIHtcbiAgICAgICAgICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgcG9zdGVySW1nLmVsKCkpO1xuICAgICAgICB9XG4gICAgICB9LCAwKTtcbiAgICB9LFxuICAgIGVsOiBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBCbGFja1Bvc3RlckZhY3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFzZVZpZGVvSnNDb21wb25lbnQgPSB2aWRlb2pzLkNvbXBvbmVudDtcblxudmFyIEJsYWNrUG9zdGVyID0gcmVxdWlyZSgnLi9ibGFjay1wb3N0ZXInKShiYXNlVmlkZW9Kc0NvbXBvbmVudCk7XG5cbnZpZGVvanMuQmxhY2tQb3N0ZXIgPSB2aWRlb2pzLkNvbXBvbmVudC5leHRlbmQoQmxhY2tQb3N0ZXIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVkFTVENsaWVudCA9IHJlcXVpcmUoJy4uL2Fkcy92YXN0L1ZBU1RDbGllbnQnKTtcbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC9WQVNURXJyb3InKTtcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4uL2Fkcy92YXN0L3Zhc3RVdGlsJyk7XG5cbnZhciBWQVNUSW50ZWdyYXRvciA9IHJlcXVpcmUoJy4uL2Fkcy92YXN0L1ZBU1RJbnRlZ3JhdG9yJyk7XG52YXIgVlBBSURJbnRlZ3JhdG9yID0gcmVxdWlyZSgnLi4vYWRzL3ZwYWlkL1ZQQUlESW50ZWdyYXRvcicpO1xuXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi91dGlscy9hc3luYycpO1xudmFyIGRvbSA9IHJlcXVpcmUoJy4uL3V0aWxzL2RvbScpO1xudmFyIHBsYXllclV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMvcGxheWVyVXRpbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gVkFTVFBsdWdpbihvcHRpb25zKSB7XG4gIHZhciBzbmFwc2hvdDtcbiAgdmFyIHBsYXllciA9IHRoaXM7XG4gIHZhciB2YXN0ID0gbmV3IFZBU1RDbGllbnQoKTtcbiAgdmFyIGFkc0NhbmNlbGVkID0gZmFsc2U7XG4gIHZhciBkZWZhdWx0T3B0cyA9IHtcbiAgICAvLyBtYXhpbXVtIGFtb3VudCBvZiB0aW1lIGluIG1zIHRvIHdhaXQgdG8gcmVjZWl2ZSBgYWRzcmVhZHlgIGZyb20gdGhlIGFkXG4gICAgLy8gaW1wbGVtZW50YXRpb24gYWZ0ZXIgcGxheSBoYXMgYmVlbiByZXF1ZXN0ZWQuIEFkIGltcGxlbWVudGF0aW9ucyBhcmVcbiAgICAvLyBleHBlY3RlZCB0byBsb2FkIGFueSBkeW5hbWljIGxpYnJhcmllcyBhbmQgbWFrZSBhbnkgcmVxdWVzdHMgdG8gZGV0ZXJtaW5lXG4gICAgLy8gYWQgcG9saWNpZXMgZm9yIGEgdmlkZW8gZHVyaW5nIHRoaXMgdGltZS5cbiAgICB0aW1lb3V0OiA1MDAsXG5cbiAgICAvL1RPRE86ZmluaXNoIHRoaXMgSU9TIEZJWFxuICAgIC8vV2hlbmV2ZXIgeW91IHBsYXkgYW4gYWRkIG9uIElPUywgdGhlIG5hdGl2ZSBwbGF5ZXIga2lja3MgaW4gYW5kIHdlIGxvb3NlIGNvbnRyb2wgb2YgaXQuIE9uIHZlcnkgaGVhdnkgcGFnZXMgdGhlICdwbGF5JyBldmVudFxuICAgIC8vIE1heSBvY2N1ciBhZnRlciB0aGUgdmlkZW8gY29udGVudCBoYXMgYWxyZWFkeSBzdGFydGVkLiBUaGlzIGlzIHdyb25nIGlmIHlvdSB3YW50IHRvIHBsYXkgYSBwcmVyb2xsIGFkIHRoYXQgbmVlZHMgdG8gaGFwcGVuIGJlZm9yZSB0aGUgdXNlclxuICAgIC8vIHN0YXJ0cyB3YXRjaGluZyB0aGUgY29udGVudC4gVG8gcHJldmVudCB0aGlzIHVzZWNcbiAgICBpb3NQcmVyb2xsQ2FuY2VsVGltZW91dDogMjAwMCxcblxuICAgIC8vIG1heGltdW4gYW1vdW50IG9mIHRpbWUgZm9yIHRoZSBhZCB0byBhY3R1YWxseSBzdGFydCBwbGF5aW5nLiBJZiB0aGlzIHRpbWVvdXQgZ2V0c1xuICAgIC8vIHRyaWdnZXJlZCB0aGUgYWRzIHdpbGwgYmUgY2FuY2VsbGVkXG4gICAgYWRDYW5jZWxUaW1lb3V0OiAzMDAwLFxuXG4gICAgLy8gQm9vbGVhbiBmbGFnIHRoYXQgY29uZmlndXJlcyB0aGUgcGxheWVyIHRvIHBsYXkgYSBuZXcgYWQgYmVmb3JlIHRoZSB1c2VyIHNlZXMgdGhlIHZpZGVvIGFnYWluXG4gICAgLy8gdGhlIGN1cnJlbnQgdmlkZW9cbiAgICBwbGF5QWRBbHdheXM6IGZhbHNlLFxuXG4gICAgLy8gRmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYWRzIGJ5IGRlZmF1bHQuXG4gICAgYWRzRW5hYmxlZDogdHJ1ZSxcblxuICAgIC8vIEJvb2xlYW4gZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgcmVzaXplIHdpdGggd2luZG93LnJlc2l6ZSBvciBvcmllbnRhdGlvbmNoYW5nZVxuICAgIGF1dG9SZXNpemU6IHRydWUsXG5cbiAgICAvLyBQYXRoIHRvIHRoZSBWUEFJRCBmbGFzaCBhZCdzIGxvYWRlclxuICAgIHZwYWlkRmxhc2hMb2FkZXJQYXRoOiAnL1ZQQUlERmxhc2guc3dmJ1xuICB9O1xuXG4gIHZhciBzZXR0aW5ncyA9IHV0aWxpdGllcy5leHRlbmQoe30sIGRlZmF1bHRPcHRzLCBvcHRpb25zIHx8IHt9KTtcblxuICBpZih1dGlsaXRpZXMuaXNVbmRlZmluZWQoc2V0dGluZ3MuYWRUYWdVcmwpICYmIHV0aWxpdGllcy5pc0RlZmluZWQoc2V0dGluZ3MudXJsKSl7XG4gICAgc2V0dGluZ3MuYWRUYWdVcmwgPSBzZXR0aW5ncy51cmw7XG4gIH1cblxuICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKHNldHRpbmdzLmFkVGFnVXJsKSkge1xuICAgIHNldHRpbmdzLmFkVGFnVXJsID0gdXRpbGl0aWVzLmVjaG9GbihzZXR0aW5ncy5hZFRhZ1VybCk7XG4gIH1cblxuICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChzZXR0aW5ncy5hZFRhZ1hNTCkgJiYgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKHNldHRpbmdzLmFkVGFnWE1MKSkge1xuICAgIHJldHVybiB0cmFja0FkRXJyb3IobmV3IFZBU1RFcnJvcignb24gVmlkZW9KUyBWQVNUIHBsdWdpbiwgdGhlIHBhc3NlZCBhZFRhZ1hNTCBvcHRpb24gZG9lcyBub3QgY29udGFpbiBhIGZ1bmN0aW9uJykpO1xuICB9XG5cbiAgaWYgKCF1dGlsaXRpZXMuaXNEZWZpbmVkKHNldHRpbmdzLmFkVGFnVXJsKSAmJiAhdXRpbGl0aWVzLmlzRnVuY3Rpb24oc2V0dGluZ3MuYWRUYWdYTUwpKSB7XG4gICAgcmV0dXJuIHRyYWNrQWRFcnJvcihuZXcgVkFTVEVycm9yKCdvbiBWaWRlb0pTIFZBU1QgcGx1Z2luLCBtaXNzaW5nIGFkVGFnVXJsIG9uIG9wdGlvbnMgb2JqZWN0JykpO1xuICB9XG5cbiAgcGxheWVyVXRpbHMucHJlcGFyZUZvckFkcyhwbGF5ZXIpO1xuXG4gIGlmIChzZXR0aW5ncy5wbGF5QWRBbHdheXMpIHtcbiAgICAvLyBObyBtYXR0ZXIgd2hhdCBoYXBwZW5zIHdlIHBsYXkgYSBuZXcgYWQgYmVmb3JlIHRoZSB1c2VyIHNlZXMgdGhlIHZpZGVvIGFnYWluLlxuICAgIHBsYXllci5vbigndmFzdC5jb250ZW50RW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LnJlc2V0Jyk7XG4gICAgICB9LCAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHBsYXllci5vbigndmFzdC5maXJzdFBsYXknLCB0cnlUb1BsYXlQcmVyb2xsQWQpO1xuXG4gIHBsYXllci5vbigndmFzdC5yZXNldCcsIGZ1bmN0aW9uICgpIHtcbiAgICAvL0lmIHdlIGFyZSByZXNldGluZyB0aGUgcGx1Z2luLCB3ZSBkb24ndCB3YW50IHRvIHJlc3RvcmUgdGhlIGNvbnRlbnRcbiAgICBzbmFwc2hvdCA9IG51bGw7XG4gICAgY2FuY2VsQWRzKCk7XG4gIH0pO1xuXG4gIHBsYXllci52YXN0ID0ge1xuICAgIGlzRW5hYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHNldHRpbmdzLmFkc0VuYWJsZWQ7XG4gICAgfSxcblxuICAgIGVuYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgc2V0dGluZ3MuYWRzRW5hYmxlZCA9IHRydWU7XG4gICAgfSxcblxuICAgIGRpc2FibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldHRpbmdzLmFkc0VuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHBsYXllci52YXN0O1xuXG4gIC8qKioqIExvY2FsIGZ1bmN0aW9ucyAqKioqL1xuICBmdW5jdGlvbiB0cnlUb1BsYXlQcmVyb2xsQWQoKSB7XG4gICAgLy9XZSByZW1vdmUgdGhlIHBvc3RlciB0byBwcmV2ZW50IGZsaWNrZXJpbmcgd2hlbmV2ZXIgdGhlIGNvbnRlbnQgc3RhcnRzIHBsYXlpbmdcbiAgICBwbGF5ZXJVdGlscy5yZW1vdmVOYXRpdmVQb3N0ZXIocGxheWVyKTtcblxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRzQ2FuY2VsJywgJ3Zhc3QuYWRFbmQnXSwgZnVuY3Rpb24gKCkge1xuICAgICAgcmVtb3ZlQWRVbml0KCk7XG4gICAgICByZXN0b3JlVmlkZW9Db250ZW50KCk7XG4gICAgfSk7XG5cbiAgICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgY2hlY2tBZHNFbmFibGVkLFxuICAgICAgcHJlcGFyZVBsYXllckZvckFkLFxuICAgICAgcGxheVByZXJvbGxBZFxuICAgIF0sIGZ1bmN0aW9uIChlcnJvciwgcmVzcG9uc2UpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICB0cmFja0FkRXJyb3IoZXJyb3IsIHJlc3BvbnNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkRW5kJyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG5cbiAgICBmdW5jdGlvbiByZW1vdmVBZFVuaXQoKSB7XG4gICAgICBpZiAocGxheWVyLnZhc3QgJiYgcGxheWVyLnZhc3QuYWRVbml0KSB7XG4gICAgICAgIHBsYXllci52YXN0LmFkVW5pdCA9IG51bGw7IC8vV2UgcmVtb3ZlIHRoZSBhZFVuaXRcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXN0b3JlVmlkZW9Db250ZW50KCkge1xuICAgICAgc2V0dXBDb250ZW50RXZlbnRzKCk7XG4gICAgICBpZiAoc25hcHNob3QpIHtcbiAgICAgICAgcGxheWVyVXRpbHMucmVzdG9yZVBsYXllclNuYXBzaG90KHBsYXllciwgc25hcHNob3QpO1xuICAgICAgICBzbmFwc2hvdCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXBDb250ZW50RXZlbnRzKCkge1xuICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsncGxheWluZycsICd2YXN0LnJlc2V0JywgJ3Zhc3QuZmlyc3RQbGF5J10sIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgaWYgKGV2dC50eXBlICE9PSAncGxheWluZycpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5jb250ZW50U3RhcnQnKTtcblxuICAgICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWydlbmRlZCcsICd2YXN0LnJlc2V0JywgJ3Zhc3QuZmlyc3RQbGF5J10sIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICBpZiAoZXZ0LnR5cGUgPT09ICdlbmRlZCcpIHtcbiAgICAgICAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmNvbnRlbnRFbmQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tBZHNFbmFibGVkKG5leHQpIHtcbiAgICAgIGlmIChzZXR0aW5ncy5hZHNFbmFibGVkKSB7XG4gICAgICAgIHJldHVybiBuZXh0KG51bGwpO1xuICAgICAgfVxuICAgICAgbmV4dChuZXcgVkFTVEVycm9yKCdBZHMgYXJlIG5vdCBlbmFibGVkJykpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXBhcmVQbGF5ZXJGb3JBZChuZXh0KSB7XG4gICAgICBpZiAoY2FuUGxheVByZXJvbGxBZCgpKSB7XG4gICAgICAgIHNuYXBzaG90ID0gcGxheWVyVXRpbHMuZ2V0UGxheWVyU25hcHNob3QocGxheWVyKTtcbiAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgIGFkZFNwaW5uZXJJY29uKCk7XG4gICAgICAgIHN0YXJ0QWRDYW5jZWxUaW1lb3V0KCk7XG4gICAgICAgIG5leHQobnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0KG5ldyBWQVNURXJyb3IoJ3ZpZGVvIGNvbnRlbnQgaGFzIGJlZW4gcGxheWluZyBiZWZvcmUgcHJlcm9sbCBhZCcpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5QbGF5UHJlcm9sbEFkKCkge1xuICAgICAgcmV0dXJuICF1dGlsaXRpZXMuaXNJUGhvbmUoKSB8fCBwbGF5ZXIuY3VycmVudFRpbWUoKSA8PSBzZXR0aW5ncy5pb3NQcmVyb2xsQ2FuY2VsVGltZW91dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdGFydEFkQ2FuY2VsVGltZW91dCgpIHtcbiAgICAgIHZhciBhZENhbmNlbFRpbWVvdXRJZDtcbiAgICAgIGFkc0NhbmNlbGVkID0gZmFsc2U7XG5cbiAgICAgIGFkQ2FuY2VsVGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyYWNrQWRFcnJvcihuZXcgVkFTVEVycm9yKCd0aW1lb3V0IHdoaWxlIHdhaXRpbmcgZm9yIHRoZSB2aWRlbyB0byBzdGFydCBwbGF5aW5nJywgNDAyKSk7XG4gICAgICB9LCBzZXR0aW5ncy5hZENhbmNlbFRpbWVvdXQpO1xuXG4gICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnXSwgY2xlYXJBZENhbmNlbFRpbWVvdXQpO1xuXG4gICAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgICBmdW5jdGlvbiBjbGVhckFkQ2FuY2VsVGltZW91dCgpIHtcbiAgICAgICAgaWYgKGFkQ2FuY2VsVGltZW91dElkKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGFkQ2FuY2VsVGltZW91dElkKTtcbiAgICAgICAgICBhZENhbmNlbFRpbWVvdXRJZCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRTcGlubmVySWNvbigpIHtcbiAgICAgIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy12YXN0LWFkLWxvYWRpbmcnKTtcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRTdGFydCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTcGlubmVySWNvbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3Bpbm5lckljb24oKSB7XG4gICAgICAvL0lNUE9SVEFOVCBOT1RFOiBXZSByZW1vdmUgdGhlIHNwaW5uZXJJY29uIGFzeW5jaHJvbm91c2x5IHRvIGdpdmUgdGltZSB0byB0aGUgYnJvd3NlciB0byBzdGFydCB0aGUgdmlkZW8uXG4gICAgICAvLyBJZiB3ZSByZW1vdmUgaXQgc3luY2hyb25vdXNseSB3ZSBzZWUgYSBmbGFzaCBvZiB0aGUgY29udGVudCB2aWRlbyBiZWZvcmUgdGhlIGFkIHN0YXJ0cyBwbGF5aW5nLlxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy12YXN0LWFkLWxvYWRpbmcnKTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfVxuXG4gIH1cblxuICBmdW5jdGlvbiBjYW5jZWxBZHMoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuYWRzQ2FuY2VsJyk7XG4gICAgYWRzQ2FuY2VsZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheVByZXJvbGxBZChjYWxsYmFjaykge1xuICAgIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICBnZXRWYXN0UmVzcG9uc2UsXG4gICAgICBwbGF5QWRcbiAgICBdLCBjYWxsYmFjayk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRWYXN0UmVzcG9uc2UoY2FsbGJhY2spIHtcbiAgICB2YXN0LmdldFZBU1RSZXNwb25zZShzZXR0aW5ncy5hZFRhZ1VybCA/IHNldHRpbmdzLmFkVGFnVXJsKCkgOiBzZXR0aW5ncy5hZFRhZ1hNTCwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheUFkKHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgICAvL1RPRE86IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIHN0b3AgdGhlIHBsYXkuIFRoZSAncGxheVByZXJvbGxXYXRlcmZhbGwnIGVuZHMgaW4gYW4gaW5jb25zaXN0ZW50IHNpdHVhdGlvblxuICAgIC8vSWYgdGhlIHN0YXRlIGlzIG5vdCAncHJlcm9sbD8nIGl0IG1lYW5zIHRoZSBhZHMgd2VyZSBjYW5jZWxlZCB0aGVyZWZvcmUsIHdlIGJyZWFrIHRoZSB3YXRlcmZhbGxcbiAgICBpZiAoYWRzQ2FuY2VsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYWRJbnRlZ3JhdG9yID0gaXNWUEFJRCh2YXN0UmVzcG9uc2UpID8gbmV3IFZQQUlESW50ZWdyYXRvcihwbGF5ZXIsIHNldHRpbmdzKSA6IG5ldyBWQVNUSW50ZWdyYXRvcihwbGF5ZXIpO1xuICAgIHZhciBhZEZpbmlzaGVkID0gZmFsc2U7XG5cbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYgKGV2dC50eXBlID09PSAndmFzdC5hZFN0YXJ0Jykge1xuICAgICAgICBhZGRBZHNMYWJlbCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVBZHNMYWJlbCk7XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzSURldmljZSgpKSB7XG4gICAgICBwcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKTtcbiAgICB9XG5cbiAgICBwbGF5ZXIudmFzdC5hZFVuaXQgPSBhZEludGVncmF0b3IucGxheUFkKHZhc3RSZXNwb25zZSwgY2FsbGJhY2spO1xuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqKi9cbiAgICBmdW5jdGlvbiBhZGRBZHNMYWJlbCgpIHtcbiAgICAgIGlmIChhZEZpbmlzaGVkIHx8IHBsYXllci5jb250cm9sQmFyLmdldENoaWxkKCdBZHNMYWJlbCcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcGxheWVyLmNvbnRyb2xCYXIuYWRkQ2hpbGQoJ0Fkc0xhYmVsJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWRzTGFiZWwoKSB7XG4gICAgICBwbGF5ZXIuY29udHJvbEJhci5yZW1vdmVDaGlsZCgnQWRzTGFiZWwnKTtcbiAgICAgIGFkRmluaXNoZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByZXZlbnRNYW51YWxQcm9ncmVzcygpIHtcbiAgICAgIC8vSU9TIHZpZGVvIGNsb2NrIGlzIHZlcnkgdW5yZWxpYWJsZSBhbmQgd2UgbmVlZCBhIDMgc2Vjb25kcyB0aHJlc2hvbGQgdG8gZW5zdXJlIHRoYXQgdGhlIHVzZXIgZm9yd2FyZGVkL3Jld291bmQgdGhlIGFkXG4gICAgICB2YXIgUFJPR1JFU1NfVEhSRVNIT0xEID0gMztcbiAgICAgIHZhciBwcmV2aW91c1RpbWUgPSAwO1xuICAgICAgdmFyIHNraXBhZF9hdHRlbXB0cyA9IDA7XG5cbiAgICAgIHBsYXllci5vbigndGltZXVwZGF0ZScsIGFkVGltZXVwZGF0ZUhhbmRsZXIpO1xuICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCcsICd2YXN0LmFkRXJyb3InXSwgc3RvcFByZXZlbnRNYW51YWxQcm9ncmVzcyk7XG5cbiAgICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICAgIGZ1bmN0aW9uIGFkVGltZXVwZGF0ZUhhbmRsZXIoKSB7XG4gICAgICAgIHZhciBjdXJyZW50VGltZSA9IHBsYXllci5jdXJyZW50VGltZSgpO1xuICAgICAgICB2YXIgcHJvZ3Jlc3NEZWx0YSA9IE1hdGguYWJzKGN1cnJlbnRUaW1lIC0gcHJldmlvdXNUaW1lKTtcblxuICAgICAgICBpZiAocHJvZ3Jlc3NEZWx0YSA+IFBST0dSRVNTX1RIUkVTSE9MRCkge1xuICAgICAgICAgIHNraXBhZF9hdHRlbXB0cyArPSAxO1xuICAgICAgICAgIGlmIChza2lwYWRfYXR0ZW1wdHMgPj0gMikge1xuICAgICAgICAgICAgcGxheWVyLnBhdXNlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHBsYXllci5jdXJyZW50VGltZShwcmV2aW91c1RpbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZXZpb3VzVGltZSA9IGN1cnJlbnRUaW1lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHN0b3BQcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKSB7XG4gICAgICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCBhZFRpbWV1cGRhdGVIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0FkRXJyb3IoZXJyb3IsIHZhc3RSZXNwb25zZSkge1xuICAgIHBsYXllci50cmlnZ2VyKHt0eXBlOiAndmFzdC5hZEVycm9yJywgZXJyb3I6IGVycm9yfSk7XG4gICAgY2FuY2VsQWRzKCk7XG4gICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS5sb2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdBRCBFUlJPUjonLCBlcnJvci5tZXNzYWdlLCBlcnJvciwgdmFzdFJlc3BvbnNlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1ZQQUlEKHZhc3RSZXNwb25zZSkge1xuICAgIHZhciBpLCBsZW47XG4gICAgdmFyIG1lZGlhRmlsZXMgPSB2YXN0UmVzcG9uc2UubWVkaWFGaWxlcztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBtZWRpYUZpbGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAodmFzdFV0aWwuaXNWUEFJRChtZWRpYUZpbGVzW2ldKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59OyIsIi8vU21hbGwgc3Vic2V0IG9mIGFzeW5jXG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIGFzeW5jID0ge307XG5cbmFzeW5jLnNldEltbWVkaWF0ZSA9IGZ1bmN0aW9uIChmbikge1xuICBzZXRUaW1lb3V0KGZuLCAwKTtcbn07XG5cbmFzeW5jLml0ZXJhdG9yID0gZnVuY3Rpb24gKHRhc2tzKSB7XG4gIHZhciBtYWtlQ2FsbGJhY2sgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICB2YXIgZm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGFza3MubGVuZ3RoKSB7XG4gICAgICAgIHRhc2tzW2luZGV4XS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZuLm5leHQoKTtcbiAgICB9O1xuICAgIGZuLm5leHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKGluZGV4IDwgdGFza3MubGVuZ3RoIC0gMSkgPyBtYWtlQ2FsbGJhY2soaW5kZXggKyAxKSA6IG51bGw7XG4gICAgfTtcbiAgICByZXR1cm4gZm47XG4gIH07XG4gIHJldHVybiBtYWtlQ2FsbGJhY2soMCk7XG59O1xuXG5cbmFzeW5jLndhdGVyZmFsbCA9IGZ1bmN0aW9uICh0YXNrcywgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7IH07XG4gIGlmICghdXRpbGl0aWVzLmlzQXJyYXkodGFza3MpKSB7XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgdG8gd2F0ZXJmYWxsIG11c3QgYmUgYW4gYXJyYXkgb2YgZnVuY3Rpb25zJyk7XG4gICAgcmV0dXJuIGNhbGxiYWNrKGVycik7XG4gIH1cbiAgaWYgKCF0YXNrcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgfVxuICB2YXIgd3JhcEl0ZXJhdG9yID0gZnVuY3Rpb24gKGl0ZXJhdG9yKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgICB2YXIgbmV4dCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICBhcmdzLnB1c2god3JhcEl0ZXJhdG9yKG5leHQpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhcmdzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jLnNldEltbWVkaWF0ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaXRlcmF0b3IuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH07XG4gIHdyYXBJdGVyYXRvcihhc3luYy5pdGVyYXRvcih0YXNrcykpKCk7XG59O1xuXG5hc3luYy53aGVuID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgY2FsbGJhY2spIHtcbiAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJhc3luYy53aGVuIGVycm9yOiBtaXNzaW5nIGNhbGxiYWNrIGFyZ3VtZW50XCIpO1xuICB9XG5cbiAgdmFyIGlzQWxsb3dlZCA9IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNvbmRpdGlvbikgPyBjb25kaXRpb24gOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICEhY29uZGl0aW9uO1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFyZ3MgPSB1dGlsaXRpZXMuYXJyYXlMaWtlT2JqVG9BcnJheShhcmd1bWVudHMpO1xuICAgIHZhciBuZXh0ID0gYXJncy5wb3AoKTtcblxuICAgIGlmIChpc0FsbG93ZWQuYXBwbHkobnVsbCwgYXJncykpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIGFyZ3MudW5zaGlmdChudWxsKTtcbiAgICByZXR1cm4gbmV4dC5hcHBseShudWxsLCBhcmdzKTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYXN5bmM7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgZG9tID0ge307XG5cbmRvbS5pc1Zpc2libGUgPSBmdW5jdGlvbiBpc1Zpc2libGUoZWwpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICByZXR1cm4gc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbic7XG59O1xuXG5kb20uaXNIaWRkZW4gPSBmdW5jdGlvbiBpc0hpZGRlbihlbCkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gIHJldHVybiBzdHlsZS5kaXNwbGF5ID09PSAnbm9uZSc7XG59O1xuXG5kb20uaXNTaG93biA9IGZ1bmN0aW9uIGlzU2hvd24oZWwpIHtcbiAgcmV0dXJuICFkb20uaXNIaWRkZW4oZWwpO1xufTtcblxuZG9tLmhpZGUgPSBmdW5jdGlvbiBoaWRlKGVsKSB7XG4gIGVsLl9fcHJldl9zdHlsZV9kaXNwbGF5XyA9IGVsLnN0eWxlLmRpc3BsYXk7XG4gIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xuXG5kb20uc2hvdyA9IGZ1bmN0aW9uIHNob3coZWwpIHtcbiAgaWYgKGRvbS5pc0hpZGRlbihlbCkpIHtcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gZWwuX19wcmV2X3N0eWxlX2Rpc3BsYXlfO1xuICB9XG4gIGVsLl9fcHJldl9zdHlsZV9kaXNwbGF5XyA9IHVuZGVmaW5lZDtcbn07XG5cbmRvbS5oYXNDbGFzcyA9IGZ1bmN0aW9uIGhhc0NsYXNzKGVsLCBjc3NDbGFzcykge1xuICB2YXIgY2xhc3NlcywgaSwgbGVuO1xuXG4gIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcykpIHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNzc0NsYXNzKTtcbiAgICB9XG5cbiAgICBjbGFzc2VzID0gdXRpbGl0aWVzLmlzU3RyaW5nKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkgPyBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoL1xccysvKSA6IFtdO1xuICAgIGNzc0NsYXNzID0gKGNzc0NsYXNzIHx8ICcnKTtcblxuICAgIGZvciAoaSA9IDAsIGxlbiA9IGNsYXNzZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIGlmIChjbGFzc2VzW2ldID09PSBjc3NDbGFzcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZG9tLmFkZENsYXNzID0gZnVuY3Rpb24gKGVsLCBjc3NDbGFzcykge1xuICB2YXIgY2xhc3NlcztcblxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MpKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIH1cblxuICAgIGNsYXNzZXMgPSB1dGlsaXRpZXMuaXNTdHJpbmcoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpKSA/IGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zcGxpdCgvXFxzKy8pIDogW107XG4gICAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhjc3NDbGFzcykgJiYgdXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MucmVwbGFjZSgvXFxzKy8sICcnKSkpIHtcbiAgICAgIGNsYXNzZXMucHVzaChjc3NDbGFzcyk7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3Nlcy5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxufTtcblxuZG9tLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGVsLCBjc3NDbGFzcykge1xuICB2YXIgY2xhc3NlcztcblxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MpKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5yZW1vdmUoY3NzQ2xhc3MpO1xuICAgIH1cblxuICAgIGNsYXNzZXMgPSB1dGlsaXRpZXMuaXNTdHJpbmcoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpKSA/IGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5zcGxpdCgvXFxzKy8pIDogW107XG4gICAgdmFyIG5ld0NsYXNzZXMgPSBbXTtcbiAgICB2YXIgaSwgbGVuO1xuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoY3NzQ2xhc3MpICYmIHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzLnJlcGxhY2UoL1xccysvLCAnJykpKSB7XG5cbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGNsYXNzZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGNzc0NsYXNzICE9PSBjbGFzc2VzW2ldKSB7XG4gICAgICAgICAgbmV3Q2xhc3Nlcy5wdXNoKGNsYXNzZXNbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgbmV3Q2xhc3Nlcy5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxufTtcblxuZG9tLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KGVsKSl7XG4gICAgdXRpbGl0aWVzLmZvckVhY2goZWwsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKGUsIHR5cGUsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KHR5cGUpKXtcbiAgICB1dGlsaXRpZXMuZm9yRWFjaCh0eXBlLCBmdW5jdGlvbih0KSB7XG4gICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlbCwgdCwgaGFuZGxlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgfSBlbHNlIGlmIChlbC5hdHRhY2hFdmVudCkge1xuICAgIC8vIFdBUk5JTkchISEgdGhpcyBpcyBhIHZlcnkgbmFpdmUgaW1wbGVtZW50YXRpb24gIVxuICAgIC8vIHRoZSBldmVudCBvYmplY3QgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBoYW5kbGVyXG4gICAgLy8gd291bGQgbm90IGJlIHRoZXJlIGZvciBJRThcbiAgICAvLyB3ZSBzaG91bGQgdXNlIFwid2luZG93LmV2ZW50XCIgYW5kIHRoZW4gXCJldmVudC5zcmNFbGVtZW50XCJcbiAgICAvLyBpbnN0ZWFkIG9mIFwiZXZlbnQudGFyZ2V0XCJcbiAgICBlbC5hdHRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBoYW5kbGVyKTtcbiAgfVxufTtcblxuZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KGVsKSl7XG4gICAgdXRpbGl0aWVzLmZvckVhY2goZWwsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKGUsIHR5cGUsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmKHV0aWxpdGllcy5pc0FycmF5KHR5cGUpKXtcbiAgICB1dGlsaXRpZXMuZm9yRWFjaCh0eXBlLCBmdW5jdGlvbih0KSB7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdCwgaGFuZGxlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgfSBlbHNlIGlmIChlbC5kZXRhY2hFdmVudCkge1xuICAgIGVsLmRldGFjaEV2ZW50KFwib25cIiArIHR5cGUsIGhhbmRsZXIpO1xuICB9IGVsc2Uge1xuICAgIGVsW1wib25cIiArIHR5cGVdID0gbnVsbDtcbiAgfVxufTtcblxuZG9tLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVsLCBldmVudCkge1xuICBpZiAoZWwuZGlzcGF0Y2hFdmVudCkge1xuICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9IGVsc2Uge1xuICAgIGVsLmZpcmVFdmVudChcIm9uXCIgKyBldmVudC5ldmVudFR5cGUsIGV2ZW50KTtcbiAgfVxufTtcblxuZG9tLmlzRGVzY2VuZGFudCA9IGZ1bmN0aW9uIGlzRGVzY2VuZGFudChwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciBub2RlID0gY2hpbGQucGFyZW50Tm9kZTtcbiAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5kb20uZ2V0VGV4dENvbnRlbnQgPSBmdW5jdGlvbiBnZXRUZXh0Q29udGVudChlbCl7XG4gIHJldHVybiBlbC50ZXh0Q29udGVudCB8fCBlbC50ZXh0O1xufTtcblxuZG9tLnByZXBlbmRDaGlsZCA9IGZ1bmN0aW9uIHByZXBlbmRDaGlsZChwYXJlbnQsIGNoaWxkKSB7XG4gIGlmKGNoaWxkLnBhcmVudE5vZGUpe1xuICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICB9XG4gIHJldHVybiBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNoaWxkLCBwYXJlbnQuZmlyc3RDaGlsZCk7XG59O1xuXG5kb20ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKXtcbiAgaWYobm9kZSAmJiBub2RlLnBhcmVudE5vZGUpe1xuICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgfVxufTtcblxuZG9tLmlzRG9tRWxlbWVudCA9IGZ1bmN0aW9uIGlzRG9tRWxlbWVudChvKSB7XG4gIHJldHVybiBvIGluc3RhbmNlb2YgRWxlbWVudDtcbn07XG5cbmRvbS5jbGljayA9IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKSB7XG4gIGRvbS5hZGRFdmVudExpc3RlbmVyKGVsLCAnY2xpY2snLCBoYW5kbGVyKTtcbn07XG5cbmRvbS5vbmNlID0gZnVuY3Rpb24oZWwsIHR5cGUsIGhhbmRsZXIpIHtcbiAgZnVuY3Rpb24gaGFuZGxlcldyYXAoKSB7XG4gICAgaGFuZGxlci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIGRvbS5yZW1vdmVFdmVudExpc3RlbmVyKGVsLCB0eXBlLCBoYW5kbGVyV3JhcCk7XG4gIH1cblxuICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcldyYXApO1xufTtcblxuLy9Ob3RlOiB0aGVyZSBpcyBubyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gaVBhZCBzbyB3ZSBuZWVkIGEgZmFsbGJhY2tcbmRvbS5nZXREaW1lbnNpb24gPSBmdW5jdGlvbiBnZXREaW1lbnNpb24oZWxlbWVudCkge1xuICB2YXIgcmVjdDtcblxuICAvL09uIElFOSBhbmQgYmVsb3cgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGRvZXMgbm90IHdvcmsgY29uc2lzdGVudGx5XG4gIGlmKCF1dGlsaXRpZXMuaXNPbGRJRSgpICYmIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiByZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHVybFV0aWxzID0gcmVxdWlyZSgnLi91cmxVdGlscycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBIdHRwUmVxdWVzdEVycm9yKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gJ0h0dHBSZXF1ZXN0IEVycm9yOiAnICsgKG1lc3NhZ2UgfHwgJycpO1xufVxuSHR0cFJlcXVlc3RFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcbkh0dHBSZXF1ZXN0RXJyb3IucHJvdG90eXBlLm5hbWUgPSBcIkh0dHBSZXF1ZXN0IEVycm9yXCI7XG5cbmZ1bmN0aW9uIEh0dHBSZXF1ZXN0KGNyZWF0ZVhocikge1xuICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNyZWF0ZVhocikpIHtcbiAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcignTWlzc2luZyBYTUxIdHRwUmVxdWVzdCBmYWN0b3J5IG1ldGhvZCcpO1xuICB9XG5cbiAgdGhpcy5jcmVhdGVYaHIgPSBjcmVhdGVYaHI7XG59XG5cbkh0dHBSZXF1ZXN0LnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIHNhbml0eUNoZWNrKHVybCwgY2FsbGJhY2ssIG9wdGlvbnMpO1xuICB2YXIgdGltZW91dCwgdGltZW91dElkO1xuICB2YXIgeGhyID0gdGhpcy5jcmVhdGVYaHIoKTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRpbWVvdXQgPSB1dGlsaXRpZXMuaXNOdW1iZXIob3B0aW9ucy50aW1lb3V0KSA/IG9wdGlvbnMudGltZW91dCA6IDA7XG5cbiAgeGhyLm9wZW4obWV0aG9kLCB1cmxVdGlscy51cmxQYXJ0cyh1cmwpLmhyZWYsIHRydWUpO1xuXG4gIGlmIChvcHRpb25zLmhlYWRlcnMpIHtcbiAgICBzZXRIZWFkZXJzKHhociwgb3B0aW9ucy5oZWFkZXJzKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLndpdGhDcmVkZW50aWFscykge1xuICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICB9XG5cbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhdHVzVGV4dCwgcmVzcG9uc2UsIHN0YXR1cztcblxuICAgIC8qKlxuICAgICAqIFRoZSBvbmx5IHdheSB0byBkbyBhIHNlY3VyZSByZXF1ZXN0IG9uIElFOCBhbmQgSUU5IGlzIHdpdGggdGhlIFhEb21haW5SZXF1ZXN0IG9iamVjdC4gVW5mb3J0dW5hdGVseSwgbWljcm9zb2Z0IGlzXG4gICAgICogc28gbmljZSB0aGF0IGRlY2lkZWQgdGhhdCB0aGUgc3RhdHVzIHByb3BlcnR5IGFuZCB0aGUgJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgbWV0aG9kIHdoZXJlIG5vdCBuZWVkZWQgc28gd2UgaGF2ZSB0b1xuICAgICAqIGZha2UgdGhlbS4gSWYgdGhlIHJlcXVlc3QgZ2V0cyBkb25lIHdpdGggYW4gWERvbWFpblJlcXVlc3QgaW5zdGFuY2UsIHdlIHdpbGwgYXNzdW1lIHRoYXQgdGhlcmUgYXJlIG5vIGhlYWRlcnMgYW5kXG4gICAgICogdGhlIHN0YXR1cyB3aWxsIGFsd2F5cyBiZSAyMDAuIElmIHlvdSBkb24ndCBsaWtlIGl0LCBETyBOT1QgVVNFIEFOQ0lFTlQgQlJPV1NFUlMhISFcbiAgICAgKlxuICAgICAqIEZvciBtb3IgaW5mbyBnbyB0bzogaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9jYzI4ODA2MCh2PXZzLjg1KS5hc3B4XG4gICAgICovXG4gICAgaWYgKCF4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKSB7XG4gICAgICB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCF4aHIuc3RhdHVzKSB7XG4gICAgICB4aHIuc3RhdHVzID0gMjAwO1xuICAgIH1cblxuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHRpbWVvdXRJZCkpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgdGltZW91dElkID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dCB8fCAnJztcblxuICAgIC8vIHJlc3BvbnNlVGV4dCBpcyB0aGUgb2xkLXNjaG9vbCB3YXkgb2YgcmV0cmlldmluZyByZXNwb25zZSAoc3VwcG9ydGVkIGJ5IElFOCAmIDkpXG4gICAgLy8gcmVzcG9uc2UvcmVzcG9uc2VUeXBlIHByb3BlcnRpZXMgd2VyZSBpbnRyb2R1Y2VkIGluIFhIUiBMZXZlbDIgc3BlYyAoc3VwcG9ydGVkIGJ5IElFMTApXG4gICAgcmVzcG9uc2UgPSAoJ3Jlc3BvbnNlJyBpbiB4aHIpID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dDtcblxuICAgIC8vIG5vcm1hbGl6ZSBJRTkgYnVnIChodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xNDUwKVxuICAgIHN0YXR1cyA9IHhoci5zdGF0dXMgPT09IDEyMjMgPyAyMDQgOiB4aHIuc3RhdHVzO1xuXG4gICAgY2FsbGJhY2soXG4gICAgICBzdGF0dXMsXG4gICAgICByZXNwb25zZSxcbiAgICAgIHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSxcbiAgICAgIHN0YXR1c1RleHQpO1xuICB9O1xuXG4gIHhoci5vbmVycm9yID0gcmVxdWVzdEVycm9yO1xuICB4aHIub25hYm9ydCA9IHJlcXVlc3RFcnJvcjtcblxuICB4aHIuc2VuZCgpO1xuXG4gIGlmICh0aW1lb3V0ID4gMCkge1xuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgeGhyICYmIHhoci5hYm9ydCgpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2sodXJsLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGlmICghdXRpbGl0aWVzLmlzU3RyaW5nKHVybCkgfHwgdXRpbGl0aWVzLmlzRW1wdHlTdHJpbmcodXJsKSkge1xuICAgICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoXCJJbnZhbGlkIHVybCAnXCIgKyB1cmwgKyBcIidcIik7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgIHRocm93IG5ldyBIdHRwUmVxdWVzdEVycm9yKFwiSW52YWxpZCBoYW5kbGVyICdcIiArIGNhbGxiYWNrICsgXCInIGZvciB0aGUgaHR0cCByZXF1ZXN0XCIpO1xuICAgIH1cblxuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKG9wdGlvbnMpICYmICF1dGlsaXRpZXMuaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICAgIHRocm93IG5ldyBIdHRwUmVxdWVzdEVycm9yKFwiSW52YWxpZCBvcHRpb25zIG1hcCAnXCIgKyBvcHRpb25zICsgXCInXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEhlYWRlcnMoeGhyLCBoZWFkZXJzKSB7XG4gICAgdXRpbGl0aWVzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcXVlc3RFcnJvcigpIHtcbiAgICBjYWxsYmFjaygtMSwgbnVsbCwgbnVsbCwgJycpO1xuICB9XG59O1xuXG5IdHRwUmVxdWVzdC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHVybCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgdGhpcy5ydW4oJ0dFVCcsIHVybCwgcHJvY2Vzc1Jlc3BvbnNlLCBvcHRpb25zKTtcblxuICBmdW5jdGlvbiBwcm9jZXNzUmVzcG9uc2Uoc3RhdHVzLCByZXNwb25zZSwgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCkge1xuICAgIGlmIChpc1N1Y2Nlc3Moc3RhdHVzKSkge1xuICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBIdHRwUmVxdWVzdEVycm9yKHN0YXR1c1RleHQpLCByZXNwb25zZSwgc3RhdHVzLCBoZWFkZXJzU3RyaW5nLCBzdGF0dXNUZXh0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N1Y2Nlc3Moc3RhdHVzKSB7XG4gICAgcmV0dXJuIDIwMCA8PSBzdGF0dXMgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVYaHIoKSB7XG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgaWYgKCEoXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHIpKSB7XG4gICAgLy8gWERvbWFpblJlcXVlc3QgZm9yIElFLlxuICAgIHhociA9IG5ldyBYRG9tYWluUmVxdWVzdCgpO1xuICB9XG4gIHJldHVybiB4aHI7XG59XG5cbnZhciBodHRwID0gbmV3IEh0dHBSZXF1ZXN0KGNyZWF0ZVhocik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBodHRwOiBodHRwLFxuICBIdHRwUmVxdWVzdDogSHR0cFJlcXVlc3QsXG4gIEh0dHBSZXF1ZXN0RXJyb3I6IEh0dHBSZXF1ZXN0RXJyb3IsXG4gIGNyZWF0ZVhocjogY3JlYXRlWGhyXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZG9tID0gcmVxdWlyZSgnLi9kb20nKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIHBsYXllclV0aWxzID0ge307XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjYXB0dXJlcyB0aGUgcG9ydGlvbnMgb2YgcGxheWVyIHN0YXRlIHJlbGV2YW50IHRvXG4gKiB2aWRlbyBwbGF5YmFjay4gVGhlIHJlc3VsdCBvZiB0aGlzIGZ1bmN0aW9uIGNhbiBiZSBwYXNzZWQgdG9cbiAqIHJlc3RvcmVQbGF5ZXJTbmFwc2hvdCB3aXRoIGEgcGxheWVyIHRvIHJldHVybiB0aGUgcGxheWVyIHRvIHRoZSBzdGF0ZSBpdFxuICogd2FzIGluIHdoZW4gdGhpcyBmdW5jdGlvbiB3YXMgaW52b2tlZC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwbGF5ZXIgVGhlIHZpZGVvanMgcGxheWVyIG9iamVjdFxuICovXG5wbGF5ZXJVdGlscy5nZXRQbGF5ZXJTbmFwc2hvdCA9IGZ1bmN0aW9uIGdldFBsYXllclNuYXBzaG90KHBsYXllcikge1xuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuXG4gIHZhciBzbmFwc2hvdCA9IHtcbiAgICBlbmRlZDogcGxheWVyLmVuZGVkKCksXG4gICAgc3JjOiBwbGF5ZXIuY3VycmVudFNyYygpLFxuICAgIGN1cnJlbnRUaW1lOiBwbGF5ZXIuY3VycmVudFRpbWUoKSxcbiAgICB0eXBlOiBwbGF5ZXIuY3VycmVudFR5cGUoKSxcbiAgICBwbGF5aW5nOiAhcGxheWVyLnBhdXNlZCgpLFxuICAgIHN1cHByZXNzZWRUcmFja3M6IGdldFN1cHByZXNzZWRUcmFja3MocGxheWVyKVxuICB9O1xuXG4gIGlmICh0ZWNoKSB7XG4gICAgc25hcHNob3QubmF0aXZlUG9zdGVyID0gdGVjaC5wb3N0ZXI7XG4gICAgc25hcHNob3Quc3R5bGUgPSB0ZWNoLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgfVxuICByZXR1cm4gc25hcHNob3Q7XG5cbiAgLyoqKiogTG9jYWwgRnVuY3Rpb25zICoqKiovXG4gIGZ1bmN0aW9uIGdldFN1cHByZXNzZWRUcmFja3MocGxheWVyKSB7XG4gICAgdmFyIHRyYWNrcyA9IHBsYXllci5yZW1vdGVUZXh0VHJhY2tzID8gcGxheWVyLnJlbW90ZVRleHRUcmFja3MoKSA6IFtdO1xuXG4gICAgaWYgKHRyYWNrcyAmJiB1dGlsaXRpZXMuaXNBcnJheSh0cmFja3MudHJhY2tzXykpIHtcbiAgICAgIHRyYWNrcyA9IHRyYWNrcy50cmFja3NfO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tzKSkge1xuICAgICAgdHJhY2tzID0gW107XG4gICAgfVxuXG4gICAgdmFyIHN1cHByZXNzZWRUcmFja3MgPSBbXTtcbiAgICB0cmFja3MuZm9yRWFjaChmdW5jdGlvbiAodHJhY2spIHtcbiAgICAgIHN1cHByZXNzZWRUcmFja3MucHVzaCh7XG4gICAgICAgIHRyYWNrOiB0cmFjayxcbiAgICAgICAgbW9kZTogdHJhY2subW9kZVxuICAgICAgfSk7XG4gICAgICB0cmFjay5tb2RlID0gJ2Rpc2FibGVkJztcbiAgICB9KTtcblxuICAgIHJldHVybiBzdXBwcmVzc2VkVHJhY2tzO1xuICB9XG59O1xuXG4vKipcbiAqIEF0dGVtcHRzIHRvIG1vZGlmeSB0aGUgc3BlY2lmaWVkIHBsYXllciBzbyB0aGF0IGl0cyBzdGF0ZSBpcyBlcXVpdmFsZW50IHRvXG4gKiB0aGUgc3RhdGUgb2YgdGhlIHNuYXBzaG90LlxuICogQHBhcmFtIHtvYmplY3R9IHNuYXBzaG90IC0gdGhlIHBsYXllciBzdGF0ZSB0byBhcHBseVxuICovXG5wbGF5ZXJVdGlscy5yZXN0b3JlUGxheWVyU25hcHNob3QgPSBmdW5jdGlvbiByZXN0b3JlUGxheWVyU25hcHNob3QocGxheWVyLCBzbmFwc2hvdCkge1xuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuICB2YXIgYXR0ZW1wdHMgPSAyMDsgLy8gdGhlIG51bWJlciBvZiByZW1haW5pbmcgYXR0ZW1wdHMgdG8gcmVzdG9yZSB0aGUgc25hcHNob3RcblxuICBpZiAoc25hcHNob3QubmF0aXZlUG9zdGVyKSB7XG4gICAgdGVjaC5wb3N0ZXIgPSBzbmFwc2hvdC5uYXRpdmVQb3N0ZXI7XG4gIH1cblxuICBpZiAoJ3N0eWxlJyBpbiBzbmFwc2hvdCkge1xuICAgIC8vIG92ZXJ3cml0ZSBhbGwgY3NzIHN0eWxlIHByb3BlcnRpZXMgdG8gcmVzdG9yZSBzdGF0ZSBwcmVjaXNlbHlcbiAgICB0ZWNoLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBzbmFwc2hvdC5zdHlsZSB8fCAnJyk7XG4gIH1cblxuICBpZiAoaGFzU3JjQ2hhbmdlZChwbGF5ZXIsIHNuYXBzaG90KSkge1xuXG4gICAgLy8gb24gaW9zNywgZmlkZGxpbmcgd2l0aCB0ZXh0VHJhY2tzIHRvbyBlYXJseSB3aWxsIGNhdXNlIHNhZmFyaSB0byBjcmFzaFxuICAgIHBsYXllci5vbmUoJ2NvbnRlbnRsb2FkZWRtZXRhZGF0YScsIHJlc3RvcmVUcmFja3MpO1xuXG4gICAgcGxheWVyLm9uZSgnY2FucGxheScsIHRyeVRvUmVzdW1lKTtcbiAgICBlbnN1cmVDYW5wbGF5RXZ0R2V0c0ZpcmVkKCk7XG5cbiAgICAvLyBpZiB0aGUgc3JjIGNoYW5nZWQgZm9yIGFkIHBsYXliYWNrLCByZXNldCBpdFxuICAgIHBsYXllci5zcmMoe3NyYzogc25hcHNob3Quc3JjLCB0eXBlOiBzbmFwc2hvdC50eXBlfSk7XG5cbiAgICAvLyBzYWZhcmkgcmVxdWlyZXMgYSBjYWxsIHRvIGBsb2FkYCB0byBwaWNrIHVwIGEgY2hhbmdlZCBzb3VyY2VcbiAgICBwbGF5ZXIubG9hZCgpO1xuXG4gIH0gZWxzZSB7XG4gICAgcmVzdG9yZVRyYWNrcygpO1xuXG4gICAgaWYgKHNuYXBzaG90LnBsYXlpbmcpIHtcbiAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuXG4gIC8qKlxuICAgKiBTb21ldGltZXMgZmlyZWZveCBkb2VzIG5vdCB0cmlnZ2VyIHRoZSAnY2FucGxheScgZXZ0LlxuICAgKiBUaGlzIGNvZGUgZW5zdXJlIHRoYXQgaXQgYWx3YXlzIGdldHMgdHJpZ2dlcmVkIHRyaWdnZXJlZC5cbiAgICovXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbnBsYXlFdnRHZXRzRmlyZWQoKSB7XG4gICAgdmFyIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBwbGF5ZXIudHJpZ2dlcignY2FucGxheScpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgcGxheWVyLm9uZSgnY2FucGxheScsIGZ1bmN0aW9uKCl7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgcGxheWVyIG5lZWRzIHRvIGJlIHJlc3RvcmVkIHRvIGl0cyBzdGF0ZVxuICAgKiBiZWZvcmUgYWQgcGxheWJhY2sgYmVnYW4uIFdpdGggYSBjdXN0b20gYWQgZGlzcGxheSBvciBidXJuZWQtaW5cbiAgICogYWRzLCB0aGUgY29udGVudCBwbGF5ZXIgc3RhdGUgaGFzbid0IGJlZW4gbW9kaWZpZWQgYW5kIHNvIG5vXG4gICAqIHJlc3RvcmF0aW9uIGlzIHJlcXVpcmVkXG4gICAqL1xuICBmdW5jdGlvbiBoYXNTcmNDaGFuZ2VkKHBsYXllciwgc25hcHNob3QpIHtcbiAgICBpZiAocGxheWVyLnNyYygpKSB7XG4gICAgICByZXR1cm4gcGxheWVyLnNyYygpICE9PSBzbmFwc2hvdC5zcmM7XG4gICAgfVxuICAgIC8vIHRoZSBwbGF5ZXIgd2FzIGNvbmZpZ3VyZWQgdGhyb3VnaCBzb3VyY2UgZWxlbWVudCBjaGlsZHJlblxuICAgIHJldHVybiBwbGF5ZXIuY3VycmVudFNyYygpICE9PSBzbmFwc2hvdC5zcmM7XG4gIH1cblxuICBmdW5jdGlvbiByZXN0b3JlVHJhY2tzKCkge1xuICAgIHZhciBzdXBwcmVzc2VkVHJhY2tzID0gc25hcHNob3Quc3VwcHJlc3NlZFRyYWNrcztcbiAgICBzdXBwcmVzc2VkVHJhY2tzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNrU25hcHNob3QpIHtcbiAgICAgIHRyYWNrU25hcHNob3QudHJhY2subW9kZSA9IHRyYWNrU25hcHNob3QubW9kZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIHZpZGVvIGVsZW1lbnQgaGFzIGxvYWRlZCBlbm91Z2ggb2YgdGhlIHNuYXBzaG90IHNvdXJjZVxuICAgKiB0byBiZSByZWFkeSB0byBhcHBseSB0aGUgcmVzdCBvZiB0aGUgc3RhdGVcbiAgICovXG4gIGZ1bmN0aW9uIHRyeVRvUmVzdW1lKCkge1xuICAgIGlmIChwbGF5ZXJVdGlscy5pc1JlYWR5VG9SZXN1bWUodGVjaCkpIHtcbiAgICAgIC8vIGlmIHNvbWUgcGVyaW9kIG9mIHRoZSB2aWRlbyBpcyBzZWVrYWJsZSwgcmVzdW1lIHBsYXliYWNrXG4gICAgICByZXR1cm4gcmVzdW1lKCk7XG4gICAgfVxuXG4gICAgLy8gZGVsYXkgYSBiaXQgYW5kIHRoZW4gY2hlY2sgYWdhaW4gdW5sZXNzIHdlJ3JlIG91dCBvZiBhdHRlbXB0c1xuICAgIGlmIChhdHRlbXB0cy0tKSB7XG4gICAgICBzZXRUaW1lb3V0KHRyeVRvUmVzdW1lLCA1MCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmVzdW1lKCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB2aWRlb2pzLmxvZy53YXJuKCdGYWlsZWQgdG8gcmVzdW1lIHRoZSBjb250ZW50IGFmdGVyIGFuIGFkdmVydGlzZW1lbnQnLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSkoKTtcbiAgICB9XG5cblxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICBmdW5jdGlvbiByZXN1bWUoKSB7XG4gICAgICBwbGF5ZXIuY3VycmVudFRpbWUoc25hcHNob3QuY3VycmVudFRpbWUpO1xuXG4gICAgICBpZiAoc25hcHNob3QucGxheWluZykge1xuICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG59O1xuXG5wbGF5ZXJVdGlscy5pc1JlYWR5VG9SZXN1bWUgPSBmdW5jdGlvbiAodGVjaCkge1xuICBpZiAodGVjaC5yZWFkeVN0YXRlID4gMSkge1xuICAgIC8vIHNvbWUgYnJvd3NlcnMgYW5kIG1lZGlhIGFyZW4ndCBcInNlZWthYmxlXCIuXG4gICAgLy8gcmVhZHlTdGF0ZSBncmVhdGVyIHRoYW4gMSBhbGxvd3MgZm9yIHNlZWtpbmcgd2l0aG91dCBleGNlcHRpb25zXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodGVjaC5zZWVrYWJsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gaWYgdGhlIHRlY2ggZG9lc24ndCBleHBvc2UgdGhlIHNlZWthYmxlIHRpbWUgcmFuZ2VzLCB0cnkgdG9cbiAgICAvLyByZXN1bWUgcGxheWJhY2sgaW1tZWRpYXRlbHlcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0ZWNoLnNlZWthYmxlLmxlbmd0aCA+IDApIHtcbiAgICAvLyBpZiBzb21lIHBlcmlvZCBvZiB0aGUgdmlkZW8gaXMgc2Vla2FibGUsIHJlc3VtZSBwbGF5YmFja1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIHByZXBhcmVzIHRoZSBwbGF5ZXIgdG8gZGlzcGxheSBhZHMuXG4gKiBBZGRpbmcgY29udmVuaWVuY2UgZXZlbnRzIGxpa2UgdGhlICd2YXN0LmZpcnNQbGF5JyB0aGF0IGdldHMgZmlyZWQgd2hlbiB0aGUgdmlkZW8gaXMgZmlyc3QgcGxheWVkXG4gKiBhbmQgYWRzIHRoZSBibGFja1Bvc3RlciB0byB0aGUgcGxheWVyIHRvIHByZXZlbnQgY29udGVudCBmcm9tIGJlaW5nIGRpc3BsYXllZCBiZWZvcmUgdGhlIHByZXJvbGwgYWQuXG4gKlxuICogQHBhcmFtIHBsYXllclxuICovXG5wbGF5ZXJVdGlscy5wcmVwYXJlRm9yQWRzID0gZnVuY3Rpb24gKHBsYXllcikge1xuICB2YXIgYmxhY2tQb3N0ZXIgPSBwbGF5ZXIuYWRkQ2hpbGQoJ2JsYWNrUG9zdGVyJyk7XG4gIHZhciBfZmlyc3RQbGF5ID0gdHJ1ZTtcbiAgdmFyIHZvbHVtZVNuYXBzaG90O1xuXG5cbiAgbW9ua2V5UGF0Y2hQbGF5ZXJBcGkoKTtcblxuICBwbGF5ZXIub24oJ3BsYXknLCB0cnlUb1RyaWdnZXJGaXJzdFBsYXkpO1xuICBwbGF5ZXIub24oJ3Zhc3QucmVzZXQnLCByZXNldEZpcnN0UGxheSk7Ly9FdmVyeSB0aW1lIHdlIGNoYW5nZSB0aGUgc291cmNlcyB3ZSByZXNldCB0aGUgZmlyc3QgcGxheS5cbiAgcGxheWVyLm9uKCd2YXN0LmZpcnN0UGxheScsIHJlc3RvcmVDb250ZW50Vm9sdW1lKTtcbiAgcGxheWVyLm9uKCdlcnJvcicsIGhpZGVCbGFja1Bvc3Rlcik7Ly9JZiB0aGVyZSBpcyBhbiBlcnJvciBpbiB0aGUgcGxheWVyIHdlIHJlbW92ZSB0aGUgYmxhY2twb3N0ZXIgdG8gc2hvdyB0aGUgZXJyIG1zZ1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRTdGFydCcsIGhpZGVCbGFja1Bvc3Rlcik7XG4gIHBsYXllci5vbigndmFzdC5hZHNDYW5jZWwnLCBoaWRlQmxhY2tQb3N0ZXIpO1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRFcnJvcicsIGhpZGVCbGFja1Bvc3Rlcik7XG4gIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgYWRkU3R5bGVzKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkRW5kJywgcmVtb3ZlU3R5bGVzKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIHJlbW92ZVN0eWxlcyk7XG5cbiAgLyoqKiBMb2NhbCBGdW5jdGlvbnMgKioqL1xuXG4gIC8qKlxuICAgV2hhdCB0aGlzIGZ1bmN0aW9uIGRvZXMgaXMgdWdseSBhbmQgaG9ycmlibGUgYW5kIEkgc2hvdWxkIHRoaW5rIHR3aWNlIGJlZm9yZSBjYWxsaW5nIG15c2VsZiBhIGdvb2QgZGV2ZWxvcGVyLiBXaXRoIHRoYXQgc2FpZCxcbiAgIGl0IGlzIHRoZSBiZXN0IHNvbHV0aW9uIEkgY291bGQgZmluZCB0byBtdXRlIHRoZSB2aWRlbyB1bnRpbCB0aGUgJ3BsYXknIGV2ZW50IGhhcHBlbnMgKG9uIG1vYmlsZSBkZXZpY2VzKSBhbmQgdGhlIHBsdWdpbiBjYW4gZGVjaWRlIHdoZXRoZXJcbiAgIHRvIHBsYXkgdGhlIGFkIG9yIG5vdC5cblxuICAgV2UgYWxzbyBuZWVkIHRoaXMgbW9ua2V5cGF0Y2ggdG8gYmUgYWJsZSB0byBwYXVzZSBhbmQgcmVzdW1lIGFuIGFkIHVzaW5nIHRoZSBwbGF5ZXIncyBBUElcblxuICAgSWYgeW91IGhhdmUgYSBiZXR0ZXIgc29sdXRpb24gcGxlYXNlIGRvIHRlbGwgbWUuXG4gICAqL1xuICBmdW5jdGlvbiBtb25rZXlQYXRjaFBsYXllckFwaSgpIHtcblxuICAgIC8qKlxuICAgICAqIE1vbmtleSBwYXRjaCBuZWVkZWQgdG8gaGFuZGxlIGZpcnN0UGxheSBhbmQgcmVzdW1lIG9mIHBsYXlpbmcgYWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbE9yaWdQbGF5IG5lY2Vzc2FyeSBmbGFnIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCB3aGVuIHlvdSBhcmUgcmVzdG9yaW5nIGEgVkFTVCBhZC5cbiAgICAgKiBAcmV0dXJucyB7cGxheWVyfVxuICAgICAqL1xuICAgIHZhciBvcmlnUGxheSA9IHBsYXllci5wbGF5O1xuICAgIHBsYXllci5wbGF5ID0gZnVuY3Rpb24gKGNhbGxPcmlnUGxheSkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICBpZiAoaXNGaXJzdFBsYXkoKSkge1xuICAgICAgICBmaXJzdFBsYXkoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VtZShjYWxsT3JpZ1BsYXkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgICAgZnVuY3Rpb24gZmlyc3RQbGF5KCkge1xuICAgICAgICBpZiAoIXV0aWxpdGllcy5pc0lQaG9uZSgpKSB7XG4gICAgICAgICAgdm9sdW1lU25hcHNob3QgPSBzYXZlVm9sdW1lU25hcHNob3QoKTtcbiAgICAgICAgICBwbGF5ZXIubXV0ZWQodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBvcmlnUGxheS5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiByZXN1bWUoY2FsbE9yaWdQbGF5KSB7XG4gICAgICAgIGlmIChpc0FkUGxheWluZygpICYmICFjYWxsT3JpZ1BsYXkpIHtcbiAgICAgICAgICBwbGF5ZXIudmFzdC5hZFVuaXQucmVzdW1lQWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcmlnUGxheS5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogTmVlZGVkIG1vbmtleSBwYXRjaCB0byBoYW5kbGUgcGF1c2Ugb2YgcGxheWluZyBhZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsT3JpZ1BsYXkgbmVjZXNzYXJ5IGZsYWcgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wIHdoZW4geW91IGFyZSBwYXVzaW5nIGEgVkFTVCBhZC5cbiAgICAgKiBAcmV0dXJucyB7cGxheWVyfVxuICAgICAqL1xuICAgIHZhciBvcmlnUGF1c2UgPSBwbGF5ZXIucGF1c2U7XG4gICAgcGxheWVyLnBhdXNlID0gZnVuY3Rpb24gKGNhbGxPcmlnUGF1c2UpIHtcbiAgICAgIGlmIChpc0FkUGxheWluZygpICYmICFjYWxsT3JpZ1BhdXNlKSB7XG4gICAgICAgIHBsYXllci52YXN0LmFkVW5pdC5wYXVzZUFkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcmlnUGF1c2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIE5lZWRlZCBtb25rZXkgcGF0Y2ggdG8gaGFuZGxlIHBhdXNlZCBzdGF0ZSBvZiB0aGUgcGxheWVyIHdoZW4gYWRzIGFyZSBwbGF5aW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxPcmlnUGxheSBuZWNlc3NhcnkgZmxhZyB0byBwcmV2ZW50IGluZmluaXRlIGxvb3Agd2hlbiB5b3UgYXJlIHBhdXNpbmcgYSBWQVNUIGFkLlxuICAgICAqIEByZXR1cm5zIHtwbGF5ZXJ9XG4gICAgICovXG4gICAgdmFyIG9yaWdQYXVzZWQgPSBwbGF5ZXIucGF1c2VkO1xuICAgIHBsYXllci5wYXVzZWQgPSBmdW5jdGlvbiAoY2FsbE9yaWdQYXVzZWQpIHtcbiAgICAgIGlmIChpc0FkUGxheWluZygpICYmICFjYWxsT3JpZ1BhdXNlZCkge1xuICAgICAgICByZXR1cm4gcGxheWVyLnZhc3QuYWRVbml0LmlzUGF1c2VkKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3JpZ1BhdXNlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBpc0FkUGxheWluZygpIHtcbiAgICByZXR1cm4gcGxheWVyLnZhc3QgJiYgcGxheWVyLnZhc3QuYWRVbml0O1xuICB9XG5cbiAgZnVuY3Rpb24gdHJ5VG9UcmlnZ2VyRmlyc3RQbGF5KCkge1xuICAgIGlmIChpc0ZpcnN0UGxheSgpKSB7XG4gICAgICBfZmlyc3RQbGF5ID0gZmFsc2U7XG4gICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5maXJzdFBsYXknKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldEZpcnN0UGxheSgpIHtcbiAgICBfZmlyc3RQbGF5ID0gdHJ1ZTtcbiAgICBibGFja1Bvc3Rlci5zaG93KCk7XG4gICAgcmVzdG9yZUNvbnRlbnRWb2x1bWUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzRmlyc3RQbGF5KCkge1xuICAgIHJldHVybiBfZmlyc3RQbGF5O1xuICB9XG5cbiAgZnVuY3Rpb24gc2F2ZVZvbHVtZVNuYXBzaG90KCkge1xuICAgIHJldHVybiB7XG4gICAgICBtdXRlZDogcGxheWVyLm11dGVkKCksXG4gICAgICB2b2x1bWU6IHBsYXllci52b2x1bWUoKVxuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiByZXN0b3JlQ29udGVudFZvbHVtZSgpIHtcbiAgICBpZiAodm9sdW1lU25hcHNob3QpIHtcbiAgICAgIHBsYXllci5jdXJyZW50VGltZSgwKTtcbiAgICAgIHJlc3RvcmVWb2x1bWVTbmFwc2hvdCh2b2x1bWVTbmFwc2hvdCk7XG4gICAgICB2b2x1bWVTbmFwc2hvdCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzdG9yZVZvbHVtZVNuYXBzaG90KHNuYXBzaG90KSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc09iamVjdChzbmFwc2hvdCkpIHtcbiAgICAgIHBsYXllci52b2x1bWUoc25hcHNob3Qudm9sdW1lKTtcbiAgICAgIHBsYXllci5tdXRlZChzbmFwc2hvdC5tdXRlZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUJsYWNrUG9zdGVyKCkge1xuICAgIGlmICghZG9tLmhhc0NsYXNzKGJsYWNrUG9zdGVyLmVsKCksICd2anMtaGlkZGVuJykpIHtcbiAgICAgIGJsYWNrUG9zdGVyLmhpZGUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTdHlsZXMoKSB7XG4gICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLWFkLXBsYXlpbmcnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVN0eWxlcygpIHtcbiAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksICd2anMtYWQtcGxheWluZycpO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgcG9zdGVyIGF0dHJpYnV0ZSBmcm9tIHRoZSB2aWRlbyBlbGVtZW50IHRlY2gsIGlmIHByZXNlbnQuIFdoZW5cbiAqIHJldXNpbmcgYSB2aWRlbyBlbGVtZW50IGZvciBtdWx0aXBsZSB2aWRlb3MsIHRoZSBwb3N0ZXIgaW1hZ2Ugd2lsbCBicmllZmx5XG4gKiByZWFwcGVhciB3aGlsZSB0aGUgbmV3IHNvdXJjZSBsb2Fkcy4gUmVtb3ZpbmcgdGhlIGF0dHJpYnV0ZSBhaGVhZCBvZiB0aW1lXG4gKiBwcmV2ZW50cyB0aGUgcG9zdGVyIGZyb20gc2hvd2luZyB1cCBiZXR3ZWVuIHZpZGVvcy5cbiAqIEBwYXJhbSB7b2JqZWN0fSBwbGF5ZXIgVGhlIHZpZGVvanMgcGxheWVyIG9iamVjdFxuICovXG5wbGF5ZXJVdGlscy5yZW1vdmVOYXRpdmVQb3N0ZXIgPSBmdW5jdGlvbiAocGxheWVyKSB7XG4gIHZhciB0ZWNoID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XG4gIGlmICh0ZWNoKSB7XG4gICAgdGVjaC5yZW1vdmVBdHRyaWJ1dGUoJ3Bvc3RlcicpO1xuICB9XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBsaXN0ZW4gdG8gbWFueSBldmVudHMgdW50aWwgb25lIG9mIHRoZW0gZ2V0cyBmaXJlZCwgdGhlbiB3ZVxuICogZXhlY3V0ZSB0aGUgaGFuZGxlciBhbmQgdW5zdWJzY3JpYmUgYWxsIHRoZSBldmVudCBsaXN0ZW5lcnM7XG4gKlxuICogQHBhcmFtIHBsYXllciBzcGVjaWZpYyBwbGF5ZXIgZnJvbSB3aGVyZSB0byBsaXN0ZW4gZm9yIHRoZSBldmVudHNcbiAqIEBwYXJhbSBldmVudHMgYXJyYXkgb2YgZXZlbnRzXG4gKiBAcGFyYW0gaGFuZGxlciBmdW5jdGlvbiB0byBleGVjdXRlIG9uY2Ugb25lIG9mIHRoZSBldmVudHMgZmlyZXNcbiAqL1xucGxheWVyVXRpbHMub25jZSA9IGZ1bmN0aW9uIG9uY2UocGxheWVyLCBldmVudHMsIGhhbmRsZXIpIHtcbiAgZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgaGFuZGxlci5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuXG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBwbGF5ZXIub2ZmKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfSk7XG4gIH1cblxuICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBwbGF5ZXIub24oZXZlbnQsIGxpc3RlbmVyKTtcbiAgfSk7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gcGxheWVyVXRpbHM7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbi8qKlxuICpcbiAqIElNUE9SVEFOVCBOT1RFOiBUaGlzIGZ1bmN0aW9uIGNvbWVzIGZyb20gYW5ndWxhckpzIGFuZCB3YXMgb3JpZ2luYWxseSBjYWxsZWQgdXJsUmVzb2x2ZVxuICogICAgICAgICAgICAgICAgIHlvdSBjYW4gdGFrZSBhIGxvb2sgYXQgdGhlIG9yaWdpbmFsIGNvZGUgaGVyZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvbWFzdGVyL3NyYy9uZy91cmxVdGlscy5qc1xuICpcbiAqIEltcGxlbWVudGF0aW9uIE5vdGVzIGZvciBub24tSUUgYnJvd3NlcnNcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEFzc2lnbmluZyBhIFVSTCB0byB0aGUgaHJlZiBwcm9wZXJ0eSBvZiBhbiBhbmNob3IgRE9NIG5vZGUsIGV2ZW4gb25lIGF0dGFjaGVkIHRvIHRoZSBET00sXG4gKiByZXN1bHRzIGJvdGggaW4gdGhlIG5vcm1hbGl6aW5nIGFuZCBwYXJzaW5nIG9mIHRoZSBVUkwuICBOb3JtYWxpemluZyBtZWFucyB0aGF0IGEgcmVsYXRpdmVcbiAqIFVSTCB3aWxsIGJlIHJlc29sdmVkIGludG8gYW4gYWJzb2x1dGUgVVJMIGluIHRoZSBjb250ZXh0IG9mIHRoZSBhcHBsaWNhdGlvbiBkb2N1bWVudC5cbiAqIFBhcnNpbmcgbWVhbnMgdGhhdCB0aGUgYW5jaG9yIG5vZGUncyBob3N0LCBob3N0bmFtZSwgcHJvdG9jb2wsIHBvcnQsIHBhdGhuYW1lIGFuZCByZWxhdGVkXG4gKiBwcm9wZXJ0aWVzIGFyZSBhbGwgcG9wdWxhdGVkIHRvIHJlZmxlY3QgdGhlIG5vcm1hbGl6ZWQgVVJMLiAgVGhpcyBhcHByb2FjaCBoYXMgd2lkZVxuICogY29tcGF0aWJpbGl0eSAtIFNhZmFyaSAxKywgTW96aWxsYSAxKywgT3BlcmEgNyssZSBldGMuICBTZWVcbiAqIGh0dHA6Ly93d3cuYXB0YW5hLmNvbS9yZWZlcmVuY2UvaHRtbC9hcGkvSFRNTEFuY2hvckVsZW1lbnQuaHRtbFxuICpcbiAqIEltcGxlbWVudGF0aW9uIE5vdGVzIGZvciBJRVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBJRSA+PSA4IGFuZCA8PSAxMCBub3JtYWxpemVzIHRoZSBVUkwgd2hlbiBhc3NpZ25lZCB0byB0aGUgYW5jaG9yIG5vZGUgc2ltaWxhciB0byB0aGUgb3RoZXJcbiAqIGJyb3dzZXJzLiAgSG93ZXZlciwgdGhlIHBhcnNlZCBjb21wb25lbnRzIHdpbGwgbm90IGJlIHNldCBpZiB0aGUgVVJMIGFzc2lnbmVkIGRpZCBub3Qgc3BlY2lmeVxuICogdGhlbS4gIChlLmcuIGlmIHlvdSBhc3NpZ24gYS5ocmVmID0gXCJmb29cIiwgdGhlbiBhLnByb3RvY29sLCBhLmhvc3QsIGV0Yy4gd2lsbCBiZSBlbXB0eS4pICBXZVxuICogd29yayBhcm91bmQgdGhhdCBieSBwZXJmb3JtaW5nIHRoZSBwYXJzaW5nIGluIGEgMm5kIHN0ZXAgYnkgdGFraW5nIGEgcHJldmlvdXNseSBub3JtYWxpemVkXG4gKiBVUkwgKGUuZy4gYnkgYXNzaWduaW5nIHRvIGEuaHJlZikgYW5kIGFzc2lnbmluZyBpdCBhLmhyZWYgYWdhaW4uICBUaGlzIGNvcnJlY3RseSBwb3B1bGF0ZXMgdGhlXG4gKiBwcm9wZXJ0aWVzIHN1Y2ggYXMgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0LCBldGMuXG4gKlxuICogSUU3IGRvZXMgbm90IG5vcm1hbGl6ZSB0aGUgVVJMIHdoZW4gYXNzaWduZWQgdG8gYW4gYW5jaG9yIG5vZGUuICAoQXBwYXJlbnRseSwgaXQgZG9lcywgaWYgb25lXG4gKiB1c2VzIHRoZSBpbm5lciBIVE1MIGFwcHJvYWNoIHRvIGFzc2lnbiB0aGUgVVJMIGFzIHBhcnQgb2YgYW4gSFRNTCBzbmlwcGV0IC1cbiAqIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ3MjcyOSkgIEhvd2V2ZXIsIHNldHRpbmcgaW1nW3NyY10gZG9lcyBub3JtYWxpemUgdGhlIFVSTC5cbiAqIFVuZm9ydHVuYXRlbHksIHNldHRpbmcgaW1nW3NyY10gdG8gc29tZXRoaW5nIGxpa2UgXCJqYXZhc2NyaXB0OmZvb1wiIG9uIElFIHRocm93cyBhbiBleGNlcHRpb24uXG4gKiBTaW5jZSB0aGUgcHJpbWFyeSB1c2FnZSBmb3Igbm9ybWFsaXppbmcgVVJMcyBpcyB0byBzYW5pdGl6ZSBzdWNoIFVSTHMsIHdlIGNhbid0IHVzZSB0aGF0XG4gKiBtZXRob2QgYW5kIElFIDwgOCBpcyB1bnN1cHBvcnRlZC5cbiAqXG4gKiBSZWZlcmVuY2VzOlxuICogICBodHRwOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IVE1MQW5jaG9yRWxlbWVudFxuICogICBodHRwOi8vd3d3LmFwdGFuYS5jb20vcmVmZXJlbmNlL2h0bWwvYXBpL0hUTUxBbmNob3JFbGVtZW50Lmh0bWxcbiAqICAgaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvcHVsbC8yOTAyXG4gKiAgIGh0dHA6Ly9qYW1lcy5wYWRvbHNleS5jb20vamF2YXNjcmlwdC9wYXJzaW5nLXVybHMtd2l0aC10aGUtZG9tL1xuICpcbiAqIEBraW5kIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkLlxuICogQGRlc2NyaXB0aW9uIE5vcm1hbGl6ZXMgYW5kIHBhcnNlcyBhIFVSTC5cbiAqIEByZXR1cm5zIHtvYmplY3R9IFJldHVybnMgdGhlIG5vcm1hbGl6ZWQgVVJMIGFzIGEgZGljdGlvbmFyeS5cbiAqXG4gKiAgIHwgbWVtYmVyIG5hbWUgICB8IERlc2NyaXB0aW9uICAgIHxcbiAqICAgfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tfFxuICogICB8IGhyZWYgICAgICAgICAgfCBBIG5vcm1hbGl6ZWQgdmVyc2lvbiBvZiB0aGUgcHJvdmlkZWQgVVJMIGlmIGl0IHdhcyBub3QgYW4gYWJzb2x1dGUgVVJMIHxcbiAqICAgfCBwcm90b2NvbCAgICAgIHwgVGhlIHByb3RvY29sIGluY2x1ZGluZyB0aGUgdHJhaWxpbmcgY29sb24gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgIHwgaG9zdCAgICAgICAgICB8IFRoZSBob3N0IGFuZCBwb3J0IChpZiB0aGUgcG9ydCBpcyBub24tZGVmYXVsdCkgb2YgdGhlIG5vcm1hbGl6ZWRVcmwgICAgfFxuICogICB8IHNlYXJjaCAgICAgICAgfCBUaGUgc2VhcmNoIHBhcmFtcywgbWludXMgdGhlIHF1ZXN0aW9uIG1hcmsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqICAgfCBoYXNoICAgICAgICAgIHwgVGhlIGhhc2ggc3RyaW5nLCBtaW51cyB0aGUgaGFzaCBzeW1ib2xcbiAqICAgfCBob3N0bmFtZSAgICAgIHwgVGhlIGhvc3RuYW1lXG4gKiAgIHwgcG9ydCAgICAgICAgICB8IFRoZSBwb3J0LCB3aXRob3V0IFwiOlwiXG4gKiAgIHwgcGF0aG5hbWUgICAgICB8IFRoZSBwYXRobmFtZSwgYmVnaW5uaW5nIHdpdGggXCIvXCJcbiAqXG4gKi9cblxudmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4vKipcbiAqIGRvY3VtZW50TW9kZSBpcyBhbiBJRS1vbmx5IHByb3BlcnR5XG4gKiBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvY2MxOTY5ODgodj12cy44NSkuYXNweFxuICovXG52YXIgbXNpZSA9IGRvY3VtZW50LmRvY3VtZW50TW9kZTtcblxuZnVuY3Rpb24gdXJsUGFydHModXJsKSB7XG4gIHZhciBocmVmID0gdXJsO1xuXG4gIGlmIChtc2llKSB7XG4gICAgLy8gTm9ybWFsaXplIGJlZm9yZSBwYXJzZS4gIFJlZmVyIEltcGxlbWVudGF0aW9uIE5vdGVzIG9uIHdoeSB0aGlzIGlzXG4gICAgLy8gZG9uZSBpbiB0d28gc3RlcHMgb24gSUUuXG4gICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBocmVmKTtcbiAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgfVxuXG4gIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgcmV0dXJuIHtcbiAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgcG9ydDogdXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcodXJsUGFyc2luZ05vZGUucG9ydCk/IHVybFBhcnNpbmdOb2RlLnBvcnQ6IDgwLFxuICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpXG4gICAgICA/IHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICA6ICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gIH07XG59XG5cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYSBxdWVyeSBzdHJpbmcgKHNlYXJjaCBwYXJ0IG9mIGEgdXJsKSBhbmQgcmV0dXJucyBhIGRpY3Rpb25hcnkgd2l0aFxuICogdGhlIGRpZmZlcmVudCBrZXkgdmFsdWUgcGFpcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBxcyBxdWVyeVN0cmluZ1xuICovXG5mdW5jdGlvbiBxdWVyeVN0cmluZ1RvT2JqKHFzLCBjb25kKSB7XG4gIHZhciBwYWlycywgcXNPYmo7XG5cbiAgY29uZCA9IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNvbmQpPyBjb25kIDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgcXMgPSBxcy50cmltKCkucmVwbGFjZSgvXlxcPy8sICcnKTtcbiAgcGFpcnMgPSBxcy5zcGxpdCgnJicpO1xuICBxc09iaiA9IHt9O1xuXG4gIHV0aWxpdGllcy5mb3JFYWNoKHBhaXJzLCBmdW5jdGlvbiAocGFpcikge1xuICAgIHZhciBrZXlWYWx1ZSwga2V5LCB2YWx1ZTtcbiAgICBpZiAocGFpciAhPT0gJycpIHtcbiAgICAgIGtleVZhbHVlID0gcGFpci5zcGxpdCgnPScpO1xuICAgICAga2V5ID0ga2V5VmFsdWVbMF07XG4gICAgICB2YWx1ZSA9IGtleVZhbHVlWzFdO1xuICAgICAgaWYoY29uZChrZXksIHZhbHVlKSl7XG4gICAgICAgIHFzT2JqW2tleV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBxc09iajtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW4gb2JqZWN0IGFuZCBzZXJpYWxpemVzIGl0IGludG8gYSBxdWVyeSBzdHJpbmcgd2l0aG91dCB0aGUgbGVhZGluZyAnPydcbiAqIEBwYXJhbSBvYmpcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG9ialRvUXVlcnlTdHJpbmcob2JqKSB7XG4gIHZhciBwYWlycyA9IFtdO1xuICB1dGlsaXRpZXMuZm9yRWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgcGFpcnMucHVzaChrZXkgKyAnPScgKyB2YWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gcGFpcnMuam9pbignJicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgdXJsUGFydHM6IHVybFBhcnRzLFxuICBxdWVyeVN0cmluZ1RvT2JqOiBxdWVyeVN0cmluZ1RvT2JqLFxuICBvYmpUb1F1ZXJ5U3RyaW5nOiBvYmpUb1F1ZXJ5U3RyaW5nXG59O1xuIiwiLypqc2hpbnQgdW51c2VkOmZhbHNlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIE5PREVfVFlQRV9FTEVNRU5UID0gMTtcbnZhciBTTkFLRV9DQVNFX1JFR0VYUCA9IC9bQS1aXS9nO1xudmFyIEVNQUlMX1JFR0VYUCA9IC9eW2EtejAtOSEjJCUmJyorXFwvPT9eX2B7fH1+Li1dK0BbYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPyhcXC5bYS16MC05XShbYS16MC05LV0qW2EtejAtOV0pPykrJC9pO1xuLypqc2xpbnQgbWF4bGVuOiA1MDAgKi9cbnZhciBJU084MDg2X1JFR0VYUCA9IC9eKFtcXCstXT9cXGR7NH0oPyFcXGR7Mn1cXGIpKSgoLT8pKCgwWzEtOV18MVswLTJdKShcXDMoWzEyXVxcZHwwWzEtOV18M1swMV0pKT98VyhbMC00XVxcZHw1WzAtMl0pKC0/WzEtN10pP3woMDBbMS05XXwwWzEtOV1cXGR8WzEyXVxcZHsyfXwzKFswLTVdXFxkfDZbMS02XSkpKShbVFxcc10oKChbMDFdXFxkfDJbMC0zXSkoKDo/KVswLTVdXFxkKT98MjRcXDo/MDApKFtcXC4sXVxcZCsoPyE6KSk/KT8oXFwxN1swLTVdXFxkKFtcXC4sXVxcZCspPyk/KFt6Wl18KFtcXCstXSkoWzAxXVxcZHwyWzAtM10pOj8oWzAtNV1cXGQpPyk/KT8pPyQvO1xuXG5cbmZ1bmN0aW9uIG5vb3AoKXsgfVxuXG5mdW5jdGlvbiBpc051bGwobykge1xuICByZXR1cm4gbyA9PT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKG8pe1xuICByZXR1cm4gbyAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZChvKXtcbiAgcmV0dXJuIG8gPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbihzdHIpe1xuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIobnVtKXtcbiAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgcmV0dXJuIHV0aWxpdGllcy5pc09iamVjdChvYmopICYmIG9iai53aW5kb3cgPT09IG9iajtcbn1cblxuZnVuY3Rpb24gaXNBcnJheShhcnJheSl7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoIGFycmF5ICkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKG9iaikge1xuICBpZiAob2JqID09PSBudWxsIHx8IHV0aWxpdGllcy5pc1dpbmRvdyhvYmopIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKG9iaikgfHwgdXRpbGl0aWVzLmlzVW5kZWZpbmVkKG9iaikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gb2JqLmxlbmd0aDtcblxuICBpZiAob2JqLm5vZGVUeXBlID09PSBOT0RFX1RZUEVfRUxFTUVOVCAmJiBsZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiB1dGlsaXRpZXMuaXNTdHJpbmcob2JqKSB8fCB1dGlsaXRpZXMuaXNBcnJheShvYmopIHx8IGxlbmd0aCA9PT0gMCB8fFxuICAgIHR5cGVvZiBsZW5ndGggPT09ICdudW1iZXInICYmIGxlbmd0aCA+IDAgJiYgKGxlbmd0aCAtIDEpIGluIG9iajtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcoc3RyKXtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5U3RyaW5nKHN0cikge1xuICByZXR1cm4gdXRpbGl0aWVzLmlzU3RyaW5nKHN0cikgJiYgc3RyLmxlbmd0aCA9PT0gMDtcbn1cblxuZnVuY3Rpb24gaXNOb3RFbXB0eVN0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHV0aWxpdGllcy5pc1N0cmluZyhzdHIpICYmIHN0ci5sZW5ndGggIT09IDA7XG59XG5cbmZ1bmN0aW9uIGFycmF5TGlrZU9ialRvQXJyYXkoYXJncykge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJncyk7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBpdGVyYXRvciwgY29udGV4dCkge1xuICB2YXIga2V5LCBsZW5ndGg7XG4gIGlmIChvYmopIHtcbiAgICBpZiAoaXNGdW5jdGlvbihvYmopKSB7XG4gICAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgICAgLy8gTmVlZCB0byBjaGVjayBpZiBoYXNPd25Qcm9wZXJ0eSBleGlzdHMsXG4gICAgICAgIC8vIGFzIG9uIElFOCB0aGUgcmVzdWx0IG9mIHF1ZXJ5U2VsZWN0b3JBbGwgaXMgYW4gb2JqZWN0IHdpdGhvdXQgYSBoYXNPd25Qcm9wZXJ0eSBmdW5jdGlvblxuICAgICAgICBpZiAoa2V5ICE9PSAncHJvdG90eXBlJyAmJiBrZXkgIT09ICdsZW5ndGgnICYmIGtleSAhPT0gJ25hbWUnICYmICghb2JqLmhhc093blByb3BlcnR5IHx8IG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSkge1xuICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICB2YXIgaXNQcmltaXRpdmUgPSB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JztcbiAgICAgIGZvciAoa2V5ID0gMCwgbGVuZ3RoID0gb2JqLmxlbmd0aDsga2V5IDwgbGVuZ3RoOyBrZXkrKykge1xuICAgICAgICBpZiAoaXNQcmltaXRpdmUgfHwga2V5IGluIG9iaikge1xuICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob2JqLmZvckVhY2ggJiYgb2JqLmZvckVhY2ggIT09IGZvckVhY2gpIHtcbiAgICAgIG9iai5mb3JFYWNoKGl0ZXJhdG9yLCBjb250ZXh0LCBvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgaXRlcmF0b3IuY2FsbChjb250ZXh0LCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHNuYWtlX2Nhc2UobmFtZSwgc2VwYXJhdG9yKSB7XG4gIHNlcGFyYXRvciA9IHNlcGFyYXRvciB8fCAnXyc7XG4gIHJldHVybiBuYW1lLnJlcGxhY2UoU05BS0VfQ0FTRV9SRUdFWFAsIGZ1bmN0aW9uKGxldHRlciwgcG9zKSB7XG4gICAgcmV0dXJuIChwb3MgPyBzZXBhcmF0b3IgOiAnJykgKyBsZXR0ZXIudG9Mb3dlckNhc2UoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbWFpbChlbWFpbCl7XG4gIGlmKCF1dGlsaXRpZXMuaXNTdHJpbmcoZW1haWwpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gRU1BSUxfUkVHRVhQLnRlc3QoZW1haWwudHJpbSgpKTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kIChvYmopIHtcbiAgdmFyIGFyZywgaSwgaztcbiAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGFyZyA9IGFyZ3VtZW50c1tpXTtcbiAgICBmb3IgKGsgaW4gYXJnKSB7XG4gICAgICBpZiAoYXJnLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgIGlmKGlzT2JqZWN0KG9ialtrXSkgJiYgIWlzTnVsbChvYmpba10pICYmIGlzT2JqZWN0KGFyZ1trXSkpe1xuICAgICAgICAgIG9ialtrXSA9IGV4dGVuZCh7fSwgb2JqW2tdLCBhcmdba10pO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgb2JqW2tdID0gYXJnW2tdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUocyl7XG4gIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gZGVjYXBpdGFsaXplKHMpIHtcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIHdvcmtzIHRoZSBzYW1lIHdheSBhcnJheS5wcm90b3R5cGUubWFwIHdvcmtzIGJ1dCBpZiB0aGUgdHJhbnNmb3JtZXIgcmV0dXJucyB1bmRlZmluZSwgdGhlblxuICogaXQgd29uJ3QgYmUgYWRkZWQgdG8gdGhlIHRyYW5zZm9ybWVkIEFycmF5LlxuICovXG5mdW5jdGlvbiB0cmFuc2Zvcm1BcnJheShhcnJheSwgdHJhbnNmb3JtZXIpIHtcbiAgdmFyIHRyYW5zZm9ybWVkQXJyYXkgPSBbXTtcblxuICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KXtcbiAgICB2YXIgdHJhbnNmb3JtZWRJdGVtID0gdHJhbnNmb3JtZXIoaXRlbSwgaW5kZXgpO1xuICAgIGlmKHV0aWxpdGllcy5pc0RlZmluZWQodHJhbnNmb3JtZWRJdGVtKSkge1xuICAgICAgdHJhbnNmb3JtZWRBcnJheS5wdXNoKHRyYW5zZm9ybWVkSXRlbSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHJhbnNmb3JtZWRBcnJheTtcbn1cblxuZnVuY3Rpb24gdG9GaXhlZERpZ2l0cyhudW0sIGRpZ2l0cykge1xuICB2YXIgZm9ybWF0dGVkTnVtID0gbnVtICsgJyc7XG4gIGRpZ2l0cyA9IHV0aWxpdGllcy5pc051bWJlcihkaWdpdHMpID8gZGlnaXRzIDogMDtcbiAgbnVtID0gdXRpbGl0aWVzLmlzTnVtYmVyKG51bSkgPyBudW0gOiBwYXJzZUludChudW0sIDEwKTtcbiAgaWYodXRpbGl0aWVzLmlzTnVtYmVyKG51bSkgJiYgIWlzTmFOKG51bSkpe1xuICAgIGZvcm1hdHRlZE51bSA9IG51bSArICcnO1xuICAgIHdoaWxlKGZvcm1hdHRlZE51bS5sZW5ndGggPCBkaWdpdHMpIHtcbiAgICAgIGZvcm1hdHRlZE51bSA9ICcwJyArIGZvcm1hdHRlZE51bTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdHRlZE51bTtcbiAgfVxuICByZXR1cm4gTmFOICsgJyc7XG59XG5cbmZ1bmN0aW9uIHRocm90dGxlKGNhbGxiYWNrLCBkZWxheSkge1xuICB2YXIgcHJldmlvdXNDYWxsID0gbmV3IERhdGUoKS5nZXRUaW1lKCkgLSAoZGVsYXkgKyAxKTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgaWYgKCh0aW1lIC0gcHJldmlvdXNDYWxsKSA+PSBkZWxheSkge1xuICAgICAgcHJldmlvdXNDYWxsID0gdGltZTtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZSAoY2FsbGJhY2ssIHdhaXQpIHtcbiAgdmFyIHRpbWVvdXRJZDtcblxuICByZXR1cm4gZnVuY3Rpb24gKCl7XG4gICAgaWYodGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9XG4gICAgdGltZW91dElkID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIHRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICB9LCB3YWl0KTtcbiAgfTtcbn1cblxuLy8gYSBmdW5jdGlvbiBkZXNpZ25lZCB0byBibG93IHVwIHRoZSBzdGFjayBpbiBhIG5haXZlIHdheVxuLy8gYnV0IGl0IGlzIG9rIGZvciB2aWRlb0pzIGNoaWxkcmVuIGNvbXBvbmVudHNcbmZ1bmN0aW9uIHRyZWVTZWFyY2gocm9vdCwgZ2V0Q2hpbGRyZW4sIGZvdW5kKXtcbiAgdmFyIGNoaWxkcmVuID0gZ2V0Q2hpbGRyZW4ocm9vdCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspe1xuICAgIGlmIChmb3VuZChjaGlsZHJlbltpXSkpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlbltpXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB2YXIgZWwgPSB0cmVlU2VhcmNoKGNoaWxkcmVuW2ldLCBnZXRDaGlsZHJlbiwgZm91bmQpO1xuICAgICAgaWYgKGVsKXtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBlY2hvRm4odmFsKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfTtcbn1cblxuLy9Ob3RlOiBTdXBwb3J0ZWQgZm9ybWF0cyBjb21lIGZyb20gaHR0cDovL3d3dy53My5vcmcvVFIvTk9URS1kYXRldGltZVxuLy8gYW5kIHRoZSBpc284NjAxIHJlZ2V4IGNvbWVzIGZyb20gaHR0cDovL3d3dy5wZWxhZ29kZXNpZ24uY29tL2Jsb2cvMjAwOS8wNS8yMC9pc28tODYwMS1kYXRlLXZhbGlkYXRpb24tdGhhdC1kb2VzbnQtc3Vjay9cbmZ1bmN0aW9uIGlzSVNPODYwMSh2YWx1ZSkge1xuICBpZih1dGlsaXRpZXMuaXNOdW1iZXIodmFsdWUpKXtcbiAgICB2YWx1ZSA9IHZhbHVlICsgJyc7ICAvL3dlIG1ha2Ugc3VyZSB0aGF0IHdlIGFyZSB3b3JraW5nIHdpdGggc3RyaW5nc1xuICB9XG5cbiAgaWYoIXV0aWxpdGllcy5pc1N0cmluZyh2YWx1ZSkpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBJU084MDg2X1JFR0VYUC50ZXN0KHZhbHVlLnRyaW0oKSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBCcm93c2VyIGlzIElFOSBhbmQgYmVsb3dcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgdmVyc2lvbiA9IHV0aWxpdGllcy5nZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbihuYXZpZ2F0b3IpO1xuICBpZiAodmVyc2lvbiA9PT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdmVyc2lvbiA8IDEwO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHZlcnNpb24gb2YgSW50ZXJuZXQgRXhwbG9yZXIgb3IgYSAtMSAoaW5kaWNhdGluZyB0aGUgdXNlIG9mIGFub3RoZXIgYnJvd3NlcikuXG4gKiBTb3VyY2U6IGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1Mzc1MDkodj12cy44NSkuYXNweFxuICogQHJldHVybnMge251bWJlcn0gdGhlIHZlcnNpb24gb2YgSW50ZXJuZXQgRXhwbG9yZXIgb3IgYSAtMSAoaW5kaWNhdGluZyB0aGUgdXNlIG9mIGFub3RoZXIgYnJvd3NlcikuXG4gKi9cbmZ1bmN0aW9uIGdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uKG5hdmlnYXRvcikge1xuICB2YXIgcnYgPSAtMTtcblxuICBpZiAobmF2aWdhdG9yLmFwcE5hbWUgPT0gJ01pY3Jvc29mdCBJbnRlcm5ldCBFeHBsb3JlcicpIHtcbiAgICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICAgIHZhciByZSA9IG5ldyBSZWdFeHAoXCJNU0lFIChbMC05XXsxLH1bXFwuMC05XXswLH0pXCIpO1xuICAgIHZhciByZXMgPSByZS5leGVjKHVhKTtcbiAgICBpZiAocmVzICE9PSBudWxsKSB7XG4gICAgICBydiA9IHBhcnNlRmxvYXQocmVzWzFdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcnY7XG59XG5cbi8qKiogTW9iaWxlIFV0aWxpdHkgZnVuY3Rpb25zICoqKi9cbmZ1bmN0aW9uIGlzSURldmljZSgpIHtcbiAgcmV0dXJuIC9pUChob25lfGFkKS8udGVzdCh1dGlsaXRpZXMuX1VBKTtcbn1cblxuZnVuY3Rpb24gaXNNb2JpbGUoKSB7XG4gIHJldHVybiAvaVAoaG9uZXxhZHxvZCl8QW5kcm9pZHxXaW5kb3dzIFBob25lLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xufVxuXG5mdW5jdGlvbiBpc0lQaG9uZSgpIHtcbiAgcmV0dXJuIC9pUChob25lfG9kKS8udGVzdCh1dGlsaXRpZXMuX1VBKTtcbn1cblxuZnVuY3Rpb24gaXNBbmRyb2lkKCkge1xuICByZXR1cm4gL0FuZHJvaWQvLnRlc3QodXRpbGl0aWVzLl9VQSk7XG59XG5cbnZhciB1dGlsaXRpZXMgPSB7XG4gIF9VQTogbmF2aWdhdG9yLnVzZXJBZ2VudCxcbiAgbm9vcDogbm9vcCxcbiAgaXNOdWxsOiBpc051bGwsXG4gIGlzRGVmaW5lZDogaXNEZWZpbmVkLFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc1dpbmRvdzogaXNXaW5kb3csXG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlMaWtlOiBpc0FycmF5TGlrZSxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc0VtcHR5U3RyaW5nOiBpc0VtcHR5U3RyaW5nLFxuICBpc05vdEVtcHR5U3RyaW5nOiBpc05vdEVtcHR5U3RyaW5nLFxuICBhcnJheUxpa2VPYmpUb0FycmF5OiBhcnJheUxpa2VPYmpUb0FycmF5LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBzbmFrZV9jYXNlOiBzbmFrZV9jYXNlLFxuICBpc1ZhbGlkRW1haWw6IGlzVmFsaWRFbWFpbCxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIGNhcGl0YWxpemU6IGNhcGl0YWxpemUsXG4gIGRlY2FwaXRhbGl6ZTogZGVjYXBpdGFsaXplLFxuICB0cmFuc2Zvcm1BcnJheTogdHJhbnNmb3JtQXJyYXksXG4gIHRvRml4ZWREaWdpdHM6IHRvRml4ZWREaWdpdHMsXG4gIHRocm90dGxlOiB0aHJvdHRsZSxcbiAgZGVib3VuY2U6IGRlYm91bmNlLFxuICB0cmVlU2VhcmNoOiB0cmVlU2VhcmNoLFxuICBlY2hvRm46IGVjaG9GbixcbiAgaXNJU084NjAxOiBpc0lTTzg2MDEsXG4gIGlzT2xkSUU6IGlzT2xkSUUsXG4gIGdldEludGVybmV0RXhwbG9yZXJWZXJzaW9uOiBnZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbixcbiAgaXNJRGV2aWNlOiBpc0lEZXZpY2UsXG4gIGlzTW9iaWxlOiBpc01vYmlsZSxcbiAgaXNJUGhvbmU6IGlzSVBob25lLFxuICBpc0FuZHJvaWQ6IGlzQW5kcm9pZFxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB1dGlsaXRpZXM7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciB4bWwgPSB7fTtcblxueG1sLnN0clRvWE1MRG9jID0gZnVuY3Rpb24gc3RyVG9YTUxEb2Moc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSl7XG4gIC8vSUUgOFxuICBpZih0eXBlb2Ygd2luZG93LkRPTVBhcnNlciA9PT0gJ3VuZGVmaW5lZCcpe1xuICAgIHZhciB4bWxEb2N1bWVudCA9IG5ldyBBY3RpdmVYT2JqZWN0KCdNaWNyb3NvZnQuWE1MRE9NJyk7XG4gICAgeG1sRG9jdW1lbnQuYXN5bmMgPSBmYWxzZTtcbiAgICB4bWxEb2N1bWVudC5sb2FkWE1MKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2UpO1xuICAgIHJldHVybiB4bWxEb2N1bWVudDtcbiAgfVxuXG4gIHJldHVybiBwYXJzZVN0cmluZyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlKTtcblxuICBmdW5jdGlvbiBwYXJzZVN0cmluZyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlKXtcbiAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIHZhciBwYXJzZWREb2N1bWVudDtcblxuICAgIC8vTm90ZTogVGhpcyB0cnkgY2F0Y2ggaXMgdG8gZGVhbCB3aXRoIHRoZSBmYWN0IHRoYXQgb24gSUUgcGFyc2VyLnBhcnNlRnJvbVN0cmluZyBkb2VzIHRocm93IGFuIGVycm9yIGJ1dCB0aGUgcmVzdCBvZiB0aGUgYnJvd3NlcnMgZG9uJ3QuXG4gICAgdHJ5IHtcbiAgICAgIHBhcnNlZERvY3VtZW50ID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlLCBcImFwcGxpY2F0aW9uL3htbFwiKTtcblxuICAgICAgaWYoaXNQYXJzZUVycm9yKHBhcnNlZERvY3VtZW50KSB8fCB1dGlsaXRpZXMuaXNFbXB0eVN0cmluZyhzdHJpbmdDb250YWluaW5nWE1MU291cmNlKSl7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgfVxuICAgIH1jYXRjaChlKXtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInhtbC5zdHJUb1hNTERPQzogRXJyb3IgcGFyc2luZyB0aGUgc3RyaW5nOiAnXCIgKyBzdHJpbmdDb250YWluaW5nWE1MU291cmNlICsgXCInXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZWREb2N1bWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzUGFyc2VFcnJvcihwYXJzZWREb2N1bWVudCkge1xuICAgIHRyeSB7IC8vIHBhcnNlciBhbmQgcGFyc2VyZXJyb3JOUyBjb3VsZCBiZSBjYWNoZWQgb24gc3RhcnR1cCBmb3IgZWZmaWNpZW5jeVxuICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKSxcbiAgICAgICAgZXJyb25lb3VzUGFyc2UgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKCdJTlZBTElEJywgJ3RleHQveG1sJyksXG4gICAgICAgIHBhcnNlcmVycm9yTlMgPSBlcnJvbmVvdXNQYXJzZS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpWzBdLm5hbWVzcGFjZVVSSTtcblxuICAgICAgaWYgKHBhcnNlcmVycm9yTlMgPT09ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJykge1xuICAgICAgICAvLyBJbiBQaGFudG9tSlMgdGhlIHBhcnNlZXJyb3IgZWxlbWVudCBkb2Vzbid0IHNlZW0gdG8gaGF2ZSBhIHNwZWNpYWwgbmFtZXNwYWNlLCBzbyB3ZSBhcmUganVzdCBndWVzc2luZyBoZXJlIDooXG4gICAgICAgIHJldHVybiBwYXJzZWREb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aCA+IDA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJzZWREb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZU5TKHBhcnNlcmVycm9yTlMsICdwYXJzZXJlcnJvcicpLmxlbmd0aCA+IDA7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy9Ob3RlIG9uIElFIHBhcnNlU3RyaW5nIHRocm93cyBhbiBlcnJvciBieSBpdHNlbGYgYW5kIGl0IHdpbGwgbmV2ZXIgcmVhY2ggdGhpcyBjb2RlLiBCZWNhdXNlIGl0IHdpbGwgaGF2ZSBmYWlsZWQgYmVmb3JlXG4gICAgfVxuICB9XG59O1xuXG54bWwucGFyc2VUZXh0ID0gZnVuY3Rpb24gcGFyc2VUZXh0IChzVmFsdWUpIHtcbiAgaWYgKC9eXFxzKiQvLnRlc3Qoc1ZhbHVlKSkgeyByZXR1cm4gbnVsbDsgfVxuICBpZiAoL14oPzp0cnVlfGZhbHNlKSQvaS50ZXN0KHNWYWx1ZSkpIHsgcmV0dXJuIHNWYWx1ZS50b0xvd2VyQ2FzZSgpID09PSBcInRydWVcIjsgfVxuICBpZiAoaXNGaW5pdGUoc1ZhbHVlKSkgeyByZXR1cm4gcGFyc2VGbG9hdChzVmFsdWUpOyB9XG4gIGlmICh1dGlsaXRpZXMuaXNJU084NjAxKHNWYWx1ZSkpIHsgcmV0dXJuIG5ldyBEYXRlKHNWYWx1ZSk7IH1cbiAgcmV0dXJuIHNWYWx1ZS50cmltKCk7XG59O1xuXG54bWwuSlhPTlRyZWUgPSBmdW5jdGlvbiBKWE9OVHJlZSAob1hNTFBhcmVudCkge1xuICB2YXIgcGFyc2VUZXh0ID0geG1sLnBhcnNlVGV4dDtcblxuICAvL1RoZSBkb2N1bWVudCBvYmplY3QgaXMgYW4gZXNwZWNpYWwgb2JqZWN0IHRoYXQgaXQgbWF5IG1pc3Mgc29tZSBmdW5jdGlvbnMgb3IgYXR0cnMgZGVwZW5kaW5nIG9uIHRoZSBicm93c2VyLlxuICAvL1RvIHByZXZlbnQgdGhpcyBwcm9ibGVtIHdpdGggY3JlYXRlIHRoZSBKWE9OVHJlZSB1c2luZyB0aGUgcm9vdCBjaGlsZE5vZGUgd2hpY2ggaXMgYSBmdWxseSBmbGVzaGVkIG5vZGUgb24gYWxsIHN1cHBvcnRlZFxuICAvL2Jyb3dzZXJzLlxuICBpZihvWE1MUGFyZW50LmRvY3VtZW50RWxlbWVudCl7XG4gICAgcmV0dXJuIG5ldyB4bWwuSlhPTlRyZWUob1hNTFBhcmVudC5kb2N1bWVudEVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKG9YTUxQYXJlbnQuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgdmFyIHNDb2xsZWN0ZWRUeHQgPSBcIlwiO1xuICAgIGZvciAodmFyIG9Ob2RlLCBzUHJvcCwgdkNvbnRlbnQsIG5JdGVtID0gMDsgbkl0ZW0gPCBvWE1MUGFyZW50LmNoaWxkTm9kZXMubGVuZ3RoOyBuSXRlbSsrKSB7XG4gICAgICBvTm9kZSA9IG9YTUxQYXJlbnQuY2hpbGROb2Rlcy5pdGVtKG5JdGVtKTtcbiAgICAgIC8qanNoaW50IGJpdHdpc2U6IGZhbHNlKi9cbiAgICAgIGlmICgob05vZGUubm9kZVR5cGUgLSAxIHwgMSkgPT09IDMpIHsgc0NvbGxlY3RlZFR4dCArPSBvTm9kZS5ub2RlVHlwZSA9PT0gMyA/IG9Ob2RlLm5vZGVWYWx1ZS50cmltKCkgOiBvTm9kZS5ub2RlVmFsdWU7IH1cbiAgICAgIGVsc2UgaWYgKG9Ob2RlLm5vZGVUeXBlID09PSAxICYmICFvTm9kZS5wcmVmaXgpIHtcbiAgICAgICAgc1Byb3AgPSB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKG9Ob2RlLm5vZGVOYW1lKTtcbiAgICAgICAgdkNvbnRlbnQgPSBuZXcgeG1sLkpYT05UcmVlKG9Ob2RlKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkoc1Byb3ApKSB7XG4gICAgICAgICAgaWYgKHRoaXNbc1Byb3BdLmNvbnN0cnVjdG9yICE9PSBBcnJheSkgeyB0aGlzW3NQcm9wXSA9IFt0aGlzW3NQcm9wXV07IH1cbiAgICAgICAgICB0aGlzW3NQcm9wXS5wdXNoKHZDb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHsgdGhpc1tzUHJvcF0gPSB2Q29udGVudDsgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc0NvbGxlY3RlZFR4dCkgeyB0aGlzLmtleVZhbHVlID0gcGFyc2VUZXh0KHNDb2xsZWN0ZWRUeHQpOyB9XG4gIH1cblxuICAvL0lFOCBTdHVwaWQgZml4XG4gIHZhciBoYXNBdHRyID0gdHlwZW9mIG9YTUxQYXJlbnQuaGFzQXR0cmlidXRlcyA9PT0gJ3VuZGVmaW5lZCc/IG9YTUxQYXJlbnQuYXR0cmlidXRlcy5sZW5ndGggPiAwOiBvWE1MUGFyZW50Lmhhc0F0dHJpYnV0ZXMoKTtcbiAgaWYgKGhhc0F0dHIpIHtcbiAgICB2YXIgb0F0dHJpYjtcbiAgICBmb3IgKHZhciBuQXR0cmliID0gMDsgbkF0dHJpYiA8IG9YTUxQYXJlbnQuYXR0cmlidXRlcy5sZW5ndGg7IG5BdHRyaWIrKykge1xuICAgICAgb0F0dHJpYiA9IG9YTUxQYXJlbnQuYXR0cmlidXRlcy5pdGVtKG5BdHRyaWIpO1xuICAgICAgdGhpc1tcIkBcIiArIHV0aWxpdGllcy5kZWNhcGl0YWxpemUob0F0dHJpYi5uYW1lKV0gPSBwYXJzZVRleHQob0F0dHJpYi52YWx1ZS50cmltKCkpO1xuICAgIH1cbiAgfVxufTtcblxueG1sLkpYT05UcmVlLnByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24oYXR0cikge1xuICByZXR1cm4gdGhpc1snQCcgKyB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKGF0dHIpXTtcbn07XG5cbnhtbC50b0pYT05UcmVlID0gZnVuY3Rpb24gdG9KWE9OVHJlZSh4bWxTdHJpbmcpe1xuICB2YXIgeG1sRG9jID0geG1sLnN0clRvWE1MRG9jKHhtbFN0cmluZyk7XG4gIHJldHVybiBuZXcgeG1sLkpYT05UcmVlKHhtbERvYyk7XG59O1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBleHRyYWN0IHRoZSBrZXl2YWx1ZSBvZiBhIEpYT05UcmVlIG9ialxuICpcbiAqIEBwYXJhbSB4bWxPYmoge0pYT05UcmVlfVxuICogcmV0dXJuIHRoZSBrZXkgdmFsdWUgb3IgdW5kZWZpbmVkO1xuICovXG54bWwua2V5VmFsdWUgPSBmdW5jdGlvbiBnZXRLZXlWYWx1ZSh4bWxPYmopIHtcbiAgaWYoeG1sT2JqKXtcbiAgICByZXR1cm4geG1sT2JqLmtleVZhbHVlO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG54bWwuYXR0ciA9IGZ1bmN0aW9uIGdldEF0dHJWYWx1ZSh4bWxPYmosIGF0dHIpIHtcbiAgaWYoeG1sT2JqKSB7XG4gICAgcmV0dXJuIHhtbE9ialsnQCcgKyB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKGF0dHIpXTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxueG1sLmVuY29kZSA9IGZ1bmN0aW9uIGVuY29kZVhNTChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7JylcbiAgICAucmVwbGFjZSgvXCIvZywgJyZxdW90OycpXG4gICAgLnJlcGxhY2UoLycvZywgJyZhcG9zOycpO1xufTtcblxueG1sLmRlY29kZSA9IGZ1bmN0aW9uIGRlY29kZVhNTChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mYXBvczsvZywgXCInXCIpXG4gICAgLnJlcGxhY2UoLyZxdW90Oy9nLCAnXCInKVxuICAgIC5yZXBsYWNlKC8mZ3Q7L2csICc+JylcbiAgICAucmVwbGFjZSgvJmx0Oy9nLCAnPCcpXG4gICAgLnJlcGxhY2UoLyZhbXA7L2csICcmJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHhtbDsiLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4vcGx1Z2luL2NvbXBvbmVudHMvYWRzLWxhYmVsXzQnKTtcbnJlcXVpcmUoJy4vcGx1Z2luL2NvbXBvbmVudHMvYmxhY2stcG9zdGVyXzQnKTtcblxudmFyIHZpZGVvSnNWQVNUID0gcmVxdWlyZSgnLi9wbHVnaW4vdmlkZW9qcy52YXN0Jyk7XG5cbnZpZGVvanMucGx1Z2luKCd2YXN0Q2xpZW50JywgdmlkZW9Kc1ZBU1QpO1xuXG4iXX0=
