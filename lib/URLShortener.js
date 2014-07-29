(function(global) {
"use strict";

// --- dependency module -----------------------------------
//{@dev
//  This code block will be removed in `$ npm run build-release`. http://git.io/Minify
var Valid = global["Valid"] || require("uupaa.valid.js"); // http://git.io/Valid
//}@dev
var Proxy = global["Proxy"] || require("uupaa.proxy.js"); // https://github.com/uupaa/Proxy.js/wiki/Proxy

// --- local variable --------------------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

// --- define ----------------------------------------------
// --- interface -------------------------------------------
function URLShortener() { // @ret this
}

URLShortener["repository"] = "https://github.com/legokichi/URLShortener.js"; // GitHub repository URL. http://git.io/Help

URLShortener["prototype"]["shorten"] = URLShortener_shorten; // URLShortener#shorten(url:URLString, callback:Function):void
URLShortener["prototype"]["expand"]  = URLShortener_expand;  // URLShortener#expand(url:URLString, callback:Function):void

// --- implement -------------------------------------------
function URLShortener_shorten(longUrl,    // @arg URLString
                              callback) { // @arg Function - callback(err:Error|null, str:String):void
                                          // @ret void
//{@dev
    Valid(Valid.type(longUrl, "String"), URLShortener_shorten, "longUrl");
    Valid(Valid.type(callback, "Function"), URLShortener_shorten, "callback");
//}@dev
    var xhr = new Proxy();
    xhr.on("load", function() {
        if (200 <= xhr.status && xhr.status < 300) {
            //{@dev
            console.info(xhr.response);
            //}@dev
            if(typeof xhr.response.error === "undefined"){
                callback(null, xhr.response.id);
            }else{
                callback(new Error(xhr.response.error.message), "");
            }
        } else {
            callback(new Error(xhr.status), "");
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
    Valid(Valid.type(shortUrl, "String"), URLShortener_expand, "shortUrl");
    Valid(Valid.type(callback, "Function"), URLShortener_expand, "callback");
//}@dev
    var xhr = new Proxy();
    xhr.on("load", function() {
        if (200 <= xhr.status && xhr.status < 300) {
            //{@dev
            console.info(xhr.response);
            //}@dev
            if(typeof xhr.response.error === "undefined"){
              callback(null, xhr.response.longUrl);
            }else{
              callback(new Error(xhr.response.error.message), "");
            }
        } else {
            callback(new Error(xhr.status), "");
        }
    });
    xhr.open("GET", "https://www.googleapis.com/urlshortener/v1/url?shortUrl=" + shortUrl);
    xhr.responseType = "json";
    xhr.send();
}


// --- export ----------------------------------------------
if ("process" in global) {
    module["exports"] = URLShortener;
}
global["URLShortener" in global ? "URLShortener_" : "URLShortener"] = URLShortener; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule
