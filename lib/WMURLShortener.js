(function(global) {
"use strict";

// --- dependency modules ----------------------------------
var XMLHttpRequest = global["XHRProxy"] || require("uupaa.xhrproxy.js");
var JSON           = global["JSON"];

// --- define / local variables ----------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

// --- class / interfaces ----------------------------------
function WMURLShortener() { // @ret this
//{@dev
    $args(WMURLShortener, arguments);
//}@dev
}

//{@dev
WMURLShortener["repository"] = "https://github.com/duxca/WMURLShortener.js"; // GitHub repository URL. http://git.io/Help
//}@dev

WMURLShortener["prototype"]["shorten"] = WMURLShortener_shorten; // WMURLShortener#shorten(url:URLString, callback:Function):void
WMURLShortener["prototype"]["expand"]  = WMURLShortener_expand;  // WMURLShortener#expand(url:URLString, callback:Function):void

// --- implements ------------------------------------------
function WMURLShortener_shorten(longUrl,    // @arg URLString
                              callback) { // @arg Function - callback(err:Error|null, str:String):void
                                          // @ret void
//{@dev
    $args(WMURLShortener_shorten, arguments);
//}@dev
    var xhr = new XMLHttpRequest();
    xhr["addEventListener"]("load", function() {
        if (200 <= xhr["status"] && xhr["status"] < 300) {
            //{@dev
            console.info(JSON["stringify"](xhr["response"]));
            //}@dev
            if(typeof xhr["response"]["error"] === "undefined"){
                callback(null, xhr["response"]["id"]);
            }else{
                callback(new Error(xhr["response"]["error"]["message"]), "");
            }
        } else {
            callback(new Error(xhr["status"]), "");
        }
    });
    xhr["open"]('POST', 'https://www.googleapis.com/urlshortener/v1/url', true);
    xhr["setRequestHeader"]('Content-Type', 'application/json');
    xhr["responseType"] = "json";
    xhr["send"](JSON["stringify"]({'longUrl': longUrl}));
}

function WMURLShortener_expand(shortUrl,   // @arg URLString
                             callback) { // @arg Function - callback(err:Error|null, str:String):void
                                         // @ret void
//{@dev
    $args(WMURLShortener_expand, arguments);
//}@dev
    var xhr = new XMLHttpRequest();
    xhr["addEventListener"]("load", function() {
        if (200 <= xhr["status"] && xhr["status"] < 300) {
            //{@dev
            console.info(JSON["stringify"](xhr["response"]));
            //}@dev
            if(typeof xhr["response"]["error"] === "undefined"){
              callback(null, xhr["response"]["longUrl"]);
            }else{
              callback(new Error(xhr["response"]["error"]["message"]), "");
            }
        } else {
            callback(new Error(xhr["status"]), "");
        }
    });
    xhr["open"]("GET", "https://www.googleapis.com/urlshortener/v1/url?shortUrl=" + shortUrl);
    xhr["responseType"] = "json";
    xhr["send"]();
}

// --- validate / assertions -------------------------------
//{@dev
//function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
//function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------
if ("process" in global) {
    module["exports"] = WMURLShortener;
}

global["WMURLShortener" in global ? "WMURLShortener_" : "WMURLShortener"] = WMURLShortener;　// switch module.

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule
