# URLShortener.js [![Build Status](https://travis-ci.org/legokichi/URLShortener.js.png)](http://travis-ci.org/legokichi/URLShortener.js)

[![npm](https://nodei.co/npm/uupaa.urlshortener.js.png?downloads=true&stars=true)](https://nodei.co/npm/legokichi.urlshortener.js/)

URL Shortener using [goo.gl](http://goo.gl/).

## Document

- [URLShortener.js wiki](https://github.com/legokichi/URLShortener.js/wiki/URLShortener)
- [Development](https://github.com/legokichi/WebModule/wiki/Development)
- [WebModule](https://github.com/legokichi/WebModule) ([Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html))


## How to use

### Browser

```js
<script src="lib/URLShortener.js">
<script>
URLShortener.short(url, function(shortURL){
  console.log(shortURL);
});
</script>
```

### WebWorkers

```js
importScripts("lib/URLShortener.js");

URLShortener.short(url, function(shortURL){
  console.log(shortURL);
});
```

### Node.js

```js
var URLShortener = require("lib/URLShortener.js");

URLShortener.short(url, function(shortURL){
  console.log(shortURL);
});
```
