# URLShortener.js [![Build Status](https://api.travis-ci.org/legokichi/URLShortener.js.png)](http://travis-ci.org/legokichi/URLShortener.js)

[![npm](https://nodei.co/npm/legokichi.urlshortener.js.png?downloads=true&stars=true)](https://nodei.co/npm/legokichi.urlshortener.js/)

URL Shortener using [goo.gl](http://goo.gl/).

## Document

- [URLShortener.js wiki](https://github.com/legokichi/URLShortener.js/wiki/URLShortener)
- [Development](https://github.com/uupaa/WebModule/wiki/Development)
- [WebModule](https://github.com/uupaa/WebModule) ([Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html))


## How to use

### Browser

```js
<script src="lib/URLShortener.js">
<script>
new URLShortener().shorten(longUrl, function(err, shortUrl){
  console.log(shortUrl);
});
</script>
```

### WebWorkers

```js
importScripts("lib/URLShortener.js");

new URLShortener().shorten(longUrl, function(err, shortUrl){
  console.log(shortUrl);
});
```
