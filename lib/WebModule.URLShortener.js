(function(global) {
"use strict";

// --- dependency modules ----------------------------------

// --- define / local variables ----------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

// --- class / interfaces ----------------------------------
function URLShortener() { // @ret this
//{@dev
    $args(URLShortener, arguments);
//}@dev
}

//{@dev
URLShortener["repository"] = "https://github.com/legokichi/WebModule.URLShortener.js"; // GitHub repository URL. http://git.io/Help
//}@dev

URLShortener["prototype"]["shorten"] = URLShortener_shorten; // URLShortener#shorten(url:URLString, callback:Function):void
URLShortener["prototype"]["expand"]  = URLShortener_expand;  // URLShortener#expand(url:URLString, callback:Function):void

// --- implements ------------------------------------------
function URLShortener_shorten(longUrl,    // @arg URLString
                              callback) { // @arg Function - callback(err:Error|null, str:String):void
                                          // @ret void
//{@dev
    $args(URLShortener_shorten, arguments);
//}@dev
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        if (200 <= xhr["status"] && xhr["status"] < 300) {
            //{@dev
            console.info(JSON.stringify(xhr["response"]));
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
    xhr.open('POST', 'https://www.googleapis.com/urlshortener/v1/url', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = "json";
    xhr.send(JSON.stringify({'longUrl': longUrl}));
}

function URLShortener_expand(shortUrl,   // @arg URLString
                             callback) { // @arg Function - callback(err:Error|null, str:String):void
                                         // @ret void
//{@dev
    $args(URLShortener_expand, arguments);
//}@dev
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function() {
        if (200 <= xhr["status"] && xhr["status"] < 300) {
            //{@dev
            console.info(JSON.stringify(xhr["response"]));
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
    xhr.open("GET", "https://www.googleapis.com/urlshortener/v1/url?shortUrl=" + shortUrl);
    xhr.responseType = "json";
    xhr.send();
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
    module["exports"] = URLShortener;
}

var namespace = "WebModule";
global[namespace] = global[namespace] || {};
global[namespace]["URLShortener" in global ? "URLShortener_" : "URLShortener"] = URLShortener;　// switch module.

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule
