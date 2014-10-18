# WMURLShortener.js [![Build Status](https://api.travis-ci.org/duxca/WMURLShortener.js.png)](http://travis-ci.org/duxca/WMURLShortener.js)

[![npm](https://nodei.co/npm/duxca.wmurlshortener.js.png?downloads=true&stars=true)](https://nodei.co/npm/duxca.wmurlshortener.js/)

URL Shortener using [goo.gl](http://goo.gl/).

## Document

- [WMURLShortener.js wiki](https://github.com/duxca/WMURLShortener.js/wiki/WMURLShortener)
- [Development](https://github.com/uupaa/WebModule/wiki/Development)
- [WebModule](https://github.com/uupaa/WebModule) ([Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html))


## How to use

### Browser

```js
<script src="lib/WMURLShortener.js"></script>
<script>
new WMURLShortener().shorten(longUrl, function(err, shortUrl){
  console.log(shortUrl);
});
</script>
```

### WebWorkers

```js
importScripts("lib/WMURLShortener.js");

new WMURLShortener().shorten(longUrl, function(err, shortUrl){
  console.log(shortUrl);
});
```

### Node.js

```js
var WMURLShortener = require("lib/duxca.wmurlshortener.js");

new WMURLShortener().shorten(longUrl, function(err, shortUrl){
  console.log(shortUrl);
});
```
