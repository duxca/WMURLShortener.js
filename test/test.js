var ModuleTestWMURLShortener = (function(global) {

var _runOnNode = "process" in global;
var _runOnWorker = "WorkerLocation" in global;
var _runOnBrowser = "document" in global;

return new Test("WMURLShortener", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       true,
        button:     true,
        both:       true, // test the primary module and secondary module
    }).add([
        test_WMURLShortener_shorten_success,
        test_WMURLShortener_shorten_failure,
        test_WMURLShortener_expand_success,
        test_WMURLShortener_expand_failure,
    ]).run().clone();


function test_WMURLShortener_shorten_success(test, pass, miss) {
    var originalUrl = "http://a.b/?a=0&b=1#ab";
    new WMURLShortener().shorten(originalUrl, function(err, shortUrl) {
        Valid(Valid.type(err, "Error|null"), test_WMURLShortener_shorten_success, "err");
        Valid(Valid.type(shortUrl, "String"), test_WMURLShortener_shorten_success, "shortUrl");
        if(!!err){
            test.done(miss(err.message));
        }else if(/http\:\/\/goo\.gl\/.+/.test(shortUrl)){
            test.done(pass(shortUrl));
        }else{
            test.done(miss(shortUrl));
        }
    });
}

function test_WMURLShortener_shorten_failure(test, pass, miss) {
    var originalUrl = "data:base64,aaaaaa==";
    new WMURLShortener().shorten(originalUrl, function(err, shortUrl) {
        Valid(Valid.type(err, "Error|null"), test_WMURLShortener_shorten_failure, "err");
        Valid(Valid.type(shortUrl, "String"), test_WMURLShortener_shorten_failure, "shortUrl");
        if(!!err){
            test.done(pass(err.message));
        }else{
            test.done(miss(shortUrl));
        }
    });
}

function test_WMURLShortener_expand_success(test, pass, miss) {
    var originalUrl = "http://a.b/#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    var shortUrl = "http://goo.gl/khprIK";
    new WMURLShortener().expand(shortUrl, function(err, longUrl) {
        console.log(err, longUrl);
        Valid(Valid.type(err, "Error|null"), test_WMURLShortener_expand_success, "err");
        Valid(Valid.type(longUrl, "String"), test_WMURLShortener_expand_success, "longUrl");
        if(!!err){
            test.done(miss(err.message));
        } else if (longUrl === originalUrl) {
            test.done(pass(longUrl));
        } else {
            test.done(miss(longUrl));
        }
    });
}

function test_WMURLShortener_expand_failure(test, pass, miss) {
    var originalUrl = "http://github.com/";
    new WMURLShortener().expand(originalUrl, function(err, longUrl) {
        Valid(Valid.type(err, "Error|null"), test_WMURLShortener_expand_failure, "err");
        Valid(Valid.type(longUrl, "String"), test_WMURLShortener_expand_failure, "longUrl");
        if(!!err){
            test.done(pass(err.message));
        }else{
            test.done(miss(longUrl));
        }
    });
}

})((this || 0).self || global);
