"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Log = /** @class */ (function () {
    function Log() {
        var _this = this;
        this.log = function (group) {
            if (group === void 0) { group = "default"; }
            return {
                info: function (message, objects, title) {
                    if (objects === void 0) { objects = null; }
                    if (title === void 0) { title = undefined; }
                    _this.callLogType(message, group, _this.info, title, objects, "info");
                },
                log: function (message, objects, title) {
                    if (objects === void 0) { objects = null; }
                    _this.callLogType(message, group, _this.consoleLog, title, objects, "log");
                },
                error: function (message, objects, title) {
                    if (objects === void 0) { objects = null; }
                    _this.callLogType(message, group, _this.error, title, objects, "error");
                },
                warn: function (message, objects, title) {
                    if (objects === void 0) { objects = null; }
                    _this.callLogType(message, group, _this.warn, title, objects, "warn");
                },
                setStyle: function (styleType, styles) {
                    Log.styles[styleType] = styles;
                }
            };
        };
        this.callLogType = function (message, group, logFunction, title, objects, functType) {
            if (title === void 0) { title = null; }
            if (objects === void 0) { objects = null; }
            if ((logFunction === _this.consoleLog || logFunction === _this.info) &&
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
                _this.logObjects(objects, functType);
            }
        };
        this.group = function () {
            console.group('%c' + Log.group, Log.styles['group']);
        };
        this.endGroup = function () {
            console.groupEnd();
        };
        this.info = function (arg) {
            if (Log.title) {
                arg = Log.title + ": " + arg;
            }
            console.info('%c' + arg, Log.styles['info']);
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
            console.log(arg, Log.styles['log']);
        };
        this.logObjects = function (objects, functType) {
            if (Array.isArray(objects)) {
                objects.forEach(function (object) {
                    _this.logObject(object, functType);
                });
            }
            else {
                _this.logObject(objects, functType);
            }
        };
        this.logObject = function (object, funcType) {
            if (Log.title) {
                console.log("%c" + Log.title, Log.styles[funcType], object);
            }
            else {
                console.log(object);
            }
        };
        Log.styles = defaultStyles;
    }
    Log.group = 'default';
    return Log;
}());
var defaultStyles = {
    info: "background-color: #bdcff3; color: black; padding: 2px 10px;" +
        " border-radius: 3px",
    log: "padding: 2px 10px; border-radius: 3px",
    warn: "background-color: #f8ffa9; color: black; padding: 2px 10px;" +
        " border-radius: 3px",
    error: "background-color: #ff9d9d; color: black; padding: 2px 10px;" +
        " border-radius: 3px",
    group: "padding: 2px 10px; border-bottom: 1px solid orange; font-size:" +
        " 18px"
};
var Logger = new Log();
exports.default = Logger.log;
