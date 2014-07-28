var ModuleTestURLShortener = (function(global) {

var _runOnNode = "process" in global;
var _runOnWorker = "WorkerLocation" in global;
var _runOnBrowser = "document" in global;

return new Test("URLShortener", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       false,
        button:     true,
        both:       true, // test the primary module and secondary module
    }).add([
        testIntegration,
    ]).run().clone();


function testIntegration(test, pass, miss) {
    var originalUrl = "http://a.b/#aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    new URLShortener().shorten(originalUrl, function(shortUrl) {
        console.log(shortUrl);
        if (/^http\:\/\/goo.gl\/[a-zA-Z0-9]{4}/.test(shortUrl)) {
            new URLShortener().expand(shortUrl, function(longUrl) {
                console.log(longUrl);
                if (longUrl === originalUrl) {
                    test.done(pass());
                } else {
                    test.done(miss());
                }
            });
        } else {
            test.done(miss());
        }
    });
};


})((this || 0).self || global);
