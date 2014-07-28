(function(global) {
"use strict";

// --- dependency module -----------------------------------
//{@dev
//  This code block will be removed in `$ npm run build-release`. http://git.io/Minify
var Valid = global["Valid"] || require("uupaa.valid.js"); // http://git.io/Valid
//}@dev
var Proxy = global["Proxy"] || require("uupaa.proxy.js"); // https://github.com/uupaa/Proxy.js/wiki/Proxy

// --- local variable --------------------------------------

// --- define ----------------------------------------------
// --- interface -------------------------------------------
function URLShortener() { // @ret this
}

URLShortener["repository"] = "https://github.com/legokichi/URLShortener.js"; // GitHub repository URL. http://git.io/Help

URLShortener["prototype"]["shorten"] = URLShortener_shorten; // URLShortener.shorten(url:URLString, callback:Function):void
URLShortener["prototype"]["expand"]  = URLShortener_expand;  // URLShortener.expand(url:URLString, callback:Function):void

// --- implement -------------------------------------------
function URLShortener_shorten(longUrl,    // @arg URLString
                              callback) { // @arg Function - callback(shortUrl: URLString):void
                                          // @ret void
//{@dev
    Valid(Valid.type(longUrl, "String"), URLShortener_shorten, "longUrl");
    Valid(Valid.type(callback, "Function"), URLShortener_shorten, "callback");
//}@dev
    var xhr = new Proxy();
    xhr.on("load", function() {
        //{@dev
        console.log(xhr.response);
        //}@dev
        callback(xhr.response.id);
    });
    xhr.open('POST', 'https://www.googleapis.com/urlshortener/v1/url', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.responseType = "json";
    console.log(JSON.stringify({'longUrl': longUrl}));
    xhr.send(JSON.stringify({'longUrl': longUrl}));
}

function URLShortener_expand(shortUrl,   // @arg URLString
                             callback) { // @arg Function - callback(longUrl: URLString):void
                                         // @ret void
//{@dev
    Valid(Valid.type(shortUrl, "String"), URLShortener_shorten, "shortUrl");
    Valid(Valid.type(callback, "Function"), URLShortener_shorten, "callback");
//}@dev
    var xhr = new Proxy();
    xhr.on("load", function() {
        //{@dev
        console.log(xhr.response);
        //}@dev
        callback(xhr.response.longUrl);
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
