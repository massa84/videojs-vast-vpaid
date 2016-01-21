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

var baseVideoJsComponent = videojs.getComponent('Component');

var AdsLabel = require('./ads-label')(baseVideoJsComponent);

videojs.registerComponent('AdsLabel', videojs.extend(baseVideoJsComponent, AdsLabel));

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

var baseVideoJsComponent = videojs.getComponent('Component');

var BlackPoster = require('./black-poster')(baseVideoJsComponent);

videojs.registerComponent('BlackPoster', videojs.extend(baseVideoJsComponent, BlackPoster));

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

require('./plugin/components/ads-label_5');
require('./plugin/components/black-poster_5');

var videoJsVAST = require('./plugin/videojs.vast');

videojs.plugin('vastClient', videoJsVAST);

},{"./plugin/components/ads-label_5":33,"./plugin/components/black-poster_5":35,"./plugin/videojs.vast":36}]},{},[44])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlERkxBU0hDbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREZMQVNIQ2xpZW50L2pzL1ZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREZMQVNIQ2xpZW50L2pzL1ZQQUlERkxBU0hDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlERkxBU0hDbGllbnQvanMvanNGbGFzaEJyaWRnZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvVlBBSURGTEFTSENsaWVudC9qcy9qc0ZsYXNoQnJpZGdlUmVnaXN0cnkuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlERkxBU0hDbGllbnQvanMvcmVnaXN0cnkuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlERkxBU0hDbGllbnQvanMvdXRpbHMuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvSVZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlEQWRVbml0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9WUEFJREhUTUw1Q2xpZW50L2pzL1ZQQUlESFRNTDVDbGllbnQuanMiLCJib3dlcl9jb21wb25lbnRzL1ZQQUlESFRNTDVDbGllbnQvanMvc3Vic2NyaWJlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvVlBBSURIVE1MNUNsaWVudC9qcy91dGlscy5qcyIsInNyYy9qcy9hZHMvdmFzdC9BZC5qcyIsInNyYy9qcy9hZHMvdmFzdC9DcmVhdGl2ZS5qcyIsInNyYy9qcy9hZHMvdmFzdC9JbkxpbmUuanMiLCJzcmMvanMvYWRzL3Zhc3QvTGluZWFyLmpzIiwic3JjL2pzL2Fkcy92YXN0L01lZGlhRmlsZS5qcyIsInNyYy9qcy9hZHMvdmFzdC9UcmFja2luZ0V2ZW50LmpzIiwic3JjL2pzL2Fkcy92YXN0L1ZBU1RDbGllbnQuanMiLCJzcmMvanMvYWRzL3Zhc3QvVkFTVEVycm9yLmpzIiwic3JjL2pzL2Fkcy92YXN0L1ZBU1RJbnRlZ3JhdG9yLmpzIiwic3JjL2pzL2Fkcy92YXN0L1ZBU1RSZXNwb25zZS5qcyIsInNyYy9qcy9hZHMvdmFzdC9WQVNUVHJhY2tlci5qcyIsInNyYy9qcy9hZHMvdmFzdC9WaWRlb0NsaWNrcy5qcyIsInNyYy9qcy9hZHMvdmFzdC9XcmFwcGVyLmpzIiwic3JjL2pzL2Fkcy92YXN0L3BhcnNlcnMuanMiLCJzcmMvanMvYWRzL3Zhc3QvdmFzdFV0aWwuanMiLCJzcmMvanMvYWRzL3ZwYWlkL1ZQQUlEQWRVbml0V3JhcHBlci5qcyIsInNyYy9qcy9hZHMvdnBhaWQvVlBBSURGbGFzaFRlY2guanMiLCJzcmMvanMvYWRzL3ZwYWlkL1ZQQUlESFRNTDVUZWNoLmpzIiwic3JjL2pzL2Fkcy92cGFpZC9WUEFJREludGVncmF0b3IuanMiLCJzcmMvanMvcGx1Z2luL2NvbXBvbmVudHMvYWRzLWxhYmVsLmpzIiwic3JjL2pzL3BsdWdpbi9jb21wb25lbnRzL2Fkcy1sYWJlbF81LmpzIiwic3JjL2pzL3BsdWdpbi9jb21wb25lbnRzL2JsYWNrLXBvc3Rlci5qcyIsInNyYy9qcy9wbHVnaW4vY29tcG9uZW50cy9ibGFjay1wb3N0ZXJfNS5qcyIsInNyYy9qcy9wbHVnaW4vdmlkZW9qcy52YXN0LmpzIiwic3JjL2pzL3V0aWxzL2FzeW5jLmpzIiwic3JjL2pzL3V0aWxzL2RvbS5qcyIsInNyYy9qcy91dGlscy9odHRwLmpzIiwic3JjL2pzL3V0aWxzL3BsYXllclV0aWxzLmpzIiwic3JjL2pzL3V0aWxzL3VybFV0aWxzLmpzIiwic3JjL2pzL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMuanMiLCJzcmMvanMvdXRpbHMveG1sLmpzIiwic3JjL2pzL3ZpZGVvanNfNS52YXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7Ozs7Ozs7Ozs7OztJQUdhOzs7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R2EsR0FIYixFQUlKLE9BSkksQ0FJSSxRQUpKLEVBSWMsR0FKZCxDQUFQLENBRG1DO0NBQXhCOztBQVFiLE9BQU8sT0FBUCxHQUFpQixHQUFqQjs7O0FDakpBOztBQUVBLFFBQVEsaUNBQVI7QUFDQSxRQUFRLG9DQUFSOztBQUVBLElBQUksY0FBYyxRQUFRLHVCQUFSLENBQWQ7O0FBRUosUUFBUSxNQUFSLENBQWUsWUFBZixFQUE2QixXQUE3QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbi8vc2ltcGxlIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBBUElcbmV4cG9ydCBjbGFzcyBJVlBBSURBZFVuaXQge1xuXG4gICAgLy9hbGwgbWV0aG9kcyBiZWxvd1xuICAgIC8vYXJlIGFzeW5jIG1ldGhvZHNcbiAgICBoYW5kc2hha2VWZXJzaW9uKHBsYXllclZQQUlEVmVyc2lvbiA9ICcyLjAnLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cblxuICAgIC8vY3JlYXRpdmVEYXRhIGlzIGFuIG9iamVjdCB0byBiZSBjb25zaXN0ZW50IHdpdGggVlBBSURIVE1MXG4gICAgaW5pdEFkICh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSA9IHtBZFBhcmFtZXRlcnM6Jyd9LCBlbnZpcm9ubWVudFZhcnMgPSB7Zmxhc2hWYXJzOiAnJ30sIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuICAgIHJlc2l6ZUFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cblxuICAgIHN0YXJ0QWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgc3RvcEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7fVxuICAgIHBhdXNlQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgcmVzdW1lQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgZXhwYW5kQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgY29sbGFwc2VBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge31cbiAgICBza2lwQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG5cbiAgICAvL3Byb3BlcnRpZXMgdGhhdCB3aWxsIGJlIHRyZWF0IGFzIGFzeW5jIG1ldGhvZHNcbiAgICBnZXRBZExpbmVhcihjYWxsYmFjaykge31cbiAgICBnZXRBZFdpZHRoKGNhbGxiYWNrKSB7fVxuICAgIGdldEFkSGVpZ2h0KGNhbGxiYWNrKSB7fVxuICAgIGdldEFkRXhwYW5kZWQoY2FsbGJhY2spIHt9XG4gICAgZ2V0QWRTa2lwcGFibGVTdGF0ZShjYWxsYmFjaykge31cbiAgICBnZXRBZFJlbWFpbmluZ1RpbWUoY2FsbGJhY2spIHt9XG4gICAgZ2V0QWREdXJhdGlvbihjYWxsYmFjaykge31cbiAgICBzZXRBZFZvbHVtZShzb3VuZFZvbHVtZSwgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHt9XG4gICAgZ2V0QWRWb2x1bWUoY2FsbGJhY2spIHt9XG4gICAgZ2V0QWRDb21wYW5pb25zKGNhbGxiYWNrKSB7fVxuICAgIGdldEFkSWNvbnMoY2FsbGJhY2spIHt9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShJVlBBSURBZFVuaXQsICdFVkVOVFMnLCB7XG4gICAgd3JpdGFibGU6IGZhbHNlLFxuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IFtcbiAgICAgICAgJ0FkTG9hZGVkJyxcbiAgICAgICAgJ0FkU3RhcnRlZCcsXG4gICAgICAgICdBZFN0b3BwZWQnLFxuICAgICAgICAnQWRTa2lwcGVkJyxcbiAgICAgICAgJ0FkU2tpcHBhYmxlU3RhdGVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgICAgICdBZFNpemVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgICAgICdBZExpbmVhckNoYW5nZScsXG4gICAgICAgICdBZER1cmF0aW9uQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICAgICAnQWRFeHBhbmRlZENoYW5nZScsXG4gICAgICAgICdBZFJlbWFpbmluZ1RpbWVDaGFuZ2UnLCAvLyBbRGVwcmVjYXRlZCBpbiAyLjBdIGJ1dCB3aWxsIGJlIHN0aWxsIGZpcmVkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgICAnQWRWb2x1bWVDaGFuZ2UnLFxuICAgICAgICAnQWRJbXByZXNzaW9uJyxcbiAgICAgICAgJ0FkVmlkZW9TdGFydCcsXG4gICAgICAgICdBZFZpZGVvRmlyc3RRdWFydGlsZScsXG4gICAgICAgICdBZFZpZGVvTWlkcG9pbnQnLFxuICAgICAgICAnQWRWaWRlb1RoaXJkUXVhcnRpbGUnLFxuICAgICAgICAnQWRWaWRlb0NvbXBsZXRlJyxcbiAgICAgICAgJ0FkQ2xpY2tUaHJ1JyxcbiAgICAgICAgJ0FkSW50ZXJhY3Rpb24nLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgICAgICdBZFVzZXJBY2NlcHRJbnZpdGF0aW9uJyxcbiAgICAgICAgJ0FkVXNlck1pbmltaXplJyxcbiAgICAgICAgJ0FkVXNlckNsb3NlJyxcbiAgICAgICAgJ0FkUGF1c2VkJyxcbiAgICAgICAgJ0FkUGxheWluZycsXG4gICAgICAgICdBZExvZycsXG4gICAgICAgICdBZEVycm9yJ1xuICAgIF1cbn0pO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmxldCBJVlBBSURBZFVuaXQgPSByZXF1aXJlKCcuL0lWUEFJREFkVW5pdCcpLklWUEFJREFkVW5pdDtcbmxldCBBTExfVlBBSURfTUVUSE9EUyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKElWUEFJREFkVW5pdC5wcm90b3R5cGUpLmZpbHRlcihmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICByZXR1cm4gWydjb25zdHJ1Y3RvciddLmluZGV4T2YocHJvcGVydHkpID09PSAtMTtcbn0pO1xuXG5leHBvcnQgY2xhc3MgVlBBSURBZFVuaXQgZXh0ZW5kcyBJVlBBSURBZFVuaXQge1xuICAgIGNvbnN0cnVjdG9yIChmbGFzaCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZmxhc2ggPSBmbGFzaDtcbiAgICB9XG5cbiAgICBfZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgQUxMX1ZQQUlEX01FVEhPRFMuZm9yRWFjaCgobWV0aG9kTmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fZmxhc2gucmVtb3ZlQ2FsbGJhY2tCeU1ldGhvZE5hbWUobWV0aG9kTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBJVlBBSURBZFVuaXQuRVZFTlRTLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9mbGFzaC5vZmZFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2ZsYXNoID0gbnVsbDtcbiAgICB9XG5cbiAgICBpc0Rlc3Ryb3llZCAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXN0cm95ZWQ7XG4gICAgfVxuXG4gICAgb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5vbihldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBvZmYoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5vZmYoZXZlbnROYW1lLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLy9WUEFJRCBpbnRlcmZhY2VcbiAgICBoYW5kc2hha2VWZXJzaW9uKHBsYXllclZQQUlEVmVyc2lvbiA9ICcyLjAnLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2hhbmRzaGFrZVZlcnNpb24nLCBbcGxheWVyVlBBSURWZXJzaW9uXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBpbml0QWQgKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhID0ge0FkUGFyYW1ldGVyczogJyd9LCBlbnZpcm9ubWVudFZhcnMgPSB7Zmxhc2hWYXJzOiAnJ30sIGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vcmVzaXplIGVsZW1lbnQgdGhhdCBoYXMgdGhlIGZsYXNoIG9iamVjdFxuICAgICAgICB0aGlzLl9mbGFzaC5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjcmVhdGl2ZURhdGEgPSBjcmVhdGl2ZURhdGEgfHwge0FkUGFyYW1ldGVyczogJyd9O1xuICAgICAgICBlbnZpcm9ubWVudFZhcnMgPSBlbnZpcm9ubWVudFZhcnMgfHwge2ZsYXNoVmFyczogJyd9O1xuXG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnaW5pdEFkJywgW3RoaXMuX2ZsYXNoLmdldFdpZHRoKCksIHRoaXMuX2ZsYXNoLmdldEhlaWdodCgpLCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YS5BZFBhcmFtZXRlcnMgfHwgJycsIGVudmlyb25tZW50VmFycy5mbGFzaFZhcnMgfHwgJyddLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHJlc2l6ZUFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICAvL3Jlc2l6ZSBlbGVtZW50IHRoYXQgaGFzIHRoZSBmbGFzaCBvYmplY3RcbiAgICAgICAgdGhpcy5fZmxhc2guc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAvL3Jlc2l6ZSBhZCBpbnNpZGUgdGhlIGZsYXNoXG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgncmVzaXplQWQnLCBbdGhpcy5fZmxhc2guZ2V0V2lkdGgoKSwgdGhpcy5fZmxhc2guZ2V0SGVpZ2h0KCksIHZpZXdNb2RlXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBzdGFydEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnc3RhcnRBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHN0b3BBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ3N0b3BBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHBhdXNlQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdwYXVzZUFkJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgcmVzdW1lQWQoY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdyZXN1bWVBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGV4cGFuZEFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZXhwYW5kQWQnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBjb2xsYXBzZUFkKGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnY29sbGFwc2VBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHNraXBBZChjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ3NraXBBZCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLy9wcm9wZXJ0aWVzIHRoYXQgd2lsbCBiZSB0cmVhdCBhcyBhc3luYyBtZXRob2RzXG4gICAgZ2V0QWRMaW5lYXIoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZExpbmVhcicsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkV2lkdGgoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZFdpZHRoJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0QWRIZWlnaHQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZEhlaWdodCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkRXhwYW5kZWQoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZEV4cGFuZGVkJywgW10sIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0QWRTa2lwcGFibGVTdGF0ZShjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ2dldEFkU2tpcHBhYmxlU3RhdGUnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZFJlbWFpbmluZ1RpbWUoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZFJlbWFpbmluZ1RpbWUnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZER1cmF0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWREdXJhdGlvbicsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIHNldEFkVm9sdW1lKHZvbHVtZSwgY2FsbGJhY2sgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdzZXRBZFZvbHVtZScsIFt2b2x1bWVdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEFkVm9sdW1lKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWRWb2x1bWUnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZENvbXBhbmlvbnMoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5fZmxhc2guY2FsbEZsYXNoTWV0aG9kKCdnZXRBZENvbXBhbmlvbnMnLCBbXSwgY2FsbGJhY2spO1xuICAgIH1cbiAgICBnZXRBZEljb25zKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnZ2V0QWRJY29ucycsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxufVxuXG4iLCIndXNlIHN0cmljdCc7XG5cbmxldCBKU0ZsYXNoQnJpZGdlID0gcmVxdWlyZSgnLi9qc0ZsYXNoQnJpZGdlJykuSlNGbGFzaEJyaWRnZTtcbmxldCBWUEFJREFkVW5pdCA9IHJlcXVpcmUoJy4vVlBBSURBZFVuaXQnKS5WUEFJREFkVW5pdDtcblxubGV0IG5vb3AgPSByZXF1aXJlKCcuL3V0aWxzJykubm9vcDtcbmxldCBjYWxsYmFja1RpbWVvdXQgPSByZXF1aXJlKCcuL3V0aWxzJykuY2FsbGJhY2tUaW1lb3V0O1xubGV0IGlzUG9zaXRpdmVJbnQgPSByZXF1aXJlKCcuL3V0aWxzJykuaXNQb3NpdGl2ZUludDtcbmxldCBjcmVhdGVFbGVtZW50V2l0aElEID0gcmVxdWlyZSgnLi91dGlscycpLmNyZWF0ZUVsZW1lbnRXaXRoSUQ7XG5sZXQgdW5pcXVlVlBBSUQgPSByZXF1aXJlKCcuL3V0aWxzJykudW5pcXVlKCd2cGFpZCcpO1xuXG5jb25zdCBFUlJPUiA9ICdlcnJvcic7XG5jb25zdCBGTEFTSF9WRVJTSU9OID0gJzEwLjEuMCc7XG5cbmNsYXNzIFZQQUlERkxBU0hDbGllbnQge1xuICAgIGNvbnN0cnVjdG9yICh2cGFpZFBhcmVudEVsLCBjYWxsYmFjaywgc3dmQ29uZmlnID0ge2RhdGE6ICdWUEFJREZsYXNoLnN3ZicsIHdpZHRoOiA4MDAsIGhlaWdodDogNDAwfSwgcGFyYW1zID0geyB3bW9kZTogJ3RyYW5zcGFyZW50Jywgc2FsaWduOiAndGwnLCBhbGlnbjogJ2xlZnQnLCBhbGxvd1NjcmlwdEFjY2VzczogJ2Fsd2F5cycsIHNjYWxlOiAnbm9TY2FsZScsIGFsbG93RnVsbFNjcmVlbjogJ3RydWUnLCBxdWFsaXR5OiAnaGlnaCd9LCB2cGFpZE9wdGlvbnMgPSB7IGRlYnVnOiBmYWxzZSwgdGltZW91dDogMTAwMDAgfSkge1xuXG4gICAgICAgIGlmICghVlBBSURGTEFTSENsaWVudC5oYXNFeHRlcm5hbERlcGVuZGVuY2llcygpKSB7XG4gICAgICAgICAgICByZXR1cm4gb25FcnJvcignbm8gc3dmb2JqZWN0IGluIGdsb2JhbCBzY29wZS4gY2hlY2s6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2ZvYmplY3Qvc3dmb2JqZWN0IG9yIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3Avc3dmb2JqZWN0LycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fdnBhaWRQYXJlbnRFbCA9IHZwYWlkUGFyZW50RWw7XG4gICAgICAgIHRoaXMuX2ZsYXNoSUQgPSB1bmlxdWVWUEFJRCgpO1xuICAgICAgICB0aGlzLl9kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICAgICAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBub29wO1xuXG4gICAgICAgIHN3ZkNvbmZpZy53aWR0aCA9IGlzUG9zaXRpdmVJbnQoc3dmQ29uZmlnLndpZHRoLCA4MDApO1xuICAgICAgICBzd2ZDb25maWcuaGVpZ2h0ID0gaXNQb3NpdGl2ZUludChzd2ZDb25maWcuaGVpZ2h0LCA0MDApO1xuXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRXaXRoSUQodnBhaWRQYXJlbnRFbCwgdGhpcy5fZmxhc2hJRCk7XG5cbiAgICAgICAgcGFyYW1zLm1vdmllID0gc3dmQ29uZmlnLmRhdGE7XG4gICAgICAgIHBhcmFtcy5GbGFzaFZhcnMgPSBgZmxhc2hpZD0ke3RoaXMuX2ZsYXNoSUR9JmhhbmRsZXI9JHtKU0ZsYXNoQnJpZGdlLlZQQUlEX0ZMQVNIX0hBTkRMRVJ9JmRlYnVnPSR7dnBhaWRPcHRpb25zLmRlYnVnfSZzYWxpZ249JHtwYXJhbXMuc2FsaWdufWA7XG5cbiAgICAgICAgaWYgKCFWUEFJREZMQVNIQ2xpZW50LmlzU3VwcG9ydGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBvbkVycm9yKCd1c2VyIGRvblxcJ3Qgc3VwcG9ydCBmbGFzaCBvciBkb2VzblxcJ3QgaGF2ZSB0aGUgbWluaW11bSByZXF1aXJlZCB2ZXJzaW9uIG9mIGZsYXNoICcgKyBGTEFTSF9WRVJTSU9OKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZWwgPSBzd2ZvYmplY3QuY3JlYXRlU1dGKHN3ZkNvbmZpZywgcGFyYW1zLCB0aGlzLl9mbGFzaElEKTtcblxuICAgICAgICBpZiAoIXRoaXMuZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBvbkVycm9yKCAnc3dmb2JqZWN0IGZhaWxlZCB0byBjcmVhdGUgb2JqZWN0IGluIGVsZW1lbnQnICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaGFuZGxlciA9IGNhbGxiYWNrVGltZW91dCh2cGFpZE9wdGlvbnMudGltZW91dCxcbiAgICAgICAgICAgIChlcnIsIGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAkbG9hZFBlbmRlZEFkVW5pdC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgZGF0YSk7XG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soICd2cGFpZCBmbGFzaCBsb2FkIHRpbWVvdXQgJyArIHZwYWlkT3B0aW9ucy50aW1lb3V0ICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5fZmxhc2ggPSBuZXcgSlNGbGFzaEJyaWRnZSh0aGlzLmVsLCBzd2ZDb25maWcuZGF0YSwgdGhpcy5fZmxhc2hJRCwgc3dmQ29uZmlnLndpZHRoLCBzd2ZDb25maWcuaGVpZ2h0LCBoYW5kbGVyKTtcblxuICAgICAgICBmdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGRlc3Ryb3kgKCkge1xuICAgICAgICB0aGlzLl9kZXN0cm95QWRVbml0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2ZsYXNoKSB7XG4gICAgICAgICAgICB0aGlzLl9mbGFzaC5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLl9mbGFzaCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaXNEZXN0cm95ZWQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGVzdHJveWVkO1xuICAgIH1cblxuICAgIF9kZXN0cm95QWRVbml0KCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fbG9hZExhdGVyO1xuXG4gICAgICAgIGlmICh0aGlzLl9hZFVuaXRMb2FkKSB7XG4gICAgICAgICAgICB0aGlzLl9hZFVuaXRMb2FkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuX2ZsYXNoLnJlbW92ZUNhbGxiYWNrKHRoaXMuX2FkVW5pdExvYWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2FkVW5pdCkge1xuICAgICAgICAgICAgdGhpcy5fYWRVbml0Ll9kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLl9hZFVuaXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9hZEFkVW5pdChhZFVSTCwgY2FsbGJhY2spIHtcbiAgICAgICAgJHRocm93SWZEZXN0cm95ZWQuY2FsbCh0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5fYWRVbml0KSB7XG4gICAgICAgICAgICB0aGlzLl9kZXN0cm95QWRVbml0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZmxhc2guaXNSZWFkeSgpKSB7XG4gICAgICAgICAgICB0aGlzLl9hZFVuaXRMb2FkID0gKGVyciwgbWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkVW5pdCA9IG5ldyBWUEFJREFkVW5pdCh0aGlzLl9mbGFzaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2FkVW5pdExvYWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVyciwgdGhpcy5fYWRVbml0KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuX2ZsYXNoLmNhbGxGbGFzaE1ldGhvZCgnbG9hZEFkVW5pdCcsIFthZFVSTF0sIHRoaXMuX2FkVW5pdExvYWQpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkTGF0ZXIgPSB7dXJsOiBhZFVSTCwgY2FsbGJhY2t9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5sb2FkQWRVbml0KGNhbGxiYWNrID0gdW5kZWZpbmVkKSB7XG4gICAgICAgICR0aHJvd0lmRGVzdHJveWVkLmNhbGwodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fZGVzdHJveUFkVW5pdCgpO1xuICAgICAgICB0aGlzLl9mbGFzaC5jYWxsRmxhc2hNZXRob2QoJ3VubG9hZEFkVW5pdCcsIFtdLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGdldEZsYXNoSUQoKSB7XG4gICAgICAgICR0aHJvd0lmRGVzdHJveWVkLmNhbGwodGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9mbGFzaC5nZXRGbGFzaElEKCk7XG4gICAgfVxuICAgIGdldEZsYXNoVVJMKCkge1xuICAgICAgICAkdGhyb3dJZkRlc3Ryb3llZC5jYWxsKHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5fZmxhc2guZ2V0Rmxhc2hVUkwoKTtcbiAgICB9XG59XG5cbnNldFN0YXRpY1Byb3BlcnR5KCdpc1N1cHBvcnRlZCcsICgpID0+IHtcbiAgICByZXR1cm4gVlBBSURGTEFTSENsaWVudC5oYXNFeHRlcm5hbERlcGVuZGVuY2llcygpICYmIHN3Zm9iamVjdC5oYXNGbGFzaFBsYXllclZlcnNpb24oRkxBU0hfVkVSU0lPTik7XG59KTtcblxuc2V0U3RhdGljUHJvcGVydHkoJ2hhc0V4dGVybmFsRGVwZW5kZW5jaWVzJywgKCkgPT4ge1xuICAgIHJldHVybiAhIXdpbmRvdy5zd2ZvYmplY3Q7XG59KTtcblxuZnVuY3Rpb24gJHRocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgaWYodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgIHRocm93IG5ldyBlcnJvcignVlBBSURGbGFzaFRvSlMgaXMgZGVzdHJveWVkIScpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gJGxvYWRQZW5kZWRBZFVuaXQoKSB7XG4gICAgaWYgKHRoaXMuX2xvYWRMYXRlcikge1xuICAgICAgICB0aGlzLmxvYWRBZFVuaXQodGhpcy5fbG9hZExhdGVyLnVybCwgdGhpcy5fbG9hZExhdGVyLmNhbGxiYWNrKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX2xvYWRMYXRlcjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldFN0YXRpY1Byb3BlcnR5KHByb3BlcnR5TmFtZSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVlBBSURGTEFTSENsaWVudCwgcHJvcGVydHlOYW1lLCB7XG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG59XG5cbndpbmRvdy5WUEFJREZMQVNIQ2xpZW50ID0gVlBBSURGTEFTSENsaWVudDtcbm1vZHVsZS5leHBvcnRzID0gVlBBSURGTEFTSENsaWVudDtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgdW5pcXVlID0gcmVxdWlyZSgnLi91dGlscycpLnVuaXF1ZTtcbmxldCBpc1Bvc2l0aXZlSW50ID0gcmVxdWlyZSgnLi91dGlscycpLmlzUG9zaXRpdmVJbnQ7XG5sZXQgc3RyaW5nRW5kc1dpdGggPSByZXF1aXJlKCcuL3V0aWxzJykuc3RyaW5nRW5kc1dpdGg7XG5sZXQgU2luZ2xlVmFsdWVSZWdpc3RyeSA9IHJlcXVpcmUoJy4vcmVnaXN0cnknKS5TaW5nbGVWYWx1ZVJlZ2lzdHJ5O1xubGV0IE11bHRpcGxlVmFsdWVzUmVnaXN0cnkgPSByZXF1aXJlKCcuL3JlZ2lzdHJ5JykuTXVsdGlwbGVWYWx1ZXNSZWdpc3RyeTtcbmNvbnN0IHJlZ2lzdHJ5ID0gcmVxdWlyZSgnLi9qc0ZsYXNoQnJpZGdlUmVnaXN0cnknKTtcbmNvbnN0IFZQQUlEX0ZMQVNIX0hBTkRMRVIgPSAndnBhaWRfdmlkZW9fZmxhc2hfaGFuZGxlcic7XG5jb25zdCBFUlJPUiA9ICdBZEVycm9yJztcblxuZXhwb3J0IGNsYXNzIEpTRmxhc2hCcmlkZ2Uge1xuICAgIGNvbnN0cnVjdG9yIChlbCwgZmxhc2hVUkwsIGZsYXNoSUQsIHdpZHRoLCBoZWlnaHQsIGxvYWRIYW5kU2hha2UpIHtcbiAgICAgICAgdGhpcy5fZWwgPSBlbDtcbiAgICAgICAgdGhpcy5fZmxhc2hJRCA9IGZsYXNoSUQ7XG4gICAgICAgIHRoaXMuX2ZsYXNoVVJMID0gZmxhc2hVUkw7XG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5faGFuZGxlcnMgPSBuZXcgTXVsdGlwbGVWYWx1ZXNSZWdpc3RyeSgpO1xuICAgICAgICB0aGlzLl9jYWxsYmFja3MgPSBuZXcgU2luZ2xlVmFsdWVSZWdpc3RyeSgpO1xuICAgICAgICB0aGlzLl91bmlxdWVNZXRob2RJZGVudGlmaWVyID0gdW5pcXVlKHRoaXMuX2ZsYXNoSUQpO1xuICAgICAgICB0aGlzLl9yZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9oYW5kU2hha2VIYW5kbGVyID0gbG9hZEhhbmRTaGFrZTtcblxuICAgICAgICByZWdpc3RyeS5hZGRJbnN0YW5jZSh0aGlzLl9mbGFzaElELCB0aGlzKTtcbiAgICB9XG5cbiAgICBvbihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzLmFkZChldmVudE5hbWUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBvZmYoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlcnMucmVtb3ZlKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIG9mZkV2ZW50KGV2ZW50TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlcnMucmVtb3ZlQnlLZXkoZXZlbnROYW1lKTtcbiAgICB9XG5cbiAgICBvZmZBbGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVycy5yZW1vdmVBbGwoKTtcbiAgICB9XG5cbiAgICBjYWxsRmxhc2hNZXRob2QobWV0aG9kTmFtZSwgYXJncyA9IFtdLCBjYWxsYmFjayA9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgY2FsbGJhY2tJRCA9ICcnO1xuICAgICAgICAvLyBpZiBubyBjYWxsYmFjaywgc29tZSBtZXRob2RzIHRoZSByZXR1cm4gaXMgdm9pZCBzbyB0aGV5IGRvbid0IG5lZWQgY2FsbGJhY2tcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFja0lEID0gYCR7dGhpcy5fdW5pcXVlTWV0aG9kSWRlbnRpZmllcigpfV8ke21ldGhvZE5hbWV9YDtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2tJRCwgY2FsbGJhY2spO1xuICAgICAgICB9XG5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy9tZXRob2RzIGFyZSBjcmVhdGVkIGJ5IEV4dGVybmFsSW50ZXJmYWNlLmFkZENhbGxiYWNrIGluIGFzMyBjb2RlLCBpZiBmb3Igc29tZSByZWFzb24gaXQgZmFpbGVkXG4gICAgICAgICAgICAvL3RoaXMgY29kZSB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgICAgICAgICB0aGlzLl9lbFttZXRob2ROYW1lXShbY2FsbGJhY2tJRF0uY29uY2F0KGFyZ3MpKTtcblxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAkYXN5bmNDYWxsYmFjay5jYWxsKHRoaXMsIGNhbGxiYWNrSUQsIGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIC8vaWYgdGhlcmUgaXNuJ3QgYW55IGNhbGxiYWNrIHRvIHJldHVybiBlcnJvciB1c2UgZXJyb3IgZXZlbnQgaGFuZGxlclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyaWdnZXIoRVJST1IsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrcy5yZW1vdmVCeVZhbHVlKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZW1vdmVDYWxsYmFja0J5TWV0aG9kTmFtZShzdWZmaXgpIHtcbiAgICAgICAgdGhpcy5fY2FsbGJhY2tzLmZpbHRlcktleXMoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ0VuZHNXaXRoKGtleSwgc3VmZml4KTtcbiAgICAgICAgfSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MucmVtb3ZlKGtleSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbW92ZUFsbENhbGxiYWNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrcy5yZW1vdmVBbGwoKTtcbiAgICB9XG5cbiAgICBfdHJpZ2dlcihldmVudE5hbWUsIGV2ZW50KSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzLmdldChldmVudE5hbWUpLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICAvL2NsaWNrVGhydSBoYXMgdG8gYmUgc3luYywgaWYgbm90IHdpbGwgYmUgYmxvY2sgYnkgdGhlIHBvcHVwYmxvY2tlclxuICAgICAgICAgICAgaWYgKGV2ZW50TmFtZSA9PT0gJ0FkQ2xpY2tUaHJ1Jykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9oYW5kbGVycy5nZXQoZXZlbnROYW1lKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2NhbGxDYWxsYmFjayhtZXRob2ROYW1lLCBjYWxsYmFja0lELCBlcnIsIHJlc3VsdCkge1xuXG4gICAgICAgIGxldCBjYWxsYmFjayA9IHRoaXMuX2NhbGxiYWNrcy5nZXQoY2FsbGJhY2tJRCk7XG5cbiAgICAgICAgLy9ub3QgYWxsIG1ldGhvZHMgY2FsbGJhY2sncyBhcmUgbWFuZGF0b3J5XG4gICAgICAgIC8vYnV0IGlmIHRoZXJlIGV4aXN0IGFuIGVycm9yLCBmaXJlIHRoZSBlcnJvciBldmVudFxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoZXJyICYmIGNhbGxiYWNrSUQgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKEVSUk9SLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGFzeW5jQ2FsbGJhY2suY2FsbCh0aGlzLCBjYWxsYmFja0lELCBlcnIsIHJlc3VsdCk7XG5cbiAgICB9XG5cbiAgICBfaGFuZFNoYWtlKGVyciwgZGF0YSkge1xuICAgICAgICB0aGlzLl9yZWFkeSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLl9oYW5kU2hha2VIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9oYW5kU2hha2VIYW5kbGVyKGVyciwgZGF0YSk7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5faGFuZFNoYWtlSGFuZGxlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vbWV0aG9kcyBsaWtlIHByb3BlcnRpZXMgc3BlY2lmaWMgdG8gdGhpcyBpbXBsZW1lbnRhdGlvbiBvZiBWUEFJRFxuICAgIGdldFNpemUoKSB7XG4gICAgICAgIHJldHVybiB7d2lkdGg6IHRoaXMuX3dpZHRoLCBoZWlnaHQ6IHRoaXMuX2hlaWdodH07XG4gICAgfVxuICAgIHNldFNpemUobmV3V2lkdGgsIG5ld0hlaWdodCkge1xuICAgICAgICB0aGlzLl93aWR0aCA9IGlzUG9zaXRpdmVJbnQobmV3V2lkdGgsIHRoaXMuX3dpZHRoKTtcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaXNQb3NpdGl2ZUludChuZXdIZWlnaHQsIHRoaXMuX2hlaWdodCk7XG4gICAgICAgIHRoaXMuX2VsLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB0aGlzLl93aWR0aCk7XG4gICAgICAgIHRoaXMuX2VsLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgdGhpcy5faGVpZ2h0KTtcbiAgICB9XG4gICAgZ2V0V2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgICB9XG4gICAgc2V0V2lkdGgobmV3V2lkdGgpIHtcbiAgICAgICAgdGhpcy5zZXRTaXplKG5ld1dpZHRoLCB0aGlzLl9oZWlnaHQpO1xuICAgIH1cbiAgICBnZXRIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gICAgfVxuICAgIHNldEhlaWdodChuZXdIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5zZXRTaXplKHRoaXMuX3dpZHRoLCBuZXdIZWlnaHQpO1xuICAgIH1cbiAgICBnZXRGbGFzaElEKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmxhc2hJRDtcbiAgICB9XG4gICAgZ2V0Rmxhc2hVUkwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mbGFzaFVSTDtcbiAgICB9XG4gICAgaXNSZWFkeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlYWR5O1xuICAgIH1cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLm9mZkFsbCgpO1xuICAgICAgICB0aGlzLnJlbW92ZUFsbENhbGxiYWNrcygpO1xuICAgICAgICByZWdpc3RyeS5yZW1vdmVJbnN0YW5jZUJ5SUQodGhpcy5fZmxhc2hJRCk7XG4gICAgICAgIGlmICh0aGlzLl9lbC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9lbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuX2VsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gJGFzeW5jQ2FsbGJhY2soY2FsbGJhY2tJRCwgZXJyLCByZXN1bHQpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgbGV0IGNhbGxiYWNrID0gdGhpcy5fY2FsbGJhY2tzLmdldChjYWxsYmFja0lEKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLl9jYWxsYmFja3MucmVtb3ZlKGNhbGxiYWNrSUQpO1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgfSwgMCk7XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShKU0ZsYXNoQnJpZGdlLCAnVlBBSURfRkxBU0hfSEFORExFUicsIHtcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogVlBBSURfRkxBU0hfSEFORExFUlxufSk7XG5cbi8qKlxuICogRXh0ZXJuYWwgaW50ZXJmYWNlIGhhbmRsZXJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZmxhc2hJRCBpZGVudGlmaWVyIG9mIHRoZSBmbGFzaCB3aG8gY2FsbCB0aGlzXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZUlEIHdoYXQgdHlwZSBvZiBtZXNzYWdlIGlzLCBjYW4gYmUgJ2V2ZW50JyBvciAnY2FsbGJhY2snXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZU5hbWUgaWYgdGhlIHR5cGVJRCBpcyBhIGV2ZW50IHRoZSB0eXBlTmFtZSB3aWxsIGJlIHRoZSBldmVudE5hbWUsIGlmIGlzIGEgY2FsbGJhY2sgdGhlIHR5cGVJRCBpcyB0aGUgbWV0aG9kTmFtZSB0aGF0IGlzIHJlbGF0ZWQgdGhpcyBjYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd9IGNhbGxiYWNrSUQgb25seSBhcHBsaWVzIHdoZW4gdGhlIHR5cGVJRCBpcyAnY2FsbGJhY2snLCBpZGVudGlmaWVyIG9mIHRoZSBjYWxsYmFjayB0byBjYWxsXG4gKiBAcGFyYW0ge29iamVjdH0gZXJyb3IgZXJyb3Igb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICovXG53aW5kb3dbVlBBSURfRkxBU0hfSEFORExFUl0gPSAoZmxhc2hJRCwgdHlwZUlELCB0eXBlTmFtZSwgY2FsbGJhY2tJRCwgZXJyb3IsIGRhdGEpID0+IHtcbiAgICBsZXQgaW5zdGFuY2UgPSByZWdpc3RyeS5nZXRJbnN0YW5jZUJ5SUQoZmxhc2hJRCk7XG4gICAgaWYgKCFpbnN0YW5jZSkgcmV0dXJuO1xuICAgIGlmICh0eXBlTmFtZSA9PT0gJ2hhbmRTaGFrZScpIHtcbiAgICAgICAgaW5zdGFuY2UuX2hhbmRTaGFrZShlcnJvciwgZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVJRCAhPT0gJ2V2ZW50Jykge1xuICAgICAgICAgICAgaW5zdGFuY2UuX2NhbGxDYWxsYmFjayh0eXBlTmFtZSwgY2FsbGJhY2tJRCwgZXJyb3IsIGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5zdGFuY2UuX3RyaWdnZXIodHlwZU5hbWUsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5sZXQgU2luZ2xlVmFsdWVSZWdpc3RyeSA9IHJlcXVpcmUoJy4vcmVnaXN0cnknKS5TaW5nbGVWYWx1ZVJlZ2lzdHJ5O1xubGV0IGluc3RhbmNlcyA9IG5ldyBTaW5nbGVWYWx1ZVJlZ2lzdHJ5KCk7XG5cbmNvbnN0IEpTRmxhc2hCcmlkZ2VSZWdpc3RyeSA9IHt9O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTRmxhc2hCcmlkZ2VSZWdpc3RyeSwgJ2FkZEluc3RhbmNlJywge1xuICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgIHZhbHVlOiBmdW5jdGlvbiAoaWQsIGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlcy5hZGQoaWQsIGluc3RhbmNlKTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTRmxhc2hCcmlkZ2VSZWdpc3RyeSwgJ2dldEluc3RhbmNlQnlJRCcsIHtcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZXMuZ2V0KGlkKTtcbiAgICB9XG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEpTRmxhc2hCcmlkZ2VSZWdpc3RyeSwgJ3JlbW92ZUluc3RhbmNlQnlJRCcsIHtcbiAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZXMucmVtb3ZlKGlkKTtcbiAgICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBKU0ZsYXNoQnJpZGdlUmVnaXN0cnk7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGNsYXNzIE11bHRpcGxlVmFsdWVzUmVnaXN0cnkge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0cmllcyA9IHt9O1xuICAgIH1cbiAgICBhZGQgKGlkLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIXRoaXMuX3JlZ2lzdHJpZXNbaWRdKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RyaWVzW2lkXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9yZWdpc3RyaWVzW2lkXS5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lzdHJpZXNbaWRdLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldCAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdHJpZXNbaWRdIHx8IFtdO1xuICAgIH1cbiAgICBmaWx0ZXJLZXlzIChoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9yZWdpc3RyaWVzKS5maWx0ZXIoaGFuZGxlcik7XG4gICAgfVxuICAgIGZpbmRCeVZhbHVlICh2YWx1ZSkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuX3JlZ2lzdHJpZXMpLmZpbHRlcigoa2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0cmllc1trZXldLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfVxuICAgIHJlbW92ZShrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmICghdGhpcy5fcmVnaXN0cmllc1trZXldKSB7IHJldHVybjsgfVxuXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuX3JlZ2lzdHJpZXNba2V5XS5pbmRleE9mKHZhbHVlKTtcblxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7IHJldHVybjsgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0cmllc1trZXldLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICAgIHJlbW92ZUJ5S2V5IChpZCkge1xuICAgICAgICBsZXQgb2xkID0gdGhpcy5fcmVnaXN0cmllc1tpZF07XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9yZWdpc3RyaWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIG9sZDtcbiAgICB9XG4gICAgcmVtb3ZlQnlWYWx1ZSAodmFsdWUpIHtcbiAgICAgICAgbGV0IGtleXMgPSB0aGlzLmZpbmRCeVZhbHVlKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGtleXMubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZShrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJlbW92ZUFsbCgpIHtcbiAgICAgICAgbGV0IG9sZCA9IHRoaXMuX3JlZ2lzdHJpZXM7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJpZXMgPSB7fTtcbiAgICAgICAgcmV0dXJuIG9sZDtcbiAgICB9XG4gICAgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3JlZ2lzdHJpZXMpLmxlbmd0aDtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTaW5nbGVWYWx1ZVJlZ2lzdHJ5IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJpZXMgPSB7fTtcbiAgICB9XG4gICAgYWRkIChpZCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0cmllc1tpZF0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0cmllc1tpZF07XG4gICAgfVxuICAgIGZpbHRlcktleXMgKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuX3JlZ2lzdHJpZXMpLmZpbHRlcihoYW5kbGVyKTtcbiAgICB9XG4gICAgZmluZEJ5VmFsdWUgKHZhbHVlKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXModGhpcy5fcmVnaXN0cmllcykuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyaWVzW2tleV0gPT09IHZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9XG4gICAgcmVtb3ZlIChpZCkge1xuICAgICAgICBsZXQgb2xkID0gdGhpcy5fcmVnaXN0cmllc1tpZF07XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9yZWdpc3RyaWVzW2lkXTtcbiAgICAgICAgcmV0dXJuIG9sZDtcbiAgICB9XG4gICAgcmVtb3ZlQnlWYWx1ZSAodmFsdWUpIHtcbiAgICAgICAgbGV0IGtleXMgPSB0aGlzLmZpbmRCeVZhbHVlKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGtleXMubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbW92ZShrZXkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVtb3ZlQWxsKCkge1xuICAgICAgICBsZXQgb2xkID0gdGhpcy5fcmVnaXN0cmllcztcbiAgICAgICAgdGhpcy5fcmVnaXN0cmllcyA9IHt9O1xuICAgICAgICByZXR1cm4gb2xkO1xuICAgIH1cbiAgICBzaXplKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcmVnaXN0cmllcykubGVuZ3RoO1xuICAgIH1cbn1cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gdW5pcXVlKHByZWZpeCkge1xuICAgIGxldCBjb3VudCA9IC0xO1xuICAgIHJldHVybiBmID0+IHtcbiAgICAgICAgcmV0dXJuIGAke3ByZWZpeH1fJHsrK2NvdW50fWA7XG4gICAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vb3AoKSB7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGxiYWNrVGltZW91dCh0aW1lciwgb25TdWNjZXNzLCBvblRpbWVvdXQpIHtcblxuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgICAgb25TdWNjZXNzID0gbm9vcDtcbiAgICAgICAgb25UaW1lb3V0KCk7XG5cbiAgICB9LCB0aW1lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIG9uU3VjY2Vzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoSUQocGFyZW50LCBpZCkge1xuICAgIHZhciBuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuRWwuaWQgPSBpZDtcbiAgICBwYXJlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5FbCk7XG4gICAgcmV0dXJuIG5FbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUG9zaXRpdmVJbnQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobmV3VmFsKSkgJiYgaXNGaW5pdGUobmV3VmFsKSAmJiBuZXdWYWwgPiAwID8gbmV3VmFsIDogb2xkVmFsO1xufVxuXG5sZXQgZW5kc1dpdGggPSAoZnVuY3Rpb24gKCkge1xuICAgIGlmIChTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKSByZXR1cm4gU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aDtcbiAgICByZXR1cm4gZnVuY3Rpb24gZW5kc1dpdGggKHNlYXJjaFN0cmluZywgcG9zaXRpb24pIHtcbiAgICAgICAgdmFyIHN1YmplY3RTdHJpbmcgPSB0aGlzLnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHBvc2l0aW9uID4gc3ViamVjdFN0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gc3ViamVjdFN0cmluZy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcG9zaXRpb24gLT0gc2VhcmNoU3RyaW5nLmxlbmd0aDtcbiAgICAgICAgdmFyIGxhc3RJbmRleCA9IHN1YmplY3RTdHJpbmcuaW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTtcbiAgICAgICAgcmV0dXJuIGxhc3RJbmRleCAhPT0gLTEgJiYgbGFzdEluZGV4ID09PSBwb3NpdGlvbjtcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRW5kc1dpdGgoc3RyaW5nLCBzZWFyY2gpIHtcbiAgICByZXR1cm4gZW5kc1dpdGguY2FsbChzdHJpbmcsIHNlYXJjaCk7XG59XG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTUVUSE9EUyA9IFtcbiAgICAnaGFuZHNoYWtlVmVyc2lvbicsXG4gICAgJ2luaXRBZCcsXG4gICAgJ3N0YXJ0QWQnLFxuICAgICdzdG9wQWQnLFxuICAgICdza2lwQWQnLCAvLyBWUEFJRCAyLjAgbmV3IG1ldGhvZFxuICAgICdyZXNpemVBZCcsXG4gICAgJ3BhdXNlQWQnLFxuICAgICdyZXN1bWVBZCcsXG4gICAgJ2V4cGFuZEFkJyxcbiAgICAnY29sbGFwc2VBZCcsXG4gICAgJ3N1YnNjcmliZScsXG4gICAgJ3Vuc3Vic2NyaWJlJ1xuXTtcblxudmFyIEVWRU5UUyA9IFtcbiAgICAnQWRMb2FkZWQnLFxuICAgICdBZFN0YXJ0ZWQnLFxuICAgICdBZFN0b3BwZWQnLFxuICAgICdBZFNraXBwZWQnLFxuICAgICdBZFNraXBwYWJsZVN0YXRlQ2hhbmdlJywgLy8gVlBBSUQgMi4wIG5ldyBldmVudFxuICAgICdBZFNpemVDaGFuZ2UnLCAvLyBWUEFJRCAyLjAgbmV3IGV2ZW50XG4gICAgJ0FkTGluZWFyQ2hhbmdlJyxcbiAgICAnQWREdXJhdGlvbkNoYW5nZScsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRFeHBhbmRlZENoYW5nZScsXG4gICAgJ0FkUmVtYWluaW5nVGltZUNoYW5nZScsIC8vIFtEZXByZWNhdGVkIGluIDIuMF0gYnV0IHdpbGwgYmUgc3RpbGwgZmlyZWQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgJ0FkVm9sdW1lQ2hhbmdlJyxcbiAgICAnQWRJbXByZXNzaW9uJyxcbiAgICAnQWRWaWRlb1N0YXJ0JyxcbiAgICAnQWRWaWRlb0ZpcnN0UXVhcnRpbGUnLFxuICAgICdBZFZpZGVvTWlkcG9pbnQnLFxuICAgICdBZFZpZGVvVGhpcmRRdWFydGlsZScsXG4gICAgJ0FkVmlkZW9Db21wbGV0ZScsXG4gICAgJ0FkQ2xpY2tUaHJ1JyxcbiAgICAnQWRJbnRlcmFjdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZXZlbnRcbiAgICAnQWRVc2VyQWNjZXB0SW52aXRhdGlvbicsXG4gICAgJ0FkVXNlck1pbmltaXplJyxcbiAgICAnQWRVc2VyQ2xvc2UnLFxuICAgICdBZFBhdXNlZCcsXG4gICAgJ0FkUGxheWluZycsXG4gICAgJ0FkTG9nJyxcbiAgICAnQWRFcnJvcidcbl07XG5cbnZhciBHRVRURVJTID0gW1xuICAgICdnZXRBZExpbmVhcicsXG4gICAgJ2dldEFkV2lkdGgnLCAvLyBWUEFJRCAyLjAgbmV3IGdldHRlclxuICAgICdnZXRBZEhlaWdodCcsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkRXhwYW5kZWQnLFxuICAgICdnZXRBZFNraXBwYWJsZVN0YXRlJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRSZW1haW5pbmdUaW1lJyxcbiAgICAnZ2V0QWREdXJhdGlvbicsIC8vIFZQQUlEIDIuMCBuZXcgZ2V0dGVyXG4gICAgJ2dldEFkVm9sdW1lJyxcbiAgICAnZ2V0QWRDb21wYW5pb25zJywgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbiAgICAnZ2V0QWRJY29ucycgLy8gVlBBSUQgMi4wIG5ldyBnZXR0ZXJcbl07XG5cbnZhciBTRVRURVJTID0gW1xuICAgICdzZXRBZFZvbHVtZSdcbl07XG5cblxuLyoqXG4gKiBUaGlzIGNhbGxiYWNrIGlzIGRpc3BsYXllZCBhcyBnbG9iYWwgbWVtYmVyLiBUaGUgY2FsbGJhY2sgdXNlIG5vZGVqcyBlcnJvci1maXJzdCBjYWxsYmFjayBzdHlsZVxuICogQGNhbGxiYWNrIE5vZGVTdHlsZUNhbGxiYWNrXG4gKiBAcGFyYW0ge3N0cmluZ3xudWxsfVxuICogQHBhcmFtIHt1bmRlZmluZWR8b2JqZWN0fVxuICovXG5cblxuLyoqXG4gKiBJVlBBSURBZFVuaXRcbiAqXG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY3JlYXRpdmVcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsXG4gKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IHZpZGVvXG4gKi9cbmZ1bmN0aW9uIElWUEFJREFkVW5pdChjcmVhdGl2ZSwgZWwsIHZpZGVvKSB7fVxuXG5cbi8qKlxuICogaGFuZHNoYWtlVmVyc2lvblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBWUEFJRFZlcnNpb25cbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuaGFuZHNoYWtlVmVyc2lvbiA9IGZ1bmN0aW9uIChWUEFJRFZlcnNpb24sIGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBpbml0QWRcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAqIEBwYXJhbSB7c3RyaW5nfSB2aWV3TW9kZSBjYW4gYmUgJ25vcm1hbCcsICd0aHVtYm5haWwnIG9yICdmdWxsc2NyZWVuJ1xuICogQHBhcmFtIHtudW1iZXJ9IGRlc2lyZWRCaXRyYXRlIGluZGljYXRlcyB0aGUgZGVzaXJlZCBiaXRyYXRlIGluIGticHNcbiAqIEBwYXJhbSB7b2JqZWN0fSBbY3JlYXRpdmVEYXRhXSB1c2VkIGZvciBhZGRpdGlvbmFsIGluaXRpYWxpemF0aW9uIGRhdGFcbiAqIEBwYXJhbSB7b2JqZWN0fSBbZW52aXJvbm1lbnRWYXJzXSB1c2VkIGZvciBwYXNzaW5nIGltcGxlbWVudGF0aW9uLXNwZWNpZmljIG9mIGpzIHZlcnNpb25cbiAqIEBwYXJhbSB7Tm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuaW5pdEFkID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGRlc2lyZWRCaXRyYXRlLCBjcmVhdGl2ZURhdGEsIGVudmlyb25tZW50VmFycywgY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHN0YXJ0QWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnN0YXJ0QWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc3RvcEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zdG9wQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogc2tpcEFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5za2lwQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogcmVzaXplQWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLnJlc2l6ZUFkID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBwYXVzZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5wYXVzZUFkID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHJlc3VtZUFkXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5yZXN1bWVBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBleHBhbmRBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZXhwYW5kQWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogY29sbGFwc2VBZFxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuY29sbGFwc2VBZCA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBzdWJzY3JpYmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0XG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24oZXZlbnQsIGhhbmRsZXIsIGNvbnRleHQpIHt9O1xuXG4vKipcbiAqIHN0YXJ0QWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXJcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyKSB7fTtcblxuXG5cbi8qKlxuICogZ2V0QWRMaW5lYXJcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkTGluZWFyID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkV2lkdGhcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkV2lkdGggPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRIZWlnaHRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkSGVpZ2h0ID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkRXhwYW5kZWRcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkRXhwYW5kZWQgPSBmdW5jdGlvbihjYWxsYmFjaykge307XG5cbi8qKlxuICogZ2V0QWRTa2lwcGFibGVTdGF0ZVxuICpcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbklWUEFJREFkVW5pdC5wcm90b3R5cGUuZ2V0QWRTa2lwcGFibGVTdGF0ZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZFJlbWFpbmluZ1RpbWVcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkUmVtYWluaW5nVGltZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZER1cmF0aW9uXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZER1cmF0aW9uID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIGdldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZENvbXBhbmlvbnNcbiAqXG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5JVlBBSURBZFVuaXQucHJvdG90eXBlLmdldEFkQ29tcGFuaW9ucyA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7fTtcblxuLyoqXG4gKiBnZXRBZEljb25zXG4gKlxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5nZXRBZEljb25zID0gZnVuY3Rpb24oY2FsbGJhY2spIHt9O1xuXG4vKipcbiAqIHNldEFkVm9sdW1lXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZVxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xuSVZQQUlEQWRVbml0LnByb3RvdHlwZS5zZXRBZFZvbHVtZSA9IGZ1bmN0aW9uKHZvbHVtZSwgY2FsbGJhY2spIHt9O1xuXG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdNRVRIT0RTJywgTUVUSE9EUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdHRVRURVJTJywgR0VUVEVSUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdTRVRURVJTJywgU0VUVEVSUyk7XG5hZGRTdGF0aWNUb0ludGVyZmFjZShJVlBBSURBZFVuaXQsICdFVkVOVFMnLCAgRVZFTlRTKTtcblxuXG52YXIgVlBBSUQxX01FVEhPRFMgPSBNRVRIT0RTLmZpbHRlcihmdW5jdGlvbihtZXRob2QpIHtcbiAgICByZXR1cm4gWydza2lwQWQnXS5pbmRleE9mKG1ldGhvZCkgPT09IC0xO1xufSk7XG5cbmFkZFN0YXRpY1RvSW50ZXJmYWNlKElWUEFJREFkVW5pdCwgJ2NoZWNrVlBBSURJbnRlcmZhY2UnLCBmdW5jdGlvbiBjaGVja1ZQQUlESW50ZXJmYWNlIChjcmVhdGl2ZSkge1xuICAgIHZhciByZXN1bHQgPSBWUEFJRDFfTUVUSE9EUy5ldmVyeShmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBjcmVhdGl2ZVtrZXldID09PSAnZnVuY3Rpb24nO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBJVlBBSURBZFVuaXQ7XG5cbmZ1bmN0aW9uIGFkZFN0YXRpY1RvSW50ZXJmYWNlKEludGVyZmFjZSwgbmFtZSwgdmFsdWUpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSW50ZXJmYWNlLCBuYW1lLCB7XG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfSk7XG59XG5cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIElWUEFJREFkVW5pdCA9IHJlcXVpcmUoJy4vSVZQQUlEQWRVbml0Jyk7XG52YXIgU3Vic2NyaWJlciA9IHJlcXVpcmUoJy4vc3Vic2NyaWJlcicpO1xudmFyIGNoZWNrVlBBSURJbnRlcmZhY2UgPSBJVlBBSURBZFVuaXQuY2hlY2tWUEFJREludGVyZmFjZTtcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBNRVRIT0RTID0gSVZQQUlEQWRVbml0Lk1FVEhPRFM7XG52YXIgRVJST1IgPSAnQWRFcnJvcic7XG52YXIgQURfQ0xJQ0sgPSAnQWRDbGlja1RocnUnO1xudmFyIEZJTFRFUkVEX0VWRU5UUyA9IElWUEFJREFkVW5pdC5FVkVOVFMuZmlsdGVyKGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBldmVudCAhPSBBRF9DTElDSztcbn0pO1xuXG4vKipcbiAqIFRoaXMgY2FsbGJhY2sgaXMgZGlzcGxheWVkIGFzIGdsb2JhbCBtZW1iZXIuIFRoZSBjYWxsYmFjayB1c2Ugbm9kZWpzIGVycm9yLWZpcnN0IGNhbGxiYWNrIHN0eWxlXG4gKiBAY2FsbGJhY2sgTm9kZVN0eWxlQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfG51bGx9XG4gKiBAcGFyYW0ge3VuZGVmaW5lZHxvYmplY3R9XG4gKi9cblxuXG4vKipcbiAqIFZQQUlEQWRVbml0XG4gKiBAY2xhc3NcbiAqXG4gKiBAcGFyYW0gVlBBSURDcmVhdGl2ZVxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gW2VsXSB0aGlzIHdpbGwgYmUgdXNlZCBpbiBpbml0QWQgZW52aXJvbm1lbnRWYXJzLnNsb3QgaWYgZGVmaW5lZFxuICogQHBhcmFtIHtIVE1MVmlkZW9FbGVtZW50fSBbdmlkZW9dIHRoaXMgd2lsbCBiZSB1c2VkIGluIGluaXRBZCBlbnZpcm9ubWVudFZhcnMudmlkZW9TbG90IGlmIGRlZmluZWRcbiAqL1xuZnVuY3Rpb24gVlBBSURBZFVuaXQoVlBBSURDcmVhdGl2ZSwgZWwsIHZpZGVvLCBpZnJhbWUpIHtcbiAgICB0aGlzLl9pc1ZhbGlkID0gY2hlY2tWUEFJREludGVyZmFjZShWUEFJRENyZWF0aXZlKTtcbiAgICBpZiAodGhpcy5faXNWYWxpZCkge1xuICAgICAgICB0aGlzLl9jcmVhdGl2ZSA9IFZQQUlEQ3JlYXRpdmU7XG4gICAgICAgIHRoaXMuX2VsID0gZWw7XG4gICAgICAgIHRoaXMuX3ZpZGVvRWwgPSB2aWRlbztcbiAgICAgICAgdGhpcy5faWZyYW1lID0gaWZyYW1lO1xuICAgICAgICB0aGlzLl9zdWJzY3JpYmVycyA9IG5ldyBTdWJzY3JpYmVyKCk7XG4gICAgICAgICRhZGRFdmVudHNTdWJzY3JpYmVycy5jYWxsKHRoaXMpO1xuICAgIH1cbn1cblxuVlBBSURBZFVuaXQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJVlBBSURBZFVuaXQucHJvdG90eXBlKTtcblxuLyoqXG4gKiBpc1ZhbGlkVlBBSURBZCB3aWxsIHJldHVybiBpZiB0aGUgVlBBSURDcmVhdGl2ZSBwYXNzZWQgaW4gY29uc3RydWN0b3IgaXMgdmFsaWQgb3Igbm90XG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLmlzVmFsaWRWUEFJREFkID0gZnVuY3Rpb24gaXNWYWxpZFZQQUlEQWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XG59O1xuXG5JVlBBSURBZFVuaXQuTUVUSE9EUy5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgIC8vTk9URTogdGhpcyBtZXRob2RzIGFyZ3VtZW50cyBvcmRlciBhcmUgaW1wbGVtZW50ZWQgZGlmZmVyZW50bHkgZnJvbSB0aGUgc3BlY1xuICAgIHZhciBpZ25vcmVzID0gW1xuICAgICAgICAnc3Vic2NyaWJlJyxcbiAgICAgICAgJ3Vuc3Vic2NyaWJlJyxcbiAgICAgICAgJ2luaXRBZCdcbiAgICBdO1xuXG4gICAgaWYgKGlnbm9yZXMuaW5kZXhPZihtZXRob2QpICE9PSAtMSkgcmV0dXJuO1xuXG4gICAgVlBBSURBZFVuaXQucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmlhdHkgPSBJVlBBSURBZFVuaXQucHJvdG90eXBlW21ldGhvZF0ubGVuZ3RoO1xuICAgICAgICAvLyBUT0RPIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQvd2lraS9PcHRpbWl6YXRpb24ta2lsbGVycyMzMi1sZWFraW5nLWFyZ3VtZW50c1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IChhcmlhdHkgPT09IGFyZ3MubGVuZ3RoKSA/IGFyZ3MucG9wKCkgOiB1bmRlZmluZWQ7XG5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IG51bGw7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX2NyZWF0aXZlW21ldGhvZF0uYXBwbHkodGhpcy5fY3JlYXRpdmUsIGFyZ3MpO1xuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYWxsT3JUcmlnZ2VyRXZlbnQoY2FsbGJhY2ssIHRoaXMuX3N1YnNjcmliZXJzLCBlcnJvciwgcmVzdWx0KTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAwKTtcbiAgICB9O1xufSk7XG5cblxuLyoqXG4gKiBpbml0QWQgY29uY3JlYXRlIGltcGxlbWVudGF0aW9uXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gKiBAcGFyYW0ge3N0cmluZ30gdmlld01vZGUgY2FuIGJlICdub3JtYWwnLCAndGh1bWJuYWlsJyBvciAnZnVsbHNjcmVlbidcbiAqIEBwYXJhbSB7bnVtYmVyfSBkZXNpcmVkQml0cmF0ZSBpbmRpY2F0ZXMgdGhlIGRlc2lyZWQgYml0cmF0ZSBpbiBrYnBzXG4gKiBAcGFyYW0ge29iamVjdH0gW2NyZWF0aXZlRGF0YV0gdXNlZCBmb3IgYWRkaXRpb25hbCBpbml0aWFsaXphdGlvbiBkYXRhXG4gKiBAcGFyYW0ge29iamVjdH0gW2Vudmlyb25tZW50VmFyc10gdXNlZCBmb3IgcGFzc2luZyBpbXBsZW1lbnRhdGlvbi1zcGVjaWZpYyBvZiBqcyB2ZXJzaW9uLCBpZiBlbCAmIHZpZGVvIHdhcyB1c2VkIGluIGNvbnN0cnVjdG9yIHNsb3QgJiB2aWRlb1Nsb3Qgd2lsbCBiZSBhZGRlZCB0byB0aGUgb2JqZWN0XG4gKiBAcGFyYW0ge05vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5WUEFJREFkVW5pdC5wcm90b3R5cGUuaW5pdEFkID0gZnVuY3Rpb24gaW5pdEFkKHdpZHRoLCBoZWlnaHQsIHZpZXdNb2RlLCBkZXNpcmVkQml0cmF0ZSwgY3JlYXRpdmVEYXRhLCBlbnZpcm9ubWVudFZhcnMsIGNhbGxiYWNrKSB7XG4gICAgY3JlYXRpdmVEYXRhID0gY3JlYXRpdmVEYXRhIHx8IHt9O1xuICAgIGVudmlyb25tZW50VmFycyA9IHV0aWxzLmV4dGVuZCh7XG4gICAgICAgIHNsb3Q6IHRoaXMuX2VsLFxuICAgICAgICB2aWRlb1Nsb3Q6IHRoaXMuX3ZpZGVvRWxcbiAgICB9LCBlbnZpcm9ubWVudFZhcnMgfHwge30pO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0aXZlLmluaXRBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGNyZWF0aXZlRGF0YSwgZW52aXJvbm1lbnRWYXJzKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZXJyb3IgPSBlO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IpO1xuICAgIH0uYmluZCh0aGlzKSwgMCk7XG59O1xuXG4vKipcbiAqIHN1YnNjcmliZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtub2RlU3R5bGVDYWxsYmFja30gaGFuZGxlclxuICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHRcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShldmVudCwgaGFuZGxlciwgY29udGV4dCkge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnN1YnNjcmliZShoYW5kbGVyLCBldmVudCwgY29udGV4dCk7XG59O1xuXG5cbi8qKlxuICogdW5zdWJzY3JpYmVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGhhbmRsZXJcbiAqL1xuVlBBSURBZFVuaXQucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnQsIGhhbmRsZXIpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy51bnN1YnNjcmliZShoYW5kbGVyLCBldmVudCk7XG59O1xuXG4vL2FsaWFzXG5WUEFJREFkVW5pdC5wcm90b3R5cGUub24gPSBWUEFJREFkVW5pdC5wcm90b3R5cGUuc3Vic2NyaWJlO1xuVlBBSURBZFVuaXQucHJvdG90eXBlLm9mZiA9IFZQQUlEQWRVbml0LnByb3RvdHlwZS51bnN1YnNjcmliZTtcblxuSVZQQUlEQWRVbml0LkdFVFRFUlMuZm9yRWFjaChmdW5jdGlvbihnZXR0ZXIpIHtcbiAgICBWUEFJREFkVW5pdC5wcm90b3R5cGVbZ2V0dGVyXSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgdmFyIHJlc3VsdCwgZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLl9jcmVhdGl2ZVtnZXR0ZXJdKCk7XG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgdGhpcy5fc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpO1xuICAgICAgICB9LmJpbmQodGhpcyksIDApO1xuICAgIH07XG59KTtcblxuLyoqXG4gKiBzZXRBZFZvbHVtZVxuICpcbiAqIEBwYXJhbSB2b2x1bWVcbiAqIEBwYXJhbSB7bm9kZVN0eWxlQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cblZQQUlEQWRVbml0LnByb3RvdHlwZS5zZXRBZFZvbHVtZSA9IGZ1bmN0aW9uIHNldEFkVm9sdW1lKHZvbHVtZSwgY2FsbGJhY2spIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgcmVzdWx0LCBlcnJvciA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGl2ZS5zZXRBZFZvbHVtZSh2b2x1bWUpO1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fY3JlYXRpdmUuZ2V0QWRWb2x1bWUoKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBlcnJvciA9IGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICBlcnJvciA9IHV0aWxzLnZhbGlkYXRlKHJlc3VsdCA9PT0gdm9sdW1lLCAnZmFpbGVkIHRvIGFwcGx5IHZvbHVtZTogJyArIHZvbHVtZSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbE9yVHJpZ2dlckV2ZW50KGNhbGxiYWNrLCB0aGlzLl9zdWJzY3JpYmVycywgZXJyb3IsIHJlc3VsdCk7XG4gICAgfS5iaW5kKHRoaXMpLCAwKTtcbn07XG5cblZQQUlEQWRVbml0LnByb3RvdHlwZS5fZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdG9wQWQoKTtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy51bnN1YnNjcmliZUFsbCgpO1xufTtcblxuZnVuY3Rpb24gJGFkZEV2ZW50c1N1YnNjcmliZXJzKCkge1xuICAgIC8vIHNvbWUgYWRzIGltcGxlbWVudFxuICAgIC8vIHNvIHRoZXkgb25seSBoYW5kbGUgb25lIHN1YnNjcmliZXJcbiAgICAvLyB0byBoYW5kbGUgdGhpcyB3ZSBjcmVhdGUgb3VyIG9uZVxuICAgIEZJTFRFUkVEX0VWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLl9jcmVhdGl2ZS5zdWJzY3JpYmUoJHRyaWdnZXIuYmluZCh0aGlzLCBldmVudCksIGV2ZW50KTtcbiAgICB9LmJpbmQodGhpcykpO1xuXG4gICAgLy8gbWFwIHRoZSBjbGljayBldmVudCB0byBiZSBhbiBvYmplY3QgaW5zdGVhZCBvZiBkZXBlbmRpbmcgb2YgdGhlIG9yZGVyIG9mIHRoZSBhcmd1bWVudHNcbiAgICAvLyBhbmQgdG8gYmUgY29uc2lzdGVudCB3aXRoIHRoZSBmbGFzaFxuICAgIHRoaXMuX2NyZWF0aXZlLnN1YnNjcmliZSgkY2xpY2tUaHJ1SG9vay5iaW5kKHRoaXMpLCBBRF9DTElDSyk7XG5cbiAgICAvLyBiZWNhdXNlIHdlIGFyZSBhZGRpbmcgdGhlIGVsZW1lbnQgaW5zaWRlIHRoZSBpZnJhbWVcbiAgICAvLyB0aGUgdXNlciBpcyBub3QgYWJsZSB0byBjbGljayBpbiB0aGUgdmlkZW9cbiAgICBpZiAodGhpcy5fdmlkZW9FbCkge1xuICAgICAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gdGhpcy5faWZyYW1lLmNvbnRlbnREb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgIHZhciB2aWRlb0VsID0gdGhpcy5fdmlkZW9FbDtcbiAgICAgICAgZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2aWRlb0VsLmNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gJGNsaWNrVGhydUhvb2sodXJsLCBpZCwgcGxheWVySGFuZGxlcykge1xuICAgIHRoaXMuX3N1YnNjcmliZXJzLnRyaWdnZXJTeW5jKEFEX0NMSUNLLCB7dXJsOiB1cmwsIGlkOiBpZCwgcGxheWVySGFuZGxlczogcGxheWVySGFuZGxlc30pO1xufVxuXG5mdW5jdGlvbiAkdHJpZ2dlcihldmVudCkge1xuICAgIC8vIFRPRE8gYXZvaWQgbGVha2luZyBhcmd1bWVudHNcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcGV0a2FhbnRvbm92L2JsdWViaXJkL3dpa2kvT3B0aW1pemF0aW9uLWtpbGxlcnMjMzItbGVha2luZy1hcmd1bWVudHNcbiAgICB0aGlzLl9zdWJzY3JpYmVycy50cmlnZ2VyKGV2ZW50LCBBcnJheS5wcm90b3R5cGUuc2xpY2UoYXJndW1lbnRzLCAxKSk7XG59XG5cbmZ1bmN0aW9uIGNhbGxPclRyaWdnZXJFdmVudChjYWxsYmFjaywgc3Vic2NyaWJlcnMsIGVycm9yLCByZXN1bHQpIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IsIHJlc3VsdCk7XG4gICAgfSBlbHNlIGlmIChlcnJvcikge1xuICAgICAgICBzdWJzY3JpYmVycy50cmlnZ2VyKEVSUk9SLCBlcnJvcik7XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlEQWRVbml0O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciB1bmlxdWUgPSB1dGlscy51bmlxdWUoJ3ZwYWlkSWZyYW1lJyk7XG52YXIgVlBBSURBZFVuaXQgPSByZXF1aXJlKCcuL1ZQQUlEQWRVbml0Jyk7XG5cbnZhciBkZWZhdWx0VGVtcGxhdGUgPSAnPCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz1cImVuXCI+PGhlYWQ+PG1ldGEgY2hhcnNldD1cIlVURi04XCI+PC9oZWFkPjxib2R5IHN0eWxlPVwibWFyZ2luOjA7cGFkZGluZzowXCI+JztcbmRlZmF1bHRUZW1wbGF0ZSArPSAnPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwie3tpZnJhbWVVUkxfSlN9fVwiPjwvc2NyaXB0PjxzY3JpcHQ+JztcbmRlZmF1bHRUZW1wbGF0ZSArPSAncGFyZW50LnBvc3RNZXNzYWdlKFxcJ3tcImV2ZW50XCI6IFwicmVhZHlcIiwgXCJpZFwiOiBcInt7aWZyYW1lSUR9fVwifVxcJywgd2luZG93LmxvY2F0aW9uLm9yaWdpbik7JztcbmRlZmF1bHRUZW1wbGF0ZSArPSAnPC9zY3JpcHQ+PGRpdiBjbGFzcz1cImFkLWVsZW1lbnRcIj48L2Rpdj48L2JvZHk+PC9odG1sPic7XG5cbnZhciBBRF9TVE9QUEVEID0gJ0FkU3RvcHBlZCc7XG5cbi8qKlxuICogVGhpcyBjYWxsYmFjayBpcyBkaXNwbGF5ZWQgYXMgZ2xvYmFsIG1lbWJlci4gVGhlIGNhbGxiYWNrIHVzZSBub2RlanMgZXJyb3ItZmlyc3QgY2FsbGJhY2sgc3R5bGVcbiAqIEBjYWxsYmFjayBOb2RlU3R5bGVDYWxsYmFja1xuICogQHBhcmFtIHtzdHJpbmd8bnVsbH1cbiAqIEBwYXJhbSB7dW5kZWZpbmVkfG9iamVjdH1cbiAqL1xuXG4vKipcbiAqIFZQQUlESFRNTDVDbGllbnRcbiAqIEBjbGFzc1xuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsIHRoYXQgd2lsbCBjb250YWluIHRoZSBpZnJhbWUgdG8gbG9hZCBhZFVuaXQgYW5kIGEgZWwgdG8gYWRkIHRvIGFkVW5pdCBzbG90XG4gKiBAcGFyYW0ge0hUTUxWaWRlb0VsZW1lbnR9IHZpZGVvIGRlZmF1bHQgdmlkZW8gZWxlbWVudCB0byBiZSB1c2VkIGJ5IGFkVW5pdFxuICogQHBhcmFtIHtvYmplY3R9IFt0ZW1wbGF0ZUNvbmZpZ10gdGVtcGxhdGU6IGh0bWwgdGVtcGxhdGUgdG8gYmUgdXNlZCBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0LCBleHRyYU9wdGlvbnM6IHRvIGJlIHVzZWQgd2hlbiByZW5kZXJpbmcgdGhlIHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gW3ZwYWlkT3B0aW9uc10gdGltZW91dDogd2hlbiBsb2FkaW5nIGFkVW5pdFxuICovXG5mdW5jdGlvbiBWUEFJREhUTUw1Q2xpZW50KGVsLCB2aWRlbywgdGVtcGxhdGVDb25maWcsIHZwYWlkT3B0aW9ucykge1xuICAgIHRlbXBsYXRlQ29uZmlnID0gdGVtcGxhdGVDb25maWcgfHwge307XG5cbiAgICB0aGlzLl9pZCA9IHVuaXF1ZSgpO1xuICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5fZnJhbWVDb250YWluZXIgPSB1dGlscy5jcmVhdGVFbGVtZW50SW5FbChlbCwgJ2RpdicpO1xuICAgIHRoaXMuX3ZpZGVvRWwgPSB2aWRlbztcbiAgICB0aGlzLl92cGFpZE9wdGlvbnMgPSB2cGFpZE9wdGlvbnMgfHwge3RpbWVvdXQ6IDEwMDAwfTtcblxuICAgIHRoaXMuX3RlbXBsYXRlQ29uZmlnID0ge1xuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVDb25maWcudGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlLFxuICAgICAgICBleHRyYU9wdGlvbnM6IHRlbXBsYXRlQ29uZmlnLmV4dHJhT3B0aW9ucyB8fCB7fVxuICAgIH07XG5cbn1cblxuLyoqXG4gKiBkZXN0cm95XG4gKlxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAkdW5sb2FkUHJldmlvdXNBZFVuaXQuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogaXNEZXN0cm95ZWRcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5pc0Rlc3Ryb3llZCA9IGZ1bmN0aW9uIGlzRGVzdHJveWVkKCkge1xuICAgIHJldHVybiB0aGlzLl9kZXN0cm95ZWQ7XG59O1xuXG4vKipcbiAqIGxvYWRBZFVuaXRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYWRVUkwgdXJsIG9mIHRoZSBqcyBvZiB0aGUgYWRVbml0XG4gKiBAcGFyYW0ge25vZGVTdHlsZUNhbGxiYWNrfSBjYWxsYmFja1xuICovXG5WUEFJREhUTUw1Q2xpZW50LnByb3RvdHlwZS5sb2FkQWRVbml0ID0gZnVuY3Rpb24gbG9hZEFkVW5pdChhZFVSTCwgY2FsbGJhY2spIHtcbiAgICAkdGhyb3dJZkRlc3Ryb3llZC5jYWxsKHRoaXMpO1xuICAgICR1bmxvYWRQcmV2aW91c0FkVW5pdC5jYWxsKHRoaXMpO1xuXG4gICAgdmFyIGZyYW1lID0gdXRpbHMuY3JlYXRlSWZyYW1lV2l0aENvbnRlbnQoXG4gICAgICAgIHRoaXMuX2ZyYW1lQ29udGFpbmVyLFxuICAgICAgICB0aGlzLl90ZW1wbGF0ZUNvbmZpZy50ZW1wbGF0ZSxcbiAgICAgICAgdXRpbHMuZXh0ZW5kKHtcbiAgICAgICAgICAgIGlmcmFtZVVSTF9KUzogYWRVUkwsXG4gICAgICAgICAgICBpZnJhbWVJRDogdGhpcy5nZXRJRCgpXG4gICAgICAgIH0sIHRoaXMuX3RlbXBsYXRlQ29uZmlnLmV4dHJhT3B0aW9ucylcbiAgICApO1xuICAgIHRoaXMuX2ZyYW1lID0gZnJhbWU7XG5cbiAgICB0aGlzLl9vbkxvYWQgPSB1dGlscy5jYWxsYmFja1RpbWVvdXQoXG4gICAgICAgIHRoaXMuX3ZwYWlkT3B0aW9ucy50aW1lb3V0LFxuICAgICAgICBvbkxvYWQuYmluZCh0aGlzKSxcbiAgICAgICAgb25UaW1lb3V0LmJpbmQodGhpcylcbiAgICApO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLl9vbkxvYWQpO1xuXG4gICAgZnVuY3Rpb24gb25Mb2FkIChlKSB7XG4gICAgICAgIC8qanNoaW50IHZhbGlkdGhpczogZmFsc2UgKi9cbiAgICAgICAgLy9kb24ndCBjbGVhciB0aW1lb3V0XG4gICAgICAgIGlmIChlLm9yaWdpbiAhPT0gd2luZG93LmxvY2F0aW9uLm9yaWdpbikgcmV0dXJuO1xuICAgICAgICB2YXIgcmVzdWx0ID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuXG4gICAgICAgIC8vZG9uJ3QgY2xlYXIgdGltZW91dFxuICAgICAgICBpZiAocmVzdWx0LmlkICE9PSB0aGlzLmdldElEKCkpIHJldHVybjtcblxuICAgICAgICB2YXIgYWRVbml0LCBlcnJvciwgY3JlYXRlQWQ7XG4gICAgICAgIGlmICghdGhpcy5fZnJhbWUuY29udGVudFdpbmRvdykge1xuXG4gICAgICAgICAgICBlcnJvciA9ICd0aGUgaWZyYW1lIGlzIG5vdCBhbnltb3JlIGluIHRoZSBET00gdHJlZSc7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNyZWF0ZUFkID0gdGhpcy5fZnJhbWUuY29udGVudFdpbmRvdy5nZXRWUEFJREFkO1xuICAgICAgICAgICAgZXJyb3IgPSB1dGlscy52YWxpZGF0ZSh0eXBlb2YgY3JlYXRlQWQgPT09ICdmdW5jdGlvbicsICd0aGUgYWQgZGlkblxcJ3QgcmV0dXJuIGEgZnVuY3Rpb24gdG8gY3JlYXRlIGFuIGFkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVycm9yKSB7XG4gICAgICAgICAgICB2YXIgYWRFbCA9IHRoaXMuX2ZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkLWVsZW1lbnQnKTtcbiAgICAgICAgICAgIGFkVW5pdCA9IG5ldyBWUEFJREFkVW5pdChjcmVhdGVBZCgpLCBhZEVsLCB0aGlzLl92aWRlb0VsLCB0aGlzLl9mcmFtZSk7XG4gICAgICAgICAgICBhZFVuaXQuc3Vic2NyaWJlKEFEX1NUT1BQRUQsICRhZERlc3Ryb3llZC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIGVycm9yID0gdXRpbHMudmFsaWRhdGUoYWRVbml0LmlzVmFsaWRWUEFJREFkKCksICd0aGUgYWRkIGlzIG5vdCBmdWxseSBjb21wbGFpbnQgd2l0aCBWUEFJRCBzcGVjaWZpY2F0aW9uJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hZFVuaXQgPSBhZFVuaXQ7XG4gICAgICAgICRkZXN0cm95TG9hZExpc3RlbmVyLmNhbGwodGhpcyk7XG4gICAgICAgIGNhbGxiYWNrKGVycm9yLCBlcnJvciA/IG51bGwgOiBhZFVuaXQpO1xuXG4gICAgICAgIC8vY2xlYXIgdGltZW91dFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBvblRpbWVvdXQoKSB7XG4gICAgICAgIGNhbGxiYWNrKCd0aW1lb3V0JywgbnVsbCk7XG4gICAgfVxufTtcblxuLyoqXG4gKiB1bmxvYWRBZFVuaXRcbiAqXG4gKi9cblZQQUlESFRNTDVDbGllbnQucHJvdG90eXBlLnVubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIHVubG9hZEFkVW5pdCgpIHtcbiAgICAkdW5sb2FkUHJldmlvdXNBZFVuaXQuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogZ2V0SUQgd2lsbCByZXR1cm4gdGhlIHVuaXF1ZSBpZFxuICpcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuVlBBSURIVE1MNUNsaWVudC5wcm90b3R5cGUuZ2V0SUQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xufTtcblxuXG4vKipcbiAqICRyZW1vdmVFbFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuZnVuY3Rpb24gJHJlbW92ZUVsKGtleSkge1xuICAgIHZhciBlbCA9IHRoaXNba2V5XTtcbiAgICBpZiAoZWwpIHtcbiAgICAgICAgZWwucmVtb3ZlKCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzW2tleV07XG4gICAgfVxufVxuXG5mdW5jdGlvbiAkYWREZXN0cm95ZWQoKSB7XG4gICAgJHJlbW92ZUFkRWxlbWVudHMuY2FsbCh0aGlzKTtcbiAgICBkZWxldGUgdGhpcy5fYWRVbml0O1xufVxuXG5mdW5jdGlvbiAkdW5sb2FkUHJldmlvdXNBZFVuaXQoKSB7XG4gICAgJHJlbW92ZUFkRWxlbWVudHMuY2FsbCh0aGlzKTtcbiAgICAkZGVzdHJveUFkVW5pdC5jYWxsKHRoaXMpO1xufVxuXG5mdW5jdGlvbiAkcmVtb3ZlQWRFbGVtZW50cygpIHtcbiAgICAkcmVtb3ZlRWwuY2FsbCh0aGlzLCAnX2ZyYW1lJyk7XG4gICAgJGRlc3Ryb3lMb2FkTGlzdGVuZXIuY2FsbCh0aGlzKTtcbn1cblxuLyoqXG4gKiAkZGVzdHJveUxvYWRMaXN0ZW5lclxuICpcbiAqL1xuZnVuY3Rpb24gJGRlc3Ryb3lMb2FkTGlzdGVuZXIoKSB7XG4gICAgaWYgKHRoaXMuX29uTG9hZCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMuX29uTG9hZCk7XG4gICAgICAgIHV0aWxzLmNsZWFyQ2FsbGJhY2tUaW1lb3V0KHRoaXMuX29uTG9hZCk7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9vbkxvYWQ7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uICRkZXN0cm95QWRVbml0KCkge1xuICAgIGlmICh0aGlzLl9hZFVuaXQpIHtcbiAgICAgICAgdGhpcy5fYWRVbml0LnN0b3BBZCgpO1xuICAgICAgICBkZWxldGUgdGhpcy5fYWRVbml0O1xuICAgIH1cbn1cblxuLyoqXG4gKiAkdGhyb3dJZkRlc3Ryb3llZFxuICpcbiAqL1xuZnVuY3Rpb24gJHRocm93SWZEZXN0cm95ZWQoKSB7XG4gICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKCdWUEFJREhUTUw1Q2xpZW50IGFscmVhZHkgZGVzdHJveWVkIScpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREhUTUw1Q2xpZW50O1xud2luZG93LlZQQUlESFRNTDVDbGllbnQgPSBWUEFJREhUTUw1Q2xpZW50O1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIFN1YnNjcmliZXIoKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSB7fTtcbn1cblxuU3Vic2NyaWJlci5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlKGhhbmRsZXIsIGV2ZW50TmFtZSwgY29udGV4dCkge1xuICAgIHRoaXMuZ2V0KGV2ZW50TmFtZSkucHVzaCh7aGFuZGxlcjogaGFuZGxlciwgY29udGV4dDogY29udGV4dH0pO1xufTtcblxuU3Vic2NyaWJlci5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiB1bnN1YnNjcmliZShoYW5kbGVyLCBldmVudE5hbWUpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdID0gdGhpcy5nZXQoZXZlbnROYW1lKS5maWx0ZXIoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIgPT09IHN1YnNjcmliZXIuaGFuZGxlcjtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlQWxsID0gZnVuY3Rpb24gdW5zdWJzY3JpYmVBbGwoKSB7XG4gICAgdGhpcy5fc3Vic2NyaWJlcnMgPSB7fTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbihldmVudE5hbWUsIGRhdGEpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdGhhdC5nZXQoZXZlbnROYW1lKS5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuZ2V0KGV2ZW50TmFtZSkpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmhhbmRsZXIuY2FsbChzdWJzY3JpYmVyLmNvbnRleHQsIGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICB9KTtcbn07XG5cblN1YnNjcmliZXIucHJvdG90eXBlLnRyaWdnZXJTeW5jID0gZnVuY3Rpb24oZXZlbnROYW1lLCBkYXRhKSB7XG4gICAgdGhpcy5nZXQoZXZlbnROYW1lKS5mb3JFYWNoKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHN1YnNjcmliZXIuaGFuZGxlci5jYWxsKHN1YnNjcmliZXIuY29udGV4dCwgZGF0YSk7XG4gICAgfSk7XG59O1xuXG5TdWJzY3JpYmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQoZXZlbnROYW1lKSB7XG4gICAgaWYgKCF0aGlzLl9zdWJzY3JpYmVyc1tldmVudE5hbWVdKSB7XG4gICAgICAgIHRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3N1YnNjcmliZXJzW2V2ZW50TmFtZV07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN1YnNjcmliZXI7XG5cbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBub29wIGEgZW1wdHkgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbi8qKlxuICogdmFsaWRhdGUgaWYgaXMgbm90IHZhbGlkYXRlIHdpbGwgcmV0dXJuIGFuIEVycm9yIHdpdGggdGhlIG1lc3NhZ2VcbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmFsaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlKGlzVmFsaWQsIG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gaXNWYWxpZCA/IG51bGwgOiBuZXcgRXJyb3IobWVzc2FnZSk7XG59XG5cbnZhciB0aW1lb3V0cyA9IHt9O1xuLyoqXG4gKiBjbGVhckNhbGxiYWNrVGltZW91dFxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgaGFuZGxlciB0byByZW1vdmVcbiAqL1xuZnVuY3Rpb24gY2xlYXJDYWxsYmFja1RpbWVvdXQoZnVuYykge1xuICAgIHZhciB0aW1lb3V0ID0gdGltZW91dHNbZnVuY107XG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICBkZWxldGUgdGltZW91dHNbZnVuY107XG4gICAgfVxufVxuXG4vKipcbiAqIGNhbGxiYWNrVGltZW91dCBpZiB0aGUgb25TdWNjZXNzIGlzIG5vdCBjYWxsZWQgYW5kIHJldHVybnMgdHJ1ZSBpbiB0aGUgdGltZWxpbWl0IHRoZW4gb25UaW1lb3V0IHdpbGwgYmUgY2FsbGVkXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHRpbWVyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblN1Y2Nlc3NcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uVGltZW91dFxuICovXG5mdW5jdGlvbiBjYWxsYmFja1RpbWVvdXQodGltZXIsIG9uU3VjY2Vzcywgb25UaW1lb3V0KSB7XG4gICAgdmFyIGNhbGxiYWNrLCB0aW1lb3V0O1xuXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvblN1Y2Nlc3MgPSBub29wO1xuICAgICAgICBkZWxldGUgdGltZW91dFtjYWxsYmFja107XG4gICAgICAgIG9uVGltZW91dCgpO1xuICAgIH0sIHRpbWVyKTtcblxuICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUT0RPIGF2b2lkIGxlYWtpbmcgYXJndW1lbnRzXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wZXRrYWFudG9ub3YvYmx1ZWJpcmQvd2lraS9PcHRpbWl6YXRpb24ta2lsbGVycyMzMi1sZWFraW5nLWFyZ3VtZW50c1xuICAgICAgICBpZiAob25TdWNjZXNzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgICAgIGNsZWFyQ2FsbGJhY2tUaW1lb3V0KGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB0aW1lb3V0c1tjYWxsYmFja10gPSB0aW1lb3V0O1xuXG4gICAgcmV0dXJuIGNhbGxiYWNrO1xufVxuXG5cbi8qKlxuICogY3JlYXRlRWxlbWVudEluRWxcbiAqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBwYXJlbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudEluRWwocGFyZW50LCB0YWdOYW1lLCBpZCkge1xuICAgIHZhciBuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgIGlmIChpZCkgbkVsLmlkID0gaWQ7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKG5FbCk7XG4gICAgcmV0dXJuIG5FbDtcbn1cblxuLyoqXG4gKiBjcmVhdGVJZnJhbWVXaXRoQ29udGVudFxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlIHNpbXBsZSB0ZW1wbGF0ZSB1c2luZyB7e3Zhcn19XG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICovXG5mdW5jdGlvbiBjcmVhdGVJZnJhbWVXaXRoQ29udGVudChwYXJlbnQsIHRlbXBsYXRlLCBkYXRhKSB7XG4gICAgdmFyIGlmcmFtZSA9IGNyZWF0ZUlmcmFtZShwYXJlbnQpO1xuICAgIGlmICghc2V0SWZyYW1lQ29udGVudChpZnJhbWUsIHNpbXBsZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKSkpIHJldHVybjtcbiAgICByZXR1cm4gaWZyYW1lO1xufVxuXG4vKipcbiAqIGNyZWF0ZUlmcmFtZVxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBhcmVudFxuICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICovXG5mdW5jdGlvbiBjcmVhdGVJZnJhbWUocGFyZW50LCB1cmwpIHtcbiAgICB2YXIgbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgbkVsLnNyYyA9IHVybCB8fCAnYWJvdXQ6YmxhbmsnO1xuICAgIG5FbC5tYXJnaW5XaWR0aCA9ICcwJztcbiAgICBuRWwubWFyZ2luSGVpZ2h0ID0gJzAnO1xuICAgIG5FbC5mcmFtZUJvcmRlciA9ICcwJztcbiAgICBuRWwud2lkdGggPSAnMTAwJSc7XG4gICAgbkVsLmhlaWdodCA9ICcxMDAlJztcbiAgICBuRWwuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIG5FbC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIG5FbC5zdHlsZS50b3AgPSAnMCc7XG4gICAgbkVsLnN0eWxlLm1hcmdpbiA9ICcwcHgnO1xuICAgIG5FbC5zdHlsZS5wYWRkaW5nID0gJzBweCc7XG4gICAgbkVsLnN0eWxlLmJvcmRlciA9ICdub25lJztcbiAgICBuRWwuc2V0QXR0cmlidXRlKCdTQ1JPTExJTkcnLCdOTycpO1xuICAgIHBhcmVudC5pbm5lckhUTUwgPSAnJztcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobkVsKTtcbiAgICByZXR1cm4gbkVsO1xufVxuXG4vKipcbiAqIHNpbXBsZVRlbXBsYXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRlbXBsYXRlXG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICovXG5mdW5jdGlvbiBzaW1wbGVUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIE9iamVjdC5rZXlzKGRhdGEpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgPyBKU09OLnN0cmluZ2lmeShkYXRhW2tleV0pIDogZGF0YVtrZXldO1xuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnJlcGxhY2UobmV3IFJlZ0V4cCgne3snICsga2V5ICsgJ319JywgJ2cnKSwgdmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn1cblxuLyoqXG4gKiBzZXRJZnJhbWVDb250ZW50XG4gKlxuICogQHBhcmFtIHtIVE1MSWZyYW1lRWxlbWVudH0gaWZyYW1lRWxcbiAqIEBwYXJhbSBjb250ZW50XG4gKi9cbmZ1bmN0aW9uIHNldElmcmFtZUNvbnRlbnQoaWZyYW1lRWwsIGNvbnRlbnQpIHtcbiAgICB2YXIgaWZyYW1lRG9jID0gaWZyYW1lRWwuY29udGVudFdpbmRvdyAmJiBpZnJhbWVFbC5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICAgIGlmICghaWZyYW1lRG9jKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZnJhbWVEb2Mud3JpdGUoY29udGVudCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuXG4vKipcbiAqIGV4dGVuZCBvYmplY3Qgd2l0aCBrZXlzIGZyb20gYW5vdGhlciBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdG9FeHRlbmRcbiAqIEBwYXJhbSB7b2JqZWN0fSBmcm9tU291cmNlXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCh0b0V4dGVuZCwgZnJvbVNvdXJjZSkge1xuICAgIE9iamVjdC5rZXlzKGZyb21Tb3VyY2UpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIHRvRXh0ZW5kW2tleV0gPSBmcm9tU291cmNlW2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvRXh0ZW5kO1xufVxuXG5cbi8qKlxuICogdW5pcXVlIHdpbGwgY3JlYXRlIGEgdW5pcXVlIHN0cmluZyBldmVyeXRpbWUgaXMgY2FsbGVkLCBzZXF1ZW50aWFsbHkgYW5kIHByZWZpeGVkXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHByZWZpeFxuICovXG5mdW5jdGlvbiB1bmlxdWUocHJlZml4KSB7XG4gICAgdmFyIGNvdW50ID0gLTE7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdfJyArICgrK2NvdW50KTtcbiAgICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBub29wOiBub29wLFxuICAgIHZhbGlkYXRlOiB2YWxpZGF0ZSxcbiAgICBjbGVhckNhbGxiYWNrVGltZW91dDogY2xlYXJDYWxsYmFja1RpbWVvdXQsXG4gICAgY2FsbGJhY2tUaW1lb3V0OiBjYWxsYmFja1RpbWVvdXQsXG4gICAgY3JlYXRlRWxlbWVudEluRWw6IGNyZWF0ZUVsZW1lbnRJbkVsLFxuICAgIGNyZWF0ZUlmcmFtZVdpdGhDb250ZW50OiBjcmVhdGVJZnJhbWVXaXRoQ29udGVudCxcbiAgICBjcmVhdGVJZnJhbWU6IGNyZWF0ZUlmcmFtZSxcbiAgICBzaW1wbGVUZW1wbGF0ZTogc2ltcGxlVGVtcGxhdGUsXG4gICAgc2V0SWZyYW1lQ29udGVudDogc2V0SWZyYW1lQ29udGVudCxcbiAgICBleHRlbmQ6IGV4dGVuZCxcbiAgICB1bmlxdWU6IHVuaXF1ZVxufTtcblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgSW5MaW5lID0gcmVxdWlyZSgnLi9JbkxpbmUnKTtcbnZhciBXcmFwcGVyID0gcmVxdWlyZSgnLi9XcmFwcGVyJyk7XG5cbmZ1bmN0aW9uIEFkKGFkSlRyZWUpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIEFkKSkge1xuICAgIHJldHVybiBuZXcgQWQoYWRKVHJlZSk7XG4gIH1cbiAgdGhpcy5pbml0aWFsaXplKGFkSlRyZWUpO1xufVxuXG5BZC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKGFkSlRyZWUpIHtcbiAgdGhpcy5pZCA9IGFkSlRyZWUuYXR0cignaWQnKTtcbiAgdGhpcy5zZXF1ZW5jZSA9IGFkSlRyZWUuYXR0cignc2VxdWVuY2UnKTtcblxuICBpZihhZEpUcmVlLmluTGluZSkge1xuICAgIHRoaXMuaW5MaW5lID0gbmV3IEluTGluZShhZEpUcmVlLmluTGluZSk7XG4gIH1cblxuICBpZihhZEpUcmVlLndyYXBwZXIpe1xuICAgIHRoaXMud3JhcHBlciA9IG5ldyBXcmFwcGVyKGFkSlRyZWUud3JhcHBlcik7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQWQ7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgTGluZWFyID0gcmVxdWlyZSgnLi9MaW5lYXInKTtcblxuZnVuY3Rpb24gQ3JlYXRpdmUoY3JlYXRpdmVKVHJlZSkge1xuICBpZighKHRoaXMgaW5zdGFuY2VvZiBDcmVhdGl2ZSkpIHtcbiAgICByZXR1cm4gbmV3IENyZWF0aXZlKGNyZWF0aXZlSlRyZWUpO1xuICB9XG5cbiAgdGhpcy5pZCA9IGNyZWF0aXZlSlRyZWUuYXR0cignaWQnKTtcbiAgdGhpcy5zZXF1ZW5jZSA9IGNyZWF0aXZlSlRyZWUuYXR0cignc2VxdWVuY2UnKTtcbiAgdGhpcy5hZElkID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdhZElkJyk7XG4gIHRoaXMuYXBpRnJhbWV3b3JrID0gY3JlYXRpdmVKVHJlZS5hdHRyKCdhcGlGcmFtZXdvcmsnKTtcblxuICBpZihjcmVhdGl2ZUpUcmVlLmxpbmVhcikge1xuICAgIHRoaXMubGluZWFyID0gbmV3IExpbmVhcihjcmVhdGl2ZUpUcmVlLmxpbmVhcik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDcmVhdGl2ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxuZnVuY3Rpb24gSW5MaW5lKGlubGluZUpUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBJbkxpbmUpKSB7XG4gICAgcmV0dXJuIG5ldyBJbkxpbmUoaW5saW5lSlRyZWUpO1xuICB9XG5cbiAgLy9SZXF1aXJlZCBGaWVsZHNcbiAgdGhpcy5hZFRpdGxlID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmFkVGl0bGUpO1xuICB0aGlzLmFkU3lzdGVtID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmFkU3lzdGVtKTtcbiAgdGhpcy5pbXByZXNzaW9ucyA9IHZhc3RVdGlsLnBhcnNlSW1wcmVzc2lvbnMoaW5saW5lSlRyZWUuaW1wcmVzc2lvbik7XG4gIHRoaXMuY3JlYXRpdmVzID0gdmFzdFV0aWwucGFyc2VDcmVhdGl2ZXMoaW5saW5lSlRyZWUuY3JlYXRpdmVzKTtcblxuICAvL09wdGlvbmFsIEZpZWxkc1xuICB0aGlzLmRlc2NyaXB0aW9uID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmRlc2NyaXB0aW9uKTtcbiAgdGhpcy5hZHZlcnRpc2VyID0geG1sLmtleVZhbHVlKGlubGluZUpUcmVlLmFkdmVydGlzZXIpO1xuICB0aGlzLnN1cnZleXMgPSBwYXJzZVN1cnZleXMoaW5saW5lSlRyZWUuc3VydmV5KTtcbiAgdGhpcy5lcnJvciA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5lcnJvcik7XG4gIHRoaXMucHJpY2luZyA9IHhtbC5rZXlWYWx1ZShpbmxpbmVKVHJlZS5wcmljaW5nKTtcbiAgdGhpcy5leHRlbnNpb25zID0gaW5saW5lSlRyZWUuZXh0ZW5zaW9ucztcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHBhcnNlU3VydmV5cyhpbmxpbmVTdXJ2ZXlzKSB7XG4gICAgaWYgKGlubGluZVN1cnZleXMpIHtcbiAgICAgIHJldHVybiB1dGlsaXRpZXMudHJhbnNmb3JtQXJyYXkodXRpbGl0aWVzLmlzQXJyYXkoaW5saW5lU3VydmV5cykgPyBpbmxpbmVTdXJ2ZXlzIDogW2lubGluZVN1cnZleXNdLCBmdW5jdGlvbiAoc3VydmV5KSB7XG4gICAgICAgIGlmKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHN1cnZleS5rZXlWYWx1ZSkpe1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1cmk6IHN1cnZleS5rZXlWYWx1ZSxcbiAgICAgICAgICAgIHR5cGU6IHN1cnZleS5hdHRyKCd0eXBlJylcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbkxpbmU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVHJhY2tpbmdFdmVudCA9IHJlcXVpcmUoJy4vVHJhY2tpbmdFdmVudCcpO1xudmFyIE1lZGlhRmlsZSA9IHJlcXVpcmUoJy4vTWVkaWFGaWxlJyk7XG52YXIgVmlkZW9DbGlja3MgPSByZXF1aXJlKCcuL1ZpZGVvQ2xpY2tzJyk7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cblxuZnVuY3Rpb24gTGluZWFyKGxpbmVhckpUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBMaW5lYXIpKSB7XG4gICAgcmV0dXJuIG5ldyBMaW5lYXIobGluZWFySlRyZWUpO1xuICB9XG5cbiAgLy9SZXF1aXJlZCBFbGVtZW50c1xuICB0aGlzLmR1cmF0aW9uID0gcGFyc2Vycy5kdXJhdGlvbih4bWwua2V5VmFsdWUobGluZWFySlRyZWUuZHVyYXRpb24pKTtcbiAgdGhpcy5tZWRpYUZpbGVzID0gcGFyc2VNZWRpYUZpbGVzKGxpbmVhckpUcmVlLm1lZGlhRmlsZXMgJiYgbGluZWFySlRyZWUubWVkaWFGaWxlcy5tZWRpYUZpbGUpO1xuXG4gIC8vT3B0aW9uYWwgZmllbGRzXG4gIHRoaXMudHJhY2tpbmdFdmVudHMgPSBwYXJzZVRyYWNraW5nRXZlbnRzKGxpbmVhckpUcmVlLnRyYWNraW5nRXZlbnRzICYmIGxpbmVhckpUcmVlLnRyYWNraW5nRXZlbnRzLnRyYWNraW5nLCB0aGlzLmR1cmF0aW9uKTtcbiAgdGhpcy5za2lwb2Zmc2V0ID0gcGFyc2Vycy5vZmZzZXQoeG1sLmF0dHIobGluZWFySlRyZWUsICdza2lwb2Zmc2V0JyksIHRoaXMuZHVyYXRpb24pO1xuXG4gIGlmIChsaW5lYXJKVHJlZS52aWRlb0NsaWNrcykge1xuICAgIHRoaXMudmlkZW9DbGlja3MgPSBuZXcgVmlkZW9DbGlja3MobGluZWFySlRyZWUudmlkZW9DbGlja3MpO1xuICB9XG5cbiAgaWYobGluZWFySlRyZWUuYWRQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5hZFBhcmFtZXRlcnMgPSB4bWwua2V5VmFsdWUobGluZWFySlRyZWUuYWRQYXJhbWV0ZXJzKTtcblxuICAgIGlmKHhtbC5hdHRyKGxpbmVhckpUcmVlLmFkUGFyYW1ldGVycywgJ3htbEVuY29kZWQnKSl7XG4gICAgICB0aGlzLmFkUGFyYW1ldGVycyA9IHhtbC5kZWNvZGUodGhpcy5hZFBhcmFtZXRlcnMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gcGFyc2VUcmFja2luZ0V2ZW50cyh0cmFja2luZ0V2ZW50cywgZHVyYXRpb24pIHtcbiAgICB2YXIgdHJhY2tpbmdzID0gW107XG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQodHJhY2tpbmdFdmVudHMpKSB7XG4gICAgICB0cmFja2luZ0V2ZW50cyA9IHV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzKSA/IHRyYWNraW5nRXZlbnRzIDogW3RyYWNraW5nRXZlbnRzXTtcbiAgICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNraW5nRGF0YSkge1xuICAgICAgICB0cmFja2luZ3MucHVzaChuZXcgVHJhY2tpbmdFdmVudCh0cmFja2luZ0RhdGEsIGR1cmF0aW9uKSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYWNraW5ncztcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlTWVkaWFGaWxlcyhtZWRpYUZpbGVzSnhvblRyZWUpIHtcbiAgICB2YXIgbWVkaWFGaWxlcyA9IFtdO1xuICAgIGlmICh1dGlsaXRpZXMuaXNEZWZpbmVkKG1lZGlhRmlsZXNKeG9uVHJlZSkpIHtcbiAgICAgIG1lZGlhRmlsZXNKeG9uVHJlZSA9IHV0aWxpdGllcy5pc0FycmF5KG1lZGlhRmlsZXNKeG9uVHJlZSkgPyBtZWRpYUZpbGVzSnhvblRyZWUgOiBbbWVkaWFGaWxlc0p4b25UcmVlXTtcblxuICAgICAgbWVkaWFGaWxlc0p4b25UcmVlLmZvckVhY2goZnVuY3Rpb24gKG1mRGF0YSkge1xuICAgICAgICBtZWRpYUZpbGVzLnB1c2gobmV3IE1lZGlhRmlsZShtZkRhdGEpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbWVkaWFGaWxlcztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IExpbmVhcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxuZnVuY3Rpb24gTWVkaWFGaWxlKG1lZGlhRmlsZUpUcmVlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNZWRpYUZpbGUpKSB7XG4gICAgcmV0dXJuIG5ldyBNZWRpYUZpbGUobWVkaWFGaWxlSlRyZWUpO1xuICB9XG5cbiAgLy9SZXF1aXJlZCBhdHRyaWJ1dGVzXG4gIHRoaXMuc3JjID0geG1sLmtleVZhbHVlKG1lZGlhRmlsZUpUcmVlKTtcbiAgdGhpcy5kZWxpdmVyeSA9IG1lZGlhRmlsZUpUcmVlLmF0dHIoJ2RlbGl2ZXJ5Jyk7XG4gIHRoaXMudHlwZSA9IG1lZGlhRmlsZUpUcmVlLmF0dHIoJ3R5cGUnKTtcbiAgdGhpcy53aWR0aCA9IG1lZGlhRmlsZUpUcmVlLmF0dHIoJ3dpZHRoJyk7XG4gIHRoaXMuaGVpZ2h0ID0gbWVkaWFGaWxlSlRyZWUuYXR0cignaGVpZ2h0Jyk7XG5cbiAgLy9PcHRpb25hbCBhdHRyaWJ1dGVzXG4gIHRoaXMuY29kZWMgPSBtZWRpYUZpbGVKVHJlZS5hdHRyKCdjb2RlYycpO1xuICB0aGlzLmlkID0gbWVkaWFGaWxlSlRyZWUuYXR0cignaWQnKTtcbiAgdGhpcy5iaXRyYXRlID0gbWVkaWFGaWxlSlRyZWUuYXR0cignYml0cmF0ZScpO1xuICB0aGlzLm1pbkJpdHJhdGUgPSBtZWRpYUZpbGVKVHJlZS5hdHRyKCdtaW5CaXRyYXRlJyk7XG4gIHRoaXMubWF4Qml0cmF0ZSA9IG1lZGlhRmlsZUpUcmVlLmF0dHIoJ21heEJpdHJhdGUnKTtcbiAgdGhpcy5zY2FsYWJsZSA9IG1lZGlhRmlsZUpUcmVlLmF0dHIoJ3NjYWxhYmxlJyk7XG4gIHRoaXMubWFpbnRhaW5Bc3BlY3RSYXRpbyA9IG1lZGlhRmlsZUpUcmVlLmF0dHIoJ21haW50YWluQXNwZWN0UmF0aW8nKTtcbiAgdGhpcy5hcGlGcmFtZXdvcmsgPSBtZWRpYUZpbGVKVHJlZS5hdHRyKCdhcGlGcmFtZXdvcmsnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNZWRpYUZpbGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcGFyc2VycyA9IHJlcXVpcmUoJy4vcGFyc2VycycpO1xuXG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbmZ1bmN0aW9uIFRyYWNraW5nRXZlbnQodHJhY2tpbmdKVHJlZSwgZHVyYXRpb24pIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFRyYWNraW5nRXZlbnQpKSB7XG4gICAgcmV0dXJuIG5ldyBUcmFja2luZ0V2ZW50KHRyYWNraW5nSlRyZWUsIGR1cmF0aW9uKTtcbiAgfVxuXG4gIHRoaXMubmFtZSA9IHRyYWNraW5nSlRyZWUuYXR0cignZXZlbnQnKTtcbiAgdGhpcy51cmkgPSB4bWwua2V5VmFsdWUodHJhY2tpbmdKVHJlZSk7XG5cbiAgaWYoJ3Byb2dyZXNzJyA9PT0gdGhpcy5uYW1lKSB7XG4gICAgdGhpcy5vZmZzZXQgPSBwYXJzZXJzLm9mZnNldCh0cmFja2luZ0pUcmVlLmF0dHIoJ29mZnNldCcpLCBkdXJhdGlvbik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFja2luZ0V2ZW50OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIEFkID0gcmVxdWlyZSgnLi9BZCcpO1xudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4vVkFTVEVycm9yJyk7XG52YXIgVkFTVFJlc3BvbnNlID0gcmVxdWlyZSgnLi9WQVNUUmVzcG9uc2UnKTtcbnZhciB2YXN0VXRpbCA9IHJlcXVpcmUoJy4vdmFzdFV0aWwnKTtcblxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvYXN5bmMnKTtcbnZhciBodHRwID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvaHR0cCcpLmh0dHA7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5mdW5jdGlvbiBWQVNUQ2xpZW50KG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RDbGllbnQpKSB7XG4gICAgcmV0dXJuIG5ldyBWQVNUQ2xpZW50KG9wdGlvbnMpO1xuICB9XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBXUkFQUEVSX0xJTUlUOiA1XG4gIH07XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMuc2V0dGluZ3MgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBvcHRpb25zLCBkZWZhdWx0T3B0aW9ucyk7XG4gIHRoaXMuZXJyb3JVUkxNYWNyb3MgPSBbXTtcbn1cblxuVkFTVENsaWVudC5wcm90b3R5cGUuZ2V0VkFTVFJlc3BvbnNlID0gZnVuY3Rpb24gZ2V0VkFTVFJlc3BvbnNlKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgdmFyIGVycm9yID0gc2FuaXR5Q2hlY2soYWRUYWdVcmwsIGNhbGxiYWNrKTtcbiAgaWYgKGVycm9yKSB7XG4gICAgaWYgKHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yKTtcbiAgICB9XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgdGhpcy5fZ2V0VkFTVEFkLmJpbmQodGhpcywgYWRUYWdVcmwpLFxuICAgICAgYnVpbGRWQVNUUmVzcG9uc2VcbiAgICBdLFxuICAgIGNhbGxiYWNrKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIGJ1aWxkVkFTVFJlc3BvbnNlKGFkc0NoYWluLCBjYikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB0aGF0Ll9idWlsZFZBU1RSZXNwb25zZShhZHNDaGFpbik7XG4gICAgICBjYihudWxsLCByZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY2IoZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soYWRUYWdVcmwsIGNiKSB7XG4gICAgaWYgKCFhZFRhZ1VybCkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVFJlc3BvbnNlLCBtaXNzaW5nIGFkIHRhZyBVUkwnKTtcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc0Z1bmN0aW9uKGNiKSkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVFJlc3BvbnNlLCBtaXNzaW5nIGNhbGxiYWNrIGZ1bmN0aW9uJyk7XG4gICAgfVxuICB9XG59O1xuXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fZ2V0VkFTVEFkID0gZnVuY3Rpb24gKGFkVGFnVXJsLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgZ2V0QWRXYXRlcmZhbGwoYWRUYWdVcmwsIGZ1bmN0aW9uIChlcnJvciwgdmFzdFRyZWUpIHtcbiAgICB2YXIgd2F0ZXJmYWxsQWRzID0gdmFzdFRyZWUgJiYgdXRpbGl0aWVzLmlzQXJyYXkodmFzdFRyZWUuYWRzKSA/IHZhc3RUcmVlLmFkcyA6IG51bGw7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGF0Ll90cmFja0Vycm9yKGVycm9yLCB3YXRlcmZhbGxBZHMpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycm9yLCB3YXRlcmZhbGxBZHMpO1xuICAgIH1cblxuICAgIGdldEFkKHdhdGVyZmFsbEFkcy5zaGlmdCgpLCBbXSwgd2F0ZXJmYWxsSGFuZGxlcik7XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgZnVuY3Rpb24gd2F0ZXJmYWxsSGFuZGxlcihlcnJvciwgYWRDaGFpbikge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHRoYXQuX3RyYWNrRXJyb3IoZXJyb3IsIGFkQ2hhaW4pO1xuICAgICAgICBpZiAod2F0ZXJmYWxsQWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBnZXRBZCh3YXRlcmZhbGxBZHMuc2hpZnQoKSxbXSwgd2F0ZXJmYWxsSGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IsIGFkQ2hhaW4pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhudWxsLCBhZENoYWluKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gZ2V0QWRXYXRlcmZhbGwoYWRUYWdVcmwsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlcXVlc3RWYXN0WE1MID0gdGhhdC5fcmVxdWVzdFZBU1RYbWwuYmluZCh0aGF0LCBhZFRhZ1VybCk7XG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICAgIHJlcXVlc3RWYXN0WE1MLFxuICAgICAgYnVpbGRWYXN0V2F0ZXJmYWxsXG4gICAgXSwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRWYXN0V2F0ZXJmYWxsKHhtbFN0ciwgY2FsbGJhY2spIHtcbiAgICB2YXIgdmFzdFRyZWU7XG4gICAgdHJ5IHtcbiAgICAgIHZhc3RUcmVlID0geG1sLnRvSlhPTlRyZWUoeG1sU3RyKTtcblxuICAgICAgaWYodXRpbGl0aWVzLmlzQXJyYXkodmFzdFRyZWUuYWQpKSB7XG4gICAgICAgIHZhc3RUcmVlLmFkcyA9IHZhc3RUcmVlLmFkO1xuICAgICAgfSBlbHNlIGlmKHZhc3RUcmVlLmFkKXtcbiAgICAgICAgdmFzdFRyZWUuYWRzID0gW3Zhc3RUcmVlLmFkXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhc3RUcmVlLmFkcyA9IFtdO1xuICAgICAgfVxuICAgICAgY2FsbGJhY2sodmFsaWRhdGVWQVNUVHJlZSh2YXN0VHJlZSksIHZhc3RUcmVlKTtcblxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC5idWlsZFZhc3RXYXRlcmZhbGwsIGVycm9yIHBhcnNpbmcgeG1sXCIsIDEwMCksIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbGlkYXRlVkFTVFRyZWUodmFzdFRyZWUpIHtcbiAgICB2YXIgdmFzdFZlcnNpb24gPSB4bWwuYXR0cih2YXN0VHJlZSwgJ3ZlcnNpb24nKTtcblxuICAgIGlmICghdmFzdFRyZWUuYWQpIHtcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKCdvbiBWQVNUQ2xpZW50LmdldFZBU1RBZC52YWxpZGF0ZVZBU1RUcmVlLCBubyBBZCBpbiBWQVNUIHRyZWUnLCAzMDMpO1xuICAgIH1cblxuICAgIGlmICh2YXN0VmVyc2lvbiAmJiAodmFzdFZlcnNpb24gIT0gMyAmJiB2YXN0VmVyc2lvbiAhPSAyKSkge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLnZhbGlkYXRlVkFTVFRyZWUsIG5vdCBzdXBwb3J0ZWQgVkFTVCB2ZXJzaW9uIFwiJyArIHZhc3RWZXJzaW9uICsgJ1wiJywgMTAyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFkKGFkVGFnVXJsLCBhZENoYWluLCBjYWxsYmFjaykge1xuICAgIGlmIChhZENoYWluLmxlbmd0aCA+PSB0aGF0LldSQVBQRVJfTElNSVQpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5nZXRWQVNUQWQuZ2V0QWQsIHBsYXllcnMgd3JhcHBlciBsaW1pdCByZWFjaGVkICh0aGUgbGltaXQgaXMgXCIgKyB0aGF0LldSQVBQRVJfTElNSVQgKyBcIilcIiwgMzAyKSwgYWRDaGFpbik7XG4gICAgfVxuXG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICAgIGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoYWRUYWdVcmwpKSB7XG4gICAgICAgICAgcmVxdWVzdFZBU1RBZChhZFRhZ1VybCwgbmV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dChudWxsLCBhZFRhZ1VybCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBidWlsZEFkXG4gICAgXSwgZnVuY3Rpb24gKGVycm9yLCBhZCkge1xuICAgICAgaWYgKGFkKSB7XG4gICAgICAgIGFkQ2hhaW4ucHVzaChhZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IsIGFkQ2hhaW4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWQud3JhcHBlcikge1xuICAgICAgICByZXR1cm4gZ2V0QWQoYWQud3JhcHBlci5WQVNUQWRUYWdVUkksIGFkQ2hhaW4sIGNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIGFkQ2hhaW4pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRBZChhZEp4b25UcmVlLCBjYWxsYmFjaykge1xuICAgIHRyeSB7XG4gICAgICB2YXIgYWQgPSBuZXcgQWQoYWRKeG9uVHJlZSk7XG4gICAgICBjYWxsYmFjayh2YWxpZGF0ZUFkKGFkKSwgYWQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoJ29uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLmJ1aWxkQWQsIGVycm9yIHBhcnNpbmcgeG1sJywgMTAwKSwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVBZChhZCkge1xuICAgIHZhciB3cmFwcGVyID0gYWQud3JhcHBlcjtcbiAgICB2YXIgaW5MaW5lID0gYWQuaW5MaW5lO1xuICAgIHZhciBlcnJNc2dQcmVmaXggPSAnb24gVkFTVENsaWVudC5nZXRWQVNUQWQudmFsaWRhdGVBZCwgJztcblxuICAgIGlmIChpbkxpbmUgJiYgd3JhcHBlcikge1xuICAgICAgcmV0dXJuIG5ldyBWQVNURXJyb3IoZXJyTXNnUHJlZml4ICtcIkluTGluZSBhbmQgV3JhcHBlciBib3RoIGZvdW5kIG9uIHRoZSBzYW1lIEFkXCIsIDEwMSk7XG4gICAgfVxuXG4gICAgaWYgKCFpbkxpbmUgJiYgIXdyYXBwZXIpIHtcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArIFwibm9yIHdyYXBwZXIgbm9yIGlubGluZSBlbGVtZW50cyBmb3VuZCBvbiB0aGUgQWRcIiwgMTAxKTtcbiAgICB9XG5cbiAgICBpZiAoaW5MaW5lICYmIGluTGluZS5jcmVhdGl2ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbmV3IFZBU1RFcnJvcihlcnJNc2dQcmVmaXggKyBcIm1pc3NpbmcgY3JlYXRpdmUgaW4gSW5MaW5lIGVsZW1lbnRcIiwgMTAxKTtcbiAgICB9XG5cbiAgICBpZiAod3JhcHBlciAmJiAhd3JhcHBlci5WQVNUQWRUYWdVUkkpIHtcbiAgICAgIHJldHVybiBuZXcgVkFTVEVycm9yKGVyck1zZ1ByZWZpeCArIFwibWlzc2luZyAnVkFTVEFkVGFnVVJJJyBpbiB3cmFwcGVyXCIsIDEwMSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVxdWVzdFZBU1RBZChhZFRhZ1VybCwgY2FsbGJhY2spIHtcbiAgICB0aGF0Ll9yZXF1ZXN0VkFTVFhtbChhZFRhZ1VybCwgZnVuY3Rpb24gKGVycm9yLCB4bWxTdHIpIHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIHZhc3RUcmVlID0geG1sLnRvSlhPTlRyZWUoeG1sU3RyKTtcbiAgICAgICAgY2FsbGJhY2sodmFsaWRhdGVWQVNUVHJlZSh2YXN0VHJlZSksIHZhc3RUcmVlLmFkKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FsbGJhY2sobmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuZ2V0VkFTVEFkLnJlcXVlc3RWQVNUQWQsIGVycm9yIHBhcnNpbmcgeG1sXCIsIDEwMCkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5WQVNUQ2xpZW50LnByb3RvdHlwZS5fcmVxdWVzdFZBU1RYbWwgPSBmdW5jdGlvbiByZXF1ZXN0VkFTVFhtbChhZFRhZ1VybCwgY2FsbGJhY2spIHtcbiAgdHJ5IHtcbiAgICBpZiAodXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRUYWdVcmwpKSB7XG4gICAgICBhZFRhZ1VybChyZXF1ZXN0SGFuZGxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGh0dHAuZ2V0KGFkVGFnVXJsLCByZXF1ZXN0SGFuZGxlciwge1xuICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhbGxiYWNrKGUpO1xuICB9XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiByZXF1ZXN0SGFuZGxlcihlcnJvciwgcmVzcG9uc2UsIHN0YXR1cykge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgdmFyIGVyck1zZyA9IHV0aWxpdGllcy5pc0RlZmluZWQoc3RhdHVzKSA/XG4gICAgICBcIm9uIFZBU1RDbGllbnQucmVxdWVzdFZhc3RYTUwsIEhUVFAgcmVxdWVzdCBlcnJvciB3aXRoIHN0YXR1cyAnXCIgKyBzdGF0dXMgKyBcIidcIiA6XG4gICAgICAgIFwib24gVkFTVENsaWVudC5yZXF1ZXN0VmFzdFhNTCwgRXJyb3IgZ2V0dGluZyB0aGUgdGhlIFZBU1QgWE1MIHdpdGggaGUgcGFzc2VkIGFkVGFnWE1MIGZuXCI7XG4gICAgICByZXR1cm4gY2FsbGJhY2sobmV3IFZBU1RFcnJvcihlcnJNc2csIDMwMSksIG51bGwpO1xuICAgIH1cblxuICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlKTtcbiAgfVxufTtcblxuVkFTVENsaWVudC5wcm90b3R5cGUuX2J1aWxkVkFTVFJlc3BvbnNlID0gZnVuY3Rpb24gYnVpbGRWQVNUUmVzcG9uc2UoYWRzQ2hhaW4pIHtcbiAgdmFyIHJlc3BvbnNlID0gbmV3IFZBU1RSZXNwb25zZSgpO1xuICBhZGRBZHNUb1Jlc3BvbnNlKHJlc3BvbnNlLCBhZHNDaGFpbik7XG4gIHZhbGlkYXRlUmVzcG9uc2UocmVzcG9uc2UpO1xuXG4gIHJldHVybiByZXNwb25zZTtcblxuICAvLyoqKiBMb2NhbCBmdW5jdGlvbiAqKioqXG4gIGZ1bmN0aW9uIGFkZEFkc1RvUmVzcG9uc2UocmVzcG9uc2UsIGFkcykge1xuICAgIGFkcy5mb3JFYWNoKGZ1bmN0aW9uIChhZCkge1xuICAgICAgcmVzcG9uc2UuYWRkQWQoYWQpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdmFsaWRhdGVSZXNwb25zZShyZXNwb25zZSkge1xuICAgIHZhciBwcm9ncmVzc0V2ZW50cyA9IHJlc3BvbnNlLnRyYWNraW5nRXZlbnRzLnByb2dyZXNzO1xuXG4gICAgaWYgKCFyZXNwb25zZS5oYXNMaW5lYXIoKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZBU1RDbGllbnQuX2J1aWxkVkFTVFJlc3BvbnNlLCBSZWNlaXZlZCBhbiBBZCB0eXBlIHRoYXQgaXMgbm90IHN1cHBvcnRlZFwiLCAyMDApO1xuICAgIH1cblxuICAgIGlmIChyZXNwb25zZS5kdXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5fYnVpbGRWQVNUUmVzcG9uc2UsIE1pc3NpbmcgZHVyYXRpb24gZmllbGQgaW4gVkFTVCByZXNwb25zZVwiLCAxMDEpO1xuICAgIH1cblxuICAgIGlmIChwcm9ncmVzc0V2ZW50cykge1xuICAgICAgcHJvZ3Jlc3NFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAocHJvZ3Jlc3NFdmVudCkge1xuICAgICAgICBpZiAoIXV0aWxpdGllcy5pc051bWJlcihwcm9ncmVzc0V2ZW50Lm9mZnNldCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVkFTVENsaWVudC5fYnVpbGRWQVNUUmVzcG9uc2UsIG1pc3Npbmcgb3Igd3Jvbmcgb2Zmc2V0IGF0dHJpYnV0ZSBvbiBwcm9ncmVzcyB0cmFja2luZyBldmVudFwiLCAxMDEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cblZBU1RDbGllbnQucHJvdG90eXBlLl90cmFja0Vycm9yID0gZnVuY3Rpb24gKGVycm9yLCBhZENoYWluKSB7XG4gIGlmICghdXRpbGl0aWVzLmlzQXJyYXkoYWRDaGFpbikgfHwgYWRDaGFpbi5sZW5ndGggPT09IDApIHsgLy9UaGVyZSBpcyBub3RoaW5nIHRvIHRyYWNrXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGVycm9yVVJMTWFjcm9zID0gW107XG4gIGFkQ2hhaW4uZm9yRWFjaChhZGRFcnJvclVybE1hY3Jvcyk7XG4gIHZhc3RVdGlsLnRyYWNrKGVycm9yVVJMTWFjcm9zLCB7RVJST1JDT0RFOiBlcnJvci5jb2RlIHx8IDkwMH0pOyAgLy85MDAgPD09IFVuZGVmaW5lZCBlcnJvclxuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICAqKiovXG4gIGZ1bmN0aW9uIGFkZEVycm9yVXJsTWFjcm9zKGFkKSB7XG4gICAgaWYgKGFkLndyYXBwZXIgJiYgYWQud3JhcHBlci5lcnJvcikge1xuICAgICAgZXJyb3JVUkxNYWNyb3MucHVzaChhZC53cmFwcGVyLmVycm9yKTtcbiAgICB9XG5cbiAgICBpZiAoYWQuaW5MaW5lICYmIGFkLmluTGluZS5lcnJvcikge1xuICAgICAgZXJyb3JVUkxNYWNyb3MucHVzaChhZC5pbkxpbmUuZXJyb3IpO1xuICAgIH1cbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWQVNUQ2xpZW50O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBWQVNURXJyb3IobWVzc2FnZSwgY29kZSkge1xuICB0aGlzLm1lc3NhZ2UgPSAnVkFTVCBFcnJvcjogJyArIChtZXNzYWdlIHx8ICcnKTtcbiAgaWYgKGNvZGUpIHtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICB9XG59XG5cblZBU1RFcnJvci5wcm90b3R5cGUgPSBuZXcgRXJyb3IoKTtcblZBU1RFcnJvci5wcm90b3R5cGUubmFtZSA9IFwiVkFTVCBFcnJvclwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZBU1RFcnJvcjsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogSW5uZXIgaGVscGVyIGNsYXNzIHRoYXQgZGVhbHMgd2l0aCB0aGUgbG9naWMgb2YgdGhlIGluZGl2aWR1YWwgc3RlcHMgbmVlZGVkIHRvIHNldHVwIGFuIGFkIGluIHRoZSBwbGF5ZXIuXG4gKlxuICogQHBhcmFtIHBsYXllciB7b2JqZWN0fSBpbnN0YW5jZSBvZiB0aGUgcGxheWVyIHRoYXQgd2lsbCBwbGF5IHRoZSBhZC4gSXQgYXNzdW1lcyB0aGF0IHRoZSB2aWRlb2pzLWNvbnRyaWItYWRzIHBsdWdpblxuICogICAgICAgICAgICAgICAgICAgICAgICBoYXMgYmVlbiBpbml0aWFsaXplZCB3aGVuIHlvdSB1c2UgaXRzIHV0aWxpdHkgZnVuY3Rpb25zLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbnZhciBWQVNUUmVzcG9uc2UgPSByZXF1aXJlKCcuL1ZBU1RSZXNwb25zZScpO1xudmFyIFZBU1RFcnJvciA9IHJlcXVpcmUoJy4vVkFTVEVycm9yJyk7XG52YXIgVkFTVFRyYWNrZXIgPSByZXF1aXJlKCcuL1ZBU1RUcmFja2VyJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG5cbnZhciBhc3luYyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2FzeW5jJyk7XG52YXIgZG9tID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZG9tJyk7XG52YXIgcGxheWVyVXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9wbGF5ZXJVdGlscycpO1xudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gVkFTVEludGVncmF0b3IocGxheWVyKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWQVNUSW50ZWdyYXRvcikpIHtcbiAgICByZXR1cm4gbmV3IFZBU1RJbnRlZ3JhdG9yKHBsYXllcik7XG4gIH1cblxuICB0aGlzLnBsYXllciA9IHBsYXllcjtcbn1cblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLnBsYXlBZCA9IGZ1bmN0aW9uIHBsYXlBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgY2FsbGJhY2sgPSBjYWxsYmFjayB8fCB1dGlsaXRpZXMubm9vcDtcblxuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoJ09uIFZBU1RJbnRlZ3JhdG9yLCBtaXNzaW5nIHJlcXVpcmVkIFZBU1RSZXNwb25zZScpKTtcbiAgfVxuXG4gIGFzeW5jLndhdGVyZmFsbChbXG4gICAgZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIG5leHQobnVsbCwgdmFzdFJlc3BvbnNlKTtcbiAgICB9LFxuICAgIHRoaXMuX3NlbGVjdEFkU291cmNlLmJpbmQodGhpcyksXG4gICAgdGhpcy5fY3JlYXRlVkFTVFRyYWNrZXIuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9hZGRDbGlja1Rocm91Z2guYmluZCh0aGlzKSxcbiAgICB0aGlzLl9hZGRTa2lwQnV0dG9uLmJpbmQodGhpcyksXG4gICAgdGhpcy5fc2V0dXBFdmVudHMuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9wbGF5U2VsZWN0ZWRBZC5iaW5kKHRoaXMpXG4gIF0sIGZ1bmN0aW9uIChlcnJvciwgcmVzcG9uc2UpIHtcbiAgICBpZiAoZXJyb3IgJiYgcmVzcG9uc2UpIHtcbiAgICAgIHRoYXQuX3RyYWNrRXJyb3IoZXJyb3IsIHJlc3BvbnNlKTtcbiAgICB9XG4gICAgY2FsbGJhY2soZXJyb3IsIHJlc3BvbnNlKTtcbiAgfSk7XG5cbiAgdGhpcy5fYWRVbml0ID0ge1xuICAgIF9zcmM6IG51bGwsXG4gICAgdHlwZTogJ1ZBU1QnLFxuICAgIHBhdXNlQWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQucGxheWVyLnBhdXNlKHRydWUpO1xuICAgIH0sXG5cbiAgICByZXN1bWVBZDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5wbGF5ZXIucGxheSh0cnVlKTtcbiAgICB9LFxuXG4gICAgaXNQYXVzZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGF0LnBsYXllci5wYXVzZWQodHJ1ZSk7XG4gICAgfSxcblxuICAgIGdldFNyYzogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NyYztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHRoaXMuX2FkVW5pdDtcbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fc2VsZWN0QWRTb3VyY2UgPSBmdW5jdGlvbiBzZWxlY3RBZFNvdXJjZShyZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgdmFyIHNvdXJjZTtcblxuICB2YXIgcGxheWVyV2lkdGggPSBkb20uZ2V0RGltZW5zaW9uKHRoaXMucGxheWVyLmVsKCkpLndpZHRoO1xuICByZXNwb25zZS5tZWRpYUZpbGVzLnNvcnQoZnVuY3Rpb24gY29tcGFyZVRvKGEsIGIpIHtcbiAgICB2YXIgZGVsdGFBID0gTWF0aC5hYnMocGxheWVyV2lkdGggLSBhLndpZHRoKTtcbiAgICB2YXIgZGVsdGFCID0gTWF0aC5hYnMocGxheWVyV2lkdGggLSBiLndpZHRoKTtcbiAgICByZXR1cm4gZGVsdGFBIC0gZGVsdGFCO1xuICB9KTtcblxuICBzb3VyY2UgPSB0aGlzLnBsYXllci5zZWxlY3RTb3VyY2UocmVzcG9uc2UubWVkaWFGaWxlcykuc291cmNlO1xuXG4gIGlmIChzb3VyY2UpIHtcbiAgICBpZiAodGhpcy5fYWRVbml0KSB7XG4gICAgICB0aGlzLl9hZFVuaXQuX3NyYyA9IHNvdXJjZTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHNvdXJjZSwgcmVzcG9uc2UpO1xuICB9XG5cbiAgLy8gY29kZSA0MDMgPD09IENvdWxkbid0IGZpbmQgTWVkaWFGaWxlIHRoYXQgaXMgc3VwcG9ydGVkIGJ5IHRoaXMgdmlkZW8gcGxheWVyXG4gIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoXCJDb3VsZCBub3QgZmluZCBBZCBtZWRpYWZpbGUgc3VwcG9ydGVkIGJ5IHRoaXMgcGxheWVyXCIsIDQwMyksIHJlc3BvbnNlKTtcbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fY3JlYXRlVkFTVFRyYWNrZXIgPSBmdW5jdGlvbiBjcmVhdGVWQVNUVHJhY2tlcihhZE1lZGlhRmlsZSwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHRyeSB7XG4gICAgY2FsbGJhY2sobnVsbCwgYWRNZWRpYUZpbGUsIG5ldyBWQVNUVHJhY2tlcihhZE1lZGlhRmlsZS5zcmMsIHJlc3BvbnNlKSwgcmVzcG9uc2UpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FsbGJhY2soZSwgcmVzcG9uc2UpO1xuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3NldHVwRXZlbnRzID0gZnVuY3Rpb24gc2V0dXBFdmVudHMoYWRNZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgcHJldmlvdXNseU11dGVkO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG4gIHBsYXllci5vbignZnVsbHNjcmVlbmNoYW5nZScsIHRyYWNrRnVsbHNjcmVlbkNoYW5nZSk7XG4gIHBsYXllci5vbigndmFzdC5hZFN0YXJ0JywgdHJhY2tJbXByZXNzaW9ucyk7XG4gIHBsYXllci5vbigncGF1c2UnLCB0cmFja1BhdXNlKTtcbiAgcGxheWVyLm9uKCd0aW1ldXBkYXRlJywgdHJhY2tQcm9ncmVzcyk7XG4gIHBsYXllci5vbigndm9sdW1lY2hhbmdlJywgdHJhY2tWb2x1bWVDaGFuZ2UpO1xuXG4gIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgdW5iaW5kRXZlbnRzKTtcbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCcsICd2YXN0LmFkU2tpcCddLCBmdW5jdGlvbihldnQpe1xuICAgIGlmKGV2dC50eXBlID09PSAndmFzdC5hZEVuZCcpe1xuICAgICAgdHJhY2tlci50cmFja0NvbXBsZXRlKCk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY2FsbGJhY2sobnVsbCwgYWRNZWRpYUZpbGUsIHJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHVuYmluZEV2ZW50cygpIHtcbiAgICBwbGF5ZXIub2ZmKCdmdWxsc2NyZWVuY2hhbmdlJywgdHJhY2tGdWxsc2NyZWVuQ2hhbmdlKTtcbiAgICBwbGF5ZXIub2ZmKCd2YXN0LmFkU3RhcnQnLCB0cmFja0ltcHJlc3Npb25zKTtcbiAgICBwbGF5ZXIub2ZmKCdwYXVzZScsIHRyYWNrUGF1c2UpO1xuICAgIHBsYXllci5vZmYoJ3RpbWV1cGRhdGUnLCB0cmFja1Byb2dyZXNzKTtcbiAgICBwbGF5ZXIub2ZmKCd2b2x1bWVjaGFuZ2UnLCB0cmFja1ZvbHVtZUNoYW5nZSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0Z1bGxzY3JlZW5DaGFuZ2UoKSB7XG4gICAgaWYgKHBsYXllci5pc0Z1bGxzY3JlZW4oKSkge1xuICAgICAgdHJhY2tlci50cmFja0Z1bGxzY3JlZW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhY2tlci50cmFja0V4aXRGdWxsc2NyZWVuKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tQYXVzZSgpIHtcbiAgICAvL05PVEU6IHdoZW5ldmVyIGEgdmlkZW8gZW5kcyB0aGUgdmlkZW8gRWxlbWVudCB0cmlnZ2VycyBhICdwYXVzZScgZXZlbnQgYmVmb3JlIHRoZSAnZW5kZWQnIGV2ZW50LlxuICAgIC8vICAgICAgV2Ugc2hvdWxkIG5vdCB0cmFjayB0aGlzIHBhdXNlIGV2ZW50IGJlY2F1c2UgaXQgbWFrZXMgdGhlIFZBU1QgdHJhY2tpbmcgY29uZnVzaW5nIGFnYWluIHdlIHVzZSBhXG4gICAgLy8gICAgICBUaHJlc2hvbGQgb2YgMiBzZWNvbmRzIHRvIHByZXZlbnQgZmFsc2UgcG9zaXRpdmVzIG9uIElPUy5cbiAgICBpZiAoTWF0aC5hYnMocGxheWVyLmR1cmF0aW9uKCkgLSBwbGF5ZXIuY3VycmVudFRpbWUoKSkgPCAyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJhY2tlci50cmFja1BhdXNlKCk7XG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsncGxheScsICd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmKGV2dC50eXBlID09PSAncGxheScpe1xuICAgICAgICB0cmFja2VyLnRyYWNrUmVzdW1lKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja1Byb2dyZXNzKCkge1xuICAgIHZhciBjdXJyZW50VGltZUluTXMgPSBwbGF5ZXIuY3VycmVudFRpbWUoKSAqIDEwMDA7XG4gICAgdHJhY2tlci50cmFja1Byb2dyZXNzKGN1cnJlbnRUaW1lSW5Ncyk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFja0ltcHJlc3Npb25zKCkge1xuICAgIHRyYWNrZXIudHJhY2tJbXByZXNzaW9ucygpO1xuICAgIHRyYWNrZXIudHJhY2tDcmVhdGl2ZVZpZXcoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrVm9sdW1lQ2hhbmdlKCkge1xuICAgIHZhciBtdXRlZCA9IHBsYXllci5tdXRlZCgpO1xuICAgIGlmIChtdXRlZCkge1xuICAgICAgdHJhY2tlci50cmFja011dGUoKTtcbiAgICB9IGVsc2UgaWYgKHByZXZpb3VzbHlNdXRlZCkge1xuICAgICAgdHJhY2tlci50cmFja1VubXV0ZSgpO1xuICAgIH1cbiAgICBwcmV2aW91c2x5TXV0ZWQgPSBtdXRlZDtcbiAgfVxufTtcblxuVkFTVEludGVncmF0b3IucHJvdG90eXBlLl9hZGRTa2lwQnV0dG9uID0gZnVuY3Rpb24gYWRkU2tpcEJ1dHRvbihzb3VyY2UsIHRyYWNrZXIsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgc2tpcE9mZnNldEluU2VjO1xuICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihyZXNwb25zZS5za2lwb2Zmc2V0KSkge1xuICAgIHNraXBPZmZzZXRJblNlYyA9IHJlc3BvbnNlLnNraXBvZmZzZXQgLyAxMDAwO1xuICAgIGFkZFNraXBCdXR0b25Ub1BsYXllcih0aGlzLnBsYXllciwgc2tpcE9mZnNldEluU2VjKTtcbiAgfVxuICBjYWxsYmFjayhudWxsLCBzb3VyY2UsIHRyYWNrZXIsIHJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgZnVuY3Rpb24gYWRkU2tpcEJ1dHRvblRvUGxheWVyKHBsYXllciwgc2tpcE9mZnNldCkge1xuICAgIHZhciBza2lwQnV0dG9uID0gY3JlYXRlU2tpcEJ1dHRvbihwbGF5ZXIpO1xuICAgIHZhciB1cGRhdGVTa2lwQnV0dG9uID0gdXBkYXRlU2tpcEJ1dHRvblN0YXRlLmJpbmQodGhhdCwgc2tpcEJ1dHRvbiwgc2tpcE9mZnNldCwgcGxheWVyKTtcblxuICAgIHBsYXllci5lbCgpLmFwcGVuZENoaWxkKHNraXBCdXR0b24pO1xuICAgIHBsYXllci5vbigndGltZXVwZGF0ZScsIHVwZGF0ZVNraXBCdXR0b24pO1xuXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZEVuZCcsICd2YXN0LmFkc0NhbmNlbCddLCByZW1vdmVTa2lwQnV0dG9uKTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZVNraXBCdXR0b24oKSB7XG4gICAgICBwbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgdXBkYXRlU2tpcEJ1dHRvbik7XG4gICAgICBkb20ucmVtb3ZlKHNraXBCdXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNraXBCdXR0b24ocGxheWVyKSB7XG4gICAgdmFyIHNraXBCdXR0b24gPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgXCJ2YXN0LXNraXAtYnV0dG9uXCIpO1xuXG4gICAgc2tpcEJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChkb20uaGFzQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKSkge1xuICAgICAgICB0cmFja2VyLnRyYWNrU2tpcCgpO1xuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZFNraXAnKTtcbiAgICAgIH1cblxuICAgICAgLy9XZSBwcmV2ZW50IGV2ZW50IHByb3BhZ2F0aW9uIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIGNsaWNrVGhyb3VnaCBhbmQgc28gb25cbiAgICAgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBza2lwQnV0dG9uO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2tpcEJ1dHRvblN0YXRlKHNraXBCdXR0b24sIHNraXBPZmZzZXQsIHBsYXllcikge1xuICAgIHZhciB0aW1lTGVmdCA9IE1hdGguY2VpbChza2lwT2Zmc2V0IC0gcGxheWVyLmN1cnJlbnRUaW1lKCkpO1xuICAgIGlmICh0aW1lTGVmdCA+IDApIHtcbiAgICAgIHNraXBCdXR0b24uaW5uZXJIVE1MID0gXCJTa2lwIGluIFwiICsgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHModGltZUxlZnQsIDIpICsgXCIuLi5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFkb20uaGFzQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKSkge1xuICAgICAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgJ2VuYWJsZWQnKTtcbiAgICAgICAgc2tpcEJ1dHRvbi5pbm5lckhUTUwgPSBcIlNraXAgYWRcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fYWRkQ2xpY2tUaHJvdWdoID0gZnVuY3Rpb24gYWRkQ2xpY2tUaHJvdWdoKG1lZGlhRmlsZSwgdHJhY2tlciwgcmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgdmFyIGJsb2NrZXIgPSBjcmVhdGVDbGlja1Rocm91Z2hCbG9ja2VyKHBsYXllciwgdHJhY2tlciwgcmVzcG9uc2UpO1xuICB2YXIgdXBkYXRlQmxvY2tlciA9IHVwZGF0ZUJsb2NrZXJVUkwuYmluZCh0aGlzLCBibG9ja2VyLCByZXNwb25zZSwgcGxheWVyKTtcblxuICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoYmxvY2tlciwgcGxheWVyLmNvbnRyb2xCYXIuZWwoKSk7XG4gIHBsYXllci5vbigndGltZXVwZGF0ZScsIHVwZGF0ZUJsb2NrZXIpO1xuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZUJsb2NrZXIpO1xuXG4gIHJldHVybiBjYWxsYmFjayhudWxsLCBtZWRpYUZpbGUsIHRyYWNrZXIsIHJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2xpY2tUaHJvdWdoQmxvY2tlcihwbGF5ZXIsIHRyYWNrZXIsIHJlc3BvbnNlKSB7XG4gICAgdmFyIGJsb2NrZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgdmFyIGNsaWNrVGhyb3VnaE1hY3JvID0gcmVzcG9uc2UuY2xpY2tUaHJvdWdoO1xuXG4gICAgZG9tLmFkZENsYXNzKGJsb2NrZXIsICd2YXN0LWJsb2NrZXInKTtcbiAgICBibG9ja2VyLmhyZWYgPSBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTChjbGlja1Rocm91Z2hNYWNybywgcGxheWVyKTtcblxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoY2xpY2tUaHJvdWdoTWFjcm8pKSB7XG4gICAgICBibG9ja2VyLnRhcmdldCA9IFwiX2JsYW5rXCI7XG4gICAgfVxuXG4gICAgYmxvY2tlci5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChwbGF5ZXIucGF1c2VkKCkpIHtcbiAgICAgICAgcGxheWVyLnBsYXkoKTtcblxuICAgICAgICAvL1dlIHByZXZlbnQgZXZlbnQgcHJvcGFnYXRpb24gdG8gYXZvaWQgcHJvYmxlbXMgd2l0aCB0aGUgcGxheWVyJ3Mgbm9ybWFsIHBhdXNlIG1lY2hhbmlzbVxuICAgICAgICBpZiAod2luZG93LkV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAgIHRyYWNrZXIudHJhY2tDbGljaygpO1xuICAgIH07XG5cbiAgICByZXR1cm4gYmxvY2tlcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUJsb2NrZXJVUkwoYmxvY2tlciwgcmVzcG9uc2UsIHBsYXllcikge1xuICAgIGJsb2NrZXIuaHJlZiA9IGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKHJlc3BvbnNlLmNsaWNrVGhyb3VnaCwgcGxheWVyKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdlbmVyYXRlQ2xpY2tUaHJvdWdoVVJMKGNsaWNrVGhyb3VnaE1hY3JvLCBwbGF5ZXIpIHtcbiAgICB2YXIgdmFyaWFibGVzID0ge1xuICAgICAgQVNTRVRVUkk6IG1lZGlhRmlsZS5zcmMsXG4gICAgICBDT05URU5UUExBWUhFQUQ6IHZhc3RVdGlsLmZvcm1hdFByb2dyZXNzKHBsYXllci5jdXJyZW50VGltZSgpICogMTAwMClcbiAgICB9O1xuXG4gICAgcmV0dXJuIGNsaWNrVGhyb3VnaE1hY3JvID8gdmFzdFV0aWwucGFyc2VVUkxNYWNybyhjbGlja1Rocm91Z2hNYWNybywgdmFyaWFibGVzKSA6ICcjJztcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUJsb2NrZXIoKSB7XG4gICAgcGxheWVyLm9mZigndGltZXVwZGF0ZScsIHVwZGF0ZUJsb2NrZXIpO1xuICAgIGRvbS5yZW1vdmUoYmxvY2tlcik7XG4gIH1cbn07XG5cblZBU1RJbnRlZ3JhdG9yLnByb3RvdHlwZS5fcGxheVNlbGVjdGVkQWQgPSBmdW5jdGlvbiBwbGF5U2VsZWN0ZWRBZChzb3VyY2UsIHJlc3BvbnNlLCBjYWxsYmFjaykge1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cbiAgcGxheWVyLnByZWxvYWQoXCJhdXRvXCIpOyAvL3dpdGhvdXQgcHJlbG9hZD1hdXRvIHRoZSBkdXJhdGlvbmNoYW5nZSBldmVudCBpcyBuZXZlciBmaXJlZFxuICBwbGF5ZXIuc3JjKHNvdXJjZSk7XG5cbiAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsnZHVyYXRpb25jaGFuZ2UnLCAnZXJyb3InLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmIChldnQudHlwZSA9PT0gJ2R1cmF0aW9uY2hhbmdlJykge1xuICAgICAgcGxheUFkKCk7XG4gICAgfSBlbHNlIGlmKGV2dC50eXBlID09PSAnZXJyb3InKSB7XG4gICAgICBjYWxsYmFjayhuZXcgVkFTVEVycm9yKFwib24gVkFTVEludGVncmF0b3IsIFBsYXllciBpcyB1bmFibGUgdG8gcGxheSB0aGUgQWRcIiwgNDAwKSwgcmVzcG9uc2UpO1xuICAgIH1cbiAgICAvL05PVEU6IElmIHRoZSBhZHMgZ2V0IGNhbmNlbGVkIHdlIGRvIG5vdGhpbmcvXG4gIH0pO1xuXG4gIC8qKioqIGxvY2FsIGZ1bmN0aW9ucyAqKioqKiovXG4gIGZ1bmN0aW9uIHBsYXlBZCgpIHtcbiAgICBwbGF5ZXIucGxheSgpO1xuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnLCAndmFzdC5hZHNDYW5jZWwnXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgaWYoZXZ0LnR5cGUgPT09ICd2YXN0LmFkc0NhbmNlbCcpe1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU3RhcnQnKTtcblxuICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsnZW5kZWQnLCAndmFzdC5hZHNDYW5jZWwnLCAndmFzdC5hZFNraXAnXSwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBpZihldnQudHlwZSA9PT0gJ2VuZGVkJyB8fCBldnQudHlwZSA9PT0gJ3Zhc3QuYWRTa2lwJyl7XG4gICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vTk9URTogaWYgdGhlIGFkcyBnZXQgY2FuY2VsIHdlIGRvIG5vdGhpbmdcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59O1xuXG5WQVNUSW50ZWdyYXRvci5wcm90b3R5cGUuX3RyYWNrRXJyb3IgPSBmdW5jdGlvbiB0cmFja0Vycm9yKGVycm9yLCByZXNwb25zZSkge1xuICB2YXN0VXRpbC50cmFjayhyZXNwb25zZS5lcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogZXJyb3IuY29kZSB8fCA5MDB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVkFTVEludGVncmF0b3I7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQWQgPSByZXF1aXJlKCcuL0FkJyk7XG52YXIgVmlkZW9DbGlja3MgPSByZXF1aXJlKCcuL1ZpZGVvQ2xpY2tzJyk7XG52YXIgTGluZWFyID0gcmVxdWlyZSgnLi9MaW5lYXInKTtcbnZhciBJbkxpbmUgPSByZXF1aXJlKCcuL0luTGluZScpO1xudmFyIFdyYXBwZXIgPSByZXF1aXJlKCcuL1dyYXBwZXInKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciB4bWwgPSByZXF1aXJlKCcuLi8uLi91dGlscy94bWwnKTtcblxud2luZG93LkluTGluZV9fQSA9IEluTGluZTtcbmZ1bmN0aW9uIFZBU1RSZXNwb25zZSgpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFZBU1RSZXNwb25zZSkpIHtcbiAgICByZXR1cm4gbmV3IFZBU1RSZXNwb25zZSgpO1xuICB9XG5cbiAgdGhpcy5fbGluZWFyQWRkZWQgPSBmYWxzZTtcbiAgdGhpcy5hZHMgPSBbXTtcbiAgdGhpcy5lcnJvclVSTE1hY3JvcyA9IFtdO1xuICB0aGlzLmltcHJlc3Npb25zID0gW107XG4gIHRoaXMuY2xpY2tUcmFja2luZ3MgPSBbXTtcbiAgdGhpcy5jdXN0b21DbGlja3MgPSBbXTtcbiAgdGhpcy50cmFja2luZ0V2ZW50cyA9IHt9O1xuICB0aGlzLm1lZGlhRmlsZXMgPSBbXTtcbiAgdGhpcy5jbGlja1Rocm91Z2ggPSB1bmRlZmluZWQ7XG4gIHRoaXMuYWRUaXRsZSA9ICcnO1xuICB0aGlzLmR1cmF0aW9uID0gdW5kZWZpbmVkO1xuICB0aGlzLnNraXBvZmZzZXQgPSB1bmRlZmluZWQ7XG59XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuYWRkQWQgPSBmdW5jdGlvbiAoYWQpIHtcbiAgdmFyIGluTGluZSwgd3JhcHBlcjtcbiAgaWYgKGFkIGluc3RhbmNlb2YgQWQpIHtcbiAgICBpbkxpbmUgPSBhZC5pbkxpbmU7XG4gICAgd3JhcHBlciA9IGFkLndyYXBwZXI7XG5cbiAgICB0aGlzLmFkcy5wdXNoKGFkKTtcblxuICAgIGlmIChpbkxpbmUpIHtcbiAgICAgIHRoaXMuX2FkZEluTGluZShpbkxpbmUpO1xuICAgIH1cblxuICAgIGlmICh3cmFwcGVyKSB7XG4gICAgICB0aGlzLl9hZGRXcmFwcGVyKHdyYXBwZXIpO1xuICAgIH1cbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkRXJyb3JUcmFja1VybCA9IGZ1bmN0aW9uIChlcnJvcikge1xuICB2YXIgZXJyb3JVUkwgPSBlcnJvciBpbnN0YW5jZW9mIHhtbC5KWE9OVHJlZSA/IHhtbC5rZXlWYWx1ZShlcnJvcikgOiBlcnJvcjtcbiAgaWYgKGVycm9yVVJMKSB7XG4gICAgdGhpcy5lcnJvclVSTE1hY3Jvcy5wdXNoKGVycm9yVVJMKTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkSW1wcmVzc2lvbnMgPSBmdW5jdGlvbiAoaW1wcmVzc2lvbnMpIHtcbiAgdXRpbGl0aWVzLmlzQXJyYXkoaW1wcmVzc2lvbnMpICYmIGFwcGVuZFRvQXJyYXkodGhpcy5pbXByZXNzaW9ucywgaW1wcmVzc2lvbnMpO1xufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQ2xpY2tUaHJvdWdoID0gZnVuY3Rpb24gKGNsaWNrVGhyb3VnaCkge1xuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY2xpY2tUaHJvdWdoKSkge1xuICAgIHRoaXMuY2xpY2tUaHJvdWdoID0gY2xpY2tUaHJvdWdoO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRDbGlja1RyYWNraW5ncyA9IGZ1bmN0aW9uIChjbGlja1RyYWNraW5ncykge1xuICB1dGlsaXRpZXMuaXNBcnJheShjbGlja1RyYWNraW5ncykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmNsaWNrVHJhY2tpbmdzLCBjbGlja1RyYWNraW5ncyk7XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRDdXN0b21DbGlja3MgPSBmdW5jdGlvbiAoY3VzdG9tQ2xpY2tzKSB7XG4gIHV0aWxpdGllcy5pc0FycmF5KGN1c3RvbUNsaWNrcykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLmN1c3RvbUNsaWNrcywgY3VzdG9tQ2xpY2tzKTtcbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFRyYWNraW5nRXZlbnRzID0gZnVuY3Rpb24gKHRyYWNraW5nRXZlbnRzKSB7XG4gIHZhciBldmVudHNNYXAgPSB0aGlzLnRyYWNraW5nRXZlbnRzO1xuXG4gIGlmICh0cmFja2luZ0V2ZW50cykge1xuICAgIHRyYWNraW5nRXZlbnRzID0gdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tpbmdFdmVudHMpID8gdHJhY2tpbmdFdmVudHMgOiBbdHJhY2tpbmdFdmVudHNdO1xuICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNraW5nRXZlbnQpIHtcbiAgICAgIGlmICghZXZlbnRzTWFwW3RyYWNraW5nRXZlbnQubmFtZV0pIHtcbiAgICAgICAgZXZlbnRzTWFwW3RyYWNraW5nRXZlbnQubmFtZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIGV2ZW50c01hcFt0cmFja2luZ0V2ZW50Lm5hbWVdLnB1c2godHJhY2tpbmdFdmVudCk7XG4gICAgfSk7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFRpdGxlID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gIGlmICh1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyh0aXRsZSkpIHtcbiAgICB0aGlzLmFkVGl0bGUgPSB0aXRsZTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkRHVyYXRpb24gPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgaWYgKHV0aWxpdGllcy5pc051bWJlcihkdXJhdGlvbikpIHtcbiAgICB0aGlzLmR1cmF0aW9uID0gZHVyYXRpb247XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZFZpZGVvQ2xpY2tzID0gZnVuY3Rpb24gKHZpZGVvQ2xpY2tzKSB7XG4gIGlmICh2aWRlb0NsaWNrcyBpbnN0YW5jZW9mIFZpZGVvQ2xpY2tzKSB7XG4gICAgdGhpcy5fYWRkQ2xpY2tUaHJvdWdoKHZpZGVvQ2xpY2tzLmNsaWNrVGhyb3VnaCk7XG4gICAgdGhpcy5fYWRkQ2xpY2tUcmFja2luZ3ModmlkZW9DbGlja3MuY2xpY2tUcmFja2luZ3MpO1xuICAgIHRoaXMuX2FkZEN1c3RvbUNsaWNrcyh2aWRlb0NsaWNrcy5jdXN0b21DbGlja3MpO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRNZWRpYUZpbGVzID0gZnVuY3Rpb24gKG1lZGlhRmlsZXMpIHtcbiAgdXRpbGl0aWVzLmlzQXJyYXkobWVkaWFGaWxlcykgJiYgYXBwZW5kVG9BcnJheSh0aGlzLm1lZGlhRmlsZXMsIG1lZGlhRmlsZXMpO1xufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkU2tpcG9mZnNldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgaWYgKG9mZnNldCkge1xuICAgIHRoaXMuc2tpcG9mZnNldCA9IG9mZnNldDtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5fYWRkQWRQYXJhbWV0ZXJzID0gZnVuY3Rpb24gKGFkUGFyYW1ldGVycykge1xuICBpZiAoYWRQYXJhbWV0ZXJzKSB7XG4gICAgdGhpcy5hZFBhcmFtZXRlcnMgPSBhZFBhcmFtZXRlcnM7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZExpbmVhciA9IGZ1bmN0aW9uIChsaW5lYXIpIHtcbiAgaWYgKGxpbmVhciBpbnN0YW5jZW9mIExpbmVhcikge1xuICAgIHRoaXMuX2FkZER1cmF0aW9uKGxpbmVhci5kdXJhdGlvbik7XG4gICAgdGhpcy5fYWRkVHJhY2tpbmdFdmVudHMobGluZWFyLnRyYWNraW5nRXZlbnRzKTtcbiAgICB0aGlzLl9hZGRWaWRlb0NsaWNrcyhsaW5lYXIudmlkZW9DbGlja3MpO1xuICAgIHRoaXMuX2FkZE1lZGlhRmlsZXMobGluZWFyLm1lZGlhRmlsZXMpO1xuICAgIHRoaXMuX2FkZFNraXBvZmZzZXQobGluZWFyLnNraXBvZmZzZXQpO1xuICAgIHRoaXMuX2FkZEFkUGFyYW1ldGVycyhsaW5lYXIuYWRQYXJhbWV0ZXJzKTtcbiAgICB0aGlzLl9saW5lYXJBZGRlZCA9IHRydWU7XG4gIH1cbn07XG5cblZBU1RSZXNwb25zZS5wcm90b3R5cGUuX2FkZEluTGluZSA9IGZ1bmN0aW9uIChpbkxpbmUpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIGlmIChpbkxpbmUgaW5zdGFuY2VvZiBJbkxpbmUpIHtcbiAgICB0aGlzLl9hZGRUaXRsZShpbkxpbmUuYWRUaXRsZSk7XG4gICAgdGhpcy5fYWRkRXJyb3JUcmFja1VybChpbkxpbmUuZXJyb3IpO1xuICAgIHRoaXMuX2FkZEltcHJlc3Npb25zKGluTGluZS5pbXByZXNzaW9ucyk7XG5cbiAgICBpbkxpbmUuY3JlYXRpdmVzLmZvckVhY2goZnVuY3Rpb24gKGNyZWF0aXZlKSB7XG4gICAgICBpZiAoY3JlYXRpdmUubGluZWFyKSB7XG4gICAgICAgIHRoYXQuX2FkZExpbmVhcihjcmVhdGl2ZS5saW5lYXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5WQVNUUmVzcG9uc2UucHJvdG90eXBlLl9hZGRXcmFwcGVyID0gZnVuY3Rpb24gKHdyYXBwZXIpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIGlmICh3cmFwcGVyIGluc3RhbmNlb2YgV3JhcHBlcikge1xuICAgIHRoaXMuX2FkZEVycm9yVHJhY2tVcmwod3JhcHBlci5lcnJvcik7XG4gICAgdGhpcy5fYWRkSW1wcmVzc2lvbnMod3JhcHBlci5pbXByZXNzaW9ucyk7XG5cbiAgICB3cmFwcGVyLmNyZWF0aXZlcy5mb3JFYWNoKGZ1bmN0aW9uIChjcmVhdGl2ZSkge1xuICAgICAgdmFyIGxpbmVhciA9IGNyZWF0aXZlLmxpbmVhcjtcbiAgICAgIGlmIChsaW5lYXIpIHtcbiAgICAgICAgdGhhdC5fYWRkVmlkZW9DbGlja3MobGluZWFyLnZpZGVvQ2xpY2tzKTtcbiAgICAgICAgdGhhdC5jbGlja1Rocm91Z2ggPSB1bmRlZmluZWQ7Ly9XZSBlbnN1cmUgdGhhdCBubyBjbGlja1Rocm91Z2ggaGFzIGJlZW4gYWRkZWRcbiAgICAgICAgdGhhdC5fYWRkVHJhY2tpbmdFdmVudHMobGluZWFyLnRyYWNraW5nRXZlbnRzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuVkFTVFJlc3BvbnNlLnByb3RvdHlwZS5oYXNMaW5lYXIgPSBmdW5jdGlvbigpe1xuICByZXR1cm4gdGhpcy5fbGluZWFyQWRkZWQ7XG59O1xuXG5mdW5jdGlvbiBhcHBlbmRUb0FycmF5KGFycmF5LCBpdGVtcykge1xuICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgYXJyYXkucHVzaChpdGVtKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVkFTVFJlc3BvbnNlO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuL1ZBU1RFcnJvcicpO1xudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4vVkFTVFJlc3BvbnNlJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuL3Zhc3RVdGlsJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5mdW5jdGlvbiBWQVNUVHJhY2tlcihhc3NldFVSSSwgdmFzdFJlc3BvbnNlKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWQVNUVHJhY2tlcikpIHtcbiAgICByZXR1cm4gbmV3IFZBU1RUcmFja2VyKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpO1xuICB9XG5cbiAgdGhpcy5zYW5pdHlDaGVjayhhc3NldFVSSSwgdmFzdFJlc3BvbnNlKTtcbiAgdGhpcy5pbml0aWFsaXplKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpO1xuXG59XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24oYXNzZXRVUkksIHZhc3RSZXNwb25zZSkge1xuICB0aGlzLnJlc3BvbnNlID0gdmFzdFJlc3BvbnNlO1xuICB0aGlzLmFzc2V0VVJJID0gYXNzZXRVUkk7XG4gIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICB0aGlzLnF1YXJ0aWxlcyA9IHtcbiAgICBmaXJzdFF1YXJ0aWxlOiB7dHJhY2tlZDogZmFsc2UsIHRpbWU6IE1hdGgucm91bmQoMjUgKiB2YXN0UmVzcG9uc2UuZHVyYXRpb24pIC8gMTAwfSxcbiAgICBtaWRwb2ludDoge3RyYWNrZWQ6IGZhbHNlLCB0aW1lOiBNYXRoLnJvdW5kKDUwICogdmFzdFJlc3BvbnNlLmR1cmF0aW9uKSAvIDEwMH0sXG4gICAgdGhpcmRRdWFydGlsZToge3RyYWNrZWQ6IGZhbHNlLCB0aW1lOiBNYXRoLnJvdW5kKDc1ICogdmFzdFJlc3BvbnNlLmR1cmF0aW9uKSAvIDEwMH1cbiAgfTtcbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS5zYW5pdHlDaGVjayA9IGZ1bmN0aW9uKGFzc2V0VVJJLCB2YXN0UmVzcG9uc2UpIHtcbiAgaWYgKCF1dGlsaXRpZXMuaXNTdHJpbmcoYXNzZXRVUkkpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKGFzc2V0VVJJKSkge1xuICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZBU1RUcmFja2VyIGNvbnN0cnVjdG9yLCBtaXNzaW5nIHJlcXVpcmVkIHRoZSBVUkkgb2YgdGhlIGFkIGFzc2V0IGJlaW5nIHBsYXllZCcpO1xuICB9XG5cbiAgaWYgKCEodmFzdFJlc3BvbnNlIGluc3RhbmNlb2YgVkFTVFJlc3BvbnNlKSkge1xuICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZBU1RUcmFja2VyIGNvbnN0cnVjdG9yLCBtaXNzaW5nIHJlcXVpcmVkIFZBU1QgcmVzcG9uc2UnKTtcbiAgfVxufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrVVJMcyA9IGZ1bmN0aW9uIHRyYWNrVVJMcyh1cmxzLCB2YXJpYWJsZXMpIHtcbiAgaWYgKHV0aWxpdGllcy5pc0FycmF5KHVybHMpICYmIHVybHMubGVuZ3RoID4gMCkge1xuICAgIHZhcmlhYmxlcyA9IHV0aWxpdGllcy5leHRlbmQoe1xuICAgICAgQVNTRVRVUkk6IHRoaXMuYXNzZXRVUkksXG4gICAgICBDT05URU5UUExBWUhFQUQ6IHZhc3RVdGlsLmZvcm1hdFByb2dyZXNzKHRoaXMucHJvZ3Jlc3MpXG4gICAgfSwgdmFyaWFibGVzIHx8IHt9KTtcblxuICAgIHZhc3RVdGlsLnRyYWNrKHVybHMsIHZhcmlhYmxlcyk7XG4gIH1cbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0V2ZW50ID0gZnVuY3Rpb24gdHJhY2tFdmVudChldmVudE5hbWUsIHRyYWNrT25jZSkge1xuICB0aGlzLnRyYWNrVVJMcyhnZXRFdmVudFVyaXModGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50c1tldmVudE5hbWVdKSk7XG4gIGlmICh0cmFja09uY2UpIHtcbiAgICB0aGlzLnJlc3BvbnNlLnRyYWNraW5nRXZlbnRzW2V2ZW50TmFtZV0gPSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgZnVuY3Rpb24gZ2V0RXZlbnRVcmlzKHRyYWNraW5nRXZlbnRzKSB7XG4gICAgdmFyIHVyaXM7XG5cbiAgICBpZiAodHJhY2tpbmdFdmVudHMpIHtcbiAgICAgIHVyaXMgPSBbXTtcbiAgICAgIHRyYWNraW5nRXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHVyaXMucHVzaChldmVudC51cmkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB1cmlzO1xuICB9XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tQcm9ncmVzcyA9IGZ1bmN0aW9uIHRyYWNrUHJvZ3Jlc3MobmV3UHJvZ3Jlc3NJbk1zKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIGV2ZW50cyA9IFtdO1xuICB2YXIgT05DRSA9IHRydWU7XG4gIHZhciBBTFdBWVMgPSBmYWxzZTtcbiAgdmFyIHRyYWNraW5nRXZlbnRzID0gdGhpcy5yZXNwb25zZS50cmFja2luZ0V2ZW50cztcblxuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKG5ld1Byb2dyZXNzSW5NcykpIHtcbiAgICBhZGRUcmFja0V2ZW50KCdzdGFydCcsIE9OQ0UsIG5ld1Byb2dyZXNzSW5NcyA+IDApO1xuICAgIGFkZFRyYWNrRXZlbnQoJ3Jld2luZCcsIEFMV0FZUywgaGFzUmV3b3VuZCh0aGlzLnByb2dyZXNzLCBuZXdQcm9ncmVzc0luTXMpKTtcbiAgICBhZGRRdWFydGlsZUV2ZW50cyhuZXdQcm9ncmVzc0luTXMpO1xuICAgIHRyYWNrUHJvZ3Jlc3NFdmVudHMobmV3UHJvZ3Jlc3NJbk1zKTtcbiAgICB0cmFja0V2ZW50cygpO1xuICAgIHRoaXMucHJvZ3Jlc3MgPSBuZXdQcm9ncmVzc0luTXM7XG4gIH1cblxuICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgZnVuY3Rpb24gaGFzUmV3b3VuZChjdXJyZW50UHJvZ3Jlc3MsIG5ld1Byb2dyZXNzKSB7XG4gICAgdmFyIFJFV0lORF9USFJFU0hPTEQgPSAzMDAwOyAvL0lPUyB2aWRlbyBjbG9jayBpcyB2ZXJ5IHVucmVsaWFibGUgYW5kIHdlIG5lZWQgYSAzIHNlY29uZHMgdGhyZXNob2xkIHRvIGVuc3VyZSB0aGF0IHRoZXJlIHdhcyBhIHJld2luZCBhbiB0aGF0IGl0IHdhcyBvbiBwdXJwb3NlLlxuICAgIHJldHVybiBjdXJyZW50UHJvZ3Jlc3MgPiBuZXdQcm9ncmVzc0luTXMgJiYgTWF0aC5hYnMobmV3UHJvZ3Jlc3MgLSBjdXJyZW50UHJvZ3Jlc3MpID4gUkVXSU5EX1RIUkVTSE9MRDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRyYWNrRXZlbnQoZXZlbnROYW1lLCB0cmFja09uY2UsIGNhbkJlQWRkZWQpIHtcbiAgICBpZiAodHJhY2tpbmdFdmVudHNbZXZlbnROYW1lXSAmJiBjYW5CZUFkZGVkKSB7XG4gICAgICBldmVudHMucHVzaCh7XG4gICAgICAgIG5hbWU6IGV2ZW50TmFtZSxcbiAgICAgICAgdHJhY2tPbmNlOiAhIXRyYWNrT25jZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkUXVhcnRpbGVFdmVudHMocHJvZ3Jlc3MpIHtcbiAgICB2YXIgcXVhcnRpbGVzID0gdGhhdC5xdWFydGlsZXM7XG4gICAgdmFyIGZpcnN0UXVhcnRpbGUgPSB0aGF0LnF1YXJ0aWxlcy5maXJzdFF1YXJ0aWxlO1xuICAgIHZhciBtaWRwb2ludCA9IHRoYXQucXVhcnRpbGVzLm1pZHBvaW50O1xuICAgIHZhciB0aGlyZFF1YXJ0aWxlID0gdGhhdC5xdWFydGlsZXMudGhpcmRRdWFydGlsZTtcblxuICAgIGlmICghZmlyc3RRdWFydGlsZS50cmFja2VkKSB7XG4gICAgICB0cmFja1F1YXJ0aWxlKCdmaXJzdFF1YXJ0aWxlJywgcHJvZ3Jlc3MpO1xuICAgIH0gZWxzZSBpZiAoIW1pZHBvaW50LnRyYWNrZWQpIHtcbiAgICAgIHRyYWNrUXVhcnRpbGUoJ21pZHBvaW50JywgcHJvZ3Jlc3MpO1xuICAgIH0gZWxzZSBpZiAoIXRoaXJkUXVhcnRpbGUudHJhY2tlZCl7XG4gICAgICB0cmFja1F1YXJ0aWxlKCd0aGlyZFF1YXJ0aWxlJywgcHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICAgIGZ1bmN0aW9uIHRyYWNrUXVhcnRpbGUocXVhcnRpbGVOYW1lLCBwcm9ncmVzcyl7XG4gICAgICB2YXIgcXVhcnRpbGUgPSBxdWFydGlsZXNbcXVhcnRpbGVOYW1lXTtcbiAgICAgIGlmKGNhbkJlVHJhY2tlZChxdWFydGlsZSwgcHJvZ3Jlc3MpKXtcbiAgICAgICAgcXVhcnRpbGUudHJhY2tlZCA9IHRydWU7XG4gICAgICAgIGFkZFRyYWNrRXZlbnQocXVhcnRpbGVOYW1lLCBPTkNFLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjYW5CZVRyYWNrZWQocXVhcnRpbGUsIHByb2dyZXNzKSB7XG4gICAgdmFyIHF1YXJ0aWxlVGltZSA9IHF1YXJ0aWxlLnRpbWU7XG4gICAgLy9XZSBvbmx5IGZpcmUgdGhlIHF1YXJ0aWxlIGV2ZW50IGlmIHRoZSBwcm9ncmVzcyBpcyBiaWdnZXIgdGhhbiB0aGUgcXVhcnRpbGUgdGltZSBieSA1IHNlY29uZHMgYXQgbW9zdC5cbiAgICByZXR1cm4gcHJvZ3Jlc3MgPj0gcXVhcnRpbGVUaW1lICYmIHByb2dyZXNzIDw9IChxdWFydGlsZVRpbWUgKyA1MDAwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyYWNrUHJvZ3Jlc3NFdmVudHMocHJvZ3Jlc3MpIHtcbiAgICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRXZlbnRzLnByb2dyZXNzKSkge1xuICAgICAgcmV0dXJuOyAvL05vdGhpbmcgdG8gdHJhY2tcbiAgICB9XG5cbiAgICB2YXIgcGVuZGluZ1Byb2dyZXNzRXZ0cyA9IFtdO1xuXG4gICAgdHJhY2tpbmdFdmVudHMucHJvZ3Jlc3MuZm9yRWFjaChmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICBpZiAoZXZ0Lm9mZnNldCA8PSBwcm9ncmVzcykge1xuICAgICAgICB0aGF0LnRyYWNrVVJMcyhbZXZ0LnVyaV0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVuZGluZ1Byb2dyZXNzRXZ0cy5wdXNoKGV2dCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdHJhY2tpbmdFdmVudHMucHJvZ3Jlc3MgPSBwZW5kaW5nUHJvZ3Jlc3NFdnRzO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tFdmVudHMoKSB7XG4gICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB0aGF0LnRyYWNrRXZlbnQoZXZlbnQubmFtZSwgZXZlbnQudHJhY2tPbmNlKTtcbiAgICB9KTtcbiAgfVxufTtcblxuW1xuICAncmV3aW5kJyxcbiAgJ2Z1bGxzY3JlZW4nLFxuICAnZXhpdEZ1bGxzY3JlZW4nLFxuICAncGF1c2UnLFxuICAncmVzdW1lJyxcbiAgJ211dGUnLFxuICAndW5tdXRlJyxcbiAgJ2FjY2VwdEludml0YXRpb24nLFxuICAnYWNjZXB0SW52aXRhdGlvbkxpbmVhcicsXG4gICdjb2xsYXBzZScsXG4gICdleHBhbmQnXG5dLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgIFZBU1RUcmFja2VyLnByb3RvdHlwZVsndHJhY2snICsgdXRpbGl0aWVzLmNhcGl0YWxpemUoZXZlbnROYW1lKV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnRyYWNrRXZlbnQoZXZlbnROYW1lKTtcbiAgICB9O1xuICB9KTtcblxuW1xuICAnc3RhcnQnLFxuICAnc2tpcCcsXG4gICdjbG9zZScsXG4gICdjbG9zZUxpbmVhcidcbl0uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgVkFTVFRyYWNrZXIucHJvdG90eXBlWyd0cmFjaycgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShldmVudE5hbWUpXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMudHJhY2tFdmVudChldmVudE5hbWUsIHRydWUpO1xuICAgIH07XG4gIH0pO1xuXG5bXG4gICdmaXJzdFF1YXJ0aWxlJyxcbiAgJ21pZHBvaW50JyxcbiAgJ3RoaXJkUXVhcnRpbGUnXG5dLmZvckVhY2goZnVuY3Rpb24gKHF1YXJ0aWxlKSB7XG4gICAgVkFTVFRyYWNrZXIucHJvdG90eXBlWyd0cmFjaycgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShxdWFydGlsZSldID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5xdWFydGlsZXNbcXVhcnRpbGVdLnRyYWNrZWQgPSB0cnVlO1xuICAgICAgdGhpcy50cmFja0V2ZW50KHF1YXJ0aWxlLCB0cnVlKTtcbiAgICB9O1xuICB9KTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrQ29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmKHRoaXMucXVhcnRpbGVzLnRoaXJkUXVhcnRpbGUudHJhY2tlZCl7XG4gICAgdGhpcy50cmFja0V2ZW50KCdjb21wbGV0ZScsIHRydWUpO1xuICB9XG59O1xuXG5WQVNUVHJhY2tlci5wcm90b3R5cGUudHJhY2tFcnJvcldpdGhDb2RlID0gZnVuY3Rpb24gdHJhY2tFcnJvcldpdGhDb2RlKGVycm9yY29kZSkge1xuICBpZiAodXRpbGl0aWVzLmlzTnVtYmVyKGVycm9yY29kZSkpIHtcbiAgICB0aGlzLnRyYWNrVVJMcyh0aGlzLnJlc3BvbnNlLmVycm9yVVJMTWFjcm9zLCB7RVJST1JDT0RFOiBlcnJvcmNvZGV9KTtcbiAgfVxufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrSW1wcmVzc2lvbnMgPSBmdW5jdGlvbiB0cmFja0ltcHJlc3Npb25zKCkge1xuICB0aGlzLnRyYWNrVVJMcyh0aGlzLnJlc3BvbnNlLmltcHJlc3Npb25zKTtcbn07XG5cblZBU1RUcmFja2VyLnByb3RvdHlwZS50cmFja0NyZWF0aXZlVmlldyA9IGZ1bmN0aW9uIHRyYWNrQ3JlYXRpdmVWaWV3KCkge1xuICB0aGlzLnRyYWNrRXZlbnQoJ2NyZWF0aXZlVmlldycpO1xufTtcblxuVkFTVFRyYWNrZXIucHJvdG90eXBlLnRyYWNrQ2xpY2sgPSBmdW5jdGlvbiB0cmFja0NsaWNrKCkge1xuICB0aGlzLnRyYWNrVVJMcyh0aGlzLnJlc3BvbnNlLmNsaWNrVHJhY2tpbmdzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVkFTVFRyYWNrZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG52YXIgeG1sID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMveG1sJyk7XG5cbmZ1bmN0aW9uIFZpZGVvQ2xpY2tzKHZpZGVvQ2xpY2tKVHJlZSkge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVmlkZW9DbGlja3MpKSB7XG4gICAgcmV0dXJuIG5ldyBWaWRlb0NsaWNrcyh2aWRlb0NsaWNrSlRyZWUpO1xuICB9XG5cbiAgdGhpcy5jbGlja1Rocm91Z2ggPSB4bWwua2V5VmFsdWUodmlkZW9DbGlja0pUcmVlLmNsaWNrVGhyb3VnaCk7XG4gIHRoaXMuY2xpY2tUcmFja2luZ3MgPSBwYXJzZUNsaWNrVHJhY2tpbmdzKHZpZGVvQ2xpY2tKVHJlZS5jbGlja1RyYWNraW5nKTtcbiAgdGhpcy5jdXN0b21DbGlja3MgPSBwYXJzZUNsaWNrVHJhY2tpbmdzKHZpZGVvQ2xpY2tKVHJlZS5jdXN0b21DbGljayk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBwYXJzZUNsaWNrVHJhY2tpbmdzKHRyYWNraW5nRGF0YSkge1xuICAgIHZhciBjbGlja1RyYWNraW5ncyA9IFtdO1xuICAgIGlmICh0cmFja2luZ0RhdGEpIHtcbiAgICAgIHRyYWNraW5nRGF0YSA9IHV0aWxpdGllcy5pc0FycmF5KHRyYWNraW5nRGF0YSkgPyB0cmFja2luZ0RhdGEgOiBbdHJhY2tpbmdEYXRhXTtcbiAgICAgIHRyYWNraW5nRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChjbGlja1RyYWNraW5nRGF0YSkge1xuICAgICAgICBjbGlja1RyYWNraW5ncy5wdXNoKHhtbC5rZXlWYWx1ZShjbGlja1RyYWNraW5nRGF0YSkpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBjbGlja1RyYWNraW5ncztcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZpZGVvQ2xpY2tzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHZhc3RVdGlsID0gcmVxdWlyZSgnLi92YXN0VXRpbCcpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIHhtbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3htbCcpO1xuXG5mdW5jdGlvbiBXcmFwcGVyKHdyYXBwZXJKVHJlZSkge1xuICBpZighKHRoaXMgaW5zdGFuY2VvZiBXcmFwcGVyKSkge1xuICAgIHJldHVybiBuZXcgV3JhcHBlcih3cmFwcGVySlRyZWUpO1xuICB9XG5cbiAgLy9SZXF1aXJlZCBlbGVtZW50c1xuICB0aGlzLmFkU3lzdGVtID0geG1sLmtleVZhbHVlKHdyYXBwZXJKVHJlZS5hZFN5c3RlbSk7XG4gIHRoaXMuaW1wcmVzc2lvbnMgPSB2YXN0VXRpbC5wYXJzZUltcHJlc3Npb25zKHdyYXBwZXJKVHJlZS5pbXByZXNzaW9uKTtcbiAgdGhpcy5WQVNUQWRUYWdVUkkgPSB4bWwua2V5VmFsdWUod3JhcHBlckpUcmVlLnZBU1RBZFRhZ1VSSSk7XG5cbiAgLy9PcHRpb25hbCBlbGVtZW50c1xuICB0aGlzLmNyZWF0aXZlcyA9IHZhc3RVdGlsLnBhcnNlQ3JlYXRpdmVzKHdyYXBwZXJKVHJlZS5jcmVhdGl2ZXMpO1xuICB0aGlzLmVycm9yID0geG1sLmtleVZhbHVlKHdyYXBwZXJKVHJlZS5lcnJvcik7XG4gIHRoaXMuZXh0ZW5zaW9ucyA9IHdyYXBwZXJKVHJlZS5leHRlbnNpb25zO1xuXG4gIC8vT3B0aW9uYWwgYXR0cnNcbiAgdGhpcy5mb2xsb3dBZGRpdGlvbmFsV3JhcHBlcnMgPSB1dGlsaXRpZXMuaXNEZWZpbmVkKHhtbC5hdHRyKHdyYXBwZXJKVHJlZSwgJ2ZvbGxvd0FkZGl0aW9uYWxXcmFwcGVycycpKT8geG1sLmF0dHIod3JhcHBlckpUcmVlLCAnZm9sbG93QWRkaXRpb25hbFdyYXBwZXJzJyk6IHRydWU7XG4gIHRoaXMuYWxsb3dNdWx0aXBsZUFkcyA9IHhtbC5hdHRyKHdyYXBwZXJKVHJlZSwgJ2FsbG93TXVsdGlwbGVBZHMnKTtcbiAgdGhpcy5mYWxsYmFja09uTm9BZCA9IHhtbC5hdHRyKHdyYXBwZXJKVHJlZSwgJ2ZhbGxiYWNrT25Ob0FkJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV3JhcHBlcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBkdXJhdGlvblJlZ2V4ID0gLyhcXGRcXGQpOihcXGRcXGQpOihcXGRcXGQpKFxcLihcXGRcXGRcXGQpKT8vO1xuXG52YXIgcGFyc2VycyA9IHtcblxuICBkdXJhdGlvbjogZnVuY3Rpb24gcGFyc2VEdXJhdGlvbihkdXJhdGlvblN0cikge1xuXG4gICAgdmFyIG1hdGNoLCBkdXJhdGlvbkluTXM7XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGR1cmF0aW9uU3RyKSkge1xuICAgICAgbWF0Y2ggPSBkdXJhdGlvblN0ci5tYXRjaChkdXJhdGlvblJlZ2V4KTtcbiAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICBkdXJhdGlvbkluTXMgPSBwYXJzZUhvdXJzVG9NcyhtYXRjaFsxXSkgKyBwYXJzZU1pblRvTXMobWF0Y2hbMl0pICsgcGFyc2VTZWNUb01zKG1hdGNoWzNdKSArIHBhcnNlSW50KG1hdGNoWzVdIHx8IDApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpc05hTihkdXJhdGlvbkluTXMpID8gbnVsbCA6IGR1cmF0aW9uSW5NcztcblxuICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICBmdW5jdGlvbiBwYXJzZUhvdXJzVG9Ncyhob3VyU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQoaG91clN0ciwgMTApICogNjAgKiA2MCAqIDEwMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VNaW5Ub01zKG1pblN0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KG1pblN0ciwgMTApICogNjAgKiAxMDAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlU2VjVG9NcyhzZWNTdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChzZWNTdHIsIDEwKSAqIDEwMDA7XG4gICAgfVxuICB9LFxuXG4gIG9mZnNldDogZnVuY3Rpb24gcGFyc2VPZmZzZXQob2Zmc2V0LCBkdXJhdGlvbikge1xuICAgIGlmKGlzUGVyY2VudGFnZShvZmZzZXQpKXtcbiAgICAgIHJldHVybiBjYWxjdWxhdGVQZXJjZW50YWdlKG9mZnNldCwgZHVyYXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gcGFyc2Vycy5kdXJhdGlvbihvZmZzZXQpO1xuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbiAqKiovXG4gICAgZnVuY3Rpb24gaXNQZXJjZW50YWdlKG9mZnNldCkge1xuICAgICAgdmFyIHBlcmNlbnRhZ2VSZWdleCA9IC9eXFxkKyhcXC5cXGQrKT8lJC9nO1xuICAgICAgcmV0dXJuIHBlcmNlbnRhZ2VSZWdleC50ZXN0KG9mZnNldCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlUGVyY2VudGFnZShwZXJjZW50U3RyLCBkdXJhdGlvbikge1xuICAgICAgaWYoZHVyYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIGNhbGNQZXJjZW50KGR1cmF0aW9uLCBwYXJzZUZsb2F0KHBlcmNlbnRTdHIucmVwbGFjZSgnJScsICcnKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsY1BlcmNlbnQocXVhbnRpdHksIHBlcmNlbnQpe1xuICAgICAgcmV0dXJuIHF1YW50aXR5ICogcGVyY2VudCAvIDEwMDtcbiAgICB9XG4gIH1cblxufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlcnM7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ3JlYXRpdmUgPSByZXF1aXJlKCcuL0NyZWF0aXZlJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgdmFzdFV0aWwgPSB7XG5cbiAgdHJhY2s6IGZ1bmN0aW9uIHRyYWNrKFVSTE1hY3JvcywgdmFyaWFibGVzKSB7XG4gICAgdmFyIHNvdXJjZXMgPSB2YXN0VXRpbC5wYXJzZVVSTE1hY3JvcyhVUkxNYWNyb3MsIHZhcmlhYmxlcyk7XG4gICAgdmFyIHRyYWNrSW1ncyA9IFtdO1xuICAgIHNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbiAoc3JjKSB7XG4gICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWcuc3JjID0gc3JjO1xuICAgICAgdHJhY2tJbWdzLnB1c2goaW1nKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJhY2tJbWdzO1xuICB9LFxuXG4gIHBhcnNlVVJMTWFjcm9zOiBmdW5jdGlvbiBwYXJzZU1hY3JvcyhVUkxNYWNyb3MsIHZhcmlhYmxlcykge1xuICAgIHZhciBwYXJzZWRVUkxzID0gW107XG5cbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgfHwge307XG5cbiAgICBpZiAoISh2YXJpYWJsZXNbXCJDQUNIRUJVU1RJTkdcIl0pKSB7XG4gICAgICB2YXJpYWJsZXNbXCJDQUNIRUJVU1RJTkdcIl0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxLjBlKzEwKTtcbiAgICB9XG5cbiAgICBVUkxNYWNyb3MuZm9yRWFjaChmdW5jdGlvbiAoVVJMTWFjcm8pIHtcbiAgICAgIHBhcnNlZFVSTHMucHVzaCh2YXN0VXRpbC5fcGFyc2VVUkxNYWNybyhVUkxNYWNybywgdmFyaWFibGVzKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcGFyc2VkVVJMcztcbiAgfSxcblxuICBwYXJzZVVSTE1hY3JvOiBmdW5jdGlvbiBwYXJzZU1hY3JvKFVSTE1hY3JvLCB2YXJpYWJsZXMpIHtcbiAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXMgfHwge307XG5cbiAgICBpZiAoISh2YXJpYWJsZXNbXCJDQUNIRUJVU1RJTkdcIl0pKSB7XG4gICAgICB2YXJpYWJsZXNbXCJDQUNIRUJVU1RJTkdcIl0gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxLjBlKzEwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFzdFV0aWwuX3BhcnNlVVJMTWFjcm8oVVJMTWFjcm8sIHZhcmlhYmxlcyk7XG4gIH0sXG5cbiAgX3BhcnNlVVJMTWFjcm86IGZ1bmN0aW9uIHBhcnNlTWFjcm8oVVJMTWFjcm8sIHZhcmlhYmxlcykge1xuICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlcyB8fCB7fTtcblxuICAgIHV0aWxpdGllcy5mb3JFYWNoKHZhcmlhYmxlcywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIFVSTE1hY3JvID0gVVJMTWFjcm8ucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXFtcIiArIGtleSArIFwiXFxcXFxcXVwiLCAnZ20nKSwgdmFsdWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFVSTE1hY3JvO1xuICB9LFxuXG4gIHBhcnNlRHVyYXRpb246IGZ1bmN0aW9uIHBhcnNlRHVyYXRpb24oZHVyYXRpb25TdHIpIHtcbiAgICB2YXIgZHVyYXRpb25SZWdleCA9IC8oXFxkXFxkKTooXFxkXFxkKTooXFxkXFxkKShcXC4oXFxkXFxkXFxkKSk/LztcbiAgICB2YXIgbWF0Y2gsIGR1cmF0aW9uSW5NcztcblxuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoZHVyYXRpb25TdHIpKSB7XG4gICAgICBtYXRjaCA9IGR1cmF0aW9uU3RyLm1hdGNoKGR1cmF0aW9uUmVnZXgpO1xuICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgIGR1cmF0aW9uSW5NcyA9IHBhcnNlSG91cnNUb01zKG1hdGNoWzFdKSArIHBhcnNlTWluVG9NcyhtYXRjaFsyXSkgKyBwYXJzZVNlY1RvTXMobWF0Y2hbM10pICsgcGFyc2VJbnQobWF0Y2hbNV0gfHwgMCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzTmFOKGR1cmF0aW9uSW5NcykgPyBudWxsIDogZHVyYXRpb25Jbk1zO1xuXG4gICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgIGZ1bmN0aW9uIHBhcnNlSG91cnNUb01zKGhvdXJTdHIpIHtcbiAgICAgIHJldHVybiBwYXJzZUludChob3VyU3RyLCAxMCkgKiA2MCAqIDYwICogMTAwMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZU1pblRvTXMobWluU3RyKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQobWluU3RyLCAxMCkgKiA2MCAqIDEwMDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VTZWNUb01zKHNlY1N0cikge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHNlY1N0ciwgMTApICogMTAwMDtcbiAgICB9XG4gIH0sXG5cbiAgcGFyc2VJbXByZXNzaW9uczogZnVuY3Rpb24gcGFyc2VJbXByZXNzaW9ucyhpbXByZXNzaW9ucykge1xuICAgIGlmIChpbXByZXNzaW9ucykge1xuICAgICAgaW1wcmVzc2lvbnMgPSB1dGlsaXRpZXMuaXNBcnJheShpbXByZXNzaW9ucykgPyBpbXByZXNzaW9ucyA6IFtpbXByZXNzaW9uc107XG4gICAgICByZXR1cm4gdXRpbGl0aWVzLnRyYW5zZm9ybUFycmF5KGltcHJlc3Npb25zLCBmdW5jdGlvbiAoaW1wcmVzc2lvbikge1xuICAgICAgICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoaW1wcmVzc2lvbi5rZXlWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gaW1wcmVzc2lvbi5rZXlWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfSxcblxuICBwYXJzZUNyZWF0aXZlczogZnVuY3Rpb24gcGFyc2VDcmVhdGl2ZXMoY3JlYXRpdmVzSlRyZWUpIHtcbiAgICB2YXIgY3JlYXRpdmVzID0gW107XG4gICAgdmFyIGNyZWF0aXZlc0RhdGE7XG4gICAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQoY3JlYXRpdmVzSlRyZWUpICYmIHV0aWxpdGllcy5pc0RlZmluZWQoY3JlYXRpdmVzSlRyZWUuY3JlYXRpdmUpKSB7XG4gICAgICBjcmVhdGl2ZXNEYXRhID0gdXRpbGl0aWVzLmlzQXJyYXkoY3JlYXRpdmVzSlRyZWUuY3JlYXRpdmUpID8gY3JlYXRpdmVzSlRyZWUuY3JlYXRpdmUgOiBbY3JlYXRpdmVzSlRyZWUuY3JlYXRpdmVdO1xuICAgICAgY3JlYXRpdmVzRGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChjcmVhdGl2ZSkge1xuICAgICAgICBjcmVhdGl2ZXMucHVzaChuZXcgQ3JlYXRpdmUoY3JlYXRpdmUpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRpdmVzO1xuICB9LFxuXG4gIC8vV2UgYXNzdW1lIHRoYXQgdGhlIHByb2dyZXNzIGlzIGdvaW5nIHRvIGFycml2ZSBpbiBtaWxsaXNlY29uZHNcbiAgZm9ybWF0UHJvZ3Jlc3M6IGZ1bmN0aW9uIGZvcm1hdFByb2dyZXNzKHByb2dyZXNzKSB7XG4gICAgdmFyIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBtaWxsaXNlY29uZHM7XG4gICAgaG91cnMgPSBwcm9ncmVzcyAvICg2MCAqIDYwICogMTAwMCk7XG4gICAgaG91cnMgPSBNYXRoLmZsb29yKGhvdXJzKTtcbiAgICBtaW51dGVzID0gKHByb2dyZXNzIC8gKDYwICogMTAwMCkpICUgNjA7XG4gICAgbWludXRlcyA9IE1hdGguZmxvb3IobWludXRlcyk7XG4gICAgc2Vjb25kcyA9IChwcm9ncmVzcyAvIDEwMDApICUgNjA7XG4gICAgc2Vjb25kcyA9IE1hdGguZmxvb3Ioc2Vjb25kcyk7XG4gICAgbWlsbGlzZWNvbmRzID0gcHJvZ3Jlc3MgJSAxMDAwO1xuICAgIHJldHVybiB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhob3VycywgMikgKyAnOicgKyB1dGlsaXRpZXMudG9GaXhlZERpZ2l0cyhtaW51dGVzLCAyKSArICc6JyArIHV0aWxpdGllcy50b0ZpeGVkRGlnaXRzKHNlY29uZHMsIDIpICsgJy4nICsgdXRpbGl0aWVzLnRvRml4ZWREaWdpdHMobWlsbGlzZWNvbmRzLCAzKTtcbiAgfSxcblxuICBwYXJzZU9mZnNldDogICBmdW5jdGlvbiBwYXJzZU9mZnNldChvZmZzZXQsIGR1cmF0aW9uKSB7XG4gICAgaWYoaXNQZXJjZW50YWdlKG9mZnNldCkpe1xuICAgICAgcmV0dXJuIGNhbGN1bGF0ZVBlcmNlbnRhZ2Uob2Zmc2V0LCBkdXJhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiB2YXN0VXRpbC5wYXJzZUR1cmF0aW9uKG9mZnNldCk7XG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9uICoqKi9cbiAgICBmdW5jdGlvbiBpc1BlcmNlbnRhZ2Uob2Zmc2V0KSB7XG4gICAgICB2YXIgcGVyY2VudGFnZVJlZ2V4ID0gL15cXGQrKFxcLlxcZCspPyUkL2c7XG4gICAgICByZXR1cm4gcGVyY2VudGFnZVJlZ2V4LnRlc3Qob2Zmc2V0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVQZXJjZW50YWdlKHBlcmNlbnRTdHIsIGR1cmF0aW9uKSB7XG4gICAgICBpZihkdXJhdGlvbikge1xuICAgICAgICByZXR1cm4gY2FsY1BlcmNlbnQoZHVyYXRpb24sIHBhcnNlRmxvYXQocGVyY2VudFN0ci5yZXBsYWNlKCclJywgJycpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxjUGVyY2VudChxdWFudGl0eSwgcGVyY2VudCl7XG4gICAgICByZXR1cm4gcXVhbnRpdHkgKiBwZXJjZW50IC8gMTAwO1xuICAgIH1cbiAgfSxcblxuICBpc1ZQQUlEOiBmdW5jdGlvbiBpc1ZQQUlETWVkaWFGaWxlKG1lZGlhRmlsZSkge1xuICAgIHJldHVybiAhIW1lZGlhRmlsZSAmJiBtZWRpYUZpbGUuYXBpRnJhbWV3b3JrID09PSAnVlBBSUQnO1xuICB9XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0gdmFzdFV0aWw7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNURXJyb3InKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gVlBBSURBZFVuaXRXcmFwcGVyKHZwYWlkQWRVbml0LCBvcHRzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWUEFJREFkVW5pdFdyYXBwZXIpKSB7XG4gICAgcmV0dXJuIG5ldyBWUEFJREFkVW5pdFdyYXBwZXIodnBhaWRBZFVuaXQsIG9wdHMpO1xuICB9XG4gIHNhbml0eUNoZWNrKHZwYWlkQWRVbml0LCBvcHRzKTtcblxuICB0aGlzLm9wdGlvbnMgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBvcHRzKTtcblxuICB0aGlzLl9hZFVuaXQgPSB2cGFpZEFkVW5pdDtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGFkVW5pdCwgb3B0cykge1xuICAgIGlmICghYWRVbml0IHx8ICFWUEFJREFkVW5pdFdyYXBwZXIuY2hlY2tWUEFJREludGVyZmFjZShhZFVuaXQpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKCdvbiBWUEFJREFkVW5pdFdyYXBwZXIsIHRoZSBwYXNzZWQgVlBBSUQgYWRVbml0IGRvZXMgbm90IGZ1bGx5IGltcGxlbWVudCB0aGUgVlBBSUQgaW50ZXJmYWNlJyk7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNPYmplY3Qob3B0cykpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIGV4cGVjdGVkIG9wdGlvbnMgaGFzaCAgYnV0IGdvdCAnXCIgKyBvcHRzICsgXCInXCIpO1xuICAgIH1cblxuICAgIGlmICghKFwicmVzcG9uc2VUaW1lb3V0XCIgaW4gb3B0cykgfHwgIXV0aWxpdGllcy5pc051bWJlcihvcHRzLnJlc3BvbnNlVGltZW91dCkgKXtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIGV4cGVjdGVkIHJlc3BvbnNlVGltZW91dCBpbiBvcHRpb25zXCIpO1xuICAgIH1cbiAgfVxufVxuXG5WUEFJREFkVW5pdFdyYXBwZXIuY2hlY2tWUEFJREludGVyZmFjZSA9IGZ1bmN0aW9uIGNoZWNrVlBBSURJbnRlcmZhY2UoVlBBSURBZFVuaXQpIHtcbiAgLy9OT1RFOiBza2lwQWQgaXMgbm90IHBhcnQgb2YgdGhlIG1ldGhvZCBsaXN0IGJlY2F1c2UgaXQgb25seSBhcHBlYXJzIGluIFZQQUlEIDIuMCBhbmQgd2Ugc3VwcG9ydCBWUEFJRCAxLjBcbiAgdmFyIFZQQUlESW50ZXJmYWNlTWV0aG9kcyA9IFtcbiAgICAnaGFuZHNoYWtlVmVyc2lvbicsICdpbml0QWQnLCAnc3RhcnRBZCcsICdzdG9wQWQnLCAncmVzaXplQWQnLCAncGF1c2VBZCcsICdleHBhbmRBZCcsICdjb2xsYXBzZUFkJ1xuICBdO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBWUEFJREludGVyZmFjZU1ldGhvZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoIVZQQUlEQWRVbml0IHx8ICF1dGlsaXRpZXMuaXNGdW5jdGlvbihWUEFJREFkVW5pdFtWUEFJREludGVyZmFjZU1ldGhvZHNbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG5cbiAgcmV0dXJuIGNhblN1YnNjcmliZVRvRXZlbnRzKFZQQUlEQWRVbml0KSAmJiBjYW5VbnN1YnNjcmliZUZyb21FdmVudHMoVlBBSURBZFVuaXQpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cblxuICBmdW5jdGlvbiBjYW5TdWJzY3JpYmVUb0V2ZW50cyhhZFVuaXQpIHtcbiAgICByZXR1cm4gdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LnN1YnNjcmliZSkgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LmFkZEV2ZW50TGlzdGVuZXIpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5vbik7XG4gIH1cblxuICBmdW5jdGlvbiBjYW5VbnN1YnNjcmliZUZyb21FdmVudHMoYWRVbml0KSB7XG4gICAgcmV0dXJuIHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC51bnN1YnNjcmliZSkgfHwgdXRpbGl0aWVzLmlzRnVuY3Rpb24oYWRVbml0LnJlbW92ZUV2ZW50TGlzdGVuZXIpIHx8IHV0aWxpdGllcy5pc0Z1bmN0aW9uKGFkVW5pdC5vZmYpO1xuXG4gIH1cbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuYWRVbml0QXN5bmNDYWxsID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXJncyA9IHV0aWxpdGllcy5hcnJheUxpa2VPYmpUb0FycmF5KGFyZ3VtZW50cyk7XG4gIHZhciBtZXRob2QgPSBhcmdzLnNoaWZ0KCk7XG4gIHZhciBjYiA9IGFyZ3MucG9wKCk7XG4gIHZhciB0aW1lb3V0SWQ7XG5cbiAgc2FuaXR5Q2hlY2sobWV0aG9kLCBjYiwgdGhpcy5fYWRVbml0KTtcbiAgYXJncy5wdXNoKHdyYXBDYWxsYmFjaygpKTtcblxuICB0aGlzLl9hZFVuaXRbbWV0aG9kXS5hcHBseSh0aGlzLl9hZFVuaXQsIGFyZ3MpO1xuICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB0aW1lb3V0SWQgPSBudWxsO1xuICAgIGNiKG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIsIHRpbWVvdXQgd2hpbGUgd2FpdGluZyBmb3IgYSByZXNwb25zZSBvbiBjYWxsICdcIiArIG1ldGhvZCArIFwiJ1wiKSk7XG4gICAgY2IgPSB1dGlsaXRpZXMubm9vcDtcbiAgfSwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dCk7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBzYW5pdHlDaGVjayhtZXRob2QsIGNiLCBhZFVuaXQpIHtcbiAgICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhtZXRob2QpIHx8ICF1dGlsaXRpZXMuaXNGdW5jdGlvbihhZFVuaXRbbWV0aG9kXSkpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIuYWRVbml0QXN5bmNDYWxsLCBpbnZhbGlkIG1ldGhvZCBuYW1lXCIpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLmFkVW5pdEFzeW5jQ2FsbCwgbWlzc2luZyBjYWxsYmFja1wiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwQ2FsbGJhY2soKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICB9XG4gICAgICBjYi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gIH1cbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoZXZ0TmFtZSwgaGFuZGxlcikge1xuICB2YXIgYWRkRXZlbnRMaXN0ZW5lciA9IHRoaXMuX2FkVW5pdC5hZGRFdmVudExpc3RlbmVyIHx8IHRoaXMuX2FkVW5pdC5zdWJzY3JpYmUgfHwgdGhpcy5fYWRVbml0Lm9uO1xuICBhZGRFdmVudExpc3RlbmVyLmNhbGwodGhpcy5fYWRVbml0LCBldnROYW1lLCBoYW5kbGVyKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKGV2dE5hbWUsIGhhbmRsZXIpIHtcbiAgdmFyIHJlbW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLl9hZFVuaXQucmVtb3ZlRXZlbnRMaXN0ZW5lciB8fCB0aGlzLl9hZFVuaXQudW5zdWJzY3JpYmUgfHwgdGhpcy5fYWRVbml0Lm9mZjtcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMuX2FkVW5pdCwgZXZ0TmFtZSwgaGFuZGxlcik7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLndhaXRGb3JFdmVudCA9IGZ1bmN0aW9uIChldnROYW1lLCBjYiwgY29udGV4dCkge1xuICB2YXIgdGltZW91dElkO1xuICBzYW5pdHlDaGVjayhldnROYW1lLCBjYik7XG4gIGNvbnRleHQgPSBjb250ZXh0IHx8IG51bGw7XG5cbiAgdGhpcy5vbihldnROYW1lLCByZXNwb25zZUxpc3RlbmVyKTtcblxuICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBjYihuZXcgVkFTVEVycm9yKFwib24gVlBBSURBZFVuaXRXcmFwcGVyLndhaXRGb3JFdmVudCwgdGltZW91dCB3aGlsZSB3YWl0aW5nIGZvciBldmVudCAnXCIgKyBldnROYW1lICsgXCInXCIpKTtcbiAgICB0aW1lb3V0SWQgPSBudWxsO1xuICAgIGNiID0gdXRpbGl0aWVzLm5vb3A7XG4gIH0sIHRoaXMub3B0aW9ucy5yZXNwb25zZVRpbWVvdXQpO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soZXZ0TmFtZSwgY2IpIHtcbiAgICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyhldnROYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihcIm9uIFZQQUlEQWRVbml0V3JhcHBlci53YWl0Rm9yRXZlbnQsIG1pc3NpbmcgZXZ0IG5hbWVcIik7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoXCJvbiBWUEFJREFkVW5pdFdyYXBwZXIud2FpdEZvckV2ZW50LCBtaXNzaW5nIGNhbGxiYWNrXCIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3BvbnNlTGlzdGVuZXIoKSB7XG4gICAgdmFyIGFyZ3MgPSB1dGlsaXRpZXMuYXJyYXlMaWtlT2JqVG9BcnJheShhcmd1bWVudHMpO1xuXG4gICAgaWYgKHRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICB0aW1lb3V0SWQgPSBudWxsO1xuICAgIH1cblxuICAgIGFyZ3MudW5zaGlmdChudWxsKTtcbiAgICBjYi5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgfVxufTtcblxuLy8gVlBBSUQgTUVUSE9EU1xuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5oYW5kc2hha2VWZXJzaW9uID0gZnVuY3Rpb24gKHZlcnNpb24sIGNiKSB7XG4gIHRoaXMuYWRVbml0QXN5bmNDYWxsKCdoYW5kc2hha2VWZXJzaW9uJywgdmVyc2lvbiwgY2IpO1xufTtcblxuLyoganNoaW50IG1heHBhcmFtczo2ICovXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmluaXRBZCA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGFkVW5pdERhdGEsIGNiKSB7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZExvYWRlZCcsIGNiKTtcbiAgdGhpcy5fYWRVbml0LmluaXRBZCh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgZGVzaXJlZEJpdHJhdGUsIGFkVW5pdERhdGEpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5yZXNpemVBZCA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0LCB2aWV3TW9kZSwgY2IpIHtcbiAgLy8gTk9URTogQWRTaXplQ2hhbmdlIGV2ZW50IGlzIG9ubHkgc3VwcG9ydGVkIG9uIFZQQUlEIDIuMCBzbyBmb3IgdGhlIG1vbWVudCB3ZSBhcmUgbm90IGdvaW5nIHRvIHVzZSBpdFxuICAvLyBhbmQgd2lsbCBhc3N1bWUgdGhhdCBldmVyeXRoaW5nIGlzIGZpbmUgYWZ0ZXIgdGhlIGFzeW5jIGNhbGxcbiAgdGhpcy5hZFVuaXRBc3luY0NhbGwoJ3Jlc2l6ZUFkJywgd2lkdGgsIGhlaWdodCwgdmlld01vZGUsIGNiKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc3RhcnRBZCA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLndhaXRGb3JFdmVudCgnQWRTdGFydGVkJywgY2IpO1xuICB0aGlzLl9hZFVuaXQuc3RhcnRBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5zdG9wQWQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkU3RvcHBlZCcsIGNiKTtcbiAgdGhpcy5fYWRVbml0LnN0b3BBZCgpO1xufTtcblxuVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZS5wYXVzZUFkID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFBhdXNlZCcsIGNiKTtcbiAgdGhpcy5fYWRVbml0LnBhdXNlQWQoKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUucmVzdW1lQWQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgdGhpcy53YWl0Rm9yRXZlbnQoJ0FkUGxheWluZycsIGNiKTtcbiAgdGhpcy5fYWRVbml0LnJlc3VtZUFkKCk7XG59O1xuXG5WUEFJREFkVW5pdFdyYXBwZXIucHJvdG90eXBlLmV4cGFuZEFkID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZEV4cGFuZGVkQ2hhbmdlJywgY2IpO1xuICB0aGlzLl9hZFVuaXQuZXhwYW5kQWQoKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuY29sbGFwc2VBZCA9IGZ1bmN0aW9uIChjYikge1xuICB0aGlzLndhaXRGb3JFdmVudCgnQWRFeHBhbmRlZENoYW5nZScsIGNiKTtcbiAgdGhpcy5fYWRVbml0LmNvbGxhcHNlQWQoKTtcbn07XG5cblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc2tpcEFkID0gZnVuY3Rpb24gKGNiKSB7XG4gIHRoaXMud2FpdEZvckV2ZW50KCdBZFNraXBwZWQnLCBjYik7XG4gIHRoaXMuX2FkVW5pdC5za2lwQWQoKTtcbn07XG5cbi8vVlBBSUQgcHJvcGVydHkgZ2V0dGVyc1xuW1xuICAnYWRMaW5lYXInLFxuICAnYWRXaWR0aCcsXG4gICdhZEhlaWdodCcsXG4gICdhZEV4cGFuZGVkJyxcbiAgJ2FkU2tpcHBhYmxlU3RhdGUnLFxuICAnYWRSZW1haW5pbmdUaW1lJyxcbiAgJ2FkRHVyYXRpb24nLFxuICAnYWRWb2x1bWUnLFxuICAnYWRDb21wYW5pb25zJyxcbiAgJ2FkSWNvbnMnXG5dLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gIHZhciBnZXR0ZXJOYW1lID0gJ2dldCcgKyB1dGlsaXRpZXMuY2FwaXRhbGl6ZShwcm9wZXJ0eSk7XG5cbiAgVlBBSURBZFVuaXRXcmFwcGVyLnByb3RvdHlwZVtnZXR0ZXJOYW1lXSA9IGZ1bmN0aW9uIChjYikge1xuICAgIHRoaXMuYWRVbml0QXN5bmNDYWxsKGdldHRlck5hbWUsIGNiKTtcbiAgfTtcbn0pO1xuXG4vL1ZQQUlEIHByb3BlcnR5IHNldHRlcnNcblZQQUlEQWRVbml0V3JhcHBlci5wcm90b3R5cGUuc2V0QWRWb2x1bWUgPSBmdW5jdGlvbih2b2x1bWUsIGNiKXtcbiAgdGhpcy5hZFVuaXRBc3luY0NhbGwoJ3NldEFkVm9sdW1lJyx2b2x1bWUsIGNiKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gVlBBSURBZFVuaXRXcmFwcGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vdmFzdC9WQVNURXJyb3InKTtcblxudmFyIFZQQUlERkxBU0hDbGllbnQgPSByZXF1aXJlKCdWUEFJREZMQVNIQ2xpZW50L2pzL1ZQQUlERkxBU0hDbGllbnQnKTtcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL3V0aWxpdHlGdW5jdGlvbnMnKTtcbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcblxuZnVuY3Rpb24gVlBBSURGbGFzaFRlY2gobWVkaWFGaWxlLCBzZXR0aW5ncykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgVlBBSURGbGFzaFRlY2gpKSB7XG4gICAgcmV0dXJuIG5ldyBWUEFJREZsYXNoVGVjaChtZWRpYUZpbGUpO1xuICB9XG4gIHNhbml0eUNoZWNrKG1lZGlhRmlsZSk7XG4gIHRoaXMubmFtZSA9ICd2cGFpZC1mbGFzaCc7XG4gIHRoaXMubWVkaWFGaWxlID0gbWVkaWFGaWxlO1xuICB0aGlzLmNvbnRhaW5lckVsID0gbnVsbDtcbiAgdGhpcy52cGFpZEZsYXNoQ2xpZW50ID0gbnVsbDtcbiAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXG4gIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2sobWVkaWFGaWxlKSB7XG4gICAgaWYgKCFtZWRpYUZpbGUgfHwgIXV0aWxpdGllcy5pc1N0cmluZyhtZWRpYUZpbGUuc3JjKSkge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcignb24gVlBBSURGbGFzaFRlY2gsIGludmFsaWQgTWVkaWFGaWxlJyk7XG4gICAgfVxuICB9XG59XG5cblZQQUlERmxhc2hUZWNoLlZQQUlERkxBU0hDbGllbnQgPSBWUEFJREZMQVNIQ2xpZW50O1xuXG5WUEFJREZsYXNoVGVjaC5zdXBwb3J0cyA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gIHJldHVybiB0eXBlID09PSAnYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnICYmIFZQQUlERmxhc2hUZWNoLlZQQUlERkxBU0hDbGllbnQuaXNTdXBwb3J0ZWQoKTtcbn07XG5cblZQQUlERmxhc2hUZWNoLnByb3RvdHlwZS5sb2FkQWRVbml0ID0gZnVuY3Rpb24gbG9hZEZsYXNoQ3JlYXRpdmUoY29udGFpbmVyRWwsIG9iamVjdEVsLCBjYWxsYmFjaykge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciBmbGFzaENsaWVudE9wdHMgPSB0aGlzLnNldHRpbmdzICYmIHRoaXMuc2V0dGluZ3MudnBhaWRGbGFzaExvYWRlclBhdGggPyB7ZGF0YTogdGhpcy5zZXR0aW5ncy52cGFpZEZsYXNoTG9hZGVyUGF0aH0gOiB1bmRlZmluZWQ7XG4gIHNhbml0eUNoZWNrKGNvbnRhaW5lckVsLCBjYWxsYmFjayk7XG5cbiAgdGhpcy5jb250YWluZXJFbCA9IGNvbnRhaW5lckVsO1xuICB0aGlzLnZwYWlkRmxhc2hDbGllbnQgPSBuZXcgVlBBSURGbGFzaFRlY2guVlBBSURGTEFTSENsaWVudChjb250YWluZXJFbCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyb3IpO1xuICAgIH1cblxuICAgIHRoYXQudnBhaWRGbGFzaENsaWVudC5sb2FkQWRVbml0KHRoYXQubWVkaWFGaWxlLnNyYywgY2FsbGJhY2spO1xuICB9LCBmbGFzaENsaWVudE9wdHMpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2soY29udGFpbmVyLCBjYikge1xuXG4gICAgaWYgKCFkb20uaXNEb21FbGVtZW50KGNvbnRhaW5lcikpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZQQUlERmxhc2hUZWNoLmxvYWRBZFVuaXQsIGludmFsaWQgZG9tIGNvbnRhaW5lciBlbGVtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjYikpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoJ29uIFZQQUlERmxhc2hUZWNoLmxvYWRBZFVuaXQsIG1pc3NpbmcgdmFsaWQgY2FsbGJhY2snKTtcbiAgICB9XG4gIH1cbn07XG5cblZQQUlERmxhc2hUZWNoLnByb3RvdHlwZS51bmxvYWRBZFVuaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnZwYWlkRmxhc2hDbGllbnQpIHtcbiAgICB0cnl7XG4gICAgICB0aGlzLnZwYWlkRmxhc2hDbGllbnQuZGVzdHJveSgpO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICBpZihjb25zb2xlICYmIHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNvbnNvbGUubG9nKSl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdWQVNUIEVSUk9SOiB0cnlpbmcgdG8gdW5sb2FkIHRoZSBWUEFJRCBhZHVuaXQnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy52cGFpZEZsYXNoQ2xpZW50ID0gbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLmNvbnRhaW5lckVsKSB7XG4gICAgZG9tLnJlbW92ZSh0aGlzLmNvbnRhaW5lckVsKTtcbiAgICB0aGlzLmNvbnRhaW5lckVsID0gbnVsbDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREZsYXNoVGVjaDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xuXG52YXIgVlBBSURIVE1MNUNsaWVudCA9IHJlcXVpcmUoJ1ZQQUlESFRNTDVDbGllbnQvanMvVlBBSURIVE1MNUNsaWVudCcpO1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xuXG5mdW5jdGlvbiBWUEFJREhUTUw1VGVjaChtZWRpYUZpbGUpIHtcblxuICBpZighKHRoaXMgaW5zdGFuY2VvZiBWUEFJREhUTUw1VGVjaCkpIHtcbiAgICByZXR1cm4gbmV3IFZQQUlESFRNTDVUZWNoKG1lZGlhRmlsZSk7XG4gIH1cblxuICBzYW5pdHlDaGVjayhtZWRpYUZpbGUpO1xuXG4gIHRoaXMubmFtZSA9ICd2cGFpZC1odG1sNSc7XG4gIHRoaXMuY29udGFpbmVyRWwgPSBudWxsO1xuICB0aGlzLnZpZGVvRWwgPSBudWxsO1xuICB0aGlzLnZwYWlkSFRNTENsaWVudCA9IG51bGw7XG5cbiAgdGhpcy5tZWRpYUZpbGUgPSBtZWRpYUZpbGU7XG5cbiAgZnVuY3Rpb24gc2FuaXR5Q2hlY2sobWVkaWFGaWxlKSB7XG4gICAgICBpZiAoIW1lZGlhRmlsZSB8fCAhdXRpbGl0aWVzLmlzU3RyaW5nKG1lZGlhRmlsZS5zcmMpKSB7XG4gICAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoVlBBSURIVE1MNVRlY2guSU5WQUxJRF9NRURJQV9GSUxFKTtcbiAgICAgIH1cbiAgfVxufVxuXG5WUEFJREhUTUw1VGVjaC5WUEFJREhUTUw1Q2xpZW50ID0gVlBBSURIVE1MNUNsaWVudDtcblxuVlBBSURIVE1MNVRlY2guc3VwcG9ydHMgPSBmdW5jdGlvbiAodHlwZSkge1xuICByZXR1cm4gIXV0aWxpdGllcy5pc09sZElFKCkgJiYgdHlwZSA9PT0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnO1xufTtcblxuVlBBSURIVE1MNVRlY2gucHJvdG90eXBlLmxvYWRBZFVuaXQgPSBmdW5jdGlvbiBsb2FkQWRVbml0KGNvbnRhaW5lckVsLCB2aWRlb0VsLCBjYWxsYmFjaykge1xuICBzYW5pdHlDaGVjayhjb250YWluZXJFbCwgdmlkZW9FbCwgY2FsbGJhY2spO1xuXG4gIHRoaXMuY29udGFpbmVyRWwgPSBjb250YWluZXJFbDtcbiAgdGhpcy52aWRlb0VsID0gdmlkZW9FbDtcbiAgdGhpcy52cGFpZEhUTUxDbGllbnQgPSBuZXcgVlBBSURIVE1MNVRlY2guVlBBSURIVE1MNUNsaWVudChjb250YWluZXJFbCwgdmlkZW9FbCwge30pO1xuICB0aGlzLnZwYWlkSFRNTENsaWVudC5sb2FkQWRVbml0KHRoaXMubWVkaWFGaWxlLnNyYywgY2FsbGJhY2spO1xuXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKGNvbnRhaW5lciwgdmlkZW8sIGNiKSB7XG4gICAgaWYgKCFkb20uaXNEb21FbGVtZW50KGNvbnRhaW5lcikpIHtcbiAgICAgIHRocm93IG5ldyBWQVNURXJyb3IoVlBBSURIVE1MNVRlY2guSU5WQUxJRF9ET01fQ09OVEFJTkVSX0VMKTtcbiAgICB9XG5cbiAgICBpZiAoIWRvbS5pc0RvbUVsZW1lbnQodmlkZW8pIHx8IHZpZGVvLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ3ZpZGVvJykge1xuICAgICAgdGhyb3cgbmV3IFZBU1RFcnJvcihWUEFJREhUTUw1VGVjaC5JTlZBTElEX0RPTV9DT05UQUlORVJfRUwpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2IpKSB7XG4gICAgICB0aHJvdyBuZXcgVkFTVEVycm9yKFZQQUlESFRNTDVUZWNoLk1JU1NJTkdfQ0FMTEJBQ0spO1xuICAgIH1cbiAgfVxufTtcblxuVlBBSURIVE1MNVRlY2gucHJvdG90eXBlLnVubG9hZEFkVW5pdCA9IGZ1bmN0aW9uIHVubG9hZEFkVW5pdCgpIHtcbiAgaWYgKHRoaXMudnBhaWRIVE1MQ2xpZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMudnBhaWRIVE1MQ2xpZW50LmRlc3Ryb3koKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGlmIChjb25zb2xlICYmIHV0aWxpdGllcy5pc0Z1bmN0aW9uKGNvbnNvbGUubG9nKSkge1xuICAgICAgICBjb25zb2xlLmxvZygnVkFTVCBFUlJPUjogdHJ5aW5nIHRvIHVubG9hZCB0aGUgVlBBSUQgYWR1bml0Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy52cGFpZEhUTUxDbGllbnQgPSBudWxsO1xuICB9XG5cbiAgaWYgKHRoaXMuY29udGFpbmVyRWwpIHtcbiAgICBkb20ucmVtb3ZlKHRoaXMuY29udGFpbmVyRWwpO1xuICAgIHRoaXMuY29udGFpbmVyRWwgPSBudWxsO1xuICB9XG59O1xuXG52YXIgUFJFRklYID0gJ29uIFZQQUlESFRNTDVUZWNoJztcblZQQUlESFRNTDVUZWNoLklOVkFMSURfTUVESUFfRklMRSA9IFBSRUZJWCArICcsIGludmFsaWQgTWVkaWFGaWxlJztcblZQQUlESFRNTDVUZWNoLklOVkFMSURfRE9NX0NPTlRBSU5FUl9FTCA9IFBSRUZJWCArICcsIGludmFsaWQgY29udGFpbmVyIEh0bWxFbGVtZW50JztcblZQQUlESFRNTDVUZWNoLklOVkFMSURfRE9NX1ZJREVPX0VMID0gUFJFRklYICsgJywgaW52YWxpZCBIVE1MVmlkZW9FbGVtZW50JztcblZQQUlESFRNTDVUZWNoLk1JU1NJTkdfQ0FMTEJBQ0sgPSBQUkVGSVggKyAnLCBtaXNzaW5nIHZhbGlkIGNhbGxiYWNrJztcblxubW9kdWxlLmV4cG9ydHMgPSBWUEFJREhUTUw1VGVjaDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBWQVNURXJyb3IgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RFcnJvcicpO1xudmFyIFZBU1RSZXNwb25zZSA9IHJlcXVpcmUoJy4uL3Zhc3QvVkFTVFJlc3BvbnNlJyk7XG52YXIgVkFTVFRyYWNrZXIgPSByZXF1aXJlKCcuLi92YXN0L1ZBU1RUcmFja2VyJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuLi92YXN0L3Zhc3RVdGlsJyk7XG5cbnZhciBWUEFJREFkVW5pdFdyYXBwZXIgPSByZXF1aXJlKCcuL1ZQQUlEQWRVbml0V3JhcHBlcicpO1xudmFyIFZQQUlESFRNTDVUZWNoID0gcmVxdWlyZSgnLi9WUEFJREhUTUw1VGVjaCcpO1xudmFyIFZQQUlERmxhc2hUZWNoID0gcmVxdWlyZSgnLi9WUEFJREZsYXNoVGVjaCcpO1xuXG52YXIgYXN5bmMgPSByZXF1aXJlKCcuLi8uLi91dGlscy9hc3luYycpO1xudmFyIGRvbSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2RvbScpO1xudmFyIHBsYXllclV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvcGxheWVyVXRpbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuLi8uLi91dGlscy91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbmZ1bmN0aW9uIFZQQUlESW50ZWdyYXRvcihwbGF5ZXIsIHNldHRpbmdzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWUEFJREludGVncmF0b3IpKSB7XG4gICAgcmV0dXJuIG5ldyBWUEFJREludGVncmF0b3IocGxheWVyKTtcbiAgfVxuXG4gIHRoaXMuVklFV19NT0RFID0ge1xuICAgIE5PUk1BTDogJ25vcm1hbCcsXG4gICAgRlVMTFNDUkVFTjogXCJmdWxsc2NyZWVuXCIsXG4gICAgVEhVTUJOQUlMOiBcInRodW1ibmFpbFwiXG4gIH07XG4gIHRoaXMucGxheWVyID0gcGxheWVyO1xuICB0aGlzLmNvbnRhaW5lckVsID0gY3JlYXRlVlBBSURDb250YWluZXJFbChwbGF5ZXIpO1xuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgcmVzcG9uc2VUaW1lb3V0OiA1MDAwLFxuICAgIFZQQUlEX1ZFUlNJT046ICcyLjAnXG4gIH07XG4gIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG5cbiAgZnVuY3Rpb24gY3JlYXRlVlBBSURDb250YWluZXJFbCgpIHtcbiAgICB2YXIgY29udGFpbmVyRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb20uYWRkQ2xhc3MoY29udGFpbmVyRWwsICdWUEFJRC1jb250YWluZXInKTtcbiAgICBwbGF5ZXIuZWwoKS5pbnNlcnRCZWZvcmUoY29udGFpbmVyRWwsIHBsYXllci5jb250cm9sQmFyLmVsKCkpO1xuICAgIHJldHVybiBjb250YWluZXJFbDtcblxuICB9XG59XG5cbi8vTGlzdCBvZiBzdXBwb3J0ZWQgVlBBSUQgdGVjaG5vbG9naWVzXG5WUEFJREludGVncmF0b3IudGVjaHMgPSBbXG4gIFZQQUlERmxhc2hUZWNoLFxuICBWUEFJREhUTUw1VGVjaFxuXTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5wbGF5QWQgPSBmdW5jdGlvbiBwbGF5VlBhaWRBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gIHZhciB0aGF0ID0gdGhpcztcbiAgdmFyIHRlY2g7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcblxuICBjYWxsYmFjayA9IGNhbGxiYWNrIHx8IHV0aWxpdGllcy5ub29wO1xuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoJ29uIFZBU1RJbnRlZ3JhdG9yLnBsYXlBZCwgbWlzc2luZyByZXF1aXJlZCBWQVNUUmVzcG9uc2UnKSk7XG4gIH1cblxuICB0ZWNoID0gdGhpcy5fZmluZFN1cHBvcnRlZFRlY2godmFzdFJlc3BvbnNlLCB0aGlzLnNldHRpbmdzKTtcbiAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCAndmpzLXZwYWlkLWFkJyk7XG5cbiAgcGxheWVyLm9uKCd2YXN0LmFkc0NhbmNlbCcsIHRyaWdnZXJWcGFpZEFkRW5kKTtcbiAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbigpe1xuICAgIHBsYXllci5vZmYoJ3Zhc3QuYWRzQ2FuY2VsJywgdHJpZ2dlclZwYWlkQWRFbmQpO1xuICAgIHJlbW92ZUFkVW5pdCgpO1xuICB9KTtcblxuICBpZiAodGVjaCkge1xuICAgIGFzeW5jLndhdGVyZmFsbChbXG4gICAgICBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgICBuZXh0KG51bGwsIHRlY2gsIHZhc3RSZXNwb25zZSk7XG4gICAgICB9LFxuICAgICAgdGhpcy5fbG9hZEFkVW5pdC5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy5fcGxheUFkVW5pdC5iaW5kKHRoaXMpLFxuICAgICAgdGhpcy5fZmluaXNoUGxheWluZy5iaW5kKHRoaXMpXG5cbiAgICBdLCBmdW5jdGlvbiAoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdGhhdC5fdHJhY2tFcnJvcih2YXN0UmVzcG9uc2UpO1xuICAgICAgfVxuICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLmFkRW5kJyk7XG4gICAgICBjYWxsYmFjayhlcnJvciwgdmFzdFJlc3BvbnNlKTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2FkVW5pdCA9IHtcbiAgICAgIF9wYXVzZWQ6IHRydWUsXG4gICAgICB0eXBlOiAnVlBBSUQnLFxuICAgICAgcGF1c2VBZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5wYXVzZUFkJyk7XG4gICAgICAgIHBsYXllci5wYXVzZSh0cnVlKTsvL3dlIG1ha2Ugc3VyZSB0aGF0IHRoZSB2aWRlbyBjb250ZW50IGdldHMgc3RvcHBlZC5cbiAgICAgIH0sXG4gICAgICByZXN1bWVBZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLnJlc3VtZUFkJyk7XG4gICAgICB9LFxuICAgICAgaXNQYXVzZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF1c2VkO1xuICAgICAgfSxcbiAgICAgIGdldFNyYzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0ZWNoLm1lZGlhRmlsZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuX2FkVW5pdDtcbiAgfVxuXG4gIGNhbGxiYWNrKG5ldyBWQVNURXJyb3IoJ29uIFZQQUlESW50ZWdyYXRvci5wbGF5QWQsIGNvdWxkIG5vdCBmaW5kIGEgc3VwcG9ydGVkIG1lZGlhRmlsZScpKTtcblxuICByZXR1cm4gbnVsbDtcbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiB0cmlnZ2VyVnBhaWRBZEVuZCgpe1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5hZEVuZCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQWRVbml0KCkge1xuICAgIGlmICh0ZWNoKSB7XG4gICAgICB0ZWNoLnVubG9hZEFkVW5pdCgpO1xuICAgIH1cbiAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksICd2anMtdnBhaWQtYWQnKTtcbiAgfVxufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fZmluZFN1cHBvcnRlZFRlY2ggPSBmdW5jdGlvbiAodmFzdFJlc3BvbnNlLCBzZXR0aW5ncykge1xuICBpZiAoISh2YXN0UmVzcG9uc2UgaW5zdGFuY2VvZiBWQVNUUmVzcG9uc2UpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgdnBhaWRNZWRpYUZpbGVzID0gdmFzdFJlc3BvbnNlLm1lZGlhRmlsZXMuZmlsdGVyKHZhc3RVdGlsLmlzVlBBSUQpO1xuICB2YXIgaSwgbGVuLCBtZWRpYUZpbGUsIFZQQUlEVGVjaDtcblxuICBmb3IgKGkgPSAwLCBsZW4gPSB2cGFpZE1lZGlhRmlsZXMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICBtZWRpYUZpbGUgPSB2cGFpZE1lZGlhRmlsZXNbaV07XG4gICAgVlBBSURUZWNoID0gZmluZFN1cHBvcnRlZFRlY2gobWVkaWFGaWxlKTtcbiAgICBpZiAoVlBBSURUZWNoKSB7XG4gICAgICByZXR1cm4gbmV3IFZQQUlEVGVjaChtZWRpYUZpbGUsIHNldHRpbmdzKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG5cbiAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuICBmdW5jdGlvbiBmaW5kU3VwcG9ydGVkVGVjaChtZWRpYWZpbGUpIHtcbiAgICB2YXIgdHlwZSA9IG1lZGlhZmlsZS50eXBlO1xuICAgIHZhciBpLCBsZW4sIFZQQUlEVGVjaDtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBWUEFJREludGVncmF0b3IudGVjaHMubGVuZ3RoOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgIFZQQUlEVGVjaCA9IFZQQUlESW50ZWdyYXRvci50ZWNoc1tpXTtcbiAgICAgIGlmIChWUEFJRFRlY2guc3VwcG9ydHModHlwZSkpIHtcbiAgICAgICAgcmV0dXJuIFZQQUlEVGVjaDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2NyZWF0ZVZQQUlEQWRVbml0V3JhcHBlciA9IGZ1bmN0aW9uKGFkVW5pdCwgc3JjLCByZXNwb25zZVRpbWVvdXQpIHtcbiAgcmV0dXJuIG5ldyBWUEFJREFkVW5pdFdyYXBwZXIoYWRVbml0LCB7c3JjOiBzcmMsIHJlc3BvbnNlVGltZW91dDogcmVzcG9uc2VUaW1lb3V0fSk7XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9sb2FkQWRVbml0ID0gZnVuY3Rpb24gKHRlY2gsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgdGhhdCA9IHRoaXM7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgdmFyIHZqc1RlY2hFbCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuICB2YXIgcmVzcG9uc2VUaW1lb3V0ID0gdGhpcy5zZXR0aW5ncy5yZXNwb25zZVRpbWVvdXQgfHwgdGhpcy5vcHRpb25zLnJlc3BvbnNlVGltZW91dDtcbiAgdGVjaC5sb2FkQWRVbml0KHRoaXMuY29udGFpbmVyRWwsIHZqc1RlY2hFbCwgZnVuY3Rpb24gKGVycm9yLCBhZFVuaXQpIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHZhciBXcmFwcGVkQWRVbml0ID0gdGhhdC5fY3JlYXRlVlBBSURBZFVuaXRXcmFwcGVyKGFkVW5pdCwgdGVjaC5tZWRpYUZpbGUuc3JjLCByZXNwb25zZVRpbWVvdXQpO1xuICAgICAgdmFyIHRlY2hDbGFzcyA9ICd2anMtJyArIHRlY2gubmFtZSArICctYWQnO1xuICAgICAgZG9tLmFkZENsYXNzKHBsYXllci5lbCgpLCB0ZWNoQ2xhc3MpO1xuICAgICAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5lbCgpLHRlY2hDbGFzcyk7XG4gICAgICB9KTtcbiAgICAgIG5leHQobnVsbCwgV3JhcHBlZEFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBuZXh0KGUsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgICB9XG4gIH0pO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fcGxheUFkVW5pdCA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgY2FsbGJhY2spIHtcbiAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICBmdW5jdGlvbiAobmV4dCkge1xuICAgICAgbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfSxcbiAgICB0aGlzLl9oYW5kc2hha2UuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9pbml0QWQuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9zZXR1cEV2ZW50cy5iaW5kKHRoaXMpLFxuICAgIHRoaXMuX2FkZFNraXBCdXR0b24uYmluZCh0aGlzKSxcbiAgICB0aGlzLl9saW5rUGxheWVyQ29udHJvbHMuYmluZCh0aGlzKSxcbiAgICB0aGlzLl9zdGFydEFkLmJpbmQodGhpcylcbiAgXSwgY2FsbGJhY2spO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5faGFuZHNoYWtlID0gZnVuY3Rpb24gaGFuZHNoYWtlKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIGFkVW5pdC5oYW5kc2hha2VWZXJzaW9uKHRoaXMub3B0aW9ucy5WUEFJRF9WRVJTSU9OLCBmdW5jdGlvbiAoZXJyb3IsIHZlcnNpb24pIHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJldHVybiBuZXh0KGVycm9yLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcnNpb24gJiYgaXNTdXBwb3J0ZWRWZXJzaW9uKHZlcnNpb24pKSB7XG4gICAgICByZXR1cm4gbmV4dChudWxsLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQobmV3IFZBU1RFcnJvcignb24gVlBBSURJbnRlZ3JhdG9yLl9oYW5kc2hha2UsIHVuc3VwcG9ydGVkIHZlcnNpb24gXCInICsgdmVyc2lvbiArICdcIicpLCBhZFVuaXQsIHZhc3RSZXNwb25zZSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGlzU3VwcG9ydGVkVmVyc2lvbih2ZXJzaW9uKSB7XG4gICAgdmFyIG1ham9yTnVtID0gbWFqb3IodmVyc2lvbik7XG4gICAgcmV0dXJuIG1ham9yTnVtID49IDEgJiYgbWFqb3JOdW0gPD0gMjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ham9yKHZlcnNpb24pIHtcbiAgICB2YXIgcGFydHMgPSB2ZXJzaW9uLnNwbGl0KCcuJyk7XG4gICAgcmV0dXJuIHBhcnNlSW50KHBhcnRzWzBdLCAxMCk7XG4gIH1cbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2luaXRBZCA9IGZ1bmN0aW9uIChhZFVuaXQsIHZhc3RSZXNwb25zZSwgbmV4dCkge1xuICB2YXIgdGVjaCA9IHRoaXMucGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XG4gIHZhciBkaW1lbnNpb24gPSBkb20uZ2V0RGltZW5zaW9uKHRlY2gpO1xuICBhZFVuaXQuaW5pdEFkKGRpbWVuc2lvbi53aWR0aCwgZGltZW5zaW9uLmhlaWdodCwgdGhpcy5WSUVXX01PREUuTk9STUFMLCAtMSwge0FkUGFyYW1ldGVyczogdmFzdFJlc3BvbnNlLmFkUGFyYW1ldGVycyB8fCAnJ30sIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIG5leHQoZXJyb3IsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcbiAgfSk7XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9jcmVhdGVWQVNUVHJhY2tlciA9IGZ1bmN0aW9uKGFkVW5pdFNyYywgdmFzdFJlc3BvbnNlKSB7XG4gIHJldHVybiBuZXcgVkFTVFRyYWNrZXIoYWRVbml0U3JjLCB2YXN0UmVzcG9uc2UpO1xufTtcblxuVlBBSURJbnRlZ3JhdG9yLnByb3RvdHlwZS5fc2V0dXBFdmVudHMgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIGFkVW5pdFNyYyA9IGFkVW5pdC5vcHRpb25zLnNyYztcbiAgdmFyIHRyYWNrZXIgPSB0aGlzLl9jcmVhdGVWQVNUVHJhY2tlcihhZFVuaXRTcmMsIHZhc3RSZXNwb25zZSk7XG4gIHZhciBwbGF5ZXIgPSB0aGlzLnBsYXllcjtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gIGFkVW5pdC5vbignQWRTa2lwcGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFNraXBwZWQnKTtcbiAgICB0cmFja2VyLnRyYWNrU2tpcCgpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkSW1wcmVzc2lvbicsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRJbXByZXNzaW9uJyk7XG4gICAgdHJhY2tlci50cmFja0ltcHJlc3Npb25zKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRTdGFydGVkJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFN0YXJ0ZWQnKTtcbiAgICB0cmFja2VyLnRyYWNrQ3JlYXRpdmVWaWV3KCk7XG4gICAgbm90aWZ5UGxheVRvUGxheWVyKCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRWaWRlb1N0YXJ0JywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFZpZGVvU3RhcnQnKTtcbiAgICB0cmFja2VyLnRyYWNrU3RhcnQoKTtcbiAgICBub3RpZnlQbGF5VG9QbGF5ZXIoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFBsYXlpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkUGxheWluZycpO1xuICAgIHRyYWNrZXIudHJhY2tSZXN1bWUoKTtcbiAgICBub3RpZnlQbGF5VG9QbGF5ZXIoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFBhdXNlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRQYXVzZWQnKTtcbiAgICB0cmFja2VyLnRyYWNrUGF1c2UoKTtcbiAgICBub3RpZnlQYXVzZVRvUGxheWVyKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG5vdGlmeVBsYXlUb1BsYXllcigpe1xuICAgIGlmKHRoYXQuX2FkVW5pdCAmJiB0aGF0Ll9hZFVuaXQuaXNQYXVzZWQoKSl7XG4gICAgICB0aGF0Ll9hZFVuaXQuX3BhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBwbGF5ZXIudHJpZ2dlcigncGxheScpO1xuXG4gIH1cblxuICBmdW5jdGlvbiBub3RpZnlQYXVzZVRvUGxheWVyKCkge1xuICAgIGlmKHRoYXQuX2FkVW5pdCl7XG4gICAgICB0aGF0Ll9hZFVuaXQuX3BhdXNlZCA9IHRydWU7XG4gICAgfVxuICAgIHBsYXllci50cmlnZ2VyKCdwYXVzZScpO1xuICB9XG5cbiAgYWRVbml0Lm9uKCdBZFZpZGVvRmlyc3RRdWFydGlsZScsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb0ZpcnN0UXVhcnRpbGUnKTtcbiAgICB0cmFja2VyLnRyYWNrRmlyc3RRdWFydGlsZSgpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkVmlkZW9NaWRwb2ludCcsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWaWRlb01pZHBvaW50Jyk7XG4gICAgdHJhY2tlci50cmFja01pZHBvaW50KCk7XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRWaWRlb1RoaXJkUXVhcnRpbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9UaGlyZFF1YXJ0aWxlJyk7XG4gICAgdHJhY2tlci50cmFja1RoaXJkUXVhcnRpbGUoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFZpZGVvQ29tcGxldGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkVmlkZW9Db21wbGV0ZScpO1xuICAgIHRyYWNrZXIudHJhY2tDb21wbGV0ZSgpO1xuICB9KTtcblxuICBhZFVuaXQub24oJ0FkQ2xpY2tUaHJ1JywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRDbGlja1RocnUnKTtcbiAgICB2YXIgdXJsID0gZGF0YS51cmw7XG4gICAgdmFyIHBsYXllckhhbmRsZXMgPSBkYXRhLnBsYXllckhhbmRsZXM7XG4gICAgdmFyIGNsaWNrVGhydVVybCA9IHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHVybCkgPyB1cmwgOiBnZW5lcmF0ZUNsaWNrVGhyb3VnaFVSTCh2YXN0UmVzcG9uc2UuY2xpY2tUaHJvdWdoKTtcblxuICAgIHRyYWNrZXIudHJhY2tDbGljaygpO1xuICAgIGlmIChwbGF5ZXJIYW5kbGVzICYmIGNsaWNrVGhydVVybCkge1xuICAgICAgd2luZG93Lm9wZW4oY2xpY2tUaHJ1VXJsLCAnX2JsYW5rJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDbGlja1Rocm91Z2hVUkwoY2xpY2tUaHJvdWdoTWFjcm8pIHtcbiAgICAgIHZhciB2YXJpYWJsZXMgPSB7XG4gICAgICAgIEFTU0VUVVJJOiBhZFVuaXQub3B0aW9ucy5zcmMsXG4gICAgICAgIENPTlRFTlRQTEFZSEVBRDogMCAvL0luIFZQQUlEIHRoZXJlIGlzIG5vIG1ldGhvZCB0byBrbm93IHRoZSBjdXJyZW50IHRpbWUgZnJvbSB0aGUgYWRVbml0XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gY2xpY2tUaHJvdWdoTWFjcm8gPyB2YXN0VXRpbC5wYXJzZVVSTE1hY3JvKGNsaWNrVGhyb3VnaE1hY3JvLCB2YXJpYWJsZXMpIDogbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIGFkVW5pdC5vbignQWRVc2VyQWNjZXB0SW52aXRhdGlvbicsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRVc2VyQWNjZXB0SW52aXRhdGlvbicpO1xuICAgIHRyYWNrZXIudHJhY2tBY2NlcHRJbnZpdGF0aW9uKCk7XG4gICAgdHJhY2tlci50cmFja0FjY2VwdEludml0YXRpb25MaW5lYXIoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFVzZXJDbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRVc2VyQ2xvc2UnKTtcbiAgICB0cmFja2VyLnRyYWNrQ2xvc2UoKTtcbiAgICB0cmFja2VyLnRyYWNrQ2xvc2VMaW5lYXIoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFVzZXJNaW5pbWl6ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRVc2VyTWluaW1pemUnKTtcbiAgICB0cmFja2VyLnRyYWNrQ29sbGFwc2UoKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZEVycm9yJywgZnVuY3Rpb24gKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZEVycm9yJyk7XG4gICAgLy9OT1RFOiB3ZSB0cmFjayBlcnJvcnMgY29kZSA5MDEsIGFzIG5vdGVkIGluIFZBU1QgMy4wXG4gICAgdHJhY2tlci50cmFja0Vycm9yV2l0aENvZGUoOTAxKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZFZvbHVtZUNoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWb2x1bWVDaGFuZ2UnKTtcbiAgICB2YXIgbGFzdFZvbHVtZSA9IHBsYXllci52b2x1bWUoKTtcbiAgICBhZFVuaXQuZ2V0QWRWb2x1bWUoZnVuY3Rpb24gKGVycm9yLCBjdXJyZW50Vm9sdW1lKSB7XG4gICAgICBpZiAoY3VycmVudFZvbHVtZSA9PT0gMCAmJiBsYXN0Vm9sdW1lID4gMCkge1xuICAgICAgICB0cmFja2VyLnRyYWNrTXV0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3VycmVudFZvbHVtZSA+IDAgJiYgbGFzdFZvbHVtZSA9PT0gMCkge1xuICAgICAgICB0cmFja2VyLnRyYWNrVW5tdXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHBsYXllci52b2x1bWUoY3VycmVudFZvbHVtZSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHZhciB1cGRhdGVWaWV3U2l6ZSA9IHJlc2l6ZUFkLmJpbmQodGhpcywgcGxheWVyLCBhZFVuaXQsIHRoaXMuVklFV19NT0RFKTtcbiAgdmFyIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkID0gdXRpbGl0aWVzLnRocm90dGxlKHVwZGF0ZVZpZXdTaXplLCAxMDApO1xuICB2YXIgYXV0b1Jlc2l6ZSA9IHRoaXMuc2V0dGluZ3MuYXV0b1Jlc2l6ZTtcblxuICBpZiAoYXV0b1Jlc2l6ZSkge1xuICAgIGRvbS5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3Jlc2l6ZScsIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkKTtcbiAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdvcmllbnRhdGlvbmNoYW5nZScsIHVwZGF0ZVZpZXdTaXplVGhyb3R0bGVkKTtcbiAgfVxuXG4gIHBsYXllci5vbigndmFzdC5yZXNpemUnLCB1cGRhdGVWaWV3U2l6ZSk7XG4gIHBsYXllci5vbigndnBhaWQucGF1c2VBZCcsIHBhdXNlQWRVbml0KTtcbiAgcGxheWVyLm9uKCd2cGFpZC5yZXN1bWVBZCcsIHJlc3VtZUFkVW5pdCk7XG5cbiAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgcGxheWVyLm9mZigndmFzdC5yZXNpemUnLCB1cGRhdGVWaWV3U2l6ZSk7XG4gICAgcGxheWVyLm9mZigndnBhaWQucGF1c2VBZCcsIHBhdXNlQWRVbml0KTtcbiAgICBwbGF5ZXIub2ZmKCd2cGFpZC5yZXN1bWVBZCcsIHJlc3VtZUFkVW5pdCk7XG5cbiAgICBpZiAoYXV0b1Jlc2l6ZSkge1xuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgdXBkYXRlVmlld1NpemVUaHJvdHRsZWQpO1xuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnb3JpZW50YXRpb25jaGFuZ2UnLCB1cGRhdGVWaWV3U2l6ZVRocm90dGxlZCk7XG4gICAgfVxuICB9KTtcblxuICBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIEZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIHBhdXNlQWRVbml0KCkge1xuICAgIGFkVW5pdC5wYXVzZUFkKHV0aWxpdGllcy5ub29wKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3VtZUFkVW5pdCgpIHtcbiAgICBhZFVuaXQucmVzdW1lQWQodXRpbGl0aWVzLm5vb3ApO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9hZGRTa2lwQnV0dG9uID0gZnVuY3Rpb24gKGFkVW5pdCwgdmFzdFJlc3BvbnNlLCBuZXh0KSB7XG4gIHZhciBza2lwQnV0dG9uO1xuICB2YXIgcGxheWVyID0gdGhpcy5wbGF5ZXI7XG5cbiAgYWRVbml0Lm9uKCdBZFNraXBwYWJsZVN0YXRlQ2hhbmdlJywgdXBkYXRlU2tpcEJ1dHRvblN0YXRlKTtcblxuICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkRW5kJywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIHJlbW92ZVNraXBCdXR0b24pO1xuXG4gIG5leHQobnVsbCwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuXG4gIC8qKiogTG9jYWwgZnVuY3Rpb24gKioqL1xuICBmdW5jdGlvbiB1cGRhdGVTa2lwQnV0dG9uU3RhdGUoKSB7XG4gICAgcGxheWVyLnRyaWdnZXIoJ3ZwYWlkLkFkU2tpcHBhYmxlU3RhdGVDaGFuZ2UnKTtcbiAgICBhZFVuaXQuZ2V0QWRTa2lwcGFibGVTdGF0ZShmdW5jdGlvbiAoZXJyb3IsIGlzU2tpcHBhYmxlKSB7XG4gICAgICBpZiAoaXNTa2lwcGFibGUpIHtcbiAgICAgICAgaWYgKCFza2lwQnV0dG9uKSB7XG4gICAgICAgICAgYWRkU2tpcEJ1dHRvbihwbGF5ZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVTa2lwQnV0dG9uKHBsYXllcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTa2lwQnV0dG9uKHBsYXllcikge1xuICAgIHNraXBCdXR0b24gPSBjcmVhdGVTa2lwQnV0dG9uKHBsYXllcik7XG4gICAgcGxheWVyLmVsKCkuYXBwZW5kQ2hpbGQoc2tpcEJ1dHRvbik7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVTa2lwQnV0dG9uKCkge1xuICAgIGRvbS5yZW1vdmUoc2tpcEJ1dHRvbik7XG4gICAgc2tpcEJ1dHRvbiA9IG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTa2lwQnV0dG9uKCkge1xuICAgIHZhciBza2lwQnV0dG9uID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG9tLmFkZENsYXNzKHNraXBCdXR0b24sIFwidmFzdC1za2lwLWJ1dHRvblwiKTtcbiAgICBkb20uYWRkQ2xhc3Moc2tpcEJ1dHRvbiwgXCJlbmFibGVkXCIpO1xuICAgIHNraXBCdXR0b24uaW5uZXJIVE1MID0gXCJTa2lwIGFkXCI7XG5cbiAgICBza2lwQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRVbml0LnNraXBBZCh1dGlsaXRpZXMubm9vcCk7Ly9XZSBza2lwIHRoZSBhZFVuaXRcblxuICAgICAgLy9XZSBwcmV2ZW50IGV2ZW50IHByb3BhZ2F0aW9uIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggdGhlIGNsaWNrVGhyb3VnaCBhbmQgc28gb25cbiAgICAgIGlmICh3aW5kb3cuRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBza2lwQnV0dG9uO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl9saW5rUGxheWVyQ29udHJvbHMgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHRoYXQgPSB0aGlzO1xuICBsaW5rVm9sdW1lQ29udHJvbCh0aGlzLnBsYXllciwgYWRVbml0KTtcbiAgbGlua0Z1bGxTY3JlZW5Db250cm9sKHRoaXMucGxheWVyLCBhZFVuaXQsIHRoaXMuVklFV19NT0RFKTtcblxuICBuZXh0KG51bGwsIGFkVW5pdCwgdmFzdFJlc3BvbnNlKTtcblxuICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gIGZ1bmN0aW9uIGxpbmtWb2x1bWVDb250cm9sKHBsYXllciwgYWRVbml0KSB7XG4gICAgcGxheWVyLm9uKCd2b2x1bWVjaGFuZ2UnLCB1cGRhdGVBZFVuaXRWb2x1bWUpO1xuICAgIGFkVW5pdC5vbignQWRWb2x1bWVDaGFuZ2UnLCB1cGRhdGVQbGF5ZXJWb2x1bWUpO1xuXG4gICAgcGxheWVyLm9uZSgndnBhaWQuYWRFbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBwbGF5ZXIub2ZmKCd2b2x1bWVjaGFuZ2UnLCB1cGRhdGVBZFVuaXRWb2x1bWUpO1xuICAgIH0pO1xuXG5cbiAgICAvKioqIGxvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgZnVuY3Rpb24gdXBkYXRlQWRVbml0Vm9sdW1lKCkge1xuICAgICAgdmFyIHZvbCA9IHBsYXllci5tdXRlZCgpID8gMCA6IHBsYXllci52b2x1bWUoKTtcbiAgICAgIGFkVW5pdC5zZXRBZFZvbHVtZSh2b2wsIGxvZ0Vycm9yKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVQbGF5ZXJWb2x1bWUoKSB7XG4gICAgICBwbGF5ZXIudHJpZ2dlcigndnBhaWQuQWRWb2x1bWVDaGFuZ2UnKTtcbiAgICAgIGFkVW5pdC5nZXRBZFZvbHVtZShmdW5jdGlvbiAoZXJyb3IsIHZvbCkge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBsb2dFcnJvcihlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxheWVyLnZvbHVtZSh2b2wpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsaW5rRnVsbFNjcmVlbkNvbnRyb2wocGxheWVyLCBhZFVuaXQsIFZJRVdfTU9ERSkge1xuICAgIHZhciB1cGRhdGVWaWV3U2l6ZSA9IHJlc2l6ZUFkLmJpbmQodGhhdCwgcGxheWVyLCBhZFVuaXQsIFZJRVdfTU9ERSk7XG5cbiAgICBwbGF5ZXIub24oJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB1cGRhdGVWaWV3U2l6ZSk7XG5cbiAgICBwbGF5ZXIub25lKCd2cGFpZC5hZEVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHBsYXllci5vZmYoJ2Z1bGxzY3JlZW5jaGFuZ2UnLCB1cGRhdGVWaWV3U2l6ZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX3N0YXJ0QWQgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuXG4gIGFkVW5pdC5zdGFydEFkKGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGlmICghZXJyb3IpIHtcbiAgICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkU3RhcnQnKTtcbiAgICB9XG4gICAgbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9KTtcbn07XG5cblZQQUlESW50ZWdyYXRvci5wcm90b3R5cGUuX2ZpbmlzaFBsYXlpbmcgPSBmdW5jdGlvbiAoYWRVbml0LCB2YXN0UmVzcG9uc2UsIG5leHQpIHtcbiAgdmFyIHBsYXllciA9IHRoaXMucGxheWVyO1xuICBhZFVuaXQub24oJ0FkU3RvcHBlZCcsIGZ1bmN0aW9uICgpIHtcbiAgIHBsYXllci50cmlnZ2VyKCd2cGFpZC5BZFN0b3BwZWQnKTtcbiAgIGZpbmlzaFBsYXlpbmdBZChudWxsKTtcbiAgfSk7XG5cbiAgYWRVbml0Lm9uKCdBZEVycm9yJywgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgdmFyIGVyck1zZyA9IGVycm9yPyBlcnJvci5tZXNzYWdlIDogJ29uIFZQQUlESW50ZWdyYXRvciwgZXJyb3Igd2hpbGUgd2FpdGluZyBmb3IgdGhlIGFkVW5pdCB0byBmaW5pc2ggcGxheWluZyc7XG4gICAgZmluaXNoUGxheWluZ0FkKG5ldyBWQVNURXJyb3IoZXJyTXNnKSk7XG4gIH0pO1xuXG4gIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgZnVuY3Rpb24gZmluaXNoUGxheWluZ0FkKGVycm9yKSB7XG4gICAgbmV4dChlcnJvciwgYWRVbml0LCB2YXN0UmVzcG9uc2UpO1xuICB9XG59O1xuXG5WUEFJREludGVncmF0b3IucHJvdG90eXBlLl90cmFja0Vycm9yID0gZnVuY3Rpb24gdHJhY2tFcnJvcihyZXNwb25zZSkge1xuICB2YXN0VXRpbC50cmFjayhyZXNwb25zZS5lcnJvclVSTE1hY3Jvcywge0VSUk9SQ09ERTogOTAxfSk7XG59O1xuXG5mdW5jdGlvbiByZXNpemVBZChwbGF5ZXIsIGFkVW5pdCwgVklFV19NT0RFKSB7XG4gIHZhciB0ZWNoID0gcGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcignLnZqcy10ZWNoJyk7XG4gIHZhciBkaW1lbnNpb24gPSBkb20uZ2V0RGltZW5zaW9uKHRlY2gpO1xuICB2YXIgTU9ERSA9IHBsYXllci5pc0Z1bGxzY3JlZW4oKSA/IFZJRVdfTU9ERS5GVUxMU0NSRUVOIDogVklFV19NT0RFLk5PUk1BTDtcbiAgYWRVbml0LnJlc2l6ZUFkKGRpbWVuc2lvbi53aWR0aCwgZGltZW5zaW9uLmhlaWdodCwgTU9ERSwgbG9nRXJyb3IpO1xufVxuXG5mdW5jdGlvbiBsb2dFcnJvcihlcnJvcikge1xuICBpZiAoZXJyb3IgJiYgY29uc29sZSAmJiBjb25zb2xlLmxvZykge1xuICAgIGNvbnNvbGUubG9nKCdFUlJPUjogJyArIGVycm9yLm1lc3NhZ2UsIGVycm9yKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFZQQUlESW50ZWdyYXRvcjsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBkb20gPSByZXF1aXJlKCcuLi8uLi91dGlscy9kb20nKTtcblxudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmVsZW1lbnQuY2xhc3NOYW1lID0gJ3Zqcy1hZHMtbGFiZWwgdmpzLWNvbnRyb2wgdmpzLWxhYmVsLWhpZGRlbic7XG5lbGVtZW50LmlubmVySFRNTCA9ICdBZHZlcnRpc2VtZW50JztcblxudmFyIEFkc0xhYmVsRmFjdG9yeSA9IGZ1bmN0aW9uKGJhc2VDb21wb25lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiogQGNvbnN0cnVjdG9yICovXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMuZWwgPSBlbGVtZW50O1xuICAgICAgYmFzZUNvbXBvbmVudC5jYWxsKHRoaXMsIHBsYXllciwgb3B0aW9ucyk7XG5cbiAgICAgIC8vIFdlIGFzeW5jaHJvbm91c2x5IHJlcG9zaXRpb24gdGhlIGFkcyBsYWJlbCBlbGVtZW50XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRUaW1lQ29tcCA9IHBsYXllci5jb250cm9sQmFyICYmKCBwbGF5ZXIuY29udHJvbEJhci5nZXRDaGlsZChcInRpbWVyQ29udHJvbHNcIikgfHwgcGxheWVyLmNvbnRyb2xCYXIuZ2V0Q2hpbGQoXCJjdXJyZW50VGltZURpc3BsYXlcIikgKTtcbiAgICAgICAgaWYoY3VycmVudFRpbWVDb21wKSB7XG4gICAgICAgICAgcGxheWVyLmNvbnRyb2xCYXIuZWwoKS5pbnNlcnRCZWZvcmUoZWxlbWVudCwgY3VycmVudFRpbWVDb21wLmVsKCkpO1xuICAgICAgICB9XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhlbGVtZW50LCAndmpzLWxhYmVsLWhpZGRlbicpO1xuICAgICAgfSwgMCk7XG4gICAgfSxcblxuICAgIGVsOiBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBBZHNMYWJlbEZhY3Rvcnk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmFzZVZpZGVvSnNDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudCgnQ29tcG9uZW50Jyk7XG5cbnZhciBBZHNMYWJlbCA9IHJlcXVpcmUoJy4vYWRzLWxhYmVsJykoYmFzZVZpZGVvSnNDb21wb25lbnQpO1xuXG52aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KCdBZHNMYWJlbCcsIHZpZGVvanMuZXh0ZW5kKGJhc2VWaWRlb0pzQ29tcG9uZW50LCBBZHNMYWJlbCkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFRoZSBjb21wb25lbnQgdGhhdCBzaG93cyBhIGJsYWNrIHNjcmVlbiB1bnRpbCB0aGUgYWRzIHBsdWdpbiBoYXMgZGVjaWRlZCBpZiBpdCBjYW4gb3IgaXQgY2FuIG5vdCBwbGF5IHRoZSBhZC5cbiAqXG4gKiBOb3RlOiBJbiBjYXNlIHlvdSB3b25kZXIgd2h5IGluc3RlYWQgb2YgdGhpcyBibGFjayBwb3N0ZXIgd2UgZG9uJ3QganVzdCBzaG93IHRoZSBzcGlubmVyIGxvYWRlci5cbiAqICAgICAgIElPUyBkZXZpY2VzIGRvIG5vdCB3b3JrIHdlbGwgd2l0aCBhbmltYXRpb25zIGFuZCB0aGUgYnJvd3NlciBjaHJhc2hlcyBmcm9tIHRpbWUgdG8gdGltZSBUaGF0IGlzIHdoeSB3ZSBjaG9zZSB0b1xuICogICAgICAgaGF2ZSBhIHNlY29uZGFyeSBibGFjayBwb3N0ZXIuXG4gKlxuICogICAgICAgSXQgYWxzbyBtYWtlcyBpdCBtdWNoIG1vcmUgZWFzaWVyIGZvciB0aGUgdXNlcnMgb2YgdGhlIHBsdWdpbiBzaW5jZSBpdCBkb2VzIG5vdCBjaGFuZ2UgdGhlIGRlZmF1bHQgYmVoYXZpb3VyIG9mIHRoZVxuICogICAgICAgc3Bpbm5lciBhbmQgdGhlIHBsYXllciB3b3JrcyB0aGUgc2FtZSB3YXkgd2l0aCBhbmQgd2l0aG91dCB0aGUgcGx1Z2luLlxuICpcbiAqIEBwYXJhbSB7dmpzLlBsYXllcnxPYmplY3R9IHBsYXllclxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRpb25zXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxudmFyIEJsYWNrUG9zdGVyRmFjdG9yeSA9IGZ1bmN0aW9uKGJhc2VDb21wb25lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiogQGNvbnN0cnVjdG9yICovXG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChwbGF5ZXIsIG9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMuZWwgPSBlbGVtZW50O1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSAndmpzLWJsYWNrLXBvc3Rlcic7XG4gICAgICBiYXNlQ29tcG9uZW50LmNhbGwodGhpcywgcGxheWVyLCBvcHRpb25zKTtcblxuICAgICAgdmFyIHBvc3RlckltZyA9IHBsYXllci5nZXRDaGlsZCgncG9zdGVySW1hZ2UnKTtcblxuICAgICAgLy9XZSBuZWVkIHRvIGRvIGl0IGFzeW5jaHJvbm91c2x5IHRvIGJlIHN1cmUgdGhhdCB0aGUgYmxhY2sgcG9zdGVyIGVsIGlzIG9uIHRoZSBkb20uXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBpZihwb3N0ZXJJbWcgJiYgcGxheWVyICYmIHBsYXllci5lbCgpKSB7XG4gICAgICAgICAgcGxheWVyLmVsKCkuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsIHBvc3RlckltZy5lbCgpKTtcbiAgICAgICAgfVxuICAgICAgfSwgMCk7XG4gICAgfSxcbiAgICBlbDogZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQmxhY2tQb3N0ZXJGYWN0b3J5OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJhc2VWaWRlb0pzQ29tcG9uZW50ID0gdmlkZW9qcy5nZXRDb21wb25lbnQoJ0NvbXBvbmVudCcpO1xuXG52YXIgQmxhY2tQb3N0ZXIgPSByZXF1aXJlKCcuL2JsYWNrLXBvc3RlcicpKGJhc2VWaWRlb0pzQ29tcG9uZW50KTtcblxudmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudCgnQmxhY2tQb3N0ZXInLCB2aWRlb2pzLmV4dGVuZChiYXNlVmlkZW9Kc0NvbXBvbmVudCwgQmxhY2tQb3N0ZXIpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFZBU1RDbGllbnQgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC9WQVNUQ2xpZW50Jyk7XG52YXIgVkFTVEVycm9yID0gcmVxdWlyZSgnLi4vYWRzL3Zhc3QvVkFTVEVycm9yJyk7XG52YXIgdmFzdFV0aWwgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC92YXN0VXRpbCcpO1xuXG52YXIgVkFTVEludGVncmF0b3IgPSByZXF1aXJlKCcuLi9hZHMvdmFzdC9WQVNUSW50ZWdyYXRvcicpO1xudmFyIFZQQUlESW50ZWdyYXRvciA9IHJlcXVpcmUoJy4uL2Fkcy92cGFpZC9WUEFJREludGVncmF0b3InKTtcblxudmFyIGFzeW5jID0gcmVxdWlyZSgnLi4vdXRpbHMvYXN5bmMnKTtcbnZhciBkb20gPSByZXF1aXJlKCcuLi91dGlscy9kb20nKTtcbnZhciBwbGF5ZXJVdGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzL3BsYXllclV0aWxzJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbHMvdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIFZBU1RQbHVnaW4ob3B0aW9ucykge1xuICB2YXIgc25hcHNob3Q7XG4gIHZhciBwbGF5ZXIgPSB0aGlzO1xuICB2YXIgdmFzdCA9IG5ldyBWQVNUQ2xpZW50KCk7XG4gIHZhciBhZHNDYW5jZWxlZCA9IGZhbHNlO1xuICB2YXIgZGVmYXVsdE9wdHMgPSB7XG4gICAgLy8gbWF4aW11bSBhbW91bnQgb2YgdGltZSBpbiBtcyB0byB3YWl0IHRvIHJlY2VpdmUgYGFkc3JlYWR5YCBmcm9tIHRoZSBhZFxuICAgIC8vIGltcGxlbWVudGF0aW9uIGFmdGVyIHBsYXkgaGFzIGJlZW4gcmVxdWVzdGVkLiBBZCBpbXBsZW1lbnRhdGlvbnMgYXJlXG4gICAgLy8gZXhwZWN0ZWQgdG8gbG9hZCBhbnkgZHluYW1pYyBsaWJyYXJpZXMgYW5kIG1ha2UgYW55IHJlcXVlc3RzIHRvIGRldGVybWluZVxuICAgIC8vIGFkIHBvbGljaWVzIGZvciBhIHZpZGVvIGR1cmluZyB0aGlzIHRpbWUuXG4gICAgdGltZW91dDogNTAwLFxuXG4gICAgLy9UT0RPOmZpbmlzaCB0aGlzIElPUyBGSVhcbiAgICAvL1doZW5ldmVyIHlvdSBwbGF5IGFuIGFkZCBvbiBJT1MsIHRoZSBuYXRpdmUgcGxheWVyIGtpY2tzIGluIGFuZCB3ZSBsb29zZSBjb250cm9sIG9mIGl0LiBPbiB2ZXJ5IGhlYXZ5IHBhZ2VzIHRoZSAncGxheScgZXZlbnRcbiAgICAvLyBNYXkgb2NjdXIgYWZ0ZXIgdGhlIHZpZGVvIGNvbnRlbnQgaGFzIGFscmVhZHkgc3RhcnRlZC4gVGhpcyBpcyB3cm9uZyBpZiB5b3Ugd2FudCB0byBwbGF5IGEgcHJlcm9sbCBhZCB0aGF0IG5lZWRzIHRvIGhhcHBlbiBiZWZvcmUgdGhlIHVzZXJcbiAgICAvLyBzdGFydHMgd2F0Y2hpbmcgdGhlIGNvbnRlbnQuIFRvIHByZXZlbnQgdGhpcyB1c2VjXG4gICAgaW9zUHJlcm9sbENhbmNlbFRpbWVvdXQ6IDIwMDAsXG5cbiAgICAvLyBtYXhpbXVuIGFtb3VudCBvZiB0aW1lIGZvciB0aGUgYWQgdG8gYWN0dWFsbHkgc3RhcnQgcGxheWluZy4gSWYgdGhpcyB0aW1lb3V0IGdldHNcbiAgICAvLyB0cmlnZ2VyZWQgdGhlIGFkcyB3aWxsIGJlIGNhbmNlbGxlZFxuICAgIGFkQ2FuY2VsVGltZW91dDogMzAwMCxcblxuICAgIC8vIEJvb2xlYW4gZmxhZyB0aGF0IGNvbmZpZ3VyZXMgdGhlIHBsYXllciB0byBwbGF5IGEgbmV3IGFkIGJlZm9yZSB0aGUgdXNlciBzZWVzIHRoZSB2aWRlbyBhZ2FpblxuICAgIC8vIHRoZSBjdXJyZW50IHZpZGVvXG4gICAgcGxheUFkQWx3YXlzOiBmYWxzZSxcblxuICAgIC8vIEZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGFkcyBieSBkZWZhdWx0LlxuICAgIGFkc0VuYWJsZWQ6IHRydWUsXG5cbiAgICAvLyBCb29sZWFuIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIHJlc2l6ZSB3aXRoIHdpbmRvdy5yZXNpemUgb3Igb3JpZW50YXRpb25jaGFuZ2VcbiAgICBhdXRvUmVzaXplOiB0cnVlLFxuXG4gICAgLy8gUGF0aCB0byB0aGUgVlBBSUQgZmxhc2ggYWQncyBsb2FkZXJcbiAgICB2cGFpZEZsYXNoTG9hZGVyUGF0aDogJy9WUEFJREZsYXNoLnN3ZidcbiAgfTtcblxuICB2YXIgc2V0dGluZ3MgPSB1dGlsaXRpZXMuZXh0ZW5kKHt9LCBkZWZhdWx0T3B0cywgb3B0aW9ucyB8fCB7fSk7XG5cbiAgaWYodXRpbGl0aWVzLmlzVW5kZWZpbmVkKHNldHRpbmdzLmFkVGFnVXJsKSAmJiB1dGlsaXRpZXMuaXNEZWZpbmVkKHNldHRpbmdzLnVybCkpe1xuICAgIHNldHRpbmdzLmFkVGFnVXJsID0gc2V0dGluZ3MudXJsO1xuICB9XG5cbiAgaWYgKHV0aWxpdGllcy5pc1N0cmluZyhzZXR0aW5ncy5hZFRhZ1VybCkpIHtcbiAgICBzZXR0aW5ncy5hZFRhZ1VybCA9IHV0aWxpdGllcy5lY2hvRm4oc2V0dGluZ3MuYWRUYWdVcmwpO1xuICB9XG5cbiAgaWYgKHV0aWxpdGllcy5pc0RlZmluZWQoc2V0dGluZ3MuYWRUYWdYTUwpICYmICF1dGlsaXRpZXMuaXNGdW5jdGlvbihzZXR0aW5ncy5hZFRhZ1hNTCkpIHtcbiAgICByZXR1cm4gdHJhY2tBZEVycm9yKG5ldyBWQVNURXJyb3IoJ29uIFZpZGVvSlMgVkFTVCBwbHVnaW4sIHRoZSBwYXNzZWQgYWRUYWdYTUwgb3B0aW9uIGRvZXMgbm90IGNvbnRhaW4gYSBmdW5jdGlvbicpKTtcbiAgfVxuXG4gIGlmICghdXRpbGl0aWVzLmlzRGVmaW5lZChzZXR0aW5ncy5hZFRhZ1VybCkgJiYgIXV0aWxpdGllcy5pc0Z1bmN0aW9uKHNldHRpbmdzLmFkVGFnWE1MKSkge1xuICAgIHJldHVybiB0cmFja0FkRXJyb3IobmV3IFZBU1RFcnJvcignb24gVmlkZW9KUyBWQVNUIHBsdWdpbiwgbWlzc2luZyBhZFRhZ1VybCBvbiBvcHRpb25zIG9iamVjdCcpKTtcbiAgfVxuXG4gIHBsYXllclV0aWxzLnByZXBhcmVGb3JBZHMocGxheWVyKTtcblxuICBpZiAoc2V0dGluZ3MucGxheUFkQWx3YXlzKSB7XG4gICAgLy8gTm8gbWF0dGVyIHdoYXQgaGFwcGVucyB3ZSBwbGF5IGEgbmV3IGFkIGJlZm9yZSB0aGUgdXNlciBzZWVzIHRoZSB2aWRlbyBhZ2Fpbi5cbiAgICBwbGF5ZXIub24oJ3Zhc3QuY29udGVudEVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5yZXNldCcpO1xuICAgICAgfSwgMCk7XG4gICAgfSk7XG4gIH1cblxuICBwbGF5ZXIub24oJ3Zhc3QuZmlyc3RQbGF5JywgdHJ5VG9QbGF5UHJlcm9sbEFkKTtcblxuICBwbGF5ZXIub24oJ3Zhc3QucmVzZXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgLy9JZiB3ZSBhcmUgcmVzZXRpbmcgdGhlIHBsdWdpbiwgd2UgZG9uJ3Qgd2FudCB0byByZXN0b3JlIHRoZSBjb250ZW50XG4gICAgc25hcHNob3QgPSBudWxsO1xuICAgIGNhbmNlbEFkcygpO1xuICB9KTtcblxuICBwbGF5ZXIudmFzdCA9IHtcbiAgICBpc0VuYWJsZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzZXR0aW5ncy5hZHNFbmFibGVkO1xuICAgIH0sXG5cbiAgICBlbmFibGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldHRpbmdzLmFkc0VuYWJsZWQgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBkaXNhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICBzZXR0aW5ncy5hZHNFbmFibGVkID0gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBwbGF5ZXIudmFzdDtcblxuICAvKioqKiBMb2NhbCBmdW5jdGlvbnMgKioqKi9cbiAgZnVuY3Rpb24gdHJ5VG9QbGF5UHJlcm9sbEFkKCkge1xuICAgIC8vV2UgcmVtb3ZlIHRoZSBwb3N0ZXIgdG8gcHJldmVudCBmbGlja2VyaW5nIHdoZW5ldmVyIHRoZSBjb250ZW50IHN0YXJ0cyBwbGF5aW5nXG4gICAgcGxheWVyVXRpbHMucmVtb3ZlTmF0aXZlUG9zdGVyKHBsYXllcik7XG5cbiAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkc0NhbmNlbCcsICd2YXN0LmFkRW5kJ10sIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbW92ZUFkVW5pdCgpO1xuICAgICAgcmVzdG9yZVZpZGVvQ29udGVudCgpO1xuICAgIH0pO1xuXG4gICAgYXN5bmMud2F0ZXJmYWxsKFtcbiAgICAgIGNoZWNrQWRzRW5hYmxlZCxcbiAgICAgIHByZXBhcmVQbGF5ZXJGb3JBZCxcbiAgICAgIHBsYXlQcmVyb2xsQWRcbiAgICBdLCBmdW5jdGlvbiAoZXJyb3IsIHJlc3BvbnNlKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdHJhY2tBZEVycm9yKGVycm9yLCByZXNwb25zZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5hZEVuZCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqKiBMb2NhbCBmdW5jdGlvbnMgKioqL1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWRVbml0KCkge1xuICAgICAgaWYgKHBsYXllci52YXN0ICYmIHBsYXllci52YXN0LmFkVW5pdCkge1xuICAgICAgICBwbGF5ZXIudmFzdC5hZFVuaXQgPSBudWxsOyAvL1dlIHJlbW92ZSB0aGUgYWRVbml0XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzdG9yZVZpZGVvQ29udGVudCgpIHtcbiAgICAgIHNldHVwQ29udGVudEV2ZW50cygpO1xuICAgICAgaWYgKHNuYXBzaG90KSB7XG4gICAgICAgIHBsYXllclV0aWxzLnJlc3RvcmVQbGF5ZXJTbmFwc2hvdChwbGF5ZXIsIHNuYXBzaG90KTtcbiAgICAgICAgc25hcHNob3QgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwQ29udGVudEV2ZW50cygpIHtcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3BsYXlpbmcnLCAndmFzdC5yZXNldCcsICd2YXN0LmZpcnN0UGxheSddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGlmIChldnQudHlwZSAhPT0gJ3BsYXlpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuY29udGVudFN0YXJ0Jyk7XG5cbiAgICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsnZW5kZWQnLCAndmFzdC5yZXNldCcsICd2YXN0LmZpcnN0UGxheSddLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgaWYgKGV2dC50eXBlID09PSAnZW5kZWQnKSB7XG4gICAgICAgICAgICBwbGF5ZXIudHJpZ2dlcigndmFzdC5jb250ZW50RW5kJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoZWNrQWRzRW5hYmxlZChuZXh0KSB7XG4gICAgICBpZiAoc2V0dGluZ3MuYWRzRW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gbmV4dChudWxsKTtcbiAgICAgIH1cbiAgICAgIG5leHQobmV3IFZBU1RFcnJvcignQWRzIGFyZSBub3QgZW5hYmxlZCcpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVwYXJlUGxheWVyRm9yQWQobmV4dCkge1xuICAgICAgaWYgKGNhblBsYXlQcmVyb2xsQWQoKSkge1xuICAgICAgICBzbmFwc2hvdCA9IHBsYXllclV0aWxzLmdldFBsYXllclNuYXBzaG90KHBsYXllcik7XG4gICAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgICAgICBhZGRTcGlubmVySWNvbigpO1xuICAgICAgICBzdGFydEFkQ2FuY2VsVGltZW91dCgpO1xuICAgICAgICBuZXh0KG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dChuZXcgVkFTVEVycm9yKCd2aWRlbyBjb250ZW50IGhhcyBiZWVuIHBsYXlpbmcgYmVmb3JlIHByZXJvbGwgYWQnKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuUGxheVByZXJvbGxBZCgpIHtcbiAgICAgIHJldHVybiAhdXRpbGl0aWVzLmlzSVBob25lKCkgfHwgcGxheWVyLmN1cnJlbnRUaW1lKCkgPD0gc2V0dGluZ3MuaW9zUHJlcm9sbENhbmNlbFRpbWVvdXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRBZENhbmNlbFRpbWVvdXQoKSB7XG4gICAgICB2YXIgYWRDYW5jZWxUaW1lb3V0SWQ7XG4gICAgICBhZHNDYW5jZWxlZCA9IGZhbHNlO1xuXG4gICAgICBhZENhbmNlbFRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0cmFja0FkRXJyb3IobmV3IFZBU1RFcnJvcigndGltZW91dCB3aGlsZSB3YWl0aW5nIGZvciB0aGUgdmlkZW8gdG8gc3RhcnQgcGxheWluZycsIDQwMikpO1xuICAgICAgfSwgc2V0dGluZ3MuYWRDYW5jZWxUaW1lb3V0KTtcblxuICAgICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZFN0YXJ0JywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIGNsZWFyQWRDYW5jZWxUaW1lb3V0KTtcblxuICAgICAgLyoqKiBsb2NhbCBmdW5jdGlvbnMgKioqL1xuICAgICAgZnVuY3Rpb24gY2xlYXJBZENhbmNlbFRpbWVvdXQoKSB7XG4gICAgICAgIGlmIChhZENhbmNlbFRpbWVvdXRJZCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChhZENhbmNlbFRpbWVvdXRJZCk7XG4gICAgICAgICAgYWRDYW5jZWxUaW1lb3V0SWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkU3Bpbm5lckljb24oKSB7XG4gICAgICBkb20uYWRkQ2xhc3MocGxheWVyLmVsKCksICd2anMtdmFzdC1hZC1sb2FkaW5nJyk7XG4gICAgICBwbGF5ZXJVdGlscy5vbmNlKHBsYXllciwgWyd2YXN0LmFkU3RhcnQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlU3Bpbm5lckljb24pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVNwaW5uZXJJY29uKCkge1xuICAgICAgLy9JTVBPUlRBTlQgTk9URTogV2UgcmVtb3ZlIHRoZSBzcGlubmVySWNvbiBhc3luY2hyb25vdXNseSB0byBnaXZlIHRpbWUgdG8gdGhlIGJyb3dzZXIgdG8gc3RhcnQgdGhlIHZpZGVvLlxuICAgICAgLy8gSWYgd2UgcmVtb3ZlIGl0IHN5bmNocm9ub3VzbHkgd2Ugc2VlIGEgZmxhc2ggb2YgdGhlIGNvbnRlbnQgdmlkZW8gYmVmb3JlIHRoZSBhZCBzdGFydHMgcGxheWluZy5cbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBkb20ucmVtb3ZlQ2xhc3MocGxheWVyLmVsKCksICd2anMtdmFzdC1hZC1sb2FkaW5nJyk7XG4gICAgICB9LCAxMDApO1xuICAgIH1cblxuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsQWRzKCkge1xuICAgIHBsYXllci50cmlnZ2VyKCd2YXN0LmFkc0NhbmNlbCcpO1xuICAgIGFkc0NhbmNlbGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlQcmVyb2xsQWQoY2FsbGJhY2spIHtcbiAgICBhc3luYy53YXRlcmZhbGwoW1xuICAgICAgZ2V0VmFzdFJlc3BvbnNlLFxuICAgICAgcGxheUFkXG4gICAgXSwgY2FsbGJhY2spO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0VmFzdFJlc3BvbnNlKGNhbGxiYWNrKSB7XG4gICAgdmFzdC5nZXRWQVNUUmVzcG9uc2Uoc2V0dGluZ3MuYWRUYWdVcmwgPyBzZXR0aW5ncy5hZFRhZ1VybCgpIDogc2V0dGluZ3MuYWRUYWdYTUwsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXlBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKSB7XG4gICAgLy9UT0RPOiBGaW5kIGEgYmV0dGVyIHdheSB0byBzdG9wIHRoZSBwbGF5LiBUaGUgJ3BsYXlQcmVyb2xsV2F0ZXJmYWxsJyBlbmRzIGluIGFuIGluY29uc2lzdGVudCBzaXR1YXRpb25cbiAgICAvL0lmIHRoZSBzdGF0ZSBpcyBub3QgJ3ByZXJvbGw/JyBpdCBtZWFucyB0aGUgYWRzIHdlcmUgY2FuY2VsZWQgdGhlcmVmb3JlLCB3ZSBicmVhayB0aGUgd2F0ZXJmYWxsXG4gICAgaWYgKGFkc0NhbmNlbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGFkSW50ZWdyYXRvciA9IGlzVlBBSUQodmFzdFJlc3BvbnNlKSA/IG5ldyBWUEFJREludGVncmF0b3IocGxheWVyLCBzZXR0aW5ncykgOiBuZXcgVkFTVEludGVncmF0b3IocGxheWVyKTtcbiAgICB2YXIgYWRGaW5pc2hlZCA9IGZhbHNlO1xuXG4gICAgcGxheWVyVXRpbHMub25jZShwbGF5ZXIsIFsndmFzdC5hZFN0YXJ0JywgJ3Zhc3QuYWRzQ2FuY2VsJ10sIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgIGlmIChldnQudHlwZSA9PT0gJ3Zhc3QuYWRTdGFydCcpIHtcbiAgICAgICAgYWRkQWRzTGFiZWwoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnXSwgcmVtb3ZlQWRzTGFiZWwpO1xuXG4gICAgaWYgKHV0aWxpdGllcy5pc0lEZXZpY2UoKSkge1xuICAgICAgcHJldmVudE1hbnVhbFByb2dyZXNzKCk7XG4gICAgfVxuXG4gICAgcGxheWVyLnZhc3QuYWRVbml0ID0gYWRJbnRlZ3JhdG9yLnBsYXlBZCh2YXN0UmVzcG9uc2UsIGNhbGxiYWNrKTtcblxuICAgIC8qKiogTG9jYWwgZnVuY3Rpb25zICoqKiovXG4gICAgZnVuY3Rpb24gYWRkQWRzTGFiZWwoKSB7XG4gICAgICBpZiAoYWRGaW5pc2hlZCB8fCBwbGF5ZXIuY29udHJvbEJhci5nZXRDaGlsZCgnQWRzTGFiZWwnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHBsYXllci5jb250cm9sQmFyLmFkZENoaWxkKCdBZHNMYWJlbCcpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUFkc0xhYmVsKCkge1xuICAgICAgcGxheWVyLmNvbnRyb2xCYXIucmVtb3ZlQ2hpbGQoJ0Fkc0xhYmVsJyk7XG4gICAgICBhZEZpbmlzaGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmV2ZW50TWFudWFsUHJvZ3Jlc3MoKSB7XG4gICAgICAvL0lPUyB2aWRlbyBjbG9jayBpcyB2ZXJ5IHVucmVsaWFibGUgYW5kIHdlIG5lZWQgYSAzIHNlY29uZHMgdGhyZXNob2xkIHRvIGVuc3VyZSB0aGF0IHRoZSB1c2VyIGZvcndhcmRlZC9yZXdvdW5kIHRoZSBhZFxuICAgICAgdmFyIFBST0dSRVNTX1RIUkVTSE9MRCA9IDM7XG4gICAgICB2YXIgcHJldmlvdXNUaW1lID0gMDtcbiAgICAgIHZhciBza2lwYWRfYXR0ZW1wdHMgPSAwO1xuXG4gICAgICBwbGF5ZXIub24oJ3RpbWV1cGRhdGUnLCBhZFRpbWV1cGRhdGVIYW5kbGVyKTtcbiAgICAgIHBsYXllclV0aWxzLm9uY2UocGxheWVyLCBbJ3Zhc3QuYWRFbmQnLCAndmFzdC5hZHNDYW5jZWwnLCAndmFzdC5hZEVycm9yJ10sIHN0b3BQcmV2ZW50TWFudWFsUHJvZ3Jlc3MpO1xuXG4gICAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgICBmdW5jdGlvbiBhZFRpbWV1cGRhdGVIYW5kbGVyKCkge1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBwbGF5ZXIuY3VycmVudFRpbWUoKTtcbiAgICAgICAgdmFyIHByb2dyZXNzRGVsdGEgPSBNYXRoLmFicyhjdXJyZW50VGltZSAtIHByZXZpb3VzVGltZSk7XG5cbiAgICAgICAgaWYgKHByb2dyZXNzRGVsdGEgPiBQUk9HUkVTU19USFJFU0hPTEQpIHtcbiAgICAgICAgICBza2lwYWRfYXR0ZW1wdHMgKz0gMTtcbiAgICAgICAgICBpZiAoc2tpcGFkX2F0dGVtcHRzID49IDIpIHtcbiAgICAgICAgICAgIHBsYXllci5wYXVzZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwbGF5ZXIuY3VycmVudFRpbWUocHJldmlvdXNUaW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmV2aW91c1RpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBzdG9wUHJldmVudE1hbnVhbFByb2dyZXNzKCkge1xuICAgICAgICBwbGF5ZXIub2ZmKCd0aW1ldXBkYXRlJywgYWRUaW1ldXBkYXRlSGFuZGxlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJhY2tBZEVycm9yKGVycm9yLCB2YXN0UmVzcG9uc2UpIHtcbiAgICBwbGF5ZXIudHJpZ2dlcih7dHlwZTogJ3Zhc3QuYWRFcnJvcicsIGVycm9yOiBlcnJvcn0pO1xuICAgIGNhbmNlbEFkcygpO1xuICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGUubG9nKSB7XG4gICAgICBjb25zb2xlLmxvZygnQUQgRVJST1I6JywgZXJyb3IubWVzc2FnZSwgZXJyb3IsIHZhc3RSZXNwb25zZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNWUEFJRCh2YXN0UmVzcG9uc2UpIHtcbiAgICB2YXIgaSwgbGVuO1xuICAgIHZhciBtZWRpYUZpbGVzID0gdmFzdFJlc3BvbnNlLm1lZGlhRmlsZXM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gbWVkaWFGaWxlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaWYgKHZhc3RVdGlsLmlzVlBBSUQobWVkaWFGaWxlc1tpXSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTsiLCIvL1NtYWxsIHN1YnNldCBvZiBhc3luY1xuXG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBhc3luYyA9IHt9O1xuXG5hc3luYy5zZXRJbW1lZGlhdGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgc2V0VGltZW91dChmbiwgMCk7XG59O1xuXG5hc3luYy5pdGVyYXRvciA9IGZ1bmN0aW9uICh0YXNrcykge1xuICB2YXIgbWFrZUNhbGxiYWNrID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgdmFyIGZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRhc2tzLmxlbmd0aCkge1xuICAgICAgICB0YXNrc1tpbmRleF0uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmbi5uZXh0KCk7XG4gICAgfTtcbiAgICBmbi5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIChpbmRleCA8IHRhc2tzLmxlbmd0aCAtIDEpID8gbWFrZUNhbGxiYWNrKGluZGV4ICsgMSkgOiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIGZuO1xuICB9O1xuICByZXR1cm4gbWFrZUNhbGxiYWNrKDApO1xufTtcblxuXG5hc3luYy53YXRlcmZhbGwgPSBmdW5jdGlvbiAodGFza3MsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24gKCkgeyB9O1xuICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KHRhc2tzKSkge1xuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IHRvIHdhdGVyZmFsbCBtdXN0IGJlIGFuIGFycmF5IG9mIGZ1bmN0aW9ucycpO1xuICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICB9XG4gIGlmICghdGFza3MubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gIH1cbiAgdmFyIHdyYXBJdGVyYXRvciA9IGZ1bmN0aW9uIChpdGVyYXRvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIGNhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgdmFyIG5leHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgYXJncy5wdXNoKHdyYXBJdGVyYXRvcihuZXh0KSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYXJncy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYy5zZXRJbW1lZGlhdGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGl0ZXJhdG9yLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICB3cmFwSXRlcmF0b3IoYXN5bmMuaXRlcmF0b3IodGFza3MpKSgpO1xufTtcblxuYXN5bmMud2hlbiA9IGZ1bmN0aW9uIChjb25kaXRpb24sIGNhbGxiYWNrKSB7XG4gIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiYXN5bmMud2hlbiBlcnJvcjogbWlzc2luZyBjYWxsYmFjayBhcmd1bWVudFwiKTtcbiAgfVxuXG4gIHZhciBpc0FsbG93ZWQgPSB1dGlsaXRpZXMuaXNGdW5jdGlvbihjb25kaXRpb24pID8gY29uZGl0aW9uIDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAhIWNvbmRpdGlvbjtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcmdzID0gdXRpbGl0aWVzLmFycmF5TGlrZU9ialRvQXJyYXkoYXJndW1lbnRzKTtcbiAgICB2YXIgbmV4dCA9IGFyZ3MucG9wKCk7XG5cbiAgICBpZiAoaXNBbGxvd2VkLmFwcGx5KG51bGwsIGFyZ3MpKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBhcmdzLnVuc2hpZnQobnVsbCk7XG4gICAgcmV0dXJuIG5leHQuYXBwbHkobnVsbCwgYXJncyk7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jO1xuXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxudmFyIGRvbSA9IHt9O1xuXG5kb20uaXNWaXNpYmxlID0gZnVuY3Rpb24gaXNWaXNpYmxlKGVsKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgcmV0dXJuIHN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nO1xufTtcblxuZG9tLmlzSGlkZGVuID0gZnVuY3Rpb24gaXNIaWRkZW4oZWwpIHtcbiAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICByZXR1cm4gc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnO1xufTtcblxuZG9tLmlzU2hvd24gPSBmdW5jdGlvbiBpc1Nob3duKGVsKSB7XG4gIHJldHVybiAhZG9tLmlzSGlkZGVuKGVsKTtcbn07XG5cbmRvbS5oaWRlID0gZnVuY3Rpb24gaGlkZShlbCkge1xuICBlbC5fX3ByZXZfc3R5bGVfZGlzcGxheV8gPSBlbC5zdHlsZS5kaXNwbGF5O1xuICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuZG9tLnNob3cgPSBmdW5jdGlvbiBzaG93KGVsKSB7XG4gIGlmIChkb20uaXNIaWRkZW4oZWwpKSB7XG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IGVsLl9fcHJldl9zdHlsZV9kaXNwbGF5XztcbiAgfVxuICBlbC5fX3ByZXZfc3R5bGVfZGlzcGxheV8gPSB1bmRlZmluZWQ7XG59O1xuXG5kb20uaGFzQ2xhc3MgPSBmdW5jdGlvbiBoYXNDbGFzcyhlbCwgY3NzQ2xhc3MpIHtcbiAgdmFyIGNsYXNzZXMsIGksIGxlbjtcblxuICBpZiAodXRpbGl0aWVzLmlzTm90RW1wdHlTdHJpbmcoY3NzQ2xhc3MpKSB7XG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjc3NDbGFzcyk7XG4gICAgfVxuXG4gICAgY2xhc3NlcyA9IHV0aWxpdGllcy5pc1N0cmluZyhlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykpID8gZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnNwbGl0KC9cXHMrLykgOiBbXTtcbiAgICBjc3NDbGFzcyA9IChjc3NDbGFzcyB8fCAnJyk7XG5cbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBjbGFzc2VzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICBpZiAoY2xhc3Nlc1tpXSA9PT0gY3NzQ2xhc3MpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmRvbS5hZGRDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY3NzQ2xhc3MpIHtcbiAgdmFyIGNsYXNzZXM7XG5cbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzKSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcbiAgICB9XG5cbiAgICBjbGFzc2VzID0gdXRpbGl0aWVzLmlzU3RyaW5nKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkgPyBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoL1xccysvKSA6IFtdO1xuICAgIGlmICh1dGlsaXRpZXMuaXNTdHJpbmcoY3NzQ2xhc3MpICYmIHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzLnJlcGxhY2UoL1xccysvLCAnJykpKSB7XG4gICAgICBjbGFzc2VzLnB1c2goY3NzQ2xhc3MpO1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGNsYXNzZXMuam9pbignICcpKTtcbiAgICB9XG4gIH1cbn07XG5cbmRvbS5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIChlbCwgY3NzQ2xhc3MpIHtcbiAgdmFyIGNsYXNzZXM7XG5cbiAgaWYgKHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKGNzc0NsYXNzKSkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QucmVtb3ZlKGNzc0NsYXNzKTtcbiAgICB9XG5cbiAgICBjbGFzc2VzID0gdXRpbGl0aWVzLmlzU3RyaW5nKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSkgPyBlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuc3BsaXQoL1xccysvKSA6IFtdO1xuICAgIHZhciBuZXdDbGFzc2VzID0gW107XG4gICAgdmFyIGksIGxlbjtcbiAgICBpZiAodXRpbGl0aWVzLmlzU3RyaW5nKGNzc0NsYXNzKSAmJiB1dGlsaXRpZXMuaXNOb3RFbXB0eVN0cmluZyhjc3NDbGFzcy5yZXBsYWNlKC9cXHMrLywgJycpKSkge1xuXG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSBjbGFzc2VzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjc3NDbGFzcyAhPT0gY2xhc3Nlc1tpXSkge1xuICAgICAgICAgIG5ld0NsYXNzZXMucHVzaChjbGFzc2VzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIG5ld0NsYXNzZXMuam9pbignICcpKTtcbiAgICB9XG4gIH1cbn07XG5cbmRvbS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcikge1xuICBpZih1dGlsaXRpZXMuaXNBcnJheShlbCkpe1xuICAgIHV0aWxpdGllcy5mb3JFYWNoKGVsLCBmdW5jdGlvbihlKSB7XG4gICAgICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlLCB0eXBlLCBoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZih1dGlsaXRpZXMuaXNBcnJheSh0eXBlKSl7XG4gICAgdXRpbGl0aWVzLmZvckVhY2godHlwZSwgZnVuY3Rpb24odCkge1xuICAgICAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZWwsIHQsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XG4gIH0gZWxzZSBpZiAoZWwuYXR0YWNoRXZlbnQpIHtcbiAgICAvLyBXQVJOSU5HISEhIHRoaXMgaXMgYSB2ZXJ5IG5haXZlIGltcGxlbWVudGF0aW9uICFcbiAgICAvLyB0aGUgZXZlbnQgb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byB0aGUgaGFuZGxlclxuICAgIC8vIHdvdWxkIG5vdCBiZSB0aGVyZSBmb3IgSUU4XG4gICAgLy8gd2Ugc2hvdWxkIHVzZSBcIndpbmRvdy5ldmVudFwiIGFuZCB0aGVuIFwiZXZlbnQuc3JjRWxlbWVudFwiXG4gICAgLy8gaW5zdGVhZCBvZiBcImV2ZW50LnRhcmdldFwiXG4gICAgZWwuYXR0YWNoRXZlbnQoXCJvblwiICsgdHlwZSwgaGFuZGxlcik7XG4gIH1cbn07XG5cbmRvbS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcikge1xuICBpZih1dGlsaXRpZXMuaXNBcnJheShlbCkpe1xuICAgIHV0aWxpdGllcy5mb3JFYWNoKGVsLCBmdW5jdGlvbihlKSB7XG4gICAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLCB0eXBlLCBoYW5kbGVyKTtcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZih1dGlsaXRpZXMuaXNBcnJheSh0eXBlKSl7XG4gICAgdXRpbGl0aWVzLmZvckVhY2godHlwZSwgZnVuY3Rpb24odCkge1xuICAgICAgZG9tLnJlbW92ZUV2ZW50TGlzdGVuZXIoZWwsIHQsIGhhbmRsZXIpO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVyLCBmYWxzZSk7XG4gIH0gZWxzZSBpZiAoZWwuZGV0YWNoRXZlbnQpIHtcbiAgICBlbC5kZXRhY2hFdmVudChcIm9uXCIgKyB0eXBlLCBoYW5kbGVyKTtcbiAgfSBlbHNlIHtcbiAgICBlbFtcIm9uXCIgKyB0eXBlXSA9IG51bGw7XG4gIH1cbn07XG5cbmRvbS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gZGlzcGF0Y2hFdmVudChlbCwgZXZlbnQpIHtcbiAgaWYgKGVsLmRpc3BhdGNoRXZlbnQpIHtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfSBlbHNlIHtcbiAgICBlbC5maXJlRXZlbnQoXCJvblwiICsgZXZlbnQuZXZlbnRUeXBlLCBldmVudCk7XG4gIH1cbn07XG5cbmRvbS5pc0Rlc2NlbmRhbnQgPSBmdW5jdGlvbiBpc0Rlc2NlbmRhbnQocGFyZW50LCBjaGlsZCkge1xuICB2YXIgbm9kZSA9IGNoaWxkLnBhcmVudE5vZGU7XG4gIHdoaWxlIChub2RlICE9PSBudWxsKSB7XG4gICAgaWYgKG5vZGUgPT09IHBhcmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZG9tLmdldFRleHRDb250ZW50ID0gZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQoZWwpe1xuICByZXR1cm4gZWwudGV4dENvbnRlbnQgfHwgZWwudGV4dDtcbn07XG5cbmRvbS5wcmVwZW5kQ2hpbGQgPSBmdW5jdGlvbiBwcmVwZW5kQ2hpbGQocGFyZW50LCBjaGlsZCkge1xuICBpZihjaGlsZC5wYXJlbnROb2RlKXtcbiAgICBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgfVxuICByZXR1cm4gcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgcGFyZW50LmZpcnN0Q2hpbGQpO1xufTtcblxuZG9tLnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSl7XG4gIGlmKG5vZGUgJiYgbm9kZS5wYXJlbnROb2RlKXtcbiAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gIH1cbn07XG5cbmRvbS5pc0RvbUVsZW1lbnQgPSBmdW5jdGlvbiBpc0RvbUVsZW1lbnQobykge1xuICByZXR1cm4gbyBpbnN0YW5jZW9mIEVsZW1lbnQ7XG59O1xuXG5kb20uY2xpY2sgPSBmdW5jdGlvbihlbCwgaGFuZGxlcikge1xuICBkb20uYWRkRXZlbnRMaXN0ZW5lcihlbCwgJ2NsaWNrJywgaGFuZGxlcik7XG59O1xuXG5kb20ub25jZSA9IGZ1bmN0aW9uKGVsLCB0eXBlLCBoYW5kbGVyKSB7XG4gIGZ1bmN0aW9uIGhhbmRsZXJXcmFwKCkge1xuICAgIGhhbmRsZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICBkb20ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlbCwgdHlwZSwgaGFuZGxlcldyYXApO1xuICB9XG5cbiAgZG9tLmFkZEV2ZW50TGlzdGVuZXIoZWwsIHR5cGUsIGhhbmRsZXJXcmFwKTtcbn07XG5cbi8vTm90ZTogdGhlcmUgaXMgbm8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGlQYWQgc28gd2UgbmVlZCBhIGZhbGxiYWNrXG5kb20uZ2V0RGltZW5zaW9uID0gZnVuY3Rpb24gZ2V0RGltZW5zaW9uKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3Q7XG5cbiAgLy9PbiBJRTkgYW5kIGJlbG93IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBkb2VzIG5vdCB3b3JrIGNvbnNpc3RlbnRseVxuICBpZighdXRpbGl0aWVzLmlzT2xkSUUoKSAmJiBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCkge1xuICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICAgIGhlaWdodDogcmVjdC5oZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICBoZWlnaHQ6IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1cmxVdGlscyA9IHJlcXVpcmUoJy4vdXJsVXRpbHMnKTtcbnZhciB1dGlsaXRpZXMgPSByZXF1aXJlKCcuL3V0aWxpdHlGdW5jdGlvbnMnKTtcblxuZnVuY3Rpb24gSHR0cFJlcXVlc3RFcnJvcihtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9ICdIdHRwUmVxdWVzdCBFcnJvcjogJyArIChtZXNzYWdlIHx8ICcnKTtcbn1cbkh0dHBSZXF1ZXN0RXJyb3IucHJvdG90eXBlID0gbmV3IEVycm9yKCk7XG5IdHRwUmVxdWVzdEVycm9yLnByb3RvdHlwZS5uYW1lID0gXCJIdHRwUmVxdWVzdCBFcnJvclwiO1xuXG5mdW5jdGlvbiBIdHRwUmVxdWVzdChjcmVhdGVYaHIpIHtcbiAgaWYgKCF1dGlsaXRpZXMuaXNGdW5jdGlvbihjcmVhdGVYaHIpKSB7XG4gICAgdGhyb3cgbmV3IEh0dHBSZXF1ZXN0RXJyb3IoJ01pc3NpbmcgWE1MSHR0cFJlcXVlc3QgZmFjdG9yeSBtZXRob2QnKTtcbiAgfVxuXG4gIHRoaXMuY3JlYXRlWGhyID0gY3JlYXRlWGhyO1xufVxuXG5IdHRwUmVxdWVzdC5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKG1ldGhvZCwgdXJsLCBjYWxsYmFjaywgb3B0aW9ucykge1xuICBzYW5pdHlDaGVjayh1cmwsIGNhbGxiYWNrLCBvcHRpb25zKTtcbiAgdmFyIHRpbWVvdXQsIHRpbWVvdXRJZDtcbiAgdmFyIHhociA9IHRoaXMuY3JlYXRlWGhyKCk7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB0aW1lb3V0ID0gdXRpbGl0aWVzLmlzTnVtYmVyKG9wdGlvbnMudGltZW91dCkgPyBvcHRpb25zLnRpbWVvdXQgOiAwO1xuXG4gIHhoci5vcGVuKG1ldGhvZCwgdXJsVXRpbHMudXJsUGFydHModXJsKS5ocmVmLCB0cnVlKTtcblxuICBpZiAob3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgc2V0SGVhZGVycyh4aHIsIG9wdGlvbnMuaGVhZGVycyk7XG4gIH1cblxuICBpZiAob3B0aW9ucy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgfVxuXG4gIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YXR1c1RleHQsIHJlc3BvbnNlLCBzdGF0dXM7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgb25seSB3YXkgdG8gZG8gYSBzZWN1cmUgcmVxdWVzdCBvbiBJRTggYW5kIElFOSBpcyB3aXRoIHRoZSBYRG9tYWluUmVxdWVzdCBvYmplY3QuIFVuZm9ydHVuYXRlbHksIG1pY3Jvc29mdCBpc1xuICAgICAqIHNvIG5pY2UgdGhhdCBkZWNpZGVkIHRoYXQgdGhlIHN0YXR1cyBwcm9wZXJ0eSBhbmQgdGhlICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIG1ldGhvZCB3aGVyZSBub3QgbmVlZGVkIHNvIHdlIGhhdmUgdG9cbiAgICAgKiBmYWtlIHRoZW0uIElmIHRoZSByZXF1ZXN0IGdldHMgZG9uZSB3aXRoIGFuIFhEb21haW5SZXF1ZXN0IGluc3RhbmNlLCB3ZSB3aWxsIGFzc3VtZSB0aGF0IHRoZXJlIGFyZSBubyBoZWFkZXJzIGFuZFxuICAgICAqIHRoZSBzdGF0dXMgd2lsbCBhbHdheXMgYmUgMjAwLiBJZiB5b3UgZG9uJ3QgbGlrZSBpdCwgRE8gTk9UIFVTRSBBTkNJRU5UIEJST1dTRVJTISEhXG4gICAgICpcbiAgICAgKiBGb3IgbW9yIGluZm8gZ28gdG86IGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvY2MyODgwNjAodj12cy44NSkuYXNweFxuICAgICAqL1xuICAgIGlmICgheGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycykge1xuICAgICAgeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICgheGhyLnN0YXR1cykge1xuICAgICAgeGhyLnN0YXR1cyA9IDIwMDtcbiAgICB9XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh0aW1lb3V0SWQpKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgIHRpbWVvdXRJZCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHQgfHwgJyc7XG5cbiAgICAvLyByZXNwb25zZVRleHQgaXMgdGhlIG9sZC1zY2hvb2wgd2F5IG9mIHJldHJpZXZpbmcgcmVzcG9uc2UgKHN1cHBvcnRlZCBieSBJRTggJiA5KVxuICAgIC8vIHJlc3BvbnNlL3Jlc3BvbnNlVHlwZSBwcm9wZXJ0aWVzIHdlcmUgaW50cm9kdWNlZCBpbiBYSFIgTGV2ZWwyIHNwZWMgKHN1cHBvcnRlZCBieSBJRTEwKVxuICAgIHJlc3BvbnNlID0gKCdyZXNwb25zZScgaW4geGhyKSA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHQ7XG5cbiAgICAvLyBub3JtYWxpemUgSUU5IGJ1ZyAoaHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTQ1MClcbiAgICBzdGF0dXMgPSB4aHIuc3RhdHVzID09PSAxMjIzID8gMjA0IDogeGhyLnN0YXR1cztcblxuICAgIGNhbGxiYWNrKFxuICAgICAgc3RhdHVzLFxuICAgICAgcmVzcG9uc2UsXG4gICAgICB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCksXG4gICAgICBzdGF0dXNUZXh0KTtcbiAgfTtcblxuICB4aHIub25lcnJvciA9IHJlcXVlc3RFcnJvcjtcbiAgeGhyLm9uYWJvcnQgPSByZXF1ZXN0RXJyb3I7XG5cbiAgeGhyLnNlbmQoKTtcblxuICBpZiAodGltZW91dCA+IDApIHtcbiAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHhociAmJiB4aHIuYWJvcnQoKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhbml0eUNoZWNrKHVybCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBpZiAoIXV0aWxpdGllcy5pc1N0cmluZyh1cmwpIHx8IHV0aWxpdGllcy5pc0VtcHR5U3RyaW5nKHVybCkpIHtcbiAgICAgIHRocm93IG5ldyBIdHRwUmVxdWVzdEVycm9yKFwiSW52YWxpZCB1cmwgJ1wiICsgdXJsICsgXCInXCIpO1xuICAgIH1cblxuICAgIGlmICghdXRpbGl0aWVzLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcihcIkludmFsaWQgaGFuZGxlciAnXCIgKyBjYWxsYmFjayArIFwiJyBmb3IgdGhlIGh0dHAgcmVxdWVzdFwiKTtcbiAgICB9XG5cbiAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZChvcHRpb25zKSAmJiAhdXRpbGl0aWVzLmlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICB0aHJvdyBuZXcgSHR0cFJlcXVlc3RFcnJvcihcIkludmFsaWQgb3B0aW9ucyBtYXAgJ1wiICsgb3B0aW9ucyArIFwiJ1wiKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzZXRIZWFkZXJzKHhociwgaGVhZGVycykge1xuICAgIHV0aWxpdGllcy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICBpZiAodXRpbGl0aWVzLmlzRGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXF1ZXN0RXJyb3IoKSB7XG4gICAgY2FsbGJhY2soLTEsIG51bGwsIG51bGwsICcnKTtcbiAgfVxufTtcblxuSHR0cFJlcXVlc3QucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIHRoaXMucnVuKCdHRVQnLCB1cmwsIHByb2Nlc3NSZXNwb25zZSwgb3B0aW9ucyk7XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc1Jlc3BvbnNlKHN0YXR1cywgcmVzcG9uc2UsIGhlYWRlcnNTdHJpbmcsIHN0YXR1c1RleHQpIHtcbiAgICBpZiAoaXNTdWNjZXNzKHN0YXR1cykpIHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlcnNTdHJpbmcsIHN0YXR1c1RleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhuZXcgSHR0cFJlcXVlc3RFcnJvcihzdGF0dXNUZXh0KSwgcmVzcG9uc2UsIHN0YXR1cywgaGVhZGVyc1N0cmluZywgc3RhdHVzVGV4dCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTdWNjZXNzKHN0YXR1cykge1xuICAgIHJldHVybiAyMDAgPD0gc3RhdHVzICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZnVuY3Rpb24gY3JlYXRlWGhyKCkge1xuICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIGlmICghKFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyKSkge1xuICAgIC8vIFhEb21haW5SZXF1ZXN0IGZvciBJRS5cbiAgICB4aHIgPSBuZXcgWERvbWFpblJlcXVlc3QoKTtcbiAgfVxuICByZXR1cm4geGhyO1xufVxuXG52YXIgaHR0cCA9IG5ldyBIdHRwUmVxdWVzdChjcmVhdGVYaHIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaHR0cDogaHR0cCxcbiAgSHR0cFJlcXVlc3Q6IEh0dHBSZXF1ZXN0LFxuICBIdHRwUmVxdWVzdEVycm9yOiBIdHRwUmVxdWVzdEVycm9yLFxuICBjcmVhdGVYaHI6IGNyZWF0ZVhoclxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGRvbSA9IHJlcXVpcmUoJy4vZG9tJyk7XG52YXIgdXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXR5RnVuY3Rpb25zJyk7XG5cbnZhciBwbGF5ZXJVdGlscyA9IHt9O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY2FwdHVyZXMgdGhlIHBvcnRpb25zIG9mIHBsYXllciBzdGF0ZSByZWxldmFudCB0b1xuICogdmlkZW8gcGxheWJhY2suIFRoZSByZXN1bHQgb2YgdGhpcyBmdW5jdGlvbiBjYW4gYmUgcGFzc2VkIHRvXG4gKiByZXN0b3JlUGxheWVyU25hcHNob3Qgd2l0aCBhIHBsYXllciB0byByZXR1cm4gdGhlIHBsYXllciB0byB0aGUgc3RhdGUgaXRcbiAqIHdhcyBpbiB3aGVuIHRoaXMgZnVuY3Rpb24gd2FzIGludm9rZWQuXG4gKiBAcGFyYW0ge29iamVjdH0gcGxheWVyIFRoZSB2aWRlb2pzIHBsYXllciBvYmplY3RcbiAqL1xucGxheWVyVXRpbHMuZ2V0UGxheWVyU25hcHNob3QgPSBmdW5jdGlvbiBnZXRQbGF5ZXJTbmFwc2hvdChwbGF5ZXIpIHtcbiAgdmFyIHRlY2ggPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcblxuICB2YXIgc25hcHNob3QgPSB7XG4gICAgZW5kZWQ6IHBsYXllci5lbmRlZCgpLFxuICAgIHNyYzogcGxheWVyLmN1cnJlbnRTcmMoKSxcbiAgICBjdXJyZW50VGltZTogcGxheWVyLmN1cnJlbnRUaW1lKCksXG4gICAgdHlwZTogcGxheWVyLmN1cnJlbnRUeXBlKCksXG4gICAgcGxheWluZzogIXBsYXllci5wYXVzZWQoKSxcbiAgICBzdXBwcmVzc2VkVHJhY2tzOiBnZXRTdXBwcmVzc2VkVHJhY2tzKHBsYXllcilcbiAgfTtcblxuICBpZiAodGVjaCkge1xuICAgIHNuYXBzaG90Lm5hdGl2ZVBvc3RlciA9IHRlY2gucG9zdGVyO1xuICAgIHNuYXBzaG90LnN0eWxlID0gdGVjaC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gIH1cbiAgcmV0dXJuIHNuYXBzaG90O1xuXG4gIC8qKioqIExvY2FsIEZ1bmN0aW9ucyAqKioqL1xuICBmdW5jdGlvbiBnZXRTdXBwcmVzc2VkVHJhY2tzKHBsYXllcikge1xuICAgIHZhciB0cmFja3MgPSBwbGF5ZXIucmVtb3RlVGV4dFRyYWNrcyA/IHBsYXllci5yZW1vdGVUZXh0VHJhY2tzKCkgOiBbXTtcblxuICAgIGlmICh0cmFja3MgJiYgdXRpbGl0aWVzLmlzQXJyYXkodHJhY2tzLnRyYWNrc18pKSB7XG4gICAgICB0cmFja3MgPSB0cmFja3MudHJhY2tzXztcbiAgICB9XG5cbiAgICBpZiAoIXV0aWxpdGllcy5pc0FycmF5KHRyYWNrcykpIHtcbiAgICAgIHRyYWNrcyA9IFtdO1xuICAgIH1cblxuICAgIHZhciBzdXBwcmVzc2VkVHJhY2tzID0gW107XG4gICAgdHJhY2tzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNrKSB7XG4gICAgICBzdXBwcmVzc2VkVHJhY2tzLnB1c2goe1xuICAgICAgICB0cmFjazogdHJhY2ssXG4gICAgICAgIG1vZGU6IHRyYWNrLm1vZGVcbiAgICAgIH0pO1xuICAgICAgdHJhY2subW9kZSA9ICdkaXNhYmxlZCc7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwcHJlc3NlZFRyYWNrcztcbiAgfVxufTtcblxuLyoqXG4gKiBBdHRlbXB0cyB0byBtb2RpZnkgdGhlIHNwZWNpZmllZCBwbGF5ZXIgc28gdGhhdCBpdHMgc3RhdGUgaXMgZXF1aXZhbGVudCB0b1xuICogdGhlIHN0YXRlIG9mIHRoZSBzbmFwc2hvdC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBzbmFwc2hvdCAtIHRoZSBwbGF5ZXIgc3RhdGUgdG8gYXBwbHlcbiAqL1xucGxheWVyVXRpbHMucmVzdG9yZVBsYXllclNuYXBzaG90ID0gZnVuY3Rpb24gcmVzdG9yZVBsYXllclNuYXBzaG90KHBsYXllciwgc25hcHNob3QpIHtcbiAgdmFyIHRlY2ggPSBwbGF5ZXIuZWwoKS5xdWVyeVNlbGVjdG9yKCcudmpzLXRlY2gnKTtcbiAgdmFyIGF0dGVtcHRzID0gMjA7IC8vIHRoZSBudW1iZXIgb2YgcmVtYWluaW5nIGF0dGVtcHRzIHRvIHJlc3RvcmUgdGhlIHNuYXBzaG90XG5cbiAgaWYgKHNuYXBzaG90Lm5hdGl2ZVBvc3Rlcikge1xuICAgIHRlY2gucG9zdGVyID0gc25hcHNob3QubmF0aXZlUG9zdGVyO1xuICB9XG5cbiAgaWYgKCdzdHlsZScgaW4gc25hcHNob3QpIHtcbiAgICAvLyBvdmVyd3JpdGUgYWxsIGNzcyBzdHlsZSBwcm9wZXJ0aWVzIHRvIHJlc3RvcmUgc3RhdGUgcHJlY2lzZWx5XG4gICAgdGVjaC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgc25hcHNob3Quc3R5bGUgfHwgJycpO1xuICB9XG5cbiAgaWYgKGhhc1NyY0NoYW5nZWQocGxheWVyLCBzbmFwc2hvdCkpIHtcblxuICAgIC8vIG9uIGlvczcsIGZpZGRsaW5nIHdpdGggdGV4dFRyYWNrcyB0b28gZWFybHkgd2lsbCBjYXVzZSBzYWZhcmkgdG8gY3Jhc2hcbiAgICBwbGF5ZXIub25lKCdjb250ZW50bG9hZGVkbWV0YWRhdGEnLCByZXN0b3JlVHJhY2tzKTtcblxuICAgIHBsYXllci5vbmUoJ2NhbnBsYXknLCB0cnlUb1Jlc3VtZSk7XG4gICAgZW5zdXJlQ2FucGxheUV2dEdldHNGaXJlZCgpO1xuXG4gICAgLy8gaWYgdGhlIHNyYyBjaGFuZ2VkIGZvciBhZCBwbGF5YmFjaywgcmVzZXQgaXRcbiAgICBwbGF5ZXIuc3JjKHtzcmM6IHNuYXBzaG90LnNyYywgdHlwZTogc25hcHNob3QudHlwZX0pO1xuXG4gICAgLy8gc2FmYXJpIHJlcXVpcmVzIGEgY2FsbCB0byBgbG9hZGAgdG8gcGljayB1cCBhIGNoYW5nZWQgc291cmNlXG4gICAgcGxheWVyLmxvYWQoKTtcblxuICB9IGVsc2Uge1xuICAgIHJlc3RvcmVUcmFja3MoKTtcblxuICAgIGlmIChzbmFwc2hvdC5wbGF5aW5nKSB7XG4gICAgICBwbGF5ZXIucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cblxuICAvKipcbiAgICogU29tZXRpbWVzIGZpcmVmb3ggZG9lcyBub3QgdHJpZ2dlciB0aGUgJ2NhbnBsYXknIGV2dC5cbiAgICogVGhpcyBjb2RlIGVuc3VyZSB0aGF0IGl0IGFsd2F5cyBnZXRzIHRyaWdnZXJlZCB0cmlnZ2VyZWQuXG4gICAqL1xuICBmdW5jdGlvbiBlbnN1cmVDYW5wbGF5RXZ0R2V0c0ZpcmVkKCkge1xuICAgIHZhciB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgcGxheWVyLnRyaWdnZXIoJ2NhbnBsYXknKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHBsYXllci5vbmUoJ2NhbnBsYXknLCBmdW5jdGlvbigpe1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHBsYXllciBuZWVkcyB0byBiZSByZXN0b3JlZCB0byBpdHMgc3RhdGVcbiAgICogYmVmb3JlIGFkIHBsYXliYWNrIGJlZ2FuLiBXaXRoIGEgY3VzdG9tIGFkIGRpc3BsYXkgb3IgYnVybmVkLWluXG4gICAqIGFkcywgdGhlIGNvbnRlbnQgcGxheWVyIHN0YXRlIGhhc24ndCBiZWVuIG1vZGlmaWVkIGFuZCBzbyBub1xuICAgKiByZXN0b3JhdGlvbiBpcyByZXF1aXJlZFxuICAgKi9cbiAgZnVuY3Rpb24gaGFzU3JjQ2hhbmdlZChwbGF5ZXIsIHNuYXBzaG90KSB7XG4gICAgaWYgKHBsYXllci5zcmMoKSkge1xuICAgICAgcmV0dXJuIHBsYXllci5zcmMoKSAhPT0gc25hcHNob3Quc3JjO1xuICAgIH1cbiAgICAvLyB0aGUgcGxheWVyIHdhcyBjb25maWd1cmVkIHRocm91Z2ggc291cmNlIGVsZW1lbnQgY2hpbGRyZW5cbiAgICByZXR1cm4gcGxheWVyLmN1cnJlbnRTcmMoKSAhPT0gc25hcHNob3Quc3JjO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdG9yZVRyYWNrcygpIHtcbiAgICB2YXIgc3VwcHJlc3NlZFRyYWNrcyA9IHNuYXBzaG90LnN1cHByZXNzZWRUcmFja3M7XG4gICAgc3VwcHJlc3NlZFRyYWNrcy5mb3JFYWNoKGZ1bmN0aW9uICh0cmFja1NuYXBzaG90KSB7XG4gICAgICB0cmFja1NuYXBzaG90LnRyYWNrLm1vZGUgPSB0cmFja1NuYXBzaG90Lm1vZGU7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lIGlmIHRoZSB2aWRlbyBlbGVtZW50IGhhcyBsb2FkZWQgZW5vdWdoIG9mIHRoZSBzbmFwc2hvdCBzb3VyY2VcbiAgICogdG8gYmUgcmVhZHkgdG8gYXBwbHkgdGhlIHJlc3Qgb2YgdGhlIHN0YXRlXG4gICAqL1xuICBmdW5jdGlvbiB0cnlUb1Jlc3VtZSgpIHtcbiAgICBpZiAocGxheWVyVXRpbHMuaXNSZWFkeVRvUmVzdW1lKHRlY2gpKSB7XG4gICAgICAvLyBpZiBzb21lIHBlcmlvZCBvZiB0aGUgdmlkZW8gaXMgc2Vla2FibGUsIHJlc3VtZSBwbGF5YmFja1xuICAgICAgcmV0dXJuIHJlc3VtZSgpO1xuICAgIH1cblxuICAgIC8vIGRlbGF5IGEgYml0IGFuZCB0aGVuIGNoZWNrIGFnYWluIHVubGVzcyB3ZSdyZSBvdXQgb2YgYXR0ZW1wdHNcbiAgICBpZiAoYXR0ZW1wdHMtLSkge1xuICAgICAgc2V0VGltZW91dCh0cnlUb1Jlc3VtZSwgNTApO1xuICAgIH0gZWxzZSB7XG4gICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJlc3VtZSgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgdmlkZW9qcy5sb2cud2FybignRmFpbGVkIHRvIHJlc3VtZSB0aGUgY29udGVudCBhZnRlciBhbiBhZHZlcnRpc2VtZW50JywgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pKCk7XG4gICAgfVxuXG5cbiAgICAvKioqIExvY2FsIGZ1bmN0aW9ucyAqKiovXG4gICAgZnVuY3Rpb24gcmVzdW1lKCkge1xuICAgICAgcGxheWVyLmN1cnJlbnRUaW1lKHNuYXBzaG90LmN1cnJlbnRUaW1lKTtcblxuICAgICAgaWYgKHNuYXBzaG90LnBsYXlpbmcpIHtcbiAgICAgICAgcGxheWVyLnBsYXkoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufTtcblxucGxheWVyVXRpbHMuaXNSZWFkeVRvUmVzdW1lID0gZnVuY3Rpb24gKHRlY2gpIHtcbiAgaWYgKHRlY2gucmVhZHlTdGF0ZSA+IDEpIHtcbiAgICAvLyBzb21lIGJyb3dzZXJzIGFuZCBtZWRpYSBhcmVuJ3QgXCJzZWVrYWJsZVwiLlxuICAgIC8vIHJlYWR5U3RhdGUgZ3JlYXRlciB0aGFuIDEgYWxsb3dzIGZvciBzZWVraW5nIHdpdGhvdXQgZXhjZXB0aW9uc1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHRlY2guc2Vla2FibGUgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIGlmIHRoZSB0ZWNoIGRvZXNuJ3QgZXhwb3NlIHRoZSBzZWVrYWJsZSB0aW1lIHJhbmdlcywgdHJ5IHRvXG4gICAgLy8gcmVzdW1lIHBsYXliYWNrIGltbWVkaWF0ZWx5XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodGVjaC5zZWVrYWJsZS5sZW5ndGggPiAwKSB7XG4gICAgLy8gaWYgc29tZSBwZXJpb2Qgb2YgdGhlIHZpZGVvIGlzIHNlZWthYmxlLCByZXN1bWUgcGxheWJhY2tcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBwcmVwYXJlcyB0aGUgcGxheWVyIHRvIGRpc3BsYXkgYWRzLlxuICogQWRkaW5nIGNvbnZlbmllbmNlIGV2ZW50cyBsaWtlIHRoZSAndmFzdC5maXJzUGxheScgdGhhdCBnZXRzIGZpcmVkIHdoZW4gdGhlIHZpZGVvIGlzIGZpcnN0IHBsYXllZFxuICogYW5kIGFkcyB0aGUgYmxhY2tQb3N0ZXIgdG8gdGhlIHBsYXllciB0byBwcmV2ZW50IGNvbnRlbnQgZnJvbSBiZWluZyBkaXNwbGF5ZWQgYmVmb3JlIHRoZSBwcmVyb2xsIGFkLlxuICpcbiAqIEBwYXJhbSBwbGF5ZXJcbiAqL1xucGxheWVyVXRpbHMucHJlcGFyZUZvckFkcyA9IGZ1bmN0aW9uIChwbGF5ZXIpIHtcbiAgdmFyIGJsYWNrUG9zdGVyID0gcGxheWVyLmFkZENoaWxkKCdibGFja1Bvc3RlcicpO1xuICB2YXIgX2ZpcnN0UGxheSA9IHRydWU7XG4gIHZhciB2b2x1bWVTbmFwc2hvdDtcblxuXG4gIG1vbmtleVBhdGNoUGxheWVyQXBpKCk7XG5cbiAgcGxheWVyLm9uKCdwbGF5JywgdHJ5VG9UcmlnZ2VyRmlyc3RQbGF5KTtcbiAgcGxheWVyLm9uKCd2YXN0LnJlc2V0JywgcmVzZXRGaXJzdFBsYXkpOy8vRXZlcnkgdGltZSB3ZSBjaGFuZ2UgdGhlIHNvdXJjZXMgd2UgcmVzZXQgdGhlIGZpcnN0IHBsYXkuXG4gIHBsYXllci5vbigndmFzdC5maXJzdFBsYXknLCByZXN0b3JlQ29udGVudFZvbHVtZSk7XG4gIHBsYXllci5vbignZXJyb3InLCBoaWRlQmxhY2tQb3N0ZXIpOy8vSWYgdGhlcmUgaXMgYW4gZXJyb3IgaW4gdGhlIHBsYXllciB3ZSByZW1vdmUgdGhlIGJsYWNrcG9zdGVyIHRvIHNob3cgdGhlIGVyciBtc2dcbiAgcGxheWVyLm9uKCd2YXN0LmFkU3RhcnQnLCBoaWRlQmxhY2tQb3N0ZXIpO1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRzQ2FuY2VsJywgaGlkZUJsYWNrUG9zdGVyKTtcbiAgcGxheWVyLm9uKCd2YXN0LmFkRXJyb3InLCBoaWRlQmxhY2tQb3N0ZXIpO1xuICBwbGF5ZXIub24oJ3Zhc3QuYWRTdGFydCcsIGFkZFN0eWxlcyk7XG4gIHBsYXllci5vbigndmFzdC5hZEVuZCcsIHJlbW92ZVN0eWxlcyk7XG4gIHBsYXllci5vbigndmFzdC5hZHNDYW5jZWwnLCByZW1vdmVTdHlsZXMpO1xuXG4gIC8qKiogTG9jYWwgRnVuY3Rpb25zICoqKi9cblxuICAvKipcbiAgIFdoYXQgdGhpcyBmdW5jdGlvbiBkb2VzIGlzIHVnbHkgYW5kIGhvcnJpYmxlIGFuZCBJIHNob3VsZCB0aGluayB0d2ljZSBiZWZvcmUgY2FsbGluZyBteXNlbGYgYSBnb29kIGRldmVsb3Blci4gV2l0aCB0aGF0IHNhaWQsXG4gICBpdCBpcyB0aGUgYmVzdCBzb2x1dGlvbiBJIGNvdWxkIGZpbmQgdG8gbXV0ZSB0aGUgdmlkZW8gdW50aWwgdGhlICdwbGF5JyBldmVudCBoYXBwZW5zIChvbiBtb2JpbGUgZGV2aWNlcykgYW5kIHRoZSBwbHVnaW4gY2FuIGRlY2lkZSB3aGV0aGVyXG4gICB0byBwbGF5IHRoZSBhZCBvciBub3QuXG5cbiAgIFdlIGFsc28gbmVlZCB0aGlzIG1vbmtleXBhdGNoIHRvIGJlIGFibGUgdG8gcGF1c2UgYW5kIHJlc3VtZSBhbiBhZCB1c2luZyB0aGUgcGxheWVyJ3MgQVBJXG5cbiAgIElmIHlvdSBoYXZlIGEgYmV0dGVyIHNvbHV0aW9uIHBsZWFzZSBkbyB0ZWxsIG1lLlxuICAgKi9cbiAgZnVuY3Rpb24gbW9ua2V5UGF0Y2hQbGF5ZXJBcGkoKSB7XG5cbiAgICAvKipcbiAgICAgKiBNb25rZXkgcGF0Y2ggbmVlZGVkIHRvIGhhbmRsZSBmaXJzdFBsYXkgYW5kIHJlc3VtZSBvZiBwbGF5aW5nIGFkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxPcmlnUGxheSBuZWNlc3NhcnkgZmxhZyB0byBwcmV2ZW50IGluZmluaXRlIGxvb3Agd2hlbiB5b3UgYXJlIHJlc3RvcmluZyBhIFZBU1QgYWQuXG4gICAgICogQHJldHVybnMge3BsYXllcn1cbiAgICAgKi9cbiAgICB2YXIgb3JpZ1BsYXkgPSBwbGF5ZXIucGxheTtcbiAgICBwbGF5ZXIucGxheSA9IGZ1bmN0aW9uIChjYWxsT3JpZ1BsYXkpIHtcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgICAgaWYgKGlzRmlyc3RQbGF5KCkpIHtcbiAgICAgICAgZmlyc3RQbGF5KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bWUoY2FsbE9yaWdQbGF5KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIC8qKiogbG9jYWwgZnVuY3Rpb25zICoqKi9cbiAgICAgIGZ1bmN0aW9uIGZpcnN0UGxheSgpIHtcbiAgICAgICAgaWYgKCF1dGlsaXRpZXMuaXNJUGhvbmUoKSkge1xuICAgICAgICAgIHZvbHVtZVNuYXBzaG90ID0gc2F2ZVZvbHVtZVNuYXBzaG90KCk7XG4gICAgICAgICAgcGxheWVyLm11dGVkKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgb3JpZ1BsYXkuYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gcmVzdW1lKGNhbGxPcmlnUGxheSkge1xuICAgICAgICBpZiAoaXNBZFBsYXlpbmcoKSAmJiAhY2FsbE9yaWdQbGF5KSB7XG4gICAgICAgICAgcGxheWVyLnZhc3QuYWRVbml0LnJlc3VtZUFkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3JpZ1BsYXkuYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAqIE5lZWRlZCBtb25rZXkgcGF0Y2ggdG8gaGFuZGxlIHBhdXNlIG9mIHBsYXlpbmcgYWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbE9yaWdQbGF5IG5lY2Vzc2FyeSBmbGFnIHRvIHByZXZlbnQgaW5maW5pdGUgbG9vcCB3aGVuIHlvdSBhcmUgcGF1c2luZyBhIFZBU1QgYWQuXG4gICAgICogQHJldHVybnMge3BsYXllcn1cbiAgICAgKi9cbiAgICB2YXIgb3JpZ1BhdXNlID0gcGxheWVyLnBhdXNlO1xuICAgIHBsYXllci5wYXVzZSA9IGZ1bmN0aW9uIChjYWxsT3JpZ1BhdXNlKSB7XG4gICAgICBpZiAoaXNBZFBsYXlpbmcoKSAmJiAhY2FsbE9yaWdQYXVzZSkge1xuICAgICAgICBwbGF5ZXIudmFzdC5hZFVuaXQucGF1c2VBZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3JpZ1BhdXNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgKiBOZWVkZWQgbW9ua2V5IHBhdGNoIHRvIGhhbmRsZSBwYXVzZWQgc3RhdGUgb2YgdGhlIHBsYXllciB3aGVuIGFkcyBhcmUgcGxheWluZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsT3JpZ1BsYXkgbmVjZXNzYXJ5IGZsYWcgdG8gcHJldmVudCBpbmZpbml0ZSBsb29wIHdoZW4geW91IGFyZSBwYXVzaW5nIGEgVkFTVCBhZC5cbiAgICAgKiBAcmV0dXJucyB7cGxheWVyfVxuICAgICAqL1xuICAgIHZhciBvcmlnUGF1c2VkID0gcGxheWVyLnBhdXNlZDtcbiAgICBwbGF5ZXIucGF1c2VkID0gZnVuY3Rpb24gKGNhbGxPcmlnUGF1c2VkKSB7XG4gICAgICBpZiAoaXNBZFBsYXlpbmcoKSAmJiAhY2FsbE9yaWdQYXVzZWQpIHtcbiAgICAgICAgcmV0dXJuIHBsYXllci52YXN0LmFkVW5pdC5pc1BhdXNlZCgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9yaWdQYXVzZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaXNBZFBsYXlpbmcoKSB7XG4gICAgcmV0dXJuIHBsYXllci52YXN0ICYmIHBsYXllci52YXN0LmFkVW5pdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeVRvVHJpZ2dlckZpcnN0UGxheSgpIHtcbiAgICBpZiAoaXNGaXJzdFBsYXkoKSkge1xuICAgICAgX2ZpcnN0UGxheSA9IGZhbHNlO1xuICAgICAgcGxheWVyLnRyaWdnZXIoJ3Zhc3QuZmlyc3RQbGF5Jyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRGaXJzdFBsYXkoKSB7XG4gICAgX2ZpcnN0UGxheSA9IHRydWU7XG4gICAgYmxhY2tQb3N0ZXIuc2hvdygpO1xuICAgIHJlc3RvcmVDb250ZW50Vm9sdW1lKCk7XG4gIH1cblxuICBmdW5jdGlvbiBpc0ZpcnN0UGxheSgpIHtcbiAgICByZXR1cm4gX2ZpcnN0UGxheTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNhdmVWb2x1bWVTbmFwc2hvdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbXV0ZWQ6IHBsYXllci5tdXRlZCgpLFxuICAgICAgdm9sdW1lOiBwbGF5ZXIudm9sdW1lKClcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzdG9yZUNvbnRlbnRWb2x1bWUoKSB7XG4gICAgaWYgKHZvbHVtZVNuYXBzaG90KSB7XG4gICAgICBwbGF5ZXIuY3VycmVudFRpbWUoMCk7XG4gICAgICByZXN0b3JlVm9sdW1lU25hcHNob3Qodm9sdW1lU25hcHNob3QpO1xuICAgICAgdm9sdW1lU25hcHNob3QgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc3RvcmVWb2x1bWVTbmFwc2hvdChzbmFwc2hvdCkge1xuICAgIGlmICh1dGlsaXRpZXMuaXNPYmplY3Qoc25hcHNob3QpKSB7XG4gICAgICBwbGF5ZXIudm9sdW1lKHNuYXBzaG90LnZvbHVtZSk7XG4gICAgICBwbGF5ZXIubXV0ZWQoc25hcHNob3QubXV0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVCbGFja1Bvc3RlcigpIHtcbiAgICBpZiAoIWRvbS5oYXNDbGFzcyhibGFja1Bvc3Rlci5lbCgpLCAndmpzLWhpZGRlbicpKSB7XG4gICAgICBibGFja1Bvc3Rlci5oaWRlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkU3R5bGVzKCkge1xuICAgIGRvbS5hZGRDbGFzcyhwbGF5ZXIuZWwoKSwgJ3Zqcy1hZC1wbGF5aW5nJyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVTdHlsZXMoKSB7XG4gICAgZG9tLnJlbW92ZUNsYXNzKHBsYXllci5lbCgpLCAndmpzLWFkLXBsYXlpbmcnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIHBvc3RlciBhdHRyaWJ1dGUgZnJvbSB0aGUgdmlkZW8gZWxlbWVudCB0ZWNoLCBpZiBwcmVzZW50LiBXaGVuXG4gKiByZXVzaW5nIGEgdmlkZW8gZWxlbWVudCBmb3IgbXVsdGlwbGUgdmlkZW9zLCB0aGUgcG9zdGVyIGltYWdlIHdpbGwgYnJpZWZseVxuICogcmVhcHBlYXIgd2hpbGUgdGhlIG5ldyBzb3VyY2UgbG9hZHMuIFJlbW92aW5nIHRoZSBhdHRyaWJ1dGUgYWhlYWQgb2YgdGltZVxuICogcHJldmVudHMgdGhlIHBvc3RlciBmcm9tIHNob3dpbmcgdXAgYmV0d2VlbiB2aWRlb3MuXG4gKiBAcGFyYW0ge29iamVjdH0gcGxheWVyIFRoZSB2aWRlb2pzIHBsYXllciBvYmplY3RcbiAqL1xucGxheWVyVXRpbHMucmVtb3ZlTmF0aXZlUG9zdGVyID0gZnVuY3Rpb24gKHBsYXllcikge1xuICB2YXIgdGVjaCA9IHBsYXllci5lbCgpLnF1ZXJ5U2VsZWN0b3IoJy52anMtdGVjaCcpO1xuICBpZiAodGVjaCkge1xuICAgIHRlY2gucmVtb3ZlQXR0cmlidXRlKCdwb3N0ZXInKTtcbiAgfVxufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gbGlzdGVuIHRvIG1hbnkgZXZlbnRzIHVudGlsIG9uZSBvZiB0aGVtIGdldHMgZmlyZWQsIHRoZW4gd2VcbiAqIGV4ZWN1dGUgdGhlIGhhbmRsZXIgYW5kIHVuc3Vic2NyaWJlIGFsbCB0aGUgZXZlbnQgbGlzdGVuZXJzO1xuICpcbiAqIEBwYXJhbSBwbGF5ZXIgc3BlY2lmaWMgcGxheWVyIGZyb20gd2hlcmUgdG8gbGlzdGVuIGZvciB0aGUgZXZlbnRzXG4gKiBAcGFyYW0gZXZlbnRzIGFycmF5IG9mIGV2ZW50c1xuICogQHBhcmFtIGhhbmRsZXIgZnVuY3Rpb24gdG8gZXhlY3V0ZSBvbmNlIG9uZSBvZiB0aGUgZXZlbnRzIGZpcmVzXG4gKi9cbnBsYXllclV0aWxzLm9uY2UgPSBmdW5jdGlvbiBvbmNlKHBsYXllciwgZXZlbnRzLCBoYW5kbGVyKSB7XG4gIGZ1bmN0aW9uIGxpc3RlbmVyKCkge1xuICAgIGhhbmRsZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcblxuICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcGxheWVyLm9mZihldmVudCwgbGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcGxheWVyLm9uKGV2ZW50LCBsaXN0ZW5lcik7XG4gIH0pO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXllclV0aWxzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG4vKipcbiAqXG4gKiBJTVBPUlRBTlQgTk9URTogVGhpcyBmdW5jdGlvbiBjb21lcyBmcm9tIGFuZ3VsYXJKcyBhbmQgd2FzIG9yaWdpbmFsbHkgY2FsbGVkIHVybFJlc29sdmVcbiAqICAgICAgICAgICAgICAgICB5b3UgY2FuIHRha2UgYSBsb29rIGF0IHRoZSBvcmlnaW5hbCBjb2RlIGhlcmUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iL21hc3Rlci9zcmMvbmcvdXJsVXRpbHMuanNcbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBOb3RlcyBmb3Igbm9uLUlFIGJyb3dzZXJzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBc3NpZ25pbmcgYSBVUkwgdG8gdGhlIGhyZWYgcHJvcGVydHkgb2YgYW4gYW5jaG9yIERPTSBub2RlLCBldmVuIG9uZSBhdHRhY2hlZCB0byB0aGUgRE9NLFxuICogcmVzdWx0cyBib3RoIGluIHRoZSBub3JtYWxpemluZyBhbmQgcGFyc2luZyBvZiB0aGUgVVJMLiAgTm9ybWFsaXppbmcgbWVhbnMgdGhhdCBhIHJlbGF0aXZlXG4gKiBVUkwgd2lsbCBiZSByZXNvbHZlZCBpbnRvIGFuIGFic29sdXRlIFVSTCBpbiB0aGUgY29udGV4dCBvZiB0aGUgYXBwbGljYXRpb24gZG9jdW1lbnQuXG4gKiBQYXJzaW5nIG1lYW5zIHRoYXQgdGhlIGFuY2hvciBub2RlJ3MgaG9zdCwgaG9zdG5hbWUsIHByb3RvY29sLCBwb3J0LCBwYXRobmFtZSBhbmQgcmVsYXRlZFxuICogcHJvcGVydGllcyBhcmUgYWxsIHBvcHVsYXRlZCB0byByZWZsZWN0IHRoZSBub3JtYWxpemVkIFVSTC4gIFRoaXMgYXBwcm9hY2ggaGFzIHdpZGVcbiAqIGNvbXBhdGliaWxpdHkgLSBTYWZhcmkgMSssIE1vemlsbGEgMSssIE9wZXJhIDcrLGUgZXRjLiAgU2VlXG4gKiBodHRwOi8vd3d3LmFwdGFuYS5jb20vcmVmZXJlbmNlL2h0bWwvYXBpL0hUTUxBbmNob3JFbGVtZW50Lmh0bWxcbiAqXG4gKiBJbXBsZW1lbnRhdGlvbiBOb3RlcyBmb3IgSUVcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogSUUgPj0gOCBhbmQgPD0gMTAgbm9ybWFsaXplcyB0aGUgVVJMIHdoZW4gYXNzaWduZWQgdG8gdGhlIGFuY2hvciBub2RlIHNpbWlsYXIgdG8gdGhlIG90aGVyXG4gKiBicm93c2Vycy4gIEhvd2V2ZXIsIHRoZSBwYXJzZWQgY29tcG9uZW50cyB3aWxsIG5vdCBiZSBzZXQgaWYgdGhlIFVSTCBhc3NpZ25lZCBkaWQgbm90IHNwZWNpZnlcbiAqIHRoZW0uICAoZS5nLiBpZiB5b3UgYXNzaWduIGEuaHJlZiA9IFwiZm9vXCIsIHRoZW4gYS5wcm90b2NvbCwgYS5ob3N0LCBldGMuIHdpbGwgYmUgZW1wdHkuKSAgV2VcbiAqIHdvcmsgYXJvdW5kIHRoYXQgYnkgcGVyZm9ybWluZyB0aGUgcGFyc2luZyBpbiBhIDJuZCBzdGVwIGJ5IHRha2luZyBhIHByZXZpb3VzbHkgbm9ybWFsaXplZFxuICogVVJMIChlLmcuIGJ5IGFzc2lnbmluZyB0byBhLmhyZWYpIGFuZCBhc3NpZ25pbmcgaXQgYS5ocmVmIGFnYWluLiAgVGhpcyBjb3JyZWN0bHkgcG9wdWxhdGVzIHRoZVxuICogcHJvcGVydGllcyBzdWNoIGFzIHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCwgZXRjLlxuICpcbiAqIElFNyBkb2VzIG5vdCBub3JtYWxpemUgdGhlIFVSTCB3aGVuIGFzc2lnbmVkIHRvIGFuIGFuY2hvciBub2RlLiAgKEFwcGFyZW50bHksIGl0IGRvZXMsIGlmIG9uZVxuICogdXNlcyB0aGUgaW5uZXIgSFRNTCBhcHByb2FjaCB0byBhc3NpZ24gdGhlIFVSTCBhcyBwYXJ0IG9mIGFuIEhUTUwgc25pcHBldCAtXG4gKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80NzI3MjkpICBIb3dldmVyLCBzZXR0aW5nIGltZ1tzcmNdIGRvZXMgbm9ybWFsaXplIHRoZSBVUkwuXG4gKiBVbmZvcnR1bmF0ZWx5LCBzZXR0aW5nIGltZ1tzcmNdIHRvIHNvbWV0aGluZyBsaWtlIFwiamF2YXNjcmlwdDpmb29cIiBvbiBJRSB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuICogU2luY2UgdGhlIHByaW1hcnkgdXNhZ2UgZm9yIG5vcm1hbGl6aW5nIFVSTHMgaXMgdG8gc2FuaXRpemUgc3VjaCBVUkxzLCB3ZSBjYW4ndCB1c2UgdGhhdFxuICogbWV0aG9kIGFuZCBJRSA8IDggaXMgdW5zdXBwb3J0ZWQuXG4gKlxuICogUmVmZXJlbmNlczpcbiAqICAgaHR0cDovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEFuY2hvckVsZW1lbnRcbiAqICAgaHR0cDovL3d3dy5hcHRhbmEuY29tL3JlZmVyZW5jZS9odG1sL2FwaS9IVE1MQW5jaG9yRWxlbWVudC5odG1sXG4gKiAgIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL3B1bGwvMjkwMlxuICogICBodHRwOi8vamFtZXMucGFkb2xzZXkuY29tL2phdmFzY3JpcHQvcGFyc2luZy11cmxzLXdpdGgtdGhlLWRvbS9cbiAqXG4gKiBAa2luZCBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZC5cbiAqIEBkZXNjcmlwdGlvbiBOb3JtYWxpemVzIGFuZCBwYXJzZXMgYSBVUkwuXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBSZXR1cm5zIHRoZSBub3JtYWxpemVkIFVSTCBhcyBhIGRpY3Rpb25hcnkuXG4gKlxuICogICB8IG1lbWJlciBuYW1lICAgfCBEZXNjcmlwdGlvbiAgICB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLXxcbiAqICAgfCBocmVmICAgICAgICAgIHwgQSBub3JtYWxpemVkIHZlcnNpb24gb2YgdGhlIHByb3ZpZGVkIFVSTCBpZiBpdCB3YXMgbm90IGFuIGFic29sdXRlIFVSTCB8XG4gKiAgIHwgcHJvdG9jb2wgICAgICB8IFRoZSBwcm90b2NvbCBpbmNsdWRpbmcgdGhlIHRyYWlsaW5nIGNvbG9uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogICB8IGhvc3QgICAgICAgICAgfCBUaGUgaG9zdCBhbmQgcG9ydCAoaWYgdGhlIHBvcnQgaXMgbm9uLWRlZmF1bHQpIG9mIHRoZSBub3JtYWxpemVkVXJsICAgIHxcbiAqICAgfCBzZWFyY2ggICAgICAgIHwgVGhlIHNlYXJjaCBwYXJhbXMsIG1pbnVzIHRoZSBxdWVzdGlvbiBtYXJrICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiAgIHwgaGFzaCAgICAgICAgICB8IFRoZSBoYXNoIHN0cmluZywgbWludXMgdGhlIGhhc2ggc3ltYm9sXG4gKiAgIHwgaG9zdG5hbWUgICAgICB8IFRoZSBob3N0bmFtZVxuICogICB8IHBvcnQgICAgICAgICAgfCBUaGUgcG9ydCwgd2l0aG91dCBcIjpcIlxuICogICB8IHBhdGhuYW1lICAgICAgfCBUaGUgcGF0aG5hbWUsIGJlZ2lubmluZyB3aXRoIFwiL1wiXG4gKlxuICovXG5cbnZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuLyoqXG4gKiBkb2N1bWVudE1vZGUgaXMgYW4gSUUtb25seSBwcm9wZXJ0eVxuICogaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2NjMTk2OTg4KHY9dnMuODUpLmFzcHhcbiAqL1xudmFyIG1zaWUgPSBkb2N1bWVudC5kb2N1bWVudE1vZGU7XG5cbmZ1bmN0aW9uIHVybFBhcnRzKHVybCkge1xuICB2YXIgaHJlZiA9IHVybDtcblxuICBpZiAobXNpZSkge1xuICAgIC8vIE5vcm1hbGl6ZSBiZWZvcmUgcGFyc2UuICBSZWZlciBJbXBsZW1lbnRhdGlvbiBOb3RlcyBvbiB3aHkgdGhpcyBpc1xuICAgIC8vIGRvbmUgaW4gdHdvIHN0ZXBzIG9uIElFLlxuICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgaHJlZik7XG4gICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gIH1cblxuICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gIHJldHVybiB7XG4gICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgIHBvcnQ6IHV0aWxpdGllcy5pc05vdEVtcHR5U3RyaW5nKHVybFBhcnNpbmdOb2RlLnBvcnQpPyB1cmxQYXJzaW5nTm9kZS5wb3J0OiA4MCxcbiAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKVxuICAgICAgPyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgOiAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICB9O1xufVxuXG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGEgcXVlcnkgc3RyaW5nIChzZWFyY2ggcGFydCBvZiBhIHVybCkgYW5kIHJldHVybnMgYSBkaWN0aW9uYXJ5IHdpdGhcbiAqIHRoZSBkaWZmZXJlbnQga2V5IHZhbHVlIHBhaXJzXG4gKiBAcGFyYW0ge3N0cmluZ30gcXMgcXVlcnlTdHJpbmdcbiAqL1xuZnVuY3Rpb24gcXVlcnlTdHJpbmdUb09iaihxcywgY29uZCkge1xuICB2YXIgcGFpcnMsIHFzT2JqO1xuXG4gIGNvbmQgPSB1dGlsaXRpZXMuaXNGdW5jdGlvbihjb25kKT8gY29uZCA6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIHFzID0gcXMudHJpbSgpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG4gIHBhaXJzID0gcXMuc3BsaXQoJyYnKTtcbiAgcXNPYmogPSB7fTtcblxuICB1dGlsaXRpZXMuZm9yRWFjaChwYWlycywgZnVuY3Rpb24gKHBhaXIpIHtcbiAgICB2YXIga2V5VmFsdWUsIGtleSwgdmFsdWU7XG4gICAgaWYgKHBhaXIgIT09ICcnKSB7XG4gICAgICBrZXlWYWx1ZSA9IHBhaXIuc3BsaXQoJz0nKTtcbiAgICAgIGtleSA9IGtleVZhbHVlWzBdO1xuICAgICAgdmFsdWUgPSBrZXlWYWx1ZVsxXTtcbiAgICAgIGlmKGNvbmQoa2V5LCB2YWx1ZSkpe1xuICAgICAgICBxc09ialtrZXldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcXNPYmo7XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuIG9iamVjdCBhbmQgc2VyaWFsaXplcyBpdCBpbnRvIGEgcXVlcnkgc3RyaW5nIHdpdGhvdXQgdGhlIGxlYWRpbmcgJz8nXG4gKiBAcGFyYW0gb2JqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBvYmpUb1F1ZXJ5U3RyaW5nKG9iaikge1xuICB2YXIgcGFpcnMgPSBbXTtcbiAgdXRpbGl0aWVzLmZvckVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgIHBhaXJzLnB1c2goa2V5ICsgJz0nICsgdmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHVybFBhcnRzOiB1cmxQYXJ0cyxcbiAgcXVlcnlTdHJpbmdUb09iajogcXVlcnlTdHJpbmdUb09iaixcbiAgb2JqVG9RdWVyeVN0cmluZzogb2JqVG9RdWVyeVN0cmluZ1xufTtcbiIsIi8qanNoaW50IHVudXNlZDpmYWxzZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBOT0RFX1RZUEVfRUxFTUVOVCA9IDE7XG52YXIgU05BS0VfQ0FTRV9SRUdFWFAgPSAvW0EtWl0vZztcbnZhciBFTUFJTF9SRUdFWFAgPSAvXlthLXowLTkhIyQlJicqK1xcLz0/Xl9ge3x9fi4tXStAW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8oXFwuW2EtejAtOV0oW2EtejAtOS1dKlthLXowLTldKT8pKyQvaTtcbi8qanNsaW50IG1heGxlbjogNTAwICovXG52YXIgSVNPODA4Nl9SRUdFWFAgPSAvXihbXFwrLV0/XFxkezR9KD8hXFxkezJ9XFxiKSkoKC0/KSgoMFsxLTldfDFbMC0yXSkoXFwzKFsxMl1cXGR8MFsxLTldfDNbMDFdKSk/fFcoWzAtNF1cXGR8NVswLTJdKSgtP1sxLTddKT98KDAwWzEtOV18MFsxLTldXFxkfFsxMl1cXGR7Mn18MyhbMC01XVxcZHw2WzEtNl0pKSkoW1RcXHNdKCgoWzAxXVxcZHwyWzAtM10pKCg6PylbMC01XVxcZCk/fDI0XFw6PzAwKShbXFwuLF1cXGQrKD8hOikpPyk/KFxcMTdbMC01XVxcZChbXFwuLF1cXGQrKT8pPyhbelpdfChbXFwrLV0pKFswMV1cXGR8MlswLTNdKTo/KFswLTVdXFxkKT8pPyk/KT8kLztcblxuXG5mdW5jdGlvbiBub29wKCl7IH1cblxuZnVuY3Rpb24gaXNOdWxsKG8pIHtcbiAgcmV0dXJuIG8gPT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZChvKXtcbiAgcmV0dXJuIG8gIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQobyl7XG4gIHJldHVybiBvID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHR5cGVvZiBzdHIgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKG51bSl7XG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gIHJldHVybiB1dGlsaXRpZXMuaXNPYmplY3Qob2JqKSAmJiBvYmoud2luZG93ID09PSBvYmo7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkoYXJyYXkpe1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKCBhcnJheSApID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5TGlrZShvYmopIHtcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB1dGlsaXRpZXMuaXNXaW5kb3cob2JqKSB8fCB1dGlsaXRpZXMuaXNGdW5jdGlvbihvYmopIHx8IHV0aWxpdGllcy5pc1VuZGVmaW5lZChvYmopKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9IG9iai5sZW5ndGg7XG5cbiAgaWYgKG9iai5ub2RlVHlwZSA9PT0gTk9ERV9UWVBFX0VMRU1FTlQgJiYgbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gdXRpbGl0aWVzLmlzU3RyaW5nKG9iaikgfHwgdXRpbGl0aWVzLmlzQXJyYXkob2JqKSB8fCBsZW5ndGggPT09IDAgfHxcbiAgICB0eXBlb2YgbGVuZ3RoID09PSAnbnVtYmVyJyAmJiBsZW5ndGggPiAwICYmIChsZW5ndGggLSAxKSBpbiBvYmo7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHN0cil7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gaXNFbXB0eVN0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHV0aWxpdGllcy5pc1N0cmluZyhzdHIpICYmIHN0ci5sZW5ndGggPT09IDA7XG59XG5cbmZ1bmN0aW9uIGlzTm90RW1wdHlTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB1dGlsaXRpZXMuaXNTdHJpbmcoc3RyKSAmJiBzdHIubGVuZ3RoICE9PSAwO1xufVxuXG5mdW5jdGlvbiBhcnJheUxpa2VPYmpUb0FycmF5KGFyZ3MpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgaXRlcmF0b3IsIGNvbnRleHQpIHtcbiAgdmFyIGtleSwgbGVuZ3RoO1xuICBpZiAob2JqKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24ob2JqKSkge1xuICAgICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIC8vIE5lZWQgdG8gY2hlY2sgaWYgaGFzT3duUHJvcGVydHkgZXhpc3RzLFxuICAgICAgICAvLyBhcyBvbiBJRTggdGhlIHJlc3VsdCBvZiBxdWVyeVNlbGVjdG9yQWxsIGlzIGFuIG9iamVjdCB3aXRob3V0IGEgaGFzT3duUHJvcGVydHkgZnVuY3Rpb25cbiAgICAgICAgaWYgKGtleSAhPT0gJ3Byb3RvdHlwZScgJiYga2V5ICE9PSAnbGVuZ3RoJyAmJiBrZXkgIT09ICduYW1lJyAmJiAoIW9iai5oYXNPd25Qcm9wZXJ0eSB8fCBvYmouaGFzT3duUHJvcGVydHkoa2V5KSkpIHtcbiAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgdmFyIGlzUHJpbWl0aXZlID0gdHlwZW9mIG9iaiAhPT0gJ29iamVjdCc7XG4gICAgICBmb3IgKGtleSA9IDAsIGxlbmd0aCA9IG9iai5sZW5ndGg7IGtleSA8IGxlbmd0aDsga2V5KyspIHtcbiAgICAgICAgaWYgKGlzUHJpbWl0aXZlIHx8IGtleSBpbiBvYmopIHtcbiAgICAgICAgICBpdGVyYXRvci5jYWxsKGNvbnRleHQsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9iai5mb3JFYWNoICYmIG9iai5mb3JFYWNoICE9PSBmb3JFYWNoKSB7XG4gICAgICBvYmouZm9yRWFjaChpdGVyYXRvciwgY29udGV4dCwgb2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIGl0ZXJhdG9yLmNhbGwoY29udGV4dCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBzbmFrZV9jYXNlKG5hbWUsIHNlcGFyYXRvcikge1xuICBzZXBhcmF0b3IgPSBzZXBhcmF0b3IgfHwgJ18nO1xuICByZXR1cm4gbmFtZS5yZXBsYWNlKFNOQUtFX0NBU0VfUkVHRVhQLCBmdW5jdGlvbihsZXR0ZXIsIHBvcykge1xuICAgIHJldHVybiAocG9zID8gc2VwYXJhdG9yIDogJycpICsgbGV0dGVyLnRvTG93ZXJDYXNlKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkRW1haWwoZW1haWwpe1xuICBpZighdXRpbGl0aWVzLmlzU3RyaW5nKGVtYWlsKSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIEVNQUlMX1JFR0VYUC50ZXN0KGVtYWlsLnRyaW0oKSk7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCAob2JqKSB7XG4gIHZhciBhcmcsIGksIGs7XG4gIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBhcmcgPSBhcmd1bWVudHNbaV07XG4gICAgZm9yIChrIGluIGFyZykge1xuICAgICAgaWYgKGFyZy5oYXNPd25Qcm9wZXJ0eShrKSkge1xuICAgICAgICBpZihpc09iamVjdChvYmpba10pICYmICFpc051bGwob2JqW2tdKSAmJiBpc09iamVjdChhcmdba10pKXtcbiAgICAgICAgICBvYmpba10gPSBleHRlbmQoe30sIG9ialtrXSwgYXJnW2tdKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgIG9ialtrXSA9IGFyZ1trXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplKHMpe1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGRlY2FwaXRhbGl6ZShzKSB7XG4gIHJldHVybiBzLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgcy5zbGljZSgxKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCB3b3JrcyB0aGUgc2FtZSB3YXkgYXJyYXkucHJvdG90eXBlLm1hcCB3b3JrcyBidXQgaWYgdGhlIHRyYW5zZm9ybWVyIHJldHVybnMgdW5kZWZpbmUsIHRoZW5cbiAqIGl0IHdvbid0IGJlIGFkZGVkIHRvIHRoZSB0cmFuc2Zvcm1lZCBBcnJheS5cbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtQXJyYXkoYXJyYXksIHRyYW5zZm9ybWVyKSB7XG4gIHZhciB0cmFuc2Zvcm1lZEFycmF5ID0gW107XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBpbmRleCl7XG4gICAgdmFyIHRyYW5zZm9ybWVkSXRlbSA9IHRyYW5zZm9ybWVyKGl0ZW0sIGluZGV4KTtcbiAgICBpZih1dGlsaXRpZXMuaXNEZWZpbmVkKHRyYW5zZm9ybWVkSXRlbSkpIHtcbiAgICAgIHRyYW5zZm9ybWVkQXJyYXkucHVzaCh0cmFuc2Zvcm1lZEl0ZW0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRyYW5zZm9ybWVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHRvRml4ZWREaWdpdHMobnVtLCBkaWdpdHMpIHtcbiAgdmFyIGZvcm1hdHRlZE51bSA9IG51bSArICcnO1xuICBkaWdpdHMgPSB1dGlsaXRpZXMuaXNOdW1iZXIoZGlnaXRzKSA/IGRpZ2l0cyA6IDA7XG4gIG51bSA9IHV0aWxpdGllcy5pc051bWJlcihudW0pID8gbnVtIDogcGFyc2VJbnQobnVtLCAxMCk7XG4gIGlmKHV0aWxpdGllcy5pc051bWJlcihudW0pICYmICFpc05hTihudW0pKXtcbiAgICBmb3JtYXR0ZWROdW0gPSBudW0gKyAnJztcbiAgICB3aGlsZShmb3JtYXR0ZWROdW0ubGVuZ3RoIDwgZGlnaXRzKSB7XG4gICAgICBmb3JtYXR0ZWROdW0gPSAnMCcgKyBmb3JtYXR0ZWROdW07XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXR0ZWROdW07XG4gIH1cbiAgcmV0dXJuIE5hTiArICcnO1xufVxuXG5mdW5jdGlvbiB0aHJvdHRsZShjYWxsYmFjaywgZGVsYXkpIHtcbiAgdmFyIHByZXZpb3VzQ2FsbCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gKGRlbGF5ICsgMSk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGlmICgodGltZSAtIHByZXZpb3VzQ2FsbCkgPj0gZGVsYXkpIHtcbiAgICAgIHByZXZpb3VzQ2FsbCA9IHRpbWU7XG4gICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UgKGNhbGxiYWNrLCB3YWl0KSB7XG4gIHZhciB0aW1lb3V0SWQ7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpe1xuICAgIGlmKHRpbWVvdXRJZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgfVxuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB0aW1lb3V0SWQgPSB1bmRlZmluZWQ7XG4gICAgfSwgd2FpdCk7XG4gIH07XG59XG5cbi8vIGEgZnVuY3Rpb24gZGVzaWduZWQgdG8gYmxvdyB1cCB0aGUgc3RhY2sgaW4gYSBuYWl2ZSB3YXlcbi8vIGJ1dCBpdCBpcyBvayBmb3IgdmlkZW9KcyBjaGlsZHJlbiBjb21wb25lbnRzXG5mdW5jdGlvbiB0cmVlU2VhcmNoKHJvb3QsIGdldENoaWxkcmVuLCBmb3VuZCl7XG4gIHZhciBjaGlsZHJlbiA9IGdldENoaWxkcmVuKHJvb3QpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKXtcbiAgICBpZiAoZm91bmQoY2hpbGRyZW5baV0pKSB7XG4gICAgICByZXR1cm4gY2hpbGRyZW5baV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdmFyIGVsID0gdHJlZVNlYXJjaChjaGlsZHJlbltpXSwgZ2V0Q2hpbGRyZW4sIGZvdW5kKTtcbiAgICAgIGlmIChlbCl7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZWNob0ZuKHZhbCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB2YWw7XG4gIH07XG59XG5cbi8vTm90ZTogU3VwcG9ydGVkIGZvcm1hdHMgY29tZSBmcm9tIGh0dHA6Ly93d3cudzMub3JnL1RSL05PVEUtZGF0ZXRpbWVcbi8vIGFuZCB0aGUgaXNvODYwMSByZWdleCBjb21lcyBmcm9tIGh0dHA6Ly93d3cucGVsYWdvZGVzaWduLmNvbS9ibG9nLzIwMDkvMDUvMjAvaXNvLTg2MDEtZGF0ZS12YWxpZGF0aW9uLXRoYXQtZG9lc250LXN1Y2svXG5mdW5jdGlvbiBpc0lTTzg2MDEodmFsdWUpIHtcbiAgaWYodXRpbGl0aWVzLmlzTnVtYmVyKHZhbHVlKSl7XG4gICAgdmFsdWUgPSB2YWx1ZSArICcnOyAgLy93ZSBtYWtlIHN1cmUgdGhhdCB3ZSBhcmUgd29ya2luZyB3aXRoIHN0cmluZ3NcbiAgfVxuXG4gIGlmKCF1dGlsaXRpZXMuaXNTdHJpbmcodmFsdWUpKXtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gSVNPODA4Nl9SRUdFWFAudGVzdCh2YWx1ZS50cmltKCkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiB0aGUgQnJvd3NlciBpcyBJRTkgYW5kIGJlbG93XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIHZlcnNpb24gPSB1dGlsaXRpZXMuZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24obmF2aWdhdG9yKTtcbiAgaWYgKHZlcnNpb24gPT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHZlcnNpb24gPCAxMDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB2ZXJzaW9uIG9mIEludGVybmV0IEV4cGxvcmVyIG9yIGEgLTEgKGluZGljYXRpbmcgdGhlIHVzZSBvZiBhbm90aGVyIGJyb3dzZXIpLlxuICogU291cmNlOiBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM3NTA5KHY9dnMuODUpLmFzcHhcbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSB2ZXJzaW9uIG9mIEludGVybmV0IEV4cGxvcmVyIG9yIGEgLTEgKGluZGljYXRpbmcgdGhlIHVzZSBvZiBhbm90aGVyIGJyb3dzZXIpLlxuICovXG5mdW5jdGlvbiBnZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbihuYXZpZ2F0b3IpIHtcbiAgdmFyIHJ2ID0gLTE7XG5cbiAgaWYgKG5hdmlnYXRvci5hcHBOYW1lID09ICdNaWNyb3NvZnQgSW50ZXJuZXQgRXhwbG9yZXInKSB7XG4gICAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKFwiTVNJRSAoWzAtOV17MSx9W1xcLjAtOV17MCx9KVwiKTtcbiAgICB2YXIgcmVzID0gcmUuZXhlYyh1YSk7XG4gICAgaWYgKHJlcyAhPT0gbnVsbCkge1xuICAgICAgcnYgPSBwYXJzZUZsb2F0KHJlc1sxXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJ2O1xufVxuXG4vKioqIE1vYmlsZSBVdGlsaXR5IGZ1bmN0aW9ucyAqKiovXG5mdW5jdGlvbiBpc0lEZXZpY2UoKSB7XG4gIHJldHVybiAvaVAoaG9uZXxhZCkvLnRlc3QodXRpbGl0aWVzLl9VQSk7XG59XG5cbmZ1bmN0aW9uIGlzTW9iaWxlKCkge1xuICByZXR1cm4gL2lQKGhvbmV8YWR8b2QpfEFuZHJvaWR8V2luZG93cyBQaG9uZS8udGVzdCh1dGlsaXRpZXMuX1VBKTtcbn1cblxuZnVuY3Rpb24gaXNJUGhvbmUoKSB7XG4gIHJldHVybiAvaVAoaG9uZXxvZCkvLnRlc3QodXRpbGl0aWVzLl9VQSk7XG59XG5cbmZ1bmN0aW9uIGlzQW5kcm9pZCgpIHtcbiAgcmV0dXJuIC9BbmRyb2lkLy50ZXN0KHV0aWxpdGllcy5fVUEpO1xufVxuXG52YXIgdXRpbGl0aWVzID0ge1xuICBfVUE6IG5hdmlnYXRvci51c2VyQWdlbnQsXG4gIG5vb3A6IG5vb3AsXG4gIGlzTnVsbDogaXNOdWxsLFxuICBpc0RlZmluZWQ6IGlzRGVmaW5lZCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNXaW5kb3c6IGlzV2luZG93LFxuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5TGlrZTogaXNBcnJheUxpa2UsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNFbXB0eVN0cmluZzogaXNFbXB0eVN0cmluZyxcbiAgaXNOb3RFbXB0eVN0cmluZzogaXNOb3RFbXB0eVN0cmluZyxcbiAgYXJyYXlMaWtlT2JqVG9BcnJheTogYXJyYXlMaWtlT2JqVG9BcnJheSxcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgc25ha2VfY2FzZTogc25ha2VfY2FzZSxcbiAgaXNWYWxpZEVtYWlsOiBpc1ZhbGlkRW1haWwsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICBjYXBpdGFsaXplOiBjYXBpdGFsaXplLFxuICBkZWNhcGl0YWxpemU6IGRlY2FwaXRhbGl6ZSxcbiAgdHJhbnNmb3JtQXJyYXk6IHRyYW5zZm9ybUFycmF5LFxuICB0b0ZpeGVkRGlnaXRzOiB0b0ZpeGVkRGlnaXRzLFxuICB0aHJvdHRsZTogdGhyb3R0bGUsXG4gIGRlYm91bmNlOiBkZWJvdW5jZSxcbiAgdHJlZVNlYXJjaDogdHJlZVNlYXJjaCxcbiAgZWNob0ZuOiBlY2hvRm4sXG4gIGlzSVNPODYwMTogaXNJU084NjAxLFxuICBpc09sZElFOiBpc09sZElFLFxuICBnZXRJbnRlcm5ldEV4cGxvcmVyVmVyc2lvbjogZ2V0SW50ZXJuZXRFeHBsb3JlclZlcnNpb24sXG4gIGlzSURldmljZTogaXNJRGV2aWNlLFxuICBpc01vYmlsZTogaXNNb2JpbGUsXG4gIGlzSVBob25lOiBpc0lQaG9uZSxcbiAgaXNBbmRyb2lkOiBpc0FuZHJvaWRcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gdXRpbGl0aWVzOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0eUZ1bmN0aW9ucycpO1xuXG52YXIgeG1sID0ge307XG5cbnhtbC5zdHJUb1hNTERvYyA9IGZ1bmN0aW9uIHN0clRvWE1MRG9jKHN0cmluZ0NvbnRhaW5pbmdYTUxTb3VyY2Upe1xuICAvL0lFIDhcbiAgaWYodHlwZW9mIHdpbmRvdy5ET01QYXJzZXIgPT09ICd1bmRlZmluZWQnKXtcbiAgICB2YXIgeG1sRG9jdW1lbnQgPSBuZXcgQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTERPTScpO1xuICAgIHhtbERvY3VtZW50LmFzeW5jID0gZmFsc2U7XG4gICAgeG1sRG9jdW1lbnQubG9hZFhNTChzdHJpbmdDb250YWluaW5nWE1MU291cmNlKTtcbiAgICByZXR1cm4geG1sRG9jdW1lbnQ7XG4gIH1cblxuICByZXR1cm4gcGFyc2VTdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSk7XG5cbiAgZnVuY3Rpb24gcGFyc2VTdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSl7XG4gICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICB2YXIgcGFyc2VkRG9jdW1lbnQ7XG5cbiAgICAvL05vdGU6IFRoaXMgdHJ5IGNhdGNoIGlzIHRvIGRlYWwgd2l0aCB0aGUgZmFjdCB0aGF0IG9uIElFIHBhcnNlci5wYXJzZUZyb21TdHJpbmcgZG9lcyB0aHJvdyBhbiBlcnJvciBidXQgdGhlIHJlc3Qgb2YgdGhlIGJyb3dzZXJzIGRvbid0LlxuICAgIHRyeSB7XG4gICAgICBwYXJzZWREb2N1bWVudCA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSwgXCJhcHBsaWNhdGlvbi94bWxcIik7XG5cbiAgICAgIGlmKGlzUGFyc2VFcnJvcihwYXJzZWREb2N1bWVudCkgfHwgdXRpbGl0aWVzLmlzRW1wdHlTdHJpbmcoc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSkpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICAgIH1cbiAgICB9Y2F0Y2goZSl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ4bWwuc3RyVG9YTUxET0M6IEVycm9yIHBhcnNpbmcgdGhlIHN0cmluZzogJ1wiICsgc3RyaW5nQ29udGFpbmluZ1hNTFNvdXJjZSArIFwiJ1wiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VkRG9jdW1lbnQ7XG4gIH1cblxuICBmdW5jdGlvbiBpc1BhcnNlRXJyb3IocGFyc2VkRG9jdW1lbnQpIHtcbiAgICB0cnkgeyAvLyBwYXJzZXIgYW5kIHBhcnNlcmVycm9yTlMgY291bGQgYmUgY2FjaGVkIG9uIHN0YXJ0dXAgZm9yIGVmZmljaWVuY3lcbiAgICAgIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCksXG4gICAgICAgIGVycm9uZW91c1BhcnNlID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZygnSU5WQUxJRCcsICd0ZXh0L3htbCcpLFxuICAgICAgICBwYXJzZXJlcnJvck5TID0gZXJyb25lb3VzUGFyc2UuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKVswXS5uYW1lc3BhY2VVUkk7XG5cbiAgICAgIGlmIChwYXJzZXJlcnJvck5TID09PSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcpIHtcbiAgICAgICAgLy8gSW4gUGhhbnRvbUpTIHRoZSBwYXJzZWVycm9yIGVsZW1lbnQgZG9lc24ndCBzZWVtIHRvIGhhdmUgYSBzcGVjaWFsIG5hbWVzcGFjZSwgc28gd2UgYXJlIGp1c3QgZ3Vlc3NpbmcgaGVyZSA6KFxuICAgICAgICByZXR1cm4gcGFyc2VkRG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGggPiAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFyc2VkRG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWVOUyhwYXJzZXJlcnJvck5TLCAncGFyc2VyZXJyb3InKS5sZW5ndGggPiAwO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vTm90ZSBvbiBJRSBwYXJzZVN0cmluZyB0aHJvd3MgYW4gZXJyb3IgYnkgaXRzZWxmIGFuZCBpdCB3aWxsIG5ldmVyIHJlYWNoIHRoaXMgY29kZS4gQmVjYXVzZSBpdCB3aWxsIGhhdmUgZmFpbGVkIGJlZm9yZVxuICAgIH1cbiAgfVxufTtcblxueG1sLnBhcnNlVGV4dCA9IGZ1bmN0aW9uIHBhcnNlVGV4dCAoc1ZhbHVlKSB7XG4gIGlmICgvXlxccyokLy50ZXN0KHNWYWx1ZSkpIHsgcmV0dXJuIG51bGw7IH1cbiAgaWYgKC9eKD86dHJ1ZXxmYWxzZSkkL2kudGVzdChzVmFsdWUpKSB7IHJldHVybiBzVmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0cnVlXCI7IH1cbiAgaWYgKGlzRmluaXRlKHNWYWx1ZSkpIHsgcmV0dXJuIHBhcnNlRmxvYXQoc1ZhbHVlKTsgfVxuICBpZiAodXRpbGl0aWVzLmlzSVNPODYwMShzVmFsdWUpKSB7IHJldHVybiBuZXcgRGF0ZShzVmFsdWUpOyB9XG4gIHJldHVybiBzVmFsdWUudHJpbSgpO1xufTtcblxueG1sLkpYT05UcmVlID0gZnVuY3Rpb24gSlhPTlRyZWUgKG9YTUxQYXJlbnQpIHtcbiAgdmFyIHBhcnNlVGV4dCA9IHhtbC5wYXJzZVRleHQ7XG5cbiAgLy9UaGUgZG9jdW1lbnQgb2JqZWN0IGlzIGFuIGVzcGVjaWFsIG9iamVjdCB0aGF0IGl0IG1heSBtaXNzIHNvbWUgZnVuY3Rpb25zIG9yIGF0dHJzIGRlcGVuZGluZyBvbiB0aGUgYnJvd3Nlci5cbiAgLy9UbyBwcmV2ZW50IHRoaXMgcHJvYmxlbSB3aXRoIGNyZWF0ZSB0aGUgSlhPTlRyZWUgdXNpbmcgdGhlIHJvb3QgY2hpbGROb2RlIHdoaWNoIGlzIGEgZnVsbHkgZmxlc2hlZCBub2RlIG9uIGFsbCBzdXBwb3J0ZWRcbiAgLy9icm93c2Vycy5cbiAgaWYob1hNTFBhcmVudC5kb2N1bWVudEVsZW1lbnQpe1xuICAgIHJldHVybiBuZXcgeG1sLkpYT05UcmVlKG9YTUxQYXJlbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgfVxuXG4gIGlmIChvWE1MUGFyZW50Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIHZhciBzQ29sbGVjdGVkVHh0ID0gXCJcIjtcbiAgICBmb3IgKHZhciBvTm9kZSwgc1Byb3AsIHZDb250ZW50LCBuSXRlbSA9IDA7IG5JdGVtIDwgb1hNTFBhcmVudC5jaGlsZE5vZGVzLmxlbmd0aDsgbkl0ZW0rKykge1xuICAgICAgb05vZGUgPSBvWE1MUGFyZW50LmNoaWxkTm9kZXMuaXRlbShuSXRlbSk7XG4gICAgICAvKmpzaGludCBiaXR3aXNlOiBmYWxzZSovXG4gICAgICBpZiAoKG9Ob2RlLm5vZGVUeXBlIC0gMSB8IDEpID09PSAzKSB7IHNDb2xsZWN0ZWRUeHQgKz0gb05vZGUubm9kZVR5cGUgPT09IDMgPyBvTm9kZS5ub2RlVmFsdWUudHJpbSgpIDogb05vZGUubm9kZVZhbHVlOyB9XG4gICAgICBlbHNlIGlmIChvTm9kZS5ub2RlVHlwZSA9PT0gMSAmJiAhb05vZGUucHJlZml4KSB7XG4gICAgICAgIHNQcm9wID0gdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShvTm9kZS5ub2RlTmFtZSk7XG4gICAgICAgIHZDb250ZW50ID0gbmV3IHhtbC5KWE9OVHJlZShvTm9kZSk7XG4gICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHNQcm9wKSkge1xuICAgICAgICAgIGlmICh0aGlzW3NQcm9wXS5jb25zdHJ1Y3RvciAhPT0gQXJyYXkpIHsgdGhpc1tzUHJvcF0gPSBbdGhpc1tzUHJvcF1dOyB9XG4gICAgICAgICAgdGhpc1tzUHJvcF0ucHVzaCh2Q29udGVudCk7XG4gICAgICAgIH0gZWxzZSB7IHRoaXNbc1Byb3BdID0gdkNvbnRlbnQ7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHNDb2xsZWN0ZWRUeHQpIHsgdGhpcy5rZXlWYWx1ZSA9IHBhcnNlVGV4dChzQ29sbGVjdGVkVHh0KTsgfVxuICB9XG5cbiAgLy9JRTggU3R1cGlkIGZpeFxuICB2YXIgaGFzQXR0ciA9IHR5cGVvZiBvWE1MUGFyZW50Lmhhc0F0dHJpYnV0ZXMgPT09ICd1bmRlZmluZWQnPyBvWE1MUGFyZW50LmF0dHJpYnV0ZXMubGVuZ3RoID4gMDogb1hNTFBhcmVudC5oYXNBdHRyaWJ1dGVzKCk7XG4gIGlmIChoYXNBdHRyKSB7XG4gICAgdmFyIG9BdHRyaWI7XG4gICAgZm9yICh2YXIgbkF0dHJpYiA9IDA7IG5BdHRyaWIgPCBvWE1MUGFyZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBuQXR0cmliKyspIHtcbiAgICAgIG9BdHRyaWIgPSBvWE1MUGFyZW50LmF0dHJpYnV0ZXMuaXRlbShuQXR0cmliKTtcbiAgICAgIHRoaXNbXCJAXCIgKyB1dGlsaXRpZXMuZGVjYXBpdGFsaXplKG9BdHRyaWIubmFtZSldID0gcGFyc2VUZXh0KG9BdHRyaWIudmFsdWUudHJpbSgpKTtcbiAgICB9XG4gIH1cbn07XG5cbnhtbC5KWE9OVHJlZS5wcm90b3R5cGUuYXR0ciA9IGZ1bmN0aW9uKGF0dHIpIHtcbiAgcmV0dXJuIHRoaXNbJ0AnICsgdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShhdHRyKV07XG59O1xuXG54bWwudG9KWE9OVHJlZSA9IGZ1bmN0aW9uIHRvSlhPTlRyZWUoeG1sU3RyaW5nKXtcbiAgdmFyIHhtbERvYyA9IHhtbC5zdHJUb1hNTERvYyh4bWxTdHJpbmcpO1xuICByZXR1cm4gbmV3IHhtbC5KWE9OVHJlZSh4bWxEb2MpO1xufTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gZXh0cmFjdCB0aGUga2V5dmFsdWUgb2YgYSBKWE9OVHJlZSBvYmpcbiAqXG4gKiBAcGFyYW0geG1sT2JqIHtKWE9OVHJlZX1cbiAqIHJldHVybiB0aGUga2V5IHZhbHVlIG9yIHVuZGVmaW5lZDtcbiAqL1xueG1sLmtleVZhbHVlID0gZnVuY3Rpb24gZ2V0S2V5VmFsdWUoeG1sT2JqKSB7XG4gIGlmKHhtbE9iail7XG4gICAgcmV0dXJuIHhtbE9iai5rZXlWYWx1ZTtcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxueG1sLmF0dHIgPSBmdW5jdGlvbiBnZXRBdHRyVmFsdWUoeG1sT2JqLCBhdHRyKSB7XG4gIGlmKHhtbE9iaikge1xuICAgIHJldHVybiB4bWxPYmpbJ0AnICsgdXRpbGl0aWVzLmRlY2FwaXRhbGl6ZShhdHRyKV07XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbnhtbC5lbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGVYTUwoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmYXBvczsnKTtcbn07XG5cbnhtbC5kZWNvZGUgPSBmdW5jdGlvbiBkZWNvZGVYTUwoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvJmFwb3M7L2csIFwiJ1wiKVxuICAgIC5yZXBsYWNlKC8mcXVvdDsvZywgJ1wiJylcbiAgICAucmVwbGFjZSgvJmd0Oy9nLCAnPicpXG4gICAgLnJlcGxhY2UoLyZsdDsvZywgJzwnKVxuICAgIC5yZXBsYWNlKC8mYW1wOy9nLCAnJicpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB4bWw7IiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuL3BsdWdpbi9jb21wb25lbnRzL2Fkcy1sYWJlbF81Jyk7XG5yZXF1aXJlKCcuL3BsdWdpbi9jb21wb25lbnRzL2JsYWNrLXBvc3Rlcl81Jyk7XG5cbnZhciB2aWRlb0pzVkFTVCA9IHJlcXVpcmUoJy4vcGx1Z2luL3ZpZGVvanMudmFzdCcpO1xuXG52aWRlb2pzLnBsdWdpbigndmFzdENsaWVudCcsIHZpZGVvSnNWQVNUKTtcbiJdfQ==
