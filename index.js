"use strict";
exports.__esModule = true;
var Log = /** @class */ (function () {
    function Log() {
        var _this = this;
        this.log = function (group) {
            if (group === void 0) { group = "default"; }
            return {
                info: function (message, objects, title) {
                    if (objects === void 0) { objects = undefined; }
                    if (title === void 0) { title = undefined; }
                    _this.callLogType(message, group, _this.info, title, objects);
                },
                log: function (message, objects, title) {
                    if (objects === void 0) { objects = undefined; }
                    if (title === void 0) { title = undefined; }
                    _this.callLogType(message, group, _this.consoleLog, title, objects);
                },
                error: function (message, objects, title) {
                    if (objects === void 0) { objects = undefined; }
                    if (title === void 0) { title = undefined; }
                    _this.callLogType(message, group, _this.error, title, objects);
                },
                warn: function (message, objects, title) {
                    if (objects === void 0) { objects = undefined; }
                    if (title === void 0) { title = undefined; }
                    _this.callLogType(message, group, _this.warn, title, objects);
                }
            };
        };
        this.callLogType = function (message, group, logFunction, title, objects) {
            if (title === void 0) { title = null; }
            if (objects === void 0) { objects = null; }
            if (logFunction === _this.consoleLog || logFunction === _this.info &&
                process.env.NODE_ENV !== "development") {
                return;
            }
            if (group !== Log.group) {
                _this.endGroup();
                Log.group = group;
                _this.group();
            }
            if (title) {
                Log.title = title;
            }
            logFunction(message);
            if (objects) {
                _this.logObjects(objects);
            }
        };
        this.group = function () {
            console.group('%c' + Log.group, "padding: 2px 10px; border-bottom: 1px solid orange; font-size:" +
                " 18px");
        };
        this.endGroup = function () {
            console.groupEnd();
        };
        this.info = function (arg) {
            if (Log.title) {
                arg = Log.title + ": " + arg;
            }
            console.info('%c' + arg, "background-color: #bdcff3; color: black;" +
                "padding: 2px 10px; border-radius: 3px");
        };
        this.error = function (arg) {
            if (Log.title) {
                arg = Log.title + ": " + arg;
            }
            console.error(arg);
        };
        this.warn = function (arg) {
            if (Log.title) {
                arg = Log.title + ": " + arg;
            }
            console.warn(arg);
        };
        this.consoleLog = function (arg) {
            if (Log.title) {
                arg = Log.title + ": " + arg;
            }
            console.log(arg);
        };
        this.logObjects = function (objects) {
            if (Array.isArray(objects)) {
                objects.forEach(function (object) {
                    _this.logObject(object);
                });
            }
            else {
                _this.logObject(objects);
            }
        };
        this.logObject = function (object) {
            if (Log.title) {
                console.log("%c" + Log.title, "background-color:" +
                    " #e4efb0; margin-left: 2rem; color: black; border-radius:" +
                    " 3px; padding: 2px 10px", object);
            }
            else {
                console.log("%c" + object, "background-color:" +
                    " #e4efb0");
            }
        };
    }
    Log.group = 'default';
    return Log;
}());
var Logger = new Log();
exports["default"] = Logger.log;
