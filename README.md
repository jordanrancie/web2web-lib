# web2web-lib
NPM package for the original [web2web](https://github.com/elendirx/web2web) concept.


### Install
Web2web is a browser library. Download the minified `web2web.min.js`.

Alternatively you can [browserify](http://browserify.org) it by yourself:

    npm install web2web-lib
    

### API
#### Load webpage from btc address
```javascript
var web2web = new Web2Web()
web2web.bootstrap(btcAddress)
```

#### Load webpage from torrent info hash
```javascript
var web2web = new Web2Web()
web2web.bootstrap(infoHash)
```