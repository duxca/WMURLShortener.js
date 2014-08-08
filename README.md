# URLShortener.js [![Build Status](https://api.travis-ci.org/legokichi/WebModule.URLShortener.js.png)](http://travis-ci.org/legokichi/WebModule.URLShortener.js)

[![npm](https://nodei.co/npm/legokichi.urlshortener.js.png?downloads=true&stars=true)](https://nodei.co/npm/legokichi.urlshortener.js/)

URL Shortener using [goo.gl](http://goo.gl/).

## Document

- [WebModule.URLShortener.js wiki](https://github.com/legokichi/WebModule.URLShortener.js/wiki/URLShortener)
- [Development](https://github.com/uupaa/WebModule/wiki/Development)
- [WebModule](https://github.com/uupaa/WebModule) ([Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html))


## How to use

### Browser

```js
<script src="lib/WebModule.URLShortener.js"></script>
<script>
new WebModule.URLShortener().shorten(longUrl, function(err, shortUrl){
  console.log(shortUrl);
});
</script>
```

### WebWorkers

```js
importScripts("lib/WebModule.URLShortener.js");

new WebModule.URLShortener().shorten(longUrl, function(err, shortUrl){
  console.log(shortUrl);
});
```
